import { NextResponse } from "next/server";
import { atualizarTarefa, excluirTarefa, getPorId } from "../../../../lib/data";

export async function GET(request: Request) {
    try {
        const id = request.url.split("tarefas/")[1];
        console.log(id);
        const tarefa = getPorId(id);
        if (!tarefa) {
            return NextResponse.json({ message: "Erro" }, { status: 404 });
        }
        return NextResponse.json({ message: "OK", tarefa }, { status: 200 });
    } catch (error) {
        return NextResponse.json({message: "Erro no servidor", error},{status:500})
    }
}

export async function PUT(request: Request) {
    try {
        const { titulo, descricao } = await request.json();
        const id = request.url.split("tarefas/")[1];
        atualizarTarefa(id, titulo, descricao);
        return NextResponse.json({message: "OK"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Ocorreu um Erro", error}, {status: 500})
    }
}

export async function DELETE(request: Request) {
    try {
        const id = request.url.split("tarefas/")[1];
        excluirTarefa(id)
        return NextResponse.json({message: "OK"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Ocorreu um Erro", error}, {status: 500})
    }
}