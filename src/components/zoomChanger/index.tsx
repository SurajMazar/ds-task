import React from 'react'
import UseDocumentViewerContext from "@/core/hooks/useDocumentViewerContext";
import {Button} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";

const ZoomChanger: React.FC = () => {

    /**
     * COMPONENT HOOKS
     */
    const {zoom, setZoom} = UseDocumentViewerContext()

    return (
        <div className={'z-20 sticky bottom-[15px] ml-auto w-[100px] dark:bg-sidebar-dark-bg bg-white dark:text-white text-black rounded-md'}>
            <div className="flex justify-center items-center">
                <Button icon={<MinusOutlined/>}
                        className={'dark:!bg-sidebar-dark-bg !bg-white dark:!text-white !text-black'}
                        disabled={zoom <= 75} onClick={() => {
                    if (zoom > 75) {
                        setZoom(zoom - 1)
                    }
                }}/>
                <div className={'p-2 dark:bg-sidebar-dark-bg bg-white dark:text-white text-black'}>
                    {zoom}%
                </div>
                <Button
                    className={'dark:!bg-sidebar-dark-bg !bg-white dark:!text-white !text-black'}
                    icon={<PlusOutlined/>} disabled={zoom >= 100} onClick={() => {
                    if (zoom < 100) {
                        setZoom(zoom + 1)
                    }
                }}/>
            </div>
        </div>
    )
}

export default ZoomChanger
