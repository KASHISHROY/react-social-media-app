import { useContext ,useEffect, useState} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Message from "./Message"
const PostList=()=>{
    const{postList,addInitialPosts}=useContext(PostListData);
    
    const[fetching,setFetching]=useState(false);
    
       useEffect(()=>{
        setFetching(true);
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data=>{
            addInitialPosts(data.posts);
            setFetching(false);
        });},[])
        
    
    
    
    return (
        <>
        {
            postList.length === 0 && <Message />
        }
        {postList.map((post)=>(
            <Post key={post.id} post={post}></Post>))}
        </>
    )
};
export default PostList;