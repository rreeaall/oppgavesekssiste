import { useState, useEffect } from 'react';

const Movies = ({ title, actor }) => {
    
const [data, setData] = useState("")

const getDdata = async = () =>{
    const dddata = await resonse.json()
    setData(dddata)
}

useEffect(() => {
    getDdata(title, actor, data)
}, [title, actor, data]);

}

export default Movies;

