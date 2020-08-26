import { DEFAULT_NEO4J_DESKTOP, driver } from "./db"

describe("Neo4j database driver", () => {
  describe("should have Neo4j Desktop settings", () => {
    it("exported as DEFAULT_NEO4J_DESKTOP", () => {
      expect(DEFAULT_NEO4J_DESKTOP).toBeDefined()
    })
    describe("with settings defined for", () => {
      const { URI, USER, PASSWORD } = DEFAULT_NEO4J_DESKTOP
      it("the URI of the Neo4j database", () => {
        expect(URI).toBeDefined()
      })
      it("the user account to access the Neo4j database", () => {
        expect(USER).toBeDefined()
      })
      it("the password associated with the user account", () => {
        expect(PASSWORD).toBeDefined()
      })
    })
  })
  describe("should export a Neo4j driver that", () => {
    it("has been defined", () => {
      expect(driver).toBeDefined()
    })
    describe("has been configured with the intended settings for", () => {
      const expectedURI = process.env.NEO4J_URI.replace("bolt://", "")
      const expectedUser = process.env.NEO4J_USER
      const expectedPassword = process.env.NEO4J_PASSWORD

      const { _address, _authToken, _config } = driver()

      it("the URI of the Neo4j database", () => {
        expect(_address._stringValue).toEqual(expectedURI)
      })
      it("the user account to access the Neo4j database", () => {
        expect(_authToken.principal).toEqual(expectedUser)
      })
      it("the password associated with the user account", () => {
        expect(_authToken.credentials).toEqual(expectedPassword)
      })
      it("encryption has been defined", () => {
        expect(_config.encrypted).toBeDefined()
      })
    })
    describe("has been configured with Neo4j Desktop settings", () => {
      const { URI, USER, PASSWORD, isEncrypted } = DEFAULT_NEO4J_DESKTOP
      const expectedURI = URI.replace("bolt://", "")
      const expectedUser = USER
      const expectedPassword = PASSWORD

      const { _address, _authToken, _config } = driver(
        URI,
        USER,
        PASSWORD,
        isEncrypted
      )

      it("the URI of the Neo4j database", () => {
        expect(_address._stringValue).toEqual(expectedURI)
      })
      it("the user account to access the Neo4j database", () => {
        expect(_authToken.principal).toEqual(expectedUser)
      })
      it("the password associated with the user account", () => {
        expect(_authToken.credentials).toEqual(expectedPassword)
      })
      describe("when the neo4jEncryptedConnection parameter", () => {
        describe("is undefined", () => {
          const { _config } = driver(URI, USER, PASSWORD)
          it("encryption has been set to ENCRYPTION_OFF", () => {
            expect(_config.encrypted).toEqual("ENCRYPTION_OFF")
          })
        })
        describe("is set to the string value 'false'", () => {
          const { _config } = driver(URI, USER, PASSWORD, "false")
          it("encryption has been set to ENCRYPTION_OFF", () => {
            expect(_config.encrypted).toEqual("ENCRYPTION_OFF")
          })
        })
        describe("is set to the boolean value 'false'", () => {
          const { _config } = driver(URI, USER, PASSWORD, false)
          it("encryption has been set to ENCRYPTION_OFF", () => {
            expect(_config.encrypted).toEqual("ENCRYPTION_OFF")
          })
        })
        describe("is set to the string value 'true'", () => {
          const { _config } = driver(URI, USER, PASSWORD, "true")
          it("encryption has been set to ENCRYPTION_ON", () => {
            expect(_config.encrypted).toEqual("ENCRYPTION_ON")
          })
        })
        describe("is set to the boolean value 'true'", () => {
          const { _config } = driver(URI, USER, PASSWORD, true)
          it("encryption has been set to ENCRYPTION_ON", () => {
            expect(_config.encrypted).toEqual("ENCRYPTION_ON")
          })
        })
      })
    })
  })
})
