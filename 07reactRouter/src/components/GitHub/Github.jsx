import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/nmasabat97")
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data))
    // })
  return (
    <div>
      <h1>My Github Following: {data.following}</h1>
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/nmasabat97")
    //return res;
    return res.json()
} 