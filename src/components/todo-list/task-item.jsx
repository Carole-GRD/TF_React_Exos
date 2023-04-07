import clsx from "clsx";
import style from './todo.module.css';

const TaskItem = ( { id, name, descr, priority, isComplete, onComplete, onDelete } )=> {

    return (
        <>
            <article className={clsx(style.item, isComplete === true && style.complete)}>
                <h3>
                    {name} 
                    <span className={clsx((priority === 'Urgent' && style.urgent), style.priority)}>
                        {priority}
                    </span>
                </h3>
                <p>{descr}</p>
                <div>
                    <button onClick={() => onComplete(id)} 
                            disabled={isComplete === true && 'disabled'}>
                        Terminer
                    </button>
                    <button onClick={() => onDelete(id)}>Supprimer</button>
                </div>
            </article>
        </>
    )
}


export default TaskItem;