import React from 'react'

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>Our Regions</h1>
        <p>Embark on a journey through the world's most captivating regions, each offering unique charm and spectacular scenery.</p>
        <div className="region_container">
        <div className="card">
         <img src="/region1.jpg" alt="mountains" />
         <h2>Mountains</h2>
         <p><span>90</span> Properties</p> 
        </div>
        <div className="card">
        <img src="/region2.jpg" alt="coastline" />
         <h2>Seafront</h2>
         <p><span>52</span> Properties</p> 
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions
