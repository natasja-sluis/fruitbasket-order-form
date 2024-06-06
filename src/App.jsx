import './App.css'

function App() {

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruit-container">
                <div className="fruit-row">
                    <div className="fruit-name">
                        <span>🍓</span>
                        <span>Aardbeien</span>
                    </div>
                    <div className="counter">
                        <button type="button">-</button>
                        <span>0</span>
                        <button type="button">+</button>
                    </div>
                </div>
            </div>

            <div className="fruit-container">
                <div className="fruit-row">
                    <div className="fruit-name">
                        <span>🍌</span>
                        <span>Bananen</span>
                    </div>
                    <div className="counter">
                        <button type="button">-</button>
                        <span>0</span>
                        <button type="button">+</button>
                    </div>
                </div>
            </div>

            <div className="fruit-container">
                <div className="fruit-row">
                    <div className="fruit-name">
                        <span>🍎</span>
                        <span>Appels</span></div>
                    <div className="counter">
                        <button type="button">-</button>
                        <span>0</span>
                        <button type="button">+</button>
                    </div>
                </div>

            </div>
            <div className="fruit-container">
                <div className="fruit-row">
                    <div className="fruit-name">
                        <span>🥝</span>
                        <span>Kiwis</span>
                    </div>
                    <div className="counter">
                        <button type="button">-</button>
                        <span>0</span>
                        <button type="button">+</button>
                    </div>
                </div>
            </div>

            <div className="reset-container">
                <div className="reset-row">
                    <button type="button" className="reset-button">reset</button>
                </div>
            </div>
        </>
    )
}

export default App
