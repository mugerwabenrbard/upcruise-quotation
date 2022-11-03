import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReorderIcon from '@mui/icons-material/Reorder';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to='/' style={{textDecoration:"none"}}>
                <span className="logo">
                    ADMIN
                </span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <Link to='/' style={{textDecoration:"none"}}>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonIcon className="icon"/>
                    <Link to='/users' style={{textDecoration:"none"}}>
                        <span>Users</span>
                    </Link>
                </li>
                <li>
                    <InventoryIcon className="icon"/>
                    <Link to='/products' style={{textDecoration:"none"}}>
                        <span>Products</span>
                    </Link>
                </li>
                <li>
                    <ReorderIcon className="icon"/>
                    <Link to='/quotations' style={{textDecoration:"none"}}>
                        <span>Quotations</span>
                    </Link>
                </li>
                <li>
                    <DeliveryDiningIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">SYSTEM</p>
                <li>
                    <QueryStatsIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className="icon"/>
                    <span>Notification</span>
                </li>
                <li>
                    <HealthAndSafetyIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <HistoryIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">Bottom SB</div>
    </div>
  )
}

export default Sidebar