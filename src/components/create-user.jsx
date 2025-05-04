import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function CreateUser({ setUsers }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleCreate = () => {
    if (!nome || !email) {
      alert("Preencha todos os campos!");
      return;
    }

    const newUser = {
      id: uuidv4(),
      nome,
      email
    }

    setUsers((prev) => [...prev, newUser]);
    setNome("");
    setEmail("");
  };

  return (
    <>
      <form action="#">
        <div className="user-info">
          <input type="text" placeholder="Set the user name" value={nome} onChange={(e) => setNome(e.target.value)} />
          <FaUser />
        </div>
        <div className="user-info">
          <input type="email" placeholder="Set the user email"  value={email} onChange={(e) => setEmail(e.target.value)} />
          <MdEmail />
        </div>
        <button type="button" onClick={handleCreate}>Create user</button>
      </form>
    </>
  );
}

export default CreateUser;