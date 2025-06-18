import React from 'react';

const TechBlog: React.FC = () => {

    return (
        <div className="max-w-screen-lg mx-auto">

            <main className="mt-12">
                {/* Featured Section */}
                <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
                    <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 rounded">
                        <img
                            src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                            className="rounded-md object-cover w-full h-64" alt="Main"/>
                        <span className="text-green-700 text-sm hidden md:block mt-4">Technology</span>
                        <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2">Ignorant branched humanity led now
                            marianne too.</h1>
                        <p className="text-gray-600 mb-4">Necessary ye contented newspaper zealously breakfast he
                            prevailed...</p>
                        <a href="#" className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">Read
                            more</a>
                    </div>
                    <div className="w-full md:w-3/7">
                        {[
                            {
                                img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
                                cat: 'Gadgets',
                                title: 'At every tiled on ye defer do...'
                            },
                            {
                                img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
                                cat: 'Bitcoin',
                                title: 'Fond his say old meet cold...'
                            },
                            {
                                img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
                                cat: 'Insights',
                                title: 'Advice me cousin an spring...'
                            },
                            {
                                img: 'https://images.unsplash.com/photo-1489844097929-c8d5b91c456e',
                                cat: 'Cryptocurrency',
                                title: 'Advice me cousin an spring...'
                            },
                        ].map((post, idx) => (
                            <div key={idx} className="rounded w-full flex flex-col md:flex-row mb-10">
                                <img src={post.img}
                                     className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                                     alt={post.cat}/>
                                <div className="bg-white rounded px-4">
                                    <span className="text-green-700 text-sm hidden md:block">{post.cat}</span>
                                    <div className="text-gray-800 font-semibold text-xl mb-2">{post.title}</div>
                                    <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">Short
                                        description...</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Posts */}
                <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
                    <h2 className="font-bold text-3xl">Latest news</h2>
                    <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">View
                        all</a>
                </div>
                <div className="block space-x-0 lg:flex lg:space-x-6">
                    {[
                        {
                            img: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422',
                            title: 'Put all speaking her delicate...'
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
                            title: 'Is at purse tried jokes...'
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
                            title: 'As dissuade cheerful overcame...'
                        },
                    ].map((post, idx) => (
                        <div key={idx} className="rounded w-full lg:w-1/3 p-4 lg:p-0">
                            <img src={post.img} className="rounded" alt="tech"/>
                            <div className="p-4 pl-0">
                                <h2 className="font-bold text-2xl text-gray-800">{post.title}</h2>
                                <p className="text-gray-700 mt-2">Short description...</p>
                                <a href="#" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto">Read
                                    more</a>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Popular Posts */}
                <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
                    <h2 className="font-bold text-3xl">Popular news</h2>
                    <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">View
                        all</a>
                </div>
                <div className="block space-x-0 lg:flex lg:space-x-6">
                    {[
                        {
                            img: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422',
                            title: 'Put all speaking her delicate...'
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
                            title: 'Is at purse tried jokes...'
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
                            title: 'As dissuade cheerful overcame...'
                        },
                    ].map((post, idx) => (
                        <div key={idx} className="rounded w-full lg:w-1/3 p-4 lg:p-0">
                            <img src={post.img} className="rounded" alt="tech"/>
                            <div className="p-4 pl-0">
                                <h2 className="font-bold text-2xl text-gray-800">{post.title}</h2>
                                <p className="text-gray-700 mt-2">Short description...</p>
                                <a href="#" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto">Read
                                    more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default TechBlog;