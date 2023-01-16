
import './App.css';
import { useState } from "react";
import Expenses from './components/expenses/Expenses';
import NewExpence from './components/new-expense/NewExpense';
import styles from "./App.module.css"

// Now its App js

const expensesDefault = [
  {
    title: "Toilet paper",
    price: 300,
    date: "2022-06-30"
  },
  {
    title: "Charger",
    price: 400,
    date: "2021-03-23"
  }
]





function App() {
  const [expenses, setExpenses] = useState(expensesDefault)
const addNewExpenseHandler = (data)=>{
  const updatedExpenses = [...expenses]
  updatedExpenses.push(data)
 setExpenses(updatedExpenses)
}
  // ahaha
  return (         
    <div className={styles.chart}>
     
      <NewExpence onNewExpenseAdd={addNewExpenseHandler}
      />
      <Expenses expenses = {expenses}/>
     
      
    </div>
    
  );
}



export default App;


/// REACT

// components returns JSX code
//// 1. is a Function
//// 2. returns jsx
//// 3. starts with a capital letter
//// 4. the name of the component is a noun
//// 5. has an only one parent


// SPA

// reactive (state, VDom)
////




// declarative

// state

// render

// each component has own state

// keys

// lifting state up