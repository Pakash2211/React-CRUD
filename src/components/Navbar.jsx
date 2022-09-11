import React from 'react';
import {Link} from 'react-router-dom'
import { HStack,Button } from '@chakra-ui/react'
import { useSelector,useDispatch } from 'react-redux';
import {loginAuth,logoutAuth} from '../Redux/Login/action'

export const Navbar = () => {
 let auth = useSelector((res)=> res.login.login);
const dispatch = useDispatch();
    return(
        <HStack spacing='70px' bg="black" color="white" h='10' pl='20' py='7' mb='40px'>
            <Link to="/">Home</Link>
            <Button disabled={auth} colorScheme='teal' size='sm'


            >Login</Button>



            <Button onClick={()=>{
                dispatch(logoutAuth())
            }}  colorScheme='teal' size='sm' disabled={!auth}>Logout</Button>
        </HStack>
    )
}