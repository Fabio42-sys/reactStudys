import "./App.css";
import CreateUser from "./components/create-user";
import SearchUser from "./components/search-user";
import DeleteUser from "./components/delete-users";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState("");

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleDelete = (id) => {
    setUsuarios((prevUsuarios) => prevUsuarios.filter((user) => user.id !== id));
  };


  return (
    <>
      <h1> Crie seu Usuario </h1>
      <CreateUser setUsers={setUsuarios} />
      <div className="holder">
        <div className="search-area">
          <SearchUser setFiltro={setFiltro} />
        </div>

        <div className="users">
          {usuariosFiltrados.map((user, index) => (
            <div key={index} id={user.id} className="user-card">
              <p>
                <span> Nome: </span> {user.nome}
                <FaUser />
              </p>
              <p>
                <span> Email: </span> {user.email}
                <MdEmail />
              </p>
              <DeleteUser userId={user.id} onDelete={handleDelete} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
