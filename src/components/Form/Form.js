import React, { useState } from 'react'

import Grid  from '../Grid/Grid';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);
  
    const generateID = () => Math.round(Math.random() * 1000);
  
    const handleSave = () => {
      if (!desc || !amount) {
        alert("Informe a descrição e o valor!");
        return;
      } else if (amount < 1) {
        alert("O valor tem que ser positivo!");
        return;
      }
  
      const transaction = {
        id: generateID(),
        desc: desc,
        amount: amount,
        expense: isExpense,
      };
  
      handleAdd(transaction);
  
      setDesc("");
      setAmount("");
    };
   



    return <><div className='FormContainer'>
        <div className='InputContent'>
            <label>Descrição: </label>
            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} /></div>

        <div className='InputContent'>
            <label>Valor: </label>
            <input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className='RadioGroup'>
            <input type="radio" defaultChecked name='group1' id='rIncome' onChange={() => setExpense(!isExpense)}></input>
            <label htmlFor='rIncome'>Entrada</label>
            <input type="radio"name='group1' id='rExpenses' onChange={() => setExpense(!isExpense)}></input>
            <label htmlFor='rExpenses'>Saída</label>

        </div>
        <button onClick={handleSave}>ADICIONAR</button>

    </div><Grid itens={transactionsList} setItens={setTransactionsList} /></>
}

export default Form