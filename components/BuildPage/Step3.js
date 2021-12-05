import { Typography } from '@material-ui/core';
import React,{useState} from 'react'
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

function Step3() {

    const [QuillValue, setQuillValue] = useState("")

    const [value, setValue] = useState("");
   function handleChange(value) {
        setQuillValue(value)
  }
    return (
      <div className="mt-2 mb-5 px-5">
        <Typography variant="overline">Description</Typography>
        <br />
        <Typography variant="caption">
          Give a very good clear description of the software and how to see it
          working.
        </Typography>
        <div>
          <ReactQuill value={value} onChange={setValue} />
          {/* <ReactQuill value={QuillValue} onChange={handleChange} /> */}
        </div>
      </div>
    );
}

export default Step3
