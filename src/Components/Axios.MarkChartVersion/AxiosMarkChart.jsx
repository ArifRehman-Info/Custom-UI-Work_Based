import { BarChart, YAxis } from 'recharts';
import React, { use } from 'react';
import { Bar, Tooltip, XAxis } from 'recharts';

const AxiosMarkChart = ({markPromise}) => {
 
    const markDataRes =use(markPromise);
   const markData =markDataRes.data;

const markChartData = markData.map(studentData =>{
    const student ={
        id: studentData.id,
        name: studentData.name,
        math:studentData.marks.math,
        english:studentData.marks.english,
        science:studentData.marks.science,
        grade:studentData.grade
    }
    // for average check 
    const avg =(student.english+student.math+student.science)/3;
    student.avg =avg;
    return student
})

    return (
        <div>
            <BarChart width={700} height ={400} data={markChartData}>
            <XAxis dataKey="name" ></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
            <Bar dataKey='math' fill='gold'></Bar>
            <Bar dataKey="english" fill='green'></Bar>
            <Bar dataKey='science' fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default AxiosMarkChart;