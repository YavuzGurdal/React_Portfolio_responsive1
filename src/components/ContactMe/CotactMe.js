import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ContactMe extends Component {
    render() {
        return (
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 70
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
        );
    }
}

export default ContactMe;