import React, { useRef, useState } from 'react'

export const ImageTest = () => {

    let file= ''
    const [base64Url, setBase64Url] =useState('')
    const [upload, setUpload]= useState(false)

    const convertBase64= archivo => {
        return new Promise((resolve, reject) => {
            const reader= new FileReader()
            
            if(archivo) {
                reader.readAsDataURL(archivo)
            }

            reader.onload= () => {
                
                resolve(reader.result)
            }

            reader.onerror= error => {
                reject(error)
            }
        })
    }

    const handleFileInputChange= async(e) => {
        file= e.target.files[0]

        const base64= await convertBase64(file)
        console.log(base64)
        setBase64Url(base64)
        setUpload(true)
    }
    console.log("data", file)
    
    const handleInsert=async(e) => {
        e.preventDefault()

        await fetch("http://127.0.0.1:5000/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "file": base64Url
            })
        })
        .then( res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
    <form onSubmit={handleInsert} >
        <input type="file" name='img' onChange={e => handleFileInputChange(e)} accept='image/jpg' />
        <button>Insert</button>
        <div>
        {
            upload && <img src={base64Url} />
        }
        </div>
        
    </form>
  )
}
