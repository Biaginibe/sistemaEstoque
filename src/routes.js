const express = require('express');

const routes = require('routes');

routes.get('/', (req, res) => {
    return res.json({hello: 'world'})
})

module.exports = routes;