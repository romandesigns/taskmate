import { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "@/components/task/TaskCard";
import TaskForm, { TaskFormProps } from "@/components/task/TaskForm";

function Home() {
  const [tasks, setTasks] = useState<TaskFormProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/tasks")
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          setTasks(data);
          setIsLoading(false);
        }
      })
      .catch((err) => console.error(err));
  }, [tasks.length]);

  return (
    <main className="border-t mt-8 pt-10">
      <div className="w-full flex justify-end">
        <TaskForm setTasks={setTasks} />
      </div>
      <section className="w-full grid items-start justify-start grid-cols-4 gap-4 mt-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {isLoading && (
          <div className="w-full flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </section>
    </main>
  );
}

export default Home;
