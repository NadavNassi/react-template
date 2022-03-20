import React from 'react'
import { Link } from 'react-router-dom'
import { CardUI } from './card-ui'
export const CannabisPreview = ({ item }) => {
    return (
        <div className="cannabis-preview">
            <Link to={`/cannabis/${item.id}`}>
                <CardUI
                    img={`https://avatars.dicebear.com/api/croodles/${item.strain}.svg`}
                    txt1={item.strain}
                    txt2={item.medical_use}
                    txt3={item.type}
                />
            </Link>
        </div>
    )
}


