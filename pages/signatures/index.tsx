import NextHead from 'next/head'
import * as React from 'react'
import Footer from '../../src/components/Footer'
import NavBar from '../../src/components/NavBar'
import Signatures from '../../src/components/Signatures'

const SignaturesPage = () => {
    
    return(
        <>
            <NavBar />
            <NextHead>
                <title>Image Tracker | Signatures</title>
            </NextHead>
            <Signatures />
            <Footer />
        </>
    )
}


export default SignaturesPage