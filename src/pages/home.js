import React from "react";
import ContactForm from "../components/ContactForm";
import Gallery from "../components/Gallery";
import GallerySwiper from "../components/GallerySwiper";
import { useSelector } from "react-redux";

const Home = () => {
  const { isSend } = useSelector((store) => store.modal);
  return (
    <main className="main">
      <div className="container">
        <section className="hero-page">
          <ContactForm parentClass="hero-page" />
          <GallerySwiper parentClass="hero-page" />
          {isSend ? (
            <div className="hero-page__message">
              <h3>Ваше сообщение отправлено!</h3>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
};

export default Home;
