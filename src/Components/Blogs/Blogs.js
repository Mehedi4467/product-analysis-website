import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full py-10'>
            <div className='w-full md:w-1/2 shadow-lg p-4 rounded-lg mx-auto'>
                <div>
                    <h2 className='text-lg font-bold text-blue-500'>What is ContextAPI? </h2>
                    <p className='p-4 text-zinc-500'>ContextApi has come up with a solution to the problem of prop drilling. Props dealing is the process of sending data from one component to another. In this case, if there is more than one component below the component from which the data is sent, then all of them have to send data through props. If we want to send data to a special component then data can be sent through props but the problem here is that the component that wants to send data has to give data to its parent component through props.We use contextApi to solve this problem. Through which we can send data to any special component.</p>
                </div>
            </div>

            <div className='w-full md:w-1/2 shadow-lg p-4 rounded-lg mx-auto'>
                <div>
                    <h2 className='text-lg font-bold text-blue-500'>What is symmetric tag? </h2>
                    <p className='p-4 text-zinc-500'>With semantic tags we can more clearly understand the content of our page and what the content does. As a result, search engines like Google and Big can understand which subject is more important, which is navigation, which is header, which is article, which is footer, which is main content etc.</p>
                    <div className='w-9/12 mx-auto'>
                        <h2 className='font-semibold text-blue-500'>HTML5 Semantic Tags</h2>
                        <div className=' text-zinc-500'>
                            <li>Header element</li>
                            <li>Nav element </li>
                            <li>Main tag </li>
                            <li>Article element</li>
                            <li>Section element</li>
                            <li>Aside element</li>
                            <li>Footer element</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;