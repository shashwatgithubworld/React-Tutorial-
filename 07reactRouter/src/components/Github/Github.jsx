import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/shashwatgithubworld')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    

  return (
    <div className='bg-gray-600 text-center m-4 text-white p-4 text-3xl'>
        <h3>Github Name: {data.name}</h3>
        <img src={data.avatar_url} alt=""  width={300}/>
        <h3>Github Repositories: {data.public_repos}</h3>
        {/* <h3>Github Followers: {data.followers}</h3>
        <h3>Github Following: {data.following}</h3> */}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shashwatgithubworld')
    return response.json()
}
