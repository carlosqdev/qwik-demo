import { component$ } from "@builder.io/qwik";

import type { IFeature } from "~/types";

import styles from "./feature.module.css";

export default component$(({ img, title, description }: IFeature) => {
  return (
    <li class={styles.feature}>
      <figure>
        <img width={40} height={40} src={img} alt={`Image of ${title}`} />
      </figure>
      <div class={styles.feature_wrapper}>
        <h3 class={styles.feature_title}>{title}</h3>
        <p class={styles.feature_description} role="paragraph">
          {description}
        </p>
      </div>
    </li>
  );
});
