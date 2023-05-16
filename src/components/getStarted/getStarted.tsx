import { component$ } from "@builder.io/qwik";

import styles from "./getStarted.module.css";

export default component$(() => {
  return (
    <a class={styles.getStarted} href="#">
      Get Started
    </a>
  );
});
