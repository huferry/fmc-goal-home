import React from 'react'
import './Welcome.css'
import mockup from './mockup.png'
import { Jumbotron, Button } from 'react-bootstrap'

const Welcome = ({links}) => (
    <Jumbotron className="welcome text-light">
        <div className="welcome-mockup">
            <img className="mockup-image" src={mockup} alt="mockup"/>
        </div>
        <div className="welcome-text">
            <h1>Take your Goal everywhere!</h1>
            <p className="text-light">
                Life without a Goal is like having a fancy map without knowing where to go.
                Grab your Goal app and enjoy your meaningful life!            
            </p>
            <div className="text-right">
                <Button variant="outline-warning" className="mb-4">
                    <a href={ links.os === 'OS_ANDROID' ? links.android : links.ios }>Get the app!</a>
                </Button>        
            </div>
            <p className="text-right">[ <i>Goal is the name of Fullgospel Mission Church's weekly newsletter. Get new 
                sermon message from our paster every Sunday and learn to know God more every day! </i> ]
            </p>
        </div>
    </Jumbotron>
)

export default Welcome