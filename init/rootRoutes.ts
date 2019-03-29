import * as express from 'express';
const router = express.Router();

// child routes
import userRoutes from '../modules/user/userRoutes';

router.use('/', (req: any, res: any) => {
  res.send('Hello World!');
});

router.use('/user', userRoutes);

export default router;
