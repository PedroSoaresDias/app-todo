'use client'

import { useState } from "react";

export default function FormEditarTarefa(titulo: string, descricao: string) {
    const [novoTitulo, setNovoTitulo] = useState<string>(titulo);
    const [novaDescricao, setNovaDescricao] = useState<string>(descricao);

    return (
        <section className="flex flex-col items-center min-h-screen">
            <h1 className="text-center font-bold text-2xl pt-4">Cria uma nova Tarefa</h1>
            <form className="flex flex-col justify-center w-11/12 md:w-9/12 sm:w-3/5 mt-4" action="post">
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
                <button className="bg-green-600 hover:bg-green-700 transition-all duration-300 px-4 py-2 rounded-md text-white font-semibold mt-6" type="submit">Criar Tarefa</button>
            </form>
        </section>
    )
}