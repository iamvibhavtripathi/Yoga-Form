import express from 'express';
import user from '../controllers/user.js';

const router = express.Router();

router
  .post('/', user.onCreateUser)
  .get('/:id', user.onGetUserById)
  

export default router;