import { Link } from 'react-router';
import { Center, Square, Circle } from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
        <Center>
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
        </Center>
        </>




    );
}

export default NavBar;