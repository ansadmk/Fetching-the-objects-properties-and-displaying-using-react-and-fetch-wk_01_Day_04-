import { useEffect, useState } from "react"



  function App() {
     const [value, setValue]=useState([])
     

  
    useEffect(()=>{
      fetch("https://dummyjson.com/quotes")
      .then(res=>res.json())
      .then(res2=>setValue(res2.quotes))
      }
    ,[])
    
   const arr=value.filter(a=>a.id<=10)
     
    
    
    
    

  return (
    <div>
      {arr.map((a)=> <h1 style={{textAlign:"center"}}>{a.quote}</h1>)}
    </div>
  )
}

export default App
