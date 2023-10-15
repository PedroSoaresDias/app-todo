import { atualizarTarefa, excluirTarefa, getPorId } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const id = request.url.split("tarefas/");
        const tarefa = getPorId(id);
        if (!tarefa) {
            return NextResponse.json({ message: "Ocorreu um Erro" }, { status: 404 });
        }
        return NextResponse.json({ message: "OK", tarefa }, { status: 200 });
    } catch (error) {
        return NextResponse.json({message: "Ocorreu um Erro", error},{status:500})
    }
}

export async function PUT(request) {
    try {
        const { titulo, descricao } = await request.json();
        const id = request.url.split("tarefas/");
        atualizarTarefa(id, titulo, descricao);
        return NextResponse.json({message: "OK"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Ocorreu um Erro", error}, {status: 500})
    }
}

export async function DELETE(request) {
    try {
        const id = request.url.split("tarefas/");
        excluirTarefa(id)
        return NextResponse.json({message: "OK"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Ocorreu um Erro", error}, {status: 500})
    }
}