import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="@pgbnguyen - Developer, Writer, Creator"
      description="Full-Stack Developer based in Toronto, Canada with 3 years of web development expertise using ReactJS/TypeScript/NodeJS and the ASP.NET C# platform. At BKG Group, I collaborate with the project director, designer, and embed developers to design and build the front-end and back-end of construction monitoring websites. Understanding how to design front-end user interfaces (UX) for web applications using HTML, CSS, JavaScript, React, and other JavaScript frameworks. CSS components, server-side CSS pre-processing platforms (such as SCSS), and visualization frameworks such as D3.js are also familiar. Experience with asynchronous request processing, partial page updates, and AJAX; creating CRUD system; awareness of standard front-end development tools such as Babel, Webpack, and NPM; Agile, version control (Git), code review, cloud server (Azure), and unit testing are a plus."
    >
      <Hero />
      {/* <FavouriteProjects /> */}
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
