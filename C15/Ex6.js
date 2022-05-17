import Animal from "./Animal"

export default function Ex6() {
    const animale = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
        return (
            <div>
                <ul className="animal_pics">
                   {animale.map(animal=>(
                       <Animal animal={animal}/>
                   ))}
            
                </ul>

            </div>

        )

}