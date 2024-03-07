import express from 'express'
import stateRoutes from './state.routes.js'
const router = express.Router()

/**
 * @openapai
 * /healthcheck:
 *  get:
 *    tags:
 *      - Healthcheck
 *      description: Returns API operational status
 *      responses:
 *        200:
 *          description: API is running
 *        404:
 *          description: Resource not found
 */
router.get('/healthcheck', (req, res) => res.sendStatus(200))

router.use(stateRoutes)

export default router