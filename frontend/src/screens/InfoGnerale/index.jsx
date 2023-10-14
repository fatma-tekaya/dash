import React from 'react'
import {
  Box,
  Button,
  TextField,
  
  Typography,
  
  Alert,
} from "@mui/material";
import { tokens } from "../../theme";


const index = () => {
  // const isNonMobile = useMediaQuery("(min-width:600px)");
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const location = useLocation();

  // const isNonMobile = useMediaQuery("(min-width:600px)");
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  //const data = params.get("data");
  // const [titre, settitre] = useState();
  // const [description, setdescription] = useState();
  // const [adresse, setadresse] = useState();
  // const [facebook, setfacebook] = useState();
  // const [linkedin, setlinkedin] = useState();
  // const [twiter, settwiter] = useState();
  // const [numtel, setnumtel] = useState();
  // const [email, setemail] = useState();
  
  // const [err, seterr] = useState(null);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const [update, { isLoading }] = useUpdateMutation();

  // const { siteInfo } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   axios.get('api/info/get')
  //     .then((response) => {
  //       // Traitez les données reçues ici (par exemple, stockez-les dans l'état local)
  //       const data = response.data;
  //       // Utilisez setState ou useState pour mettre à jour les données dans le composant
  //       setFormData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Erreur lors de la récupération des données :', error);
  //     });
  // }, [data]);
  // const onSubmit = async (e, id) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.put(`/api/info/${id}`, editData);

  //     setData((prevData) => {
  //       return prevData.map((item) => {
  //         if (item._id === id) {
  //           return {
  //             _id: editData._id,
  //             titre: editData.titre,
  //             desc: editData.desc,
  //             date_pub: editData.date_pub,
  //             date_exp: editData.date_exp
  //           };

  //         } else {
  //           return item;
  //         }
  //       });
  //     });
  //     handleClose2(true)
  //     // setData((prevRows) => prevRows.map((row) => (row._id === id ? updatedData : row)));
  //     setShowAlert(false);
  //     setShowAlertEdit(true);

  //     // if (passwordConfirm != password) {
  //     //   seterr("Passwrd confirm inccorect");
  //     // } else {
  //     //   const res = await update({ name, email, password }).unwrap();
  //     //   dispatch(setCredentials({ ...res }));
  //     //   navigate("/");
  //     // }
  //   } catch (err) {
  //     seterr(err.data.message);
  //   }
  // };
  return (
    <div className='row justify-content-center'> 

      {/* <Box m="2% 5% 0 10%" height="100vh">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          Aliret Corrdonnée
        </Typography>
      </Box>
      <Box>
        <Box justifyContent="center" alignItems="center" sx={{ mb: "25px" }}>
          <Box
            sx={{ borderRadius: "10px", border: "1px solid black" }}
            justifyContent="center"
            alignItems="center"
          >
            {err != null ? (
              <Box sx={{ mb: "14px" }}>
                <Alert severity="error">{err}</Alert>
              </Box>
            ) : (
              ""
            )}

            <form onSubmit={onSubmit}>
              <Box
                padding="15px"
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
                  label="id"
                  hidden
                  // value={_id}
                  name="titre"

                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Titre"
                  required
                  // value={titre}
                  name="titre"
                  sx={{ gridColumn: "span 4" }}
                />

                <TextField
                  required
                  fullWidth
                  type="text"
                  label="Description"
                  // onChange={(e) => setemail(e.target.value)}
                  // value={email}
                  name="desc"
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  required
                  fullWidth
                  type="text"
                  label="Adresse"
                
                  name="adress"
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  required
                  fullWidth
                  type="text"
                  label="Email"
                  
                  name="email"
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  required
                  fullWidth
                  type="text"
                  label="Numéro du téléphone"
                 
                  name="num"
                  sx={{ gridColumn: "span 4" }}
                />
                 <TextField
                  required
                  fullWidth
                  type="text"
                  label="Facebook"
                  
                  name="Facebook"
                  sx={{ gridColumn: "span 4" }}
                />
                  <TextField
                  required
                  fullWidth
                  type="text"
                  label="Linkedin"
                  
                  name="Linkedin"
                  sx={{ gridColumn: "span 4" }}
                />
                  <TextField
                  required
                  fullWidth
                  type="text"
                  label="Twiter"
                 
                  name="Twiter"
                  sx={{ gridColumn: "span 4" }}
                />
                
              
              </Box>
              <Box display="flex" justifyContent="end" padding="15px">
                <Button type="submit" color="info" variant="contained">
                  Modifier
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box> */}
      info
    </div>
  )
}

export default index