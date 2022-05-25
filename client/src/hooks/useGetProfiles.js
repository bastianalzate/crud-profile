import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfiles } from '../redux/actions/actions'

const useGetProfiles = () => {
    const { listProfiles, profile } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfiles())
    }, [])

    return {
        listProfiles,
        profile
    }
}

export default useGetProfiles