import { Link } from "react-router";
import PoorManMarketplaceLogo from "./Logo";
import styles from "../styles/NavBar.module.css";
import { CirclePlus, Heart, User2Icon } from "lucide-react";

function NavBar() {
  return (
    <header>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <a href="/homepage">
            <PoorManMarketplaceLogo />
            <i className={styles.i}>Everything you need for less</i>
          </a>
        </div>

        <div className="links-container">
          <ul>
            <li className={styles.flexRow}>
              <a href="">Pridat inzerat</a>
              <CirclePlus />
            </li>
            <li className={styles.flexRow}>
              <Link to="/favorites">Oblubene</Link>
              <Heart />
            </li>
            <li className={styles.flexRow}>
              <Link to="/login">Prihlasit sa</Link>
              <User2Icon />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
