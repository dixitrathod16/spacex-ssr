import express from 'express'
import cors from 'cors'
import { renderToNodeStream } from 'react-dom/server'
import Main from '../shared/components/Main'
import React from 'react'
import serialize from 'serialize-javascript'
import {fetchData} from '../shared/api/api'

const app = new express()

app.use(cors())

app.use(express.static('public'))

app.get('*', (req, res, next) => {
    fetchData()
        .then((data) => {
            const markup = renderToNodeStream(<Main data={data}/>)
            res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="SpaceX Frontend Web site"/>
                <title>SpaceX Details</title>
                <script src='/bundle.js' defer></script>
                <link rel="stylesheet" href="/main.css">
                <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
            </head>
            <body style="margin: 1rem;background-color: #F8F8F8;">
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root">${markup}</div>
            </body>
            </html>
            `)
        })
        .catch((error) =>{
            console.warn(error)
            return null
        })
})

app.listen(3000,() => {
    console.log('Server is listening on port: 3000')
})
