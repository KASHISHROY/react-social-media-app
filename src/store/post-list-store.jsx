import { createContext,useReducer } from "react";


export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});
const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==="DELETE_POST"){
        newPostList=currPostList.filter(post=>post.id !== action.payload.postId);
    }
return newPostList;
}

const PostListProvider=({children})=>{
   const[postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST); 
   
const addPost=()=>{

    }
    const deletePost=(postId)=>{
            dispatchPostList({
                type:"DELETE_POST",
                payload:{
                    postId,
                },
            });
    }


return <PostList.Provider value={{
    postList:postList,
    addPost:addPost,
    deletePost:deletePost
}}>
    {children}
</PostList.Provider>;
};


const DEFAULT_POST_LIST=[{
    id:'1',
    title:"Going To Mumbai",
    body:"Hi Friends,I am going to Mumbai for vacations.Hope to enjoy a lot.Peace out",
    reactions:2,
    userId:"user-9",
    tags:["vacation","Mumbai","Enjoying"],  
},
{
    id:'2',
    title:"Pass ho bhai!",
    body:"4 saal ki masti k baad bhi ho gaye hai pass.Hard to believe",
    reactions:15,
    userId:"user-12",
    tags:["Graduating","Unbelievable"],  
},

];



export default PostListProvider;