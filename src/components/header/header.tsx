import { component$ } from "@builder.io/qwik";

import Navbar from "../navbar/navbar";

import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.header_wrapper}>
        <figure>
          <img
            class={styles.header_logo}
            aria-label="shortly logo"
            src="/images/logo.svg"
            alt="Shortly logo"
            width="130px"
            height="auto"
          />
        </figure>

        <input
          class={styles.header_expand_menu}
          aria-label="expand-menu"
          type="checkbox"
          name="expand-menu"
          id="expand-menu"
        />

        <Navbar />

        <label class={styles.header_label} for="expand-menu">
          <figure>
            <img
              class="header_hamburguer_image"
              aria-label="hamburguer menu"
              src="/images/hamburguer_menu.svg"
              alt="hamburguer menu"
              width="45px"
              height="auto"
            />
          </figure>
        </label>
      </div>
    </header>
  );
});
