import React from 'react'

function NotFound() {
    return (
        <div className="container text-center my-5 py-5">
            <div className="display-2 mt-5 pt-5">
                <span className="text-danger">Oops! </span> it's a 404
            </div>
            <div className="lead pt-2 pb-5 mb-5">
                Couldn't find what you're looking for...
            </div>
        </div>
    )
}

export default NotFound;