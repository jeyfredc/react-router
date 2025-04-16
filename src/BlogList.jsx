import React, { useState } from "react";
import blogData from "./blogData";
import { useNavigate } from "react-router-dom";

const BlogList = () => {

  const navigate = useNavigate()
  const [showList, setShowList]= useState(false)
  const [blogs, setBlogs] = useState(blogData)

  const returnFormBlog = () =>{
    navigate("/createBlog")
  }

  const onDeleteBlog = (slug) =>{
    console.log(slug)
    console.log(blogData)
    
    const filteredBlogs = blogData.filter(blogColumn => blogColumn.slug !== slug);
    console.log(filteredBlogs)
    setBlogs(filteredBlogs)
  }

  const onEditBlog = (slug) =>{
    navigate(`/editBlog/${slug}`)
  }

  return (
    <>
    <div>

    <label>
      Si quieres crear un blog haz click aqui

    </label>
    <button onClick={returnFormBlog} >Crear Blog</button>
    </div>
    <button onClick={()=>{setShowList(!showList)}} >{showList ? 'Ocultar Lista': 'Mostrar Lista'}</button>
    {
      showList &&
    <>
      <h1>Lista de Blogs</h1>
      <table>
        <thead>
          <tr>
            <td>Titulo</td>
            <td>Slug</td>
            <td>Content</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blogColumn) => (
            <tr key={blogColumn.title}>
              <td>{blogColumn.title}</td>
              <td>{blogColumn.slug}</td>
              <td>{blogColumn.content}</td>
              <td>
                <button onClick={() => onEditBlog(blogColumn.slug)}>Editar</button>
                <button onClick={() => onDeleteBlog(blogColumn.slug)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
      }
    </>
  );
};

export default BlogList;
