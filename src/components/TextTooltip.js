import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

class TextTooltip extends React.Component {
    render() {
        return (
            <OverlayTrigger overlay={
                <Tooltip>{this.props.text}</Tooltip>
            }>
                <span className="has-tooltip">{this.props.children}</span>
            </OverlayTrigger>
        );
    }
}

export default TextTooltip;
