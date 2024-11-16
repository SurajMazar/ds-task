import React, {useMemo} from 'react'
import {SectionChildInterface} from "@/@types/model/section.model";
import {getColorViaIndex} from "@/utils/color.utils";
import {Button, Checkbox, Dropdown, Popconfirm} from "antd";
import useDocumentViewerContext from "@/core/hooks/useDocumentViewerContext";
import {MoreOutlined} from "@ant-design/icons";

const SectionCard: React.FC<{
    section: SectionChildInterface,
    index: number
}> = (props) => {

    /**
     * COMPONENT PROPS
     */
    const {section, index,} = props

    /**
     * HOOKS
     */
    const {
        selectedSections,
        deletePageSectionChildren,
        setSelectedSections,
        setHoverActiveSection
    } = useDocumentViewerContext()

    /**
     * COLOR CODE FOR THE
     */
    const colorCode = useMemo(() => {
        return getColorViaIndex(index)
    }, [index])

    /**
     * INITIAL OF TITLE
     */
    const getInitials = useMemo(() => {
        return section?.label?.split(' ').map(item => item?.charAt(0))?.join('')?.toUpperCase() ?? 'FB'
    }, [section])

    const selected = useMemo(() => {
        return selectedSections.includes(section.id)
    }, [selectedSections, section])

    return (
        <>
            <div className="my-4 p-4 shadow-lg rounded-md" onMouseOver={() => {
                setHoverActiveSection(section?.id)
            }} onMouseLeave={() => setHoverActiveSection(undefined)}>
                <div className="flex items-start gap-4">
                    <div className={'rounded-md dark:text-white p-2 text-black border-l-4 text-center'}
                         style={{
                             borderColor: colorCode?.hex,
                             backgroundColor: `rgba(${colorCode?.code},0.6)`
                         }}
                    >
                        {getInitials}
                    </div>

                    <div>
                        <h1 className="text-lg dark:text-white text-gray-600 mb-2">{section?.label}</h1>
                        <p className={'dark:text-white text-gray-600'}>{section?.content?.value}</p>
                    </div>

                    <div className={'ml-auto'}>
                        <div className="flex gap-1">
                            <Checkbox checked={selected} onChange={(event) => {
                                if (event?.target?.checked) {
                                    setSelectedSections((prev) => {
                                        return [
                                            ...prev,
                                            section?.id
                                        ]
                                    })
                                } else {
                                    setSelectedSections(pre => {
                                        return pre.filter(id => section?.id !== id)
                                    })
                                }
                            }}/>
                            <Dropdown
                                trigger={['click']}
                                menu={{
                                    items: [{
                                        label: <>
                                            <Popconfirm
                                                onOpenChange={(_, e) => e?.stopPropagation()}
                                                onConfirm={() => {
                                                    deletePageSectionChildren(section, 'id')
                                                }} title={'Are you sure?'}>
                                                Delete
                                            </Popconfirm>
                                        </>,
                                        key: 'delete',
                                    }]
                                }}>
                                <Button type={'link'} icon={<MoreOutlined className={'dark:text-white text-black'}/>}/>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionCard
