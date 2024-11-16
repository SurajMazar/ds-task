import React, {useMemo} from 'react'
import {SectionChildInterface} from "@/@types/model/section.model";

const SectionRenderer: React.FC<{ section: SectionChildInterface }> = (
    props
) => {

    /**
     * PROPS
     */
    const {section} = props


    /**
     * SECTION CLASS
     */
    const sectionClass: React.CSSProperties = useMemo(() => {
        switch (section?.content?.type) {
            case 'title':
                return {
                    fontSize: `40px`,
                    fontWeight: 'bold'
                }
            default:
                return {
                    fontSize: `20px`,
                }
        }
    }, [section])

    return <div style={sectionClass}>
        {section?.content?.value ?? ''}
    </div>
}

export default SectionRenderer
