import React, {useState} from 'react'
import useDocumentViewerContext from "@/core/hooks/useDocumentViewerContext";
import {Button, Modal, Popconfirm} from "antd";

const Footer: React.FC = () => {

    /**
     * HOOKS
     */
    const {pageSectionChildren, selectedSections, setSelectedSections} = useDocumentViewerContext()

    const [showSuccessModal, setShowSuccessModal] = useState(false)

    return (
        <div className={'dark:bg-sidebar-dark-bg dark:border-white border-black border-t-2 p-4'}>
            <div className="flex justify-between">
                <div>
                    <Button
                        className={'dark:!bg-sidebar-dark-bg !bg-white dark:!text-white !text-black'}
                        onClick={() => {
                        if (selectedSections?.length === pageSectionChildren?.length) {
                            setSelectedSections([])
                        } else {
                            setSelectedSections(pageSectionChildren.map(section => section?.id))
                        }
                    }}>{selectedSections?.length === pageSectionChildren?.length ? 'Un Select all' : 'Select all'}</Button>
                </div>
                <div>
                    <Popconfirm
                        disabled={selectedSections.length < 1}
                        onConfirm={() => {
                            setShowSuccessModal(true)
                        }} title={'Are you sure you want to confirm the selected fields??'}>
                        <Button
                            className={'dark:!bg-sidebar-dark-bg !bg-white dark:!text-white !text-black'}
                            disabled={selectedSections.length < 1}
                        >Confirm</Button>
                    </Popconfirm>
                </div>
            </div>
            <Modal onOk={() => setShowSuccessModal(false)} open={showSuccessModal} onCancel={() => setShowSuccessModal(false)}>
                <p className="text-center">Fields confirmed and processed successfully!</p>
            </Modal>
        </div>
    )
}

export default Footer
