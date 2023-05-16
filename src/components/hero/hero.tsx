import { component$ } from "@builder.io/qwik";

import GetStarted from "../getStarted/getStarted";

import styles from "./hero.module.css";

export default component$(() => {
  return (
    <section class={styles.hero}>
      <div class={styles.hero_wrapper}>
        <div class={styles.hero_illustration}></div>

        <div class={styles.hero_content}>
          <h1 class={styles.hero_heading}>More than just shorter links</h1>

          <p class={styles.hero_paragraph} role="paragraph">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>

          <GetStarted />
        </div>
      </div>
    </section>
  );
});
