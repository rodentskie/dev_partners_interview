import { Router } from 'express';
import GetPopularSitesController from '../controller';
const router = Router();

router.get('/', GetPopularSitesController);

export = router;
