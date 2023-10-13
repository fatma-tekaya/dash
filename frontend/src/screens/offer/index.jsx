import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";
const index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:8000/api/offer/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :',error);
      });
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="col-12 col-sm-12 offset-sm-1 mt-5 mb-4 text-gred" style={{ color: "teal" }}>
            <h2><b>Liste des offers</b></h2></div>
        </div>
        <div className='row justify-content-end align-items-end'>
          <div className="col-sm-3 offset-sm-1  mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Ajouter un nouveau offre
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="table-responsive " >
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>TITRE </th>
                  <th>DESCRIPTION</th>
                  <th>DATE PUBLICATION </th>
                  <th>DATE EXPIRATION </th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.titre}</td>
                    <td>{item.desc}</td>
                    <td>{item.date_pub}</td>
                    <td>{item.date_exp}</td>
                    <td>
                      <a href="#" className="view me-3" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><AiOutlineInfoCircle size={25} /></a>
                      <a href="#" className="edit me-3" title="Edit" data-toggle="tooltip"><AiOutlineEdit size={25} /></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><AiOutlineDelete size={25} /></a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un offre </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form >
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="titre" placeholder='' required />
                  <label for="titre">Titre</label>
                </div>
                <div class="form-floating mb-3">
                  <textarea class="form-control" id="description" placeholder='' required></textarea>
                  <label for="description">Description</label>
                </div>
                <div class="form-floating mb-3">
                  <input type='date' class="form-control" id="datepub" required />
                  <label for="datepub">Date publication</label>
                </div>
                <div class="form-floating ">
                  <input type='date' class="form-control" id="dateexp" required />
                  <label for="dateexp">Date expiration</label>
                </div>



              </form>
            </Modal.Body>

            <Modal.Footer>
              <div className='row justify-content-end align-items-end'>
                <div className="col d-flex">
                  <button type="submit" className="btn btn-success mt-4 me-3" >
                    Ajouter
                  </button>

                  <button type="submit" onClick={handleClose} className="btn btn-secondary mt-4" >
                    Close
                  </button>

                </div>
              </div>

            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>

  )
}

export default index