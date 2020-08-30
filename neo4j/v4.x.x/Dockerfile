FROM neo4j:4.1.1

RUN apt-get update; apt-get install curl -y

ENV NEO4J_AUTH=neo4j/letmein \
    APOC_VERSION=4.1.0.2

ENV APOC_URI https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases/download/${APOC_VERSION}/apoc-${APOC_VERSION}-all.jar
RUN sh -c 'cd /var/lib/neo4j/plugins && curl -L -O "${APOC_URI}"'

EXPOSE 7474 7473 7687

CMD ["neo4j"]
