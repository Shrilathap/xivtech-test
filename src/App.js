import React from 'react'
import MediaControlCard from './cardcomp';
const App=(props)=>{
  const arr=[{id:1,title:'AI + RPA is what we do',description:'Future-Proof your business. Drive efficiency, profitability and deliver on customer experience',img:'https://www.xivtech.io./rp2.jpg'},{id:2,title:'Make Bolder Choices',description:'Digital focused strategies to realize market-changing ideas',img:'https://www.xivtech.io./p1.png'},{id:3,title:'Innovate with Speed',description:'Create higher quality software, deliver on customer expectations and business goals',img:'https://www.xivtech.io./p2.jpg'},{id:4,title:'Embrace Cloud',description:'With Cloud-First accelerate innovation and optimize performance',img:'https://www.xivtech.io./p3.jpg'}]
  return (
    <div className='container'>
      <h2>Let's Collaborate</h2>
      <br/>
      {
        arr.map((ele,i)=>{
          return(
            <MediaControlCard  key={i} ele={ele}/>
          )
        })
      }
      
    </div>
  )
}

export default App;