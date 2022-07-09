
import styles from "./styles.module.sass";

export function ItemProductList(){
    return (
        <div className={styles.product}>
            <div className={styles.img}>
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" alt="" />
                <div className={styles.details}>
                    <h5>Title</h5>
                    <span>Description</span>
                </div>
            </div>
            <h5>$150</h5>
        </div>
    )
}