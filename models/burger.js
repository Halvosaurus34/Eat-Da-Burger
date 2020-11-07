const orm = require('../config/orm')

async function selectAll(){
    const allBurgers = await orm.selectAll()
    return allBurgers
}

async function insertOne(burgerName){
    console.log("BURGER NAME: ", burgerName)
    const insertBurgers = await orm.insertOne(burgerName)
    return insertBurgers
}

async function updateOne(burgerName, devoured, burgerId){
    const insertBurgers = await orm.insertOne(burgerName, devoured, burgerId)
    return insertBurgers
}

async function findOne(burgerName){
    const findBurger = await orm.findOne(burgerName)
    return findBurger
}



module.exports = { updateOne, insertOne, selectAll, findOne }
