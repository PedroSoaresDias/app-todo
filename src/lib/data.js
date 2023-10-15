let tarefas = [];

export const getTarefas = () => tarefas;

export function adicionarTarefa(tarefa) {
    tarefas.push(tarefa)
}

export function excluirTarefa(id) {
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
}

export function atualizarTarefa(id, titulo, descricao) {
    const tarefa = tarefas.find((tarefa) => tarefa.id === id)

    if (tarefa) {
        tarefa.titulo = titulo;
        tarefa.descricao = descricao;
    } else {
        throw new Error("Nenhuma tarefa encontrada")
    }
}

export function getPorId(id) {
    return tarefas.find((tarefa) => tarefa.id === id)
}