import { useLocation } from "react-router-dom";

function Placeholder() {
  const location = useLocation();

  return (
    <section>
      <h1>Módulo en preparación</h1>
      <p>
        Esta sección de UMT-ERP se desarrollará cuando corresponda.
      </p>
      <p>
        Ruta actual: <strong>{location.pathname}</strong>
      </p>
    </section>
  );
}

export default Placeholder;
