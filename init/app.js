const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const RedisStore = require('connect-redis')(session);
const User = require('../modules/user/models/User');
const rootRoutes = require('./rootRoutes');
const redis = require('redis');
const redisClient = redis.createClient();
const UserRoutes = require('../modules/user/userRoutes');

const initializeApp = (redisOptions, sessionSecret) => {
    // add middlewares
    redisOptions = Object.assign(redisOptions, { client: redisClient });
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(session({
        store: new RedisStore(redisOptions),
        secret: sessionSecret,
        resave: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    // local authentication stratergy
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    // routes added
    app.use('/user', UserRoutes);

    // app started
    app.listen(3000, 'localhost', () => {
        console.log('App started!');
    });

}

module.exports = initializeApp;