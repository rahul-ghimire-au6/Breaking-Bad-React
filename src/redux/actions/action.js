import * as action_type from './action_type'

export const fetch_data=()=>dispatch=>{
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((res) => res.json())
      .then((data) => dispatch({
          type:action_type.Fetch_data,
          payload:data
        }))
      .catch((err) => console.log(err));

}

export const fetch_specific_data=(name)=>dispatch=>{
    fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`).then(res=>res.json())
      .then(data=>dispatch({
          type:action_type.Fetch_specific_data,
          payload:data
      }))
      .catch(err=>console.log(err))
    
}