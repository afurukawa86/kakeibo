import styles from './Logo.module.css'

function Logo() {
    return (
        <>
            <div className={styles.logo}>
                <p className={styles.logo__nome}>kakeibo</p>
                <p>domine seu dinheiro</p>
            </div>
        </>
    );
}

export default Logo;