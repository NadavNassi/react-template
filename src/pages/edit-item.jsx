import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { getById } from '../store/actions/canabis.action'

export const EditItem = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [currCannabis, setCannabis] = useEffect(null)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getById(id))
        // eslint-disable-next-line
    }, [id])
    if (!currCannabis) return <div>Loading...</div>
    return (
        <div>
            <form onSubmit></form>
        </div>
    )
}
