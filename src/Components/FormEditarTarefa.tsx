'use client'

import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export default function FormEditarTarefa({id, titulo, descricao}) {
    const [novoTitulo, setNovoTitulo] = useState(titulo);
    const [novaDescricao, setNovaDescricao] = useState(descricao);
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {
            const request = await fetch(`http://localhost:3000/api/tarefas/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ novoTitulo, novaDescricao })
            });

            if (!request.ok) {
                throw new Error("Falha ao atualizar a tarefa")
            }

            router.refresh();
            router.push("/");
        } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <section className="flex flex-col items-center min-h-screen">
            <h1 className="text-center font-bold text-2xl pt-4">Editar a Tarefa</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center w-11/12 md:w-9/12 mt-4" action="post">
                <label className="text-lg mt-2" htmlFor="titulo">Nome da tarefa</label>
                <input
                    className="border-2 border-gray-950 p-2 rounded-md mt-2"
                    type="text"
                    name="titulo"
                    id="titulo"
                    placeholder="Digite o nome da tarefa"
                    value={novoTitulo}
                    onChange={(e) => setNovoTitulo(e.target.value)}
                />
                <label className="text-lg mt-2" htmlFor="descricao">Descreva sobre a tarefa</label>
                <input
                    className="border-2 border-gray-950 p-2 rounded-md mt-2"
                    type="text"
                    name="descricao"
                    id="descricao"
                    placeholder="Digite a descrição da sua tarefa"
                    value={novaDescricao}
                    onChange={(e) => setNovaDescricao(e.target.value)}
                />
                <button className="bg-green-600 hover:bg-green-700 transition-all duration-300 px-4 py-2 rounded-md text-white font-semibold mt-6" type="submit">Atualizar Tarefa</button>
            </form>
        </section>
    )
}