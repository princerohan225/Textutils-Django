import React  from 'react'
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'


export default function About(props) {
    // const [mystyle, setMyStyle] = useState({

    //     color: 'black',
    //     backgroundColor: 'white'

    // })

    // const [btnText, setBtnText] = useState('Enable Dark Mode')

    // let toggleSwitch = () => {
    //     if (mystyle.color !== 'white') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white',
    //             borderRadius: '7px',
    //         })
    //         setBtnText('Enable Light Mode')
    //     }

    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',

    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    // }

    return (
        <>

            <div className='container my-2 py-3' style={{color: props.mode!=='dark'? "black":'white'}}>

                <h1 className='my-2'>List Items</h1>
                <ul className="list-group">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </div>

            {/* <div className='container my-2'>
                <button type='submit' onClick={toggleSwitch} className='btn btn-primary'>{btnText}</button>
            </div> */}
        </>
    )
}
