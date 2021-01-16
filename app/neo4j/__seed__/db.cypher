// OPTIONAL: Clear previously defined constraints
// DROP CONSTRAINT ON (node:User) ASSERT (node.userId) IS UNIQUE;
// DROP CONSTRAINT ON (node:Category) ASSERT (node.name) IS UNIQUE;
// DROP CONSTRAINT ON (node:Review) ASSERT (node.reviewId) IS UNIQUE;
// DROP CONSTRAINT ON (node:Business) ASSERT (node.businessId) IS UNIQUE;

// Generated using "CALL apoc.export.cypher.all(null);" in Cypher to export all Cypher statements in a single row in the cypherStatements column based on the original GRANDstack Database Seed creation
CREATE CONSTRAINT ON (node:User) ASSERT (node.userId) IS UNIQUE;
CREATE CONSTRAINT ON (node:Category) ASSERT (node.name) IS UNIQUE;
CREATE CONSTRAINT ON (node:Review) ASSERT (node.reviewId) IS UNIQUE;
CREATE CONSTRAINT ON (node:Business) ASSERT (node.businessId) IS UNIQUE;

CALL db.awaitIndexes(300);

UNWIND [{reviewId:"r4", properties:{date:date('2017-11-13'), text:"", stars:5}},
{reviewId:"r8", properties:{date:date('2018-08-11'), text:"", stars:5}},
{reviewId:"r11", properties:{date:date('2016-03-04'), text:"Awesome full-service car wash. Love Ducky's!", stars:5}},
{reviewId:"r7", properties:{date:date('2015-08-29'), text:"Not a great selection of books, but fortunately the inter-library loan system is good. Wifi is quite slow. Not many comfortable places to site and read. Looking forward to the new building across the street in 2020!", stars:3}},
{reviewId:"r3", properties:{date:date('2018-09-10'), text:"", stars:3}},
{reviewId:"r12", properties:{date:date('2015-09-01'), text:"The world's leading graph database HQ!", stars:5}},
{reviewId:"r9", properties:{date:date('2016-11-21'), text:"", stars:5}},
{reviewId:"r2", properties:{date:date('2016-07-14'), text:"", stars:5}},
{reviewId:"r5", properties:{date:date('2018-01-03'), text:"Best breakfast sandwich at the Farmer's Market. Always get the works.", stars:4}},
{reviewId:"r1", properties:{date:date('2016-01-03'), text:"Great IPA selection!", stars:4}},
{reviewId:"r10", properties:{date:date('2015-12-15'), text:"", stars:4}},
{reviewId:"r6", properties:{date:date('2018-03-24'), text:"", stars:4}}]
AS row
CREATE (n:Review{reviewId: row.reviewId}) SET n += row.properties;

UNWIND [{businessId:"b2", properties:{address:"1151 W Broadway St", city:"Missoula", name:"Imagine Nation Brewing", location:point({x: -114.009628, y: 46.876672, crs: 'wgs-84'}), state:"MT"}},
{businessId:"b1", properties:{address:"313 N 1st St W", city:"Missoula", name:"KettleHouse Brewing Co.", location:point({x: -113.995297, y: 46.877981, crs: 'wgs-84'}), state:"MT"}},
{businessId:"b6", properties:{address:"121 W Broadway St", city:"Missoula", name:"Zootown Brew", location:point({x: -113.995018, y: 46.873985, crs: 'wgs-84'}), state:"MT"}},
{businessId:"b3", properties:{address:"200 W Pine St", city:"Missoula", name:"Ninja Mike's", location:point({x: -113.995057, y: 46.874029, crs: 'wgs-84'}), state:"MT"}},
{businessId:"b7", properties:{address:"723 California Dr", city:"Burlingame", name:"Hanabi", location:point({x: -122.351519, y: 37.582598, crs: 'wgs-84'}), state:"CA"}},
{businessId:"b4", properties:{address:"201 E Front St", city:"Missoula", name:"Market on Front", location:point({x: -113.993633, y: 46.869824, crs: 'wgs-84'}), state:"MT"}},
{businessId:"b8", properties:{address:"716 N San Mateo Dr", city:"San Mateo", name:"Ducky's Car Wash", location:point({x: -122.336041, y: 37.575968, crs: 'wgs-84'}), state:"CA"}},
{businessId:"b5", properties:{address:"301 E Main St", city:"Missoula", name:"Missoula Public Library", location:point({x: -113.990976, y: 46.870035, crs: 'wgs-84'}), state:"MT"}},
{businessId:"b9", properties:{address:"111 E 5th Ave", city:"San Mateo", name:"Neo4j", location:point({x: -122.322269, y: 37.563534, crs: 'wgs-84'}), state:"CA"}}]
AS row
CREATE (n:Business{businessId: row.businessId}) SET n += row.properties;

UNWIND [{name:"Car Wash", properties:{}}, {name:"Brewery", properties:{}},
{name:"Beer", properties:{}}, {name:"Breakfast", properties:{}}, {name:"Deli", properties:{}},
{name:"Cafe", properties:{}}, {name:"Coffee", properties:{}}, {name:"Graph Database", properties:{}},
{name:"Library", properties:{}}, {name:"Ramen", properties:{}}, {name:"Restaurant", properties:{}}]
AS row
CREATE (n:Category{name: row.name}) SET n += row.properties;

UNWIND [{userId:"u4", properties:{name:"Angie"}},
{userId:"u2", properties:{name:"Bob"}},
{userId:"u3", properties:{name:"Jenny"}},
{userId:"u1", properties:{name:"Will"}}]
AS row
CREATE (n:User{userId: row.userId}) SET n += row.properties;

UNWIND [{start: {businessId:"b9"}, end: {name:"Graph Database"}, properties:{}},
{start: {businessId:"b2"}, end: {name:"Brewery"}, properties:{}},
{start: {businessId:"b2"}, end: {name:"Beer"}, properties:{}},
{start: {businessId:"b1"}, end: {name:"Brewery"}, properties:{}},
{start: {businessId:"b1"}, end: {name:"Beer"}, properties:{}},
{start: {businessId:"b7"}, end: {name:"Ramen"}, properties:{}},
{start: {businessId:"b7"}, end: {name:"Restaurant"}, properties:{}},
{start: {businessId:"b8"}, end: {name:"Car Wash"}, properties:{}},
{start: {businessId:"b6"}, end: {name:"Coffee"}, properties:{}},
{start: {businessId:"b4"}, end: {name:"Breakfast"}, properties:{}},
{start: {businessId:"b4"}, end: {name:"Deli"}, properties:{}},
{start: {businessId:"b4"}, end: {name:"Cafe"}, properties:{}},
{start: {businessId:"b4"}, end: {name:"Restaurant"}, properties:{}},
{start: {businessId:"b4"}, end: {name:"Coffee"}, properties:{}},
{start: {businessId:"b5"}, end: {name:"Library"}, properties:{}},
{start: {businessId:"b3"}, end: {name:"Breakfast"}, properties:{}},
{start: {businessId:"b3"}, end: {name:"Restaurant"}, properties:{}}]
AS row
MATCH (start:Business{businessId: row.start.businessId})
MATCH (end:Category{name: row.end.name})
CREATE (start)-[r:IN_CATEGORY]->(end) SET r += row.properties;

UNWIND [{start: {userId:"u2"}, end: {reviewId:"r10"}, properties:{}},
{start: {userId:"u4"}, end: {reviewId:"r8"}, properties:{}},
{start: {userId:"u1"}, end: {reviewId:"r7"}, properties:{}},
{start: {userId:"u3"}, end: {reviewId:"r2"}, properties:{}},
{start: {userId:"u1"}, end: {reviewId:"r5"}, properties:{}},
{start: {userId:"u2"}, end: {reviewId:"r6"}, properties:{}},
{start: {userId:"u3"}, end: {reviewId:"r9"}, properties:{}},
{start: {userId:"u4"}, end: {reviewId:"r3"}, properties:{}},
{start: {userId:"u1"}, end: {reviewId:"r12"}, properties:{}},
{start: {userId:"u3"}, end: {reviewId:"r4"}, properties:{}},
{start: {userId:"u1"}, end: {reviewId:"r1"}, properties:{}},
{start: {userId:"u1"}, end: {reviewId:"r11"}, properties:{}}]
AS row
MATCH (start:User{userId: row.start.userId})
MATCH (end:Review{reviewId: row.end.reviewId})
CREATE (start)-[r:WROTE]->(end) SET r += row.properties;

UNWIND [{start: {reviewId:"r1"}, end: {businessId:"b1"}, properties:{}},
{start: {reviewId:"r7"}, end: {businessId:"b5"}, properties:{}},
{start: {reviewId:"r10"}, end: {businessId:"b2"}, properties:{}},
{start: {reviewId:"r6"}, end: {businessId:"b4"}, properties:{}},
{start: {reviewId:"r3"}, end: {businessId:"b2"}, properties:{}},
{start: {reviewId:"r5"}, end: {businessId:"b3"}, properties:{}},
{start: {reviewId:"r8"}, end: {businessId:"b6"}, properties:{}},
{start: {reviewId:"r11"}, end: {businessId:"b8"}, properties:{}},
{start: {reviewId:"r4"}, end: {businessId:"b3"}, properties:{}},
{start: {reviewId:"r9"}, end: {businessId:"b7"}, properties:{}},
{start: {reviewId:"r12"}, end: {businessId:"b9"}, properties:{}},
{start: {reviewId:"r2"}, end: {businessId:"b1"}, properties:{}}]
AS row
MATCH (start:Review{reviewId: row.start.reviewId})
MATCH (end:Business{businessId: row.end.businessId})
CREATE (start)-[r:REVIEWS]->(end) SET r += row.properties;
