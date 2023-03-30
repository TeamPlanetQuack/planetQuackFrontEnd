import React, { useState, useEffect } from 'react'

const StarBackground: React.FC = () => {
    const [stars, setStars] = useState<JSX.Element[]>([]);
    const colors: string[] = ['#ffffff', '#fffec4', '#c0f7ff'];

    useEffect(() => {
      const newStars: JSX.Element[] = [];

      for (let i = 0; i< 800; i++) {
        const starX = Math.floor(Math.random() * window.innerWidth);
        const starY = Math.floor(Math.random() * window.innerHeight);
        const starSize = Math.floor(Math.random() * 4);
        const starColor = colors[Math.floor(Math.random() * colors.length)];

        newStars.push(
          <div className="star" key={i} style={{ left: starX, 
            top: starY, 
            width: starSize, 
            height: starSize, 
            backgroundColor: starColor,
            position: 'absolute',
            borderRadius: '50%'
          
          }}></div>
        )  
      }
      setStars(newStars);

    }, []);

  return <div className="starfield">{stars}</div>

}

export default StarBackground

