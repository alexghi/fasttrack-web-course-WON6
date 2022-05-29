export function Accordion() {
    return (
        <div>
            <div onClick={ ()=> document.getElementById("definition").style.display = "none"}>
                <h1>Accordion Slide</h1>
            </div>
                <div id="definition">Creating an accordion that toggles text content on click of the accordion header using React State and conditional rendering.

</div>

        </div>
    )
} 