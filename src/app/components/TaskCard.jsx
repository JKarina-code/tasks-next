"use client";
import { useRouter } from "next/navigation";

export function TaskCard({ task }) {
  const router = useRouter();

  const navigTask = () => {
    router.push("/tasks/edit/" + task.id);
  };
  return (
    <div
      className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
      onClick={navigTask}
    >
      <h3 className="font-semibold text-2xl mb-2"> Title: {task.title}</h3>
      <p> Description: {task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
