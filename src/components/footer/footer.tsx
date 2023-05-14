import { component$ } from "@builder.io/qwik";

import FooterMenu from "../footerMenu/footerMenu";
import MenuSocial from "../menuSocial/menuSocial";

import styles from "./footer.module.css";

export interface Navigation {
  title: string;
  href: string;
  subTitle?: Navigation[];
}

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div class={styles.footer_wrapper}>
        <figure>
          <img
            class={styles.footer_logo}
            aria-label="logo-shortly"
            src="/images/logo.svg"
            alt="logo of Shortly"
            width="100%"
            height="auto"
          />
        </figure>

        <nav class={styles.footer_nav}>
          <FooterMenu dataMenu={menuFeatures} />
          <FooterMenu dataMenu={menuResources} />
          <FooterMenu dataMenu={menuCompany} />
          <MenuSocial />
        </nav>
      </div>
    </footer>
  );
});

export const menuFeatures: Navigation[] = [
  {
    title: "Features",
    href: "#",
    subTitle: [
      {
        title: "Link Shortening",
        href: "#",
      },
      {
        title: "Branded Link",
        href: "#",
      },
      {
        title: "Analytics",
        href: "#",
      },
    ],
  },
];

const menuResources: Navigation[] = [
  {
    title: "Resources",
    href: "#",
    subTitle: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Developers",
        href: "#",
      },
      {
        title: "Support",
        href: "#",
      },
    ],
  },
];

const menuCompany: Navigation[] = [
  {
    title: "Company",
    href: "#",
    subTitle: [
      {
        title: "About",
        href: "#",
      },
      {
        title: "Our Team",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ],
  },
];
