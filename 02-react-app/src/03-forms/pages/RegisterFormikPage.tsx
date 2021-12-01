import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values: any) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .min(2)
            .required("Requerido"),
          email: Yup.string()
            .email("No tiene un formato valido")
            .max(255)
            .required("Email es requerido"),
          password1: Yup.string()
            .required("No password provided.")
            .min(6, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
          password2: Yup.string().oneOf(
            [Yup.ref("password1"), null],
            "Passwords must match"
          ),
        })}
      >
        {({ handleReset }: any) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Fernando"
            />
            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="test@gmail.com"
            />
            <MyTextInput
              label="Password"
              name="password1"
              placeholder="**********"
              type="password"
            />
            <MyTextInput
              label="Password"
              name="password2"
              placeholder="**********"
              type="password"
            />

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Clear Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
