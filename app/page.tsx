"use client";
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { TypeAnimation } from "react-type-animation";
import openUrlInNewTab from "./utils/utils";

export default function Home() {
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
            <button
              className="bg-transparent text-teal-600 font-bold py-3 px-5 rounded-xl border border-teal-600"
              onClick={() =>
                openUrlInNewTab(
                  "https://app.skiff.com/docs/f3392b40-2471-41ec-9a09-e6d62f89aaa5#Wt9HTe8fRtuCokD1t%2F38vf5HzxpRGGlNdQx0Tbc9qP0%3D"
                )
              }
            >
              View my Resume
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
            <div
              className="grid grid-cols-1 gap-10 lg:grid-cols-2"
              id="cards-section"
            >
              <Card
                cardTitle="Ethereum Wallet App"
                cardDescription="A secure crypto wallet app, containing versatile wallet management, real-time market data integration, and seamless token swapping with major decentralized exchanges."
                cardToolsUsed="Flutter & Dart"
                cardGitHubLink="https://github.com/ya27hw/wallet"
              />
              <Card
                cardTitle="Flixora - Social Media App"
                cardDescription="Flixora, a cross-platform social app, has features such as user authentication and Firebase backend integration. The app introduces elements such as facial recognition for posts and engaging gamification features, providing users with an immersive social experience."
                cardToolsUsed="Flutter & Dart"
                cardGitHubLink="about:blank"
              />
              <Card
                cardTitle="Portfolio"
                cardDescription="A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer."
                cardToolsUsed="React.js + Next.js + Tailwindcss"
                cardGitHubLink="https://github.com/ya27hw/react-portfolio"
              />{" "}
            </div>
          </div>
        </section>
        <section>
          <h2
            id="contact"
            className="text-4xl lg:text-5xl pb-3 pt-14 dark:text-teal-500 text-teal-600 font-medium"
          >
            Contact Me
          </h2>
          <p className="text-md md:text-xl py-2 leading-8 px-11 max-w-4xl">
            Feel free to reach out to me on my e-mail business@elbaesy.com, or
            on of my links below. Thank you for your interest!
          </p>
          <div className="text-5xl flex justify-center gap-16 py-7 text-teal-800">
            <AiFillLinkedin
              onClick={() =>
                openUrlInNewTab("https://www.linkedin.com/in/yousufeb/")
              }
              style={{ cursor: "pointer" }}
            />{" "}
            <AiFillGithub
              onClick={() => openUrlInNewTab("https://github.com/ya27hw")}
              style={{ cursor: "pointer" }}
            />
            <AiOutlineMail
              onClick={() => openUrlInNewTab("mailto:business@elbaesy.com")}
              style={{ cursor: "pointer" }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
