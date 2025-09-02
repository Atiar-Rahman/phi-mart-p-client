import React, { useEffect, useState } from 'react';

const DiscountTimer = () => {
    const targetDate = new Date().getTime()+1000*60*60*24*25 //set 25 days countdown
    const getTimeRemaining = ()=>{
        const now = new Date().getTime();
        const difference = targetDate-now

        return {
            days: Math.floor(difference/(1000*60*60*24)),
            hours: Math.floor((difference/(1000*60*60))%24),
            minutes:Math.floor((difference/(1000*60))%60),
            seconds:Math.floor((difference/1000)%60)
        }
    }
    const [timeLeft,setTimeLeft] = useState(getTimeRemaining)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeLeft(getTimeRemaining)
        },1000)
        return ()=>clearInterval(timer) //cleanup on mount
    },[])
    return (
        <div>
            {/* For TSX uncomment the commented types below */}
            <div className="flex gap-5">
                <div>
                    <span className='text-3xl text-pink-500'>{timeLeft.days}</span>
                    <br />
                    days
                </div>
                <div>
                    <span className='text-3xl text-pink-500'>{timeLeft.hours}</span>
                    <br />
                    hours
                </div>
                <div >
                    <span className='text-3xl text-pink-500'>{timeLeft.minutes}</span>
                    <br />
                    minutes
                </div>

                <div >
                    <span className='text-3xl text-pink-500'>{timeLeft.seconds}</span>
                    <br />
                    seconds
                </div>
            </div>
        </div>
    );
};

export default DiscountTimer;