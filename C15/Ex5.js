export default function Ex5() {
    const animale = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
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