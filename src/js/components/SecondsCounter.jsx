import React, { useEffect, useState } from 'react';

//Statement of seconds to 0
const SimpleCounter = () => {
    const [seconds, setSeconds] = useState (0);

// Create the interval of 1 second
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((item) => item + 1);
        }, 1000);
        return() => clearInterval(timer);
    }, []);

// Make the 6 digits counter
    const formatearTiempo = (tiempo) => {
        return tiempo.toString().padStart(6, '0')
        }

// Clock and separete digits
    return(
        <div className='container mt-5 text-center'>
            <h1 className='m-3'>Seconds Counter</h1>
            <div className='bg-dark text-white d-flex justify-content-center gap-3 rounded'>
                <span className='bg-dark rounded p-3 fs-2'>
                    <i className='fas fa-clock'></i>
                </span>

                {formatearTiempo(seconds).split("").map((digit, i) => (
                    <span key={i} className='bg-dark rounded p-3 fs-2'>
                    {digit}
                    </span>
                ))}
            </div>            
        </div>
    );
};
export default SimpleCounter;