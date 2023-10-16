'use client'

import Link from "next/link";
import { useState } from "react"

export default function CriarTarefa() {
    const [titulo, setTitulo] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");

    return (
        <section className="flex flex-col items-center min-h-screen">
            <Link className="flex bg-blue-600 hover:bg-blue-700 transition-all duration-300 p-3 text-white font-semibold text-center rounded-md flex-col justify-center w-11/12 md:w-9/12 sm:w-3/5 mt-4" href={"/"}>Retornar a página principal</Link>
            <h1 className="text-center font-bold text-2xl pt-4">Cria uma nova Tarefa</h1>
            <form className="flex flex-col justify-center w-11/12 md:w-9/12 sm:w-3/5 mt-4" action="post">
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
                <div className="flex flex-rowrap gap-4">
                    <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-4 py-2 rounded-md text-white font-semibold mt-6 w-1/2" type="reset">Limpar</button>
                    <button className="bg-green-600 hover:bg-green-700 transition-all duration-300 px-4 py-2 rounded-md text-white font-semibold mt-6 w-1/2" type="submit">Criar Tarefa</button>
                </div>
            </form>
        </section>
    )
}