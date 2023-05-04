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
}

export default livroController;
