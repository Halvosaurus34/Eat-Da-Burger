const db = require( './connection.js' );

function selectAll() {
    const queryString = "SELECT * FROM burgers;"
    return db.query( queryString)
}

function findOne(burgerName) {
    const queryString = "SELECT * FROM burgers WHERE burger_name = ?;"
    return db.query( queryString, [burgerName])
}

function insertOne(burgerName) {
  console.log("ORM BURGER NAME: ", burgerName)
    const queryString = "INSERT INTO burgers (burger_name) VALUES (?);";
    console.log(queryString);
    return db.query( queryString, [burgerName] );
}

function updateOne(burgerName, devoured, burgerId) {
    const queryString =
      "UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = (?);";

    return db.query(
    queryString,
    [burgerName, devoured, burgerId] );
}

function closeORM(){
  return db.close()
}

module.exports = { updateOne, insertOne, selectAll, closeORM, findOne }
