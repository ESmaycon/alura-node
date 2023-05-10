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
      const livro = new livros(req.body);

      const newCadastro = await livros.create(livro);

      return res.status(201).json(newCadastro);
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao cadastrar` });
    }
  };
}

export default livroController;
