import DateFinder from "./dateFinder";
import EatNsplit from "./eatNsplit";
import Tip from "./tip";
import './calc.css'

export default function Calc() {
    return (
        <div className="BODY">
            <h1>Eat & Split</h1>
            <EatNsplit />
            <h1>Tip Calculater</h1>
            <Tip />
            <h1>Date Finder</h1>
            <DateFinder />
        </div>
    )
}