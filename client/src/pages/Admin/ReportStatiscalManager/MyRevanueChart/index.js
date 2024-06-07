import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import formatMoney from '../../../../utils/formatMoney'


const COLORS = ['#0068C4', '#1FCC00', '#10004A', '#FF6213', '#00A8A0'];

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

const MyRevanueChart = ({dataChart}) => {
  var data = [
    { name: 'Trị giá đơn hàng', value: dataChart.tongTriGia },
    { name: 'Thuế phải chịu', value: dataChart.tongThue },
    { name: 'Thuê container', value: dataChart.tongThueContainer },
    { name: 'Thuê tàu', value: dataChart.tongThueTau },
    { name: 'Phí vận chuyển', value: dataChart.tongPhiVanChuyen },
  ];
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${formatMoney(value)}`} />
        <Legend layout="vertical" verticalAlign="middle" align="right"/>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default MyRevanueChart;
