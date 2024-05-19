import {
  Box,
  Button,
  ButtonProps,
  Container,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { SignUpRequest } from "../api/dto/auth/index.ts";
import { ErrorDto } from "../api/dto/index.ts";
import { api } from "../api/index.ts";
import SubTitleComponent, { defaultTheme } from "./subtitle/index.tsx";

interface InitialValuesProps {
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
  phoneNumber: string;
}

const initialValues: InitialValuesProps = {
  email: "",
  password: "",
  confirmpassword: "",
  name: "",
  phoneNumber: "",
};

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("올바른 이메일 형식이 아닙니다")
    .min(3, "최소 3글자 이상이여야 합니다.")
    .max(50, "최대 50글자 이하이여야 합니다.")
    .required("필수 입력 항목입니다."),
  password: Yup.string()
    .min(8, "최소 8글자 이상이여야 합니다.")
    .max(20, "최대 20글자 이하이여야 합니다.")
    .required("필수 입력 항목입니다."),
  confirmpassword: Yup.string()
    .required("필수 입력 항목입니다.") // Password confirmation is required
    .when("password", {
      is: (val: string) => val && val.length > 0,
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "비밀번호가 일치하지 않습니다."
      ),
    }),
  name: Yup.string()
    .min(3, "최소 3글자 이상이여야 합니다.") // Minimum 3 symbols
    .max(50, "최대 50글자 이하이여야 합니다.") // Maximum 50 symbols
    .required("필수 입력 항목입니다."), // Name is required
  phoneNumber: Yup.string()
    .max(20, "최대 20글자 이하이여야 합니다.") // Maximum 20 symbols
    .matches(/^[0-9()+-\s]{6,20}$/, "올바르지 않은 형식입니다.") // Invalid format
    .required("필수 입력 항목입니다."), // Phone Number is required
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: grey[900],
  "&:hover": {
    backgroundColor: grey[800],
  },
}));

const Join = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    validateOnBlur: false,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      console.log("values123", values);
      try {
        setSubmitting(true);
        const obj: SignUpRequest = {
          email: values.email,
          password: values.password,
          name: values.name,
          phoneNumber: values.phoneNumber,
        };
        await api.post<SignUpRequest>("/auth/join", obj);
        await navigate("/login");
      } catch (e) {
        const error = e as AxiosError<ErrorDto>;
        setStatus(error.response?.data.errorMessage);
        setSubmitting(false);
      }
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <SubTitleComponent title="JOIN" />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h2" variant="h5" className="w-full">
            회원가입
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
                  formik.errors.email === "필수 입력 항목입니다.")
              }
              helperText={formik.touched.email && formik.errors.email}
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
                  formik.errors.password === "필수 입력 항목입니다.")
              }
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              {...formik.getFieldProps("confirmpassword")}
              margin="dense"
              required
              fullWidth
              name="confirmpassword"
              label="비밀번호 확인"
              type="password"
              id="confirmpassword"
              autoComplete="off"
              error={
                formik.touched.confirmpassword &&
                (formik.errors.confirmpassword === "필수 입력 항목입니다." ||
                  formik.errors.confirmpassword ===
                    "비밀번호가 일치하지 않습니다.")
              }
              helperText={
                formik.touched.confirmpassword && formik.errors.confirmpassword
              }
            />
            <TextField
              {...formik.getFieldProps("name")}
              margin="dense"
              required
              fullWidth
              id="name"
              label="이름"
              name="name"
              error={
                formik.touched.name &&
                (formik.errors.name === "최소 3글자 이상이여야 합니다." ||
                  formik.errors.name === "최대 50글자 이하이여야 합니다." ||
                  formik.errors.name === "필수 입력 항목입니다.")
              }
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              {...formik.getFieldProps("phoneNumber")}
              margin="dense"
              required
              fullWidth
              id="phoneNumber"
              label="전화번호"
              name="phoneNumber"
              error={
                formik.touched.phoneNumber &&
                (formik.errors.phoneNumber ===
                  "최대 20글자 이하이여야 합니다." ||
                  formik.errors.phoneNumber === "올바르지 않은 형식입니다." ||
                  formik.errors.phoneNumber === "필수 입력 항목입니다.")
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Button
                  type="button"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mt: 2,
                    mb: 2,
                    pt: 2,
                    pb: 2,
                    color: "black",
                    borderColor: "gray",
                    ":hover": { borderColor: "black" },
                  }}
                  size="large"
                  onClick={() => navigate("/login")}
                >
                  취소
                </Button>
              </Grid>
              <Grid item xs={6}>
                <ColorButton
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, mb: 2, pt: 2, pb: 2 }}
                  size="large"
                >
                  회원가입
                </ColorButton>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Join;
