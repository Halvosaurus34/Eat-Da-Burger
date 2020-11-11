const express = require('express')
const burger = require('../models/burger')
let devoured = []
let notDevoured = []

function router( app ){
    app.get('/', async function( req, res ){
        console.log("GETALL")
        devoured = []
        notDevoured = []
        const burgerData = await burger.selectAll();
        // console.log( '[/api/burger] burgerData: ', burgerData);
        burgerData.forEach(element => {
            if(element.devoured == 0){
                notDevoured.push(element)
            } else{
                devoured.push(element)
            }
        });
        // console.log("DEVOURED ARRAY:",devoured)
        // console.log("notDevoured array: ", notDevoured)
        if( !burgerData ){
            return res.send( { status: false, message: 'Sorry unknown user or wrong password' } );
        }
        // console.log('Retreived Burger Data!', burgerData);
        res.render("index", {devoured: devoured, notDevoured: notDevoured})
        // res.send(burgerData)
                    
        });

    app.post('/api/burger/insert', async function( req, res ){
        const burgerName = req.body.burgerName
        // console.log("req.body", req.body.burgerName)

        const insertBurger = await burger.insertOne(burgerName);
        // console.log( 'INSERT BURGER', insertBurger );

        if( !insertBurger ){
            return res.send( { status: false, message: 'Sorry failed to create the burger, try later?' } );
        }

        res.send("INSERT BURGER");
    } );

    app.post( '/api/burger/update', async function( req, res ){
        console.log("UPDATE BURGER")
        const burgerName = req.body.burgerName
        console.log(burgerName)
        const isDevoured = req.body.devoured
        const burgerId = await burger.findOne(burgerName)
        console.log("BURGER ID: ", burgerId)
        const updateBurger = await burger.updateOne(burgerName, isDevoured, burgerId[0].id);
        console.log( 'UPDATE BURGER', updateBurger );

        if( !updateBurger ){
            return res.send( { status: false, message: 'Sorry failed to create the user, try later?' } );
        }
        devoured = []
        notDevoured = []
        const burgerData = await burger.selectAll();
        // console.log( '[/api/burger] burgerData: ', burgerData);
        burgerData.forEach(element => {
            if(element.devoured == 0){
                notDevoured.push(element)
            } else{
                devoured.push(element)
            }
        });
        // console.log("DEVOURED ARRAY:",devoured)
        // console.log("notDevoured array: ", notDevoured)
        if( !burgerData ){
            return res.send( { status: false, message: 'Sorry unknown user or wrong password' } );
        }
        // console.log('Retreived Burger Data!', burgerData);
        res.render("index", {devoured: devoured, notDevoured: notDevoured})

    } );

}

module.exports = router;