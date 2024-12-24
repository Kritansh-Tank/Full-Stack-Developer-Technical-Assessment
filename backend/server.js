const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const prisma = require("@prisma/client");

dotenv.config();

const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

// Get all students
app.get("/students", async (req, res) => {
  const students = await prismaClient.student.findMany();
  res.json(students);
});

// Add a student
app.post("/students", async (req, res) => {
  const student = await prismaClient.student.create({ data: req.body });
  res.json(student);
});

// Update a student
app.put("/students/:id", async (req, res) => {
  const { id } = req.params;
  const student = await prismaClient.student.update({
    where: { id: parseInt(id) },
    data: req.body,
  });
  res.json(student);
});

// Delete a student
app.delete("/students/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prismaClient.student.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
