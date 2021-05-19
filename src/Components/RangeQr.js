import QRCode from 'qrcode.react'

function CreateRange({rangeData}) {
    return (
        <div>
            <QRCode value={JSON.stringify(rangeData)}/>
        </div>
    )
}

export default CreateRange