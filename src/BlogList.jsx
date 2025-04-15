import React, { useState } from "react";
import blogData from "./blogData";
import { useNavigate } from "react-router-dom";

const BlogList = () => {

  const navigate = useNavigate()
  const [showList, setShowList]= useState(false)
  

  const returnFormBlog = () =>{
    navigate("/createBlog")
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
          {blogData.map((blogColumn) => (
            <tr key={blogColumn.title}>
              <td>{blogColumn.title}</td>
              <td>{blogColumn.slug}</td>
              <td>{blogColumn.content}</td>
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
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
