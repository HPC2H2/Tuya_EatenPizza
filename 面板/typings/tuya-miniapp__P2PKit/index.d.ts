
declare namespace ty.p2p {
  
  export function P2PSDKInit(params?: {
    
    userId?: string
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

  
  export function connectDevice(params: {
    
    deviceId: string
    
    mode?: number
    
    timeout?: number
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

  
  export function isP2PActive(params: {
    
    deviceId: string
    
    mode?: number
    
    timeout?: number
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

  
  export function isP2PActiveSync(params?: ThingP2PConnectionParams): null

  
  export function queryAlbumFileIndexs(params: {
    
    deviceId: string
    
    albumName: string
    success?: (params: {
      
      count: number
      
      items: ThingP2PAlbumFileIndex[]
    }) => void
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

  
  export function uploadFile(params: {
    
    deviceId: string
    
    albumName: string
    
    filePath: string
    
    extData?: string
    
    extDataLength?: number
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

  
  export function downloadFile(params: {
    
    deviceId: string
    
    albumName: string
    
    filePath: string
    
    jsonfiles: string
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

  
  export function downloadStream(params: {
    
    deviceId: string
    
    albumName: string
    
    jsonfiles: string
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

  
  export function appendDownloadStream(params: {
    
    deviceId: string
    
    albumName: string
    
    jsonfiles: string
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

  
  export function cancelUploadTask(params: {
    
    deviceId: string
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

  
  export function cancelDownloadTask(params: {
    
    deviceId: string
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

  
  export function disconnectDevice(params: {
    
    deviceId: string
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

  
  export function deInitSDK(params?: {
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

  
  export function onSessionStatusChange(
    listener: (params: ThingP2PSessionStatus) => void
  ): void

  
  export function offSessionStatusChange(
    listener: (params: ThingP2PSessionStatus) => void
  ): void

  
  export function onUploadProgressUpdate(
    listener: (params: ProgressEvent) => void
  ): void

  
  export function offUploadProgressUpdate(
    listener: (params: ProgressEvent) => void
  ): void

  
  export function onDownloadProgressUpdate(
    listener: (params: DownloadProgressEvent) => void
  ): void

  
  export function offDownloadProgressUpdate(
    listener: (params: DownloadProgressEvent) => void
  ): void

  
  export function onDownloadTotalProgressUpdate(
    listener: (params: DownloadTotalProgressEvent) => void
  ): void

  
  export function offDownloadTotalProgressUpdate(
    listener: (params: DownloadTotalProgressEvent) => void
  ): void

  
  export function onFileDownloadComplete(
    listener: (params: FileDownloadCompletionEvent) => void
  ): void

  
  export function offFileDownloadComplete(
    listener: (params: FileDownloadCompletionEvent) => void
  ): void

  
  export function onStreamPacketReceive(
    listener: (params: StreamDownloadPacketReceivedEvent) => void
  ): void

  
  export function offStreamPacketReceive(
    listener: (params: StreamDownloadPacketReceivedEvent) => void
  ): void

  export type ThingP2PConnectionParams = {
    
    deviceId: string
    
    mode?: number
    
    timeout?: number
  }

  export type ThingP2PAlbumFileIndex = {
    
    idx: number
    
    channel: number
    
    type: number
    
    dir: number
    
    filename: string
    
    createTime: number
    
    duration: number
  }

  export type ThingP2PSessionStatus = {
    
    deviceId: string
    
    status: number
  }

  export type ProgressEvent = {
    
    deviceId: string
    
    filePath: string
    
    progress: number
  }

  export type DownloadProgressEvent = {
    
    deviceId: string
    
    fileName: string
    
    progress: number
  }

  export type DownloadTotalProgressEvent = {
    
    deviceId: string
    
    progress: number
  }

  export type FileDownloadCompletionEvent = {
    
    deviceId: string
    
    fileName: string
    
    index: number
  }

  export type StreamDownloadPacketReceivedEvent = {
    
    deviceId: string
    
    totalFiles: number
    
    fileName: string
    
    fileIndex: number
    
    fileLength: number
    
    packetData: string
    
    packetLength: number
    
    fileSerialNumber: number
    
    packetIndex: number
    
    packetType: number
  }
}
