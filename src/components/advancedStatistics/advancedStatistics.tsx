import { component$ } from "@builder.io/qwik";

import { features } from "~/constants";
import Feature from "../feature/feature";

import styles from "./advancedStatistics.module.css";

export default component$(() => {
  return (
    <section class={styles.advancedStatistics}>
      <header>
        <h2 class={styles.advancedStatistics_title}>Advanced Statistics</h2>
        <p
          class={styles.advancedStatistics_paragraph}
          aria-label="paragraph description"
          role="presentation"
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </header>

      <ul class={styles.advancedStatistics_wrapper}>
        {features?.map((feature) => (
          <Feature
            key={feature.title}
            img={feature.img}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </ul>
    </section>
  );
});
