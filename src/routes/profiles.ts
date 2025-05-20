import { Router } from 'express';
import { getProfiles } from '../controllers/profilesController';

const router = Router();
router.get('/', getProfiles);

export default router;