import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "@pgbnguyen - Developer, Writer, Creator",
    description: `A Full-Stack Developer based in Toronto, Canada with 3 years of web development expertise using ReactJS/TypeScript/NodeJS and the ASP.NET C# platform. At BKG Group, I collaborate with the project director, designer, and embed developers to design and build the front-end and back-end of construction monitoring websites. Understanding how to design front-end user interfaces (UX) for web applications using HTML, CSS, JavaScript, React, and other JavaScript frameworks. CSS components, server-side CSS pre-processing platforms (such as SCSS), and visualization frameworks such as D3.js are also familiar. Experience with asynchronous request processing, partial page updates, and AJAX; creating CRUD system; awareness of standard front-end development tools such as Babel, Webpack, and NPM; Agile, version control (Git), code review, cloud server (Azure), and unit testing are a plus.`,

    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--SFl1FUYG--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/431916/3e74fd3d-11bf-4164-b33a-2557cf69dd51.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="title" content="@pgbnguyen - Developer, Writer, Creator" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://www.pgbnguyen.com/`} />
        <link rel="canonical" href={`https://www.pgbnguyen.com/`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Bao Nguyen" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PGBNGUYEN99" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pgbnguyen.com/" />
        <meta
          property="og:title"
          content="Bao Nguyen - Developer, Writer, Creator"
        />
        <meta
          property="og:description"
          content="Full-Stack Developer based in Toronto, Canada with 3 years of web development expertise using ReactJS/TypeScript/NodeJS and the ASP.NET C# platform. At BKG Group, I collaborate with the project director, designer, and embed developers to design and build the front-end and back-end of construction monitoring websites. Understanding how to design front-end user interfaces (UX) for web applications using HTML, CSS, JavaScript, React, and other JavaScript frameworks. CSS components, server-side CSS pre-processing platforms (such as SCSS), and visualization frameworks such as D3.js are also familiar. Experience with asynchronous request processing, partial page updates, and AJAX; creating CRUD system; awareness of standard front-end development tools such as Babel, Webpack, and NPM; Agile, version control (Git), code review, cloud server (Azure), and unit testing are a plus."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/practicaldev/image/fetch/s--SFl1FUYG--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/431916/3e74fd3d-11bf-4164-b33a-2557cf69dd51.png"
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.pgbnguyen.com/" />
        <meta
          property="twitter:title"
          content="Bao Nguyen - Developer, Writer, Creator"
        />
        <meta
          property="twitter:description"
          content="Full-Stack Developer based in Toronto, Canada with 3 years of web development expertise using ReactJS/TypeScript/NodeJS and the ASP.NET C# platform. At BKG Group, I collaborate with the project director, designer, and embed developers to design and build the front-end and back-end of construction monitoring websites. Understanding how to design front-end user interfaces (UX) for web applications using HTML, CSS, JavaScript, React, and other JavaScript frameworks. CSS components, server-side CSS pre-processing platforms (such as SCSS), and visualization frameworks such as D3.js are also familiar. Experience with asynchronous request processing, partial page updates, and AJAX; creating CRUD system; awareness of standard front-end development tools such as Babel, Webpack, and NPM; Agile, version control (Git), code review, cloud server (Azure), and unit testing are a plus."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/practicaldev/image/fetch/s--SFl1FUYG--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/431916/3e74fd3d-11bf-4164-b33a-2557cf69dd51.png"
        ></meta>
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
