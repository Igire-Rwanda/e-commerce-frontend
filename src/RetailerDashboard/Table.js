// import React from 'react';
// import 'antd/dist/antd.css';

// import { Space, Table, Tag } from 'antd';
// import type { ColumnsType } from 'antd/es/table';


// interface DataType {
//   key: string;
//   name: string;
//   age: number;

//   tags: string[];
// }

// const columns: ColumnsType<DataType> = [
//   {
//     title: 'product',
//     dataIndex: 'product',
//     key: 'product',
//     render: text => <a>{text}</a>,
//   },
//   {
//     title: 'Status',
//     key: 'Status',
//     dataIndex: 'Status',
//     render: (_, { tags }) => (
//       <>
//         {tags.map(tag => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag} >
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
  
//   {
//     title: 'sales',
//     dataIndex: 'sales',
//     key: 'sales',
//   },


 
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.product}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// const data: DataType[] = [
//   {
//     key: '1',
//     product: 'electricity',
//     sales: 550,
//     Earning: 34503,
//     tags: ['live', 'chart'],
   
//   },
//   {
//     key: '2',
//     product: 'Decoration',
//     sales: 845,
//     Earning: 34503,
//     tags: ['Chart'],

//   },
//   {
//     key: '3',
//     product: 'Shoes',
//     sales: 900,
//     Earning: 34503,
//     tags: ['chart'],
 
//   },
//   {
//     key: '3',
//     product: 'MenClothes',
//     sales: 900,
//     Earning: 34503,
//     tags: ['live'],
 
//   },
//   {
//     key: '3',
//     product: 'WomenClothes',
//     sales: 900,
//     Earning: 34503,
//     tags: ['chart'],
 
//   },
// ];

// const App: React.FC = () => <Table columns={columns} dataSource={data} className="Tab" />;

// export default App;