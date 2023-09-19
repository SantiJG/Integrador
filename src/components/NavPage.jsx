function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <button
        className="btn btn-primary btn-sm "
        style={{ backgroundColor: "#08bd02" }}
        onClick={() => props.setPage(props.page - 1)}
      >
        Pagina {props.page - 1}
      </button>
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={props.handleSearchUpdate}
          placeholder="Nombre del Personaje..."
        />
      </form>
      <button
        className="btn btn-primary btn-sm"
        style={{ backgroundColor: "#08bd02" }}
        onClick={() => props.setPage(props.page + 1)}
      >
        Pagina {props.page + 1}
      </button>
    </header>
  );
}
export default NavPage