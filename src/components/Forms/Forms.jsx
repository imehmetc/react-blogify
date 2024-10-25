import React, { useContext } from 'react'
import '../Forms/forms.scss'
import DataContext from '../../context/DataContext';
import AuthContext from '../../context/AuthContext';



const Forms = () => {
    const { handleSubmit, categoryData, title, content, imageUrl, userEmail, likeCount, viewCount, userCommentCount, category, dispatch } = useContext(DataContext);
    const { isAuthenticated } = useContext(AuthContext);

  return (
    isAuthenticated !== "null" &&
    <form className='blog-form' onSubmit={handleSubmit}>
        <h2>New Blog</h2>
        <input type="text" placeholder='Title' value={title} onChange={e => dispatch({type: "setTitle", payload: e.target.value})}  required/>
        <textarea rows={6} placeholder='Content' value={content} onChange={e =>dispatch({type: "setContent", payload: e.target.value})}  required></textarea>
        <select value={category} onChange={e => dispatch({type: "setCategory", payload: e.target.value})} required>
          <option>Select a Category</option>
          {
            categoryData.map(category => 
              category.categoryName !== "All Categories" &&
              <option key={category.id}>{category.categoryName}</option>
            )
          }          
        </select>
        <input type="text" placeholder='Image (URL)' value={imageUrl} onChange={e => dispatch({type: "setImageUrl", payload: e.target.value})}/>
        <input type="text" placeholder='User Email' value={userEmail} onChange={e => dispatch({type: "setUserEmail", payload: e.target.value})} required/>
        <input type="number" placeholder='Like Count' value={likeCount} onChange={e => dispatch({type: "setLikeCount", payload: e.target.value})} required/>
        <input type="number" placeholder='View Count' value={viewCount} onChange={e => dispatch({type: "setViewCount", payload: e.target.value})} required/>
        <input type="number" placeholder='User Comment Count' value={userCommentCount} onChange={e => dispatch({type: "setUserCommentCount", payload: e.target.value})}  required/>

        <input type="submit" value={"Publish"}/>
    </form>
  )
}

export default Forms