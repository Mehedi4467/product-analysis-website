import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data));
    }, []);


    return (
        <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 py-10'>
            <div className='justify-self-center'>
                <h2 className='text-center uppercase text-lg font-bold text-blue-400 mb-10'>Month Wise Sell</h2>
                <LineChart width={400} height={250} data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />

                </LineChart>
            </div>
            <div className='justify-self-center'>
                <h2 className='text-center uppercase text-lg font-bold text-blue-400 mb-10'>Investment Vs revenue</h2>
                <AreaChart width={400} height={250} data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>


            <div className='justify-self-center'>
                <h2 className='text-center uppercase text-lg font-bold text-blue-400 md:mt-10 mb-4'>Investment Vs revenue</h2>
                <BarChart width={400} height={250} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className='justify-self-center'>
                <h2 className='text-center uppercase text-lg font-bold text-blue-400 md:mt-10 mb-4'>Sell Vs revenue</h2>
                <PieChart width={400} height={250}>
                    <Pie data={chartData} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={chartData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </div>


        </div>
    );
};

export default DashBoard;