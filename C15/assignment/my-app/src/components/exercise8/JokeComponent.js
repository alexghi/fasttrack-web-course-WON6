function JokeComponent(props) {
    return (
        <div className="center flex-column joke-box" >
            <h3>{props.joke.setup}</h3>
            <p>{props.joke.punchline}</p>
        </div>
    );
}

export default JokeComponent;