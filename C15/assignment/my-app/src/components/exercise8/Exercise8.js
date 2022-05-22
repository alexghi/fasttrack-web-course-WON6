import JokeComponent from "./JokeComponent";

function Exercise8() {
    const jokeObjectArray = [
        {
            id: 1,
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: 2,
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#"
        }
    ];

    const jokeObject = jokeObjectArray.map(joke => {
       return <JokeComponent joke={joke}></JokeComponent>
    });

    return (
        <div className="center" >{jokeObject}</div>
    );
}

export default Exercise8;
