import {useDispatch, useSelector} from 'react-redux'
import {useCallback} from 'react'
import appConfigSlice from '@/core/store/slice/appConfig.slice'
import {RootStateInterface} from "@/@types/store";

const useTheme = () => {
    /**
     * HOOKS
     */
    const dispatch = useDispatch()
    const appConfig = useSelector((state: RootStateInterface) => state.appConfig)

    /**
     * TOGGLING BETWEEN DARK AND LIGHT MODE
     */
    const toggleDarkMode = useCallback(() => {
        dispatch(appConfigSlice.actions.toggleDarkMode(!appConfig.darkMode))
    }, [dispatch, appConfig.darkMode])

    return {toggleDarkMode, darkMode: appConfig?.darkMode}
}

export default useTheme
