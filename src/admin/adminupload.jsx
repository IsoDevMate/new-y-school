import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"




const adminupload = ({ className }) => {
  const [files, setFiles] = useState([])
  const [rejected, setRejected] = useState([])
  const [percent, setPercent] = useState(0)
    const [url, setUrl] = useState(null)
const [msg, setMsg] = useState(null)

  //avoid repeated rerendering on componnet call 
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles(previousFiles => [
        ...previousFiles,
        ...acceptedFiles.map(file =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      ])
    }

    if (rejectedFiles?.length) {
      setRejected(previousFiles => [...previousFiles, ...rejectedFiles])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
        'video/*': [],
        'text/html': [],

    },
    maxSize: 1024000 * 1000,
    onDrop
  })

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])

  const removeFile = name => {
    setFiles(files => files.filter(file => file.name !== name))
  }

  const removeAll = () => {
    setFiles([])
    setRejected([])
  }

  const removeRejected = name => {
    setRejected(files => files.filter(({ file }) => file.name !== name))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!files?.length) return


    const storageRef = ref(storage, `/videosandfiles/${files.name}`)
    const uploadTask = uploadBytesResumable(storageRef, files);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
 
            // update progress
            setPercent(percent);
            console.log(percent);
            setFiles([]);

        },
        (err) => console.log(err),
        () => {
            console.log("success!!")
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                setUrl(url);
            });
        }
    );
    }



  return (
    <div className='container mx-auto px-4'>
    <form onSubmit={handleSubmit}>
      <div
        {...getRootProps({
          className: className
        })}
      >
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center gap-4 p-4 border-2 border-dashed rounded-md border-neutral-200'>
          <ArrowUpTrayIcon className='w-5 h-5 fill-current' />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop files here, or click to select files</p>
          )}
        </div>
      </div>

      {/* Preview */}
      <section className='mt-10'>
        <div className='flex gap-4'>
          <h2 className='title text-3xl font-semibold justify-center text-neutral-600 place-items-center align-middle'>Preview</h2>
          <button
            type='button'
            onClick={removeAll}
            className='mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-red-400 rounded-md px-3 hover:bg-red-400 hover:text-white transition-colors'
          >
            Remove all files
          </button>
          <button
            onClick={handleSubmit}
            type='submit'
            className='ml-auto mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-orange-400 rounded-md px-3 hover:bg-orange-400 hover:text-white transition-colors'
            
          >
            Upload to Yafreeka
          </button>
        </div>

        {/* Accepted files */}
        <h3 className='title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3'>
          Accepted Files
        </h3>
        <ul className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 '>
          {files.map(file => (
            <li key={file.name} className='relative h-32 rounded-md shadow-lg'>
              <img   
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview)
                }}
                className='h-full w-full object-contain width-100  rounded-md  transition-all duration-200 ease-in-out'
              />
              <button
                type='button'
                className='w-7 h-7 border border-red-400 bg-red-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors'
                onClick={() => removeFile(file.name)}
              >
                <XMarkIcon className='w-5 h-5 fill-white hover:fill-red-400 transition-colors' />
              </button>
              <p className='mt-2 text-neutral-500 text-[12px] font-medium'>
                {file.name}
              </p>
            </li>
          ))}
        </ul>

        {/* Rejected Files */}
        <h3 className='title text-lg font-semibold text-neutral-600 mt-24 border-b pb-3'>
          Rejected Files
        </h3>
        <ul className='mt-6 flex flex-col'>
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className='flex items-start justify-between'>
              <div>
                <p className='mt-2 text-neutral-500 text-sm font-medium'>
                  {file.name}
                </p>
                <ul className='text-[12px] text-red-400'>
                  {errors.map(error => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type='button'
                className='mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-red-400 rounded-md px-3 hover:bg-sred-400 hover:text-white transition-colors'
                onClick={() => removeRejected(file.name)}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </form>
    </div>
  )
}



export default adminupload