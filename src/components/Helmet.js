import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({title, desc}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`Питомник декоративных растений "Карань" | ${title}`}</title>
      <meta name="description" content={`купить тую, можжевельник, сосну и другие декоративные растения` || desc} />
    </Helmet>
  );
};

export default SEO;
