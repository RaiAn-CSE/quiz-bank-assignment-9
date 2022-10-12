import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'


const Statistics = () => {
    const loadData = useLoaderData();
    const data = loadData.data;

    return (
        <div className='chart'>
            <BarChart width={450} height={400} data={data}>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>
            <LineChart width={450} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default Statistics;