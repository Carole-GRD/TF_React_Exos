import TaskItem from "./task-item";


const Task = ( { taskList, onCompleteTask, onDeleteTask } )=> {

    

    return (
        <>
            <h2>Liste des tâches</h2>
            {taskList.map(
                (task) => <TaskItem key={task.id} {...task}
                    onComplete={onCompleteTask}
                    onDelete={onDeleteTask}/>
            )}
            
        </>
    )
}

Task.defaultProps = {
    taskList: []
}

export default Task;