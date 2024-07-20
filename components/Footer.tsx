import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-900 px-[10%] md:px-[15%] lg:px-[20%] xl:px-[30%] text-white">
      <div className="py-10 flex flex-col justify-center items-center md:flex-row md:justify-between">
        <div className="py-4">
          <p className="text-center text-lg text-orange-500">Contact</p>
          <ul className="list-disc ml-[25px] py-5">
            <li className="underline py-1">
              <Link href="tel:+66931588496">+66931588496</Link>
            </li>
            <li className="underline py-1">
              <Link href="mailto:tinmaungzin.tmz@gmail.com">
                tinmaungzin.tmz@gmail.com
              </Link>
            </li>
            <li className="underline py-1">
              <Link href="https://www.linkedin.com/in/tinmaungzin/">
                LinkedIn Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <p className="text-center text-lg text-orange-500">Links</p>
          <ul className="list-disc ml-[25px] py-5">
            <li className="underline py-1">
              <Link href="https://github.com/tinmaungzin">Github Profile</Link>
            </li>
            <li className="underline py-1">
              <Link href="https://www.linkedin.com/in/tinmaungzin/">
                LinkedIn Profile
              </Link>
            </li>
            <li className="underline py-1">
              <Link href="/documents/Tin Maung Zin - Resume.pdf">
                My Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
