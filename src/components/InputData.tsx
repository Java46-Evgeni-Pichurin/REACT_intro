import React from 'react'
import colores from '../config/colores';
type Props = {
    timeZones: any[],
    injectTimeZone: (timeZone: string) => void,
    coloresArr: any[],
    colorChoice: (color: string) => void
}
let selectElem: any;
let selectColor: any;
const InputData: React.FC<Props> = ({timeZones, injectTimeZone, coloresArr, colorChoice}) => {
    function onSelect() {
        injectTimeZone(selectElem.value)
        colorChoice(selectColor.value)
    }
    React.useEffect(() => {
        selectElem = document.getElementById('selectInputData');
        selectColor = document.getElementById('selectColor');
    })

return <div>
    <select id='selectInputData' >
        {timeZones.map(tz => <option value={tz.name}>{tz.name}</option>)}
    </select>
    <select id='selectColor' >
        {coloresArr.map(col => <option value={col}>{col}</option>)}
    </select>
    <button onClick={onSelect}>GO</button>
    </div>
}
export default InputData;