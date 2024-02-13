import React, { useEffect, useState } from "react";


function GitHub() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/RITZstar10')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setdata(data)
        })

    }, [])
    
    

    
    return (
        <div className="text-center text-white m-4 p-4 bg-gray-600 text-3xl"> Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git Image" width={300}></img>
        </div>
    )
}

export default GitHub

