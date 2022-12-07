import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Electricity',
    uv: 4000,
    Sold: 2400,
    amt: 2400,
  },
  {
    name: 'Shoes',
    uv: 3000,
    Sold: 1398,
    amt: 2210,
  },
  {
    name: 'Men Clothes',
    uv: 2000,
    Sold: 9800,
    amt: 2290,
  },
  {
    name: 'Women Clothes',
    uv: 2780,
    Sold: 3908,
    amt: 2000,
  },
  {
    name: 'Sports',
    uv: 1890,
    Sold: 4800,
    amt: 2181,
  },
  {
    name: 'Toy Babby',
    uv: 2390,
    Sold: 3800,
    amt: 2500,
  },
  {
    name: 'Decoration',
    uv: 3490,
    Sold: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render() {
    return (
      
        <BarChart
          width={900}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sold" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
     
    );
  }
}