import React from 'react';

const SproutingAlert = () => {
  return (
      <div className="container narrow">

        <div
            className="alert alert--confirm--inverse border-radius"
            aria-labelledby="alert-confirm-label"
            aria-describedby="alert-confirm-description"
            role="alert">

            <div className="alert__title h6">
                <span className="icon icon-warn" aria-hidden="true"></span>
                <span className="alert__title__text" id="alert-confirm-label">
                    Natura11y is still sprouting
                </span>
            </div>

            <div className="alert__description" id="alert-confirm-description">
                <p>
                    This page may appear incomplete. I appreciate your patience while I continue writing Natura11y's documentation.
                </p>
            </div>

        </div>

      </div>
  );
}

export default SproutingAlert;