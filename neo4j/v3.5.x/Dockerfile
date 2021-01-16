# Official Neo4j Docker Images available at https://hub.docker.com/_/neo4j
FROM neo4j:3.5.26

# Install curl explicitly; it is no longer included in Neo4j base images
RUN apt-get update; apt-get install curl -y

# Specify the user/password for your Neo4j database
ENV NEO4J_AUTH=neo4j/letmein

# The APOC (Awesome Procedures On Cypher) library consists of many (about 450) procedures and functions to help with many different 
# tasks in areas like data integration, graph algorithms or data conversion.
# https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases
ENV APOC_VERSION=3.5.0.14
ENV APOC_URI https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases/download/${APOC_VERSION}/apoc-${APOC_VERSION}-all.jar
RUN sh -c 'cd /var/lib/neo4j/plugins && curl -L -O "${APOC_URI}"'

# We need to expose port 7474 for HTTP, port 7473 for HTTPS, and port 7687 for Bolt
EXPOSE 7474 7473 7687

CMD ["neo4j"]
