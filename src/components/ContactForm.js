import React, { useState, useRef } from "react";
import Icons from "../assets/images/icons.svg";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { showMessage, hideMessage } from "../features/modals/modalSlice";
import { useForm } from "react-hook-form";

const ContactForm = ({ parentClass }) => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onSubmit",
  });
  const form = useRef();

  const sendEmail = (e) => {
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
          dispatch(showMessage());
          setTimeout(() => dispatch(hideMessage()), 4000);
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={`${parentClass}__contact contact-form`}>
      <h3 className="contact-form__title form-title">Задайте вопрос</h3>
      <form
        className="contact-form__form form"
        onSubmit={handleSubmit(sendEmail)}
        ref={form}
      >
        <label className="form__label">
          <input
            type="text"
            name="name"
            id="name"
            className="form__input"
            placeholder="Ваше имя..."
            {...register("name", {
              required: "Введите своё имя!",
              minLength: {
                value: 3,
                message: "Имя не должно содержать менее 3 букв!",
              },
            })}
          />
          <span className="form__error">
            {errors?.name && (
              <span>{errors?.name?.message || "Ошибка!"}</span>
            )}
          </span>
        </label>
        <label className="form__label">
          <input
            type="text"
            name="email"
            id="email"
            className="form__input"
            placeholder="Ваша почта..."
            {...register("email", {
              required: "Введите свою почту!",
              pattern: {
                value: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/gm,
                message: "Введите почту правильно!"
              }
            })}
          />
          <span className="form__error">
            {errors?.email && (
              <span>{errors?.email?.message || "Ошибка!"}</span>
            )}
          </span>
        </label>
        <label className="form__label">
          <textarea
            name="message"
            id="message"
            placeholder="Сообщение..."
            className="form__input form__input--big"
            {...register("message", {
              required: "Введите сообщение!",
            })}
          />
          <span className="form__error">
            {errors?.message && (
              <span>{errors?.message?.message || "Ошибка!"}</span>
            )}
          </span>
        </label>
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
