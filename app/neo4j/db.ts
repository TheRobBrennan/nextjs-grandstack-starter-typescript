import neo4j from "neo4j-driver"

// Neo4j Desktop settings
export const DEFAULT_NEO4J_DESKTOP = {
  URI: "bolt://localhost:7687",
  USER: "neo4j",
  PASSWORD: "neo4j",
}

// Create a configured neo4j driver instance (this doesn't start a session)
export const driver = neo4j.driver(
  process.env.NEO4J_URI || DEFAULT_NEO4J_DESKTOP.URI,
  neo4j.auth.basic(
    process.env.NEO4J_USER || DEFAULT_NEO4J_DESKTOP.USER,
    process.env.NEO4J_PASSWORD || DEFAULT_NEO4J_DESKTOP.PASSWORD
  ),
  {
    encrypted: process.env.NEO4J_ENCRYPTED ? "ENCRYPTION_ON" : "ENCRYPTION_OFF",
  }
)
