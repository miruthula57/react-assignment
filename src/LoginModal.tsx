import LockIcon from "@mui/icons-material/Lock";
import { Box, Grid, Link, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import ButtonComponent from "./components/ButtonComponent";
import FormikFormInput from "./components/FormikFormHandlers/FormikFormInput";
import Navbar from "./Navbar";

const initialValues = { name: "", email: "" };

const LoginData = [
  { id: 1, name: "Miruthula", email: "miru@g.com" },
  { id: 2, name: "nan", email: "nan@g.com" },
];

const LoginModal = () => {
  const formFieldStyle = { width: "100%" };

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const handleSubmit = async (values: any) => {
    const inputName = values.name.trim();
    const inputEmail = values.email.trim();
    const user = LoginData.find(
      (data) =>
        data.name.trim().toLowerCase() === inputName.toLowerCase() &&
        data.email.trim().toLowerCase() === inputEmail.toLowerCase()
    );

    if (user) {
      toast.success("Login successful!");
      navigate("/CategoryData", {
        state: { isLoggedIn: true },
      });
    } else {
      toast.error("Invalid name or email.");
    }
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form id="LoginForm">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                mb={2}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <LockIcon sx={{ fontSize: 30, color: "#000" }} />
                </Box>
                <Typography variant="h6" sx={{ color: "#000" }}>
                  Sign In
                </Typography>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Field
                    name="name"
                    type="text"
                    label="Name"
                    placeholder="Enter Name"
                    id="name_Field"
                    as={FormikFormInput}
                    size="small"
                    sx={formFieldStyle}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Enter Email"
                    id="Email_Field"
                    as={FormikFormInput}
                    size="small"
                    sx={formFieldStyle}
                  />
                </Grid>
              </Grid>
              <ButtonComponent
                label={"Sign In"}
                id={"SignIn"}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginTop: 2 }}
              />
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
                <Link href="#" variant="body2">
                  Do have an account? Sign Up
                </Link>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default LoginModal;
