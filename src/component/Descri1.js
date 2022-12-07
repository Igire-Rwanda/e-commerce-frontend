import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Fashion from "../assets/image/fashion.jpg"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen} sx={{fontSize: "10px",
    color: "black",background:"darkgoldenrod"}}>See More</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description" style={{fontSize:"12px"}}>
                        Research what products you did like to sell or can source to sell, select a business name, register your business with the government, obtain permits and licenses,
                         choose an ecommerce software and create your website, 
                         load your products onto the site, launch, and start marketing your business.
                    </p>
                    <Button onClick={handleClose} sx={{    fontSize: "10px",
    color: "black",background:"darkgoldenrod"
  }} >More Description</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen} sx={{ fontSize: "1.3rem", color: "black" }}>View</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <img src={Fashion} />
                    <p id="parent-modal-description" style={{fontSize:"16px"}}>
                        Men's Clothes
                    </p>
                    <ChildModal />
                </Box>
            </Modal>
        </div>
    );
}