import React, {useState, useRef, useCallback} from 'react'
import { Modal } from './Modal'
import { DarkImgBg, ListWrapper, ListItem, Image, ListItemWrap, GistsText, GistsWrap, LoadingWrapper, Loading } from './Post.styled'

export const Posts = ({posts, loading}) => {
  const [toggle, setToggle] = useState('')
  const [fadeAvatar, setAvatar] = useState('')

  const modalRef = useRef(null)

  const openModal = useCallback(() => {
    if (modalRef.current) modalRef.current.openModal()
  }, [])


  function handleToggle(id){
    setToggle(id)
  }

  if(loading){
    return(
      <LoadingWrapper>
          <Loading>Loading...</Loading>
      </LoadingWrapper>
    ) 
  }

  return (

    <ListWrapper>
      <GistsWrap>
          <GistsText>Gists</GistsText>
      </GistsWrap>
      {posts.map(({id, owner, files}) => (
        <ListItemWrap key={id}>
            <ListItem onClick={() => {handleToggle(id); setAvatar(owner.avatar_url); openModal()}}>
                <DarkImgBg style={toggle === id ? { background: '#303133'} : { }}>
                    <Image style={toggle === id ? { opacity: '.5', background: '#303133'} : { }} src={owner.avatar_url} />
                </DarkImgBg>
                <p style={toggle === id ? { color: '#06A9F6'} : { }}>{Object.values(files)[0].filename}</p>
            </ListItem>
        </ListItemWrap>
      ))}
      <Modal source={fadeAvatar} ref={modalRef} />
  </ListWrapper>
  )
}




