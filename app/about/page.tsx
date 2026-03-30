import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Simple Next Js App'
}

function About() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4 mt-2">About Page</h1>
    </div>
  )
}

export default About