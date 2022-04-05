import React, { useEffect } from 'react';
type Props = {
    timeZone: string;
    timeFormat: string;
    interval?: number
}
const Timer: React.FC<Props> = ({ timeZone, timeFormat, interval }) => {
    const [time, setTime] = React.useState(new Date());
    function tic(): void {
        setTime(new Date());
    }
    useEffect(() => {
        setInterval(tic, interval || 1000);
    }, [])
    return <div style={{ textAlign: 'center', marginTop: `5vw`}}>
        <h3>{timeZone} ({timeFormat})</h3>
        <label>{time.toLocaleString(timeFormat, { timeZone: timeZone })}</label>
    </div>
}
export default Timer;