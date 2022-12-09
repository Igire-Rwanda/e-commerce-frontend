import Box from "@mui/material/Box/Box";
import RetailerHead1 from "../RetailerDashboard/HRetailer1"
import RetailerHead2 from "../RetailerDashboard/HRetailer2";
import RetailerHead3 from "../RetailerDashboard/HRetailer3"
import RetailerHead4 from "../RetailerDashboard/HRetailer4"
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
        <RetailerHead1 style={{ backgroundColor: "black" }} />
        <RetailerHead2 />
        <RetailerHead3 />
        <RetailerHead4 />
      </Box>
     
    </>
  );
}
