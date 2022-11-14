import styles from  "../styles/nav.module.css";

export default function Navbar() {
    return (
        <nav>
          <div className={styles.Navbar}>
            <span className={styles.logo}>Software Developer SJ</span>
            <div className={styles.navRight}>
            <span className={styles.navItem}>Home</span>
            <span className={styles.navItem}>About</span>
            <span className={styles.navItem}>Projects</span>
            </div>
          </div>
        </nav>
    )
}
