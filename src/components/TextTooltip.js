import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TextTooltip(props) {
    return (
        <OverlayTrigger overlay={
            <Tooltip>{props.text}</Tooltip>
        }>
            <span className="has-tooltip">{props.children}</span>
        </OverlayTrigger>
    );
}

export default TextTooltip;
