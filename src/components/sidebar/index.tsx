import React from 'react'
import Header from "@/components/sidebar/partials/header";
import {Tabs} from "antd";
import Sections from "@/components/sidebar/partials/sections";
import Footer from "@/components/sidebar/partials/footer";

const Sidebar: React.FC = () => {
    return <div>
        <Header/>
        <div className="p-4">
            <div className="my-2 dark:text-white text-black">
                Fields
            </div>
            <Tabs
                defaultActiveKey="regular_fields"
                items={[
                    {
                        key: 'regular_fields',
                        label: <p className={'dark:text-white'}>Regular Fields</p>,
                        children: <div className={'h-[calc(100vh-250px)] overflow-auto'}><Sections/></div>
                    },
                    {
                        key: 'column_fields',
                        label: <p className={'dark:text-white'}>Column Fields</p>,
                        children: <p className={'dark:text-white text-black'}>Column fields</p>
                    }
                ]}
            />
        </div>
        <Footer/>
    </div>
}

export default Sidebar
