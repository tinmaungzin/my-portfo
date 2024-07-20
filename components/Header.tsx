import Image from "next/image";
import Link from "next/link";
import { IoMailOpenSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Header = () => {
  const skills = [
    "ReactJS",
    "NodeJS",
    "Laravel",
    "VueJS",
    "NextJS",
    "NestJS",
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
    <div className=" bg-gray-900 px-[10%] md:px-[15%] lg:px-[20%] xl:px-[30%] text-white">
      <div className="flex justify-center pt-12 ">
        <div className="w-[200px] h-[200px] relative ">
          <Image
            src="/images/profile.jpg"
            alt="Tin Maung Zin"
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className="text-white ">
        <p className="text-center my-5 text-3xl font-bold ">Tin Maung Zin</p>
        <p className="text-center my-5">
          {" "}
          {"<>"} <span className="text-orange-500"> A Software Engineer </span>{" "}
          {"</>"}{" "}
        </p>
        <p className="text-justify pb-10 leading-7">
          I am a Software Engineer with around 6 years of experience who is
          passionate about technology. Throughout my career, I have built and
          managed systems from small to large in the automotive, financial, and
          supermarket industries. I have worked with project managers and
          product teams, implementing solutions in the cloud, and working with
          several technologies and services.
        </p>
      </div>
      <div className=" flex flex-wrap justify-center items-center">
        {skills.map((skill: any, index: number) => {
          return (
            <span
              className="border border-solid border-orange-800 mr-3 mb-3 p-2 text-white rounded-sm text-center text-sm"
              key={index}
            >
              {skill}
            </span>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link href="/documents/Tin Maung Zin - Resume.pdf" target="_blank">
          <p className="text-white bg-orange-400 p-2 text-center my-10 w-[15em] hover:bg-orange-800 rounded-full">
            View Resume
          </p>
        </Link>
      </div>

      <div className=" flex justify-center gap-10 pt-5 pb-10">
        <Link href="https://github.com/tinmaungzin" target="_blank" title="Github Profile">
          <FaGithub className="text-4xl text-orange-500" />
        </Link>
        <Link href="https://www.linkedin.com/in/tinmaungzin/" target="_blank" title="LinkedIn Profile">
          <FaLinkedin className="text-4xl text-orange-500" />
        </Link>
        <Link href="mailto:tinmaungzin.tmz@gmail.com" target="_blank" title="Reach by mail">
          <IoMailOpenSharp className="text-4xl text-orange-500" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
