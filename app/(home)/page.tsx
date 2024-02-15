"use client";

import HeadingHomeComponent from "./components/HeadingHomeComponent";
import SingleProjectComponent from "./components/SingleProjectComponent";
import Image from "next/image";
import ContentSectionComponent from "@/app/components/ContentSectionComponent";
import {
  frontendToolsImages,
  backendToolsImages,
  OtherToolsImages,
  projects,
  skills,
} from "./datas";
import SkillComponent from "./components/SkillComponent";
import ContactButtonComponent from "./components/ContactButtonComponent";

export default function Home() {
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
            <h6>Hey there,</h6>
            <h1 className="text-5xl font-extrabold leading-[60px] sm:leading-[80px] sm:text-7xl">
              I’m Ronaldo MINE
            </h1>
            <h6 className="text-red">Full Stack Web Developer</h6>
          </div>
          <ContactButtonComponent />
        </div>
        <div className="flex bg-pussian-blue -bottom-10 w-11/12 left-0 right-0 m-auto justify-center gap-4 xs:w-8/12 sm:gap-10 sm:bottom-auto sm:m-0 sm:w-max sm:left-auto sm:-right-20 sm:py-10 sm:flex-col absolute">
          <HeadingHomeComponent title="Years of Experience" value="04" />
          <HeadingHomeComponent title="Completed projects" value="10" />
          <HeadingHomeComponent title="Pending projects" value="01" />
        </div>
      </section>
      <ContentSectionComponent title="Latest Projects" heading="EXPLORE">
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
          />
        ))}
      </ContentSectionComponent>
      <ContentSectionComponent title="Technical Skills" heading="DISCOVER">
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
