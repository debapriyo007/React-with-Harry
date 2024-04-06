import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
        <Script>
            {`alert("Well Come to Contact Page.");`}
        </Script>
        This is CONATCT page
    </div>
  )
}

export default contact
export const metadata = {
    title: "Contact Page Facebook",
    description: "Conatact Page Facebook - Connect with the world",
  };