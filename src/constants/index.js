import ListIcon from '@mui/icons-material/List';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export const data = [
    {
        icon : <WarehouseIcon/>,
        menu : "Inbound",
        subMenu : [ "Gate In","Dock In","GRN","Assign POD","POD Dashboard","Binner Assignment","Binning","Inbound Label","V-Part Labels"]
    },
    {
        icon : <LocalShippingIcon/>,
        menu : "Outbound",
        subMenu : ["Pick Generation","Picking","Outbound Staging","Optimization","Dispatch","Outbound Label"]
    },
    {
        icon : <ListIcon/>,
        menu : "Misc",
        subMenu : ["Part History","API Exceptions","Approve Request","Carton History","Cancellation","Order Dashboard","Convert Part","Stock Location","Consignee Stock Exchange","Job Request","Scan Label"]
    },
    {
        icon : <PieChartRoundedIcon/>,
        menu : "Dashboard",
        subMenu : ["GRB Dashboard"]
    },
    {
        icon : <AnalyticsIcon/>,
        menu : "Reports",
        subMenu : ["Report"]
    },
    {
        icon : <SettingsRoundedIcon/>,
        menu : "Admin",
        subMenu : [
            {
                menu : "Storage",
                subMenu : [
                    "SGL.Bin Transfer","Internal Transfer","Transfer Request","Multi.Bin Transfer","Stock Check Creation","Stock Migration","Bulk Break"
                ]
            },
            "Master","Configuration"
        ]
    }
];