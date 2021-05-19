import RangeForm from "../Components/RangeForm";
import RangeQr from "../Components/RangeQr";
import {useState} from "react";

function CreateRange(props) {

    const [rangeData, setRangeData] = useState({
        location: "",
        rangeType: "",
        gunType: "",
        date: Date()
    })
    const [qrEnabled, setQrEnabled] = useState(false)

    const handleInputChanged = (e) => {
        if (e.target != null) {
            setRangeData({
                ...rangeData,
                [e.target.name]: e.target.value
            })
        } else {
            setRangeData({
                ...rangeData,
                'date': e
            })
        }
    }

    const handleSubmit = (e) => {
        setQrEnabled(true)
    }

    return (
        <div>
            {
                qrEnabled ?
                    <RangeQr rangeData={rangeData}/> :
                    <RangeForm rangeData={rangeData}
                               handleInputChanged={handleInputChanged}
                               handleSubmit={handleSubmit}/>
            }
        </div>
    )
}

export default CreateRange