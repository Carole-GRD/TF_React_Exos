import { useRef } from "react";
import { useState } from "react";
import Form from "./form";
import Tasks from "./tasks";

const TodoList = ()=> {

    const [tasks, setTasks] = useState([]);

    const taskId = useRef(1);

    const addTask = (taskToAdd) => {
        const newTask = {
            ...taskToAdd,
            id: taskId.current
        }
        taskId.current++;
        // setTasks(tasks => [newTask, ...tasks]);
        setTasks(tasks => [...tasks, newTask]);
        // -------------------------
        // OU BIEN
        // si on ajoute l'id dans le formulaire avec nanoid par exemple 
        // voir code de Pierre
        // setTasks([...tasks, taskToAdd]);
    }

    const completeTask = (taskIdCompleted) => {
        // setTasks(tasks => {
        //     const copy = [...tasks];
        //     const taskComplete = copy.find(task => task.id === taskIdCompleted);
        //     taskComplete.isComplete = true;
        //     return copy;
        // })
        // -------------------------
        // OU BIEN
        // const taskCompleted = tasks.map(task => {
        //     if (task.id === taskIdCompleted) {
        //         return { ...task, isComplete: true}
        //     }
        //     else {
        //         return task
        //     }
        // })
        // setTasks(taskCompleted)
        // -------------------------
        // OU BIEN
        setTasks(tasks => tasks.map(task => 
            task.id !== taskIdCompleted ? task : { ...task, isComplete: true })
        );
        
        
    }

    const deleteTask = (taskIdToDelete) => {
        // const newTaskList = tasks.filter(task => task.id !== taskIdToDelete);
        // setTasks(newTaskList);
        // -------------------------
        // OU BIEN
        setTasks(tasks => tasks.filter(task => task.id !== taskIdToDelete));
    }

    return (
        <>  
            <Form onAddTask={addTask} />
            <Tasks taskList={tasks}
                onDeleteTask={deleteTask}
                onCompleteTask={completeTask} />
        </>
    )
}


export default TodoList;