import React,{useEffect} from "react";
import axios from "axios";

function Temp() {

    useEffect(() => {
        axios.get("/api/hello")
            .then(response => console.log(response.data));
    }, [])
    return(
        <div>
            Temp Page
        </div>
    )
}
export default Temp