import { AiFillEye, AiFillEdit } from 'react-icons/ai'
import { BtnExcluir } from './BtnExcluir'
import Link from 'next/link';

async function obterTarefas() {
    try {
        const request = await fetch(`http:localhost:3000/api/tarefas`, { cache: 'no-store' });

        if (!request.ok) {
            throw new Error("Falha ao encontrar as tarefas")
        }

        return request.json()
    } catch (error) {
        throw new Error("Erro ao carregar as tarefas", error)
    }
}

export default async function ToDoList() {
    const { tarefas } = await obterTarefas();

    return (
        <>
            {tarefas.map((tarefa) => (
                <div className="flex justify-center mt-4">
                    <div className="border-2 flex justify-between shadow-md shadow-gray-400 w-11/12 md:w-9/12 sm:w-3/5 px-6 py-3 rounded-2xl border-gray-500">
                        <div>
                            <h1 className="font-bold text-lg md:text-xl sm:text-2xl">{tarefa.titulo}</h1>
                        </div>
                        <div className='flex gap-1 sm:gap-3 items-center'>
                            <AiFillEye className='text-green-700' size={26} />
                            <Link href={`/editarTarefa/${tarefa.id}`}>
                                <AiFillEdit className='text-blue-700' size={26} />
                            </Link>
                            <BtnExcluir />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}