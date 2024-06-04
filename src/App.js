import { useState } from "react";
import Card from "./components/card";
import Container from "./components/container";
import UserForm from "./components/userForm";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  console.log(usuarios);

  return (
    <Container>
      <Card>
        <UserForm submit={submit} />
      </Card>
      <Card>
        <ul>
          {usuarios.map((x) => (
            <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>
          ))}
        </ul>
      </Card>
    </Container>
  );
}

export default App;
