#!/bin/bash

# Stop the pgsync Docker container
echo "Stopping pgsync Docker container: pgsync..."
docker stop "pgsync"
if [ $? -ne 0 ]; then
  echo "Failed to stop pgsync Docker container."
  exit 1
fi

# Make sub-scripts executable
echo "Making sub-scripts executable..."
chmod +x scripts/remove-indices-es.sh
chmod +x scripts/remove-replication-slots-db.sh
chmod +x scripts/remove-pgsync-dump.sh

# Convert input to lowercase for case-insensitive comparison
INPUT=$(echo "$1" | tr '[:upper:]' '[:lower:]')

# Check if the INPUT is empty or matches "a", "all"
if [[ -z "$INPUT" || "$INPUT" == "a" || "$INPUT" == "all" ]]; then
  scripts/remove-indices-es.sh "a"
  scripts/remove-replication-slots-db.sh "a"
  scripts/remove-pgsync-dump.sh "a"
elif [[ -n "$INPUT" ]]; then
  scripts/remove-indices-es.sh "$1"
  scripts/remove-replication-slots-db.sh "$1"
  scripts/remove-pgsync-dump.sh "$1"
else
  echo "Usage: $0 [a | A | all | ALL | NAME]"
  echo "  a | A | all | ALL       : Remove all data (default)"
  echo "  name                    : Remove data for the specific name"
  exit 1
fi

echo "Script execution completed."

# Start the pgsync Docker container
echo "Starting pgsync Docker container: pgsync..."
docker start "pgsync"
if [ $? -ne 0 ]; then
  echo "Failed to start pgsync Docker container."
  exit 1
fi

echo "pgsync Docker container has been restarted."
echo "All tasks have been executed successfully."
