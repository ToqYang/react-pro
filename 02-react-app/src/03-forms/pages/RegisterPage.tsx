import useForm from "../hooks/useForm";
import "../styles/styles.css";

const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    onChange,
    onSubmit,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  return (
    <div>
      <h1>Register</h1>
      <form action="" noValidate onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={name}
          name="name"
          placeholder="Name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          onChange={onChange}
          value={email}
          name="email"
          id="Email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}
        <input
          type="password"
          name="password1"
          id="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
          className={`${password1.trim().length <= 0 && "has-error"}`}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 caracteres</span>
        )}
        <input
          type="password"
          name="password2"
          id="password2"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben ser iguales</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={() => resetForm()}>
          Reset Form
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
