export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  summary: string;
  description: string[];
  tools: string[];
  category: "Web Development" | "Design Systems" | "Leadership" | "Teaching";
  link?: { label: string; href: string };
  extraLinks?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "jamf-pro-11",
    title: "Jamf Pro 11",
    role: "Design System Management, UX Engineering",
    year: "2023",
    category: "Design Systems",
    summary:
      "Drove front end deliverables and outcomes for the Jamf Pro 11 release — including the highly praised Dark Mode — delivered on time, on budget, and on target.",
    description: [
      "Led UX engineering across a multi-product SaaS ecosystem, partnering with Product, Engineering, Marketing, and Brand to ship a cohesive experience.",
      "Scaled the design system by 650% and expanded adoption across 70% of enterprise products, accelerating release cycles.",
      "Owned the Dark Mode rollout end-to-end: tokens, component variants, contrast auditing, and rollout communications.",
    ],
    tools: ["Design Systems", "Web Components", "Vue", "Figma", "Accessibility", "People Management"],
  },
  {
    slug: "neuro-allies",
    title: "Neuro Allies",
    role: "End-to-end web build",
    year: "2024",
    category: "Web Development",
    summary:
      "Everything from purchasing the domain and configuring DNS to hosting, WordPress setup, and ongoing management. Mobile-first.",
    description: [
      "Sourced the domain, set up DNS and hosting, and stood up a mobile-first WordPress site.",
      "Handled information architecture, page structure, and accessibility patterns throughout.",
      "Provides ongoing maintenance, plugin governance, and content updates.",
    ],
    tools: ["WordPress", "PHP", "HTML5", "CSS3", "Hosting", "DNS", "SEO"],
    link: { label: "Visit neuro-allies.com", href: "https://neuro-allies.com" },
  },
  {
    slug: "brighter-day-farms",
    title: "Brighter Day Farms",
    role: "End-to-end web build",
    year: "2024",
    category: "Web Development",
    summary:
      "Full-stack ownership from domain purchase through hosting, WordPress setup, and mobile-first design.",
    description: [
      "Purchased and configured the domain, DNS, and hosting environment.",
      "Built a mobile-first WordPress experience tailored to the farm's brand and audience.",
      "Ongoing site management and content updates.",
    ],
    tools: ["WordPress", "PHP", "HTML5", "CSS3", "Hosting", "DNS"],
    link: { label: "Visit brighterdayfarms.com", href: "https://brighterdayfarms.com/" },
  },
  {
    slug: "write-to-heal",
    title: "Write to Heal",
    role: "Founder & Web Lead",
    year: "2024 – present",
    category: "Web Development",
    summary:
      "A WordPress-based digital experience focused on journaling and emotional well-being. Founded, built, and maintained end-to-end.",
    description: [
      "Established the brand, wrote the content strategy, and shipped a mobile-first WordPress site.",
      "Handles site structure, UX iterations, SEO strategy, and content organization.",
      "Continues to iterate on user experience improvements based on visitor behavior.",
    ],
    tools: ["WordPress", "PHP", "HTML5", "CSS3", "SEO", "Content Strategy"],
    link: { label: "Visit thewritetoheal.com", href: "https://thewritetoheal.com/" },
  },
  {
    slug: "target-canada",
    title: "Target Canada",
    role: "Front End Engineer",
    year: "2012 – 2013",
    category: "Web Development",
    summary:
      "Hired onto Target's in-house creative team to help build the Canadian retail website — a massive from-scratch undertaking.",
    description: [
      "Built the primary navigation and a variety of landing pages consumed by millions of shoppers.",
      "Partnered with designers, content teams, and back-end engineers to deliver on a tight retail timeline.",
      "Contributed to shared patterns and components used across the storefront.",
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "jQuery", "Responsive Design"],
  },
  {
    slug: "thomson-reuters-developer-portal",
    title: "Thomson Reuters Developer Portal",
    role: "Front End Lead",
    year: "2016 – 2018",
    category: "Web Development",
    summary:
      "A platform for anyone consuming Thomson Reuters APIs. Established front end standards, implementation patterns, and governance.",
    description: [
      "Set the front end standards and best practices adopted across the developer portal.",
      "Implemented core UI and oversaw front end governance for contributions from partner teams.",
      "Coordinated with product managers and API teams to keep documentation and UI in sync.",
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Angular", "Design Systems", "Accessibility"],
  },
  {
    slug: "washington-county-devices",
    title: "Chromebooks & Hotspots at Washington County Library",
    role: "Technology Manager",
    year: "2020",
    category: "Leadership",
    summary:
      "Used CARES Act funding to expand internet access for library patrons — 500+ kits with 4G hotspots and Chromebooks still serving thousands of patrons every year.",
    description: [
      "Partnered with 4G providers to source, provision, and manage a fleet of 500+ devices.",
      "Led end-to-end delivery across departments during the COVID-19 pandemic.",
      "Programs remain in service and are used by thousands of patrons every year.",
    ],
    tools: ["Program Management", "Vendor Management", "People Management", "Device Provisioning"],
    extraLinks: [
      { label: "Device information", href: "https://www.washcolib.org" },
      { label: "KSTP news coverage", href: "https://kstp.com" },
    ],
  },
  {
    slug: "can-can-wonderland",
    title: "Can Can Wonderland",
    role: "Instructor & Coach",
    year: "2016",
    category: "Teaching",
    summary:
      "Prepared a student team at Prime Digital Academy to build a from-scratch reservation app for Minnesota's first arts-based public benefit corporation.",
    description: [
      "Scoped the client engagement between Prime Digital Academy and Can Can Wonderland.",
      "Coached the student team through requirements, architecture, and delivery.",
      "The application was very well received by Can Can Wonderland and their guests.",
    ],
    tools: ["Teaching", "Coaching", "MEAN Stack", "Agile", "Client Management"],
  },
  {
    slug: "walker-west",
    title: "Walker | West Music Academy",
    role: "Front End Engineer",
    year: "2014",
    category: "Web Development",
    summary:
      "Built the website for a St. Paul music school teaching students ages 5 through adult. Worked closely with the team to reflect their vision and strategy.",
    description: [
      "Partnered directly with the academy leadership to translate their mission into a web presence.",
      "Handled information architecture, visual implementation, and content organization.",
      "Delivered a site that captured the academy's warmth and community focus.",
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "WordPress", "Responsive Design"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
