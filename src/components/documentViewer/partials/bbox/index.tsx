import React, {useMemo} from 'react'
import useDocumentViewerContext from "@/core/hooks/useDocumentViewerContext";
import _ from 'lodash'
import SectionRenderer from "@/components/documentViewer/partials/section";
import {DefaultSectionsConstant} from "@/settings/constant/defaultSections.constant";
import DSectionRenderer from "@/components/documentViewer/partials/defaultSection";

const Bbox: React.FC<{
    highlight?: boolean
    box: {
        page: number
        rectangle: [number, number, number, number]
    }
}> = (props) => {

    /**
     * COMPONENT PROPS
     */
    const {box, highlight} = props

    /**
     * HOOKS
     */
    const {pageSectionChildren} = useDocumentViewerContext()

    /**
     * MEMORIZED STYLE
     */
    const style: React.CSSProperties | undefined = useMemo(() => {
        const [x1, y1, x2, y2] = box.rectangle;
        const width = x2 - x1;
        const height = y2 - y1;

        return {
            position: 'absolute',
            left: `${x1}px`,
            top: `${y1}px`,
            width: width,
            height: height,
            display: 'flex',
            flexWrap: 'nowrap',
            whiteSpace: 'nowrap',
            alignItems: 'center',
            ...(highlight ? {
                border: '2px solid red',
                backgroundColor: 'rgba(255, 0, 0, 0.3)',
            } : {}),
        };
    }, [box.rectangle, highlight])


    /**
     * SECTION CHILDREN
     */
    const sectionChildren = useMemo(() => {
        const section = pageSectionChildren.find(section => _.isEqual(box.rectangle, section?.content?.position))
        return {
            section,
            ...(section ? {index: pageSectionChildren.indexOf(section)} : {})
        }
    }, [pageSectionChildren, box.rectangle])

    /**
     * DEFAULT SECTION
     */
    const dsection = useMemo(() => {
        return DefaultSectionsConstant.find(section => _.isEqual(box.rectangle, section?.position))
    }, [box.rectangle])

    return <div style={style} onClick={() => console.log(box)}>
        {sectionChildren?.section ? <SectionRenderer section={sectionChildren?.section} index={sectionChildren?.index ?? 0}/> : dsection ?
            <DSectionRenderer section={dsection}/> : ''}
    </div>;
}

export default Bbox
