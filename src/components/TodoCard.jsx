import React from 'react'

export default function TodoCard(props) {
    
    const {children, handleDeleteTodos, index, handleEditTodos} = props

    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button>
                    <i class="fa-regular fa-pen-to-square" onClick={() => handleEditTodos(index)}></i>
                </button>
                <button>
                    <i class="fa-regular fa-trash-can" onClick={() => {
                        handleDeleteTodos(index)
                    }}></i>
                </button>
            </div>   
        </li>
  )
}
