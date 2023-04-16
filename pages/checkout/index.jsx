import { useSelector } from "react-redux";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Payment from "@/components/Payment/Payment";
import Shipping from "@/components/shipping/Shipping";
import styles from "./checkout.module.css";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);
  };

  async function makePayment(values) {}

  return (
    <div className={styles.checkout}>
      <div className={styles.stepper}>
        <span className={`${activeStep === 0 ? styles.activeStep : ""}`}>
          1. Billing
        </span>

        <span className={`${activeStep === 1 ? styles.activeStep : ""}`}>
          2. Payment
        </span>
      </div>
      <div>
        {activeStep === 0 && <Shipping />}

        {/* <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              <div>
                {!isFirstStep && (
                  <button onClick={() => setActiveStep(activeStep - 1)}>
                    Back
                  </button>
                )}
                <button type="submit">
                  {!isSecondStep ? "Next" : "Place Order"}
                </button>
              </div>
            </form>
          )}
        </Formik> */}
      </div>
    </div>
  );
};

// const initialValues = {
//   billingAddress: {
//     firstName: "",
//     lastName: "",
//     country: "",
//     street1: "",
//     street2: "",
//     city: "",
//     state: "",
//     zipCode: "",
//   },
//   email: "",
//   phoneNumber: "",
// };

const billingSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  country: yup.string().required("required"),
  street1: yup.string().required("required"),
  street2: yup.string(),
  city: yup.string().required("required"),
  state: yup.string().required("required"),
  zipCode: yup.string().required("required"),
});

const paymentSchema = yup.object().shape({
  email: yup.string().required("required"),
  phoneNumber: yup.string().required("required"),
});

export default Checkout;
