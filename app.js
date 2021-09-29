const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');

dotenv.config()

const sequelize = new Sequelize(''+process.env.DB_NAME+'', ''+process.env.DB_USER+'', ''+process.env.DB_PWD+'', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('MySQL OK');
} catch(error) {
    console.error('MySQL error:', error);
}

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.serHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('api/comment', commentRoutes);
module.exports = app;

