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
        <div className={'z-20 sticky bottom-[8px] ml-auto w-[100px] bg-white rounded-md'}>
            <div className="flex justify-center items-center">
                <Button icon={<MinusOutlined/>} disabled={zoom <= 75} onClick={() => {
                    if (zoom > 75) {
                        setZoom(zoom - 1)
                    }
                }}/>
                <div className={'p-2'}>
                    {zoom}%
                </div>
                <Button icon={<PlusOutlined/>} disabled={zoom >= 100} onClick={() => {
                    if (zoom < 100) {
                        setZoom(zoom + 1)
                    }
                }}/>
            </div>
        </div>
    )
}

export default ZoomChanger
