import React, { useState, useRef } from "react";
import Icons from "../assets/images/icons.svg";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { showMessage, hideMessage } from "../features/modals/modalSlice";

const ContactForm = ({ parentClass }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_avoggr3",
        "template_x0ikeet",
        form.current,
        "JYQbdNaiMV6M2DMDi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          dispatch(showMessage());
          setTimeout(() => dispatch(hideMessage()), 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={`${parentClass}__contact contact-form`}>
      <h3 className="contact-form__title form-title">Задайте вопрос</h3>
      <form className="contact-form__form form" onSubmit={sendEmail} ref={form}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className="form__input"
          placeholder="Ваше имя..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          className="form__input"
          placeholder="Ваша почта..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          id="message"
          value={message}
          placeholder="Сообщение..."
          className="form__input form__input--big"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="form__btn" type="submit" value="send">
          отправить
        </button>
      </form>
      <div className="contact-form__footer contact-footer">
        <h3 className="contact-footer__title form-title">
          или свяжитесь с нами
        </h3>
        <a href="tel:79788888888" className="contact-footer__phone">
          <svg>
            <use xlinkHref={`${Icons}#icon-phone`} />
          </svg>
          <span>{`+7(978)888-88-88`}</span>
        </a>
        <h3 className="contact-footer__title form-title">Соцсети</h3>
        <div className="contact-footer__social social__links">
          <a
            href="http://web.telegram.org"
            className="social__link social__link--tg"
            target={"_blank"}
            rel="noreferrer"
          >
            <svg>
              <use xlinkHref={`${Icons}#icon-tg`} />
            </svg>
          </a>
          <a
            href="http://vk.ru"
            className="social__link social__link--vk"
            target={"_blank"}
            rel="noreferrer"
          >
            <svg>
              <use xlinkHref={`${Icons}#icon-vk`} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
