import { Helmet } from "react-helmet";

function Head({head}) {

console.log(head)

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
        href={`https://www.hostalsanjorgecafayate.netlify.app/${head.canonical}`}
      />
      <link rel="icon" href="./src/" />
      <link rel="apple-touch-icon" href="./src/" />
      <meta property="og:title" content={`${head.title} | Hostal San Jorge - Alojamiento en Cafayate, Salta`} />
      <meta
        property="og:description"
        content={head.description}
      />
      <meta
        property="og:image"
        content="https://hostalsanjorgecafayate.netlify.app/src/"
      />
      <meta
        property="og:url"
        content={`${head.title} | Hostal San Jorge - Alojamiento en Cafayate, Salta`}
      />
      <title>
        {head.title}
      </title>
    </Helmet>
  );
}

export default Head;
