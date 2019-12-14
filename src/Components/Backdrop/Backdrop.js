import React from 'react';

const Backdrop = (props) => {
    return (
        <section className="landing LoginForm">
        <div className="dark-overlay">
          <div className="landing-inner">
            {props.children}
          </div>
        </div>
      </section>
    )
}

export default Backdrop;