
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const columns: GridColDef[] = [

  { field: 'Names', headerName: 'Names', width: 120 },
  {field:"price",headerName:"price",width:132},
  {field:"Quantity",headerName:"Quantity",width:132},
  {field:"action",headerName:"action",width:132},
  {field:"view"},
  



];

const rows = [
  { id: 1,  Names: 'Jon', price: 35,  Quantity:"30perunit",view:"view",action:"update"},
  { id: 2,  Names: 'Cersei', price: 42, Quantity:"60perunit",view:"view",action:"update" },
  { id: 3, Names: 'Jaime', price: 45,  Quantity:"90perunit",view:"view",action:"update" },
  { id: 4,  Names: 'Arya', price: 16,  Quantity:"70perunit",view:"view",action:"update" },

];

export default function DataTable() {
  return (
    <div style={{ height: 280, width: '100%',fontSize:"4rem" }}>
      
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
  sx={{
    padding: "0px 0px",
    borderRight: "2px solid black",

    fontSize: "1.6rem"
  }}
        
        >
   
      </DataGrid>
 
    </div>
  );
}









