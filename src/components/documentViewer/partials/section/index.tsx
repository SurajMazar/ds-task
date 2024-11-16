import React, {useMemo} from 'react'
import {SectionChildInterface} from "@/@types/model/section.model";
import {getColorViaIndex} from "@/utils/color.utils";
import useDocumentViewerContext from "@/core/hooks/useDocumentViewerContext";

const SectionRenderer: React.FC<{ section: SectionChildInterface, index: number }> = (
    props
) => {

    /**
     * PROPS
     */
    const {section, index} = props

    /**
     * HOOKS
     */
    const {selectedSections, hoverActiveSection} = useDocumentViewerContext()


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
            case 'sub_title':
                return {
                    fontSize: `25px`,
                    fontWeight: 'bold'
                }
            default:
                return {
                    fontSize: `22px`,
                }
        }
    }, [section])

    /**
     * COLOR CODE FOR THE
     */
    const colorCode = useMemo(() => {
        return getColorViaIndex(index)
    }, [index])


    return <div style={{
        transition:'all 0.5s ease-in-out',
        ...sectionClass,
        ...(selectedSections.includes(section.id) || hoverActiveSection === section.id ? {
            backgroundColor: `rgba(${colorCode?.code},0.7)`
        } : {})
    }}>
        {section?.content?.value ?? ''}
    </div>
}

export default SectionRenderer
