import axios from 'axios'
import React, { useEffect } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    border: 1px solid rgb(222,111,111);
    min-width: 400px;
    text-align: left;
    padding: 10px;

`

const Flex = styled.div`
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    & div{
        padding: 10px ;
    }
    & div.details {
        & h3,h4 {
            display: inline;
        }
    }

    & p.small {
        font-size: 1rem;
    }
    & p.large {
        font-size: 1.4rem;
    }
`

const Avatar = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
        border: 1px solid black;
        height: 200px;
    }
`

const User = ({ first_name, last_name, email, avatar, gender, phone_number, dob, employment }) => {


    return (
        <Container>
            <Flex>
                <div className='details'>
                    <p className='large'><h3>Name: </h3> <span>{first_name}</span> <span>{last_name}</span></p>
                    <p className='large'><h4>Employment Title: </h4><span>{employment.title}</span></p>
                    <p className='small'><span>Email: </span> <span>{email}</span></p>
                    <p className='small'>Gender: <span>{gender}</span>
                    </p>
                    <p className='small'>Phone Number: <span>{phone_number}</span></p>
                    <p className='small'>Date of Birth: <span>{dob}</span></p>
                </div>
                <Avatar>
                    <img src={avatar} alt="" />
                </Avatar>
            </Flex>
        </Container>
    )
}

export default User