import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Line, LineChart,  XAxis, YAxis } from 'recharts';
const students = [
    {
      id: 101,
      name: "Alice Johnson",
      age: 16,
      marks: {
        math: 85,
        english: 78,
        science: 92
      },
      grade: "A"
    },
    {
      id: 102,
      name: "Ben Carter",
      age: 17,
      marks: {
        math: 72,
        english: 81,
        science: 75
      },
      grade: "B"
    },
    {
      id: 103,
      name: "Clara Lee",
      age: 15,
      marks: {
        math: 90,
        english: 88,
        science: 94
      },
      grade: "A+"
    },
    {
      id: 104,
      name: "Daniel Kim",
      age: 16,
      marks: {
        math: 65,
        english: 70,
        science: 60
      },
      grade: "C"
    },
    {
      id: 105,
      name: "Emily Singh",
      age: 17,
      marks: {
        math: 78,
        english: 85,
        science: 80
      },
      grade: "B+"
    },
    {
      id: 106,
      name: "Farhan Malik",
      age: 16,
      marks: {
        math: 92,
        english: 91,
        science: 89
      },
      grade: "A+"
    },
    {
      id: 107,
      name: "Grace Lin",
      age: 15,
      marks: {
        math: 88,
        english: 79,
        science: 85
      },
      grade: "A"
    },
    {
      id: 108,
      name: "Henry Zhou",
      age: 17,
      marks: {
        math: 60,
        english: 62,
        science: 58
      },
      grade: "D"
    },
    {
      id: 109,
      name: "Isha Kapoor",
      age: 16,
      marks: {
        math: 74,
        english: 80,
        science: 78
      },
      grade: "B"
    },
    {
      id: 110,
      name: "Jackie Tran",
      age: 15,
      marks: {
        math: 95,
        english: 90,
        science: 96
      },
      grade: "A+"
    }
  ];
  
const Chart = () => {
    return (
        <div className='flex'>
           <LineChart width={600} height={400} data={students}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
             <Line type="monotone" dataKey="marks.science" stroke="#8884d8" />
           </LineChart>

           <PieChart width={600} height={400}>
           <Pie  data={students} dataKey="age" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
           <Pie  data={students} dataKey="id" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
           </PieChart>
          </div>
          
    );
};

export default Chart;