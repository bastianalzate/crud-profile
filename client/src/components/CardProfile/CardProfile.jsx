import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { SubTitle, Title } from '../Titles/Titles'
import { ContainerCard, ContainerCloseAndEdit, ContainerSocial } from '../Containers/Containers'
import { deleteProfile, getProfiles, searchProfileForId } from '../../redux/actions/actions'

import { ImageAction, ImageSocial } from '../Images/Images'
import linkedinIcon from "../../assets/img/linkedin.png"
import githubIcon from "../../assets/img/github.png"
import close from "../../assets/img/close.png"
import edit from "../../assets/img/edit.png"


const CardProfile = ({id, name, lastname, burden, linkedin, github}) => {
  const dispatch = useDispatch()

  const handleDeleteProfile = () => {
    dispatch(deleteProfile(id))
    dispatch(getProfiles())
  }

  const handleEditProfile = () => {
    dispatch(searchProfileForId(id))
  }

  return (
    <ContainerCard>
        <ContainerCloseAndEdit>
            <Link to={`/editProfile/${id}`}>
              <ImageAction src={edit} onClick={handleEditProfile}/>
            </Link>
            <ImageAction src={close} onClick={handleDeleteProfile}/>
        </ContainerCloseAndEdit>

        <Title>{name} {lastname}</Title>
        <SubTitle>{burden}</SubTitle>

        <ContainerSocial>
            <a href={linkedin} target="_blank">
              <ImageSocial src={linkedinIcon}/>
            </a>
            <a href={github} target="_blank">
              <ImageSocial src={githubIcon}/>
            </a>
        </ContainerSocial>
    </ContainerCard>
  )
}

export default CardProfile