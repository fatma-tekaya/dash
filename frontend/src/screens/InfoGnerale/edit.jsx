import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useUpdateMutation } from "../../slices/InfoApiSlice";
import { toast } from "react-toastify";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

const Edit = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [titre, settitre] = useState("");
  const [description, setdescription] = useState("");
  const [adresse, setadresse] = useState("");
  const [email, setemail] = useState("");
  const [numtel, setnumtel] = useState("");
  const [facebook, setfacebook] = useState("");
  // const [youtube, setyoutube] = useState("");
  // const [instgram, setinstgram] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [update, { isLoading }] = useUpdateMutation();
  const navigate = useNavigate();
  const [id, setid] = useState('');
  const [show, setShow] = useState(false);
  const location = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      axios.get('api/info/get').then(response => {
        const data = response.data;
        settitre(data[0].titre);
        setdescription(data[0].description);
        setadresse(data[0].adresse);
        setemail(data[0].email);
        setnumtel(data[0].numtel);
        setlinkedin(data[0].linkedin);
        setfacebook(data[0].facebook);
        setid(data[0]._id);
        setData(data[0]);
        //  console.log(data[0]);
      })
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  }, []);


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(id);
      const response = await axios.put(`/api/info/${id}`, data);

      //toast.success("Information modifiée avec succès.");
      setShow(true)

    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Box m="2% 5% 0 10%" height="100vh"

    >
      <Header
        title="Modifier Informations générales"
        subtitle="Modifier information générale"
      />
      {/* alert */}
      <Alert show={show} variant="success">
        Informations modifier avec succès!
        <button onClick={() => setShow(false)} className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </Alert>
      <form onSubmit={handleFormSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            type="text"
            label="Titre"
            onChange={(e) => settitre(e.target.value)}
            value={titre}
            name="titre"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            multiline
            type="text"
            label="Description"
            onChange={(e) => setdescription(e.target.value)}
            value={description}
            name="description"
            rows={5}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            name="email"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Contact Number"
            onChange={(e) => setnumtel(e.target.value)}
            value={numtel}
            name="numtel"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Address 1"
            onChange={(e) => setadresse(e.target.value)}
            value={adresse}
            name="address"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Facebook link"
            onChange={(e) => setfacebook(e.target.value)}
            value={facebook}
            name="facebook"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Linkedin link"
            onChange={(e) => setlinkedin(e.target.value)}
            value={linkedin}
            name="linkedin"
            sx={{ gridColumn: "span 2" }}
          />
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="info" variant="contained">
            Modifier
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Edit;
