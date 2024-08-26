import { reactive } from 'vue'

export enum DeviceSize {
  s,
  md,
  lg,
  xl
}

export type DeviceInfo = {
  windowWidth: number
  size: DeviceSize
}

const calcSize = (width: number): DeviceSize => {
  if (width < 375) return DeviceSize.s
  if (width < 768) return DeviceSize.md
  if (width < 1024) return DeviceSize.lg
  return DeviceSize.xl
}

const deviceInfo = reactive({
  windowWidth: window.innerWidth,
  size: DeviceSize.s
})

deviceInfo.size = calcSize(window.innerWidth)

window.addEventListener('resize', () => {
  const width = window.innerWidth
  deviceInfo.windowWidth = width
  deviceInfo.size = calcSize(width)
})

export const useDevice = (): DeviceInfo => {
  return deviceInfo
}

export default useDevice
