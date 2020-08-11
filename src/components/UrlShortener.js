import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import firebase from "../firebase";
import Input from "../styled-components/Input";

const ShortenerSchema = Yup.object().shape({
  url: Yup.string()
    .url("Please enter a valid URL.")
    .required("This is required."),
});

const UrlShortener = () => {
  const [url, setUrl] = useState();

  return (
    <Formik
      initialValues={{
        url: "",
      }}
      validationSchema={ShortenerSchema}
      onSubmit={async ({ url }) => {
        const db = firebase.firestore();
        const document = await db.collection("urls").add({ url });

        setUrl(document.id);
      }}
    >
      {({ errors, touched }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 750,
            width: "100%",
            alignItems: "center",
            marginTop: 24,
            marginBottom: 16,
          }}
        >
          {url && (
            <a
              href={`https://oreoz.dev/${url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`https://oreoz.dev/${url}`}
            </a>
          )}

          <Field
            style={{ margin: "4px 0px", textAlign: "center" }}
            name="url"
            as={Input}
            placeholder="This is a simple URL shortener. 🚀"
          />

          {errors.url && touched.url ? <div>{errors.url}</div> : null}
        </Form>
      )}
    </Formik>
  );
};

export default UrlShortener;
