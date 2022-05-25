import styled from "styled-components"

export const ContainerLogin = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
` 
export const ContainerHome = styled(ContainerLogin)`
    
`
export const ContainerCreateCard = styled(ContainerLogin)`
    
`
export const ContainerEditCard = styled(ContainerLogin)`
    
`
export const ContainerInput = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 800px) {
        width: 70%;
        margin: auto;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    
    @media (min-width: 1200px) {
        width: 45%;
        margin: auto;
        margin-top: 16px;
        margin-bottom: 16px;
    }
` 

export const ContainerHeader = styled.form`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
` 

export const ContainerCard = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 0px 15px 0px;
    text-align: center;
    border-radius: 7px;
    box-shadow: 1.5px 4px 5px 2px rgba(0, 0, 0, 0.2);
    margin: 10px 0px 20px 0px;

    @media (min-width: 800px) {
        width: 45%;
        margin: auto;
        margin-top: 16px;
        margin-bottom: 16px;
        :hover {
            transition: all .2s ease-in-out;
            transform: scale(1.02);
            background-color: #f8eee1c0;
        }
    }
    
    @media (min-width: 1200px) {
        width: 31%;
        margin: auto;
        margin-top: 16px;
        margin-bottom: 16px;
        :hover {
            transition: all .2s ease-in-out;
            transform: scale(1.02);
            background-color: #f8eee1c0;
        }
    }
` 

export const ContainerCards = styled.div`
    width: 100%;
    height: auto;

    @media (min-width: 800px) {
        display: flex;
        flex-wrap: wrap;
    }
` 

export const ContainerSocial = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
` 

export const ContainerCloseAndEdit = styled.div`
    width: 95%;
    padding: 7px 5px 7px 5px;
    margin: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
` 

export const ContainerToHome = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    align-items: center;

    @media (min-width: 800px) {
        width: 70%;
        
    }
    
    @media (min-width: 1200px) {
        width: 45%;
        
    }
`

export const ContainerSubTitleHome = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: start;

    @media (min-width: 800px) {
        width: 95%;
        
    }
    
    @media (min-width: 1200px) {
        width: 95%;
        
    }
`