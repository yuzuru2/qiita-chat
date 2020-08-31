import * as React from 'react';

export default () => {
  return (
    <>
      <div>
        <div className="position-absolute h-100 w-100 m-0 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};
