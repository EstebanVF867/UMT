import { NavLink, Outlet } from "react-router-dom";
import "./AppLayout.css";

interface AppLayoutProps {
  onLogout: () => Promise<void>;
  cerrandoSesion: boolean;
  error: string;
}

const menu = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Miembros UMT",
    children: [
      { label: "Músicos", path: "/miembros/musicos" },
      { label: "Alumnos", path: "/miembros/alumnos" },
      { label: "Directores", path: "/miembros/directores" },
    ],
  },
  {
    label: "Profesores",
    children: [
      { label: "Profesores", path: "/profesores" },
    ],
  },
  {
    label: "Cuotas",
    path: "/cuotas",
  },
  {
    label: "RRHH",
    children: [
      { label: "Contratos", path: "/rrhh/contratos" },
      { label: "Nóminas", path: "/rrhh/nominas" },
      { label: "Asistencia", path: "/rrhh/asistencia" },
      { label: "Reparto", path: "/rrhh/reparto" },
    ],
  },
  {
    label: "Contabilidad",
    path: "/contabilidad",
  },
  {
    label: "Bancos y Finanzas",
    path: "/bancos-finanzas",
  },
  {
    label: "Proveedores",
    children: [
      { label: "Facturas Proveedores", path: "/proveedores/facturas" },
      { label: "Pagos", path: "/proveedores/pagos" },
    ],
  },
  {
    label: "Clientes / Contrataciones",
    children: [
      { label: "Facturas Clientes", path: "/clientes/facturas" },
      { label: "Cobros", path: "/clientes/cobros" },
    ],
  },
  {
    label: "Nextcloud",
    path: "/nextcloud",
  },
  {
    label: "Auditoría",
    path: "/auditoria",
  },
  {
    label: "Configuración",
    path: "/configuracion",
  },
];

function AppLayout({
  onLogout,
  cerrandoSesion,
  error,
}: AppLayoutProps) {
  return (
    <div className="erp-layout">
      <aside className="erp-sidebar">
        <div className="erp-sidebar-header">
          <img
            src="/src/assets/logo-umt.png"
            alt="Unión Musical de Tenorio"
            className="erp-sidebar-logo"
          />
          <div>
            <div className="erp-sidebar-title">UMT-ERP</div>
            <div className="erp-sidebar-subtitle">
              Gestión interna
            </div>
          </div>
        </div>

        <nav
          className="erp-navigation"
          aria-label="Navegación principal"
        >
          {menu.map((item) => (
            <div className="erp-menu-group" key={item.label}>
              {item.path ? (
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `erp-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <>
                  <div className="erp-menu-section">
                    {item.label}
                  </div>

                  <div className="erp-menu-children">
                    {item.children?.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `erp-nav-link erp-nav-child ${
                            isActive ? "active" : ""
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        <div className="erp-sidebar-footer">
          <div className="erp-user-label">Administrador</div>

          <button
            type="button"
            className="erp-logout-button"
            onClick={() => void onLogout()}
            disabled={cerrandoSesion}
          >
            {cerrandoSesion
              ? "Cerrando sesión..."
              : "Cerrar sesión"}
          </button>

          {error && (
            <p className="erp-logout-error" role="alert">
              {error}
            </p>
          )}
        </div>
      </aside>

      <div className="erp-main">
        <header className="erp-header">
          <div>
            <div className="erp-header-title">UMT-ERP</div>
            <div className="erp-header-subtitle">
              Unión Musical de Tenorio
            </div>
          </div>
        </header>

        <main className="erp-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
