import React from 'react';
import { FaBusinessTime, FaCertificate, FaChild, FaCrown, FaDollarSign, FaFacebook, FaFileDownload, FaGithub, FaLaptopCode, FaLinkedin, FaTape, FaTwitter, FaVideo } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    const { _id, image, title, description, author, price, totalEnrolled, completed, videos, videoDuration
    } = course;
    return (
        <div ref={ref} className=" ">
            <div className="container mx-auto py-10">
                <h1 className='flex items-center text-2xl lg:text-4xl font-bold text-sky-900'><FaLaptopCode className='inline mr-3 ml-10 text-4xl text-sky-900'></FaLaptopCode> <span>Start Your {title} Course</span></h1>
                <div className="rating rating-sm rating-half ml-8 mt-3">
                    <input type="radio" name="rating-10" className="rating-hidden" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" checked />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-5'>
                    <div className='col-span-2'>
                        <figure><img className='mx-auto rounded-lg' style={{ width: '500px' }} src={image} alt="course" /></figure>
                        <div className='px-10 py-10'>
                            <div className='flex justify-between items-center pb-3'>
                                <h2 className='text-3xl font-medium mb-3'>Why {title}!!</h2>
                                <Pdf targetRef={ref} filename="geeksPoint.pdf">
                                    {({ toPdf }) => <button onClick={toPdf} className="btn btn-outline btn-accent text-sky-900 text-center"><FaFileDownload className='inline'></FaFileDownload></button>}
                                </Pdf>
                            </div>
                            <p className='text-justify text-stone-400 text-lg'>{description}</p>
                            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 bg-sky-50 rounded-tl-3xl rounded-br-3xl border border-sky-900 mt-5 p-6">
                                <div className='text-center'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={author.img} />
                                        </div>
                                    </div>
                                    <p className='font-bold'>{author.name}</p>
                                </div>
                                <div>
                                    <h2 className='text-xl font-medium  pt-3 mb-3'>Course Details</h2>
                                    <div className='flex items-center mb-1'><FaVideo className='text-sky-900 mr-3'></FaVideo>Total Videos: {videos}</div>
                                    <div className='flex items-center mb-1'><FaTape className='text-sky-900 mr-3'></FaTape>Video Duration: {videoDuration}</div>
                                </div>
                                <div className='pb-3'>
                                    <h2 className='text-xl font-medium pt-3 mb-3'>You'll Get</h2>
                                    <div className='flex items-center mb-1'><FaBusinessTime className='text-sky-900 mr-3'></FaBusinessTime>Lifetime Access</div>
                                    <div className='flex items-center mb-1'><FaCertificate className='text-sky-900 mr-3'></FaCertificate>Certification</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='rounded border border-sky-900 mx-auto lg:mx-0 p-5 w-full lg:w-5/6 '>
                            <h2 className='text-xl font-medium  mb-3 text-sky-900 '>Course Enroll Details</h2>
                            <div className='pl-3 pb-2'>
                                <div className='flex items-center mb-1'><FaDollarSign className='text-sky-900 mr-3'></FaDollarSign>Price: ${price}</div>
                                <div className='flex items-center mb-1'><FaChild className='text-sky-900 mr-3'></FaChild>Total Enrolled: {totalEnrolled}</div>
                                <div className='flex items-center mb-1'><FaCrown className='text-sky-900 mr-3'></FaCrown>Successfully Completed: {completed}</div>
                            </div>
                            <div className='text-center my-3'>
                                <Link className='btn btn-accent text-slate-50 ' to={`/startCourse/${_id}`}>Get premium acccess</Link>
                            </div>
                            <ul className="menu w-56 ">
                                <li> <Link><FaFacebook className='text-sky-900 mr-3'></FaFacebook> Follow on Facebook</Link></li>
                                <li> <Link><FaGithub className='text-sky-900 mr-3'></FaGithub> Follow on Github</Link></li>
                                <li> <Link><FaLinkedin className='text-sky-900 mr-3'></FaLinkedin> Follow on LinkedIn</Link></li>
                                <li> <Link><FaTwitter className='text-sky-900 mr-3'></FaTwitter> Follow on Twitter</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;