import React from 'react'
import useDocumentViewerContext from '@/core/hooks/useDocumentViewerContext'
import {Spin} from 'antd'
import Page from "@/components/documentViewer/partials/page";
import ZoomChanger from "@/components/zoomChanger";

const DocumentViewer: React.FC = () => {
    /**
     * HOOKS
     */
    const {pages, loadingDocuments} = useDocumentViewerContext()


    return <div className={'bg-doc-bg p-4  min-h-screen relative w-fit min-w-full select-none'}>
        {pages?.length ? pages.map((page, index) => (
            <Page page={page} pageNo={index + 1} key={page?.id}/>
        )) : !loadingDocuments ? <h1 className={'text-white w-full h-full text-center'}>No pages.</h1> :
            <div className={'w-full h-screen flex justify-center items-center'}>
                <Spin className={'white-spin'}/>
            </div>
        }
        <ZoomChanger/>
    </div>
}

export default DocumentViewer
