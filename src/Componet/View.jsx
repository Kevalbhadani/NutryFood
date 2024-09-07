import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Display from "./Display";
import { Button, Modal } from "react-bootstrap";

function View() {
  const token = "b1725623305917ted360289734es";

  const [productName, setproductName] = useState(null);
  const [weight, setweight] = useState(null);
  const [energy, setenergy] = useState(null);
  const [protine, setprotine] = useState(null);
  const [carbohydrate, setCarbohydrate] = useState(null);
  console.log('carbohydrate', carbohydrate)
  const [fat, setfat] = useState(null);
  
  const [data, setdata] = useState(null);
  const [Id, setId] = useState(null);
  const [show, setShow] = useState(false);

  // const handleClose = () => 
  // const handleShow = () => 

  const Getdata = async () => {
    try {
      const responce = await axios.get(
        "https://service.apikeeda.com/api/v1/nutri-food",

        {
          headers: {
            "x-apikeeda-key": token,
          },
        }
      );
      setdata(responce.data.data);
      console.log(responce.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const Delete = async (id) => {
    console.log("id", id?._id);
    try {
      const responce = await axios.delete(
        `https://service.apikeeda.com/api/v1/nutri-food/${id?._id}`,
        {
          headers: {
            "x-apikeeda-key": token,
          },
        }
      );
      Getdata();
    } catch (error) {
      console.log("error", error);
    }
  };
  const Update = async (e) => {
                e.preventDefault();
                  
    try {
      const response = await axios.patch(
        `https://service.apikeeda.com/api/v1/nutri-food/${Id}`,
        {
          productName,
          weight,
          energy,
          protine,
          carbohydrate,
          fat,
        },
        {
          headers: {
            "x-apikeeda-key": token,
          },
        }
      );
      console.log(response.data.data);
      Getdata();
     setShow(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleEdit = (chang) => {
    console.log('chang', chang)
    setShow(true);
    setproductName(chang.productName);
    setweight(chang.weight);
    setenergy(chang.energy);
    setprotine(chang.protine);
    setCarbohydrate(chang.carbohydrate);
    setfat(chang.fat);
    setId(chang._id);
    // handleShow();
  };

  useEffect(() => {
    Getdata();
  }, []);
  return (
    <>
      <Display></Display>
      <div className="Show-case">
        {data == null
          ? "loding..."
          : data.map((v, i) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>productName:={v.productName}</Card.Title>
                    <Card.Title>weight:={v.weight}</Card.Title>
                    <Card.Title>energy:={v.energy}</Card.Title>
                    <Card.Title>protine:={v.protine}</Card.Title>
                    <Card.Title>carbohydrate:={v.carbohydrate}</Card.Title>
                    <Card.Title>fat:={v.fat}</Card.Title>

                    <Button
                      variant="danger"
                      onClick={() => Delete(v)}
                      className="me-2 "
                    >
                      delete
                    </Button>

                    <Button variant="info" onClick={() => handleEdit(v)}>
                      Edit
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
      </div>

      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={Update}>
            <div className="form-group">
              <label>productName</label>
              <input
                type="text"
                className="form-control"
                name="productName"
                value={productName}
                onChange={(e) => setproductName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>weight</label>
              <input
                type="text"
                className="form-control"
                name="weight"
                value={weight}
                onChange={(e) => setweight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>energy</label>
              <input
                type="text"
                className="form-control"
                name="energy"
                value={energy}
                onChange={(e) => setenergy(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>protine</label>
              <input
                type="text"
                className="form-control"
                name="protine"
                value={protine}
                onChange={(e) => setprotine(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>carbohydrate</label>
              <input
                type="text"
                className="form-control"
                name="carbohydrate"
                value={carbohydrate}
                onChange={(e) => setCarbohydrate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>fat</label>
              <input
                type="text"
                className="form-control"
                name="fat"
                value={fat}
                onChange={(e) => setfat(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              className="mt-2 "
              onClick={Update}
            >
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default View;
