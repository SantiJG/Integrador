import { Button } from "bootstrap";
import ButtonFiltrar from "./ButtonFiltrar";

export function NavPage({ page, setPage, handleSearchUpdate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="d-flex justify-content-between align-items-center">
      <button
        className="btn btn-primary btn-sm "
        style={{ backgroundColor: "#08bd02" }}
        onClick={() => setPage(page - 1)}
      >
        Pagina {page - 1}
      </button>
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={handleSearchUpdate}
          placeholder="Nombre del Personaje..."
        />
      </form>
      <ButtonFiltrar />
      <button
        className="btn btn-primary btn-sm"
        style={{ backgroundColor: "#08bd02" }}
        onClick={() => setPage(page + 1)}
      >
        Pagina {page + 1}
      </button>
    </header>
  );
}
