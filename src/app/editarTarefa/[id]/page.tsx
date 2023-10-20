import FormEditarTarefa from "@/Components/FormEditarTarefa"
import Link from "next/link"

async function obterTarefaPorId(id: string) {
    try {
        const request = await fetch(`http://localhost/api/tarefas/${id}`, {
            cache: "no-store"
        });

        if (!request.ok) {
            throw new Error("Ocorreu uma falha ao encontrar uma tarefa")
        }

        return request.json();
    } catch (error) {
        console.log(error)
    }
}

export default async function EditarTarefa({ params }) {
    const { id } = params;
    const { tarefa } = await obterTarefaPorId(id);
    const { titulo, descricao } = tarefa;

    return (
        <>
            <div className= "flex justify-center" >
                <Link className="bg-blue-600 p-3 mt-6 text-center text-lg font-semibold text-white w-11/12 md:w-9/12 sm:w-3/5 rounded-md hover:bg-blue-700 transition-all hover:scale-105 duration-200" href={"/"} > Retornar a página principal </Link>
            </div>
            <FormEditarTarefa id={id} titulo={titulo} descricao={descricao} />
        </>
    )
}