
import styles from "./styles.module.sass";

interface ProductItemProps{
    product:{
        imgUrl: string,
        title: string,
        description: string,
        value: number
    }
}

export function ProductItem({product}: ProductItemProps){
    return (
        <div className={styles.product}>
            <div className={styles.img}>
                <img src={product.imgUrl} alt="" />
                <div className={styles.details}>
                    <h5>{product.title}</h5>
                    <span>{product.description}</span>
                </div>
            </div>
            <h5>${product.value}</h5>
        </div>
    )
}