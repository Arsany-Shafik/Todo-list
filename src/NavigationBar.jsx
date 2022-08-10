import React from "react";
import { Link,} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid mb-3">
        <Link className="navbar-brand" to="/">
          Arsany Todo App
        </Link>
        <div>
          <div className="navbar-nav d-flex flex-row gap-4">
           
            
          </div>
        </div>
      </div>
    </nav>
  );
};