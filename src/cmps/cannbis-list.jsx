
import React from 'react'
import { CannabisPreview } from './cannabis-preview'

export const CannbisList = ({ items }) => {
    return (
        <div className="cannabis-list">
            {items.map(item => {
                return <CannabisPreview key={item.id} item={item} />
            })}
        </div>
    )
}
