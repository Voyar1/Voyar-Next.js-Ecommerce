import { ErrorMessage, Field } from "formik";
import styles from "./shipping.module.css";
import { Formik } from "formik";
import * as yup from "yup";

const Shipping = () => {
  const handleFormSubmit = () => {};
  return (
    <div className={styles.shipping}>
      {/* BILLING FORM */}
      <div>
        <p>Billing Information</p>
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
            setFieldValue,
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
                      errors.lastName && touched.firstName
                        ? styles.inputError
                        : ""
                    }`}
                  />
                  {errors.lastName && touched.firstName && (
                    <span className={styles.error}>{errors.lastName}</span>
                  )}
                </div>

                <Field
                  type="text"
                  placeholder="Country"
                  name="country"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.country}
                  className={styles.country}
                />
                <Field
                  type="text"
                  placeholder="Street Address"
                  name="street1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.street1}
                  className={styles.street1}
                />
                <Field
                  type="text"
                  placeholder="Street Address 2 (optional)"
                  name="street2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.street2}
                  className={styles.street2}
                />
                <Field
                  type="text"
                  placeholder="City"
                  name="city"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.city}
                  className={styles.city}
                />
                <Field
                  type="text"
                  placeholder="State"
                  name="state"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.state}
                  className={styles.state}
                />
                <Field
                  type="text"
                  placeholder="Zip Code"
                  name="zipCode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.zipCode}
                  className={styles.zipCode}
                />
              </div>
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
