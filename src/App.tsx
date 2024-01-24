
import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './Component/Header/Header'
import { Feature } from './Component/Nextpage/Feature';

function App(): JSX.Element {

  const [loading, setloading] = useState<boolean>(false);


  const fetchData = () =>{
    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve({})
      },3500)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])


  const request = () =>{
    if(loading){
      return(
        <>
        <div>
          <div>Loading..</div>
        </div>
        </>
      )
    }

    return (
      <>
      <Header />
      <Feature />
      </>
    )
  }

  return (
    <>
    {request()}
    </>
  )
}

export default App
