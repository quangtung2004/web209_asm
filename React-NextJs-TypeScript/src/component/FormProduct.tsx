import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { ProductForm } from "src/type/Product";
import { InputText } from "./element/InputText";

type FormProductProps = {
  onSubmit: (values: ProductForm) => void;
  initialValues?: any;
};
function FormProduct({ onSubmit, initialValues }: FormProductProps) {
  const validate = (values: ProductForm) => {
    const { title, image, category, price } = values;
    const errors: ValidationErrors = {};
    if (!title) errors.title = "Cần nhập title";
    if (title && title.length < 6) errors.title = "Tối thiểu 6 kí tự";
    if (!image) errors.image = "Vui lòng nhập image";
    if (!category) errors.category = "Cần nhập danh mục";
    if (!price) errors.price = "Cần nhập giá";
    return errors;
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
        render={({ values }) => {
          return (
            <Stack>
              <Field
                name="title"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label={"Title"}
                    messageError={meta.touched && meta.error}
                  />
                )}
              />
              <Field
                name="image"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label={"Image"}
                    messageError={meta.touched && meta.error}
                  />
                )}
              />
              <Field<string>
                name="description"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label={"Description"}
                    messageError={meta.touched && meta.error}
                  />
                )}
              />
              <Field<number>
                name="price"
                render={({ input, meta }) => (
                  <InputText
                    input={input}
                    label={"Price"}
                    messageError={meta.touched && meta.error}
                    type="number"
                  />
                )}
              />
              <Field<string>
                name="isShow"
                type="checkbox"
                render={({ input }) => {
                  return (
                    <FormControlLabel
                      control={<Checkbox {...input} />}
                      label="Show Product"
                    />
                  );
                }}
              />
              <Field<string>
                name="category"
                render={({ input, meta }) => {
                  return (
                    <FormControl fullWidth>
                      <InputLabel>Category</InputLabel>
                      <Select label="Category" {...input} error>
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value={"6686775f00cebda718031d15"}>
                          Quần áo
                        </MenuItem>
                        <MenuItem value={"6686777300cebda718031d17"}>
                          Giày dép
                        </MenuItem>
                        <MenuItem value={"6686777f00cebda718031d19"}>
                          Đồ ăn
                        </MenuItem>
                      </Select>
                      {meta.touched && meta.error && (
                        <FormHelperText>{meta.error}</FormHelperText>
                      )}
                    </FormControl>
                  );
                }}
              />

              <Button type="submit" onClick={() => onSubmit(values)}>
                Submit
              </Button>
            </Stack>
          );
        }}
      />
    </>
  );
}
export default FormProduct;
