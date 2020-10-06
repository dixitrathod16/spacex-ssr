import React from 'react'
import '../css/Card.css'

const Card = (props) => {
    return (
        <div className="data">
			<div className="image-container">
                <img src={props.value.links.mission_patch_small} alt="Cannot be rendered"/>
            </div>
			<div className="item-description">
            <div><h4 className="cardname">{props.value.mission_name}#{props.value.flight_number}</h4></div>
			<div>
				<h4 className="missionids">Mission Ids:</h4>
				<ul className="value">
					{props.value.mission_id.map((x,i) => {
                        return (
                        <li key={i}>{x}</li>
                        )}
                    )}
				</ul>
			</div>
			<div>
				<span><b>Launch Year:</b></span><span className="value">{props.value.launch_year}</span>
			</div>
			<div>
				<span><b>Successful Launch:</b></span><span className="value">{(props.value.launch_success!=null)?props.value.launch_success.toString():"NA"}</span>
			</div>
			<div>
				<span><b>Successful Landing:</b></span><span className="value">{(props.value.launch_landing!=null)?props.value.launch_landing.toString():"NA"}</span>
			</div>	
			</div>
        </div>
    )
}

export default Card