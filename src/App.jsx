import QRCode from "react-qr-code";
import './App.css';
import QRCodeGenerator from "./components/QRCodeGenen";

function App() {
  return (
    <div className="container">
      <QRCode
        size={150} 
        bgColor="white"
        fgColor="#000000"
        value="https://www.npmjs.com/package/react-qr-code"
      />
      <QRCodeGenerator />
    </div>
  );
}

export default App;
