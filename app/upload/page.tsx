'use client'

import { CldImage, CldUploadWidget } from 'next-cloudinary'
import React, { useState } from 'react'

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {

    const [publicId, setPublicId] = useState('')

    return (
    <>
        {publicId && <CldImage src={publicId} width={270} height={180} alt='water drop'/>}
        <CldUploadWidget
         onSuccess={(result, {widget}) => {
            // console.log(result?.info)

            // lets check our result with
            if(result.event !== 'success') return;
            const info = result.info as CloudinaryResult
            setPublicId(info.public_id)
         }}
         uploadPreset='gdueeerc'>
            {({open}) => <button className='btn btn-primary' onClick={()=> open()}>Upload</button>}
        

        </CldUploadWidget>
    </>
  )
}

export default UploadPage
