// import React, { useState } from 'react';

export default function About(props) {
    // This below state is for changing the background colour of the accordion so that the dark mode will be visible
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',    // This is a javascript object which is sent in the style attribute
    //     backgroundColor: 'white',
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'gray' : 'white'
    }

    // const toggleStyle = () => {
    //     if(myStyle.color === 'white')
    //     {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })

    //         setBtnText("Enable Dark Mode");
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid white'
    //         })

    //         setBtnText("Disable Dark Mode")
    //     }
    // }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This React app is free to use so that a needy can perform the application that he/she want to with his/her text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Analyze your text seamlessly with the function provided to you for free.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            No neeed to download TextUtils as it is compatible to any browser in the world and device whether its Windows, Mac, Linux, Android, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div  className="container">
                <button onClick={toggleStyle} className="btn btn-success my-2">{btnText}</button>
            </div> */}
        </div>
    )
}
