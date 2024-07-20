import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      name: "My Portfolio",
      link: "https://github.com/tinmaungzin/my-portfo",
      description:
        "This portfolio website is developed using NextJS and Tailwind CSS framework. It is a responsive website using Tailwind's utility classes focusing on CSS Flex Box properties. It is cofigured and hosted on Vercel.",
      technologies: ["ReactJS", "NextJS", "Tailwind", "Vercel"],
    },
    {
      name: "Payment Card Management",
      link: "https://github.com/tinmaungzin/wgw-card-app",
      description:
        "This is an app that connects with the Omise payment gateway. The app will allow users to make payments using their credit card.",
      technologies: ["React Native", "Expo", "Redux", "Omise"],
    },
    {
        name: "Chat API",
        link: "https://github.com/tinmaungzin/wgw-chat-api",
        description:
          "This is a chat API capable of sending and receiving text messages using socket communication and message queues, with an emphasis on real-time interaction and scalability.",
        technologies: ["NestJS", "WebSocket", "RabbitMQ", "Terraform", "Docker"],
      },

    {
      name: "BKK Condo Price Analysis",
      link: "https://github.com/tinmaungzin/bkk_condo_data",
      description:
        "This project focuses on analyzing rental prices for condos in Bangkok, Thailand. It involves scraping rental listing websites to gather data, downloading the actual rental data, and analyzing it to gain insights into the rental market trends in Bangkok.",
      technologies: ["Python", "BeautifulSoup", "Excel", "Tableau"],
    },
  ];
  return (
    <div className="bg-gray-900 px-[10%] md:px-[15%] lg:px-[20%] xl:px-[30%] text-white">
      <p className="text-center py-10 text-2xl font-bold">Projects</p>
      <div className="py-8">
        {projects.map((project: any, index: number) => {
          return (
            <div key={index} className="my-12 border-b border-orange-800 pb-8">
              <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
                <p className="py-2 text-lg text-orange-500">{project.name}</p>
                <Link href={project.link} target="_blank">
                  {" "}
                  <p className=" py-2 underline text-sm">
                    Source Code
                  </p>{" "}
                </Link>
              </div>

              <p className="py-4 leading-7">{project.description}</p>
              <div className=" flex flex-wrap justify-center items-center">
                {project.technologies.map((skill: any, index: number) => {
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

export default Projects;
