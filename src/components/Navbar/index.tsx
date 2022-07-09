import styles from "./styles.module.sass";
import logoImg from "../../assets/logo.png";
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
export function Navbar(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logoImg} alt="" />
                </div>
                <div className={styles.menu}>
                    <button>
                        <AddToPhotosOutlinedIcon/>
                        New Order
                    </button>
                    <button>
                        <AddReactionOutlinedIcon/>
                        New Client
                    </button>
                    <div className={styles.search}>
                        <input 
                            type="text"
                            placeholder="Search..."
                        />
                        <SearchOutlinedIcon/>
                    </div>
                    <div className={styles.notification}>
                        <span>1</span>
                        <MailIcon/>
                    </div>
                    <div className={styles.notification}>
                        <span>3</span>
                        <NotificationsActiveIcon/>
                    </div>
                </div>
            </div>
        </>
    )
}