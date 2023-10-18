import { NextResponse } from "next/server";
import conectarMongoDB from "@/lib/mongodb";
import Tarefa from "@/Models/tarefa";

export async function GET() {
    await conectarMongoDB();
    const tarefas = await Tarefa.find();
    return NextResponse.json({ tarefas });
}

export async function POST(request: Request) {
    const { titulo, descricao } = await request.json();
    await conectarMongoDB();
    await Tarefa.create({ titulo, descricao });
    return NextResponse.json({message: "Tarefa Criada"}, {status: 201})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await conectarMongoDB();
    await Tarefa.findByIdAndDelete(id);
    return NextResponse.json({message: "Tarefa excluída"}, {status: 200})
}