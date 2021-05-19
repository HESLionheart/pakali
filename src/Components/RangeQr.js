import QRCode from 'qrcode.react'

function CreateRange(props) {
    return (
        <div>
            <QRCode value={props.rangeData}/>
        </div>
    )
}

export default CreateRange