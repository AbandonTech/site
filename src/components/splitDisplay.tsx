const splitTextContent = `
        Hello world this is a paragraph that should overlay the slant div, although it will
        become unredable over the white text, this will need to be fancy in order to fix.
        I will probably calculate the line for the slanted rectangle as we know this is 
        a fancy-schmancy 45-45-90 right triangle. The calculation should be quite easy.
        We can determine where the text lies on the slant based on its position down relative
        to the top of the measurable rectangle. And we can also measure the distance from the 
        right side of the measureable rectangle since this is the left side of the triangle.
    `

const darkBox = typeof(window) !== "undefined" ? document.getElementById("darkBox") : null;


function isOverlapDark(boundaryPos: number, elemPos: DOMRect) {
    const avgElemX = (elemPos.right + elemPos.left) / 2
    return (boundaryPos > avgElemX)
}

function calcBoundaryLinePos(behindElemPos: DOMRect, elemPos: DOMRect) {
    const elemRelativeY = elemPos.top - behindElemPos.top;

    // The boundary line is formed from a right triangle with angles 45-45-90.
    // We can calculate the X position of the hypotenuse relative to the Y position of the element using (element Y * sqr root(2))
    // sqr(2) = 1.41421356237
    // const slantX = (elemRelativeY * 1.41421356237) + behindElemPos.right;
    
    // Rough estimated equation due to unknown inaccuracies with rendered content
    const slantX = ((((elemRelativeY**2)) / 0.7)**0.5) + behindElemPos.right;
    return slantX
}

function styleLightOrDark() {
    if (darkBox === null) {
        console.log("SSR, CSS elements not calculated.")
        return false
    }

    const darkBoxPosition = darkBox.getBoundingClientRect();
    
    let elements = document.getElementById("splitCharacters")?.children;

    if (elements) {
        for (let elem of elements) {

            const elemPos = elem.getBoundingClientRect();
            const boundaryPos = calcBoundaryLinePos(darkBoxPosition, elemPos);

            if (isOverlapDark(boundaryPos, elemPos)) {
                elem.className = "text-white";
            }
            else {
                elem.className = "text-black";
            }
        }
    }
}


function generateTextElements(content: string) {
    let output = []
    for (let i = 0; i < content.length; i++) {
        const char = splitTextContent[i]
        const keyID =  "splitChar" + i.toString();
        output.push(<span key={keyID} id={keyID}>{char}</span>)
    }
    return output
}


export default function SplitDisplay() {
    return (
        <div className="relative overflow-hidden mt-12">
            <div className="flex w-full h-[30rem]">
                <div id="darkBox" className="h-full w-[800px] bg-black after:content-[''] after:absolute after:h-[60rem] after:w-[800px] after:bg-black after:rotate-[-45deg] after:origin-top-right after:z-[-1]"></div>
                <div className="absolute w-full h-full bg-transparent p-8">
                    <p id="splitCharacters" className="text-4xl">
                        {generateTextElements(splitTextContent)}
                        {styleLightOrDark()}
                    </p>
                </div>
            </div>
        </div>
    )
}