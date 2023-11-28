"use client";
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Card from "./components/Card";
import {NavBar} from "./components/NavBar";
import { useState } from "react";

export default function Home() {
  // const [darkMode, setDarkMode] = useState(false);
  const handleLinkedInClick = () => {
    const linkedInUrl = "https://www.linkedin.com";
    window.open(linkedInUrl, "_blank");
  };
  return (
    <div className="">
      <Head>
        <title>My portfolio</title>
      </Head>
      {/* Main component is here */}
      <main className="px-5 md:px-20 lg:px-40 dark:bg-slate-800">
        <div id="navbar-section">
          <NavBar />
        </div>
        {/* This section covers the NavBar, and the body below it */}
        <section className="min-h-screen">
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 dark:text-teal-500 text-teal-600 font-medium md:text-6xl">
              Hey, I'm Yousuf!
            </h2>
            <h3 className="text-2xl pt-3 pb-2 md:text-3xl">
              Software Developer
            </h3>
            <p className="text-lg py-5 leading-8 md:text-2xl max-w-xl mx-auto">
              Very OP Software Developer. I am so good, I code and finish
              projects in my sleep. I have developed Windows 17 ahead of
              Microsoft. I live in the year 2050 with my technological
              advancements.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-6  md:text-7xl">
            <AiFillLinkedin
              onClick={handleLinkedInClick}
              style={{ cursor: "pointer" }}
            />{" "}
            <AiFillGithub />
            <AiOutlineMail />
          </div>
        </section>
        <section>
          <div id="about-section">
            <h2 className="text-4xl lg:text-5xl pb-3 dark:text-teal-500 text-teal-600 font-medium">
              About me
            </h2>
            <p className="text-md md:text-xl py-2 leading-8 px-10 max-w-6xl">
              Lorem Ipsum dolores meow more text to be filled here this is just
              text filler text this text is filler text filler text I love
              watching my pidol Haaland why he didn't win Ballon d'or
            </p>
          </div>
          <div id="projects-section">
            <h2 className="text-4xl lg:text-5xl pt-20 pb-3 dark:text-teal-500 text-teal-600 font-medium">
              Projects
            </h2>
            <div className="lg:flex gap-10" id="cards-section">
              <Card cardTitle="Pionel Pandreas Pessi" />
              <Card cardTitle="Pristiano Penaldo" />
              <Card cardTitle="Pylian MPayPal" />
              <Card cardTitle="Perling Paaland" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-8">
              Burtons is a new display font with cool characters. it's a
              delightful font duo, serif and script perfect for headlines
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
