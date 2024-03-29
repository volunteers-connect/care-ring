const neo4j = require('neo4j-driver').v1

const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic('neo4j', '12345')
)

driver.onCompleted = () => {
  console.log('Driver created')
}

const session = driver.session()

app.set('neo4jsession', driver.session)
