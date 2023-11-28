import { BsFillMoonStarsFill } from "react-icons/bs";
import Head from "next/head";
import Image from "next/image";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";


export default function Home() {
  return (
    <div>
      <Head>
        <title>My portfolio</title>
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developed by</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1.5 border-none rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Yousuf</h2>
            <h3 className="text-2xl py-2">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Junior Software Developer. Born and raised in Southern California
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-6 text-gray-600">
            <AiFillTwitterCircle></AiFillTwitterCircle>
            <AiFillLinkedin></AiFillLinkedin>
            <AiFillGithub />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer:</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem Ipsum dolores meow
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              {/* Image here */}
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful designs</h3>
              <p className="py-2">Creating elegant designs</p>
              <h4>Software tools I use</h4>
              <p>Python</p>
              <p>JS/TS</p>
              <p>Dart</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
