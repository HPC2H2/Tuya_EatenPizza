
declare namespace ty.media {
  export type ManagerContext = {
    
    interval?: number
    
    managerId: number
  }

  
  interface GetRGBAudioManagerTask {
    
    startRGBRecord(params: {
      
      interval?: number
      success?: (params: null) => void
      fail?: (params: {
        errorMsg: string
        errorCode: string | number
        innerError: {
          errorCode: string | number
          errorMsg: string
        }
      }) => void
      complete?: () => void
    }): void

    
    stopRGBRecord(params: {
      
      interval?: number
      success?: (params: null) => void
      fail?: (params: {
        errorMsg: string
        errorCode: string | number
        innerError: {
          errorCode: string | number
          errorMsg: string
        }
      }) => void
      complete?: () => void
    }): void

    
    onAudioRgbChange(
      listener: (params: {
        
        body: string
      }) => void
    ): void

    
    offAudioRgbChange(
      listener: (params: {
        
        body: string
      }) => void
    ): void
  }
  
  export function getRGBAudioManager(params: {
    
    interval?: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): GetRGBAudioManagerTask
}
