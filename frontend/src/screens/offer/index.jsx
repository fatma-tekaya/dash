import React from 'react'
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";
const index = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [editshow, seteditShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => seteditShow(false);
  const handleShow1 = () => setShow(true);
  const handleShow2 = () => seteditShow(true);


  //get all offre
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('api/offer/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  //add offre
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    datepub: '',
    dateexp: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('api/offer/', formData);
      navigate('/offers');
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    }
  };

  //edit
  const [editData, seteditData] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);
  const handleUpdate = (id) => {
    try {
      console.log(id);
      axios.put(`/api/offer/${id}`, editData)
        .then(() => {
          setIsUpdated(true);
        });
      setShowAlert(true);
      console.log("offer updated");
    } catch (error) {
      console.error('Erreur lors de la mise à jour :', error);
    };
  };

  //delete

  const [showAlert, setShowAlert] = useState(false);
  const handleDelete = (id) => {
    try {

      const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cet offre ?");
      if (isConfirmed) {
        // Supprimer l'élément en faisant une requête DELETE
        axios.delete(`api/offer/${id}`).then((response) => {
          // Actualisez les données après la suppression
          setData(response.data.filter(item => item.id !== id));
        });
        window.location.reload();
        setShowAlert(true);
      }
    } catch (error) {
      console.error(error);
    }

  };
  

  return (
    <div className="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="col-12 col-sm-12 offset-sm-1 mt-5 mb-4 text-gred" style={{ color: "teal" }}>
            <h2><b>Liste des offers</b></h2></div>
        </div>
        <div className='row justify-content-end align-items-end'>
          <div className="col-sm-3 offset-sm-1  mb-4 text-gred">
            <Button variant="primary" onClick={handleShow1}>
              Ajouter un nouveau offre
            </Button>
          </div>
        </div>
        {/* alert */}
        <Alert show={showAlert} variant="success">
          Cette action a été fait avec succès
          <button onClick={() => setShowAlert(false)} className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Alert>
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
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.titre}</td>
                    <td>{item.desc}</td>
                    <td>{item.date_pub}</td>
                    <td>{item.date_exp}</td>
                    <td>
                      <a href="#" className="edit me-3" title="Edit" data-toggle="tooltip" onClick={() => { handleShow2(); seteditData(item) }}><AiOutlineEdit size={25} /></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }} onClick={() => handleDelete(item._id)}><AiOutlineDelete size={25} /></a>
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
            show={editshow}
            onHide={handleClose2}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modifier un offre </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={() => { handleUpdate(editData._id) }

              }>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="titre" name="titre" placeholder='' value={editData.titre}
                    onChange={(e) => seteditData({ ...editData, titre: e.target.value })} />
                  <label htmlFor="titre">Titre</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" id="description" name="desc" placeholder='' required value={editData.desc}
                    onChange={(e) => seteditData({ ...editData, desc: e.target.value })}></textarea>
                  <label htmlFor="description">Description</label>
                </div>
                <div className="form-floating mb-3">
                  <input type='date' className="form-control" id="datepub" name="date_pub" value={editData.date_pub}
                    onChange={(e) => seteditData({ ...editData, date_pub: e.target.value })} />
                  <label htmlFor="datepub">Date publication</label>
                </div>
                <div className="form-floating ">
                  <input type='date' className="form-control" id="dateexp" name="date_exp" value={editData.date_exp}
                    onChange={(e) => seteditData({ ...editData, date_exp: e.target.value })} />
                  <label htmlFor="dateexp">Date expiration</label>
                </div>

                <div className='row justify-content-end align-items-end'>
                  <div className="col d-flex">
                    <button type="submit" className="btn btn-success mt-4 me-3" >
                      modifier
                    </button>
                  </div>
                </div>


              </form>
            </Modal.Body>

            <Modal.Footer>
              <button type="submit" onClick={handleClose2} className="btn btn-secondary mt-4" >
                Close
              </button>
            </Modal.Footer>
          </Modal>

          {/* Model Box add Finsihs */}
        </div>
        {/* <!--- Model Box Add---> */}
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
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="titre" name="titre" placeholder='' value={formData.titre}
                    onChange={handleChange} required />
                  <label htmlFor="titre">Titre</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" id="description" name="desc" placeholder='' required value={formData.desc}
                    onChange={handleChange}></textarea>
                  <label htmlFor="description">Description</label>
                </div>
                <div className="form-floating mb-3">
                  <input type='date' className="form-control" id="datepub" name="date_pub" value={formData.date_pub}
                    onChange={handleChange} required />
                  <label htmlFor="datepub">Date publication</label>
                </div>
                <div className="form-floating ">
                  <input type='date' className="form-control" id="dateexp" name="date_exp" value={formData.date_exp}
                    onChange={handleChange} required />
                  <label htmlFor="dateexp">Date expiration</label>
                </div>

                <div className='row justify-content-end align-items-end'>
                  <div className="col d-flex">
                    <button type="submit" className="btn btn-success mt-4 me-3" >
                      Ajouter
                    </button>
                  </div>
                </div>


              </form>
            </Modal.Body>

            <Modal.Footer>
              <button type="submit" onClick={handleClose} className="btn btn-secondary mt-4" >
                Close
              </button>
            </Modal.Footer>
          </Modal>

          {/* Model Box Add Finsihs */}
        </div>
      </div>
    </div >

  )
}

export default index