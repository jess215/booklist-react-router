import { Link, OUtlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Book List</h1>
      <nav style={{ borderBottom: '1px solid'}}
      >
        <Link to='/home'>Home</Link> | {' '}
        <Link to ='/about'>About</Link> | {' '}
        <Link to='/books'>Books</Link> | {' '}
        <Link to='/new-book'>New Book</Link>
      </nav>
      <p>Outlet component here</p>
    </div>
  )
}

export default App;