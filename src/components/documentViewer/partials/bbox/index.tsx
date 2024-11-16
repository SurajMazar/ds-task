import React, {useMemo} from 'react'
import useDocumentViewerContext from "@/core/hooks/useDocumentViewerContext";
import _ from 'lodash'
import SectionRenderer from "@/components/documentViewer/partials/section";

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
        return pageSectionChildren.find(section => _.isEqual(box.rectangle, section?.content?.position))
    }, [pageSectionChildren, box.rectangle])

    return <div style={style}>
        {sectionChildren ? <SectionRenderer section={sectionChildren}/> : ''}
    </div>;
}

export default Bbox
