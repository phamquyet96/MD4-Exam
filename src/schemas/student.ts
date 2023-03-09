import {Schema, model} from 'mongoose';

const studentSchema = new Schema ({
    code: String,
    name: String,
    age: Number,
    pointTheory: Number,
    pointPractice:Number,
    description: String,
    evaluate:String,
    classId:String
});

const Student = model('Student', studentSchema);

export default Student;