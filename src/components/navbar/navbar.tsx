import { component$ } from "@builder.io/qwik";
import styles from "./navbar.module.css";

interface MenuLinks {
  name: string;
  href: string;
}

export const MENU_LINKS: MenuLinks[] = [
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Resources",
    href: "#",
  },
  {
    name: "Login",
    href: "#",
  },
  {
    name: "Sign Up",
    href: "#",
  },
];

export default component$(() => {
  return (
    // <nav class="navbar expandable">
    <nav class={`${styles.navbar} ${styles.expandable}`}>
      <menu class={styles.navbar_menu}>
        {MENU_LINKS?.map((link) => (
          <li class={styles.navbar_item} key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </menu>
    </nav>
  );
});
