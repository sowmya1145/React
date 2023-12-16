import React, { useState } from 'react'
export default function DynamicRendering() {
    const[x,setX]=useState(12)
    return(
        x>10 ? <p>The value is greater than 10</p> :
        <p>the Value is less than 10</p>
    )
}