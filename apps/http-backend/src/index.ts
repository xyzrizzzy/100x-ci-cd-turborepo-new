import prisma from "@repo/prisma/client";
import express from "express";

const app = express();

app.use(express.json());

app.post('/api/users/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await prisma.user.create({
    data: {
        name,
        email,
        password
    },
    select: {
      id: true,
      name: true,
    }
  });
  res.json({
    data : user,
    message: "User created successfully",
  });
});

app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      name: true,
    }
  });
  res.json({
    data : user,
    message: "User logged in successfully",
  });
});

app.listen(3001, () => { 
  console.log("Server started on port 3001");
});