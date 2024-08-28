import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';

import { teamRoutes } from '../modules/Team/team.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/team',
    route: teamRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
