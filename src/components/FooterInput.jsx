import React from 'react';

const FooterInput = () => {
    return ( 
        <div class="row mt-4 mx-5">
        <div class="col-sm-6 col-md-5 col-lg-6">
          <h2>Ready to grow your business? </h2>
          <p className="font-weight-light">
            {" "}
            Join over 4,000+ startups already growing with Untitled
          </p>
        </div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
          <div class="input-group w-50 ">
            <input
              type="text"
              class="form-control border-2 border-success rounded "
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button className="btn btn-success  " type="button">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default FooterInput;