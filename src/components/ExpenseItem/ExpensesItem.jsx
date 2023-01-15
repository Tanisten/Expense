import './expensesItem.css'

export const ExpensesItem = (props)=>{
const {title, price, date} = props
 return(
  <div className='expenceItem'>
   <p className="date">{date.toString()}</p>
   <p className='title'>{title}</p>
   <p className='price'>{price}</p>
  </div>
 )
}
