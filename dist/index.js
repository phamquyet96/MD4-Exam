"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./src/configs/database"));
const student_router_1 = __importDefault(require("./src/routers/student.router"));
const PORT = 8080;
const app = (0, express_1.default)();
database_1.default.connect();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express_1.default.static('public'));
app.use('/student', student_router_1.default);
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:8080/student');
});
//# sourceMappingURL=index.js.map