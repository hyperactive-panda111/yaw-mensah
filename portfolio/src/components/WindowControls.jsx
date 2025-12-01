import useWindowStore from '#store/window'
import React from 'react'

const WindowControls = ({ target }) => {
    const { closeWindow } = useWindowStore();

    return (
        <div>
            <div className='close' onClick={() => closeWindow(target)}/>
            <div className='minimize' onClick={() => {}}/>
            <div className='maximize' onClick={() => {}}/>
            </div>
    )
}

export default WindowControls;