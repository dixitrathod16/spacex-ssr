import fetch from 'isomorphic-fetch'

export function fetchData (year = null,IsLaunched = null,IsLanded = null) {
    const baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100'
    let apiUrl = baseUrl

    if(IsLaunched != null)
      if (IsLaunched === true)
        apiUrl = apiUrl + '&launch_success=true'
      else
        apiUrl = apiUrl + '&launch_success=false'
    
    if(IsLanded != null)
      if(IsLanded === true)
        apiUrl = apiUrl+'&land_success=true'
      else
        apiUrl = apiUrl+'&land_success=false'
    
    if(year != null)
      apiUrl = apiUrl + '&launch_year=' +year
    
    let encodedApiUrl = encodeURI(apiUrl)
    
    return fetch(encodedApiUrl)
        .then((data) => data.json())
        .then((data) => data)
        .catch((error) => {
            console.warn(error)
            return null
        })
}