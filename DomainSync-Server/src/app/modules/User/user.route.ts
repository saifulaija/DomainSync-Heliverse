/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';

import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';


const router = express.Router();

router.post(
  '/',

  // validateRequest(UserValidation.createUserValidationSchema),

  UserControllers.createUser,
);

router.get('/', UserControllers.getAllUser)
router.get(
  '/:id',
 
  UserControllers.getSingleUser,
);

export const UserRoutes = router;
