import ListComponent from "./ListComponent";

function Exercise6() {
    const animals = [
        { name: "dog", icon: "🐶" },
        { name: "cat", icon: "🐱" },
        { name: "chicken", icon: "🐔" },
        { name: "cow", icon: "🐮" },
        { name: "sheep", icon: "🐑" },
        { name: "horse", icon: "🐴" },
    ];

    return (
        <div className="center" >
            <ListComponent animals={animals}/>
        </div>
    );
}

export default Exercise6;
