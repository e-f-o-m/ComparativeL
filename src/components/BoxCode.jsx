import React from "react";
import CodeBox from "react-code-box/dist/index";

const BoxCode = () => {

  let code = `var a = 1`  

  return (
    <div>
        <CodeBox
        title="~code-box-dark.js"
        variant="light"
        code={code}
        id="code-box-dark"
        style={{marginTop:'50px'}}
      />
    </div>
  );
};

export default BoxCode;