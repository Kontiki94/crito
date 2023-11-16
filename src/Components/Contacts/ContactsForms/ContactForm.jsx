import { useFormik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';



const ContactForm = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    
    const alertBox = () => {
        toast.error("Något gick fel!")
    }
    const successBox = () => {
        toast.success("Formulär skickat!")
    }

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },

        validationSchema: yup.object({
            name: yup.string()
                .required("Förnamn måste anges")
                .min(2, "Förnamnet måste bestå av minst 2 tecken"),
            email: yup.string()
                .required("E-post måste anges")
                .matches(emailRegex, "Skriv in en giltig e-post"),
            message: yup.string()
                .required("Du måste lämna ett meddelande")
                .min(10, "Meddelandet måste vara minst 10 bokstäver långt")
                .max(200, "Meddelandet överskrider max tecken")
        }),

        onSubmit: async (values, actions) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            if (result.status === 200) {
                successBox();
                actions.resetForm();
            } else {
                alertBox();
            }
        }
    });

    return (
        <div className="forms">
            <ToastContainer position="bottom-right" />
            <div className="container">
                <form onSubmit={handleSubmit} noValidate >
                    <div className="title">
                        <h2>Leave us a message</h2>
                        <h2> for any information.</h2>
                    </div>
                    <input
                        className={errors.name && touched.name ? "input-error" : ""}
                        id="name"
                        type="text"
                        placeholder="Name*"
                        title="Enter your name"
                        autoComplete="off" tabIndex="1"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name && <p className="error">{errors.name}</p>}
                    <input
                        className={errors.email && touched.email ? "input-error" : ""}
                        type="email"
                        id="email"
                        placeholder="Email*"
                        name="email"
                        title="Enter your email"
                        autoComplete="off" tabIndex="2"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    <textarea
                        className={errors.message && touched.message ? "input-error" : ""}
                        id="message"
                        placeholder="Enter Your Message*"
                        name="message"
                        title="Your message"
                        autoComplete="off"
                        tabIndex="3"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {errors.message && touched.message && <p className="error">{errors.message}</p>}
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="btn-yellow"
                        title="Submit the form"
                        tabIndex="4"
                    >Send Message<i className="fa-solid fa-arrow-up-right"></i></button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
