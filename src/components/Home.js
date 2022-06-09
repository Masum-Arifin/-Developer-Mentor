import React, { useEffect } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import toast from "react-hot-toast";
import CopyToClipboard from "react-copy-to-clipboard";
import { gsap, Power3 } from "gsap";

const notify = () => toast("Email Copied");

const Home = () => {
  useEffect(() => {
    gsap.from(".name-text", {
      opacity: 0,
      duration: 1,
      x: "-30px",
      ease: Power3.easeInOut,
      stagger: 0.4,
    });
    gsap.from(".designation", {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      ease: Power3.easeInOut,
    });
  }, []);

  return (
    <div className="home">
      <div className="name">
        <div className="name-inner">
          <h1 className="name-text">Abdullah</h1>{" "}
          <h1 className="name-text"> </h1>{" "}
          <h1 className="name-text">al Masum. </h1>{" "}
          <p className="designation"> Web Developer | Mentor </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="socials">
        <div>
          <a
            href="https://www.facebook.com/sheikh.masumaeifin"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            <GrFacebookOption className="social-icon" />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/abdullah-al-masumbd/"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            <FaLinkedin className="social-icon" />
          </a>{" "}
        </div>{" "}
        <div>
          <a
            href="https://github.com/Masum-Arifi"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            <BsGithub className="social-icon" />
          </a>{" "}
          <CopyToClipboard text="masumarifinbd@gmail.com">
            <>
              <div onClick={notify} className="social">
                <SiGmail className="social-icon" />
              </div>
            </>
          </CopyToClipboard>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
