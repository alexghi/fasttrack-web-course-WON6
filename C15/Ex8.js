export default function Ex8() {
    const jokes= [
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

    return (
        <div className="main_container">
            {jokes.map((joke)=>(
                <div className="joke_container">
                    <div className="setup_container">
                        {joke.setup}
                        
                    </div>
                    <div className="punch_line_container">
                    {joke.punchline}
                    </div>
                </div>
            ))}




        </div>


    )
}