import React from 'react'
import FilterButton from './FilterButton'
import { Link } from 'react-router-dom'
import '../css/Filter.css'

const NewFilter = (props) => {

    const years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]

    return(
        <div className="container">
            <h3 className="FilterHeading">Filters</h3>
            <div className = "wrapper">
                    <div className='Year'>
                        <div>Launch Year</div>
                        <div id='Year' className="FilterSection">
                            {years.map((i) => <FilterButton key={i} value={i} name="Year" year={props.year} isLaunched={props.isLaunched} isLanded ={props.isLanded}/>)}
                        </div> 
                    </div>
                    <div className='Launch'>
                        <div>Successful Launch</div>
                        <div id='Launch' className="FilterSection">
							<FilterButton value={true} name="Launch" year={props.year} isLaunched={props.isLaunched} isLanded ={props.isLanded}/>
                            <FilterButton value={false} name="Launch" year={props.year} isLaunched={props.isLaunched} isLanded ={props.isLanded}/>
                        </div>
                    </div>
                    <div className='Land'>
                        <div>Successful Land</div>
                        <div id='Land' className="FilterSection">
							<FilterButton value={true} name="Land" year={props.year} isLaunched={props.isLaunched} isLanded ={props.isLanded}/>
                            <FilterButton value={false} name="Land" year={props.year} isLaunched={props.isLaunched} isLanded ={props.isLanded}/>
                        </div>
                    </div>
                    <label className="button button-outline">
                        <Link to='/'>Clear Filter</Link>
                    </label>
            </div>
        </div>
    )
}

export default NewFilter