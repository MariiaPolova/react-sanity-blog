import React, {useState, useEffect} from 'react';
import sanityClient from '../client';
import {Link} from 'react-router-dom';

export default function Post() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            author->{
                name
            },
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => {
            console.log(data);
            setPost(data)
        })
        .catch((err) => console.error(err));
    }, [])

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-4xl flex justify-center py-5">Blog Posts Page</h1>
                <div className="grid md:grid-cols-2 lg-grid-cols-3 gap-8">
                    { post && post.map((post, index) => (
                        <article key={index}>
                            <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                            <span
                                className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                                key={index}>
                                <img src={post.mainImage.asset.url}
                                     alt={post.mainImage.alt}
                                     className="w-full h-full rounded-r object-cover absolute"
                                />
                                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                    <div className="text-gray-800 text-lg font-bold py-4 px-3 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                        {post.title}
                                        <div className="text-gray-800 text-sm font-bold text-red-100 bg-opacity-75">
                                            by {post.author.name}
                                        </div>
                                    </div>
                                </span>
                            </span>
                            </Link>
                        </article>
                    ))
                    }
                </div>
            </section>
        </main>
    );
}
