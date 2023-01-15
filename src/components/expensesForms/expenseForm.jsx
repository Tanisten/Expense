import { useState } from "react"
import Button from "../UI/button/button.jsx"
import FormInput from "../UI/formInput/formInput"
import './expenseform.css'



 export const ExpenseForm =(props)=>{


  const [ title, setTitle]= useState('')
  const [ price, setprice]=useState(0)
  const [ date,  setDate ]=useState(null)

  // title Event

  const titleInputChangeHandler = (event)=>{
    console.log(event.target.value)
       setTitle(event.target.value   )
  }

  // price Event
const priceInputChangeHandler = (event)=>{
  const value = event.target.value
  if(value.charAt(0) !=='-'){
    setprice(event.target.value)
  }

  // console.log(event.target.value)
}

// Date Event
const dateInputChangeHandler=(event)=>{
  setDate(event.target.value)
}

//

const cancelHandler =(event)=>{
event.preventDefault()
props.onShowForm()
}

const saveHandler = (event)=>{
  event.preventDefault()
const expenseData = {
   title,
   price,
   date,
}

props.onNewExpenseAdd(expenseData)
}

// cancelHandler()
 return(

  <form className="forms">

<div className="div-1">
<FormInput
   id="name"
    labelName="Название" 
   inputType="text" 
   placeholder="Введите текст"
   onChange={titleInputChangeHandler}
    value={title} 
   />
  <FormInput

 id="date"
  labelName="Дата" 
   inputType="date" 
   placeholder="дд.мм.гггг"
   value={date}
   onChange={dateInputChangeHandler}/>
</div>

 <div className="div-2">
 <FormInput
 id="price"
  labelName="Количество денег" 
   inputType="number"
   value={price}
   onChange={priceInputChangeHandler}
    />


 </div>

 <div className="div-3">
 <Button title="Отмена" onClick={cancelHandler}/>
   <Button title="Добавить расходы"  onClick= {saveHandler}/>
 </div>
  </form>
 )
}
