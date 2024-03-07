import express from 'express'
import {
  getStatesHandler,
  addStateHandler,
  deleteStateHandler,
  editStateHandler,
} from '../controllers/state.controller.js';

const stateRouter = express.Router();
/**
 * @openapi
 * '/api/states':
 *  get:
 *    tags:
 *    - State
 *    summary: Gets all states in repository
 *    responses:
 *      200:
 *        description: Success!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *      400:
 *        description: Bad request
 *      404:
 *        description: Resource not found
 */
stateRouter.get('/api/states', getStatesHandler)

/**
 * @openapi
 * '/api/state':
 *  post:
 *      tags:
 *      - State
 *      summary: Create a new state
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - id
 *                          - name
 *                      properties:
 *                          id:
 *                              type: number
 *                              default: 2
 *                          name:
 *                              type: string
 *                              default: New state name
 *      responses:
 *          200:
 *              description: Created succcessfully
 *          409:
 *              description: Conflict in response
 *          404:
 *              description: Resource not found
 */
stateRouter.post('/api/state', addStateHandler)

/**
 * @openapi
 * '/api/state':
 *  put:
 *      tags:
 *      - State
 *      summary: Edit a state
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - id
 *                          - name
 *                      properties:
 *                          id:
 *                              type: number
 *                              default: 1
 *                          name:
 *                              type: string
 *                              default: Abia
 *      responses:
 *          200:
 *              description: Modified successfully
 *          400:
 *              description: Bad request
 *          404:
 *              description: Resource not found
 */
stateRouter.put('/api/state', editStateHandler)

/**
 * @openapi
 * '/api/state/{id}':
 *  delete:
 *    tags:
 *    - State
 *    summary: Remove a state from the database by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the state in the database
 *        required: true
 *    responses:
 *      200:
 *        description: Deleted state successfully
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not found
 */
stateRouter.delete('/api/state/:id', deleteStateHandler)

export default stateRouter