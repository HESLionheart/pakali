import RangeForm from "../Components/RangeForm";
import RangeQr from "../Components/RangeQr";
import {useState} from "react";
import createRange from "../ServerAPI/Ranges";

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

    const handleSubmit = async (e) => {
        const response = await createRange(rangeData)
        console.log(response)
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