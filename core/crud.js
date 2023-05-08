const fs = require("fs");
const DB_FILE_PATH = "./core/db";

function create(content) {
  // Salvar content
  fs.writeFileSync(DB_FILE_PATH, content);
  return content;
}

// [SIMULATION]
create("Contéudo gravado com sucesso!");
