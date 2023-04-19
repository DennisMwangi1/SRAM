import { Alert } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Profile({ currentUser , friends}) {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const [showAlert, setShowAlert] = useState(false);
    const [pdfFiles, setPdfFiles] = useState(null);
    const fileInputRef = useRef(null);
    useEffect(() => {
        const fetchPdfFiles = async () => {
            const response = await axios.get(`http://127.0.0.1:3000/users/${currentUser.id}/pdf_files`);
            const pdfFiles = response.data;
            setPdfFiles(pdfFiles)
        };

        fetchPdfFiles();
    }, [refresh, currentUser.id]);


    const clearFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleClick = () => {
        setShowAlert(true);
    };

    const handleClose = () => {
        setShowAlert(false);
    };

    const handleFileChange = (event) => {
        setSelectedFiles([...selectedFiles, ...event.target.files]);
    };
    const handleFileUpload = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        selectedFiles.forEach((file) => {
            if (file.type !== "application/pdf") {
                alert("Invalid file type. Only PDF files are allowed.");
            } else {
                formData.append("pdf_file[file_data]", file);
                formData.append("pdf_file[name]", file.name);
                formData.append("pdf_file[user_id]", currentUser.id);
            }
        });

        try {
            const response = await fetch(`http://localhost:3000/pdf_files`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                handleClick();
                clearFileInput();
                setRefresh(!refresh);
            }
        } catch (error) {
            console.error(error);
        }

        setSelectedFiles([]);
    };
    const handlePdfClick = async (pdf) => {
        const response = await axios.get(`http://127.0.0.1:3000/pdf_files/${pdf.id}`);
        const blob = new Blob([response.data.file_data], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        console.log(response, blob, url);
        const link = document.createElement('a');
        link.href = url;
        link.download = pdf.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    };
    console.log(currentUser);


    return (
        <section class="h-100 gradient-custom-2">
            <div class="container py-4 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-lg-9 col-xl-7">
                        <div class="card bg-slate-100">
                            <div className='flex justify-between '>
                                <a href='/' className='p-2 text-right'><i className="fa fa-home text-4xl"></i></a>
                                    <a href="/connect" className='p-1'><span class="text-5xl material-symbols-outlined">
                                        groups
                                    </span></a>
                                    <a href="/friends" className='p-2 '><span class="text-4xl material-symbols-outlined">
                                    forum
                                </span></a>
                                
                            </div>

                            {showAlert && (
                                <Alert severity="success" onClose={handleClose}>
                                    Added successfully!!
                                </Alert>
                            )}
                            <div class="rounded-top text-white d-flex flex-row" >
                                <div className="flex justify-around ml-8" >
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="" width="100px" className="img-fluid img-thumbnail mt-4 mb-2 rounded-full"
                                    />
                                    <div class="pt-10 ml-8 text-black">
                                        <h5 className='font-semibold'>{currentUser.first_name} {currentUser.last_name}</h5>
                                        <p><span className='text-sm'>email:</span>{currentUser.email}</p>
                                        <p><span className='text-sm'>Location:</span> {currentUser.location}</p>
                                        <p><span className='text-sm'>Company:</span>{currentUser.work_station}</p>
                                        
                                    </div>


                                </div>

                            </div>
                            <div className="p-4 text-black" >
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <p className="mb-1 h5">{pdfFiles?.length === 0?0:pdfFiles?.length}</p>
                                        <p className="small text-muted mb-0">PDF Files</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="mb-1 h5">{friends?.length === 0? 0:friends?.length}</p>
                                        <p className="small text-muted mb-0">Friends</p>
                                    </div>

                                </div>
                            </div>
                            <div className="card-body  text-black">
                                <div className="mb-5 ">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <div className="italic" >
                                        {currentUser.about}
                                    </div>
                                </div>
                                <div className=" mb-4">
                                    <p className="text-center font-semibold text-2xl mb-0">Your Files</p>
                                    <div className='grid grid-cols-1 mt-2'>
                                        <input
                                            className='text-sm'
                                            name='pdf_file'
                                            type="file"
                                            onChange={handleFileChange}
                                            multiple
                                            accept=".pdf"
                                            ref={fileInputRef}
                                        />
                                        <div className=''>
                                            <button className='rounded-full bg-sky-300 text-black text-sm p-2 mr-1  mt-2 hover:bg-blue-400 hover:text-white ' onClick={clearFileInput}>Clear selected</button>
                                            <button className='rounded-full bg-sky-300 text-black text-sm p-2 mt-2 hover:bg-blue-400 hover:text-white ' onClick={handleFileUpload}>Upload Files</button>
                                        </div>
                                    </div>
                                    <div className='mt-8 grid grid-cols-3 gap-4'>
                                        {pdfFiles && pdfFiles.map((pdf) => (
                                            <div className='bg-slate-300 text-center rounded-lg p-1' key={pdf.id}>
                                                <p>{pdf.name}</p>
                                                <button className='rounded-md bg-slate-400 text-black text-sm p-1 mr-1  mt-2 hover:bg-slate-500 hover:text-white ' onClick={() => handlePdfClick(pdf)}>Download</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile