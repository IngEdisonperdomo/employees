import * as Yup from "yup";
import axios from "axios";

const apiUrl = "http://localhost:5000";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const handleSubmit = async (values) => {
  console.log("values:", values);
  try {
    const response = await axios.post(apiUrl + "/auth/register", values);
    console.log("Registration successful", response.data);
  } catch (error) {
    console.error("Registration failed", error);
  }
};

export { initialValues, validationSchema, handleSubmit };
