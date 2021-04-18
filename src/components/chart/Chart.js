import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
    console.log(dataPointValue);
    const totalMax = Math.max(...dataPointValue)
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />)}
        </div>
    )

}

export default Chart;