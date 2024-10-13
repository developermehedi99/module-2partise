import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const Taskboard = () => {
    const initialValue ={
        'id':crypto.randomUUID(),
        'title':'Learn react-next',
        'description':'React js is a most popular library in javascript',
        'tags':['js','react','next'],
        'priority':'high',
        'isFavorite':true
    }
    const [tasks, setTasks] = useState([initialValue]);

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
         <SearchTask></SearchTask>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction></TaskAction>
          <TaskList tasks={tasks}></TaskList>
        </div>
      </div>
    </section>
  );
};

export default Taskboard;
