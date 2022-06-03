import React from "react";
import SEO from "../components/Helmet";

const FailPage = () => {
  return (
    <>
    <SEO title="Страницы не существует"/>
    <main className="main">
      <div className="container" style={{minHeight: '60vh',display: 'grid', placeItems: 'center'}}>
        <h1 style={{textAlign:'center', fontSize: '6rem'}}>404</h1>
      </div>
    </main>
    </>
  );
};

export default FailPage;
