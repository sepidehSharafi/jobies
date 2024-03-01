import { useState } from "react"
import PostList from "./PostList"
import PostModal from "./PostModal"

const MyBlog = ()=>{
 const [post , setPost] =  useState("")
 const [postModal , setPostModal] =  useState(false)


const closePostModal = ()=> {
setPostModal(false)
}
const addPost = (newPost)=> {
    const newValue = post('/posts', { post })
    setPost(newValue)
    }
const showPostModal = ()=>{
setPostModal(true)
}
// const sort = ()=>{
//    const sortedPosts = [...posts].sort()
//    setPosts(sortedPosts)
//     // const sortedPost = [...posts].sort((a,b)=>{
//     //     return a.title - b.title
//     // })
//     // setPosts(sortedPost)
// }
const sort = () => {
    const sortedPosts = [...posts].sort((a, b) => {
        // مقایسه عنوان‌ها به صورت حروف الفبا
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });

    setPosts(sortedPosts);
};


 return<>
 {
   postModal && <  PostModal close={closePostModal} onAdd={addPost} />
 }
 <button onClick={showPostModal} className="button" >Add New Post</button>
 <button onClick={sort} className="button">Sort</button>
 <PostList list={posts} /> 
 </>
}
export default MyBlog