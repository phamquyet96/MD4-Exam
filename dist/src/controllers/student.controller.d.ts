declare class studentController {
    static showStudentList(req: any, res: any): Promise<void>;
    static showStudentDetail(req: any, res: any): Promise<void>;
    static showAddForm(req: any, res: any): Promise<void>;
    static addEmployee(req: any, res: any): Promise<void>;
    static showUpdateForm(req: any, res: any): Promise<void>;
    static updateStudentInfo(req: any, res: any): Promise<void>;
    static deleteStudent(req: any, res: any): Promise<void>;
}
export default studentController;
