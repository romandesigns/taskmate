import TaskCard from "@/components/task/TaskCard";
import TaskForm from "@/components/task/TaskForm";

function Home() {
  return (
    <main className="border-t mt-8 pt-10">
      <div className="w-full flex justify-end">
        <TaskForm />
      </div>
      <section className="w-full grid items-start justify-start grid-cols-4 gap-4 mt-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </section>
    </main>
  );
}

export default Home;
