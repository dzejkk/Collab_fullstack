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
            <i className={styles.i}>...Everything you need for less</i>
          </a>
        </div>

        <div>
          <ul>
            <li>
              <a href="">
                <span>Pridat inzerat</span>
                <CirclePlus />
              </a>
            </li>
            <li>
              <Link to="/favorites">
                <span>Oblubene</span>
                <Heart />
              </Link>
            </li>
            <li className={styles.linkBtn}>
              <Link to="/login" style={{ color: "oklch(1 0 0)" }}>
                <span>Prihlasit sa</span>
                <User2Icon color="oklch(1 0 0)" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
