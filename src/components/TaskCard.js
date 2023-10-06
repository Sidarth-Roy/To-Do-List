import './TaskCard.css'
export default function TaskCard({ index, todo, editingIndex, newText, setNewText, removeTodo, toggleComplete, startEdit, saveEdit, cancelEdit }) {
  return (
    <li
      key={index}
      className={`flex justify-between py-2 ${todo.completed ? 'line-through text-gray-500' : ''
        }`}
    >
      {editingIndex === index ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button
            className="mx-2 bg-green-500 text-white px-2 py-1 rounded"
            onClick={() => saveEdit(index)}
          >
            <i class="fa-solid fa-floppy-disk fa-lg"></i>
          </button>
          <button
            className="mx-2 bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => cancelEdit()}
          >
            <i class="fa-solid fa-ban fa-lg"></i>
          </button>
        </div>
      ) : (
        <div  className="d1">
          <input
            type="checkbox"
            className="mr-2"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
          />
          {todo.text}
          <div>
            ({todo.date})
            <button
              className="mx-2  px-2 py-1"
              onClick={() => startEdit(index)}
            >
              <i class="fa-solid fa-pen-to-square fa-lg"></i>
            </button>
          </div>
        </div>
      )}                   
      <button
        className="text-red-500"
        onClick={() => removeTodo(index)}
      >
        <i class="fa-solid fa-xmark fa-2xl"></i>
      </button>
    </li>
  )
}