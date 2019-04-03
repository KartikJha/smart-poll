import * as express from 'express';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import * as connectRedis from 'connect-redis';
import User from '../modules/user/models/User';
import rootRoutes from './rootRoutes';
// import * as redis from 'redis';
import userRoutes from '../modules/user/userRoutes';

// const LocalStrategy = passportLocal.Strategy;
// const RedisStore = connectRedis(session);
// const redisClient = redis.createClient();

const initializeApp = (redisOptions: object, sessionSecret: string) => {
    // add middlewares
    // redisOptions = Object.assign(redisOptions, { client: redisClient });
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    // app.use(session({
    //     store: new RedisStore(redisOptions),
    //     secret: sessionSecret,
    //     resave: false
    // }));
    app.use(passport.initialize());
    app.use(passport.session());

    // local authentication stratergy
    // passport.use(new LocalStrategy(User.authenticate()));
    // passport.serializeUser(User.serializeUser());
    // passport.deserializeUser(User.deserializeUser());

    // routes added
    // app.use('/', rootRoutes);
    app.use('/', rootRoutes);

    // app started
    app.listen(4000, 'localhost', () => {
        console.log('App started!');
    });

}

export default initializeApp;