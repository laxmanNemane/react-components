import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const user = [
    { id: "1", name: "lakhan" },
    { id: "2", name: "Nikhil" },
    { id: "3", name: "gajanan" },
    { id: "4", name: "kunal" },
    { id: "5", name: "sanjay" },
    { id: "6", name: "Niranjan" },
    { id: "7", name: "rushikesh" },
    { id: "8", name: "akhil sir" },

]

const Index = () => {

    const [userData, setuserData] = useState(user)

    const [name, setName] = useState("")

    console.log(userData)

    const onfilterData = (e) => {
        setName(e.target.value)

    }
    useEffect(() => {
        const filterData = userData.filter((item, index) => {
            return item.name.toLowerCase().includes(name)
        })
        // console.log("filterdata in function", filterData)
        setuserData(filterData);
    }, [])

    return <div className="serchbar-section">
        <div className="serchbar-wrapper">
            <div className="serch-icon">
                <div className="icon">💍</div>
            </div>
            <div className="input-field">
                <input type="text" placeholder="enter name" onChange={(e) => onfilterData(e)} />
            </div>
        </div>


        <ul style={{ listStyle: "none" }}>
            {
                userData.map((ele, index) => {
                    return <li key={index}>{ele.name}</li>
                })
            }
        </ul>
    </div>;
};

export default Index;
