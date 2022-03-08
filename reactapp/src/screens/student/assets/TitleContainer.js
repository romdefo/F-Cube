import React from 'react'

const TitleContainer = ({children}) => {
  return (
    <h2 style={myStyle.Title}>{children}</h2>
  )
}

export default TitleContainer

const myStyle ={
    Title:{
        color:'#FFFF',
        backgroundColor:'#2c607e',
        textAlign:'center',
        width:"100%",
        margin:'auto',
        padding:'0 auto',
        boxShadow:'0 0.2rem yellow'
    }
}