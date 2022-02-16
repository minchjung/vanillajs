import express from 'express';
import  controller from './controller.js';

const router = express.Router()

router.get('/', controller.getStaticRender)
router.get('/api/cache', controller.syncCache)
router.put('/api/state', controller.syncState)

export default router