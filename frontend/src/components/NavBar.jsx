import { Link } from "react-router";
import PoorManMarketplaceLogo from "./Logo";
import styles from "../styles/NavBar.module.css";
import { CirclePlus, Heart, User2Icon } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

function NavBar() {
  const { user } = useAuth();

  return (
    <header>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <PoorManMarketplaceLogo />
            <i className={styles.i}>...Everything you need for less</i>
          </a>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/add-item">
                <span>Pridat inzerat</span>
                <CirclePlus />
              </Link>
            </li>
            <li>
              <Link to="/favorites">
                <span>Oblubene</span>
                <Heart />
              </Link>
            </li>

            {user ? (
              <>
                <li className={styles.linkBtn}>
                  <Link to="/Profile">
                    <span>{user.name}</span>
                    <User2Icon color="oklch(1 0 0)" />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className={styles.linkBtn}>
                  <Link to="/login" style={{ color: "oklch(1 0 0)" }}>
                    <span>Prihlasit sa</span>
                    <User2Icon color="oklch(1 0 0)" />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
