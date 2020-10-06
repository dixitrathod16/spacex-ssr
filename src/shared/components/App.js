import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import Content from './Content'
import '../css/App.css'

const App = (props) => {
  const [data, setData] = useState(props.data)

  useEffect( () => {
    const baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100'
    let apiUrl = baseUrl

    if(props.isLaunched!=null){
      setData(null)
      if (props.isLaunched === true)
        apiUrl = apiUrl + '&launch_success=true'
      else
        apiUrl = apiUrl + '&launch_success=false'
    }
    
    if(props.isLanded!=null){
      if(data!=null)
        setData(null)
      if(props.isLanded === true)
        apiUrl = apiUrl+'&land_success=true'
      else
        apiUrl = apiUrl+'&land_success=false'
    }

    if(props.year != null){
      if(data!=null)
        setData(null)
      apiUrl = apiUrl + '&launch_year=' + props.year
    }

    fetch(apiUrl)
    .then((res) => res.json())
    .then((repos) => {
      setData(repos)
    })
    .catch((error) =>{
      console.warn(error)
      return null
    })
  }
  ,[props.year,props.isLaunched,props.isLanded])

  return (  
    <div className="App">
      <header className="header"><h2 className="h2">SpaceX Launch Programs</h2></header>
      <Filter 
        year = {props.year}
        isLaunched = {props.isLaunched}
        isLanded = {props.isLanded}
      />
      <Content data={data}/>
      <footer className="footer"><b>Developed by:</b> Dixit R Jain</footer>
    </div>
  )
}

export default App
