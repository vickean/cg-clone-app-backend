import "dotenv/config";
import express from "express";
import cors from "cors";

console.log("Common Ground Clone Backend");

const app = express();

app.use(cors());

// Test Data

let users = {
  1: {
    id: "1",
    username: "Adam Adams",
  },
  2: {
    id: "2",
    username: "Benjamin Bens",
  },
};

let messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1",
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2",
  },
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  return res.send(Object.values(users));
});

app.get("/users/:userId", (req, res) => {
  return res.send(users[req.params.userId]);
});

app.get("/messages", (req, res) => {
  return res.send(Object.values(messages));
});

app.get("/messages/:messageId", (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}!`);
});
