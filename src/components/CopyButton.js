import React from 'react';
import Button from 'react-bootstrap/Button';
import toast from 'react-hot-toast';
import { FaLink } from 'react-icons/fa';

class CopyButton extends React.Component {
    constructor(props) {
        super(props);

        this.copyURL = this.copyURL.bind(this);
    }

    copyURL() {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Copied!");
    }

    render() {
        return (
            <p>
                <Button id="copy-button" size="sm" onClick={this.copyURL}>
                    <FaLink /> Copy Share Link
                </Button>
            </p>
        );
    }
}

export default CopyButton;
