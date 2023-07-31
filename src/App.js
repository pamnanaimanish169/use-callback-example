import React, { useCallback, useEffect, useState } from 'react';

const App = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((event) => {
        console.log('handleMouseMove is called');
        setMousePosition({ x: event.clientX, y: event.clientY });
    }, []);

    //   const handleMouseMove = ((event) => {
    //     console.log('handleMouseMove is called');
    //     setMousePosition({ x: event.clientX, y: event.clientY });
    //   });

    useEffect(() => {
        console.log('MouseMoveLogger component re-rendered');
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            console.log('MouseMoveLogger component unmounted');
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    return (
        <div>
            <p>
                Mouse position: x= {mousePosition?.x}, y={mousePosition?.y}
            </p>
        </div>
    );
};

export default App;
