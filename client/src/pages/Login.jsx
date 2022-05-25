import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../components/Buttons/Buttons'
import { ContainerHeader, ContainerInput, ContainerLogin } from '../components/Containers/Containers'
import { Input } from '../components/Inputs/Inputs'
import { Label } from '../components/Label/Label'
import { SubTitle, Title } from '../components/Titles/Titles'
import { Text } from '../components/Text/Text'

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/home")
  }

  return (
    <ContainerLogin>
        <ContainerHeader>
            <Title>Profile CRUD</Title>
            <SubTitle>Bienvenid@s</SubTitle>
            <Text>Solo pulsa en el boton de Log In para ingresar</Text>
        </ContainerHeader>

        <ContainerInput>
            <Label >Email</Label>
            <Input placeholder='Ingresa tu Email'/>

            <Label >Password</Label>
            <Input placeholder='Ingresa tu contraseña'/>
            
            <Button type="submit" value="Log In" onClick={handleLogin} />
        </ContainerInput>
            
            
    </ContainerLogin>
  )
}

export default Login