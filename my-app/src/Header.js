import React from 'react';

class Header extends React.Component {
    render(){
        return ( 
            <nav className = "relative mx-auto bg-zinc-500 max-w-auto py-4 px-4">
                <div className="container mx-auto">
                    <h1 className="text-white text-center text-3xl pb-4"> Search Movie App </h1>
                </div>
            </nav>
    
        )
    }
}

export default Header