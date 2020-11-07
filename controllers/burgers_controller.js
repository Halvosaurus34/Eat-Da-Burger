const express = require('express')
const burger = require('../models/burger')


function router( app ){
    app.get('/', async function( req, res ){
        const burgerData = await burger.selectAll();
        console.log( '[/api/burger] burgerData: ', burgerData);
        if( !burgerData ){
            return res.send( { status: false, message: 'Sorry unknown user or wrong password' } );
        }

        console.log('Retreived Burger Data!', burgerData);
        res.send({ status: true, ...userData });
    });

    app.post('/api/burger/insert', async function( req, res ){
        const burgerName = req.body.burgerName
        const devoured = req.body.devoured

        const insertBurger = await burger.insertOne(burgerName, devoured);
        console.log( 'INSERT BURGER', insertBurger );

        if( !insertBurger ){
            return res.send( { status: false, message: 'Sorry failed to create the burger, try later?' } );
        }

        res.send( { status: true, message: `Burger has been created!` } );
    } );

    app.post( '/api/burger/update', async function( req, res ){
        const burgerName = req.body.burgerName
        const devoured = req.body.burgerName
        const burgerId = await burger.findId(burgerName)
        console.log("BURGER ID: ", burgerId)
        const updateBurger = await burger.updateOne(burgerName, devoured, burgerId[0].id);
        console.log( 'UPDATE BURGER', updateBurger );

        if( !updateBurger ){
            return res.send( { status: false, message: 'Sorry failed to create the user, try later?' } );
        }

        res.send( { status: true, message: `Updated Burger!` } );
    } );

}

module.exports = router;