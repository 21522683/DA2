import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#21C400', '#FF5A28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const MyRevanueChartOrder = ({dataChart}) => {
  var data = [
    { name: 'Chờ xét duyệt', value: dataChart.chuaDuyet },
    { name: 'Đã xét duyệt', value: dataChart.daDuyet },
    { name: 'Đã bị hủy', value: dataChart.daHuy },
  ]
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={140}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value} đơn hàng`} />
        <Legend layout="vertical" verticalAlign="middle" align="right"/>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default MyRevanueChartOrder;
