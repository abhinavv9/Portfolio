import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Foot = () => {
  return (
    <div className="w-full my-4 mt-6">
      <hr />
      <div className="flex justify-between w-full my-4">
        <p>Abhinav Verma</p>
        <span className="flex gap-3">
          <a href="https://github.com/abhinavv9" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abhinavv9/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/sudoboink" target="_blank">
            <FaTwitter />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Foot;
