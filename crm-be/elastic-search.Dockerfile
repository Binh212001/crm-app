# Define the argument to allow dynamic versioning
ARG ES_VERSION

#Stage Tokenizer build
# Use a base image with build tools
FROM ubuntu:20.04 AS builder

# Set environment variables to avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && \
    apt-get install -y \
    git \
    cmake \
    build-essential \
    openjdk-17-jdk \
    sudo && \
    rm -rf /var/lib/apt/lists/*

# Clone the repository
RUN git clone https://github.com/papaodevelop/coccoc-tokenizer /coccoc-tokenizer

# Build the project
WORKDIR /coccoc-tokenizer
RUN mkdir build && \
    cd build && \
    cmake -DBUILD_JAVA=1 .. && \
    make install


#Stage Elasticsearch
# Use the official Elasticsearch image
FROM docker.elastic.co/elasticsearch/elasticsearch:${ES_VERSION}

# Copy lib files
COPY --from=builder /coccoc-tokenizer/build/libcoccoc_tokenizer_jni.* /usr/lib/
COPY  --from=builder /coccoc-tokenizer/build/*.dump /usr/local/share/tokenizer/dicts/
COPY  --from=builder /coccoc-tokenizer/dicts/tokenizer/ /usr/local/share/tokenizer/dicts/
COPY  --from=builder /coccoc-tokenizer/dicts/vn_lang_tool/ /usr/local/share/tokenizer/dicts/

# Switch to root user temporarily to copy files
USER root

# Change the ownership to the elasticsearch user
RUN chown -R elasticsearch:elasticsearch /usr/local/share/tokenizer/dicts
# Ensure read and execute permissions for directories and files
RUN find /usr/local/share/tokenizer/dicts -type d -exec chmod 755 {} \; \
    && find /usr/local/share/tokenizer/dicts -type f -exec chmod 644 {} \;


# Switch back to the default user (if desired)
USER elasticsearch

# Create a directory for plugins
RUN mkdir -p /tmp/plugins


# Copy all plugin ZIP files from your local machine to the container directory
COPY ./data/es/plugins/*.zip /tmp/plugins/

# Install the plugin from the ZIP file
RUN for plugin in /tmp/plugins/*.zip; do bin/elasticsearch-plugin install --batch file:$plugin; done
RUN bin/elasticsearch-plugin install analysis-icu
# Clean up by removing the plugins folder after installation
RUN rm -rf /tmp/plugins

