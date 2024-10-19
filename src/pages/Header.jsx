import 'bootstrap'
import React from 'react';

function Header(){
    return(
         <>  
                <div className="container">
  <header className="row align-items-center py-2">
    <div className="col-6 col-md-4">
      <img src="/src/assets/images/image 650 1.png" alt="cuvette" className="cuvette img-fluid" />
    </div>
    <div className="col-6 col-md-8 text-end">
      <span className="contact">Contact</span>
    </div>
  </header>
</div>

    
        </>
    )
}

export default Header;