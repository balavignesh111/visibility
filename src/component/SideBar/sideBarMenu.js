import {List, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const buttonStyle={
    padding : "0.5rem 2rem",
    "&:hover" : {
        backgroundColor : "rgb(230, 230, 241, .06)"
    }
}

const MenuList = ({data}) => {
    return (
        <List>
            {data && data.map((ele)=>{
                return <ListOptions list={ele}/>
            })}
        </List>
    );
}

const ListOptions = ({list})=>{
    const [open,setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
        <ListItemButton onClick={handleClick} sx={buttonStyle}>
        <ListItemIcon sx={{fontSize : 36, color: "#d5d5e2"}}>
          {list.icon}
        </ListItemIcon>
        <ListItemText primary={list.menu} sx={{color: "#d5d5e2"}}/>
        {open ? <ExpandLess sx={{color: "#d5d5e2"}}/> : <ExpandMore sx={{color: "#d5d5e2"}}/>}
      </ListItemButton>
      {
            (list.subMenu && list.subMenu.length > 0) ? 
            list.subMenu.map((list)=>(
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{padding : "0.5rem 2rem"}}>
                        <ListItemIcon sx={{fontSize : 24,paddingLeft: "7px"}}>
                            <div style={{width: "0.5rem",height : "0.5rem",borderRadius : "50%",backgroundColor : "white"}}></div>
                        </ListItemIcon>
                        <ListItemText primary={list} sx={{color: "#d5d5e2"}}/>
                    </ListItemButton>
                </List>
            </Collapse>
            ))
            : null
        }
        </>
    )
}
 
export default MenuList;