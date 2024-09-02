import { Button } from "react-bootstrap";

const Navbar = ({ setCurrentView, total }) => {
  const token = false;

  return (
    <div className="barra">
      <div className="d-flex align-items-center justify-content-between w-100">
        {/* Alineamos todos los elementos en una sola línea */}
        <p className="mb-0">Pizzería Mamma Mía!</p>

        <div className="d-inline-flex gap-2">
          <button className="btn-nav" onClick={() => setCurrentView("home")}>
            Home
          </button>

          {token ? (
            <button className="btn-nav">👤 Perfil</button>
          ) : (
            <>
              <button
                className="btn-nav"
                onClick={() => setCurrentView("login")}
              >
                🔐 Login
              </button>
              <button
                className="btn-nav"
                onClick={() => setCurrentView("register")}
              >
                🔐 Register
              </button>
            </>
          )}
        </div>

        <div className="d-flex gap-2 ms-auto">
          <a
            href="#"
            className="btn btn-outline-primary"
            role="button"
            data-bs-toggle="button"
            aria-pressed="true"
            style={{ fontSize: "small", backgroundColor: "#f8f9fa" }}
          >
            🛒 Total: ${total.toLocaleString()}
          </a>
          <Button onClick={() => setCurrentView("cart")}>Pagar</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
