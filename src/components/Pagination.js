import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import backArrow from '../assets/backArrow.svg'
import nextArrow from '../assets/nextArrow.svg'
import backArrowDis from '../assets/backArrowDis.svg'
import nextArrowDis from '../assets/nextArrowDis.svg'
import { Wrapper, NumberWrap, Button } from './Pagination.styled'

export const Pagination = ({ currentPage, setNumber, setCurrentPage}) => {
const pageNum = []
const [arrowPrevUrl, setPrevUrl] = useState('')
const [arrowNextUrl, setNextUrl] = useState('')
const [clickablePrev, setClickablePrev] = useState('')
const [clickableNext, setClickableNext] = useState('')

useEffect(() =>{
    if(currentPage <= 1){
        setPrevUrl(backArrowDis)
        setClickablePrev(false)
    }else{
        setPrevUrl(backArrow)
        setClickablePrev(true)
    }

    if(currentPage >= 30){
        setNextUrl(nextArrowDis)
        setClickableNext(false)
    }else{
        setNextUrl(nextArrow)
        setClickableNext(true)
    }
}, [currentPage])


for(let i = 1; i<=37; i++){
    pageNum.push(i);
}

  return (
    <Wrapper>
            {pageNum.map(number =>(
               <NumberWrap key={number}>
                    <Link 
                        to="top" 
                        spy={true} 
                        smooth={true} 
                        duration={1000} 
                        style={currentPage === number ? {color: 'black', padding: '5px', textDecoration: 'none'} : {color: '#06A9F6', padding: '5px', textDecoration: 'none' }} 
                        onClick={() => {setCurrentPage(number); setNumber(number); }}
                        href="!#">
                        {number}
                    </Link>
               </NumberWrap> 
            ))}
            {clickablePrev === true ?
            <Link
                to="top" 
                spy={true} 
                smooth={true} 
                duration={1000} 
                onClick={() => {setCurrentPage(currentPage -= 1); setNumber(currentPage)}} >
                <Button>
                    <img src={arrowPrevUrl} alt="arr" /> 
                </Button>
            </Link>
            :                 
            <Button>
                <img src={arrowPrevUrl} alt="arr" /> 
            </Button> }   

            {clickableNext === true ?
            <Link 
                to="top" 
                spy={true} 
                smooth={true} 
                duration={1000} 
                onClick={() => {setCurrentPage(currentPage += 1); setNumber(currentPage)}} >
                <Button>
                    <img src={arrowNextUrl} alt="arr" />
                </Button>
            </Link>
            :
            <Button>
                <img src={arrowNextUrl} alt="arr" />
            </Button>}  
    </Wrapper>
  )
}


