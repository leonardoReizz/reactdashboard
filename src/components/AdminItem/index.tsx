

import styles from "./styles.module.sass";

interface AdminItemProps{
    admin:{
        imgUrl: string,
        name: string,
        status: string
    }
}

export function AdminItem({admin}:AdminItemProps){
    return (
        <div className={styles.admin}>
            <div className={styles.img}>
                <img src={admin.imgUrl} alt="" />
                <span className={admin.status === 'on' ? styles.on : styles.off}></span>
            </div>
            <h4>{admin.name}</h4>
            <button>Profile</button>
        </div>
    )
}