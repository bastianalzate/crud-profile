import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useGetProfiles from '../hooks/useGetProfiles'

import { ContainerEditCard, ContainerHeader, ContainerInput, ContainerToHome } from '../components/Containers/Containers'
import { ImageAction } from '../components/Images/Images'
import { SubTitle, Title } from '../components/Titles/Titles'
import { Label } from '../components/Label/Label'
import { Input } from '../components/Inputs/Inputs'
import { Button } from '../components/Buttons/Buttons'
import { updateProfile } from '../redux/actions/actions'

import home from "../assets/img/home.png"

const EditProfile = () => {
  const { profile } = useGetProfiles()
  const [state, setState] = useState(profile)
  const navigate = useNavigate()

  const handleSubmitEdit = (e) => {
    e.preventDefault()
    updateProfile(state)
    navigate("/home")
  }

  const handleChangeInput = (e) => {
    setState({
      ...state,
      id: profile.id,
      [e.target.name]: e.target.value
    })
  }

  return (
    <ContainerEditCard>
      <ContainerToHome >
        <Link to={"/home"}>
            <ImageAction src={home}/>
        </Link>
      </ContainerToHome>

      <ContainerHeader>
        <Title>Editar Perfil</Title>
      </ContainerHeader>

      <ContainerInput onSubmit={handleSubmitEdit}>
        <Label>Nombre</Label>
        <Input value={state.name} name="name" onChange={handleChangeInput}/>
        
        <Label>Apellido</Label>
        <Input value={state.lastname} name="lastname" onChange={handleChangeInput}/>

        <Label>Cargo</Label>
        <Input value={state.burden} name="burden" onChange={handleChangeInput}/>

        <Label>Linkedin</Label>
        <Input value={state.linkedin} name="linkedin" onChange={handleChangeInput}/>

        <Label>GitHub</Label>
        <Input value={state.github} name="github" onChange={handleChangeInput}/>

        <Button value="Guardar Cambios" type="submit"/>
      </ContainerInput>
    </ContainerEditCard>
  )
}

export default EditProfile