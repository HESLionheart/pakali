import QRCode from 'qrcode.react'
import {useState} from 'react'
function CreateRange(props) {
    const [qrParams, setQrParams] = useState("Hello QR")
    const onInputChange = (e) => {
        setQrParams(e.target.value)
    }

    return (
        <div>
            <input onChange={onInputChange}/>
            <br/>
            <QRCode value={qrParams}/>
        </div>
    )
}

export default CreateRange