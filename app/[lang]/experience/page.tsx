import SingleEducationComponent from "./components/SingleEducationComponent";
import SingleExperienceComponent from "./components/SingleExperienceComponent";
import { getExperienceDatas, getEducationDatas } from "./datas";
import ContentSectionComponent from "../components/ContentSectionComponent";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

export default async function Experience({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Locale);
  const experienceDatas = getExperienceDatas(dict.experience);
  const educationDatas = getEducationDatas(dict.experience);
  return (
    <>
      <ContentSectionComponent title={dict.experience.workTitle} heading={dict.experience.workHeading}>
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
      <ContentSectionComponent heading={dict.experience.eduHeading} title={dict.experience.eduTitle}>
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
