import { useSelector } from "react-redux";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Payment from "@/components/Payment/Payment";
import Shipping from "@/components/shipping/Shipping";
import styles from "./checkout.module.css";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51MxTdQEA6LTS6Hgs7wuXtrY5wuReJMV1eEVtxaSex1nDz7pVXwSOvmw31OV8ja5FLYRYM2BaJId3kf8Wn7dw8W7I00XIpNTcnp"
);

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [confirm, setConfirm] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const isThirdStep = activeStep === 2;

  const handleFormSubmit = async (values, actions) => {
    if (isFirstStep) {
      setActiveStep(activeStep + 1);

      setUserInfo(values);
    }

    if (isSecondStep && !confirm) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        ...values,
      }));
      setConfirm(true);
    }

    if (confirm && isSecondStep) {
      makePayment(userInfo);
      setActiveStep(activeStep + 1);
    }
  };

  const handleStepBack = () => {
    setActiveStep(activeStep - 1);
  };
  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName: [values.firstName, values.lastName].join(""),
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
    };

    const response = await fetch("http://127.0.0.1:1337/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  }

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
        {isFirstStep && <Shipping handleFormSubmit={handleFormSubmit} />}
        {isSecondStep && (
          <Payment
            handleStepBack={handleStepBack}
            handleFormSubmit={handleFormSubmit}
            confirm={confirm}
          />
        )}

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

export default Checkout;
