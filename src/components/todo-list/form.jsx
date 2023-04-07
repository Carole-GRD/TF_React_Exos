import { useState } from "react";
import { useId } from "react";

import { priorityEnum } from './priority-enum';


const Form = ({onAddTask})=> {

    const id = useId();

    const [nameToAdd, setNameToAdd] = useState('');
    const [descrToAdd, setDescrToAdd] = useState('');
    const [priorityToAdd, setPriorityToAdd] = useState(priorityEnum.basse);
    const [validName, setValidName] = useState('');
    const [validDescr, setValidDescr] = useState('');
    // const [taskId, setTaskId] = useState(1);



    const handleValidName = () => {
        if (nameToAdd.trim() === '') {
            setValidName('Ce champ ne peut pas être vide');
        }
    }
    const handleName = () => {
        if (nameToAdd.trim() === '') {
            setValidName('');
        }
    }

    const handleValidDescr = () => {
        if (descrToAdd.trim() === '') {
            setValidDescr('Ce champ ne peut pas être vide');
        }
    }
    const handleDescr = () => {
        if (descrToAdd.trim() === '') {
            setValidDescr('');
        }
    }
    
    

    
    const handleSubmit = (e) => {
        e.preventDefault();

        // setTaskId(taskId => taskId + 1);
        
        const taskToAdd = {
            name: nameToAdd,
            descr: descrToAdd,
            priority: priorityToAdd,
            isComplete: false,
            // id: taskId
        }
        // console.log('task (form) : ', task);

        onAddTask(taskToAdd);

        setNameToAdd('');
        setDescrToAdd('');
        setPriorityToAdd(priorityEnum.basse);
    }


    return (
        <>
            <h2>Ajouter une nouvelle tâche</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={id + 'name'}>Nom</label>
                    <input id={id + 'name'} type="text"
                        onFocus={handleName}
                        onBlur={handleValidName}
                        value={nameToAdd} 
                        onChange={e => setNameToAdd(e.target.value)} />
                        {/* onChange={e => handleValidName(e.target.value, setNameToAdd)} /> */}
                    {validName}
                </div>
                <div>
                    <label htmlFor={id + 'descr'}>Description</label>
                    <input id={id + 'descr'} type="text"
                        onFocus={handleDescr}
                        onBlur={handleValidDescr}
                        value={descrToAdd} 
                        onChange={e => setDescrToAdd(e.target.value)} />
                        {/* onChange={e => handleValidDescr(e.target.value, setDescrToAdd)} /> */}
                    {validDescr}
                </div>
                <div>
                    <label htmlFor={id + 'prior'}>Priorité</label>
                    <select id={id + 'prior'}
                        value={priorityToAdd} onChange={e => setPriorityToAdd(e.target.value)} >
                        <option value={priorityEnum.basse}>Basse</option>
                        <option value={priorityEnum.normal}>Normal</option>
                        <option value={priorityEnum.urgent}>Urgent</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </>
    )
}

Form.defaultProps = {
    onAddTask: () => {}
}


export default Form;