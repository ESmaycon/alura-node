import express from "express";
import livroController from "../controller/livrosControler.js";

const router = express.Router();

router.get("/livros", livroController.listarLivros);

export default router;
