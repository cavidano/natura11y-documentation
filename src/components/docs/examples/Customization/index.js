import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

function PracticeExercise(props) {

    const { setCustomStyles } = props;

    const customStyles = {
        '--primary': '#00A870',
        '--secondary': '#004857',
        '--dark': '#131B40',
        '--light': '#e6ebed',
        '--primary-text': 'var(--dark)',
        '--secondary-text': 'white',
        '--dark-text': 'white',
        '--light-text': 'var(--dark)',
        '--white-text': 'var(--dark)',
    }

    return (
        <div className="overflow-hidden" style={setCustomStyles ? customStyles : exampleStyles}>

            <div className="container narrow margin-y-5">

                <div className="theme-primary padding-3 margin-y-2">
                    <p>Primary</p>
                </div>

                <div className="theme-secondary padding-3 margin-y-2">
                    <p>Secondary</p>
                </div>
                
                <div className="theme-dark padding-3 margin-y-2">
                    <p>Dark</p>
                </div>
                
                <div className="theme-light padding-3 margin-y-2">
                    <p>Light</p>
                </div>

            </div>

        </div>
    );
}

PracticeExercise.defaultProps = {
    setCustomStyles: false
}

export default PracticeExercise;