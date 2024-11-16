import React from 'react'

const Display = () => {
  return (
    <>
            {/* <!----------- Output screen ------------> */}
    <div className="output-field-container">
        <input type="text"  className="output-field" id="display" readOnly />
        <input type="text" className="input-field" id="input-screen" placeholder="0" readOnly />
    </div>
    </>
  )
}

export default Display