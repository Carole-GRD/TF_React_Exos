import { useState } from "react";
import { useId } from "react";

import style from './calculator.module.css';
import { operatorEnum } from "./operator-enum";

const Calculator = () => {

    const id = useId();

    const [nb1, setNb1] = useState('');
    // const [op, setOp] = useState('+');
    const [op, setOp] = useState(operatorEnum.plus);
    const [nb2, setNb2] = useState('');
    const [result, setResult] = useState('');



    /**
     * Fonction pour gérer les inputs de type number
     * -> pas d'entrée de lettres
     * -> la virgule est remplacée par un point
     * -> n'accepte qu'un seul point
     * @param {string} value La valeur d'un input
     * @param {(value : string) => {}} setNumber  Le mutateur d'un state
     */
     const handleChange = (value, setNumber) => {

        // regex qui n'accepte que les nombres entiers et décimaux
        const regex = /^[0-9]+((\.|,)[0-9]*)?$/;

        if (value === '' || regex.test(value)) {
            setNumber(value.replace(',', '.'));
        }
    }


   
    const handleSubmit = (e) => {
        e.preventDefault();

        const n1 = parseFloat(nb1);
        const n2 = parseFloat(nb2);
        let opResult;

        if (isNaN(n1) || isNaN(n2)) {
            opResult = 'Entrer des nombres !'
        }
        else if (op === operatorEnum.plus) {
            opResult = n1 + n2;
        }
        else if (op === operatorEnum.min) {
            opResult = n1 - n2;
        }
        else if (op === operatorEnum.mult) {
            opResult = (n1 * n2).toFixed(2);
        }
        else if (op === operatorEnum.div) {
            if (n2 === 0) {
                opResult = 'Division par 0 impossible !'
            }
            else {
                opResult = (n1 / n2).toFixed(2);
            }
        }
        else if (op === operatorEnum.pow) {
            opResult = (n1 ** n2).toFixed(2);
        }
        else if (op === operatorEnum.root) {
            opResult = (Math.pow(n1, 1/n2)).toFixed(2);
        }
        else {
            opResult = 'Erreur';
        }

        setResult(opResult);
    }

    

    return (
        <form className={style.cadre} onSubmit={handleSubmit}>
            <div>
                <label htmlFor={id + 'nb1'}>Nb 1 : </label>
                <input id={id + 'nb1'} type="text"
                    value={nb1}
                    // onChange={e => setNb1(e.target.value)}
                    onChange={e => handleChange(e.target.value, setNb1)}
                    
                />
            </div>
            <div>
                <label htmlFor={id + 'op'}>Opérations : </label>
                <select id={id + 'op'} type="text"
                    value={op}
                    onChange={e => setOp(e.target.value)}>
                    <option value={operatorEnum.plus}>+</option>
                    <option value={operatorEnum.min}>-</option>
                    <option value={operatorEnum.mult}>x</option>
                    <option value={operatorEnum.div}>/</option>
                    <option value={operatorEnum.pow}>^</option>
                    <option value={operatorEnum.root}>√</option>
                </select>
            </div>
            <div>
                <label htmlFor={id + 'nb2'}>Nb 2 : </label>
                <input id={id + 'nb2'} type="text"
                    value={nb2}
                    // onChange={e => setNb2(e.target.value)}
                    onChange={e => handleChange(e.target.value, setNb2)}
                />
            </div>

            <div>
                <button>Calculer</button>
            </div>
            <div>
                <label htmlFor={id + 'res'}>Résultat : </label>
                <input id={id + 'res'} type="text" value={result} readOnly />
            </div>
        </form>  
    )
}

export default Calculator;