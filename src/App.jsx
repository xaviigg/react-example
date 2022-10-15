import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import {useContext} from 'react';
import {TaskContext} from './context/TaskContext'

function App() {
  
  const {tasks, createTask} = useContext(TaskContext)

  if (tasks.length !== 0) {
    return (
      <main className="bg-zinc-900 h-screen">
        <div className="container mx-auto p-10">
        <TaskForm/>
        <TaskList/>
      </div>
      </main>
    );
  } else {
    return (
      <main className="bg-zinc-900 h-screen">
        <div className="container mx-auto p-10">
        <TaskForm createTask={createTask} />
        <h1 className="text-white text-4xl font-bold text-center">List of tasks is empty...</h1>
      </div>
      </main>
    );
  }
}

export default App;
