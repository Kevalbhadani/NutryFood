import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function Display() {
  return (
    <>
     
        <div className="Nutri-food">
          <div className="top-header">
            <div className="heding">
              <h2>Nutri Food</h2>
            </div>

            <div className="btn">
              <a href="view">
                <Button variant="primary">Viwe</Button>
              </a>

              <a href="add">
                <Button variant="primary">Add</Button>
              </a>
            </div>
          </div>
        </div>
    </>
  );
}

export default Display;
