import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import "../Header/header.css";
import { IconButton } from '@mui/material';

const Header = ({setOpenSideBar}) => {
    return ( 
    <div className="header">
        <div className='headerMenu'>
            <IconButton onClick={()=> setOpenSideBar()}>
                <MenuIcon/>
            </IconButton>
        </div>
        <div className="headerProfile">
            <NotificationsSharpIcon sx={{fontSize : 24, color: "#34314C"}}/>
            <div className='profile'>
                <span>Hi <b>Balavignesh</b></span>
                <AccountCircleIcon sx={{fontSize : 36, color: "#34314C"}}/>
            </div>
        </div>
    </div> );
}
 
export default Header;