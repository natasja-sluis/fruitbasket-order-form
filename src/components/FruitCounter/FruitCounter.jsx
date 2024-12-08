import "./Fruitcounter.css"

function FruitCounter({fruitIcon, fruitName, counterFruit, setCounterFruit }) {
    return (
        <div className="fruit-container">
            <div className="fruit-row">
                <div className="fruit-name">
                    <span>{fruitIcon}</span>
                    <span>{fruitName}</span>
                </div>
                <div className="counter">
                    <button className="minus-button" type="button" disabled={counterFruit === 0}
                            onClick={() => setCounterFruit(counterFruit - 1)}>-
                    </button>
                    <span>{counterFruit}</span>
                    <button className="plus-button" type="button"
                            onClick={() => setCounterFruit(counterFruit + 1)}>+
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FruitCounter;