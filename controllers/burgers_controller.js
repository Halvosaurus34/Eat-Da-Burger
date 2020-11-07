const express = require('express')
const burger = require('../models/burger')

function router( app ){
    // == user ==
    app.get('/api/burger', async function( req, res ){
        const burgerData = await burger.selectAll();
        console.log( '[/api/burger] burgerData: ', burgerData);
        if( !burgerData ){
            return res.send( { status: false, message: 'Sorry unknown user or wrong password' } );
        }

        console.log('Retreived Burger Data!', burgerData);
        res.send({ status: true, ...userData });
    });

    app.post( '/api/burger/insert', async function( req, res ){
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

        const updateBurger = await burger.updateOne(userData);
        console.log( ' created user [orm.registerUser]: userId=', userId );

        if( !userId ){
            return res.send( { status: false, message: 'Sorry failed to create the user, try later?' } );
        }

        res.send( { status: true, message: `You are registered (userId: #${userId})!` } );
    } );

}

module.exports = router;