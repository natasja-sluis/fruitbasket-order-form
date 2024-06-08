import "./button.css"


function Button({classNameButton, buttonType, onClick, buttonName}) {
    return <button
        type={buttonType}
        className={classNameButton}
        onClick={onClick}>{buttonName}
    </button>
}

export default Button;