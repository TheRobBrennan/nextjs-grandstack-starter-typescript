import * as neo4j from "neo4j-driver"

// Neo4j Desktop settings
export const DEFAULT_NEO4J_DESKTOP = {
  URI: "bolt://localhost:7687",
  USER: "neo4j",
  PASSWORD: "neo4j",
  isEncrypted: false, // v3.5 does not use encrypted connections, but 4.0 does
}

// Create a configured neo4j driver instance (this doesn't start a session)
export const driver = (
  neo4jURI = process.env.NEO4J_URI,
  neo4jUser = process.env.NEO4J_USER,
  neo4jPassword = process.env.NEO4J_PASSWORD,
  neo4jEncryptedConnection = process.env.NEO4J_ENCRYPTED
) => {
  // REMEMBER: !!('false') IS true; we need to explicitly check for a false string value
  const isEncrypted =
    !!neo4jEncryptedConnection && neo4jEncryptedConnection != "false"

  return neo4j.driver(neo4jURI, neo4j.auth.basic(neo4jUser, neo4jPassword), {
    encrypted: isEncrypted ? "ENCRYPTION_ON" : "ENCRYPTION_OFF",
  })
}
