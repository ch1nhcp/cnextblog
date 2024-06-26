import Link from "next/link";
import classes from "./main-navigation.module.css";
import Logo from "./logo";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* <a> */}
        <Logo />
        {/* </a> */}
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contacts">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
