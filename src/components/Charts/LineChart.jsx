import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	LineSeries,
	DateTime,
	Legend,
	Tooltip,
} from "@syncfusion/ej2-react-charts";
import classes from "./chart.module.css";
import {
	lineCustomSeries,
	LinePrimaryXAxis,
	LinePrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
	const { currentMode } = useStateContext();

	return (
		<div className={classes.chart}>
			<ChartComponent
				id="line-chart"
				height="420px"
				primaryXAxis={LinePrimaryXAxis}
				primaryYAxis={LinePrimaryYAxis}
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true }}
				background={currentMode === "Dark" ? "#33373E" : "#fff"}
				legendSettings={{ background: "white" }}
			>
				<Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
				<SeriesCollectionDirective>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					{lineCustomSeries.map((item, index) => (
						<SeriesDirective key={index} {...item} />
					))}
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};

export default LineChart;
