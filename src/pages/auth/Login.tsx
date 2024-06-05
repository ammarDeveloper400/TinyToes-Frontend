import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Paper,
  Typography,
  Grid2,
  Avatar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/material/styles";
import AuthPageCopyright from "../../components/footer/AuthPageCopyright";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, UserLogin } from "../../utils/schemas/authScehma";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../components/inputs/FormInput";
import { login } from "../../store/api/auth.api";

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
export default function Login() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserLogin>({ resolver: zodResolver(LoginSchema) });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<UserLogin> = async (data) => {
    try {
      const response = await login(data);
      if (response?.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ width: "100%", mt: 1 }}
            >
              <FormInput
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email"
                name="email"
                autoFocus
                control={control}
                fieldError={errors.email}
              />
              <FormInput
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                control={control}
                fieldError={errors.password}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    const isChecked = target.checked ? true : false;
                    setValue("remember", isChecked);
                  }}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Box>
                <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
              </Box>
              <Box sx={{ mt: 5 }}>
                <AuthPageCopyright />
              </Box>
            </Box>
          </Item>
        </Grid2>
      </Grid2>
    </Box>
  );
}
