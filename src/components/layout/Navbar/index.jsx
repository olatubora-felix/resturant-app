import "./navbar.css";
export const Navbar = () => {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Page",
      path: "/page",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Langing",
      path: "#",
    },
  ];

  const auths = [
    {
      name: "Login/Register",
      path: "#",
      style: "brand-right",
    },
    {
      name: "Book Table",
      path: "#",
      style: "brand-left",
    },
  ];
  return (
    <header className="header">
      <nav className="nav container-wrapper">
        <a href="/" className="nav-logo">
          Gerícht
        </a>
        <ul className="nav-items">
          {routes.map((route) => (
            <li key={route.path} className="nav-items__list">
              <a href={route.path} className="navitems__link">
                {route.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="nav-brand">
          {auths.map((auth) => (
            <li
              key={auth.path}
              className={`nav-items__list border-brand ${auth.style}`}
            >
              <a href={auth.path} className="navitems__link">
                {auth.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
