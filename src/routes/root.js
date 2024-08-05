import { useState, useEffect } from "react";
import Footer from "../component/Footer/footer";
import Header from "../component/Header/header";
import SideBar from "../component/SideBar/sideBar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Root = () => {
    const [openSideBar,setOpenSideBar] = useState(false);

    // open
    const handleOpen = ()=> setOpenSideBar(true);

    // close
    const handleClose = ()=> setOpenSideBar(false);

    // resize
    const handleResize = () => {
        if (window.innerWidth >= 1025) {
          setOpenSideBar(false);
        }
      };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);


    return ( 
        <Box>
            <SideBar openSideBar={openSideBar} handleClose={handleClose}/>
            <Header setOpenSideBar={handleOpen}/>
            <div style={{width : "100%",height : "calc(100vh - 4rem)"}}>
                <Outlet/>
            </div>
            <Footer/>
        </Box>
     );
}