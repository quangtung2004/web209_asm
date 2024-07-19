import { Button, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { MIN_PASSWORD } from "src/const";
import isEmail from "validator/lib/isEmail";

import { User } from "src/type/User";
import { InputText } from "src/component/element/InputText";
import { useFlash } from "src/contexts/Flash";

const Register = () => {
  const nav = useNavigate();
  const { setFlash } = useFlash();
  const validate = (values: User) => {
    const { username, email, password } = values;
    const errors: ValidationErrors = {};
    if (!username) errors.username = "Can nhap username vao";
    if (!email) errors.email = "Can nhap email vao";
    if (email && !isEmail(email)) errors.email = "Chua dung dinh dang email";
    if (!password) errors.password = "Can nhap password vao";
    if (password && password.length < MIN_PASSWORD)
      errors.password = `Can nhap password toi thieu ${MIN_PASSWORD} ky tu`;
    return errors;
  };

  const onSubmit = async (data: User) => {
    try {
      console.log(data);
      await axios.post("/auth/register", data);
      setFlash(true);
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container sx={{ marginTop: 15 }}>
      <Typography variant="h2" textAlign={"center"} mb={2}>
        Register
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ values }) => {
          return (
            <Stack gap={2}>
              <Field
                name="username"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label={"Username"}
                    messageError={meta.touched && meta.error}
                  />
                )}
              />
              <Field
                name="email"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label={"Email"}
                    messageError={meta.touched && meta.error}
                  />
                )}
              />
              <Field
                name="password"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label={"Password"}
                    messageError={meta.touched && meta.error}
                    type="password"
                  />
                )}
              />
              <Button variant="contained" onClick={() => onSubmit(values)}>
                Submit
              </Button>
            </Stack>
          );
        }}
      />
    </Container>
  );
};

export default Register;
