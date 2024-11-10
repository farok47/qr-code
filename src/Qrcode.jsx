import React, { useState } from "react";
import QRCode from "react-qr-code";

function Qrcode() {
  const [input, setinput] = useState("");
  const [qrcode, setqrcode] = useState("");

  function handlegenerate() {
    setqrcode(input);
  }
  return (
    <div>
      <h1>qr code generator</h1>
      <div>
        <input
          onChange={(e) => setinput(e.target.value)}
          type="text"
          placeholder="write your code"
        />
        <button disabled={input.trim==0?true:false} onClick={handlegenerate}>generate</button>
      </div>
      <QRCode value={qrcode}/>
    </div>
  );
}

export default Qrcode;
