import React, { useState, useEffect } from 'react';
const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const colors = ['#ffffff', '#fffec4', '#c0f7ff'];
    useEffect(() => {
        const newStars = [];
        for (let i = 0; i < 800; i++) {
            const starX = Math.floor(Math.random() * window.innerWidth);
            const starY = Math.floor(Math.random() * window.innerHeight);
            const starSize = Math.floor(Math.random() * 4);
            const starColor = colors[Math.floor(Math.random() * colors.length)];
            newStars.push(React.createElement("div", { className: "star", key: i, style: { left: starX,
                    top: starY,
                    width: starSize,
                    height: starSize,
                    backgroundColor: starColor,
                    position: 'absolute',
                    borderRadius: '50%'
                } }));
        }
        setStars(newStars);
    }, []);
    return React.createElement("div", { className: "starfield" }, stars);
};
export default StarBackground;
//# sourceMappingURL=StarBackground.js.map