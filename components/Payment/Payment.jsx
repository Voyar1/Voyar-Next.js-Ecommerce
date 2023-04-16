import { ErrorMessage, Field } from "formik";
import styles from "./payment.module.css";
import { Formik } from "formik";
import * as yup from "yup";

const Payment = ({ handleFormSubmit, handleStepBack, confirm }) => {
  return (
    <div className={styles.shipping}>
      {/* BILLING FORM */}
      <div>
        <p>Contact Info</p>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={paymentSchema}
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
              <div className={styles.adressForm}>
                <div className={`${styles.firstName}`}>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    className={`${
                      errors.email && touched.email ? styles.inputError : ""
                    }`}
                  />
                  {errors.email && touched.email && (
                    <span className={styles.error}>{errors.email}</span>
                  )}
                </div>

                <div className={styles.lastName}>
                  <Field
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phoneNumber}
                    className={`${
                      errors.phoneNumber && touched.phoneNumber
                        ? styles.inputError
                        : ""
                    }`}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <span className={styles.error}>{errors.phoneNumber}</span>
                  )}
                </div>
              </div>
              <div className={styles.buttonsContainer}>
                {!confirm && (
                  <button
                    className={styles.nextButton}
                    onClick={() => handleStepBack()}
                  >
                    Back
                  </button>
                )}
                {!confirm && (
                  <button type="submit" className={styles.nextButton}>
                    Next
                  </button>
                )}
                {confirm && (
                  <button type="submit" className={styles.nextButton}>
                    Confirm
                  </button>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const initialValues = {
  email: "",
  phoneNumber: "",
};

const paymentSchema = yup.object().shape({
  email: yup.string().required("required"),
  phoneNumber: yup.string().required("required"),
});

export default Payment;
