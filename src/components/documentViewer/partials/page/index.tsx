import React, {useMemo} from 'react'
import {PageModelInterface} from '@/@types/model/page.model'
import useDocumentViewerContext from '@/core/hooks/useDocumentViewerContext'
import Bbox from "@/components/documentViewer/partials/bbox";

const Page: React.FC<{ page: PageModelInterface; pageNo: number }> = (
    props
) => {
    /**
     * COMPONENT PROPS
     */
    const {page, pageNo} = props

    /**
     * HOOKS
     */
    const {currentPage, zoomFactor, bboxes, showBbox} = useDocumentViewerContext()


    /**
     * PAGE STYLE
     */
    const wrapperDiv = useMemo(() => {
        return {
            width: `${zoomFactor * page?.image?.width}px`,
            height: `${zoomFactor * page?.image?.height}px`,
            margin: 'auto'
        }
    }, [page, zoomFactor])

    const externalDivStyle = useMemo(() => {
        return {
            width:'100%',
            height:'100%',
            transform: `matrix(${zoomFactor},0,0,${zoomFactor},0,0)`,
            transformOrigin: 'top left'
        }
    }, [zoomFactor])

    const pageStyle: React.CSSProperties | undefined = useMemo(() => {
        return {
            width: `${page?.image?.width}px`,
            height: `${page?.image?.height}px`,
            background: 'white',
            position: 'relative',
        }
    }, [page])

    /**
     * CHECK CURRENT PAGE
     */
    const isCurrentPage = useMemo(() => {
        return pageNo === currentPage
    }, [pageNo, currentPage])


    return <>{isCurrentPage ?
        <div style={wrapperDiv}>
            <div style={externalDivStyle} className={''}>
                <div style={pageStyle}>
                    {
                        (bboxes?.bboxes ?? []).map((box, index) => (
                            <Bbox box={box} key={index} highlight={showBbox}/>
                        ))
                    }
                </div>
            </div>
        </div> : ''}</>
}

export default Page
