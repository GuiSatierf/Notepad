const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  prioridade: { type: String, enum: ["baixa", "media", "alta"], default: "baixa" },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Note", noteSchema);
