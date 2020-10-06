import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import App from './App'

const Main = (props) => {
    return( 
            <BrowserRouter>
                <Switch>
                    <Route 
                        key="filtered" 
                        exact 
                        path='/:year/:isLaunched/:isLanded' 
                        render ={
                            ({match}) => {
                                return(
                                <App 
                                    data={props.data} 
                                    year={match.params.year == undefined || match.params.year == 'null' ? null : match.params.year}
                                    isLaunched = {match.params.isLaunched==undefined | match.params.isLaunched=='null' ? null:(match.params.isLaunched=='true')}
                                    isLanded = {match.params.isLanded==undefined | match.params.isLanded=='null' ?null:(match.params.isLanded=='true')}
                                />
                                )
                            }   
                        }
                    />
                    <Route 
                        key= "home" 
                        path='/' 
                        render ={
                            ({match}) => {
                                return(
                                <App 
                                    data={props.data} 
                                    year={null}
                                    isLaunched = {null}
                                    isLanded = {null}
                                />
                                )
                            }
                        }      
                    />
                </Switch>
            </BrowserRouter>
    )
}

export default Main