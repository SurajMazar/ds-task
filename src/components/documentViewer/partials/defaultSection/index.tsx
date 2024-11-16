import React from 'react'
import {DefaultSectionsInterface} from "@/settings/constant/defaultSections.constant";

const DSectionRenderer: React.FC<{ section: DefaultSectionsInterface }> = (
    props
) => {

    /**
     * PROPS
     */
    const {section} = props


    return <div className={'text-[20px]'}>
        {section?.value ?? ''}
    </div>
}

export default DSectionRenderer
