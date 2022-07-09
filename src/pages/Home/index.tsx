import { Line, LineChart, ResponsiveContainer } from "recharts";
import { Cards } from "../../components/Cards";
import { Navbar } from "../../components/Navbar";
import { ReportsCharts } from "../../components/ReportsCharts";
import { Sidebar } from "../../components/Sidebar";
import styles from "./styles.module.sass";

import PersonIcon from '@mui/icons-material/Person';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import SendIcon from '@mui/icons-material/Send';
import StoreIcon from '@mui/icons-material/Store';
import { ItemProductList } from "../../components/ItemProductList";
import { ItemClientList } from "../../components/ItemClientList";




export function Home(){
    return (
        <>
            <div className={styles.container}>
                <Navbar/>
                <div className={styles.center}>
                    <div className={styles.sidebar}>
                        <Sidebar/>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.limit}>
                            <div className={styles.cards}>    
                                <Cards/>
                                <Cards/>
                                <Cards/>
                                <div className={styles.cardFinal}>
                                    <h4>Total Growth</h4>
                                </div>
                            </div>

                            <div className={styles.page}>
                                <div className={styles.statisticsContainer}>
                                    <h3>Todays Statistics</h3>
                                    <div className={styles.statisticsCards}>
                                        <div className={styles.statisticsCard}>
                                            <StoreIcon/>
                                            <h5>3000+</h5>
                                            <span>Products Available</span>
                                        </div>
                                        <div className={styles.statisticsCard}>
                                            <SendIcon/>
                                            <h5>12000+</h5>
                                            <span>Products Delivery</span>
                                        </div>
                                        <div className={styles.statisticsCard}>
                                            <PersonIcon/>
                                            <h5>100+</h5>
                                            <span>New Customer</span>
                                        </div>
                                        <div className={styles.statisticsCard}>
                                            <MoodBadIcon/>
                                            <h5>15</h5>
                                            <span>Products Return</span>
                                        </div>
                                    </div>
                                    <div className={styles.reportsContainer}>
                                        <h3>Reports</h3>
                                        <ReportsCharts/>
                                    </div>
                                    <div className={styles.panels}>
                                        <div className={styles.panel}>
                                            <div className={styles.header}>
                                                <h4>Latest Added Product</h4>
                                                <input type="text" />
                                            </div>
                                            <div className={styles.typeProducts}>
                                                <span>Products</span>
                                                <span>Price</span>
                                            </div>
                                            <div className={styles.listProducts}>
                                                <ItemProductList/>
                                                <ItemProductList/>
                                                <ItemProductList/>
                                                <ItemProductList/>
                                            </div>
                                        </div>
                                        <div className={styles.panel}>
                                            <div className={styles.header}>
                                                <h4>New Clients</h4>
                                                <input type="text" />
                                            </div>
                                            <div className={styles.listClients}>
                                                <ItemClientList/>
                                                <ItemClientList/>
                                                <ItemClientList/>
                                                <ItemClientList/>
                                                <ItemClientList/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={styles.reminder}>
                                    <h3>Todays Reminder</h3>
                                </div>
                                <div className={styles.panel}>
                                    <h3> Admin Panel</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        </>
    )
}