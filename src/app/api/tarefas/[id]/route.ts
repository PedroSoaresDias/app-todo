import Tarefa from "@/Models/tarefa";
import conectarMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}) {
    const { id } = params;
    await conectarMongoDB();
    const tarefa = await Tarefa.findOne({ _id: id });
    return NextResponse.json({tarefa}, {status: 200})
}

export async function PUT(request: Request, {params}) {
    const { id } = params;
    const { novoTitulo: titulo, novaDescricao: descricao } = await request.json();
    await conectarMongoDB();
    await Tarefa.findByIdAndUpdate(id, { titulo, descricao });
    return NextResponse.json({message: "Tarefa atualizada"}, {status: 200})
}