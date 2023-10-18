import mongoose, { Schema } from "mongoose";

const tarefaSchema = new Schema(
    {
        titulo: String,
        descricao: String,
    },
    {
        timestamps: true,
    }
);

const Tarefa = mongoose.models.Tarefa || mongoose.model("Tarefa", tarefaSchema);

export default Tarefa;