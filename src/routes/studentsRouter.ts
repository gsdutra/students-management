import { Router } from 'express';
import * as studentsController from '../controllers/studentsController';

const studentsRouter = Router();

studentsRouter
  .get('/', studentsController.getStudents)
  .get('/pick', studentsController.getStudentById)
  .post('/', studentsController.postStudents);

export { studentsRouter };
