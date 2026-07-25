import Image from "next/image";
import css from "../public/images/logos/css.png";
import git from "../public/images/logos/git.png";
import github from "../public/images/logos/github-mark.png";
import html from "../public/images/logos/html.png";
import js from "../public/images/logos/js.png";
import macos from "../public/images/logos/macos.png";
import next from "../public/images/logos/next.ico";
import react from "../public/images/logos/react.ico";
import redux from "../public/images/logos/redux.png";
import styledComponentsLogo from "../public/images/logos/styled-components-logo.png";
import tailwind from "../public/images/logos/tailwind.svg";
import vscode from "../public/images/logos/vscode.png";
import windowslogo from "../public/images/logos/windowslogo.png";
import node from "../public/images/logos/node-js.png";
import python from "../public/images/logos/pythonLogo.png";
import winserver from "../public/images/logos/winserver.png";
import databricks from "../public/images/logos/databricks.svg";
import linux from "../public/images/logos/linux.svg";
import palantir from "../public/images/logos/palantir.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-auto">
      <div className="text-center text-base lg:text-xl m-2 mt-4 lg:w-200 px-4">
        Hey there!
      </div>
      <div className="text-center text-base lg:text-xl m-2 lg:w-200 px-6">
        {`My name is Nick and I am an experienced systems engineer, budding data scientist, and a coder on the side. I've been in IT for around 12 years and have dabbled in programming and data science for around 5 years now. With my skillset, deep curiosity, and a drive to fiddle with new technologies, I'm looking to branch out to new
        horizons.`}
      </div>
      <div className="text-center text-base lg:text-xl m-2 lg:w-200 px-6">
        {`The bulk of my experience with IT has been focused on supporting various
        different military commands and government agencies. I've always been
        interested in creating things and problem solving which IT, programming, and data science have allowed me to do. My learning track has
        been a lot of researching languages and issues, a lot of self paced
        courses, and a lot of collaboration with my friends who are in the
        industry to develop my skills. I have always been a curious individual and this career path has allowed me to be able to tinker and work on new and exciting problems pert near constantly.`}
      </div>
      <div className="text-center text-base lg:text-xl m-2 lg:w-200 px-6">
        {`I graduated from USF in 2016. I have a passion for playing TTRPGs (such as
        Dungeons & Dragons), video games, and reading. I've been known to enjoy
        hiking, and doing nature and wildlife photography. I have two dogs and am married to a wonderful partner.`}
      </div>
      <div className="text-center text-base lg:text-xl m-2 lg:w-200 px-6">
        {`Below is a general list of systems, languages, and technology I've used.
        If you'd like to see a high level view of my work and check out some links,
        head on over to the Portfolio section and have a look. If you're looking to
        reach out, head over to the Contact page.`}
      </div>

      <div className="m-2 mb-4 w-screen lg:w-168 flex flex-col gap-y-1 lg:gap-y-5 px-2">
        {/* Row One */}
        <div className="flex w-full gap-x-1 lg:gap-x-5 justify-center">
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={winserver}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="WinServerOS"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              WinServer
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={windowslogo}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="WindowsOS"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              WinOS
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={linux}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="Linux"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              Linux
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={macos}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="MacOS"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              MacOS
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={js}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="JavaScript"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              JavaScript
            </div>
          </div>
        </div>

        {/* Row Two */}
        <div className="flex w-full lg:gap-x-5 justify-center">
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={react}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="React"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              React
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={redux}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="Redux"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              Redux
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={react}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="ContextAPI"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              Context
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={node}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="Node.js"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              Node.js
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={next}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="Next.js"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              Next.js
            </div>
          </div>
        </div>

        {/* Row Three */}
        <div className="flex w-full lg:gap-x-5 justify-center">
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={css}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="CSS"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              CSS
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={styledComponentsLogo}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="StyledComponents"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              Styled
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={tailwind}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="Tailwind"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              Tailwind
            </div>
          </div>

          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={git}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="Git"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              Git
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={html}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="HTML"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              HTML
            </div>
          </div>
        </div>

        {/* Row Four */}
        <div className="flex w-full lg:gap-x-5 justify-center">
            <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={github}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="GitHub"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              GitHub
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={vscode}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="VSCode"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              VSCode
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={python}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="Python"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              Python
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={databricks}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="Databricks"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              Databricks
            </div>
          </div>
          <div className="flex flex-col items-center m-1 lg:m-2 bg-blueGray rounded-lg w-24 lg:w-28 shadow-dark">
            <Image
              src={palantir}
              className="m-2 h-8 lg:h-16 w-8 lg:w-16"
              alt="MSS"
            />
            <div className="w-full p-2 text-xs lg:text-sm text-center bg-limeGreen rounded-lg">
              MSS
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
