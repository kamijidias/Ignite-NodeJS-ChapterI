const express = require("express");

const app = express();

app.use(express.json());

/**
 * GET - BUSCAR UMA INFORMAÇÃO NO SERVIDOR
 * POST - INSERIR UMA INFORMAÇÃO NO SERVIDOR
 * PUT - ALTERAR UMA INFORMAÇÃO NO SERVIDOR
 * DELETE - DELETAR UMA INFORMAÇÃO DO SERVIDOR
 * PATCH - ALTERAR UMA INFORMAÇÃO ESPECIFICA NO SERVIDOR
 */

/**
 * TIPOS DE PARAMÊTROS
 *
 * Route Params => identificar um recurso para poder editar/deletar/buscar
 * Query Params => Paginação/Filtro
 * Body Params => Os objetos para inserção/alteração (JSON)
 */

app.get("/courses", (request, response) => {
    const query = request.query
    console.log(query)
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
    const body = request.body
    console.log(body)
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 4"]);
});

app.listen(3333);
