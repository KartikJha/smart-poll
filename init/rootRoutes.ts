import * as express from 'express';
const router = express.Router();

// child routes
import userRoutes from '../modules/user/userRoutes';

router.use('/user', userRoutes);

/**
 * index route placed last because 
 * express registers route in sequence 
 * and on request matches the first path 
 * that is contained in request path
 * stupid!!!
 */
router.use('/', (req: any, res: any) => {
  res.send('Hello World!');
});


export default router;
