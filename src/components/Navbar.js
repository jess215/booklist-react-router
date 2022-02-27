
import React from 'react'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/books" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar


// import React from 'react'  
// import { routes } from '../routes/Routes'

// const Navbar = () => {
//     const Options = () => {
//         return routes.map((route) => {
//             return <a key={route.Name} href={route.path}>{route.Name}</a>
//         })
//     } 

//     return (
//         <div>
//         {Options()}
//         </div>
//     )
// }

// export default Navbar