"use client"
import React, { useState } from 'react';
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
import { faker } from '@faker-js/faker';

export default function WeeklySalesCart() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: false,
                text: "Chart.js Line Chart"
            }
        }
    };

    const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // Updated to match version 7
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            }
        ]
    };

    const tabs = [
        { title: "Sales", type: "sales" },
        { title: "Orders", type: "orders" }
    ];

    const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

    return (
        <div className='bg-slate-200 dark:bg-slate-700 p-8 rounded-lg'>
            <h2 className='text-xl font-bold mb-4 text-slate-900 dark:text-slate-100'>Weekly Sales</h2>
            <div className='p-4'>
                {/* Tabs */}
                <div className="text-sm font-medium text-center dark:text-gray-200 text-gray-500 border-b dark:border-gray-200 border-gray-400">
                    <ul className="flex flex-wrap -mb-px">
                        {tabs.map((tab, i) => (
                            <li className="me-2" key={i}>
                                <button onClick={() => setChartToDisplay(tab.type)}
                                    className={chartToDisplay === tab.type ?
                                        "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active" :
                                        "inline-block p-4 border-b-2 border-transparent rounded-t-lg dark:hover:text-gray-300 hover:text-gray-500 dark:hover:border-gray-100 hover:border-gray-200"}>
                                    {tab.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Graph */}
                {chartToDisplay === "sales" && <Line options={options} data={data} />}
                {chartToDisplay === "orders" && <Line options={options} data={data} />}
            </div>
        </div>
    )
}
