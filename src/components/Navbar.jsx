import { Link } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
            {/* <nav>
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/favlist' >Favlist</Link>
                    </li>
                    <li>
                        <Link to='/quiz' >Quiz</Link>
                    </li>
                </ul>
            </nav> */}

<Breadcrumb>
  <BreadcrumbItem >
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/favlist'>Favlist</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink href='/quiz'>Quiz</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
        </>




    );
}

export default NavBar;