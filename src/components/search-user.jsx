function searchUser({setFiltro}) {
    return (
        <div className="search-area">
          <input type="text" placeholder="Search for your user" onChange={(e) => setFiltro(e.target.value)} />
        </div>
    );
}

export default searchUser;