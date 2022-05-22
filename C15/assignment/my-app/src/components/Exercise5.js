function Exercise5() {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    const animalList = animals.map((animal) => {
        return <li>{animal}</li>;
    });

    return (
        <div className="center" >
            <ul>{animalList}</ul>
        </div>
    );
}

export default Exercise5;
