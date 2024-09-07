import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Display from './Display';
import axios from 'axios';
function AddUser() {
  const [productName, setproductName] = useState(null);
  const [weight, setweight] = useState(null);
  const [energy, setenergy] = useState(null);
  const [protine, setprotine] = useState(null);
  const [carbohydrate, setCarbohydrate] = useState(null)
  const [fat, setfat] = useState(null);

  const token = "b1725623305917ted360289734es";


  
 

  const Submit = async () => {
    try {
      const responce = await axios.post(
        "https://service.apikeeda.com/api/v1/nutri-food",
        {
          productName: productName,
          weight: weight,
          energy: energy,
          protine: protine,
          carbohydrate: carbohydrate,
          fat: fat,
        },
        {
          headers: {
            "x-apikeeda-key": token,
          },
        },
      );
       console.log(responce);
      
      if (responce.data.status == "Success"){
        setenergy('')
        setproductName('')
        setCarbohydrate('')
        setprotine('')
        setfat('')
        setweight('')
        
      }
    } catch (error) {
      console.log('error', error);
    }

  }
  
  return (
    <>
      <Display></Display>
      <div className="from-grup col-6">
        <Form>
          <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
            <Form.Label>productName</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter productName "
              name="productName"
              value={productName}
              onChange={(e) => setproductName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
            <Form.Label>weight</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter weight"
              name="weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
            <Form.Label>energy</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter energy"
              name="energy"
              value={energy}
              onChange={(e) => setenergy(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
            <Form.Label>protine</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter protine"
              name="protine"
              value={protine}
              onChange={(e) => setprotine(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
            <Form.Label>carbohydrate</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter carbohydrate"
              name="carbohydrate"
              value={carbohydrate}
              onChange={(e) => setCarbohydrate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
            <Form.Label>fat</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter fat"
              name="fat"
              value={fat}
              onChange={(e) => setfat(e.target.value)}
            />
          </Form.Group>

         
            <Button variant="primary" onClick={() => Submit()}>
              Submit
            </Button>
          
        </Form>
      </div>
    </>
  );
}

export default AddUser