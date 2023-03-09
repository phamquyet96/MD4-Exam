import express from "express";
import studentController from "../controllers/student.controller";
import multer from 'multer';

let upload = multer()

const studentRouter = express.Router();

studentRouter.get('/', studentController.showStudentList);
studentRouter.get('/add', studentController.showAddForm);

studentRouter.get('/:class', studentController.showStudentInClass);


studentRouter.post('/add', upload.none(), studentController.addEmployee);

studentRouter.get('/detail/:id', studentController.showStudentDetail);

studentRouter.get('/update/:id', studentController.showUpdateForm);

studentRouter.post('/update/:id', upload.none(), studentController.updateStudentInfo);

studentRouter.get('/delete/:id', studentController.deleteStudent);

export default studentRouter;