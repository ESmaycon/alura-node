import express from "express";
import db from "./config/dbConect.js";
import livros from "./models/Livros.js";

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

//const livros = [
//  { id: 1, titulo: "Senhor dos aneis " },
//  { id: 2, "titulo ": "o Hobiit" },
//];

app.get("/", (req, res) => {
  res.status(200).send("curso de node");
});

app.get("/livros", async (req, res) => {
  try {
    const livrosResultados = await livros.find();
    res.status(200).json(livrosResultados);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/livros/:id", (req, res) => {
  let index = buscarLivros(req.params.id);
  res.json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro foi cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  let index = buscarLivros(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscarLivros(id);
  livros.splice(index, 1);
  res.send(`O livro ${id} foi removido com sucesso.`);
});

function buscarLivros(id) {
  return livros.findIndex((livros) => livros.id == id);
}

export default app;
