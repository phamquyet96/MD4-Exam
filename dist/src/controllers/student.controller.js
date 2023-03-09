"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = __importDefault(require("../schemas/student"));
class studentController {
    static async showStudentList(req, res) {
        let students = await student_1.default.find().sort({ pointPractice: 1 });
        res.render('list', { students: students });
    }
    static async showStudentInClass(req, res) {
        let classId = req.params.classId;
        let students = await student_1.default.find({ classId: classId });
        res.render('list', { students: students });
    }
    static async showStudentDetail(req, res) {
        let id = req.params.id;
        let student = await student_1.default.findOne({ _id: id });
        res.render('detail', { student: student });
    }
    static async showUpdateForm(req, res) {
        let id = req.params.id;
        let student = await student_1.default.findOne({ _id: id });
        res.render('edit', { student: student });
    }
    static async updateStudentInfo(req, res) {
        let id = req.params.id;
        let student = await student_1.default.findOne({ _id: id });
        let { name, classId, pointPractice, pointTheory, evaluate, description } = req.body;
        student.name = name;
        student.classId = classId;
        student.pointPractice = pointPractice;
        student.pointTheory = pointTheory;
        student.evaluate = evaluate;
        student.description = description;
        await student.save();
        res.redirect('/student');
    }
    static async deleteStudent(req, res) {
        let id = req.params.id;
        await student_1.default.findOneAndDelete({ _id: id });
        console.log('Deleted Successful');
        res.redirect('/student');
    }
    static async showAddForm(req, res) {
        res.render('add');
    }
    static async addEmployee(req, res) {
        let { name, classId, pointPractice, pointTheory, evaluate, description } = req.body;
        let student = new student_1.default({ name, classId, pointPractice, pointTheory, evaluate, description });
        await student.save();
        res.redirect('/student');
    }
}
exports.default = studentController;
//# sourceMappingURL=student.controller.js.map