"use client";

import SingleEducationComponent from "./components/SingleEducationComponent";
import SingleExperienceComponent from "./components/SingleExperienceComponent";
import { experienceDatas, educationDatas } from "./datas";
import ContentSectionComponent from "@/src/components/ContentSectionComponent";

export default function Experience() {
  return (
    <>
      <ContentSectionComponent title="My Awesome Experience" heading="WORK EXPERIENCE">
        <ol>
          {experienceDatas
            .filter((experience) => experience.isVisible)
            .map((experience, index) => (
              <SingleExperienceComponent
                key={index}
                positionTitle={experience.positionTitle}
                company={experience.company}
                contractType={experience.contractType}
                startDate={experience.startDate}
                endDate={experience.endDate}
                tools={experience.tools}
                missions={experience.missions}
              />
            ))}
        </ol>
      </ContentSectionComponent>
      <ContentSectionComponent heading="QUALIFICATION" title="My Education">
        <ol>
          {educationDatas.map((education, index) => (
            <SingleEducationComponent
              key={index}
              degree={education.degree}
              date={education.date}
              school={education.school}
            />
          ))}
        </ol>
      </ContentSectionComponent>
    </>
  );
}
