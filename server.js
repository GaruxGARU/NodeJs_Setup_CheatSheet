import express from "express"
import cors from 'cors';
import route from "./routes.js"

const app = express();
const PORT=3000;

// CORS options to allow requests from frontend running on port 5500
// const corsOptions = {
//     origin: 'http://localhost:5500', // Allow only requests from this origin
//     methods: 'GET,POST', // Allow only these methods
//     allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
// };
// app.use(cors(corsOptions));
app.use(cors());


app.use(express.json());

app.use('/', route);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
