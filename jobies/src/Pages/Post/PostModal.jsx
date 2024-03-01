const PostModal = ({onAdd, close})=>{
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setdate] = useState("")
    const handleAddPost = () => {
      //  id++
        onAdd({ title, description, date })
        clearForm()
        close()
    }

    const clearForm = () => {
        setTitle('')
        setDescription('')
        setdate('')
    }

  
    
   return (
    <div className="box_post popUp ">
        <button onClick={close}>exit</button>
        <input placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}></input>
        <input placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}></input>
        <input placeholder="Date" type="number" value={date} onChange={(event) => setdate(event.target.value)}></input>
        <button onClick={handleAddPost}> Add Post </button>
    </div>
   ) 
}
export default PostModal