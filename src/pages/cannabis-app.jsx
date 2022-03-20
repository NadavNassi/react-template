import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadCannabis } from '../store/actions/canabis.action'
import { CannbisList } from '../cmps/cannbis-list'


export const CannabisApp = () => {
    const dispatch = useDispatch()
    const { cannabis } = useSelector(state => state.cannabisModule)
    useEffect(() => {
        if (!cannabis.length) dispatch(loadCannabis())
        // eslint-disable-next-line
    }, [])
    if (!cannabis.length) return <div>Loading...</div>
    return (
        <section className="cannabis-app">
            <h2>This is book app main page</h2>
            <CannbisList items={cannabis} />
        </section>
    )
}
