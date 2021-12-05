import React from 'react'
import { TextField, Typography } from "@material-ui/core";

function Step4() {
    return (
      <div className="mt-2 mb-5 px-5">
        <Typography variant="overline">Contacts</Typography>
        <br />
        <Typography variant="caption">
          Please share with us your contacts and we will reach out to you as
          soon as we can.
          <br /> Thank you for using this service
        </Typography>
        <div>
          <TextField
            fullWidth
            variant="standard"
            label="Name"
            className="mt-3"
          />
          <TextField
            fullWidth
            variant="standard"
            label="Phone Number"
            className="mt-3"
          />
          <TextField
            fullWidth
            variant="standard"
            label="Email"
            className="mt-3"
          />
          {/* <ReactQuill value={QuillValue} onChange={handleChange} /> */}
        </div>
      </div>
    );
}

export default Step4
