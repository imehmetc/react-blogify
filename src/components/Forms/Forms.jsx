import React, { useContext, useState } from 'react'
import '../Forms/forms.scss'
import DataContext from '../../context/DataContext';

const Forms = () => {
    const { handleSubmit, categories, title, content, imageUrl, userEmail, likeCount, viewCount, userCommentCount, category, setTitle, setCategory, setImageUrl, setLikeCount, setViewCount, setUserCommentCount,setContent, setUserEmail } = useContext(DataContext);

  return (
    <form className='blog-form' onSubmit={handleSubmit}>
        <h2>New Blog</h2>
        <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}  required/>
        <textarea rows={6} placeholder='Content' value={content} onChange={e => setContent(e.target.value)}  required></textarea>
        <select value={category} onChange={e => setCategory(e.target.value)} required>
          <option>Select a Category</option>
          {
            categories.map(category => 
              category.categoryName !== "All Categories" &&
              <option key={category.id}>{category.categoryName}</option>
            )
          }          
        </select>
        <input type="text" placeholder='Image (URL)' value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
        <input type="text" placeholder='User Email' value={userEmail} onChange={e => setUserEmail(e.target.value)} required/>
        <input type="number" placeholder='Like Count' value={likeCount} onChange={e => setLikeCount(e.target.value)} required/>
        <input type="number" placeholder='View Count' value={viewCount} onChange={e => setViewCount(e.target.value)}  required/>
        <input type="number" placeholder='User Comment Count' value={userCommentCount} onChange={e => setUserCommentCount(e.target.value)}  required/>

        <input type="submit" value={"Publish"}/>
    </form>
  )
}

export default Forms