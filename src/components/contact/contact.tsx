import { useState } from "react";
import FormDataService from "../../services/formDataService";
import "./contact.css";

const Contact = (props: any) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error);
    if (!hasErrors) {
      FormDataService.sendData(formValues)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
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
            <label>Name</label>
            <input
              type="text"
              name="name"
              maxLength={50}
              placeholder="Your Name"
              onChange={handleChange}
              value={formValues.name}
              onBlur={handleBlur}
            />
            {errors.name && <span className="error-message">Invalid name</span>}
            <label>Email</label>
            <input
              type="text"
              name="email"
              maxLength={50}
              placeholder="Your Email"
              value={formValues.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && (
              <span className="error-message">Invalid email</span>
            )}

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              maxLength={50}
              placeholder="Subject"
              value={formValues.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.subject && (
              <span className="error-message">Invalid subject</span>
            )}
            <label>Message</label>
            <textarea
              name="message"
              rows={7}
              maxLength={1000}
              placeholder="Your Message"
              value={formValues.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="submit-btn-container">
              <button className="contact_submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
