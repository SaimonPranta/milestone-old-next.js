import Link from "next/link";
import styles from "./nav.module.css";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter()
  const habdleLogout = () => {
    deleteCookie("isUserLogIn");
    router.push("/")
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard_two">Dashboard_Two</Link>
        </li>
        <li>
          <Link href="/user">User</Link>
        </li>
        <li>
          <a onClick={habdleLogout}>Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
