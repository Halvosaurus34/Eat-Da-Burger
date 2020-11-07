const db = require( './connection.js' );

function selectAll() {
    const queryString = "SELECT * FROM burgers;"
    return db.query( queryString)
}

function insertOne(burgerName, devoured) {
    const queryString = "INSERT INTO burgers (?, ?)";
    console.log(queryString);
    return db.query( queryString, [burgerName, devoured] );
}

function updateOne(burgerName, devoured, burgerId) {
    const queryString =
      "UPDATE burgers SET burger_name = '?', devoured = '?' WHERE id = '?";

    return db.query(
    queryString,
    [burgerName, devoured, burgerId] );
}

function closeORM(){
  return db.close()
}

module.exports = { updateOne, insertOne, selectAll, closeORM }
