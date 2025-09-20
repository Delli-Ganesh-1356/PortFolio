import { useEffect, useState } from "react";

export const StarBackground = ({ darkMode }) => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [darkMode]);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        color: darkMode ? "#ffffff" : `hsl(${Math.random() * 360}, 80%, 70%)`,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 5;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      // Random direction
      const dx = Math.random() * 200 + 100; // distance X
      const dy = Math.random() * 200 + 100; // distance Y
      newMeteors.push({
        id: i,
        size: Math.random() * 1 + 2,
         x: Math.random() * 100, // full width
         y: Math.random() * 70,  // top 20% of screen
        delay: Math.random() * 5,
        animationDuration: Math.random() * 5 + 1,
        color: darkMode ? "#ffffff" : `hsl(${Math.random() * 360}, 80%, 60%)`,
        dx,
        dy,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            backgroundColor: star.color,
            borderRadius: "50%",
            position: "absolute",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: `${meteor.size * 20}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            backgroundColor: meteor.color,
            borderRadius: "50%",
            position: "absolute",
            transform: `translate(0,0) rotate(45deg)`,
            animation: `meteor ${meteor.animationDuration}s linear infinite`,
            "--dx": `${meteor.dx}px`,
            "--dy": `${meteor.dy}px`,
          }}
        />
      ))}
    </div>
  );
};
