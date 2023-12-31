import FormEditarTarefa from "@/Components/FormEditarTarefa"
import Link from "next/link"

async function obterTarefaPeloId(id: string) {
    try {
        const request = await fetch(`http://localhost/api/tarefas/${id}`, {
            cache: "no-store",
        });

        if (!request.ok) {
            throw new Error("Ocorreu uma falha ao encontrar uma tarefa");
        }

        return request.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditarTarefa({ params }) {
    const { id } = params;

    if (!id) {
        return <div>ID inválido</div>;
    }

    const resultado = await obterTarefaPeloId(id);

    if (!resultado || !resultado.tarefa) {
        return <div>Tarefa não encontrada</div>;
    }

    const { tarefa = {titulo: "", descricao: ""} } = resultado;
    const { titulo, descricao } = tarefa;

    return (
        <>
            <div className= "flex justify-center" >
                <Link className="bg-blue-600 p-3 mt-6 text-center text-lg font-semibold text-white w-11/12 md:w-9/12 rounded-md hover:bg-blue-700 transition-all hover:scale-105 duration-200" href={"/"} >Retornar a página principal</Link>
            </div>
            <FormEditarTarefa id={id} titulo={titulo} descricao={descricao} />
        </>
    )
}