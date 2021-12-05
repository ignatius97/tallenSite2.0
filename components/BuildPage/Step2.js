import React from 'react'
import Typography from "@material-ui/core/Typography";
import DynamicFields from './DynamicFields';

function Step2() {
    return (
      <div className="mt-2 mb-5 px-5">
        <Typography variant="overline">Requirements</Typography>
        <br/>
        <Typography variant="caption">Please provide the list requirments to the software.</Typography>
        <div>
            <DynamicFields />
        </div>
      </div>
    );
}

export default Step2
