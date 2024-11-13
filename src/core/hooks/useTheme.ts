import { useDispatch } from 'react-redux'
import useStore from '@/core/hooks/useStore'
import { useCallback } from 'react'
import appConfigSlice from '@/core/store/slice/appConfig.slice'

const useTheme = () => {
    /**
     * HOOKS
     */
    const dispatch = useDispatch()
    const { appConfig } = useStore()

    /**
     * TOGGLING BETWEEN DARK AND LIGHT MODE
     */
    const toggleDarkMode = useCallback(() => {
        dispatch(appConfigSlice.actions.toggleDarkMode(!appConfig.darkMode))
    }, [dispatch, appConfig.darkMode])

    return { toggleDarkMode, darkMode: appConfig?.darkMode }
}

export default useTheme
