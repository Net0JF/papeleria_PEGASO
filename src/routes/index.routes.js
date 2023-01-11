import { Router } from 'express'

import {ping}   from '../controles/index.controller.js'

const router = Router()



router.get('/pang', ping);

export default router



