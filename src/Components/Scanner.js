import React, {useState} from "react";

import QrReader from "react-qr-scanner"
const Scanner = ({handleScan}) => {
  const [delay, setDelay] = useState(0)
//   const [result, setresult] = useState("")
  const handleError = (err) =>{
    console.error(err)
  }
  const getWindowDimensions = () => {
      const {innerWidth: width, innerHeight: height} = window;
      console.log(width)
      console.log(height)
      return{
          width,
          height
      };
  }
  const previewStyle = {
      height: getWindowDimensions().height *0.75,
      width: getWindowDimensions().width *0.75
  }
  return (
    <div>
        <QrReader
        onScan={(data)=>handleScan(data)}
        onError={handleError}
        delay ={delay}
        style ={previewStyle}
        />
    </div>
    )
}
 
export default Scanner;