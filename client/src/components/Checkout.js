import React from 'react';
import Form from 'react-bootstrap/Form';
import  '../Styles/Checkout.css';
import {Row, Col} from 'react-bootstrap';
import checkbox_icon from "../assets/checkbox_icon.svg"


export default function Checkout() {
    return (
        <div>
            <>
            <div className="navForm">
                <h2>Formulario de Reserva</h2>
                <p className="continuar">Continuar comprando</p>
            </div>
            </>
            <div className="formRegister">
                <Form >
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm="5">
                            <Form.Control type="input" placeholder="Nombre*" />
                                </Col>
                            <Col sm="5">
                                    <Form.Control type="input" placeholder="Apellido*" />
                                </Col>
                            </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm="10">
                    <Form.Control type="input" placeholder="Dirección*" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Col sm="5">
            <Form.Control type="input" placeholder="Nombre*" />
                </Col>
                <Col sm="5">
            <Form.Control type="input" placeholder="Apellido*" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm="10">
                <Form.Control type="input" placeholder="Dirección*" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3"  >
            <Col sm="10">
                <Form.Select htmlFor="disabledTextInput" placeholder="Fecha*" >
                <option></option>
                </Form.Select>
                </Col>
                </Form.Group>
  
        </Form>
        
         
     
    <div className='shoppingcart'>
    <h2>Experiencia Reservada</h2>
    <p>250€</p>
    <p>Paseo en Bicicleta por el Montseny</p>
<button className="reservabtn">Reservar</button>
<h3>Garantías econotravel</h3>
<ul className='checkbox'>
    <li><img src={checkbox_icon} />99% de clientes satisfechos</li>
    <li><img src={checkbox_icon} />Colaboradores de calidad</li>
    <li><img src={checkbox_icon} />Pago 100% seguro</li>
    </ul>
  </div>
</div>

</div>


         );
  }