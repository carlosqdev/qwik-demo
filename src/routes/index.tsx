import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import AdvancedStatistics from "~/components/advancedStatistics/advancedStatistics";
import Hero from "~/components/hero/hero";

export default component$(() => {
  return (
    <>
      <Hero />
      <AdvancedStatistics />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
