import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import DataProvider, { DataContext } from '../providers/DataProvider'

const NewBook = () => {
    const navigate = useNavigate()
    const data = useContext(DataContext)
    let [title, setTitle] = useState('')
    let [author, setAuthor] = useState('')
    let [genre, setGenre] = useState('')
    let [description, setDescription] = useState('')
    let [isbn, setIsbn] = useState('')
    let [image, setImage] = useState('')
    let [published, setPublished] = useState('')
    let [publisher, setPublisher] = useState('')

    const handleSubmit = (sub) => {
        sub.preventDefault()
        let newBook = {id: Math.random(), title, author, genre, description, isbn, image, published, publisher}
        console.log(newBook)
        data.addBook(newBook)
        navigate('/books')
    }
    return (
        <div>
            <h1>Add New Book</h1>
            <Link to='/books'>Books Page</Link>
            <form onSubmit={handleSubmit}>
                <p>Title:</p>
                <input value={title} onChange={(sub) => setTitle(sub.target.value)} />
                <p>Author:</p>
                <input value={author} onChange={(sub) => setAuthor(sub.target.value)} />
                <p>Genre:</p>
                <input value={genre} onChange={(sub) => setGenre(sub.target.value)} />
                <p>Description:</p>
                <input value={description} onChange={(sub) => setDescription(sub.target.value)} />
                <p>ISBN:</p>
                <input value={isbn} onChange={(sub) => setIsbn(sub.target.value)} />
                <p>Image:</p>
                <input value={image} onChange={(sub) => setImage(sub.target.value)} />
                <p>Published:</p>
                <input value={published} onChange={(sub) => setPublished(sub.target.value)} />
                <p>Publisher:</p>
                <input value={publisher} onChange={(sub) => setPublisher(sub.target.value)} />
            </form>
        </div>
    )
}

export default NewBook


//id, title, author, genre, description, isbn, image, published, publisher