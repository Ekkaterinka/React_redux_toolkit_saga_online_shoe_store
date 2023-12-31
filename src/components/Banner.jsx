import React from 'react'

export default function Banner() {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <div className="banner">
                            <img
                             src="./image/banner.jpg" 
                             className="img-fluid" alt="К весне готовы!" />
                            <h2 className="banner-header">К весне готовы!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
