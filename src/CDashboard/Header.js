import Box from "@mui/material/Box/Box";
import Head from "../Dashbrd/Head1"
import Head2 from "../Dashbrd/Head2"
import Head3 from "../Dashbrd/Head3"
import Head4 from "../Dashbrd/Head4"

export default function Contributions() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "95px",
          width: "92%",
          mt: "24px",
          mx: "auto",
          justifyContent: "space-between",
        gap:"1rem"
         
        }}
      >
        <Head style={{ backgroundColor: "black" }} />
        <Head2/>
        <Head3 />
        <Head4/>
      </Box>
     
    </>
  );
}
