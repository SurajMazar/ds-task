'use client'
import React, {PropsWithChildren} from 'react'
import useTheme from '@/core/hooks/useTheme'
import ReactQueryContainer from '@/containers/hoc/ReactQueryContainer'
import StyledComponentsRegistry from "@/containers/hoc/AntdRegistry";

const AppLayout: React.FC<
    PropsWithChildren<{
        bodyClasses: string
    }>
> = (props) => {
    /**
     * COMPONENT PROPS
     */
    const {children, bodyClasses} = props

    /**
     * HOOKS
     */
    const {darkMode} = useTheme()

    return (
        <html lang="en" className={`${darkMode ? 'dark' : 'light'}`}>
        <body className={bodyClasses}>
        <ReactQueryContainer>
            <StyledComponentsRegistry>
                {children}
            </StyledComponentsRegistry>
        </ReactQueryContainer>
        </body>
        </html>
    )
}

export default AppLayout
