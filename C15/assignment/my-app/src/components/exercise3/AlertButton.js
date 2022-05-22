function AlertButton(props) {
    function handleClick() {
        alert(`You Clicked on Button ${props.buttonNumber}`);
    }

    return (
        <button className="margin-right" onClick={handleClick}>Button {props.buttonNumber}</button>
    );
}

export default AlertButton;
