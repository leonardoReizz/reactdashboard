import { Line, LineChart, ResponsiveContainer } from "recharts";
import { Cards } from "../../components/Cards";
import { Navbar } from "../../components/Navbar";
import { ReportsCharts } from "../../components/ReportsCharts";
import { Sidebar } from "../../components/Sidebar";
import  Calendar  from "react-calendar";

import { ProductItem } from "../../components/ProductItem";
import { ClientItem } from "../../components/ClientItem";
import {  ReminderItem } from "../../components/ReminderItem";
import { EmailBoxItem } from "../../components/EmailBoxItem";
import { AdminItem } from "../../components/AdminItem";

import { dataClient } from "../../utils/dataClient";
import { dataAdmin } from "../../utils/dataAdmin";
import { dataReminder } from "../../utils/dataReminder";
import { dataEmail } from "../../utils/dataEmail";


import styles from "./styles.module.sass";
import 'react-calendar/dist/Calendar.css';


import PersonIcon from '@mui/icons-material/Person';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import SendIcon from '@mui/icons-material/Send';
import StoreIcon from '@mui/icons-material/Store';
import { dataProduct } from "../../utils/dataProducts";

import sunImg from "../../assets/sunImg.png";
import { dataCards } from "../../utils/dataCards";


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
                                {
                                    dataCards.map((data)=>{
                                        return (
                                            <Cards dataCard={data}/>
                                        )
                                    })
                                }
                                <div className={styles.cardFinal}>
                                    <div className={styles.cardFinalImg}>
                                        <img src={sunImg} alt="" />
                                        32°
                                    </div>
                                    <div className={styles.cardFinalDetails}>
                                       <h4> <span>Sunny Day</span> 12:30Pm </h4>
                                       <p>Poin faucibus luctus felis et ornare.</p>
                                       <p>Nunc indiam sed purus maximus molestie.</p>
                                    </div>
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
                                                {
                                                    dataProduct.map((product)=>{
                                                       return(
                                                        <ProductItem product={product}/>
                                                       )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className={styles.panel}>
                                            <div className={styles.header}>
                                                <h4>New Clients</h4>
                                                <input type="text" />
                                            </div>
                                            <div className={styles.listClients}>
                                                {
                                                dataClient.map((client)=>{
                                                    return(
                                                        <ClientItem client={client}/>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={styles.notifications}>
                                    <div className={styles.reminder}>
                                        <h3>Todays Reminder</h3>
                                        {
                                            dataReminder.map((item)=>{
                                                return (
                                                    <ReminderItem item={item}/>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className={styles.emailBox}>
                                        <h3>Emails</h3>
                                        {
                                            dataEmail.map((email)=>{
                                                return (
                                                    <EmailBoxItem email={email}/>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={styles.admins}>
                                        <h3> Admin Profile </h3>
                                        <div className={styles.centerAdmin}>
                                            <div className={styles.admin}>
                                                {
                                                    dataAdmin.map((admin)=>{
                                                        return (
                                                            <AdminItem admin={admin}/>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.calendar}>
                                        <h3>Calendar</h3>
                                        <Calendar className={styles.reactCalendar}/>
                                    </div>
                                    <div className={styles.completedDelivery}>
                                        <h3>Today's Completed Delivery</h3>
                                        <div>
                                            {
                                                dataEmail.map((email)=>{
                                                    return (
                                                        <img src={email.imgUrl} alt="Profile Picture" />
                                                    )
                                                })
                                            }
                                            <span> +450 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        </>
    )
}