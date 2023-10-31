import { NextResponse } from "next/server";
import conectarMongoDB from "@/lib/mongodb";
import Tarefa from "@/Models/tarefa";

export async function GET() {
    await conectarMongoDB();
    const tarefas = await Tarefa.find();
    return NextResponse.json({ tarefas });
}

export async function POST(request: Request) {
    try {
        const { titulo, descricao } = await request.json();
        await conectarMongoDB();
        await Tarefa.create({ titulo, descricao });
        return NextResponse.json({message: "Tarefa Criada"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "Não foi possível criar uma tarefa", error}, {status: 505})
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await conectarMongoDB();
        await Tarefa.findByIdAndDelete(id);
        return NextResponse.json({message: "Tarefa excluída"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Não foi possível excluir uma tarefa", error}, {status: 505})
    }
}