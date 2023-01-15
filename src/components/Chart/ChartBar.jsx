import "./ChartBar.css"

export const ChartBar = ({maximumPrice, currentPrice, label})=> {
    
    const percentage = (currentPrice/maximumPrice)*100
    return (
        
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:`${percentage}%`}}></div>
            </div>
            <p className="chart-bar__label">{label}</p>
        </div>
    )
}