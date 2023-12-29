import { useState } from "react";
import FormDataService from "../../services/formDataService";
import "./contact.css";

const Contact = (props: any) => {
  const [formSend, setFormSend] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    const updatedFormValues = { ...formValues, [name]: value };
    setFormValues(updatedFormValues);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    let error = false;
    if (name === "name") {
      error = value.trim().length < 2;
    } else if (name === "email") {
      error = !/^\S+@\S+\.\S{2,}$/.test(value);
    } else if (name === "subject") {
      error = value.trim().length === 0;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const initForm = () => {
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: formValues.name.trim().length < 2,
      email: !/^\S+@\S+\.\S{2,}$/.test(formValues.email),
      subject: formValues.subject.trim().length === 0,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      try {
        setFormSend(true);
        await FormDataService.sendData(formValues);
        setTimeout(() => {
          setFormSend(false);
          initForm();
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-line" />
      <div className="section-content">
        <h1>{props.language === "en" ? "Contact" : "Kontakt"}</h1>
        <div className="contact_form-container">
          <h2>Contact Form</h2>

          <form onSubmit={handleSubmit}>
            <label> {props.language === "en" ? "Name" : "Jméno"}</label>
            <input
              type="text"
              name="name"
              maxLength={50}
              placeholder={
                props.language === "en" ? "Your Name" : "Tvoje jméno"
              }
              onChange={handleChange}
              value={formValues.name}
              onBlur={handleBlur}
              disabled={formSend ? true : false}
            />
            {errors.name && (
              <span className="error-message">
                {props.language === "en" ? "Invalid name" : "Neplatné jméno"}
              </span>
            )}
            <label>Email</label>
            <input
              type="text"
              name="email"
              maxLength={50}
              placeholder={
                props.language === "en" ? "Your Email" : "Tvůj email"
              }
              value={formValues.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={formSend ? true : false}
            />
            {errors.email && (
              <span className="error-message">
                {props.language === "en" ? "Invalid email" : "Neplatný email"}
              </span>
            )}

            <label>{props.language === "en" ? "Subject" : "Předmět"}</label>
            <input
              type="text"
              name="subject"
              maxLength={50}
              placeholder={props.language === "en" ? "Subject" : "Předmět"}
              value={formValues.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={formSend ? true : false}
            />
            {errors.subject && (
              <span className="error-message">
                {props.language === "en"
                  ? "Invalid subject"
                  : "Neplatný předmět"}
              </span>
            )}
            <label> {props.language === "en" ? "Message" : "Zpráva"}</label>
            <textarea
              name="message"
              rows={7}
              maxLength={1000}
              placeholder={
                props.language === "en" ? "Your Message" : "Tvoje zpráva"
              }
              value={formValues.message}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={formSend ? true : false}
            />
            <div className="submit-btn-container">
              {formSend ? (
                <button
                  disabled
                  className="contact_submit-button"
                  type="submit"
                >
                  {props.language === "en" ? "Thank You" : "Děkuji"}
                </button>
              ) : (
                <button className="contact_submit-button" type="submit">
                  {props.language === "en" ? "Submit" : "Odeslat"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
