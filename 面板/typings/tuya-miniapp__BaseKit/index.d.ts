
declare namespace ty {
  
  export function stopAccelerometer(params?: {
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

  
  export function startAccelerometer(params?: {
    
    interval?: AccelerometerInterval
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

  
  export function getAudioFileDuration(params: {
    
    path: string
    success?: (params: {
      
      duration: number
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

  
  export function authorize(params?: {
    
    scope?: ScopeBean
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

  
  export function authorizeStatus(params?: {
    
    scope?: ScopeBean
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

  
  export function getSetting(params?: {
    success?: (params: {
      
      authSetting: any
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

  
  export function authorizePolicy(params: {
    
    type: string
    
    version: string
    
    status: number
    success?: (params: {
      
      agreed: boolean
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

  
  export function authorizePolicyStatus(params: {
    
    type: string
    success?: (params: {
      
      title: string
      
      agreementName: string
      
      agreementDesc: string
      
      link: string
      
      version: string
      
      sign: number
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

  
  export function navigateToMiniProgram(params?: {
    
    appId?: string
    
    aiPtChannel?: string
    
    aiPtType?: string
    
    path?: string
    
    position?: string
    
    extraData?: any
    
    envVersion?: string
    
    shortLink?: string
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

  
  export function canIUse(params: {
    
    schema: string
    success?: (params: {
      
      result: boolean
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

  
  export function canIUseSync(schemaBean?: SchemaBean): {
    
    result: boolean
  }

  
  export function fetchVideoThumbnails(params: {
    
    filePath: string
    
    startTime: number
    
    endTime: number
    
    thumbnailCount: number
    
    thumbnailWidth: number
    
    thumbnailHeight: number
    success?: (params: {
      
      thumbnailsPath?: string[]
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

  
  export function clearVideoThumbnails(params: {
    
    videoName: string
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

  
  export function clipVideo(params: {
    
    filePath: string
    
    startTime: number
    
    endTime: number
    
    level: number
    success?: (params: {
      
      videoClipPath?: string
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

  
  export function startCompass(params?: {
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

  
  export function stopCompass(params?: {
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

  
  export function startDeviceMotionListening(params?: {
    
    interval?: DeviceMotionInterval
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

  
  export function stopDeviceMotionListening(params?: {
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

  
  export function getTempDirectory(params?: {
    success?: (params: {
      
      tempDirectory: string
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

  
  export function writeLogFile(params: {
    
    resId: string
    
    logDir?: string
    
    data: string
    
    append?: boolean
    success?: (params: {
      
      filePath?: string
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

  
  export function getFileInfo(params: {
    
    filePath: string
    
    digestAlgorithm: string
    success?: (params: {
      
      size: number
      
      digest: string
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

  
  export function startGyroscope(params?: {
    
    interval?: GyroscopeInterval
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

  
  export function stopGyroscope(params?: {
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

  
  export function initializeUploadFile(params: {
    
    deviceId: string
    
    extData?: Object
    
    type?: string
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

  
  export function uploadFileToDevice(params: {
    
    deviceId: string
    
    sid: string
    
    fileList?: string[]
    
    extData?: Object
    
    type?: string
    
    businessType?: string
    
    fileTypeList?: any
    success?: (params: {
      
      taskId: string
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

  
  export function cancelUploadFileToDevice(params: {
    
    taskId: string
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

  
  export function downloadFileFromDevice(params: {
    
    deviceId: string
    
    homeId: string
    
    tckey: string
    
    fileList?: FileInfoBean[]
    success?: (params: {
      
      taskId: string
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

  
  export function cancelDownloadFileFromDevice(params: {
    
    taskId: string
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

  
  export function compressImage(params: {
    
    fileList?: string[]
    
    dstWidth: number
    
    dstHeight: number
    
    format?: number
    
    imageSize?: number
    success?: (params: {
      
      fileList?: string[]
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

  
  export function compressVideo(params: {
    
    fileList?: string[]
    
    dstWidth: number
    
    dstHeight: number
    
    format?: number
    
    videoSize?: number
    success?: (params: {
      
      fileList?: string[]
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

  
  export function cropImages(params?: {
    
    cropFileList?: CropImageItemBean[]
    success?: (params: {
      
      fileList?: string[]
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

  
  export function chooseImage(params?: {
    
    count?: number
    
    sizeType?: string[]
    
    sourceType?: string[]
    
    disableDismissAnimationAfterSelect?: boolean
    success?: (params: {
      
      tempFilePaths: string[]
      
      tempFiles?: TempFileCB[]
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

  
  export function chooseMedia(params?: {
    
    count?: number
    
    mediaType?: string
    
    sourceType?: string[]
    
    maxDuration?: number
    
    isFetchVideoFile?: boolean
    
    isClipVideo?: boolean
    
    maxClipDuration?: number
    
    isGetAlbumFileName?: boolean
    success?: (params: {
      
      type: string
      
      tempFiles?: TempMediaFileCB[]
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

  
  export function chooseCropImage(params?: {
    
    sourceType?: string[]
    success?: (params: {
      
      path: string
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

  
  export function previewImage(params: {
    
    urls: string[]
    
    current: number
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

  
  export function takePhoto(params: {
    
    bizSource?: string
    
    isShowScan: boolean
    
    guideInfo?: TakePhotoGuide
    
    isLaunchGuideImg: boolean
    
    isLocalModel: boolean
    
    crop: boolean
    success?: (params: {
      
      imagePath: string
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

  
  export function getImageInfo(params: {
    
    src: string
    success?: (params: {
      
      width: number
      
      height: number
      
      orientation: string
      
      type: string
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

  
  export function getVideoInfo(params: {
    
    src: string
    success?: (params: {
      
      width: number
      
      height: number
      
      orientation: string
      
      type: string
      
      duration: number
      
      size: number
      
      fps: number
      
      bitrate: number
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

  
  export function saveVideoToPhotosAlbum(params: {
    
    filePath: string
    
    modifyCreationDate?: boolean
    success?: (params: {
      
      localIdentifier: string
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

  
  export function saveImageToPhotosAlbum(params: {
    
    filePath: string
    
    modifyCreationDate?: boolean
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

  
  export function cropImage(params: {
    
    path: string
    
    width: number
    
    height: number
    
    type: number
    success?: (params: {
      
      cropPath: string
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

  
  export function fetchImageThumbnail(params: {
    
    originPath: string
    
    thumbWidth: number
    
    thumbHeight: number
    success?: (params: {
      
      thumbnailPath: string
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

  
  export function copyImage(params: {
    
    imagePath: string
    success?: (params: {
      
      imagePath: string
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

  
  export function showToast(params: {
    
    title: string
    
    icon?: string
    
    image?: string
    
    duration?: number
    
    mask?: boolean
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

  
  export function showModal(params: {
    
    title: string
    
    content?: string
    
    showCancel?: boolean
    
    cancelText?: string
    
    cancelColor?: string
    
    confirmText?: string
    
    confirmColor?: string
    
    isShowGlobal?: boolean
    
    modalStyle?: ModalStyle
    
    inputAttr?: InputBean
    success?: (params: {
      
      confirm: boolean
      
      cancel: boolean
      
      inputContent: string
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

  
  export function showLoading(params: {
    
    title: string
    
    mask?: boolean
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

  
  export function showActionSheet(params: {
    
    alertText?: string
    
    itemList: string[]
    
    itemColor?: string
    
    itemColors?: string[]
    success?: (params: {
      
      tapIndex: number
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

  
  export function hideToast(params?: {
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

  
  export function hideLoading(params?: {
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

  
  export function getDeviceOrientation(params?: {
    success?: (params: {
      
      orientation?: Orientation
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

  
  export function getDeviceOrientationSync(): {
    
    orientation?: Orientation
  }

  
  export function makePhoneCall(params: {
    
    phoneNumber: string
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

  
  export function setClipboardData(params: {
    
    isSensitive?: boolean
    
    data: string
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

  
  export function getClipboardData(params?: {
    success?: (params: {
      
      data: string
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

  
  export function setupFlashLight(params?: {
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

  
  export function openFlashLight(params?: {
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

  
  export function closeFlashLight(params?: {
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

  
  export function isFlashLightOpen(params?: {
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

  
  export function updateVolume(params: {
    
    value: number
    
    volumeMode?: number[]
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

  
  export function getCurrentVolume(params?: {
    success?: (params: {
      
      value: number
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

  
  export function getCurrentVolumeByMode(params?: {
    
    volumeMode?: number
    success?: (params: {
      
      value: number
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

  
  export function registerSystemVolumeChange(params?: {
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

  
  export function unRegisterSystemVolumeChange(params?: {
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

  
  export function getSystemSetting(params?: {
    success?: (params: {
      
      bluetoothEnabled?: boolean
      
      locationEnabled?: boolean
      
      wifiEnabled?: boolean
      
      deviceOrientation?: string
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

  
  export function getDeviceInfo(params?: {
    success?: (params: {
      
      abi: string
      
      brand: string
      
      model: string
      
      system: string
      
      platform: string
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

  
  export function getSystemInfo(params?: {
    success?: (params: {
      is24Hour: boolean
      system: string
      brand: string
      model: string
      platform: string
      timezoneId: string
      pixelRatio: number
      screenWidth: number
      screenHeight: number
      windowWidth: number
      windowHeight: number
      
      useableWindowWidth: number
      
      useableWindowHeight: number
      statusBarHeight: number
      language: string
      safeArea: SafeArea
      albumAuthorized: boolean
      cameraAuthorized: boolean
      locationAuthorized: boolean
      microphoneAuthorized: boolean
      notificationAuthorized: boolean
      notificationAlertAuthorized: boolean
      notificationBadgeAuthorized: boolean
      notificationSoundAuthorized: boolean
      bluetoothEnabled: boolean
      locationEnabled: boolean
      wifiEnabled: boolean
      theme?: Themes
      deviceOrientation?: Orientation_yEKc8G
      
      deviceLevel: string
      
      isSupportPinShortcut?: boolean
      
      deviceType?: string
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

  
  export function getSystemInfoSync(): {
    is24Hour: boolean
    system: string
    brand: string
    model: string
    platform: string
    timezoneId: string
    pixelRatio: number
    screenWidth: number
    screenHeight: number
    windowWidth: number
    windowHeight: number
    
    useableWindowWidth: number
    
    useableWindowHeight: number
    statusBarHeight: number
    language: string
    safeArea: SafeArea
    albumAuthorized: boolean
    cameraAuthorized: boolean
    locationAuthorized: boolean
    microphoneAuthorized: boolean
    notificationAuthorized: boolean
    notificationAlertAuthorized: boolean
    notificationBadgeAuthorized: boolean
    notificationSoundAuthorized: boolean
    bluetoothEnabled: boolean
    locationEnabled: boolean
    wifiEnabled: boolean
    theme?: Themes
    deviceOrientation?: Orientation_yEKc8G
    
    deviceLevel: string
    
    isSupportPinShortcut?: boolean
    
    deviceType?: string
  }

  
  export function getWifiList(params?: {
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

  
  export function getConnectedWifi(params?: {
    
    partialInfo?: boolean
    success?: (params: {
      
      SSID: string
      
      BSSID: string
      
      signalStrength: number
      
      secure: boolean
      
      frequency: number
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

  
  export function openSystemBluetoothSetting(params?: {
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

  
  export function getAppAuthorizeSetting(params?: {
    success?: (params: {
      
      albumAuthorized: string
      
      bluetoothAuthorized: string
      
      cameraAuthorized: string
      
      locationAuthorized: string
      
      locationReducedAccuracy: boolean
      
      microphoneAuthorized: string
      
      notificationAuthorized: string
      
      notificationAlertAuthorized: string
      
      notificationBadgeAuthorized: string
      
      notificationSoundAuthorized: string
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

  
  export function getBattery(params?: {
    success?: (params: {
      
      battery: number
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

  
  export function deviceIsCharging(params?: {
    success?: (params: {
      
      isCharging: boolean
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

  
  export function getNetworkType(params?: {
    success?: (params: {
      
      networkType: string
      
      signalStrength: number
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

  
  export function setScreenBrightness(params: {
    
    value: number
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

  
  export function getScreenBrightness(params?: {
    success?: (params: {
      
      value: number
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

  
  export function setKeepScreenOn(params: {
    
    keepScreenOn: boolean
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

  
  export function vibrateShort(params: {
    
    type: string
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

  
  export function vibrateLong(params?: {
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

  
  export function peekVibrate(params?: {
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

  
  export function popVibrate(params?: {
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

  
  export function peekVibrateContinuous(params?: {
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

  
  export function notificationVibrate(params: {
    
    type: string
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

  
  export function selectionVibrate(params?: {
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

  
  export function startRecordingWithAmplitude(params: {
    
    sampleRate?: AudioSampleRate
    
    bitWidth: number
    
    bitRate: number
    
    numberOfChannels?: AudioNumChannel
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

  
  export function stopRecordingWithAmplitude(params?: {
    success?: (params: {
      
      tempFilePath: string
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

  
  export function scanCode(params?: {
    
    onlyFromCamera?: boolean
    
    isShowActionTitle?: boolean
    
    isShowTorch?: boolean
    
    isShowKeyboard?: boolean
    
    keyboardBean?: KeyboardBean
    
    customTips?: string
    
    scanType?: string[]
    success?: (params: {
      
      result: string
      
      scanType: string
      
      charSet: string
      
      path: string
      
      rawData: string
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

  
  export function showScanLogin(params: {
    
    content: string
    success?: (params: {
      
      code: number
      
      msg: string
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

  
  export function setStorage(params: {
    
    key: string
    
    data: string
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

  
  export function setStorageSync(storageDataBean?: StorageDataBean): null

  
  export function getStorage(params: {
    
    key: string
    success?: (params: {
      
      data?: string
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

  
  export function getStorageSync(storageKeyBean?: StorageKeyBean): {
    
    data?: string
  }

  
  export function removeStorage(params: {
    
    key: string
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

  
  export function removeStorageSync(storageKeyBean?: StorageKeyBean): null

  
  export function clearStorage(params?: {
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

  
  export function clearStorageSync(): null

  
  export function getStorageInfo(params?: {
    success?: (params: {
      
      keys: string[]
      
      currentSize: number
      
      limitSize: number
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

  
  export function getStorageInfoSync(): {
    
    keys: string[]
    
    currentSize: number
    
    limitSize: number
  }

  
  export function batchSetStorage(params: {
    
    kvList: StorageDataBean[]
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

  
  export function batchSetStorageSync(
    batchSetStorage?: BatchSetStorageBean
  ): null

  
  export function batchGetStorage(params: {
    
    keyList: string[]
    success?: (params: {
      
      dataList: string[]
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

  
  export function batchGetStorageSync(batchGetStorage?: BatchGetStorageBean): {
    
    dataList: string[]
  }

  
  export function onUploadFileToDeviceStart(
    listener: (params: UploadStartEvent) => void
  ): void

  
  export function offUploadFileToDeviceStart(
    listener: (params: UploadStartEvent) => void
  ): void

  
  export function onUploadFileToDeviceProgress(
    listener: (params: UploadProgressEvent) => void
  ): void

  
  export function offUploadFileToDeviceProgress(
    listener: (params: UploadProgressEvent) => void
  ): void

  
  export function onUploadFileToDeviceComplete(
    listener: (params: UploadCompleteEvent) => void
  ): void

  
  export function offUploadFileToDeviceComplete(
    listener: (params: UploadCompleteEvent) => void
  ): void

  
  export function onUploadFileFragToDeviceProgress(
    listener: (params: UploadFragProgressEvent) => void
  ): void

  
  export function offUploadFileFragToDeviceProgress(
    listener: (params: UploadFragProgressEvent) => void
  ): void

  
  export function onDownloadFileFromDeviceStart(
    listener: (params: UploadFileCb) => void
  ): void

  
  export function offDownloadFileFromDeviceStart(
    listener: (params: UploadFileCb) => void
  ): void

  
  export function onDownloadFileFromDeviceProgress(
    listener: (params: FileInfoBean) => void
  ): void

  
  export function offDownloadFileFromDeviceProgress(
    listener: (params: FileInfoBean) => void
  ): void

  
  export function onDownloadFileFromDeviceComplete(
    listener: (params: downloadFileListBean) => void
  ): void

  
  export function offDownloadFileFromDeviceComplete(
    listener: (params: downloadFileListBean) => void
  ): void

  
  export function onKeyboardHeightChange(
    listener: (params: BeanRes) => void
  ): void

  
  export function offKeyboardHeightChange(
    listener: (params: BeanRes) => void
  ): void

  
  export function onKeyboardWillShow(listener: (params: BeanRes) => void): void

  
  export function offKeyboardWillShow(listener: (params: BeanRes) => void): void

  
  export function onKeyboardWillHide(listener: (params: BeanRes) => void): void

  
  export function offKeyboardWillHide(listener: (params: BeanRes) => void): void

  
  export function onFlashLightStatusChange(
    listener: (params: FlashLightStatus) => void
  ): void

  
  export function offFlashLightStatusChange(
    listener: (params: FlashLightStatus) => void
  ): void

  
  export function onSystemVolumeChangeEvent(
    listener: (params: VolumeResponse) => void
  ): void

  
  export function offSystemVolumeChangeEvent(
    listener: (params: VolumeResponse) => void
  ): void

  
  export function onGetWifiList(
    listener: (params: WifiListResponse) => void
  ): void

  
  export function offGetWifiList(
    listener: (params: WifiListResponse) => void
  ): void

  
  export function onRecordingEvent(
    listener: (params: AudioRecordBufferBean) => void
  ): void

  
  export function offRecordingEvent(
    listener: (params: AudioRecordBufferBean) => void
  ): void

  
  export function onRecordingAmplitudeEvent(
    listener: (params: RecordingAmplitudeEventModel) => void
  ): void

  
  export function offRecordingAmplitudeEvent(
    listener: (params: RecordingAmplitudeEventModel) => void
  ): void

  
  export function onAccelerometerChange(
    listener: (params: {
      
      x: number
      
      y: number
      
      z: number
    }) => void
  ): void

  
  export function offAccelerometerChange(
    listener: (params: {
      
      x: number
      
      y: number
      
      z: number
    }) => void
  ): void

  
  export function onCompassChange(
    listener: (params: {
      
      direction: number
      
      accuracy: string
    }) => void
  ): void

  
  export function offCompassChange(
    listener: (params: {
      
      direction: number
      
      accuracy: string
    }) => void
  ): void

  
  export function onDeviceMotionChange(
    listener: (params: {
      
      alpha: number
      
      beta: number
      
      gamma: number
    }) => void
  ): void

  
  export function offDeviceMotionChange(
    listener: (params: {
      
      alpha: number
      
      beta: number
      
      gamma: number
    }) => void
  ): void

  
  export function onGyroscopeChange(
    listener: (params: {
      
      x: number
      
      y: number
      
      z: number
    }) => void
  ): void

  
  export function offGyroscopeChange(
    listener: (params: {
      
      x: number
      
      y: number
      
      z: number
    }) => void
  ): void

  
  export function onMemoryWarning(
    listener: (params: {
      
      level: number
    }) => void
  ): void

  
  export function offMemoryWarning(
    listener: (params: {
      
      level: number
    }) => void
  ): void

  
  export function onOrientationChange(
    listener: (params: {
      
      orientation?: Orientation
    }) => void
  ): void

  
  export function offOrientationChange(
    listener: (params: {
      
      orientation?: Orientation
    }) => void
  ): void

  
  export function onBluetoothAdapterStateChange(
    listener: (params: {
      
      available: boolean
    }) => void
  ): void

  
  export function offBluetoothAdapterStateChange(
    listener: (params: {
      
      available: boolean
    }) => void
  ): void

  
  export function onNetworkStatusChange(
    listener: (params: {
      
      isConnected: boolean
      
      networkType: string
    }) => void
  ): void

  
  export function offNetworkStatusChange(
    listener: (params: {
      
      isConnected: boolean
      
      networkType: string
    }) => void
  ): void

  export enum WidgetVersionType {
    
    release = "release",

    
    preview = "preview",
  }

  export enum WidgetPosition {
    
    bottom = "bottom",

    
    top = "top",

    
    center = "center",
  }

  export type Profile = {
    
    redirectStart: number
    
    redirectEnd: number
    
    fetchStart: number
    
    domainLookupStart: number
    
    domainLookupEnd: number
    
    connectStart: number
    
    connectEnd: number
    
    SSLconnectionStart: number
    
    SSLconnectionEnd: number
    
    requestStart: number
    
    requestEnd: number
    
    responseStart: number
    
    responseEnd: number
    
    rtt: number
    
    estimate_nettype: string
    
    httpRttEstimate: number
    
    transportRttEstimate: number
    
    downstreamThroughputKbpsEstimate: number
    
    throughputKbps: number
    
    peerIP: string
    
    port: number
    
    socketReused: boolean
    
    sendBytesCount: number
    
    receivedBytedCount: number
  }

  export type FileReadFileReqBean = {
    
    filePath: string
    
    encoding?: string
    
    position?: number
    
    length?: number
  }

  export type SaveFileSyncParams = {
    
    fileId: string
    
    tempFilePath: string
    
    filePath: string
  }

  export type FileStats = {
    
    mode: string
    
    size: number
    
    lastAccessedTime: number
    
    lastModifiedTime: number
    
    isDirectory: boolean
    
    isFile: boolean
  }

  export type FileStatsParams = {
    
    fileId: string
    
    path: string
    
    recursive?: boolean
  }

  export type MakeDirParams = {
    
    fileId: string
    
    dirPath: string
    
    recursive?: boolean
  }

  export type RemoveDirParams = {
    
    fileId: string
    
    dirPath: string
    
    recursive?: boolean
  }

  export type WriteFileParams = {
    
    fileId: string
    
    filePath: string
    
    data: string
    
    encoding?: string
  }

  export enum HTTPMethod {
    
    OPTIONS = "OPTIONS",

    
    GET = "GET",

    
    HEAD = "HEAD",

    
    POST = "POST",

    
    PUT = "PUT",

    
    DELETE = "DELETE",

    
    TRACE = "TRACE",

    
    CONNECT = "CONNECT",
  }

  export enum AudioSampleRate {
    
    RATE_8000 = 8000,

    
    RATE_11025 = 11025,

    
    RATE_12000 = 12000,

    
    RATE_16000 = 16000,

    
    RATE_22050 = 22050,

    
    RATE_24000 = 24000,

    
    RATE_32000 = 32000,

    
    RATE_44100 = 44100,

    
    RATE_48000 = 48000,
  }

  export enum AudioNumChannel {
    
    SINGLE = 1,

    
    DOUBLE = 2,
  }

  export enum AudioFormat {
    
    MP3 = "mp3",

    
    AAC = "aac",

    
    WAV = "wav",

    
    PCM = "PCM",
  }

  export enum UploadHttpMethod {
    
    POST = "POST",

    
    PUT = "PUT",
  }

  export enum AccelerometerInterval {
    
    game = "game",

    
    ui = "ui",

    
    normal = "normal",
  }

  export enum ScopeBean {
    
    BLUETOOTH = "scope.bluetooth",

    
    RECORD = "scope.record",

    
    WRITEPHOTOSALBUM = "scope.writePhotosAlbum",

    
    CAMERA = "scope.camera",

    
    USERLOCATION = "scope.userLocation",

    
    USERPRECISELOCATION = "scope.userPreciseLocation",

    
    USERLOCATIONBACKGROUND = "scope.userLocationBackground",

    
    USERINFO = "scope.userInfo",
  }

  export type SchemaBean = {
    
    schema: string
  }

  export enum DeviceMotionInterval {
    
    game = "game",

    
    ui = "ui",

    
    normal = "normal",
  }

  export enum GyroscopeInterval {
    
    game = "game",

    
    ui = "ui",

    
    normal = "normal",
  }

  export type Object = {}

  export type FileInfoBean = {
    
    recordId?: string
    
    fileId?: string
    
    appFileUrl?: string
    
    devFileId?: string
    
    devFileUrl?: string
    
    uid?: string
    
    bizType: number
    
    memo?: string
    
    gmtCreate: number
    
    filePath?: string
  }

  export type CropImageItemBean = {
    
    filePath?: string
    
    topLeftX: number
    
    topLeftY: number
    
    bottomRightX: number
    
    bottomRightY: number
    
    format: number
    
    rotate: number
    
    outputImageWidth: number
    
    outputImageHeight: number
  }

  export type TempFileCB = {
    
    path: string
    
    size?: number
  }

  export type TempMediaFileCB = {
    
    tempFilePath: string
    
    size: number
    
    duration: number
    
    height: number
    
    width: number
    
    thumbTempFilePath: string
    
    fileType: string
    
    originalVideoPath: string
  }

  export type TakePhotoGuide = {
    
    guideTitle: string
    
    topGuideImgUrl: string
    
    topGuideIconUrl: string
    
    topGuideDesc: string
    
    bottomLeftGuideImgUrl: string
    
    bottomLeftGuideIconUrl: string
    
    bottomLeftGuideDesc: string
    
    bottomRightGuideImgUrl: string
    
    bottomRightGuideIconUrl: string
    
    bottomRightGuideDesc: string
  }

  export enum ModalStyle {
    
    Default = 0,

    
    Input = 1,
  }

  export type InputBean = {
    
    placeholder?: string
    
    placeHolderColor?: string
    
    backgroundColor?: string
    
    textColor?: string
  }

  export enum Orientation {
    
    UNKNOWN = "unknown",

    
    PORTRAIT = "portrait",

    
    LANDSCAPE_LEFT = "landscape-left",

    
    LANDSCAPE_RIGHT = "landscape-right",
  }

  export type SafeArea = {
    left: number
    right: number
    top: number
    bottom: number
    width: number
    height: number
  }

  export enum Themes {
    
    dark = "dark",

    
    light = "light",
  }

  export enum Orientation_yEKc8G {
    
    portrait = "portrait",

    
    landscape = "landscape",
  }

  export type KeyboardBean = {
    
    title?: string
    
    placeholder?: string
    
    desc?: string
    
    actionText?: string
  }

  export type StorageDataBean = {
    
    key: string
    
    data: string
  }

  export type StorageKeyBean = {
    
    key: string
  }

  export type BatchSetStorageBean = {
    
    kvList: StorageDataBean[]
  }

  export type BatchGetStorageBean = {
    
    keyList: string[]
  }

  export type UploadStartEvent = {
    
    taskId: string
    
    sid: string
    
    prefix: string
    
    fileCount: number
    
    extData?: Object
    
    configInfo?: Object
  }

  export type UploadProgressEvent = {
    
    taskId: string
    
    sid: string
    
    prefix: string
    
    name: string
    
    filePath: string
    
    cloudUrl?: string
    
    code: string
    
    error?: string
    
    frags?: FragInfoBean[]
    
    extData?: Object
    
    fileSize?: number
  }

  export type UploadCompleteEvent = {
    
    taskId: string
    
    sid: string
    
    prefix: string
    
    uploaded?: string[]
    
    failed?: string[]
    
    extData?: Object
  }

  export type UploadFragProgressEvent = {
    
    taskId: string
    
    sid: string
    
    prefix: string
    
    filePath: string
    
    fileSize?: number
    
    fragName: string
    
    fragPath: string
    
    fragCloudUrl?: string
    
    code: string
    
    error?: string
    
    fragIndex?: number
    
    fragCount?: number
    
    fragSize?: number
    
    fragPos?: number
    
    extData?: Object
  }

  export type UploadFileCb = {
    
    taskId: string
  }

  export type downloadFileListBean = {
    
    deviceId: string
    
    homeId: string
    
    tckey: string
    
    fileList?: FileInfoBean[]
  }

  export type BeanRes = {
    
    height: number
    
    keyBoardArea: KeyBoardArea
  }

  export type FlashLightStatus = {
    
    isOn: boolean
  }

  export type VolumeResponse = {
    
    value: number
    
    volumeMode?: number
  }

  export type WifiListResponse = {
    
    wifiList: WifiInfo[]
  }

  export type AudioRecordBufferBean = {
    
    buffer: number[]
  }

  export type RecordingAmplitudeEventModel = {
    
    timeMillis: number
    
    amplitude: number
  }

  export type InnerAudioContextBean = {
    
    contextId: string
  }

  export type AudioFileParams = {
    
    path: string
  }

  export type AudioFileResponse = {
    
    duration: number
  }

  export type InnerAudioBean = {
    
    contextId: string
    
    src: string
    
    startTime?: number
    
    autoplay?: boolean
    
    loop?: boolean
    
    volume?: number
    
    playbackRate?: number
  }

  export type InnerAudioSeekBean = {
    
    contextId: string
    
    position?: number
  }

  export type AuthorizeBean = {
    
    scope?: ScopeBean
  }

  export type SettingBean = {
    
    authSetting: any
  }

  export type AuthorizePolicyReqBean = {
    
    type: string
    
    version: string
    
    status: number
  }

  export type AuthorizePolicyRespBean = {
    
    agreed: boolean
  }

  export type AuthorizePolicyStatusReqBean = {
    
    type: string
  }

  export type AuthorizePolicyStatusRespBean = {
    
    title: string
    
    agreementName: string
    
    agreementDesc: string
    
    link: string
    
    version: string
    
    sign: number
  }

  export type ToMiniProgramBean = {
    
    appId?: string
    
    aiPtChannel?: string
    
    aiPtType?: string
    
    path?: string
    
    position?: string
    
    extraData?: any
    
    envVersion?: string
    
    shortLink?: string
  }

  export type MiniWidgetDeploysBean = {
    
    dialogId: string
    
    appId: string
    
    pagePath?: string
    
    deviceId?: string
    
    groupId?: string
    
    style?: string
    
    versionType?: WidgetVersionType
    
    version?: string
    
    position?: WidgetPosition
    
    autoDismiss?: boolean
    
    autoCache?: boolean
    
    supportDark?: boolean
  }

  export type MiniWidgetDialogBean = {}

  export type SuccessResult = {
    
    result: boolean
  }

  export type VideoThumbnailsBean = {
    
    filePath: string
    
    startTime: number
    
    endTime: number
    
    thumbnailCount: number
    
    thumbnailWidth: number
    
    thumbnailHeight: number
  }

  export type VideoThumbnailsResult = {
    
    thumbnailsPath?: string[]
  }

  export type ClearVideoThumbnailsBean = {
    
    videoName: string
  }

  export type VideoClipBean = {
    
    filePath: string
    
    startTime: number
    
    endTime: number
    
    level: number
  }

  export type VideoClipResult = {
    
    videoClipPath?: string
  }

  export type DeviceMotionBean = {
    
    interval?: DeviceMotionInterval
  }

  export type DownLoadBean = {
    
    requestId: string
    
    url: string
    
    header?: any
    
    timeout?: number
    
    filePath?: string
  }

  export type DownLoadResult = {
    
    tempFilePath: string
    
    filePath: string
    
    statusCode: number
    
    profile: Profile
  }

  export type RequestBean = {
    
    requestId: string
  }

  export type AccessFileParams = {
    
    path: string
  }

  export type ReadFileBean = {
    
    data: string
  }

  export type SaveFileSyncCallback = {
    
    savedFilePath: string
  }

  export type TempDirectoryResponse = {
    
    tempDirectory: string
  }

  export type FileStatsResponse = {
    
    fileStatsList: FileStats[]
  }

  export type RemoveFileParams = {
    
    fileId: string
    
    filePath: string
  }

  export type LogFileParams = {
    
    resId: string
    
    logDir?: string
    
    data: string
    
    append?: boolean
  }

  export type LogFileRes = {
    
    filePath?: string
  }

  export type FileInfoParams = {
    
    filePath: string
    
    digestAlgorithm: string
  }

  export type FileInfoRes = {
    
    size: number
    
    digest: string
  }

  export type GyroscopeBean = {
    
    interval?: GyroscopeInterval
  }

  export type FragInfoBean = {
    
    fragName: string
    
    fragCloudUrl?: string
    
    fragPath: string
    
    code: string
    
    error?: string
  }

  export type InitBean = {
    
    deviceId: string
    
    extData?: Object
    
    type?: string
  }

  export type UploadFileBean = {
    
    deviceId: string
    
    sid: string
    
    fileList?: string[]
    
    extData?: Object
    
    type?: string
    
    businessType?: string
    
    fileTypeList?: any
  }

  export type CancelUploadBean = {
    
    taskId: string
  }

  export type CompressImageBean = {
    
    fileList?: string[]
    
    dstWidth: number
    
    dstHeight: number
    
    format?: number
    
    imageSize?: number
  }

  export type CompressImageCb = {
    
    fileList?: string[]
  }

  export type CompressVideoBean = {
    
    fileList?: string[]
    
    dstWidth: number
    
    dstHeight: number
    
    format?: number
    
    videoSize?: number
  }

  export type CropImageBean = {
    
    cropFileList?: CropImageItemBean[]
  }

  export type CropImageCb = {
    
    fileList?: string[]
  }

  export type ChooseImageBean = {
    
    count?: number
    
    sizeType?: string[]
    
    sourceType?: string[]
    
    disableDismissAnimationAfterSelect?: boolean
  }

  export type ChooseImageCB = {
    
    tempFilePaths: string[]
    
    tempFiles?: TempFileCB[]
  }

  export type ChooseMediaBean = {
    
    count?: number
    
    mediaType?: string
    
    sourceType?: string[]
    
    maxDuration?: number
    
    isFetchVideoFile?: boolean
    
    isClipVideo?: boolean
    
    maxClipDuration?: number
    
    isGetAlbumFileName?: boolean
  }

  export type ChooseMediaCB = {
    
    type: string
    
    tempFiles?: TempMediaFileCB[]
  }

  export type ChooseCropImageBean = {
    
    sourceType?: string[]
  }

  export type ChooseCropImageCB = {
    
    path: string
  }

  export type PreviewImageBean = {
    
    urls: string[]
    
    current: number
  }

  export type TakePhotoBean = {
    
    bizSource?: string
    
    isShowScan: boolean
    
    guideInfo?: TakePhotoGuide
    
    isLaunchGuideImg: boolean
    
    isLocalModel: boolean
    
    crop: boolean
  }

  export type TakePhotoCB = {
    
    imagePath: string
  }

  export type GetImageInfoParams = {
    
    src: string
  }

  export type ImageInfoCB = {
    
    width: number
    
    height: number
    
    orientation: string
    
    type: string
  }

  export type GetVideoInfoParams = {
    
    src: string
  }

  export type VideoInfoCB = {
    
    width: number
    
    height: number
    
    orientation: string
    
    type: string
    
    duration: number
    
    size: number
    
    fps: number
    
    bitrate: number
  }

  export type SaveVideoParams = {
    
    filePath: string
    
    modifyCreationDate?: boolean
  }

  export type VideoSaveAlbumResponse = {
    
    localIdentifier: string
  }

  export type SaveImageParams = {
    
    filePath: string
    
    modifyCreationDate?: boolean
  }

  export type CropImageBean_6ZeXx6 = {
    
    path: string
    
    width: number
    
    height: number
    
    type: number
  }

  export type CropImageResult = {
    
    cropPath: string
  }

  export type ImageThumbnailBean = {
    
    originPath: string
    
    thumbWidth: number
    
    thumbHeight: number
  }

  export type ImageThumbnailResult = {
    
    thumbnailPath: string
  }

  export type CopyImageBean = {
    
    imagePath: string
  }

  export type CopyImageResult = {
    
    imagePath: string
  }

  export type ToastBean = {
    
    title: string
    
    icon?: string
    
    image?: string
    
    duration?: number
    
    mask?: boolean
  }

  export type ModalBean = {
    
    title: string
    
    content?: string
    
    showCancel?: boolean
    
    cancelText?: string
    
    cancelColor?: string
    
    confirmText?: string
    
    confirmColor?: string
    
    isShowGlobal?: boolean
    
    modalStyle?: ModalStyle
    
    inputAttr?: InputBean
  }

  export type ModalCallback = {
    
    confirm: boolean
    
    cancel: boolean
    
    inputContent: string
  }

  export type LoadingBean = {
    
    title: string
    
    mask?: boolean
  }

  export type ActionSheet = {
    
    alertText?: string
    
    itemList: string[]
    
    itemColor?: string
    
    itemColors?: string[]
  }

  export type ActionSheetCallback = {
    
    tapIndex: number
  }

  export type KeyBoardArea = {
    
    top: number
    
    bottom: number
    
    left: number
    
    right: number
  }

  export type HTTPRequest = {
    
    url: string
    
    taskId: string
    
    data?: string
    
    header?: any
    
    timeout?: number
    
    method?: HTTPMethod
    
    dataType?: string
    
    responseType?: string
    
    enableHttp2?: boolean
    
    enableQuic?: boolean
    
    enableCache?: boolean
  }

  export type SuccessResult_3OAFXc = {
    
    data: string
    
    statusCode: number
    
    header: any
    
    cookies: string[]
    
    profile: Profile
    
    taskId: string
  }

  export type RequestContext = {
    
    taskId: string
  }

  export type OrientationResponse = {
    
    orientation?: Orientation
  }

  export type PhoneCallBean = {
    
    phoneNumber: string
  }

  export type ClipboradSetReqBean = {
    
    isSensitive?: boolean
    
    data: string
  }

  export type ClipboradDataBean = {
    
    data: string
  }

  export type WifiInfo = {
    
    SSID: string
    
    BSSID: string
    
    signalStrength: number
    
    secure: boolean
    
    frequency: number
  }

  export type UpdateVolumeParams = {
    
    value: number
    
    volumeMode?: number[]
  }

  export type CurrentVolumeResponse = {
    
    value: number
  }

  export type CurrentVolumeParams = {
    
    volumeMode?: number
  }

  export type SystemSetting = {
    
    bluetoothEnabled?: boolean
    
    locationEnabled?: boolean
    
    wifiEnabled?: boolean
    
    deviceOrientation?: string
  }

  export type DeviceInfoResponse = {
    
    abi: string
    
    brand: string
    
    model: string
    
    system: string
    
    platform: string
  }

  export type SystemInfo = {
    is24Hour: boolean
    system: string
    brand: string
    model: string
    platform: string
    timezoneId: string
    pixelRatio: number
    screenWidth: number
    screenHeight: number
    windowWidth: number
    windowHeight: number
    
    useableWindowWidth: number
    
    useableWindowHeight: number
    statusBarHeight: number
    language: string
    safeArea: SafeArea
    albumAuthorized: boolean
    cameraAuthorized: boolean
    locationAuthorized: boolean
    microphoneAuthorized: boolean
    notificationAuthorized: boolean
    notificationAlertAuthorized: boolean
    notificationBadgeAuthorized: boolean
    notificationSoundAuthorized: boolean
    bluetoothEnabled: boolean
    locationEnabled: boolean
    wifiEnabled: boolean
    theme?: Themes
    deviceOrientation?: Orientation_yEKc8G
    
    deviceLevel: string
    
    isSupportPinShortcut?: boolean
    
    deviceType?: string
  }

  export type GetConnectedWifiParams = {
    
    partialInfo?: boolean
  }

  export type AppAuthorizeSettingRes = {
    
    albumAuthorized: string
    
    bluetoothAuthorized: string
    
    cameraAuthorized: string
    
    locationAuthorized: string
    
    locationReducedAccuracy: boolean
    
    microphoneAuthorized: string
    
    notificationAuthorized: string
    
    notificationAlertAuthorized: string
    
    notificationBadgeAuthorized: string
    
    notificationSoundAuthorized: string
  }

  export type BatteryResponse = {
    
    battery: number
  }

  export type DeviceChargingResponse = {
    
    isCharging: boolean
  }

  export type NetworkTypeCB = {
    
    networkType: string
    
    signalStrength: number
  }

  export type ScreenBean = {
    
    value: number
  }

  export type SetKeepScreenOnParam = {
    
    keepScreenOn: boolean
  }

  export type TUNIVibrateBean = {
    
    type: string
  }

  export type NotificationBean = {
    
    type: string
  }

  export type AudioStart = {
    
    duration?: number
    
    sampleRate?: AudioSampleRate
    
    numberOfChannels?: AudioNumChannel
    
    encodeBitRate?: number
    
    format?: AudioFormat
    
    frameSize: number
    
    audioSource?: string
    
    contextId: string
  }

  export type AudioRecordResult = {
    
    tempFilePath: string
  }

  export type AudioRecordContext = {
    
    contextId: string
  }

  export type AudioRecordingRequest = {
    
    contextId: string
    
    period: number
    
    pcm16IOS?: boolean
  }

  export type StartAmplitudeRecordingParam = {
    
    sampleRate?: AudioSampleRate
    
    bitWidth: number
    
    bitRate: number
    
    numberOfChannels?: AudioNumChannel
  }

  export type ScanCodeBean = {
    
    onlyFromCamera?: boolean
    
    isShowActionTitle?: boolean
    
    isShowTorch?: boolean
    
    isShowKeyboard?: boolean
    
    keyboardBean?: KeyboardBean
    
    customTips?: string
    
    scanType?: string[]
  }

  export type ScanCodeResult = {
    
    result: string
    
    scanType: string
    
    charSet: string
    
    path: string
    
    rawData: string
  }

  export type ScanLoginBean = {
    
    content: string
  }

  export type ScanLoginResult = {
    
    code: number
    
    msg: string
  }

  export type StorageCallback = {
    
    data?: string
  }

  export type StorageInfoBean = {
    
    keys: string[]
    
    currentSize: number
    
    limitSize: number
  }

  export type BatchGetStorageCallback = {
    
    dataList: string[]
  }

  export type UpLoadBean = {
    
    requestId: string
    
    url: string
    
    filePath: string
    
    name: string
    
    header?: any
    
    formData?: any
    
    timeout?: number
    
    method?: UploadHttpMethod
  }

  export type UpLoadResult = {
    
    data: string
    
    statusCode: number
  }

  
  interface InnerAudioContext {
    
    pause(params: {
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

    
    resume(params: {
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

    
    play(params: {
      
      src: string
      
      startTime?: number
      
      autoplay?: boolean
      
      loop?: boolean
      
      volume?: number
      
      playbackRate?: number
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

    
    seek(params: {
      
      position?: number
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

    
    stop(params: {
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

    
    destroy(params: {
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

    
    destroyPlayer(params: {
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

    
    onTimeUpdate(
      listener: (params: {
        
        time: number
        
        current: number
      }) => void
    ): void

    
    offTimeUpdate(
      listener: (params: {
        
        time: number
        
        current: number
      }) => void
    ): void

    
    onPlayerStatusUpdate(
      listener: (params: {
        
        status: number
      }) => void
    ): void

    
    offPlayerStatusUpdate(
      listener: (params: {
        
        status: number
      }) => void
    ): void
  }
  
  export function createInnerAudioContext(params?: {
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
  }): InnerAudioContext

  
  interface MiniWidgetDialog {
    
    dismissMiniWidget(params: {
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

    
    onWidgetDismiss(listener: (params: {}) => void): void

    
    offWidgetDismiss(listener: (params: {}) => void): void
  }
  
  export function openMiniWidget(params: {
    
    appId: string
    
    pagePath?: string
    
    deviceId?: string
    
    groupId?: string
    
    style?: string
    
    versionType?: WidgetVersionType
    
    version?: string
    
    position?: WidgetPosition
    
    autoDismiss?: boolean
    
    autoCache?: boolean
    
    supportDark?: boolean
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
  }): MiniWidgetDialog

  
  interface DownloadTask {
    
    abort(params: {
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

    
    onHeadersReceived(
      listener: (params: {
        
        header: any
      }) => void
    ): void

    
    offHeadersReceived(
      listener: (params: {
        
        header: any
      }) => void
    ): void

    
    onProgressUpdate(
      listener: (params: {
        
        progress: number
        
        totalBytesSent: number
        
        totalBytesExpectedToSend: number
      }) => void
    ): void

    
    offProgressUpdate(
      listener: (params: {
        
        progress: number
        
        totalBytesSent: number
        
        totalBytesExpectedToSend: number
      }) => void
    ): void
  }
  
  export function downloadFile(params: {
    
    url: string
    
    header?: any
    
    timeout?: number
    
    filePath?: string
    success?: (params: {
      
      tempFilePath: string
      
      filePath: string
      
      statusCode: number
      
      profile: Profile
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
  }): DownloadTask

  
  interface FileSystemManager {
    
    access(params: {
      
      path: string
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

    
    readFile(params: {
      
      filePath: string
      
      encoding?: string
      
      position?: number
      
      length?: number
      success?: (params: {
        
        data: string
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

    
    readFileSync(req?: FileReadFileReqBean): {
      
      data: string
    }

    
    saveFile(params: {
      
      tempFilePath: string
      
      filePath: string
      success?: (params: {
        
        savedFilePath: string
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

    
    saveFileSync(params?: SaveFileSyncParams): {
      
      savedFilePath: string
    }

    
    stat(params: {
      
      path: string
      
      recursive?: boolean
      success?: (params: {
        
        fileStatsList: FileStats[]
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

    
    statSync(params?: FileStatsParams): {
      
      fileStatsList: FileStats[]
    }

    
    mkdir(params: {
      
      dirPath: string
      
      recursive?: boolean
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

    
    mkdirSync(params?: MakeDirParams): null

    
    rmdir(params: {
      
      dirPath: string
      
      recursive?: boolean
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

    
    rmdirSync(params?: RemoveDirParams): null

    
    writeFile(params: {
      
      filePath: string
      
      data: string
      
      encoding?: string
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

    
    writeFileSync(params?: WriteFileParams): null

    
    removeSavedFile(params: {
      
      filePath: string
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
  }
  
  export function getFileSystemManager(params?: {
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
  }): FileSystemManager

  
  interface RequestTask {
    
    abort(params: {
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

    
    onHeadersReceived(
      listener: (params: {
        
        header: any
      }) => void
    ): void

    
    offHeadersReceived(
      listener: (params: {
        
        header: any
      }) => void
    ): void
  }
  
  export function request(params: {
    
    url: string
    
    data?: string
    
    header?: any
    
    timeout?: number
    
    method?: HTTPMethod
    
    dataType?: string
    
    responseType?: string
    
    enableHttp2?: boolean
    
    enableQuic?: boolean
    
    enableCache?: boolean
    success?: (params: {
      
      data: string
      
      statusCode: number
      
      header: any
      
      cookies: string[]
      
      profile: Profile
      
      taskId: string
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
  }): RequestTask

  
  interface RecorderManager {
    
    start(params: {
      
      duration?: number
      
      sampleRate?: AudioSampleRate
      
      numberOfChannels?: AudioNumChannel
      
      encodeBitRate?: number
      
      format?: AudioFormat
      
      frameSize: number
      
      audioSource?: string
      success?: (params: {
        
        tempFilePath: string
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

    
    resume(params: {
      success?: (params: {
        
        tempFilePath: string
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

    
    pause(params: {
      success?: (params: {
        
        tempFilePath: string
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

    
    stop(params: {
      success?: (params: {
        
        tempFilePath: string
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

    
    startRecording(params: {
      
      period: number
      
      pcm16IOS?: boolean
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

    
    stopRecording(params: {
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
  }
  
  export function getRecorderManager(params?: {
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
  }): RecorderManager

  
  interface UploadTask {
    
    abort(params: {
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

    
    onHeadersReceived(
      listener: (params: {
        
        header: any
      }) => void
    ): void

    
    offHeadersReceived(
      listener: (params: {
        
        header: any
      }) => void
    ): void

    
    onProgressUpdate(
      listener: (params: {
        
        progress: number
        
        totalBytesSent: number
        
        totalBytesExpectedToSend: number
      }) => void
    ): void

    
    offProgressUpdate(
      listener: (params: {
        
        progress: number
        
        totalBytesSent: number
        
        totalBytesExpectedToSend: number
      }) => void
    ): void
  }
  
  export function uploadFile(params: {
    
    url: string
    
    filePath: string
    
    name: string
    
    header?: any
    
    formData?: any
    
    timeout?: number
    
    method?: UploadHttpMethod
    success?: (params: {
      
      data: string
      
      statusCode: number
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
  }): UploadTask
}
