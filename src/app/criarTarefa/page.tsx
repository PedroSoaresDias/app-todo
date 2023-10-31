'use client'

import Link from "next/link";
import { FormEventHandler, useState } from "react"
import { useRouter } from "next/navigation";

export default function CriarTarefa() {
    const [titulo, setTitulo] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");

    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        if (!titulo || !descricao) {
            alert("O nome da tarefa e a descrição devem serem preenchidos");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/tarefas", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ titulo, descricao }),
            });

            if (res.ok) {
                router.refresh();
                router.push("/");
            } else {
                throw new Error("Ocorreu um erro ao criar uma nova tarefa")
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <section className="flex flex-col items-center min-h-screen">
            <Link className="flex bg-blue-600 hover:bg-blue-800 transition-all hover:scale-105 duration-200 p-3 text-white font-semibold text-center rounded-md flex-col justify-center w-11/12 md:w-9/12 mt-6" href={"/"}>Retornar a página principal</Link>
            <h1 className="text-center font-bold text-2xl pt-4">Cria uma nova Tarefa</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center w-11/12 md:w-9/12 mt-4" action="post">
                <label className="text-lg mt-2" htmlFor="titulo">Nome da tarefa</label>
                <input
                    className="border-2 border-gray-950 p-2 rounded-md mt-2"
                    type="text"
                    name="titulo"
                    id="titulo"
                    placeholder="Digite o nome da tarefa"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <label className="text-lg mt-2" htmlFor="descricao">Descreva sobre a tarefa</label>
                <input
                    className="border-2 border-gray-950 p-2 rounded-md mt-2"
                    type="text"
                    name="descricao"
                    id="descricao"
                    placeholder="Digite a descrição da sua tarefa"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <button className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-200 px-4 py-2 rounded-md text-white font-semibold mt-6" type="submit">Criar Tarefa</button>
            </form>
        </section>
    )
}