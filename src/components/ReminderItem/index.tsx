import styles from "./styles.module.sass";


import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ErrorIcon from '@mui/icons-material/Error';


interface ReminderProps{
    item: {
        state: boolean
        title: string
        text: string
    }
}
export function ReminderItem({item}: ReminderProps){
    return(
        <>
            <div className={styles.reminder}>
                <div className={styles.icon}>
                    {
                        item.state === true
                        ? <NotificationsActiveIcon className={styles.svgGreen}/>
                        : <ErrorIcon className={styles.svgRed}/>
                    }
                </div>
                <div className={styles.details}>
                    <h4>{item.title}</h4>
                    <span>{item.text}</span>
                </div>
            </div>
        </>
    );
}