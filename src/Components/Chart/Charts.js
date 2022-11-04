import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        uv: 4000,
        pv: 1400,
        amt: 2400,
    },
    {
        name: 'February',
        uv: 7000,
        pv: 2898,
        amt: 2210,
    },
    {
        name: 'March',
        uv: 4600,
        pv: 2098,
        amt: 2210,
    },
    {
        name: 'April',
        uv: 8490,
        pv: 800,
        amt: 2100,
    },
    {
        name: 'May',
        uv: 9000,
        pv: 4098,
        amt: 2210,
    },
    {
        name: 'June',
        uv: 3500,
        pv: 1998,
        amt: 2210,
    },
    {
        name: 'July',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'August',
        uv: 8780,
        pv: 5908,
        amt: 2000,
    },
    {
        name: 'September',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Oktober',
        uv: 5090,
        pv: 1000,
        amt: 2500,
    },
    {
        name: 'November',
        uv: 7490,
        pv: 2693,
        amt: 2100,
    },
    {
        name: 'December',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export function Chartt() {

    return (
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart
                width={500}
                height={600}
                data={data}
                margin={{
                    top: 5,
                    right: 10,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#1976D2" />
                <Bar dataKey="uv" fill="#C7C7C7" />
            </BarChart>
        </ResponsiveContainer>
    );
}
