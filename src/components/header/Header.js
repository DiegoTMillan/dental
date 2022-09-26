import classes from "./Header.module.css"
import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <section>
            <div className={classes.above}>
                <div className={classes.menu}>
                    <i className={`${classes.barMenu} fa-solid fa-bars`}></i>
                </div>
                <div className={classes.logo}>
                    <i className={`${classes.logoIcon} fa-solid fa-tooth`}></i>
                    <Link to="/">Love&Smile</Link>
                </div>
            </div>
            <div className={classes.below}>
                <div className={classes.phone}>
                <i className={`${classes.logoPhone} fa-solid fa-phone`}></i>
                    <p>+34 999 999 999</p>
                </div>
            </div>
        </section>
    )
}