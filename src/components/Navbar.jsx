// src/components/Navbar.jsx

import { Link } from 'react-router';
import { Center, Square, Circle } from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

// Navigation Bar - Home, Favlist, Quiz
const NavBar = () => {
    return (
        <>
        <Center>
          <Breadcrumb>
            <BreadcrumbItem >
              <Link to='/'>Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link to='/favlist'>Favlist</Link>
            </BreadcrumbItem>

            <BreadcrumbItem >
              <Link to='/quiz'>Quiz</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </Center>
        </>
    );
}

export default NavBar;