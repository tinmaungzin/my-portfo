import Image from "next/image";

const Experience = () => {
  const companies = [
    {
      name: "NSpiral",
      logo: "/images/N-Spiral.png",
      location: "Mandlay, Myanmar",
      role: "Software Engineer",
      duration: "Mar 2022 – June 2024 (2 Years and 3 Months)",
      bullets: [
        "Developed and maintained multiple full-stack apps using Laravel, Node.js and Next.js, including restaurant booking, gym POS, e-commerce, and insurance management.",
      ],
      technologies: [
        "ReactJS",
        "NextJS",
        "NodeJS",
        "MySQL",
        "Laravel",
        "RabbitMQ",
        "Terraform",
        "Jest",
        "AWS",
        "Docker",
        "Git",
      ],
    },
    {
      name: "NexStack",
      logo: "/images/NexStack.png",
      location: "Singapore",
      role: "Full-Stack Developer",
      duration: "Aug 2021 – Feb 2022 (6 Months)",
      bullets: [
        "Led a team of five developers to develop and maintain ERP solutions for supermarkets and security companies.",
        "Co-designed and developed a modern serverless insurance agent solution with AWS and Next.js.",
        "Deployed web applications using CI/CD technology with Github actions.",
      ],
      technologies: [
        "ReactJS",
        "NextJS",
        "MySQL",
        "Strapi",
        "AWS",
        "Docker",
        "Git",
      ],
    },
    {
      name: "Mounts Digital",
      logo: "/images/mounts.jpeg",
      location: "Mandalay, Myanmar",
      role: "Web Developer",
      duration: "May 2019 – June 2021 (2 Years and 1 Month)",
      bullets: [
        "Implemented back-and-forth data flows between multiple components using Vue.js and Vuex technologies.",
        "I co-designed and developed an interactive and complex POS system for a money exchange business.",
        "Developed two advanced ERPs with accounting, finance, multi-role authorization, and comprehensive reporting.",
      ],
      technologies: ["Laravel", "VueJS", "VueX", "JQuery", "MySQL", "Git"],
    },
    {
      name: "Studio AMK",
      logo: "/images/StudioAMK.png",
      location: "Yangon, Myanmar",
      role: "Intern",
      duration: "Nov 2018 – Feb 2019 (3 Months)",
      bullets: [
        "Designed and developed a company internal solution with HTML and CSS.",
        "Built and tested football live score and movie database applications using Node.js and Express.js.",
        "I created a promotion campaign module as a part of an existing microservice application.",
      ],
      technologies: [
        "NodeJS",
        "ExpressJS",
        "HTML",
        "CSS",
        "Javascript",
        "MySQL",
        "Git",
      ],
    },
  ];
  return (
    <div className="bg-gray-300 px-[10%] md:px-[15%] lg:px-[20%] xl:px-[30%]">
      <p className="text-center py-10 text-2xl font-bold">Experiences</p>

      <div className="py-8">
        {companies.map((company: any, index: number) => {
          return (
            <div key={index} className="my-12 border-b border-orange-800 pb-8">
              <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
                <div>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={100}
                    height={100}
                  />
                  <p className="py-4 text-center font-bold text-orange-500">
                    {company.name}
                  </p>
                </div>

                <div>
                  <p className="py-1 text-center lg:text-left">
                    {company.role}
                  </p>
                  <p className="py-1 text-center lg:text-left">
                    {company.duration}
                  </p>
                </div>
              </div>
              <ul className="list-disc my-4 ml-[25px]">
                {company.bullets.map((bullet: string, index: number) => {
                  return <li key={index}>{bullet}</li>;
                })}
              </ul>
              <div className=" flex flex-wrap">
                {company.technologies.map((skill: any, index: number) => {
                  return (
                    <span
                      className="border border-solid border-orange-800 mr-3 mb-3 p-2 rounded-sm text-center text-xs"
                      key={index}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
