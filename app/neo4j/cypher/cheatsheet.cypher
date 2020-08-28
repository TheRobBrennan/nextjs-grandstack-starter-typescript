// Delete everything
MATCH (n) DETACH DELETE n

// Create constraints to prevent User nodes from having duplicate email or username values
CREATE CONSTRAINT ON ( user:User ) ASSERT user.email IS UNIQUE;
CREATE CONSTRAINT ON ( user:User ) ASSERT user.username IS UNIQUE;

// List constraints defined for the database
CALL db.constraints();

// Create a User node with the specified properties
CREATE (u:User { username: 'test', email: 'test@nomail.com', password: 'testtest' })

// Find User nodes
MATCH (u:User) WITH { username: u.username, id: u.id, email: u.email} as User RETURN User

// Turn timestamp in milliseconds into local time
WITH datetime({ epochMillis: 1584796319600 }) AS dd
RETURN datetime({datetime:dd, timezone:'America/Vancouver'}) AS PacificTime
// 2020-03-21T06:11:59.600000000[America/Vancouver]

// Find users that registered on or after 2020.03.22
WITH datetime({year: 2020, month: 3, day: 22}).epochMillis AS testDate
MATCH (u:User) WHERE u.registeredOn >= testDate
RETURN u.id, u.email, u.username, u.firstName, u.lastName, u.registeredOn,
  datetime({epochmillis:u.registeredOn, timezone:'America/Vancouver'}) AS PacificTime,
  apoc.temporal.format(datetime({epochmillis:u.registeredOn, timezone:'America/Vancouver'}), "yyyy.MM.dd HH:mm:ss") AS registered
ORDER BY u.registeredOn DESC
╒══════════════════════════════════════╤═════════════════╤════════════╤════════════════╤══════════════════════════════════════════════════╤═════════════════════╕
│"u.id"                                │"u.email"        │"u.username"│"u.registeredOn"│"PacificTime"                                     │"registered"         │
╞══════════════════════════════════════╪═════════════════╪════════════╪════════════════╪══════════════════════════════════════════════════╪═════════════════════╡
│"ab776c26-85d4-462e-b674-a027d17b03d0"│"test@nomail.com"│"test"      │1584868556674   │"2020-03-22T02:15:56.674000000[America/Vancouver]"│"2020.03.22 02:15:56"│
└──────────────────────────────────────┴─────────────────┴────────────┴────────────────┴──────────────────────────────────────────────────┴─────────────────────┘

// List all registered users
MATCH (u:User)
RETURN u.id, u.email, u.username, u.firstName, u.lastName, u.registeredOn,
  apoc.temporal.format(datetime({epochmillis:u.registeredOn, timezone:'America/Vancouver'}), "yyyy.MM.dd HH:mm:ss") AS registered
ORDER BY u.registeredOn DESC
╒══════════════════════════════════════╤═════════════════╤════════════╤═════════════╤════════════╤════════════════╤═════════════════════╕
│"u.id"                                │"u.email"        │"u.username"│"u.firstName"│"u.lastName"│"u.registeredOn"│"registered"         │
╞══════════════════════════════════════╪═════════════════╪════════════╪═════════════╪════════════╪════════════════╪═════════════════════╡
│"74d470da-350c-455e-b437-cfe4d63e5d57"│"test@nomail.com"│"testuser"  │"Rob"        │"Brennan"   │1584916048536   │"2020.03.22 15:27:28"│
└──────────────────────────────────────┴─────────────────┴────────────┴─────────────┴────────────┴────────────────┴─────────────────────┘

// Find a user by email address
MATCH (u:User { email: 'test@nomail.com' })
RETURN u

// Delete all User nodes and relationships for a user with a specific email address
MATCH (u:User { email: 'test@nomail.com' })
DETACH DELETE u
