import React, { useState } from 'react'
import { createProfile } from '../redux/actions/actions'
import { Link, useNavigate } from 'react-router-dom'

import { ContainerCreateCard, ContainerHeader, ContainerInput, ContainerToHome } from '../components/Containers/Containers'
import { ImageAction } from '../components/Images/Images'
import { Title } from '../components/Titles/Titles'
import { Label } from '../components/Label/Label'
import { Input } from '../components/Inputs/Inputs'
import { Button } from '../components/Buttons/Buttons'

import home from "../assets/img/home.png"

const CreateCard = () => {
  const navigate = useNavigate()

  const [state, setState] = useState({
    name: "",
    lastname: "",
    burden: "",
    linkedin: "",
    github: ""
  })

  const handleChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createProfile(state)
    navigate("/home")
  }

  return (
    <ContainerCreateCard>
      <ContainerToHome >
        <Link to="/home">
          <ImageAction src={home}/>
        </Link>
      </ContainerToHome>

      <ContainerHeader>
        <Title>Crear Perfil</Title>
      </ContainerHeader>

      <ContainerInput onSubmit={handleSubmit}>
        <Label>Nombre</Label>
        <Input placeholder='Agrega tu Nombre Ej: Bastian' onChange={handleChangeInput} name="name" value={state.name}/>
        
        <Label>Apellido</Label>
        <Input placeholder='Agrega tu Apellido Ej: Alzate' onChange={handleChangeInput} name="lastname" value={state.lastname}/>

        <Label>Cargo</Label>
        <Input placeholder='Agrega tu cargo Ej: Full Stack Developer' onChange={handleChangeInput} name="burden" value={state.burden}/>

        <Label>Linkedin</Label>
        <Input placeholder='Agrega URL de Linkedin Ej: linkedin.com/in/bastianalzate' onChange={handleChangeInput} name="linkedin" value={state.linkedin}/>

        <Label>Github</Label>
        <Input placeholder='Agrega URL de GitHub Ej: github.com/bastianalzate' onChange={handleChangeInput} name="github" value={state.github}/>

        <Button value="Crear perfil" type="submit"/>
      </ContainerInput>
    </ContainerCreateCard>
  )
}

export default CreateCard