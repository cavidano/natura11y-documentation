import React from 'react';

const SpacingExample = () => {
    return (
        <div className="container medium margin-y-4">            
            <div className="flex-row justify-content-start align-items-end text-align-center font-size-sm">
                <div className="width-25">
                    <div className="theme-primary border width-100" style={{'height':'var(--spacer-1)'}}></div>
                    <span className="display-block margin-top-1">1</span>
                </div>
                <div className="width-25">
                    <div className="theme-primary border width-100" style={{'height':'var(--spacer-2)'}}></div>
                    <span className="display-block margin-top-1">2</span>
                </div>
                <div className="width-25">
                    <div className="theme-primary border width-100" style={{'height':'var(--spacer-3)'}}></div>
                    <span className="display-block margin-top-1">3</span>
                </div>
                <div className="width-25">
                    <div className="theme-primary border width-100" style={{'height':'var(--spacer-4)'}}></div>
                    <span className="display-block margin-top-1">4</span>
                </div>
                <div className="width-25">
                    <div className="theme-primary border width-100" style={{'height':'var(--spacer-5)'}}></div>
                    <span className="display-block margin-top-1">5</span>
                </div>
            </div>
        </div>
    );
}

export default SpacingExample;
