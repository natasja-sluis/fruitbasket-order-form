import './App.css'
import {useState} from "react";

function App() {

    const [counterStrawberry, setCounterStrawberry] = useState(0);
    const [counterBananas, setCounterBananas] = useState(0);
    const [counterAppels, setCounterAppels] = useState(0);
    const [counterKiwis, setCounterKiwis] = useState(0);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [deliveryFrequency, setDeliveryFrequency] = useState("weekly");
    const [timeOfDay, toggleTimeOfDay] = useState("overdag");
    const [remarks, setRemarks] = useState("");
    const [termsAndConditions, setTermsAndConditions] = useState(false);


    function resetCounter() {
        setCounterStrawberry(0);
        setCounterBananas(0);
        setCounterAppels(0);
        setCounterKiwis(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
            Aantal aardbeien: ${counterStrawberry}
            Aantal bananen: ${counterBananas}
            Aantal Appels: ${counterAppels}
            Aantal kiwi's: ${counterKiwis}
            
            Voornaam: ${firstName}
            Achternaam: ${lastName}
            Leeftijd: ${age}
            Postcode: ${[postalCode]}
            Bezorgfrequentie: ${deliveryFrequency}
            ${timeOfDay}
           Opmerkingen: ${remarks}
           Akkoord met de voorwaarden: ${termsAndConditions}
        `);
    }

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
                        <button className="minus-button" type="button" disabled={counterStrawberry === 0}
                                onClick={() => setCounterStrawberry(counterStrawberry - 1)}>-
                        </button>
                        <span>{counterStrawberry}</span>
                        <button className="plus-button" type="button"
                                onClick={() => setCounterStrawberry(counterStrawberry + 1)}>+
                        </button>
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
                        <button className="minus-button" type="button" disabled={counterBananas === 0}
                                onClick={() => setCounterBananas(counterBananas - 1)}>-
                        </button>
                        <span>{counterBananas}</span>
                        <button className="plus-button" type="button"
                                onClick={() => setCounterBananas(counterBananas + 1)}>+
                        </button>
                    </div>
                </div>
            </div>

            <div className="fruit-container">
                <div className="fruit-row">
                    <div className="fruit-name">
                        <span>🍎</span>
                        <span>Appels</span>
                    </div>
                    <div className="counter">
                        <button className="minus-button" type="button" disabled={counterAppels === 0}
                                onClick={() => setCounterAppels(counterAppels - 1)}>-
                        </button>
                        <span>{counterAppels}</span>
                        <button className="plus-button" type="button"
                                onClick={() => setCounterAppels(counterAppels + 1)}>+
                        </button>
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
                        <button className="minus-button" type="button" disabled={counterKiwis === 0}
                                onClick={() => setCounterKiwis(counterKiwis - 1)}>-
                        </button>
                        <span>{counterKiwis}</span>
                        <button className="plus-button" type="button"
                                onClick={() => setCounterKiwis(counterKiwis + 1)}>+
                        </button>
                    </div>
                </div>
            </div>

            <div className="reset-container">
                <div className="reset-row">
                    <button type="button" className="reset-button" onClick={resetCounter}>Reset</button>
                </div>
            </div>

            <div className="form-container">
                <form className="details-form" onSubmit={handleSubmit}>
                    <div className="details-input">
                        <label htmlFor="first-name">
                            Voornaam:</label>
                        <input
                            type="text"
                            name="firstName"
                            id="first-name"
                            value={firstName}
                            onChange={(e) => {
                                console.log({ oldValue: firstName, newValue: e.target.value, e})
                                setFirstName(e.target.value)
                            }}
                        />
                    </div>

                    <div className="details-input">
                        <label htmlFor="last-name">
                            Achternaam:</label>
                        <input
                            type="text"
                            name="lastName"
                            id="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="details-input">
                        <label htmlFor="age">
                            Leeftijd:</label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div className="details-input">
                        <label htmlFor="postal-code">
                            Postcode:
                        </label>
                        <input
                            type="text"
                            name="postalCode"
                            id="postal-code"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>

                    <div className="delivery-frequency">

                        <label htmlFor="delivery-frequency">Bezorgfrequentie</label>
                        <select
                            name="deliveryFrequency"
                            id="delivery-frequency"
                            value={deliveryFrequency}
                            onChange={(e) => setDeliveryFrequency(e.target.value)}
                        >
                            <option value="">Kies een optie</option>
                            <option value="weekly">Iedere Week</option>
                            <option value="bi-weekly">Om de Week</option>
                            <option value="monthly">Iedere Maand</option>
                        </select>

                        <div>
                            <label htmlFor="time-slot-day">
                                <input
                                    type="radio"
                                    name="deliveryMoment"
                                    id="time-slot-day"
                                    value="daytime"
                                    checked={timeOfDay === "daytime"}
                                    onChange={(e) => toggleTimeOfDay(e.target.value)}
                                />
                                Overdag
                            </label>
                            <label htmlFor="time-slot-evening">
                                <input
                                    type="radio"
                                    name="deliveryMoment"
                                    value="evening"
                                    id="time-slot-evening"
                                    checked={timeOfDay === "evening"}
                                    onChange={(e) => toggleTimeOfDay(e.target.value)}
                                />
                                Avond
                            </label>
                        </div>
                    </div>

                    <div className="remarks">
                        Opmerking
                        <label htmlFor="remarks">
                        <textarea
                            name="remarks"
                            id="remarks"
                            cols="30"
                            rows="10"
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}
                        />
                        </label>
                    </div>


                    <label htmlFor="accept-terms-and-conditions">
                        <input
                            type="checkbox" name="accept-terms-and-conditions"
                            id="accept-terms-and-conditions"
                            checked={termsAndConditions}
                            onChange={() => setTermsAndConditions(!termsAndConditions)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>


                    <button type="submit" className="reset-button">
                        Verzenden
                    </button>
                </form>
            </div>
        </>
    )
}

export default App
