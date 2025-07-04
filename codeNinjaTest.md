#   Your main objective is to create a toggling mechanism where a paragraph's visibility can be controlled through a button click. This will challenge your understanding of component states and event handlers in React.


###
    import { useState, useRef } from 'react'
    
    function App() {
    	const toggleRef = useRef()
    	const [show, setShow] = useState(true)
    
    	const toggleParagraph = () => {
        // using ref not remove Paragraph from DOM
        if (toggleRef.current) {
    			const crtDisplay = toggleRef.current.style.display
    			if (crtDisplay === 'none') {
    				toggleRef.current.style.display = 'block'
    			} else {
    				toggleRef.current.style.display = 'none'
    			}
    		}
    	}

      const toggleParagraph = () => {
    		setShow(!show) // using state directly remove the paragraph from dom
    	}
    
    	return (
    		<div>
    			{show && (
    				<p id="my-paragraph" ref={toggleRef}>
    					This is the paragraph you can toggle.
    				</p>
    			)}
    
      			<button id="toggle-btn" onClick={() => toggleParagraph()}>
      				Toggle Paragraph
      			</button>
      		</div>
      	)
      }
      export default App

###
