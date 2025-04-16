import React, { useState } from 'react'
import blogData from './blogData'
import { useNavigate } from 'react-router-dom'

const FormBlog = () => {

  const navigate = useNavigate()
  const initialState = {
    title: '',
    slug: '',
    content: ''
  }
  const [formBlog, setFormBlog] = useState(initialState)

  const onChangeForm = (e) =>{
    setFormBlog({
      ...formBlog,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    blogData.push(formBlog)
    navigate('/blogList')

  }

  return (
    <div>
      <h1>FormBlog</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <form  onSubmit={onSubmit}>
          <div>

          <label htmlFor="title" style={{ display: 'block' }}>Titulo del proyecto</label>
          <input type="text" id="title" name="title" onChange={onChangeForm} />
          </div>
          <div>
          <label htmlFor="slug" style={{ display: 'block' }}>Slug del proyecto</label>
          <input type="text" id="slug" name="slug" onChange={onChangeForm} />

          </div>
          <div>

          <label htmlFor="content" style={{ display: 'block' }}>Contenido del proyecto</label>
          <textarea id="content" name="content" rows="10" cols="30" onChange={onChangeForm}></textarea>
          </div>
          <button type="submit" style={{ display: 'block', justifySelf  : 'center', marginTop: '10px' }}>Crear Blog</button>
        </form>
      </div>
    </div>
  )
}

export default FormBlog
