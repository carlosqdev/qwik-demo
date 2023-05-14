import { component$ } from "@builder.io/qwik";

import styles from "./menuSocial.module.css";
import SvgFacebook from "../icons/svgFacebook/svgFacebook";
import SvgTwitter from "../icons/svgTwitter/svgTwitter";
import SvgPinteres from "../icons/svgPinteres/svgPinteres";
import SvgInstagram from "../icons/svgInstagram/svgInstagram";

export default component$(() => {
  return (
    <menu class={styles.menu_social}>
      <li>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgFacebook />
        </a>
      </li>

      <li>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgTwitter />
        </a>
      </li>

      <li>
        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgPinteres />
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgInstagram />
        </a>
      </li>
    </menu>
  );
});
