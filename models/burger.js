const orm = require('../config/orm')

async function selectAll(){
    const allBurgers = await orm.selectAll()
    return allBurgers
}

async function insertOne(burgerName, devoured){
    const insertBurgers = await orm.insertOne(burgerName, devoured)
    return insertBurgers
}

async function updateOne(burgerName, devoured, burgerId){
    const insertBurgers = await orm.insertOne(burgerName, devoured, burgerId)
    return insertBurgers
}

module.exports = { updateOne, insertOne, selectAll }
