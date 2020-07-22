import React from "react";

// reactstrap components
import { Progress } from "reactstrap";

// core components

function ProgressBar(props){
  return (
    <>
      <Progress
        striped
        max="100"
        value={props.value*100/30}
        barClassName="progress-bar-primary"
      />
     
    </>
  );
}

export default ProgressBar;