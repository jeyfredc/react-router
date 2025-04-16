import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import blogData from './blogData'

export const EditBlog = () => {
    const navigate = useNavigate()
    const param = useParams()

    const blog = blogData.find(blog => blog.slug === param.slug)

    const [formBlog, setFormBlog] = useState(blog)

    const onChangeForm = (e) =>{
      setFormBlog({
        ...formBlog,
        [e.target.name]: e.target.value
      })
    }

    const onSubmit = (e) =>{
      e.preventDefault()
      blogData.splice(blogData.indexOf(blog), 1, formBlog)
      navigate('/blogList')
    }

  return (
    <div>
    <h1>FormBlog</h1>
    
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <form  onSubmit={onSubmit}>
        <div>

        <label htmlFor="title" style={{ display: 'block' }}>Titulo del proyecto</label>
        <input type="text" id="title" name="title" value={formBlog.title} onChange={onChangeForm} />
        </div>
        <div>   
        <label htmlFor="slug" style={{ display: 'block' }}>Slug del proyecto</label>
        <input type="text" id="slug" name="slug" value={formBlog.slug} onChange={onChangeForm} />

        </div>
        <div>

        <label htmlFor="content" style={{ display: 'block' }}>Contenido del proyecto</label>
        <textarea id="content" name="content" rows="10" cols="30" value={formBlog.content} onChange={onChangeForm}></textarea>
        </div>
        <button type="submit" style={{ display: 'block', justifySelf  : 'center', marginTop: '10px' }}>Editar Blog</button>
      </form>
    </div>
  </div>
  )
}
