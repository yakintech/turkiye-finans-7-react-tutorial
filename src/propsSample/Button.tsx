import React from 'react'

function Button(props:any) {
  return ( <button style={{backgroundColor:props.backgroundColor, border:'none', color:'black'}}>{props.title}</button>

  )
}


Button.defaultProps = {
    backgroundColor : 'aquamarine'
}

export default Button

