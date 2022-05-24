import styles from '../styles/Home.module.css'
import Link from "next/link"//For linking Page

const About = () => {
    return (
        <div className={styles.container}>
            About Page
            <Link href="/">
                <a>HomePage</a>
            </Link>
        </div>
    )
}
export default About