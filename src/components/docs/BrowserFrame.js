import React, { useRef } from 'react';

const BrowserFrame = (props) => {

    const { frameSrc, frameWidth } = props;

    const iframeRef = useRef();

    const iframeOnLoad = () => {
        
        const iframe = iframeRef;

        let iframeHeight = iframe.current.contentDocument.body.scrollHeight;

        iframeRef.current.style.height = iframeHeight + 'px';
    }
    
    return (
        <figure className={`container ${frameWidth} margin-y-4`}>

            <div className="browser box-shadow-1">

                <div className="browser__bar">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <iframe
                    aria-hidden="true"
                    src={frameSrc}
                    onLoad={iframeOnLoad}
                    ref={iframeRef}>    
                </iframe>

            </div>

        </figure>
    )
}

BrowserFrame.defaultProps = {
    frameWidth: 'medium',
    frameSrc: '../../examples/iframe-example.html'
}

export default BrowserFrame;