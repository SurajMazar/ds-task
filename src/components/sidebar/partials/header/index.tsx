import React from 'react'
import useDocumentViewerContext from "@/core/hooks/useDocumentViewerContext";
import useTheme from "@/core/hooks/useTheme";
import {Checkbox, Switch} from "antd";

const Header: React.FC = () => {

    /**
     * HOOKS
     */
    const {setShowBbox, showBbox} = useDocumentViewerContext()
    const {toggleDarkMode, darkMode} = useTheme()

    return (
        <div className={'bg-white dark:bg-sidebar-dark-bg dark:border-white border-black border-b-2 p-4'}>
            <div className="flex gap-4">
                <div className="flex gap-2">
                    <Switch checkedChildren="Dark" unCheckedChildren="Light" checked={darkMode} onChange={
                        () => {
                            toggleDarkMode()
                        }}
                    />
                </div>
                <div>
                    <Checkbox checked={showBbox} onChange={(e) => setShowBbox(e?.target?.checked)} className={'dark:text-white text-black'}>BBOX</Checkbox>
                </div>
            </div>
        </div>
    )
}

export default Header
