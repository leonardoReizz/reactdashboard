import styles from "./styles.module.sass";
import CheckIcon from '@mui/icons-material/Check';
import ReplyIcon from '@mui/icons-material/Reply';

interface EmailBoxItemProps{
    email:{
        imgUrl: string,
        send: string,
        message: string
    }
}
export function EmailBoxItem({email}: EmailBoxItemProps){
    return (
        <>
            <div className={styles.email}>
                <img src={email.imgUrl} alt="" />
                <div className={styles.details}>
                    <h4>{email.send}</h4>
                    <span>{email.message}</span>
                </div>
                <div className={styles.actions}>
                    <CheckIcon/>
                    <ReplyIcon/>
                </div>
            </div>
        </>
    );
}