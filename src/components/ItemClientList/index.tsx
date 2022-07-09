
import styles from "./styles.module.sass";

import ReceiptIcon from '@mui/icons-material/Receipt';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export function ItemClientList(){
    return (
        <>
            <div className={styles.client}>
                <div className={styles.img}>
                    <img src="https://conteudo.imguol.com.br/c/entretenimento/d5/2020/10/07/homem-com-vergonha-1602098705397_v2_450x450.jpg" alt="" />
                </div>
                <div className={styles.details}>
                    <h5>Margaret P. Forte</h5>
                    <span>United States</span>
                    <span>Mobile - 012.345.6789</span>
                    <span>yourmail@anymail.com</span>
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