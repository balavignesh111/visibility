import { IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TVS from "../../images/logoTVSSCS.png"
import "./sideBar.css";
import MenuList from "./sideBarMenu";
import {data} from "../../constants/index"

const SideBar = ({openSideBar, handleClose}) => {
    return ( 
        <div className={`${openSideBar ? "openSideBar" : "sideBarBox"}`}>
            <div className="sideBarHeader">
                <div className="logoBox">
                    <img 
                        src={TVS}
                        alt="logo"
                        className="sideBar"/>
                </div>
                <h3 className="headerTitle">VISIBILITY</h3>
                <div className={`${openSideBar ? "btnWrapper" : "btnWrapperClose"}`}>
                <IconButton 
                    style={{width : "1.5rem",height : "1.5rem",backgroundColor: "#696CFF", color: "white"}}
                    onClick={handleClose}
                >
                    <ChevronLeftIcon/>
                </IconButton>
                </div>
            </div>
            <MenuList data={data}/>
        </div> );
}
 
export default SideBar;