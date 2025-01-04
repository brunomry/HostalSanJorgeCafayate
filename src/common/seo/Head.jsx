import { Helmet } from "react-helmet";

function Head({ head }) {
  return (
    <Helmet>
      <meta name="description" content={head.description} />
      <meta name="keywords" content={head.keywords} />
      <meta name="robots" content={head.robots} />
      <link
        rel="canonical"
        href={`https://hostalsanjorgecafayate.netlify.app/${head.canonical}`}
      />
      <meta
        property="og:title"
        content={`${head.title} | Hostal San Jorge - Alojamiento en Cafayate, Salta`}
      />
      <meta property="og:description" content={head.description} />
      <meta
        property="og:url"
        content={`https://hostalsanjorgecafayate.netlify.app/${head.canonical}`}
      />
      <title>{head.title}</title>
    </Helmet>
  );
}

export default Head;
