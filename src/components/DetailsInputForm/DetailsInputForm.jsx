import "./detailsInputForm.css"


function DetailsInputForm({id, labelContent, inputType,  value, setDetail}) {
    return <div className="details-input">
        <label htmlFor={id}>
            {labelContent}</label>
        <input
            type={inputType}
            name={id}
            id={id}
            value={value}
            onChange={(e) => {
                setDetail(e.target.value)
            }}
        />
    </div>
}

export default DetailsInputForm;