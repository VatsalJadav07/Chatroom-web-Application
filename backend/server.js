const express = require("express")
const { chats } = require("./data/data")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes =require('./routes/userRoutes')
const chatRoutes =require('./routes/chatRoutes')
const messageRoutes =require('./routes/messageRoutes')
const { notFound , errorHandler} =require('./middlewares/errorMiddleware')

const app = express();
dotenv.config(); 
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running..");
  });

app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);
app.use('/api/message',messageRoutes);


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(5000,console.log(`Server Started On PORT ${PORT}`))