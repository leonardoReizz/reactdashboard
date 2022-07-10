
import styles from "./styles.module.sass";

import ReceiptIcon from '@mui/icons-material/Receipt';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


interface ClientItemProps{
    client:{
        imgUrl: string
        country: string
        mobileNumber: string
        email: string
        name: string
    }
}

export function ClientItem({client}:ClientItemProps){
    return (
        <>
            <div className={styles.client}>
                <div className={styles.img}>
                    <img src={client.imgUrl} alt="Profile Picture" />
                </div>
                <div className={styles.details}>
                    <h5>{client.name}</h5>
                    <span>{client.country}</span>
                    <span>Mobile - {client.mobileNumber}</span>
                    <span>{client.email}</span>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonGroup}>
                        <button>    
                            <CallIcon/>
                            Call
                        </button>
                        <button>
                            <EmailIcon/>
                            Email
                        </button>
                    </div>
                    <div className={styles.buttonGroup}>
                        <div>
                            <button>
                                <EditIcon/>
                            </button>
                            <button>
                                <CloseIcon/>
                            </button>
                        </div>
                        <button>
                            <ReceiptIcon/>
                            Invoice
                        </button>

                    </div>
                    
                </div>
            </div>
        </>
    )
}