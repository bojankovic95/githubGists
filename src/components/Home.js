import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Posts } from './Posts'
import { Pagination } from './Pagination'
import { Wrapper } from './Home.styled'

export const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [number, setNumber] = useState(1)

  const fetchData = async ({number}) => {
      setLoading(true)
      return axios.get(`https://api.github.com/gists/public?page=${number}`).then((res) =>{
        setPosts(res.data)
        setLoading(false)
    })
  }
  useEffect(() =>{
      fetchData({number})
    } ,[number])

  return (
    <Wrapper id='top'>
        <Posts posts={posts} loading={loading} />
        <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} setNumber={setNumber} />
    </Wrapper>
  )
}