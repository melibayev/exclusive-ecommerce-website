import styles from './Category.module.scss'

const Category = ({name, img}) => {
  return (
    <>
    <div className={styles.card}>
        <div className={styles.card__img}>
            {img}
        </div>
        <div className={styles.card__title}>
            {name}
        </div>
    </div>
    </>
  )
}

export default Category