import Student from '../schemas/student';

class studentController {

    static async showStudentList (req, res) {
        let students = await Student.find().sort({pointPractice:1});
        res.render('list', {students: students});
    }
    static async showStudentDetail (req, res) {
        let id = req.params.id;
        let student = await Student.findOne({_id: id});
        res.render('detail', {student: student});
    }
    static async showAddForm (req, res) {
        res.render('add');
    }

    static async addEmployee (req, res) {
        let {name,classId,pointPractice,pointTheory,evaluate,description} = req.body;
        let student = new Student({name,classId,pointPractice,pointTheory,evaluate,description});
        await student.save();
        res.redirect('/student');
    }
    static async showUpdateForm (req, res) {
        let id = req.params.id;
        let student = await Student.findOne({_id: id});
        // let classes=await Class.find();
        res.render('edit', {student: student});
    }
    static async updateStudentInfo (req, res) {
        let id = req.params.id;
        let student = await Student.findOne({_id: id});
        let {name,classId,pointPractice,pointTheory,evaluate,description} = req.body;
        student.name = name;
        student.classId = classId;
        student.pointPractice = pointPractice;
        student.pointTheory = pointTheory;
        student.evaluate = evaluate;
        student.description = description;

        await student.save();
        res.redirect('/student');
    }
    static async deleteStudent (req, res) {
        let id = req.params.id;
        await Student.findOneAndDelete({_id: id})
        console.log('Deleted Successful');
        res.redirect('/student');
    }
}

export default studentController;