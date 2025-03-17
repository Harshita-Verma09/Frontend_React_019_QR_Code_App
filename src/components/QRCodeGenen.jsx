import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./QRCodeGenerator.css"; // Import the CSS file

const QRCodeGenerator = () => {
  const [text, setText] = useState("");

  return (
    <div className="qr-container">
      <h2 className="qr-title">QR Code Generator</h2>

      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="qr-input"
      />

      {text && (
        <div className="qr-box">
          <QRCodeCanvas value={text} size={200} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
