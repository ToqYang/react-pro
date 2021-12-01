import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components";
import formjson from "../data/custom-data.json";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formjson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Es requerido");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Minimo ${(rule as any).value || 2} carácteres`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("Ingresa un email correcto");
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Forms</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik: any) => (
          <Form>
            {formjson.map(
              ({ type, name, placeholder, label, options = [] }) => {
                if (type === "input" || type === "text" || type === "email") {
                  return (
                    <MyTextInput
                      key={name}
                      label={label}
                      type={type as any}
                      name={name}
                      placeholder={placeholder}
                    />
                  );
                } else if (type === "select") {
                  return (
                    <MySelect key={name} label={label} name={name}>
                      <option value="">Select an option</option>
                      {options?.map(({ id, label }) => (
                        <option key={id} value={id}>
                          {label}
                        </option>
                      ))}
                    </MySelect>
                  );
                }
                return <span>Type: {type} no es soportado</span>;
              }
            )}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
