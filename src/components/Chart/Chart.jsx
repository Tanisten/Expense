import styles from "./Chart.module.css";
import { ChartBar } from "./ChartBar";
import styled from "styled-components"




export const Chart = ({expenses, theme, ...rest}) => {
  const maximumPrice = 2000;
  const months = [
    {
      label: "January",
      currentPrice: 0,
    },
    {
      label: "February",
      currentPrice: 0,
    },
    {
      label: "March",
      currentPrice: 0,
    },
    {
      label: "April",
      currentPrice: 0,
    },
    {
      label: "May",
      currentPrice: 0,
    },
    {
      label: "June",
      currentPrice: 0,
    },
    {
      label: "July",
      currentPrice: 0,
    },
    {
      label: "August",
      currentPrice: 0,
    },
    {
      label: "September",
      currentPrice: 0,
    },
    {
      label: "Oktober",
      currentPrice: 0,
    },
    {
      label: "November",
      currentPrice: 0,
    },
    {
      label: "December",
      currentPrice: 0,
    },
  ];

  expenses.forEach((item) => {
    const newDateMonth = new Date(item.date);

    const monthNumber = newDateMonth.getMonth();

    months[monthNumber].currentPrice += item.price;
  });
  const getContainerClassName = ()=>{
    return `${
      theme === "violet" ? styles.chartChartreuse : styles.chartViolet
    } ${styles.chart}`
  }

  return (
   
    <Container theme={theme} padding={"2rem"} {...rest}>
      <StyledButton color="green">Text</StyledButton>
      <StyledButton color="blue">Text</StyledButton>
      {months.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            currentPrice={item.currentPrice}
            maximumPrice={maximumPrice}
          />
        );
      })}
    </Container>
  );
};



export const getTheme = (props)=>{
    let theme = "chartreuse"
   if(props.theme==="violet"){
     theme = "violet"
   }
   if(props.theme==="red"){
     theme = "red"
   }
   
   
   return (theme)
   }
   
   
   export const Container = styled.div`
     padding: ${(props)=>{
       return (props.padding)
   
     }};
     border-radius: 12px;
     text-align: center;
     display: flex;
     justify-content: space-around;
     height: 10rem;
     background-color: ${getTheme};
     
   `
   
   export const StyledButton = styled.button`
   background-color: ${props=>props.color}
   `
   