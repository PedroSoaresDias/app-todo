import Tarefa from "@/Models/tarefa";
import conectarMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}) {
    try {
        const { id } = params;
        await conectarMongoDB();
        const tarefa = await Tarefa.findOne({ _id: id });
        return NextResponse.json({tarefa}, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Não foi possível encontrar essa tarefa", error}, {status: 404});
    }
}

export async function PUT(request: Request, {params}) {
    try {
        const { id } = params;
        const { novoTitulo: titulo, novaDescricao: descricao } = await request.json();
        await conectarMongoDB();
        await Tarefa.findByIdAndUpdate(id, { titulo, descricao });
        return NextResponse.json({message: "Tarefa atualizada"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Não foi possível atualizar essa tarefa", error}, {status: 505})
    }
}