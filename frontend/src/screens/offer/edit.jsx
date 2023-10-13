// import React , { createContext, useContext, useState }from 'react'
// const ModalContext = createContext();
// export function useModal() {
//   return useContext(ModalContext);
// }
// const edit = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   return (
//     <div><div className="model_box">
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Modifier un offre </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//           <div className="form-floating mb-3">
//               <input type="text" className="form-control" id="id" name="id" placeholder='' value={formData.titre}
//                 hidden />
//               <label htmlFor="titre">Titre</label>
//             </div>
//             <div className="form-floating mb-3">
//               <input type="text" className="form-control" id="titre" name="titre" placeholder='' value={formData.titre}
//                 onChange={handleChange} required />
//               <label htmlFor="titre">Titre</label>
//             </div>
//             <div className="form-floating mb-3">
//               <textarea className="form-control" id="description" name="desc" placeholder='' required value={formData.desc}
//                 onChange={handleChange}></textarea>
//               <label htmlFor="description">Description</label>
//             </div>
//             <div className="form-floating mb-3">
//               <input type='date' className="form-control" id="datepub" name="date_pub" value={formData.date_pub}
//                 onChange={handleChange} required />
//               <label htmlFor="datepub">Date publication</label>
//             </div>
//             <div className="form-floating ">
//               <input type='date' className="form-control" id="dateexp" name="date_exp" value={formData.date_exp}
//                 onChange={handleChange} required />
//               <label htmlFor="dateexp">Date expiration</label>
//             </div>

//             <div className='row justify-content-end align-items-end'>
//               <div className="col d-flex">
//                 <button type="submit" className="btn btn-success mt-4 me-3" >
//                   Ajouter
//                 </button>
//               </div>
//             </div>


//           </form>
//         </Modal.Body>

//         <Modal.Footer>
//           <button type="submit" onClick={handleClose} className="btn btn-secondary mt-4" >
//             Close
//           </button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//     </div>
//   )
// }

// export default edit