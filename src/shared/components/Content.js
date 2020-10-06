import React from 'react'
import Card from './Card'
import '../css/Content.css'

const Content = (props) => {
    if(props.data==null)
    {
        return <p>Loading...</p>
    }
    else{
        if(!props.data.length)
            return <p className="norecords"><b>Sorry!! No matching records found.</b></p>
        else{    
            return(
                <div className="Content">
                  {props.data.map( (d,i) => (<Card key={i} value={d} />))}
                </div>
            )
        }
    }
}

export default Content