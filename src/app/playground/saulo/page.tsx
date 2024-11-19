import ApplicationSwitcher, {
  ApplicationType,
} from "@/components/common/ApplicationSwitcher";

const applications: ApplicationType[] = [
  {
    value: "next.js",
    label: "Next.js",
    date: "2023-06-15",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
    date: "2023-05-10",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    date: "2023-04-22",
  },
  {
    value: "remix",
    label: "Remix",
    date: "2023-06-01",
  },
  {
    value: "astro",
    label: "Astro",
    date: "2023-05-28",
  },
];

export default function page() {
  return (
    <div>
      <ApplicationSwitcher applications={applications} />
    </div>
  );
}
