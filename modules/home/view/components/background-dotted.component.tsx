import React from 'react'
import DotGrid from "../../../../components/DotGrid";
const BackgroundDottedComponent = () => {
  return (
     <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={4}
          gap={28}
          baseColor="#C1C1C1"
          activeColor="#5227FF"
          proximity={150}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          style={{}}
        />
      </div>
  )
}

export default BackgroundDottedComponent
