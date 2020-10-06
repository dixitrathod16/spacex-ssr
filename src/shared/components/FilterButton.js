import React,{ useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/FilterButton.css'

const FilterButton = (props) => {
    const [text,setText] = useState(props.value===true?"True": (props.value===false?"False":props.value))
    const [defaultClassName, setDefaultClassName] = useState("button button-outline ")
    const [selectedClassName, setSelectedClassName] = useState("selected")
    const [assignedclass, setAssignedclass] = useState("button button-outline ")

    const [path,setPath] = useState (
        () => {
            let initpath
            if(props.name==="Year")
                initpath= '/'+props.value+'/'+props.isLaunched+"/"+props.isLanded
            else if (props.name==="Launch") 
                initpath= '/'+props.year+'/'+props.value+'/'+props.isLanded
            else 
                initpath = '/'+props.year+'/'+props.isLaunched+'/'+props.value

            return initpath
        }
    )
    
    useEffect (() =>{
        if((props.year!=null && props.year==props.value && props.name=="Year") || (props.isLaunched!=null && props.isLaunched==props.value && props.name=="Launch") || (props.isLanded!=null && props.isLanded==props.value && props.name=="Land"))
            setAssignedclass(defaultClassName+selectedClassName)
        else 
            setAssignedclass(defaultClassName)
        
        let newpath
        if(props.name==="Year")
            newpath= '/'+props.value+'/'+props.isLaunched+"/"+props.isLanded
        else if (props.name==="Launch") 
            newpath= '/'+props.year+'/'+props.value+'/'+props.isLanded
        else 
            newpath = '/'+props.year+'/'+props.isLaunched+'/'+props.value
        
        setPath(newpath)

    }, [props.year,props.isLaunched, props.isLanded,props.value] )

    return(
        <label className={assignedclass}>
                <Link to={path}>{text}</Link>
        </label>
    )
}

export default FilterButton