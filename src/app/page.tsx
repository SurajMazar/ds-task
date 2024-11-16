'use client'
import { DocumentViewerContextWrapper } from '@/containers/context/DocumentViewerContext'
import DocumentViewer from '@/components/documentViewer'
import Sidebar from '@/components/sidebar'
import { Col, Row } from 'antd'

export default function Home() {
    return (
        <>
            <DocumentViewerContextWrapper>
                <Row gutter={10}>
                    <Col xs={18} className={'h-screen overflow-auto'}>
                        <DocumentViewer />
                    </Col>
                    <Col xs={6}>
                        <Sidebar />
                    </Col>
                </Row>
            </DocumentViewerContextWrapper>
        </>
    )
}
