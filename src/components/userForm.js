import Input from "./input";
import Button from "./button";
import useFormulario from "../hooks/useFormulario";
const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={formulario.name}
        onChange={handleChange}
        name="name"
        label="Nombre"
        placeholder="Nombre"
      />
      <Input
        value={formulario.lastname}
        onChange={handleChange}
        name="lastname"
        label="Apellido"
        placeholder="Apellido"
      />
      <Input
        value={formulario.email}
        onChange={handleChange}
        name="email"
        label="Correo"
        type="email"
        placeholder="Correo"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
