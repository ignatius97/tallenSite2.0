import React from 'react'
import Typography from "@material-ui/core/Typography";

function Step1() {
    return (
      <div className="mt-2 mb-5 px-5">
        <div>
          <Typography variant="overline">What Happens here</Typography>
          <br />
          <Typography variant="caption">
            We build for you any application you want, where a web application,
            desktop application or a mobile appication
          </Typography>
        </div>

        <div className="mt-4">
          <Typography variant="overline">What you should provide</Typography>
          <br />
          <Typography variant="caption">
            On the next step.
            <br /> You should provide the functional requirements of your
            intended software.
            <br /> Describe to us what you envision the software to be and you
            desires
            <br /> And the go head to provide your contacts for as to reach you
            incase of any inqueries.
            <br /> Thank you.
          </Typography>
        </div>
      </div>
    );
}

export default Step1
