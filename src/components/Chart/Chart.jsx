import styles from "./Chart.module.css";
import { ChartBar } from "./ChartBar";

export const Chart = (props) => {
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

  props.expenses.forEach((item) => {
    const newDateMonth = new Date(item.date);

    const monthNumber = newDateMonth.getMonth();

    months[monthNumber].currentPrice += item.price;
  });
  const getContainerClassName = ()=>{
    return `${
      props.theme === "violet" ? styles.chartChartreuse : styles.chartViolet
    } ${styles.chart}`
  }

  return (
    <div
      className={getContainerClassName()}
    >
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
    </div>
  );
};
