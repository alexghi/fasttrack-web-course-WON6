function ListComponent(props) {
    const animalList = props.animals.map((animal) => {
        return <li className="list-style flex-column">{animal.icon}{animal.name}</li>;
    });

    return (
        <div className="center" >
            <ul>{animalList}</ul>
        </div>
    );
}

export default ListComponent;