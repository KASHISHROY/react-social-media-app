const Message=({onGetPostClick})=>{
  return <center className="welcome-message"> <h1 >There are no posts.
  <button type="button" className="btn btn-primary" onClick={onGetPostClick}>Get Posts From Server</button>
  </h1></center> 
}
export default Message;