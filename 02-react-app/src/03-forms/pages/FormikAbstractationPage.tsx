import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import "../styles/styles.css";

export const FormikAbstractationPage = () => {
  return (
    <div>
      <h1>Formik Abstractions Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: "",
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("No tiene un formato valido")
            .max(255)
            .required("Email es requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta Opción no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik: any) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Fernando"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Herrera"
            />
            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="test@gmail.com"
              type="email"
            />

            <MySelect name="jobType" as="select" label="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
