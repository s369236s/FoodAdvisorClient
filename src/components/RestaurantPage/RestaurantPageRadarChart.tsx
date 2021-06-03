import React from "react";
import { Radar } from "react-chartjs-2";

const data = {
  labels: ["速度", "價格", "食物"],
  datasets: [
    {
      label: "各項評價",
      data: [5, 5, 5],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(0, 0, 0, 1)",
      borderWidth: 1,
      font: 24,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 24,
        },
        fontSize: 24,
      },
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 5,
      min: 0,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

interface Props {
  speed_star: string | undefined;
  price_star: string | undefined;
  food_star: string | undefined;
}

export const RadarChart: React.FC<Props> = ({
  speed_star,
  price_star,
  food_star,
}) => (
  <div className="chart-container">
    <Radar
      type="radar"
      data={{
        labels: ["速度", "價格", "食物"],
        datasets: [
          {
            label: "各項評價",
            data: [speed_star, price_star, food_star],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 1,
            font: 24,
          },
        ],
      }}
      options={options}
    />
  </div>
);
