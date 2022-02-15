import express from 'express';
import  controller from '../server-controller/controller.js';
// import syncHydrate  from '../server-controller/syncHydrate.js';
const router = express.Router()

router.get('/', controller.staticRender)
router.get('/api/page', controller.findByIndex)
router.get('/api/data', controller.getData)
router.put('/api/state', controller.syncHdrate)
// router.put('/api/data', syncHydrate.syncData)
export default router