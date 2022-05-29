

export default function List() {
    const animale = ['lion', 'iguana', 'aligator', 'snake', 'shark', 'dolphin']
        return (
            <div>
                <ul>
                   {animale.map(animal=>(
                       <li>{animal}</li>
                   ))}
                </ul>
            </div>
        )
}


