"use client";
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const handleLinkedInClick = () => {
    const linkedInUrl = "https://www.linkedin.com/in/yousufeb/";
    window.open(linkedInUrl, "_blank");
  };

  const handleGitHubClick = () => {
    const gitHubUrl = "https://github.com/ya27hw";
    window.open(gitHubUrl, "_blank");
  };

  const handleMailClick = () => {
    const mailUrl = "mailto:yousufashraf@elbaesy.com";
    window.open(mailUrl, "_blank");
  };

  return (
    <div className="">
      <Head>
        <title>My portfolio</title>
      </Head>
      {/* Main component is here */}
      <main className="px-5 md:px-20 max-w-screen-2xl mx-auto lg:px-40 dark:bg-slate-800 bg-white">
        <div id="navbar-section" className="pt-5 md:pt-2">
          <NavBar />
        </div>
        {/* body below it */}
        <section className="pt-3 lg:pt-10">
          <div className="text-center p-10">
            <TypeAnimation
              className="text-5xl py-2 dark:text-teal-500 text-teal-600 font-medium md:text-5xl"
              sequence={[
                0,
                "Hey!",
                1000,
                "Hey! I'm Yousuf.",
                1000,
                "Hey! I'm Yousuf. Nice to meet you! 👋🏻",
              ]}
              wrapper="span"
              speed={40}
              cursor={false}
            />
            <p className="text-lg pt-5 leading-8 md:text-xl max-w-xl mx-auto">
              American Software developer specialising in app development, and backend
              development.
            </p>
          </div>
          <div className="text-xl flex justify-center gap-16 md:text-xl ">
            <button className="bg-teal-600 text-white font-bold py-3 px-6 rounded-xl">
              Contact
            </button>
            <button className="bg-transparent text-teal-600 font-bold py-3 px-5 rounded-xl border border-teal-600">
              Resume
            </button>
          </div>
        </section>
        <section>
          <div id="about-section" className="pt-16">
            <h2
              id="about"
              className="text-4xl lg:text-5xl pb-3 dark:text-teal-500 text-teal-600 font-medium"
            >
              About me
            </h2>
            <p className="text-md md:text-xl py-2 leading-8 px-11 max-w-4xl text-justify">
              I&apos;m a Computer Science graduate with First Class Honours from
              Heriot Watt University. My expertise spans a variety of
              programming languages, including JavaScript, TypeScript, Python,
              Dart, and C#. Notably, I developed a comprehensive Ethereum mobile
              wallet application using Flutter.
            </p>
            <p className="text-md md:text-xl py-2 leading-8 px-11 max-w-4xl text-justify">
              Additionally, I led a team in creating a cross-platform social
              media application and guided a successful 2D multiplayer game
              development project. These experiences have honed my skills in
              mobile app development, backend services, and collaborative
              problem-solving.
            </p>
          </div>
          <div id="projects-section">
            <h2
              id="projects"
              className="text-4xl lg:text-5xl pt-20 pb-3 dark:text-teal-500 text-teal-600 font-medium"
            >
              Projects
            </h2>
            <div className="lg:flex gap-10" id="cards-section">
              <Card
                cardTitle="Ethereum Wallet App"
                cardDescription="A secure crypto wallet app, containing versatile wallet management, real-time market data integration, and seamless token swapping with major decentralized exchanges."
              cardToolsUsed="Flutter & Dart"
              />
              <Card
                cardTitle="Flixora - Social Media App"
                cardDescription="Flixora, a cross-platform social app, has features such as user authentication and Firebase backend integration. The app introduces elements such as facial recognition for posts and engaging gamification features, providing users with an immersive social experience."
              cardToolsUsed="Flutter & Dart"
              />
              <Card
                cardTitle="Portfolio"
                cardDescription="This current website"
                cardToolsUsed="React.js + Next.js + TailwindCss"
              />
            </div>
          </div>
        </section>
        <section>
          <h2
            id="contact"
            className="text-4xl lg:text-5xl py-3 dark:text-teal-500 text-teal-600 font-medium"
          >
            Contact Me
          </h2>
          <p className="text-md md:text-xl py-2 leading-8 px-11 max-w-4xl">
            Feel free to reach out to me on my e-mail yousufashraf@elbaesy.com,
            or on of my links below. Thank you for your interest!
          </p>
          <div className="text-5xl flex justify-center gap-16 py-7">
            <AiFillLinkedin
              onClick={handleLinkedInClick}
              style={{ cursor: "pointer" }}
            />{" "}
            <AiFillGithub
              onClick={handleGitHubClick}
              style={{ cursor: "pointer" }}
            />
            <AiOutlineMail
              onClick={handleMailClick}
              style={{ cursor: "pointer" }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
