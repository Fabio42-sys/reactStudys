import { FaSearch } from "react-icons/fa";

function searchUser({setFilter}) {
    return (
        <div className="search-area">
          <input type="text" placeholder="Search for your user" onChange={(e) => setFiltro(e.target.value)} />
          <FaSearch />
        </div>
    );
}

export default searchUser;