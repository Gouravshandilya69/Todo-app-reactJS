"use client"
import React, { useState } from 'react'
import Card from './Card'


function Createcard() {
    const [newTask, setTask] = useState({
        id:'',
        title: "",
        description: "",
        status: "due"
    })
    const [newTaskList, setTaskList] = useState([])

    function changeHandler(e) {
        e.preventDefault()
        setTask((prev) => {
            return {
                ...prev,
                id:newTaskList.length,
                [e.target.name]: e.target.value
            }
        })
    }
    function submitHandler(e) {
        e.preventDefault()
        const updatedTaskList = [...newTaskList, newTask];
        setTaskList(updatedTaskList)
        setTask({
            title: "",
            description: "",
            status: ""
        })
    }

    function deleteHandler(idd){

        const found = newTaskList.filter((data,id)=>{
          return data.id!==idd
        })
        setTaskList(found)
    }



    return (
        <>
            <div>
                <form action="" onSubmit={submitHandler}>
                    <input onChange={changeHandler} name='title' type="text" placeholder='Title' value={newTask.title} />
                    <input onChange={changeHandler} name='description' type="text" placeholder='Description' value={newTask.description} />
                    <select onChange={changeHandler} name="status" id="" value={newTask.status}>
                        <option value="due">Due</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
            <div>
                {newTaskList.map((cardData, index) => {
                    
                    return <Card key={cardData.id}  deleteHandler={deleteHandler} cardData={cardData} />
                })}
            </div>
        </>
    )
}

export default Createcard
