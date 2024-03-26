import { useContext } from "react"
import { AppContext } from "../context/AppContext"
 import Spinner  from "./Spinner"; 
export default function Blog() {

    // comsume 
    const { posts, loading  } = useContext(AppContext);

    return (
        <div className="w-11/12 max-w-[630px] min-h-screen py-3 flex flex-col  gap-y-7 mt-[64px] mb-[70px]  justify-center items-center">
            {
                loading
                    ? (<Spinner />)
                    : ( 
                        posts.length === 0 ?
                            (<div>
                                <p>No post found</p>
                            </div>)

                            : (
                                posts.map((post) => (

                                    <div key={post.id}>
                                        <p className="font-bold text-sm">{post.title}</p>
                                        <p className="text-[10px] mt-[2px]">
                                            By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
                                        </p>
                                        <p className="text-[12px] ">Posted on {post.date}</p>
                                        <p className="text-sm mt-[10px]">{post.content}</p>


                                        <div className="flex gap-x-2 mt-[3px]">
                                            {
                                                post.tags.map((tag , index) => {
                                                    return <span className="text-blue-700 text-xs underline font-bold" key={index}>{`#${tag}`}</span> 
                                                })
                                            }
                                        </div>
                                    </div>
                                     

                                ))
                            )
                    )
            }

        </div>
    )
}