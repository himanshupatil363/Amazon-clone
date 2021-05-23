import React from 'react'

const footer = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-gray-600 text-white flex justify-center p-3">Back to top</div>
            <div className="bg-gray-800 text-white flex justify-around px-80 pt-12">
                <span className="flex flex-col"><p className="font-bold">Get to Know us</p><p>about us</p><p>careers</p></span>
                <span className="flex flex-col"><p className="font-bold">Connect with us</p><p>Facebook</p><p>Twitter</p></span>
                <span className="flex flex-col"><p className="font-bold">Make money with us</p><p></p><p></p></span>
                <span className="flex flex-col"><p className="font-bold">Let us Help you</p><p></p><p></p></span>
            </div>
        </div>
    )
}

export default footer
