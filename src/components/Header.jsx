import React from "react";
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
const Header = () =>{
    return(
        <AppBar sx={{backgroundcolor:'#6a3067'}}>
            <Toolbar sx={{display:"flex", justifyContent:"flex-end"}}>
                <IconButton color="black" onClick={()=>{console.log("Cliquei");
            }}
            >
                    <AccountCircleIcon fontSize="large"/>
                </IconButton>
            </Toolbar>
            
        </AppBar>
    )
}

export default Header;