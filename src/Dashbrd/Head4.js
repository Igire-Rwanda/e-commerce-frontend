import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/system/Box/Box";


const cardSizeCSS = {
  width: "230px",
  height: "80px",
  p: "16px",
  position: "relative",
};

export default function Head1({ style }) {
  return (
    <Card sx={{  ...cardSizeCSS, ...style, p: "auto",height:"14vh",gap:"2rem",backround:"gray" }}>
      <CardContent sx={cardSizeCSS}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 200,
            color: "black",
            marginBottom: "32px",
            lineHeight: "10px",position:"relative",left:"6rem"
          }}
        >
          Total Customers
          
        </Typography>
        <Box sx={{ display: "flex", mb: "32px" }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: "14px", lineHeight: "24px", fontWeight: 400,color:"black",position:"relative",left:"6rem" }}
          >
            $10000
          </Typography>
        </Box>

       
        <Box
          sx={{
            width: "120px",
            height: "140px",
            position: "absolute",
            left: "150px",
            right: "auto",
            
            bottom: "30rem",
          }}
        >
        
        </Box>
      </CardContent>
    </Card>
  );
}
