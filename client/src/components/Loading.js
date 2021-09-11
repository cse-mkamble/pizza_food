import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className="text-center">
                <div className="spinner-border" role="status" style={{ height: '100px', width: '100px', marginTop: '100px' }} >
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </div>
    )
}

export default Loading