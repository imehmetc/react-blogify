import React, { useState } from 'react'
import '../Forms/forms.scss'

const Forms = ({blogs, addNewBlog}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [likeCount, setLikeCount] = useState("");
    const [viewCount, setViewCount] = useState("");
    const [userCommentCount, setUserCommentCount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Yeni blog ekleme
        addNewBlog({
            id: (Number(blogs[blogs.length - 1].id) + 1).toString(),
            title: title,
            content: content,
            imageUrl: imageUrl,
            userEmail: userEmail,
            likeCount: likeCount,
            viewCount: viewCount,
            userCommentCount: userCommentCount
        });

        // Formu resetleme
        setTitle("");
        setContent("");
        setImageUrl("");
        setUserEmail("");
        setLikeCount("");
        setViewCount("");
        setUserCommentCount("");
    };

  return (
    <form className='blog-form' onSubmit={handleSubmit}>
        <h2>New Blog</h2>
        <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}  required/>
        <textarea rows={6} placeholder='Content' value={content} onChange={e => setContent(e.target.value)}  required></textarea>
        <input type="text" placeholder='Image (URL)' value={imageUrl} onChange={e => setImageUrl(e.target.value)} required/>
        <input type="text" placeholder='User Email' value={userEmail} onChange={e => setUserEmail(e.target.value)} required/>
        <input type="number" placeholder='Like Count' value={likeCount} onChange={e => setLikeCount(e.target.value)} required/>
        <input type="number" placeholder='View Count' value={viewCount} onChange={e => setViewCount(e.target.value)}  required/>
        <input type="number" placeholder='User Comment Count' value={userCommentCount} onChange={e => setUserCommentCount(e.target.value)}  required/>

        <input type="submit" value={"Publish"}/>
    </form>
  )
}

export default Forms