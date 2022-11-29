// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Grid from '@mui/material/Grid';
// import "../views/Dashbord/Dashboard.css"

// import Card from "@mui/material/Card/Card";
// import CardContent from "@mui/material/CardContent/CardContent";
// import Typography from "@mui/material/Typography/Typography";
// import Box from "@mui/system/Box/Box";
// import Head from "../Dashbrd/Head1"

// const cardSizeCSS = {
//   width: "300px",
//   height: "210px",
//   p: "16px",
//   position: "relative",
// };




// export default function SpacingGrid() {
//   const [spacing, setSpacing] = React.useState(2);

//   const jsx = `
// <Grid container spacing={${spacing}}>
// `;
// const items = [
//   { name: "Total Product" }]
// return (
//   <Grid sx={{ flexGrow: 1,bgcolor:"gray",padding:"1rem"}} container spacing={1}>
//     <Grid item xs={10}>
//       <Grid container justifyContent="center" spacing={spacing}>
//         {[0, 1,2 ].map((item) => (
//           <Grid key={item} item>
//              <Box
//         sx={{
//           display: "flex",
//           height: "210px",
//           width: "95%",
//           mt: "24px",
//           mx: "auto",
//           justifyContent: "space-between",
//         }}
//       >
//         <Head style={{ backgroundColor: "Red" }} />
//         <Head />
//         <Head />
//       </Box>
       
            
//           </Grid>
//         ))}
//       </Grid>
//     </Grid>
//   </Grid>
// );
// };
import Box from "@mui/material/Box/Box";
import Head from "../Dashbrd/Head1"

export default function Contributions() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "135px",
          width: "95%",
          mt: "24px",
          mx: "auto",
          justifyContent: "space-between",
         
        }}
      >
        <Head style={{ backgroundColor: "pink" }} />
        <Head />
        <Head />
      </Box>
     
    </>
  );
}
