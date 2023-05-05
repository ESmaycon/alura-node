import e from "express";
import livros from "../models/Livros.js";

class livroController {
  static listarLivros = async (req, res) => {
    try {
      const livrosResultados = await livros.find();
      res.status(200).json(livrosResultados);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static cadastrarLivros = async (req, res) => {
    try {
      let livro = await new livros(req.body);
      res.status(200).send(livro.toJSON);
    } catch (err) {
      res
        .status(500)
        .send({ message: `${err.message} - falha ao cadastrar livro` });
    }
  };
}

export default livroController;
