import express from "express";
import cors from "cors";
import authRoutes from "@routes/authRoutes";
import aiRoutes from "@routes/aiRoutes";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/ai", aiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
