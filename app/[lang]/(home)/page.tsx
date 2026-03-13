import HeadingHomeComponent from "./components/HeadingHomeComponent";
import SingleProjectComponent from "./components/SingleProjectComponent";
import ContentSectionComponent from "../components/ContentSectionComponent";
import { getProjects, getSkills } from "./datas";
import SkillComponent from "./components/SkillComponent";
import ContactButtonComponent from "./components/ContactButtonComponent";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

export default async function Home({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Locale);
  const projects = getProjects(dict.homeProjects);
  const skills = getSkills(dict.homeSkills);
  /*useGSAP(() => {
    gsap
      .from("body", {
        background: "#5E0EA4",
        duration: 3,
        scrollTrigger: {
          trigger: "#project-2",
          start: "top top",
          end: "+100vh",
          scrub: 1, // Smooth scrolling effect
        },
      });
  }); */
  return (
    <>
      <section className="text-white border-b-2 border-white relative flex flex-col justify-center my-5 pb-24 mb-24 sm:border-b-0 sm:my-10 sm:border-r-2 sm:w-11/12 sm:py-20">
        <div className="sm:w-2/3">
          <div className="mb-10 sm:mb-32">
            <span>{dict.home.hey}</span>
            <h1 className="text-5xl font-extrabold leading-[60px] sm:leading-[80px] sm:text-7xl">
              {dict.home.title}
            </h1>
            <span className="text-red text-lg">
              {dict.home.role}
            </span>
          </div>
          <ContactButtonComponent text={dict.contactButton} />
        </div>
        <div className="flex bg-pussian-blue -bottom-10 w-11/12 left-0 right-0 m-auto justify-center gap-4 xs:w-8/12 sm:gap-10 sm:bottom-auto sm:m-0 sm:w-max sm:left-auto sm:-right-20 sm:py-10 sm:flex-col absolute">
          <HeadingHomeComponent title={dict.home.yearsExp} value="06" />
          <HeadingHomeComponent title={dict.home.completed} value="12" />
          <HeadingHomeComponent title={dict.home.pending} value="02" />
        </div>
      </section>
      <ContentSectionComponent title={dict.home.latestTitle} heading={dict.home.latestHeading}>
        {projects.map((project, index) => (
          <SingleProjectComponent
            key={`project-${index}`}
            bg={project.bg}
            title={project.title}
            description={project.description}
            img={project.img}
            rank={`${index + 1}`}
            slug={project.slug}
            reverse={index % 2 !== 0}
            link={project.link}
            linkText={project.linkText}
            totalCount={projects.length}
          />
        ))}
      </ContentSectionComponent>
      <ContentSectionComponent title={dict.home.skillsTitle} heading={dict.home.skillsHeading}>
        {skills.map((skill, index) => (
          <SkillComponent
            key={`skill-${index}`}
            title={skill.title}
            description={skill.description}
            tools={skill.tools}
          />
        ))}
      </ContentSectionComponent>
    </>
  );
}
