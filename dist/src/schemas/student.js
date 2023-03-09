"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    code: String,
    name: String,
    age: Number,
    pointTheory: Number,
    pointPractice: Number,
    description: String,
    evaluate: String,
    classId: String
});
const Student = (0, mongoose_1.model)('Student', studentSchema);
exports.default = Student;
//# sourceMappingURL=student.js.map