type Tarefa = {
    titulo: string;
    descricao: string;
    id: string;
}

let tarefas: Tarefa[] = [];

export const getTarefas = () => tarefas;

export function adicionarTarefa(tarefa: Tarefa) {
    tarefas.push(tarefa)
}

export function excluirTarefa(id: string) {
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
}

export function atualizarTarefa(id: string, titulo: string, descricao: string) {
    const tarefa = tarefas.find((tarefa) => tarefa.id === id)

    if (tarefa) {
        tarefa.titulo = titulo;
        tarefa.descricao = descricao;
    } else {
        throw new Error("Nenhuma tarefa encontrada")
    }
}

export function getPorId(id: string) {
    return tarefas.find((tarefa) => tarefa.id === id)
}