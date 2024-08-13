import * as Yup from "yup";

const initialValues = {
  name: "",
  position: "",
  department: "",
  evaluation: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  position: Yup.string().required("Required"),
  department: Yup.string().required("Required"),
  evaluation: Yup.string().required("Required"),
});

export { initialValues, validationSchema };
