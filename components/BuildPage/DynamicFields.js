import { Button, TextField } from '@material-ui/core';
import { Add, Remove } from "@material-ui/icons";
import React, { useState } from "react";
// import "./styles.css";

const DynamicFields = () => {
  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <form onSubmit={handleSubmit}>
      {formValues.map((element, index) => (
        <div className="form-inline mb-3" key={index}>
          <label className="mr-2">{index + 1 + "."}</label>
          <TextField
          style={{ width:"90%" }}
            type="text"
            name="Requirement"
            value={element.name || ""}
            onChange={(e) => handleChange(index, e)}
          />
          {index ? (
            <Button
            className="ml-2"
              //   startIcon={<Remove />}
              variant="contained"
              color="secondary"
              type="button"
              size="small"
              onClick={() => removeFormFields(index)}
            >
              <Remove />
              {/* {" "}
              Remove{" "} */}
            </Button>
          ) : null}
        </div>
      ))}
      <div className="button-section mt-4">
        <Button
          startIcon={<Add />}
          variant="contained"
          color="primary"
          size="small"
          onClick={() => addFormFields()}
        >
          {" "}
          Add{" "}
        </Button>
        {/* <Button
          variant="contained"
          style={{
            backgroundColor: "green",
            color: "#fff",
            float: "inline-end",
          }}
          size="small"
          type="submit"
        >
          Submit
        </Button> */}
      </div>
    </form>
  );
};

export default DynamicFields;
