import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getById, removeById } from '../store/actions/canabis.action'
import { Button } from '@mui/material';

export const CannabisDetails = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const { currCannabis } = useSelector(state => state.cannabisModule)
    useEffect(() => {
        dispatch(getById(id))
        // eslint-disable-next-line
    }, [id])
    if (!currCannabis) return <div>Loading...</div>
    const handleBack = () => {
        navigate('/cannabis')
    }
    const removeItem = (id) => {
        dispatch(removeById(id))
        navigate('/cannabis')
    }
    return (
        <div className="item-details">
            <img src={`https://avatars.dicebear.com/api/croodles/${currCannabis.strain}.svg`} alt="" />
            <div className="details-data">
                <p>Name: {currCannabis.strain}</p>
                <p>Cannabinoid: {currCannabis.cannabinoid}</p>
                <p>Medical use: {currCannabis.medical_use}</p>
                <p>Type: {currCannabis.type}</p>
            </div>
            <div className="item-actions">
                <Button onClick={() => removeItem(id)}>Remove item</Button>
                <Button onClick={handleBack}>Back to gallery</Button>
                <Link to={`/edit/${id}`}><Button>Edit item</Button></Link>
            </div>
        </div>
    )
}
