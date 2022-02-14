import express from 'express';
import  controller from '../server-controller/controller.js';
const router = express.Router()

router.get('/', controller.staticRender)
router.get('/page', controller.findByPage)
export default router