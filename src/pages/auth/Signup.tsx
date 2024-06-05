import {
  Box,
  Button,
  CssBaseline,
  Paper,
  Typography,
  Grid2,
  Avatar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/material/styles";
import AuthPageCopyright from "../../components/footer/AuthPageCopyright";
import FormInput from "../../components/inputs/FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, UserSignup } from "../../utils/schemas/authScehma";
import { signup } from "../../store/api/auth.api";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: "2rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

// Login Component
export default function Signup() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserSignup>({ resolver: zodResolver(SignupSchema) });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<UserSignup> = async (data) => {
    try {
      const response: Response = await signup(data);
      if (response?.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2} columns={24}>
          <Grid2>
            <Item
              elevation={6}
              square
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 4,
              }}
            >
              <Avatar sx={{ margin: 1, backgroundColor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Signup
              </Typography>
              <Grid2 container spacing={2} size={24}>
                <Grid2 size={6}>
                  <FormInput
                    label="First Name"
                    name="firstName"
                    control={control}
                    fieldError={errors.firstName}
                    variant="outlined"
                    margin="normal"
                    autoFocus
                  />
                </Grid2>
                <Grid2 size={6}>
                  <FormInput
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    control={control}
                    fieldError={errors.lastName}
                  />
                </Grid2>
              </Grid2>
              <Box sx={{ width: "100%", mt: 1 }}>
                <FormInput
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="username"
                  label="Email"
                  name="email"
                  autoFocus
                  control={control}
                  fieldError={errors.email}
                />
                <FormInput
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  control={control}
                  fieldError={errors.password}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Signup
                </Button>
                <Box>
                  <Link to="/login">{"Have an account? Signin"}</Link>
                </Box>
                <Box sx={{ mt: 5 }}>
                  <AuthPageCopyright />
                </Box>
              </Box>
            </Item>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
}
