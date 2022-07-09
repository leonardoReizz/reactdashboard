
import styles from "./styles.module.sass";
import { Link } from "react-router-dom";

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export function Sidebar(){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <div className={styles.profilePicture}>
                        <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                        <span></span>
                    </div>
                    <div className={styles.profileDetails}>
                        <h3>Billy J. Watson</h3>
                        <span>Admin</span>
                    </div>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li className={styles.selected}>
                            <Link to="/">
                                <DashboardIcon/>
                                Overview
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <AccountCircleIcon/>
                                Administration
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <AssignmentIndIcon/>
                                Employes
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <GroupIcon/>
                                Clients
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <AssessmentIcon/>
                                Reports
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <CalendarMonthIcon/>
                                Schedule
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <CardMembershipIcon/>
                                Sales
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <InventoryIcon/>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <ReceiptIcon/>
                                Invoice
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles.bottom}>
                        <li className={styles.settings}>
                            <Link to="/">
                                <SettingsIcon/>
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <HelpOutlineIcon/>
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <SupportAgentIcon/>
                                System Support
                            </Link>
                        </li>
                        <li className={styles.logout}>
                            <Link to="/">
                                <PowerSettingsNewIcon/>
                                Log Out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}