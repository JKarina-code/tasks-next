import { Navbar } from "./components/Navbar";
import { prisma } from "../libs/prisma";
import { TaskCard } from "./components/TaskCard";

async function loadTasks() {
  return await prisma.task.findMany();
}

export default async function Home() {
  const tasks = await loadTasks();

  return (
    <div>
      <Navbar />

      <section className="container mx-auto text-white p-5">
        <div className="grid grid-cols-3 gap-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
    </div>
  );
}
