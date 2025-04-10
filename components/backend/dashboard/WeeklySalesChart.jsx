"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker"; // Updated import

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Dữ liệu hàng tháng",
    },
  },
};
const labels = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

export default function WeeklySalesChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const tabs = [
    {
      title: "Bán hàng",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Bán hàng",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // Updated function
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      },
    },
    {
      title: "Đặt hàng",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: "Đặt hàng",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // Updated function
            borderColor: "rgb(0, 137, 132)",
            backgroundColor: "rgba(0, 137, 132, 0.9)",
          },
        ],
      },
    },
  ];
  const [chartTodDissplay, setChartTodDissplay] = useState(tabs[0].type);

  return (
    <div className=" dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl ">
      <h2 className="text-xl font-bold text-slate-800 dark:text-slate-50">
        Biểu đồ hàng tuần{" "}
      </h2>
      <div className="p-4">
        {/* Tabs */}
        <div className="text-sm font-medium text-center text-slate-800 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => {
              return (
                <li className="me-2" key={i}>
                  <button
                    onClick={() => setChartTodDissplay(tab.type)}
                    className={
                      chartTodDissplay == tab.type
                        ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500 "
                        : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-100 dark:hover:text-gray-300"
                    }
                  >
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Content  */}
        {tabs.map((tab, i) => {
          if (chartTodDissplay === tab.type) {
            return <Line key={tab.type} options={options} data={tab.data} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
