import getImgUrl from "../utils/images";
import React from 'react'

function CategoryLogo(props) {
    return props.title ? <div className='logo'>
        <div className={`option-icon-container ${'color-scheme-' + props.title.toLowerCase()}`}>
            <img src={getImgUrl(props.icon)} alt='' className='size-2/3' />
        </div>
        <span className='option-text'>{props.title}</span>
    </div> : null
}

export default React.memo(CategoryLogo)