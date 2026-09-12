
declare namespace ty.ipc {
  
  export function generateSignedUrl(params: {
    
    path: string
    
    expiration: string
    
    region: string
    
    token: string
    
    sk: string
    
    provider: string
    
    endpoint: string
    
    ak: string
    
    bucket: string
    success?: (params: {
      
      signedUrl: string
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

  
  export function isSupportAIDetectConfig(params?: {
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

  
  export function isSupportCameraPresetPointConfig(params?: {
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

  
  export function enableAudioNS(params: {
    
    deviceId: string
    
    enable: boolean
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

  
  export function enableAudioAGC(params: {
    
    deviceId: string
    
    enable: boolean
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

  
  export function enableAudioAEC(params: {
    
    deviceId: string
    
    enable: boolean
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

  
  export function obtainCameraConfig(params: {
    
    deviceId: string
    success?: (params: {
      
      supportedAudioMode: number
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

  
  export function startIdentifyingBirds(params: {
    
    identifier: string
    
    deviceId: string
    success?: (params: {
      
      result: Object
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

  
  export function cancelIdentifyingBirds(params: {
    
    identifier: string
    
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

  
  export function isSupportAICloud(params?: {
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

  
  export function isSupportBirdFeeder(params?: {
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

  
  export function isSupportFullScreen(params?: {
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

  
  export function isSupportWonderfulMoment(params?: {
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

  
  export function isShouldUseNMC(params?: {
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

  
  export function isSupportScreenIPCCustomWallpaper(params?: {
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

  
  export function downloadCloudPlayBack(params: {
    
    deviceId: string
    
    url: string
    
    path: string
    
    prefix: number
    
    videoSegments: number[]
    
    videoSegmentSize: number
    success?: (params: { path: string }) => void
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

  
  export function cancelDownloadCloudPlayBack(params: {
    
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

  
  export function publishDps(params: {
    
    deviceId: string
    
    dps: any
    
    mode: number
    
    options: any
    success?: (params: boolean) => void
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

  
  export function isDeviceSupportUploadLog(params: {
    
    deviceId: string
    success?: (params: boolean) => void
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

  
  export function uploadDeviceLog(params: {
    
    deviceId: string
    
    timeout: number
    success?: (params: {
      
      deviceId: string
      
      result: boolean
      
      extInfo?: any
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

  
  export function downloadResourceToPhoneAlbum(params: {
    
    deviceId: string
    
    fileType?: number
    
    url: string
    
    secretKey?: string
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

  
  export function shareResourceBySystem(params: {
    
    deviceId: string
    
    fileType?: number
    
    url?: string
    
    filePath?: string
    
    secretKey?: string
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

  
  export function showIdentifyingBirdView(params: {
    
    deviceId: string
    
    identifier: string
    
    theme?: number
    
    scannerColor?: string
    
    extData?: Object
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

  
  export function dismissIdentifyingBirdView(params?: {
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

  
  export function snapshootToSandbox(params: {
    
    deviceId: string
    
    filePath?: string
    success?: (params: {
      
      filePath: string
      
      base64data: string
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

  
  export function uploadAIFeatureImage(params: {
    
    deviceId: string
    
    taskId: string
    
    businessType?: string
    
    contentType?: string
    
    filePath: string
    success?: (params: {
      
      bucket: string
      
      requestNo: string
      
      secretKey: string
      
      filePath: string
      
      url: string
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

  
  export function removeSnapshootFromSandbox(params?: {
    
    deviceId?: string
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

  
  export function downloadEncryptionImage(params: {
    
    url: string
    
    encryptKey: string
    
    deviceId: string
    
    fileName: string
    success?: (params: { path: string }) => void
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

  
  export function deleteImages(params: {
    
    deviceId: string
    
    imagePath: string[]
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

  
  export function createMediaDevice(params: {
    
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

  
  export function destroyMediaDevice(params: {
    
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

  
  export function startDownloadMessageVideo(params: {
    
    deviceId: string
    
    path: string
    
    encryptKey: string
    
    savePath: number
    
    rotateMode: number
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

  
  export function startDownloadMessageVideoForComposition(params: {
    
    deviceId: string
    
    fileInfo: string
    
    savePath: number
    
    option?: MediaProcessOptionModel
    success?: (params: {
      
      path: string
      
      thingfilePath: string
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

  
  export function cancelDownloadMessageVideo(params?: {
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

  
  export function getVideoBitrateKbps(params: {
    
    deviceId: string
    
    extendParam: Object
    success?: (params: {
      
      kbps: string
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

  
  export function isSupportFloatWindow(params: {
    
    deviceId: string
    
    extendParam: Object
    success?: (params: {
      
      isSupport: boolean
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

  
  export function openFloatWindow(params: {
    
    deviceId: string
    
    extendParam: Object
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

  
  export function isSupportedTalk(params: {
    
    deviceId: string
    
    extendParam: Object
    success?: (params: {
      
      isSupport: boolean
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

  
  export function getCurrentSupportedTalkMode(params: {
    
    deviceId: string
    
    extendParam: Object
    success?: (params: {
      
      talkbackMode: number
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

  
  export function ipcTTTOperatorLog(params: {
    
    ipcLogString: string
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

  
  export function wakeUpDoorBell(params: {
    
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

  
  export function enableVoiceEffect(params: {
    
    deviceId: string
    
    effectType: number
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

  
  export function getLastAudioEffect(params: {
    
    deviceId: string
    success?: (params: {
      
      effectType: number
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

  
  export function isConnected(params: {
    
    deviceId: string
    success?: (params: {
      
      isConnected: boolean
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

  
  export function isConnecting(params: {
    
    deviceId: string
    success?: (params: {
      
      isConnecting: boolean
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

  
  export function connect(params: {
    
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

  
  export function disConnect(params: {
    
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

  
  export function isDisConnect(params: {
    
    deviceId: string
    success?: (params: {
      
      isDisConnect: boolean
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

  
  export function enableDebugLog(params: {
    
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

  
  export function disableDebugLog(params: {
    
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

  
  export function uploadAppLog(params?: {
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

  
  export function isSupportPlaybackV2(params?: {
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

  
  export function isSupportDoorLockAOV(params?: {
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

  
  export function supportDetectionSetting(params?: {
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

  
  export function updateCameraSmartFrame(params: {
    
    devId: string
    
    frameType?: number
    
    value?: string
    
    openState?: boolean
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

  
  export function getCameraSmartFrame(params: {
    
    devId: string
    success?: (params: {
      
      itemInfo: string[]
      
      openState: boolean
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

  
  export function updateCameraCrosslineFrame(params: {
    
    devId: string
    
    lineType?: number
    
    value?: string
    
    openState?: boolean
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

  
  export function getCameraCrosslineFrame(params: {
    
    devId: string
    success?: (params: {
      
      itemInfo: string[]
      
      openState: boolean
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

  
  export function updateCameraAudioMode(params: {
    
    devId: string
    
    mode: number
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

  
  export function getTTTAbilityKeyList(params: {
    
    key: string
    success?: (params: {
      
      abilityList: string[]
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

  
  export function gotoCameraSettingsRouter(params: {
    
    url: string
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

  
  export function couldChangeTalkbackMode(params: {
    
    devId: string
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

  
  export function doorbellCallConfig(params?: {
    
    ignoreWhenCalling?: boolean
    
    doorbellRingTimeOut?: number
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

  
  export function acceptDoorbellCall(params: {
    
    messageId: string
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

  
  export function refuseDoorbellCall(params: {
    
    messageId: string
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

  
  export function hangupDoorbellCall(params: {
    
    messageId: string
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

  
  export function isSupportedCustomDefaultAudioConfig(params?: {
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

  
  export function onCreateViewSuccess(
    listener: (params: MessageCreateViewModel) => void
  ): void

  
  export function offCreateViewSuccess(
    listener: (params: MessageCreateViewModel) => void
  ): void

  
  export function onPlayMessageVideoInfo(
    listener: (params: MessageVideoInfoModel) => void
  ): void

  
  export function offPlayMessageVideoInfo(
    listener: (params: MessageVideoInfoModel) => void
  ): void

  
  export function onPlayMessageAudioInfo(
    listener: (params: MessageAudioInfoModel) => void
  ): void

  
  export function offPlayMessageAudioInfo(
    listener: (params: MessageAudioInfoModel) => void
  ): void

  
  export function onPlayMessageVideoFinish(
    listener: (params: MessageVideoFinishModel) => void
  ): void

  
  export function offPlayMessageVideoFinish(
    listener: (params: MessageVideoFinishModel) => void
  ): void

  
  export function onPlayMessageVideoError(
    listener: (params: MessageVideoErrorModel) => void
  ): void

  
  export function offPlayMessageVideoError(
    listener: (params: MessageVideoErrorModel) => void
  ): void

  
  export function onCloudPlayBackDownloadProgress(
    listener: (params: cloudPlayBackDownloadProgressBody) => void
  ): void

  
  export function offCloudPlayBackDownloadProgress(
    listener: (params: cloudPlayBackDownloadProgressBody) => void
  ): void

  
  export function onIdentifyingBirdViewActionTrigger(
    listener: (params: IdentifyBirdViewActionTriggerEvent) => void
  ): void

  
  export function offIdentifyingBirdViewActionTrigger(
    listener: (params: IdentifyBirdViewActionTriggerEvent) => void
  ): void

  
  export function onDownloadMessageVideoFinished(
    listener: (params: DownloadMessageVideoFinishedModel) => void
  ): void

  
  export function offDownloadMessageVideoFinished(
    listener: (params: DownloadMessageVideoFinishedModel) => void
  ): void

  
  export function onDownloadMessageVideoProgress(
    listener: (params: DownloadMessageVideoProgressModel) => void
  ): void

  
  export function offDownloadMessageVideoProgress(
    listener: (params: DownloadMessageVideoProgressModel) => void
  ): void

  
  export function onDebugLogHit(
    listener: (params: PanelDebugLogBody) => void
  ): void

  
  export function offDebugLogHit(
    listener: (params: PanelDebugLogBody) => void
  ): void

  
  export function onDoorBellCallHangUp(
    listener: (params: DoorbellCallEventResponse) => void
  ): void

  
  export function offDoorBellCallHangUp(
    listener: (params: DoorbellCallEventResponse) => void
  ): void

  
  export function onDoorBellCallHangUpByOther(
    listener: (params: DoorbellCallEventResponse) => void
  ): void

  
  export function offDoorBellCallHangUpByOther(
    listener: (params: DoorbellCallEventResponse) => void
  ): void

  
  export function onDoorBellCallCancel(
    listener: (params: DoorbellCallEventResponse) => void
  ): void

  
  export function offDoorBellCallCancel(
    listener: (params: DoorbellCallEventResponse) => void
  ): void

  export type Object = {}

  export type MediaProcessOptionModel = {
    
    targetWidth: number
    
    targetHeight: number
    
    useFirstVideoResolution: boolean
    
    rotation: number
  }

  export type MessageCreateViewModel = {
    
    success: boolean
  }

  export type MessageVideoInfoModel = {
    
    timestamp: string
    
    width: number
    
    height: number
    
    frameRate: number
    
    progress: number
    
    duration: number
  }

  export type MessageAudioInfoModel = {
    
    timestamp: string
    
    width: number
    
    height: number
    
    frameRate: number
    
    progress: number
    
    duration: number
  }

  export type MessageVideoFinishModel = {
    
    palyFinish: boolean
  }

  export type MessageVideoErrorModel = {
    
    errorCode: number
    
    errorMsg: string
  }

  export type cloudPlayBackDownloadProgressBody = {
    
    progress: number
  }

  export type IdentifyBirdViewActionTriggerEvent = {
    
    deviceId: string
    
    index?: number
  }

  export type DownloadMessageVideoFinishedModel = {
    
    filePath: string
  }

  export type DownloadMessageVideoProgressModel = {
    
    progress: number
  }

  export type PanelDebugLogBody = {
    
    logList: string[]
  }

  export type DoorbellCallEventResponse = {
    
    response?: any
  }

  export type EnableAudioNSParams = {
    
    deviceId: string
    
    enable: boolean
  }

  export type EnableAudioAGCParams = {
    
    deviceId: string
    
    enable: boolean
  }

  export type EnableAudioAECParams = {
    
    deviceId: string
    
    enable: boolean
  }

  export type CameraConfigParams = {
    
    deviceId: string
  }

  export type CameraConfig = {
    
    supportedAudioMode: number
  }

  export type IdentifyingBirdsParams = {
    
    identifier: string
    
    deviceId: string
  }

  export type RecognizeBirdSuccessModel = {
    
    result: Object
  }

  export type DownloadCloudVideoParams = {
    
    deviceId: string
    
    url: string
    
    path: string
    
    prefix: number
    
    videoSegments: number[]
    
    videoSegmentSize: number
  }

  export type CloudPlayBackDownloadSuccessModel = {
    path: string
  }

  export type DpsPublish = {
    
    deviceId: string
    
    dps: any
    
    mode: number
    
    options: any
  }

  export type DeviceSupportUploadLogParams = {
    
    deviceId: string
  }

  export type DeviceUploadLogParams = {
    
    deviceId: string
    
    timeout: number
  }

  export type DeviceUploadLogResultModel = {
    
    deviceId: string
    
    result: boolean
    
    extInfo?: any
  }

  export type DownloadResourceParams = {
    
    deviceId: string
    
    fileType?: number
    
    url: string
    
    secretKey?: string
  }

  export type ShareResourceParams = {
    
    deviceId: string
    
    fileType?: number
    
    url?: string
    
    filePath?: string
    
    secretKey?: string
  }

  export type IdentifyBirdLoadingUIParams = {
    
    deviceId: string
    
    identifier: string
    
    theme?: number
    
    scannerColor?: string
    
    extData?: Object
  }

  export type SnapshootToSandboxParams = {
    
    deviceId: string
    
    filePath?: string
  }

  export type SnapshootToSandboxResponse = {
    
    filePath: string
    
    base64data: string
  }

  export type UploadAIFeatureImageParams = {
    
    deviceId: string
    
    taskId: string
    
    businessType?: string
    
    contentType?: string
    
    filePath: string
  }

  export type UploadAIFeatureImageResponse = {
    
    bucket: string
    
    requestNo: string
    
    secretKey: string
    
    filePath: string
    
    url: string
  }

  export type RemoveSnapshotParams = {
    
    deviceId?: string
  }

  export type DownloadEncryptionImageParams = {
    
    url: string
    
    encryptKey: string
    
    deviceId: string
    
    fileName: string
  }

  export type StringCallbackClass = {
    path: string
  }

  export type DeleteImageParams = {
    
    deviceId: string
    
    imagePath: string[]
  }

  export type MediaDeviceModel = {
    
    deviceId: string
  }

  export type DownloadVideoParams = {
    
    deviceId: string
    
    path: string
    
    encryptKey: string
    
    savePath: number
    
    rotateMode: number
  }

  export type DownloadVideoParamsV2 = {
    
    deviceId: string
    
    fileInfo: string
    
    savePath: number
    
    option?: MediaProcessOptionModel
  }

  export type DownloadVideoSuccessModel = {
    
    path: string
    
    thingfilePath: string
  }

  export type VideoBitrateParams = {
    
    deviceId: string
    
    extendParam: Object
  }

  export type VideoBitRateModel = {
    
    kbps: string
  }

  export type SupportFloatWindowParams = {
    
    deviceId: string
    
    extendParam: Object
  }

  export type SupportFloatWindowModel = {
    
    isSupport: boolean
  }

  export type OpenFloatWindowParams = {
    
    deviceId: string
    
    extendParam: Object
  }

  export type SupportedTalkParams = {
    
    deviceId: string
    
    extendParam: Object
  }

  export type SupportedTalkModel = {
    
    isSupport: boolean
  }

  export type CurrentSupportedTalkParams = {
    
    deviceId: string
    
    extendParam: Object
  }

  export type CurrentSupportedTalkModel = {
    
    talkbackMode: number
  }

  export type IPCLogModel = {
    
    ipcLogString: string
  }

  export type WakeUpDoorBellModel = {
    
    deviceId: string
  }

  export type EnableVoiceEffectModel = {
    
    deviceId: string
    
    effectType: number
  }

  export type AudioEffectModel = {
    
    deviceId: string
  }

  export type LastAudioEffectModel = {
    
    effectType: number
  }

  export type ConnectModel = {
    
    deviceId: string
  }

  export type ConnectedResultModel = {
    
    isConnected: boolean
  }

  export type ConnectingResultModel = {
    
    isConnecting: boolean
  }

  export type DisConnectResultModel = {
    
    isDisConnect: boolean
  }

  export type CameraSmartFrameSettingParams = {
    
    devId: string
    
    frameType?: number
    
    value?: string
    
    openState?: boolean
  }

  export type CameraSmartFrameCommonParams = {
    
    devId: string
  }

  export type CameraSmartFrameGetParams = {
    
    itemInfo: string[]
    
    openState: boolean
  }

  export type CameraCrosslineFrameSettingParams = {
    
    devId: string
    
    lineType?: number
    
    value?: string
    
    openState?: boolean
  }

  export type CameraCrosslineGetParams = {
    
    itemInfo: string[]
    
    openState: boolean
  }

  export type CameraTalkModeParams = {
    
    devId: string
    
    mode: number
  }

  export type AbilityKeyParams = {
    
    key: string
  }

  export type AbilityListModel = {
    
    abilityList: string[]
  }

  export type RouterParamsBean = {
    
    url: string
  }

  export type DeviceParamsBean = {
    
    devId: string
  }

  export type DoorbellConfigParams = {
    
    ignoreWhenCalling?: boolean
    
    doorbellRingTimeOut?: number
  }

  export type DoorbellCallParams = {
    
    messageId: string
  }
}
