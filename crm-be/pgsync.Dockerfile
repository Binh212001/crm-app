FROM python:3.9

ARG WORKDIR=/pgsync
RUN mkdir $WORKDIR
RUN mkdir entrypoint
WORKDIR $WORKDIR
COPY ./data/pgsync/docker-entrypoint/runserver.sh ../entrypoint/runserver.sh
COPY ./data/pgsync/docker-entrypoint/wait-for-it.sh ../entrypoint/wait-for-it.sh
RUN pip install pgsync
ENV DATA_DIR=$WORKDIR
ENV PYTHONPATH="${PYTHONPATH}:${WORKDIR}/plugins"
RUN chmod +x ../entrypoint/wait-for-it.sh
RUN chmod +x ../entrypoint/runserver.sh
ENTRYPOINT ["../entrypoint/runserver.sh"]
