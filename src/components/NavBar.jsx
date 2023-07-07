import React from 'react'
import {AppBar, Toolbar, Typography, Tabs, Tab} from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';

const NavBar = () => {
  return (
    <React.Fragment>
        <AppBar>
            <Toolbar>
                <Typography>Shop</Typography>

                <Tabs sx={{marginLeft:'auto'}} textColor='inherit'>
                    <Tab label="Produit"/>
                    <Tab label="Other"/>
                </Tabs>
                <PersonIcon/> 
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default NavBar