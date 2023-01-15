import { useState } from "react";
import { Chart } from "../Chart/Chart";
import ExpenseItem from "../expense-item/ExpenseItem";
import { ExpensesFilter } from "../ExpensesFilter/ExpensesFilter";
import "./expense.css"

const Expenses = (props) => {

  /* console.log("expenses",props.expenses) */
  const [selectedYear, setSelectedYear] = useState("2023")
  
  const yearchangeHandler =(event)=>{
setSelectedYear(event.target.value)
  }

const filteredItems = props.expenses.filter((element)=>{
  const newDateFromParameter = new Date(element.date)

const parameterYear = newDateFromParameter.getFullYear().toString()

return parameterYear === selectedYear
})
  console.log(filteredItems)
  return (

    
    <ul className="style"
      
    >
      <ExpensesFilter value={selectedYear} onChange={yearchangeHandler} />
      <Chart expenses={filteredItems} theme="violet"/>
      <Chart expenses={filteredItems} theme="chartreuse"/>


      
      {filteredItems.map((element) => {
        return (
          <ExpenseItem
            key={element.title}
            title={element.title}
            price={element.price}
            date={element.date}
          />
        );
      })}
    </ul>
  );
};

export default Expenses;
