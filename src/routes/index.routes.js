import { Router } from 'express'

import {ping}   from '../controles/index.controller.js'

const router = Router()



router.get('/ping', ping);

export default router



