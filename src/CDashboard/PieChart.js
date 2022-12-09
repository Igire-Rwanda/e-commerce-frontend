

// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
// import "../views/Dashbord/Dashboard.css";

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

//   render() {
//     return (
//       <PieChart width={800} height={400} onMouseEnter={this.onPieEnter} style={{position:"relative",bottom:"70rem",left:"200px"}}>
        
        
//         <Pie
//           data={data}
//           cx={420}
//           cy={200}
//           startAngle={180}
//           endAngle={0}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//           className="piecharts"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  className="piecharts">
              
//             </Cell>
//           ))}
          
//         </Pie>
        
//       </PieChart>
//     );
//   }
// }
