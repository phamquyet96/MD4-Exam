"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = __importDefault(require("../controllers/student.controller"));
const multer_1 = __importDefault(require("multer"));
let upload = (0, multer_1.default)();
const studentRouter = express_1.default.Router();
studentRouter.get('/', student_controller_1.default.showStudentList);
studentRouter.get('/add', student_controller_1.default.showAddForm);
studentRouter.post('/add', upload.none(), student_controller_1.default.addEmployee);
studentRouter.get('/detail/:id', student_controller_1.default.showStudentDetail);
studentRouter.get('/update/:id', student_controller_1.default.showUpdateForm);
studentRouter.post('/update/:id', upload.none(), student_controller_1.default.updateStudentInfo);
studentRouter.get('/delete/:id', student_controller_1.default.deleteStudent);
exports.default = studentRouter;
//# sourceMappingURL=student.router.js.map