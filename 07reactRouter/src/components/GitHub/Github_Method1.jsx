import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
  //fetch method will mount on memory even without triggering any event. Which is why its not usually preferrable to use directly.
  //Method2 defines the usage to async and await.
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/nmasabat97")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    })
  return (
    <div>
      <h1>My Github Following: {data.following}</h1>
    </div>
  )
}

export default Github
