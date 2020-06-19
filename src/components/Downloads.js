import React from 'react'
import './Downloads.css'
import appstore from './appstore.png'
import googleplay from './googleplay.png'

const Downloads = ({links}) => (
    <div className="downloads">
        <a href={links.android}>
            <img src={googleplay} alt="googleplay"></img>
        </a>
        <a href={links.ios}>
            <img src={appstore} alt="appstore"></img>
        </a>
    </div>
)

export default Downloads