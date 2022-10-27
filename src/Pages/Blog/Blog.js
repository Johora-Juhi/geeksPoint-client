import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="text-center text-red-400 text-5xl font-bold">
                <h1>Blogs</h1>
            </div>
            <div className="px-2">
                <div className="container mx-auto py-6">
                    <div className='mt-10 rounded-t-2xl border border-red-400 bg-red-50 p-5 shadow-md'>
                        <h3 className='text-2xl font-semibold'>-- What is cors --</h3>
                        <p className='text-gray-600 mt-4 tracking-wide leading-7'>Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                    </div>
                    <div className='mt-10 border border-red-400 bg-red-50 p-5 shadow-md'>
                        <h3 className='text-2xl font-semibold'>-- Why are you using firebase? What other options do you have to implement authentication --</h3>
                        <p className='text-gray-600 mt-4 tracking-wide leading-7'>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Firebase is a backend platform for building Web, Android and IOS applications. It offers real time database, different APIs, multiple authentication types and hosting platform. This is an introductory tutorial, which covers the basics of the Firebase platform and explains how to deal with its various components and sub-components.<br></br>The steps for implementing firebase: Step 1: Create a Firebase project and register your app. Step 2: Install the SDK and initialize Firebase. Step 3: Access Firebase in your app. </p>
                    </div>
                    <div className='mt-10 border border-red-400 bg-red-50 p-5 shadow-md'>
                        <h3 className='text-2xl font-semibold'>-- How does the private route work --</h3>
                        <p className='text-gray-600 mt-4 tracking-wide leading-7'>The react private route component renders child components children if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. The current logged in user authUser is retrieved from Redux state with a call to the useSelector hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
                    </div>
                    <div className='mt-10 rounded-b-2xl border border-red-400 bg-red-50 p-5 shadow-md'>
                        <h3 className='text-2xl font-semibold'>-- What is Node? How does Node work --</h3>
                        <p className='text-gray-600 mt-4 tracking-wide leading-7'>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;