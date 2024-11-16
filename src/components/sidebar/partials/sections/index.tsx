import React from 'react'
import useDocumentViewerContext from "@/core/hooks/useDocumentViewerContext";
import SectionCard from "@/components/sidebar/partials/sections/card";

const Sections: React.FC = () => {

    /**
     * HOOKS
     */
    const {pageSectionChildren} = useDocumentViewerContext()

    return (
        <>
            {
                pageSectionChildren?.map((section, index) => (
                    <SectionCard section={section} index={index} key={section?.id}/>
                ))
            }
        </>
    )
}

export default Sections
