import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'

const Books = () => {
    const data = useContext(DataContext)
    return (
        <div>
            <h1>Books Page</h1>
            <Link to='/new_book'>Create a New Book</Link>

            <button onClick={() => data.setDemoState('Changed in BOOKS')}>Change Text</button>

            {data.books.map(b => {
                return (
                    <div key={b.id}>
                        <h1>{b.title} {b.author} id:{b.id}</h1>
                        <button onClick={() => {data.deleteBook(b.id)}}>Delete</button>
                        <Link to={`/books/${b.id}`} state={b}>Show</Link>
                    </div>
                )   
            })}
            <button onClick={data.getBooks}>getBooks</button>
            <hr />
            {JSON.stringify(data)}
            <hr />
        </div>
    )
}

export default Books