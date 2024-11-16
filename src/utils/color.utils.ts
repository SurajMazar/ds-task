import { COLORS } from '@/settings/constant/colors.constant'

/**
 *
 * @param index
 */
export const getColorViaIndex = (index: number) => {
    return COLORS[index < COLORS.length ? index : index % COLORS.length]
}
