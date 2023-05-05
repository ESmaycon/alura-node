import express from "express";
import livroController from "../controller/livrosControler.js";

const router = express.Router();

router
  .get("/livros", livroController.listarLivros)
  .post("/livros", livroController.cadastrarLivros);

export default router;
