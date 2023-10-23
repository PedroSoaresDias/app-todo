import ToDoList from "@/Components/ToDoList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-center text-xl mt-5">Lista de Tarefas</h1>
      <div className="flex justify-center">
        <Link className="bg-violet-700 p-3 mt-5 text-center text-lg font-semibold text-white w-11/12 md:w-9/12 rounded-md hover:bg-violet-800 transition-all hover:scale-105 duration-200" href={"/criarTarefa"}>Criar nova Tarefa</Link>
      </div>
      <ToDoList />
    </>
  )
}
