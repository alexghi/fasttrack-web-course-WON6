function Exercise2() {
    function handleClick() {
        alert('Clicked!');
    }

    return (
        <div className="center">
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Exercise2;
