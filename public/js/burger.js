async function addBurger(burgerName){
    console.log("CALLED ADDBURGER FUNCTION", burgerName)
    const result = await $.post('/api/burger/insert', {burgerName: burgerName})
    console.log('add burger function result',result)
}

async function eatBurger(burgerName, devoured, burgerId){
    console.log("EATING BURGER: ",burgerName, devoured, burgerId)
    const result = await $.post('/api/burger/update', {burgerName: burgerName, devoured: devoured, id: burgerId})
    console.log('eat burger function result',result)
}

