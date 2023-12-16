// export default function List()
// {
//     const animals=["dog","cat","lion"]
//     const result=animals.map((ani)=><li>{ani}</li>)
//     return(
//         <div>
//             <ul>
//                 {result}
//             </ul>
//         </div>
//    )
// }
// export default function List()
// {
//     const animals=["dog","cat","lion"]
//     const result=animals.map((ani,index)=><li key={index}>{index}=>{ani}</li>)
//     return(
//         <div>
//             <ul type="none">
//                 {result}
//             </ul>
//         </div>
//    )
// }
import React from 'react'
export default function List()
{
    const college=[{id:1, stuName:"sowmya", age:18},
            {id:2, stuName:"senior", age:20},
            {id:3, stuName:"suji", age:18},
            {id:4, stuName:"sri", age:18},
            {id:5, stuName:"sow", age:18},]
        
            const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age}</li>)
            return(
                <div>
                    <h1>List of Students</h1>
                    {display}
                </div>
            )
}