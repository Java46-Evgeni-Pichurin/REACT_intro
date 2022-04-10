import React, { useEffect, useState } from "react"
type Props = {
    color: string
}
const Color: React.FC<Props> = ({color}) => {
    const style: React.CSSProperties = {width: "40vw", height: "20vh", border: `solid`,
     backgroundColor: color}
     const [CurColor, setColor] = useState(color);
     function FavoriteColor() {
        console.log("color");
        setColor(color);
    }
    useEffect(() => {
        console.log("timer has been mounted")
        const intervalId = setInterval(FavoriteColor, 10000);
       
        return () => {
            clearInterval(intervalId)
            console.log("unmounting timer")
        }
    }, [])
    return <h1>{CurColor}<div style={style}></div></h1>
}
export default Color;