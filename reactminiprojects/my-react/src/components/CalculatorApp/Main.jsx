import React from 'react'
import Calculator from './Calculator'

const Main = () => {
  return (
    <>
        {/* <!--------------- Main container -----------------> */}
    <main className="main-container">
            {/* <!--------------- WSA icon image ------------------> */}
        <div className="wsa-icon-container">
            <img src="Wsa.png" alt="WSA icon" className="wsa-icon" />
        </div>
          {/* <!----------------- Sub container --------------------> */}
        <div className="sub-container">
                {/* <!------------ Header container ----------------> */}
                <div className="header-container">
                    {/* <!---------- Calculator heading -------------> */}
                    <h1 className="header">Calculator</h1>
                </div>

        <Calculator />

        </div>
        <footer>
            &copy; 2024 WSA. All Rights Reserved
        </footer>
    </main>

    </>
  )
}

export default Main