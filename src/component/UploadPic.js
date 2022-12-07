import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const FileInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      
      {imageUrl && selectedImage && (
        <Box >
          <img src={imageUrl} alt={selectedImage.name}  height="80px" width="55%" />
        </Box>
        
      )}
      <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span">
          Upload Product Image
        </Button>
      </label>
    </>
  );
};

export default FileInput;