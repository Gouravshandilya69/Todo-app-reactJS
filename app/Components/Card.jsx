import React, { useState } from 'react'

function Card({ cardData,deleteHandler }) {
  const [update, setupdate] = useState(false)
  const [newform, setform] = useState({
    id: cardData.id,
    title: cardData.title,
    description: cardData.description,
    status: cardData.status
  })
  function updateHandler() {
    setupdate(!update)
  }


  function submitHandler(e) {
    e.preventDefault()
setform({
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value
    })
    setupdate(false)
  }
  function deleteHandlerr(){
    deleteHandler(cardData.id)
  }


  return (
    <div className='w-[10vh] h-[10vh] bg-zinc-500'>
      <h1>{newform.title}</h1>
      <h2>{newform.description}</h2>
      <h2>{newform.status}</h2>
      <button onClick={updateHandler}>update</button>

      { update?
      <form action="" onSubmit={submitHandler}>
        <input name='title' type="text" placeholder='Title'  defaultValue={newform.title} />
        <input name='description' type="text" placeholder='Description' defaultValue={newform.description} />
        <select name="status" id="" defaultValue={newform.status} >
          <option value="due">Due</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <input type="submit" />
      </form>
    : <></>
    }
    <button onClick={deleteHandlerr}>delete</button>
    </div>
   
  )
}

export default Card
