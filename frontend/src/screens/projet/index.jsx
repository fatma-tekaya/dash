import React from 'react'
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { AiOutlineIdcard } from "react-icons/ai";
import { Button, Modal } from 'react-bootstrap';

const index = () => {
  const [detailData, setdetailData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //get all projet
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('api/projet/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);


  return (
    <div className="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="col-12 col-sm-12 offset-sm-1 mt-5 mb-4 text-gred" style={{ color: "teal" }}>
            <h2><b>Liste des projets</b></h2></div>
        </div>
        <div className="row">
          <div className="table-responsive " >
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>NOM </th>
                  <th>PRENOM</th>
                  <th>EMAIL </th>
                  <th>LINKEDIN </th>
                  <th>CV</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.nom}</td>
                    <td>{item.prenom}</td>
                    <td>{item.email}</td>
                    <td>{item.linkedin}</td>
                    <td>{item.cv}</td>
                    <td>
                      <a href="#" className="delete ms-3" title="Delete" data-toggle="tooltip" style={{ color: "bleu" }} onClick={() => {handleShow(); setdetailData(item);console.log(item._id)}}><AiOutlineIdcard size={25} /></a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <!--- Model Box Edit---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Condidat </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className=" mb-3">
                  <label >{detailData.nom}</label>
                </div>
                <div className=" mb-3">
                  <label >{detailData.prenom}</label>
                </div>
                <div className=" mb-3">
                  <label >{detailData.email}</label>
                </div>
                
                <div className=" mb-3">
                  <label >{detailData.linkedin}</label>
                </div>
                <div className=" mb-3">
                  <label >{detailData.cv}</label>
                </div>
                
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
            </Modal.Footer>
          </Modal>

          {/* Model Box add Finsihs */}
        </div>

      </div>
    </div >

  )
}

export default index