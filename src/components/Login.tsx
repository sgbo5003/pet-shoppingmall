import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  ButtonProps,
  Container,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AxiosError } from "axios";
import { ErrorDto } from "../api/dto";
import { api } from "../api/index.ts";
import { LoginRequest, LoginResponse } from "../api/dto/auth";
import useUserStore from "../stores/useUserStore.ts";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("올바른 이메일 형식이 아닙니다")
    .min(3, "최소 3글자 이상이여야 합니다.")
    .max(50, "최대 50글자 이하이여야 합니다.")
    .required("이메일은 필수 입력 항목입니다."),
  password: Yup.string()
    .min(8, "최소 8글자 이상이여야 합니다.")
    .max(20, "최대 20글자 이하이여야 합니다.")
    .required("비밀번호는 필수 입력 항목입니다."),
});

const initialValues = {
  email: "", // test5@test.com
  password: "", // 1111
};

const defaultTheme = createTheme();

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: grey[900],
  "&:hover": {
    backgroundColor: grey[800],
  },
}));

const Login = () => {
  const { setUserInfo } = useUserStore();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      console.log("values123", values);
      try {
        setSubmitting(true);
        const obj: LoginRequest = {
          email: values.email,
          password: values.password,
        };
        const response = await api.post<LoginResponse>("/auth/login", obj);
        // console.log("response", response);
        await setUserInfo(response.data);
        await navigate("/");
      } catch (e) {
        const error = e as AxiosError<ErrorDto>;
        setStatus(error.response?.data.errorMessage);
        setSubmitting(false);
      }
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h2" variant="h5" className="w-full">
            로그인
          </Typography>
          <hr className="h-[1px] bg-[#f0f0f0] w-full mt-10" />
          <form noValidate onSubmit={formik.handleSubmit} className="mt-10">
            <TextField
              {...formik.getFieldProps("email")}
              margin="dense"
              required
              fullWidth
              id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              autoFocus
              style={{ marginTop: "0" }}
              error={
                formik.touched.email &&
                (formik.errors.email === "올바른 이메일 형식이 아닙니다" ||
                  formik.errors.email === "최소 3글자 이상이여야 합니다." ||
                  formik.errors.email === "최대 50글자 이하이여야 합니다." ||
                  formik.errors.email === "이메일은 필수 입력 항목입니다.")
              }
              helperText={formik.errors.email}
            />
            <TextField
              {...formik.getFieldProps("password")}
              margin="dense"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              error={
                formik.touched.password &&
                (formik.errors.password === "최소 8글자 이상이여야 합니다." ||
                  formik.errors.password === "최대 20글자 이하이여야 합니다." ||
                  formik.errors.password === "비밀번호는 필수 입력 항목입니다.")
              }
              helperText={formik.errors.password}
            />
            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2, pt: 2, pb: 2 }}
              size="large"
            >
              로그인
            </ColorButton>
            <Grid container>
              <Grid item xs>
                <Link to="#">비밀번호 찾기</Link>
              </Grid>
              <Grid item>
                <Link to="/join">회원가입</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
