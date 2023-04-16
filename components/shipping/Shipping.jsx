import { ErrorMessage, Field } from "formik";
import styles from "./shipping.module.css";
import { Formik } from "formik";
import * as yup from "yup";

const Shipping = ({ handleFormSubmit }) => {
  return (
    <div className={styles.shipping}>
      {/* BILLING FORM */}
      <div>
        <p>Shipping information</p>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={billingSchema}
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
                    name="firstName"
                    placeholder="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    className={`${
                      errors.firstName && touched.firstName
                        ? styles.inputError
                        : ""
                    }`}
                  />
                  {errors.firstName && touched.firstName && (
                    <span className={styles.error}>{errors.firstName}</span>
                  )}
                </div>

                <div className={styles.lastName}>
                  <Field
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    className={`${
                      errors.lastName && touched.lastName
                        ? styles.inputError
                        : ""
                    }`}
                  />
                  {errors.lastName && touched.lastName && (
                    <span className={styles.error}>{errors.lastName}</span>
                  )}
                </div>

                <div className={styles.country}>
                  <Field
                    type="text"
                    placeholder="Country"
                    name="country"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.country}
                    className={`${
                      errors.country && touched.country ? styles.inputError : ""
                    }`}
                  />
                  {errors.country && touched.country && (
                    <span className={styles.error}>{errors.country}</span>
                  )}
                </div>
                <div className={styles.street1}>
                  <Field
                    type="text"
                    placeholder="Street Address"
                    name="street1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.street1}
                    className={`${
                      errors.street1 && touched.street1 ? styles.inputError : ""
                    }`}
                  />
                  {errors.street1 && touched.street1 && (
                    <span className={styles.error}>{errors.street1}</span>
                  )}
                </div>
                <div className={styles.street2}>
                  <Field
                    type="text"
                    placeholder="Street Address 2 (optional)"
                    name="street2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.street2}
                    className={`${
                      errors.street2 && touched.street2 ? styles.inputError : ""
                    }`}
                  />
                  {errors.street2 && touched.street2 && (
                    <span className={styles.error}>{errors.street2}</span>
                  )}
                </div>

                <div className={styles.city}>
                  <Field
                    type="text"
                    placeholder="City"
                    name="city"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.city}
                    className={`${
                      errors.city && touched.city ? styles.inputError : ""
                    }`}
                  />
                  {errors.city && touched.city && (
                    <span className={styles.error}>{errors.city}</span>
                  )}
                </div>
                <div className={styles.state}>
                  <Field
                    type="text"
                    placeholder="State"
                    name="state"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.state}
                    className={`${
                      errors.state && touched.state ? styles.inputError : ""
                    }`}
                  />
                  {errors.state && touched.state && (
                    <span className={styles.error}>{errors.state}</span>
                  )}
                </div>
                <div className={styles.zipCode}>
                  <Field
                    type="text"
                    placeholder="Zip Code"
                    name="zipCode"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.zipCode}
                    className={`${
                      errors.zipCode && touched.zipCode ? styles.inputError : ""
                    }`}
                  />
                  {errors.zipCode && touched.zipCode && (
                    <span className={styles.error}>{errors.zipCode}</span>
                  )}
                </div>
              </div>
              <button type="submit" className={styles.nextButton}>
                Next
              </button>
            </form>
          )}
        </Formik>

        {/*  */}
      </div>
    </div>
  );
};

const initialValues = {
  firstName: "",
  lastName: "",
  country: "",
  street1: "",
  street2: "",
  city: "",
  state: "",
  zipCode: "",
};

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

export default Shipping;
