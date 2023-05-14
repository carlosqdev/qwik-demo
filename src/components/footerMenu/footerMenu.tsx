import { component$ } from "@builder.io/qwik";

import type { Navigation } from "../footer/footer";

import styles from "./footerMenu.module.css";

interface PropsFooterMenu {
  dataMenu: Navigation[];
}

export default component$(({ dataMenu }: PropsFooterMenu) => {
  return (
    <menu class={styles.footer_menu}>
      <a href={dataMenu[0].href}>{dataMenu[0].title}</a>

      <ul class={styles.footer_sub_menu}>
        {dataMenu[0]?.subTitle?.map((menu) => (
          <li key={menu.title}>
            <a href={menu.href}>{menu.title}</a>
          </li>
        ))}
      </ul>
    </menu>
  );
});
