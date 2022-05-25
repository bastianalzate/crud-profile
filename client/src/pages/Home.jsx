import React from 'react'
import { Link } from 'react-router-dom'
import useGetProfiles from '../hooks/useGetProfiles'

import { SubTitle, Title } from "../components/Titles/Titles"
import CardProfile from '../components/CardProfile/CardProfile'
import { ContainerCards, ContainerHeader, ContainerHome, ContainerSubTitleHome } from '../components/Containers/Containers'
import { ButtonCreateCard } from '../components/Buttons/Buttons'

import createCard from "../assets/img/create.png"

const Home = () => {
  const { listProfiles } = useGetProfiles()

  return (
    <ContainerHome>
        <ContainerHeader>
            <Title>Profile CRUD</Title>
        </ContainerHeader>
        <ContainerSubTitleHome>
            <SubTitle>Perfiles agregados</SubTitle>
        </ContainerSubTitleHome>
        <ContainerCards>
        {
          listProfiles?.map(profile => <CardProfile {...profile} key={profile.id}/>)
        }
        </ContainerCards>
        <Link to="/create">
            <ButtonCreateCard src={createCard}/>
        </Link>
    </ContainerHome>
  )
}

export default Home