import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

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
    const [showModal, setShowModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    const handleAddEditTask=(newTask, isAdd)=>{
      if(isAdd){
        setTasks([...tasks, newTask]);
      }else{
        setTasks(tasks.map(task =>{
          if(task.id === newTask.id){
            return newTask;
          }
          return task;
        }))
      }
      
      setShowModal(false);
    }

    const handleEditTask =(task)=>{
      setTaskToUpdate(task);
      setShowModal(true);
    }

    const handleClose=()=>{
      setShowModal(false);
      setTaskToUpdate(null);
    }

    const handleDelete=(taskId)=>{
      const afterDeleteTask = tasks.filter(task => task.id !== taskId);
      setTasks(afterDeleteTask);
    }
    function onDeleteAll(){
      tasks.length=0;
      setTasks([...tasks])
    }
    const onSearch=(searchT)=>{
      const filtered = tasks.filter(task=> 
        task.title.toLocaleLowerCase().includes(searchT.toLocaleLowerCase()))
        setTasks([...filtered]);
    }

  return (
    <section className="mb-20" id="tasks">
      {showModal && <AddTaskModal 
      taskToUpdate={taskToUpdate}
      onSave={handleAddEditTask}
      handleClose={handleClose}
      ></AddTaskModal>}
      <div className="container">
        <div className="p-2 flex justify-end">
         <SearchTask onSearch={onSearch}></SearchTask>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onDeleteAll={onDeleteAll} handleTaskModal={()=> setShowModal(true)}></TaskAction>
          <TaskList onDelete={handleDelete} onEdit={handleEditTask} tasks={tasks}></TaskList>
        </div>
      </div>
    </section>
  );
};

export default Taskboard;
