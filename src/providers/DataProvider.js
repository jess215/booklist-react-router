import axios from 'axios'
import React, { useState } from 'react'

export const DataContext = React.createContext()

const DataProvider = (props) => {
    const [books, setBooks] = useState([{ id: 0, title: 'title', author: 'author', genre: 'genre', description: 'description', isbn: 'isbn', image: 'link', published: 'published', publisher: 'publisher' }])
    const [error, setError] = useState(null)
    const [demoState, setDemoState] = useState(
        'This is the demo state'
    )

    const getBooks = async () => {
        try {
            let res = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
            setBooks(res.data.data)
        } catch (err) {
            setError('An error has occurred')
        }
    }

    const addBook = (newBookFromForm) => {
        let newBooks = [...books, newBookFromForm]
        setBooks(newBooks)
    }

    const updateBook = (updateBookFromForm) => {
        let updateBooks = books.map((u) => u.id === updateBookFromForm.id ? updateBookFromForm : u)
        setBooks(updateBooks)
    }

    const deleteBook = (idOfBookClicked) => {
        let filteredBooks = books.filter((book) => book.id !== idOfBookClicked)
        setBooks(filteredBooks)
    }

    const dataProviderThing = {
        books,
        demoState,
        x: 1,
        setDemoState,
        addBook,
        updateBook,
        deleteBook,
        getBooks,
        error,
    }

    return (
        <DataContext.Provider value={dataProviderThing}>
            {props.children}
        </DataContext.Provider>
    )

}


export default DataProvider;


//id, title, author, genre, description, isbn, image, published, publisher