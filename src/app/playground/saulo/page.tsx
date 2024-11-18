import ApplicationSwitcher, {
  ApplicationType,
} from "@/components/common/ApplicationSwitcher";

const applications: ApplicationType[] = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function page() {
  return (
    <div>
      <ApplicationSwitcher applications={applications} />
    </div>
  );
}
