export const getProjects = (dict: any) => [
  {
    bg: "/images/projects/losto-logo.webp",
    title: "Losto",
    description: dict.lostoDesc,
    img: "/images/projects/losto.webp",
    slug: "tchopfindr",
    link: "https://losto.cm",
    linkText: dict.lostoLink,
  },
  {
    bg: "/images/projects/tchopfindr-logo.svg",
    title: "TchopFindr",
    description: dict.tchopfindrDesc,
    img: "/images/projects/tchopfindr.webp",
    slug: "tchopfindr",
    link: "https://tchopfindr.vercel.app/",
    linkText: dict.tchopfindrLink,
  },
  {
    bg: "/images/projects/check-games-logo.webp",
    title: "Check Games",
    description: dict.checkgamesDesc,
    img: "/images/projects/check-game-deck.webp",
    slug: "check-game",
    link: "https://join.rune.ai/game?g=eg",
    linkText: dict.checkgamesLink,
  },
  {
    bg: "/images/projects/indomptable-shop/logo.png",
    title: "Indomptable Shop",
    description: dict.shopDesc,
    img: "/images/projects/indomptable-shop.webp",
    slug: "indomptable-shop",
    link: "https://indomptable-shop.vercel.app/",
    linkText: dict.shopLink,
  }
];

export const frontendToolsImages = [
  {
    src: "/images/tools/html.webp",
    title: "HTML",
  },
  {
    src: "/images/tools/css.webp",
    title: "CSS",
  },
  {
    src: "/images/tools/tailwind.webp",
    title: "Tailwind CSS",
  },
  {
    src: "/images/tools/typescript.webp",
    title: "Typescript",
  },
  {
    src: "/images/tools/react.webp",
    title: "ReactJS",
  },
  {
    src: "/images/tools/nextjs.webp",
    title: "NextJS",
  },
];
export const backendToolsImages = [
  {
    src: "/images/tools/java.webp",
    title: "Java",
  },
  {
    src: "/images/tools/spring-boot.webp",
    title: "Spring Boot",
  },
  {
    src: "/images/tools/golang.webp",
    title: "Golang",
  },
  {
    src: "/images/tools/php.webp",
    title: "Php",
  },
  {
    src: "/images/tools/laravel.webp",
    title: "Laravel",
  },
];
export const OtherToolsImages = [
  {
    src: "/images/tools/ansible.webp",
    title: "Ansible",
  },
  {
    src: "/images/tools/docker.webp",
    title: "Docker",
  },
  {
    src: "/images/tools/jenkins.webp",
    title: "Jenkis",
  },
  {
    src: "/images/tools/git.webp",
    title: "Git",
  },
  {
    src: "/images/tools/aws.webp",
    title: "AWS",
  },
  {
    src: "/images/tools/kibana.webp",
    title: "Kibana",
  },
  {
    src: "/images/tools/zabbix.webp",
    title: "Zabbix",
  },
  {
    src: "/images/tools/vercel.webp",
    title: "Vercel",
  },
  {
    src: "/images/tools/sql.webp",
    title: "Sql",
  },
  {
    src: "/images/tools/redis.webp",
    title: "Redis",
  },
  {
    src: "/images/tools/rabbit-mq.webp",
    title: "RabbitMQ",
  },
  {
    src: "/images/tools/sanity.webp",
    title: "Sanity",
  },
];

export const getSkills = (dict: any) => [
  {
    title: dict.frontTitle,
    description: dict.frontDesc,
    tools: frontendToolsImages,
  },
  {
    title: dict.backTitle,
    description: dict.backDesc,
    tools: backendToolsImages,
  },
  {
    title: dict.otherTitle,
    description: dict.otherDesc,
    tools: OtherToolsImages,
  },
];
