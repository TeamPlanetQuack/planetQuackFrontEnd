import React, { useState, useEffect } from 'react'

const StarBackground: React.FC = () => {
    const [stars, setStars] = useState<JSX.Element[]>([]);
    const colors: String[] = ['#ffffff', '#fffec4', '#c0f7ff'];

    useEffect(() => {
      const newStars: JSX.Element[] = [];

      for (let i = 0; i< 800; i++) {
        
      }
      
    }, []);










  return <div className="starfield"></div>

}

export default StarBackground

