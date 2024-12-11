import { Helmet } from "react-helmet";

function Head({head}) {
  return (
    <Helmet>
      <meta
        name="description"
        content={head.description}
      />
      <meta
        name="keywords"
        content={head.keywords}
      />
      <meta name="author" content="Bruno Madozzo Romay" />
      <meta name="robots" content={head.robots} />
      <link
        rel="canonical"
        href={head.canonical}
      />
      <link rel="icon" href="./src/IMG/favicon.png" />
      <link rel="apple-touch-icon" href="./src/IMG/favicon.png" />
      <meta property="og:title" content={head.title} />
      <meta
        property="og:description"
        content={head.description}
      />
      <meta
        property="og:image"
        content="https://hostalsanjorgecafayate.netlify.app/src/IMG/frente.webp"
      />
      <meta
        property="og:url"
        content={head.title}
      />
      <title>
        {head.title}
      </title>
    </Helmet>
  );
}

export default Head;
