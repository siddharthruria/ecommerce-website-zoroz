import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { token, logout, getCookie } = useContext(UserContext);
  const categories = ["jordan", "hoodies", "corset", "apple", "skin"];

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand">
            <b>ecommerce-zoroz</b>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{ marginLeft: "1.2vw" }}
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  home
                </Link>
              </li>
              {token && (
                <div className="categories">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/products/category/${category}`}
                      style={{
                        marginInline: "15px",
                        marginRight: "15px",
                        // display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </ul>
            <div
              className="navbar-buttons"
              style={{ display: "flex", marginRight: "10%" }}
            ></div>
            {!getCookie("token") ? (
              <form className="d-flex">
                <Link
                  to="/login"
                  style={{ marginRight: "0.7vw", textDecoration: "none" }}
                  type="button"
                  className="buttons btn btn-primary"
                >
                  login
                </Link>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none" }}
                  type="button"
                  className="buttons btn btn-primary"
                >
                  signup
                </Link>
              </form>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none" }}
                type="button"
                className="buttons btn btn-primary"
                onClick={() => {
                  logout();
                }}
              >
                logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
