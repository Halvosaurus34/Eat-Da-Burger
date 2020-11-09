async function addBurger(burgerName){
    console.log("CALLED ADDBURGER FUNCTION", burgerName)
    const result = await $.post('/api/burger/insert', {burgerName: burgerName})
    console.log(result)
}

async function eatBurger(burgerName, burgerId){
    console.log("EATING BURGER: ",burgerName, burgerId)
}