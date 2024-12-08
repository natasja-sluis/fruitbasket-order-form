import './App.css'
import {useState} from "react";
import FruitCounter from "./components/FruitCounter/FruitCounter.jsx";
import Button from "./components/Button/Button.jsx";
import Form from "./components/Form/Form.jsx";

function App() {

    const [counterStrawberry, setCounterStrawberry] = useState(0);
    const [counterBananas, setCounterBananas] = useState(0);
    const [counterAppels, setCounterAppels] = useState(0);
    const [counterKiwis, setCounterKiwis] = useState(0);

    function resetCounter() {
        setCounterStrawberry(0);
        setCounterBananas(0);
        setCounterAppels(0);
        setCounterKiwis(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitCounter
                fruitIcon="🍓"
                fruitName="Aardbeien"
                counterFruit={counterStrawberry}
                setCounterFruit={setCounterStrawberry}
            />
            <FruitCounter
                fruitIcon="🍌"
                fruitName="Bananen"
                counterFruit={counterBananas}
                setCounterFruit={setCounterBananas}
            />
            <FruitCounter
                fruitIcon="🍎"
                fruitName="Appels"
                counterFruit={counterAppels}
                setCounterFruit={setCounterAppels}
            />
            <FruitCounter
                fruitIcon="🥝"
                fruitName="Kiwi's"
                counterFruit={counterKiwis}
                setCounterFruit={setCounterKiwis}
            />


            <div className="reset-container">
                <div className="reset-row">
                    <Button
                        buttonType="button"
                        classNameButton="reset-button"
                        onClick={resetCounter}
                        buttonName="Reset"
                    />
                </div>
            </div>

            <Form/>
        </>
    )
}

export default App
