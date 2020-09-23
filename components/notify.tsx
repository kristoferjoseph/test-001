import React, { useState } from 'react'

const NotifyForm = (props: NotifyFormProps) => {
    const { buttonClass, textClass } = props
    const [email, setEmail] = useState('')
    const [showForm, setShowForm] = useState(false)

    const onClick = () => {
        setShowForm(!showForm)
        setEmail('')
    }

    return (
        <div>
            {!showForm &&
                <button
                    className={`custom-btn transition-all duration-300 hover:bg-gray-400 hover:text-lightGreen-200 md:px-6 sm:px-4 focus:outline-none ${buttonClass}`}
                    type="button"
                    onClick={() => setShowForm(!showForm)}>
                    get tickets
                </button>
                || <div className="flex sm:flex-wrap md:flex-no-wrap sm:p-4 md:p-0">
                    <input
                        className="py-2 px-6 md:mr-2 sm:w-full md:w-auto sm:mb-4 md:mb-0 flex-grow border-solid border-2 text-xl border-black focus:outline-none"
                        value={email}
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        className="m-auto bg-black text-white py-2 px-12 uppercase text-xl focus:outline-none"
                        onClick={() => onClick()}>
                        Submit
                    </button>
                </div>}
            <p className={`text-1-2 pt-3 ${textClass}`}>Free - $199</p>
        </div>
    )
}

export default NotifyForm

type NotifyFormProps = {
    buttonClass: string,
    textClass: string
}
