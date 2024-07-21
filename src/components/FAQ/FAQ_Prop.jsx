import React, {FC} from 'react'

const FAQ_Prop = ({ question, answer }) => {
  return (
    <div className="container flex flex-col justify-center px-4 py-2">
        <div className="space-y-4">
            <details className="w-full rounded-lg">
                <summary className="px-4 py-2 focus:outline-none focus-visible:ri">{question}</summary>
                <p className="px-4 py-6 pt-0 ml-4 mt-2">{answer}</p>
            </details>
        </div>
    </div>
  )
}

export default FAQ_Prop