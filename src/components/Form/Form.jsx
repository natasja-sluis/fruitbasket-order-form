import DetailsInputForm from "../DetailsInputForm/DetailsInputForm.jsx";
import Button from "../Button/Button.jsx";
import {useState} from "react";

function Form() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [deliveryFrequency, setDeliveryFrequency] = useState("weekly");
    const [timeOfDay, toggleTimeOfDay] = useState("overdag");
    const [remarks, setRemarks] = useState("");
    const [termsAndConditions, setTermsAndConditions] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
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

    return <>
        <div className="form-container">
            <form className="details-form" onSubmit={handleSubmit}>
                <DetailsInputForm
                    id="first-name"
                    labelContent="Voornaam:"
                    inputType="text"
                    value={firstName}
                    setDetail={setFirstName}
                />

                <DetailsInputForm
                    id="last-name"
                    labelContent="Achternaam:"
                    inputType="text"
                    value={lastName}
                    setDetail={setLastName}
                />

                <DetailsInputForm
                    id="age"
                    labelContent="Leeftijd:"
                    inputType="number"
                    value={age}
                    setDetail={setAge}
                />

                <DetailsInputForm
                    id="postal-code"
                    labelContent="Postcode:"
                    inputType="text"
                    value={postalCode}
                    setDetail={setPostalCode}
                />

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
                        type="checkbox"
                        name="accept-terms-and-conditions"
                        id="accept-terms-and-conditions"
                        checked={termsAndConditions}
                        onChange={() => setTermsAndConditions(!termsAndConditions)}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>


                <Button
                    buttonType="submit"
                    classNameButton="reset-button"
                    buttonName="Verzenden"
                />
            </form>
        </div>
    </>
}

export default Form;