import { IoMailOpenSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


const Landing = () => {
  const skills = [
    "ReactJS",
    "NodeJS",
    "Laravel",
    "VueJS",
    "NextJS",
    "MySQL",
    "Postgres",
    "MongoDB",
    "Docker",
    "Redis",
    "RabbitMQ",
    "Terraform",
    "AWS",
    "Git",
  ];
  return (
    <div className="px-[3%] md:px-[10%] lg:px-[30%]  flex justify-center items-center">
      <div>
        <div className="px-6 py-10">
          <p>Hello, I am</p>
          <p className="text-orange-600 text-2xl font-bold my-2">Tin Maung Zin</p>
          <p className="leading-7">
            I am a <b>SOFTWARE ENGINEER</b> with around 6 years of experience
            who is passionate about technology. Throughout my career, I have
            built and managed systems from small to large in the automotive,
            financial, and supermarket industries. I have worked with project
            managers and product teams, implementing solutions in the cloud, and
            working with several technologies and services.
          </p>
        </div>

        <div className="px-6 flex flex-wrap">
          {skills.map((skill: any, index: number) => {
            return (
              <span
                className="bg-orange-600 mr-3 mb-3 p-2 text-white rounded-sm text-center text-sm"
                key={index}
              >
                {skill}
              </span>
            );
          })}
        </div>
        <div className="px-6 flex justify-center gap-10 my-12">
          <FaGithub className="text-4xl text-orange-600" />
          <FaLinkedin className="text-4xl text-orange-600" />
          <IoMailOpenSharp className="text-4xl text-orange-600" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
