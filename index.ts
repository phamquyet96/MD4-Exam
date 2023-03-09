import express from 'express';
import database from './src/configs/database';
import studentRouter from "./src/routers/student.router";

const PORT = 8080;
const app = express();
database.connect();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));

app.use('/student', studentRouter);


app.listen(PORT, () => {
    console.log('Server is running on http://localhost:8080/student');
})
