
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/system/Box/Box";


const cardSizeCSS = {
  width: "300px",
  height: "210px",
  p: "16px",
  position: "relative",
};

export default function Head1({ style }) {
  return (
    <Card sx={{ borderRadius: "30px", ...cardSizeCSS, ...style, p: "auto",height:"20vh",gap:"2rem" }}>
      <CardContent sx={cardSizeCSS}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 200,
            color: "black",
            marginBottom: "32px",
            lineHeight: "15px",
          }}
        >
          Sales Categories
        </Typography>
        <Box sx={{ display: "flex", mb: "32px" }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: "14px", lineHeight: "24px", fontWeight: 400,paddingLeft:"25rem" }}
          >
            $300
          </Typography>
        </Box>

        <Typography
          sx={{ fontSize: "14px", color: "rgba(0, 0, 0)",position:"relative",bottom:"3rem"}}
        >
          30 Members
        </Typography>
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
