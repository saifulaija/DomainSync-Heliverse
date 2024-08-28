import express from 'express';

import { teamControllers } from './team.controller';
const router = express.Router();

router.post(
  '/',

  //   validateRequest(reviewValidations.CreateReviewValidationSchema),
  teamControllers.createTeam,
);

router.get(
  '/:id',
  teamControllers.getSingleTeam,
);

export const teamRoutes = router;
