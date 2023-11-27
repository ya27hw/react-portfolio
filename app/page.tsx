import { BsFillMoonStarsFill } from "react-icons/bs";
import Head from "next/head";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

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
          <div className="text-center">
            <h2>Yousuf</h2>
            <h3>Developer</h3>
            <p>Junior Software Developer</p>
          </div>
          <div>
            <AiFillTwitterCircle></AiFillTwitterCircle>
            <AiFillLinkedin></AiFillLinkedin>
          </div>
        </section>
      </main>
    </div>
  );
}
