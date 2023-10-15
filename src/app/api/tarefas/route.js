import { adicionarTarefa, getTarefas } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const tarefas = getTarefas();
        return NextResponse.json({ message: "OK", tarefas }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Ocorreu um Erro", error }, { status: 500 });
    }
}

let id = 1;

export async function POST(request) {
    const {titulo, descricao} = await request.json();
    
    try {
        const tarefa = { titulo, descricao, id: (id++).toString() }
        adicionarTarefa(tarefa)

        return NextResponse.json({message: "OK", tarefa}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Ocorreu um Erro", error}, {status: 500})
    }
}