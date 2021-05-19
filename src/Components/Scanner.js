import React, {useState} from "react";

import QrReader from "react-qr-scanner"
const Scanner = () => {
  const [delay, setDelay] = useState(0)
  const [result, setresult] = useState("")
  const HandleScan = (data) =>{
    if (data != null){
      console.log(data)  
    }
    
    setresult(data)
  }
  const handleError = (err) =>{
    console.error(err)
  }
  return (
    <div>
        <QrReader
        onScan={HandleScan}
        onError={HandleError}
        delay ={delay}
        />
    </div>
    )
}
 
export default Scanner;