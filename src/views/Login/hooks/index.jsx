import * as Yup from "yup";
import axios from "axios";

const apiUrl = "http://localhost:5000";
const initialValues = { email: "", password: "" };

const handleSubmit = async (values, { setSubmitting }) => {
  console.log("values:", values);

  try {
    const response = await axios.post(apiUrl + "/auth/login", values);
    console.log("Form submitted successfully:", response.data);
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    setSubmitting(false);
  }
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export { handleSubmit, validationSchema, initialValues };
