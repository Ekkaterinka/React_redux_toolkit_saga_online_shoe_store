import React from 'react'

export default function Loader({ loading }) {
    return (
        <>
            {loading && <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>}
        </>
    )
}
