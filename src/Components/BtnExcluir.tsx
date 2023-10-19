"use client"

import { BsTrash3Fill } from 'react-icons/bs'
import { useRouter } from 'next/navigation';

export function BtnExcluir({ id }: {id: string}) {
    const router = useRouter();
    
    async function ExcluirTarefa() {
        const confirmar = confirm("Tem certeza que você quer excluir essa tarefa?");

        if (confirmar) {
            const request = await fetch(`http://localhost:3000/api/tarefas?id=${id}`, {
                method: "DELETE",
            })

            if (request.ok) {
                router.refresh();
            }
        }
    }

    return (
        <button onClick={ExcluirTarefa}>
            <BsTrash3Fill className='text-red-600' size={26} />
        </button>
    )
}