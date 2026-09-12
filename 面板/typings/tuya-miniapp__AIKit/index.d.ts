
declare namespace ty.ai {
  
  export function createForegroundVideoService(params?: {
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

  
  export function destroyForegroundVideoService(params?: {
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

  
  export function downloadFaceLandmarkerModel(params?: {
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

  
  export function detectFaceLandmarks(params: {
    
    path: string
    
    extendParam?: Object
    success?: (params: {
      
      faceLandmarks: FaceLandmark[]
      
      extData?: Object
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

  
  export function processForegroundMedia(params: {
    
    sources: ForegroundMediaSource[]
    
    outputConfig: OutputConfig
    
    extendParam?: Object
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

  
  export function processForegroundMediaByTemplate(params: {
    
    templateObject: ForegroundMediaTemplateObject
    
    mediaSource: string
    
    outputConfig?: OutputConfig
    
    extendParam?: Object
    success?: (params: {
      
      outputPath: string
      
      extData?: Object
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

  
  export function processPetForegroundMediaByTemplate(params: {
    
    templateObject: ForegroundMediaTemplateObject
    
    mediaSource: string
    
    outputConfig?: OutputConfig
    
    extendParam?: Object
    success?: (params: {
      
      outputPath: string
      
      extData?: Object
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

  
  export function oralDiseaseInit(params?: {
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

  
  export function oralDiseasePredictionRun(params: {
    
    inputImagePath: string
    
    outImagePath: string
    success?: (params: {
      
      nonOral: boolean
      
      diseaseType?: string[]
      
      heatMapPath?: string
      
      sunlightPath?: string
      
      chromaPath?: string
      
      grayscalePath?: string
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

  
  export function imageEnhanceCreate(params?: {
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

  
  export function imageEnhanceDestroy(params?: {
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

  
  export function enhanceClarityForImage(params: {
    
    inputImagePath: string
    
    outputImagePath: string
    
    enhanceOutputResolution?: EnhanceOutputResolution
    
    enhanceType?: EnhanceType
    success?: (params: {
      
      outputImagePath: string
      
      enhanceSuccess: boolean
      
      enhanceFaileReason: string
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

  
  export function enhanceClarityCancel(params?: {
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

  
  export function enhanceCalibrationForImage(params: {
    
    inputImagePath: string
    
    outputImagePath: string
    
    interpolationType?: EnhanceInterpolationType
    
    ratio: number
    
    fCx: number
    
    fCy: number
    
    fFx: number
    
    fFy: number
    
    fK1: number
    
    fK2: number
    
    fK3: number
    
    fP1: number
    
    fP2: number
    success?: (params: {
      
      outputImagePath: string
      
      enhanceSuccess: boolean
      
      enhanceFaileReason: string
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

  
  export function enhanceCalibrationCancel(params?: {
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

  
  export function pixelImageInit(params?: {
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

  
  export function fetchPixelImageCategoryInfo(params?: {
    success?: (params: {
      
      imageCategory?: PixelImageCategoryBean[]
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

  
  export function generationPixelImage(params: {
    
    deviceId: string
    
    label: string
    
    imageWidth: number
    
    imageHeight: number
    
    outImagePath: string
    success?: (params: {
      
      success: boolean
      
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

  
  export function generationPixeGifImage(params: {
    
    deviceId: string
    
    imageWidth: number
    
    imageHeight: number
    
    imagePath: string
    
    animType: string
    
    outImagePath: string
    success?: (params: {
      
      success: boolean
      
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

  
  export function on_app_ai_data_tracking_image_generation_init(params: {
    
    device_id: string
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

  
  export function on_app_ai_data_tracking_image_generation_like(params: {
    
    device_id: string
    
    image_generation_label: string
    
    image_generation_like: boolean
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

  
  export function on_app_ai_data_tracking_image_generation_use(params: {
    
    device_id: string
    
    image_generation_label: string
    
    image_generation_use: boolean
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

  
  export function predictLightScenes(params: {
    
    roomId: number
    
    generateSceneStyles: SceneStyleInfo[]
    
    sceneType: number
    success?: (params: LightSceneInfo[]) => void
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

  
  export function backgroundMusicList(params?: {
    success?: (params: {
      
      musicList?: MusicModel[]
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

  
  export function backgroundMusicDownload(params: {
    
    musicUrl: string
    
    musicPath: string
    success?: (params: {
      
      musicPath: string
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

  
  export function objectDetectCreate(params?: {
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

  
  export function objectDetectDestroy(params?: {
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

  
  export function objectDetectForVideo(params: {
    
    inputVideoPath: string
    
    outputVideoPath: string
    
    videoConfig?: VideoConfig
    
    detectType?: DetectType
    
    imageEditType?: ImageEditType
    
    musicPath: string
    
    audioEditType?: AudioEditType
    
    originAudioVolume?: number
    
    overlayAudioVolume?: number
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

  
  export function objectDetectForVideoCancel(params?: {
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

  
  export function objectDetectForImage(params: {
    
    inputPath: string
    
    outputPath: string
    
    detectType?: DetectType
    
    imageEditType?: ImageEditType
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

  
  export function privacyProtectDetectForVideo(params: {
    
    inputVideoPath: string
    
    outputVideoPath: string
    
    videoConfig?: VideoConfig
    
    detectType?: DetectType
    
    imageEditType?: ImageEditType
    
    musicPath: string
    
    audioEditType?: AudioEditType
    
    originAudioVolume?: number
    
    overlayAudioVolume?: number
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

  
  export function privacyProtectDetectForImage(params: {
    
    inputPath: string
    
    outputPath: string
    
    detectType?: DetectType
    
    imageEditType?: ImageEditType
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

  
  export function objectDetectForImageCancel(params?: {
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

  
  export function getClarityAndObjectForImage(params: {
    
    inputImagePath: string
    success?: (params: {
      
      sharpProbability: number
      
      blurProbability: number
      
      hasObject: boolean
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

  
  export function OnAppAISnapshotWithFPS(params?: {
    success?: (params: {
      
      timestamp: number
      
      fps: number
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

  
  export function OnAppAISessionWithFPSStart(params?: {
    
    frequency?: number
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

  
  export function OnAppAISessionWithFPSEnd(params?: {
    success?: (params: {
      
      fpsList?: FPSModel[]
      
      lowestFps: number
      
      topFps: number
      
      averageFps: number
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

  
  export function OnAppAISnapshotWithCPU(params?: {
    success?: (params: {
      
      timestamp: number
      
      cpu: number
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

  
  export function OnAppAISessionWithCPUStart(params?: {
    
    frequency?: number
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

  
  export function OnAppAISessionWithCPUEnd(params?: {
    success?: (params: {
      
      cpuList?: CPUModel[]
      
      lowestCPUUsage: number
      
      topCPUUsage: number
      
      incrementCPUUsage: number
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

  
  export function OnAppAISnapshotWithMemory(params?: {
    success?: (params: {
      
      timestamp: number
      
      memoryMB: number
      
      deviceMemoryMB: number
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

  
  export function OnAppAISessionWithMemoryStart(params?: {
    
    frequency?: number
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

  
  export function OnAppAISessionWithMemoryEnd(params?: {
    success?: (params: {
      
      memoryList?: MemoryModel[]
      
      lowestMemoryMB: number
      
      topMemoryMB: number
      
      incrementMemoryMB: number
      
      deviceMemoryMB: number
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

  
  export function OnAppAISnapshotWithGPU(params?: {
    success?: (params: {
      
      timestamp: number
      
      gpuUsage: number
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

  
  export function OnAppAISessionWithGPUStart(params?: {
    
    frequency?: number
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

  
  export function OnAppAISessionWithGPUEnd(params?: {
    success?: (params: {
      
      gpuList?: GPUModel[]
      
      lowestGPU: number
      
      topGPU: number
      
      incrementGPU: number
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

  
  export function petsDetectCreate(params?: {
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

  
  export function petsDetectDestory(params?: {
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

  
  export function petsPictureQualityDetectForImage(params: {
    
    inputImagePath: string
    
    labelAllow?: LabelAllowEnum
    
    objectAreaPercent: number
    
    objectFaceRotationAngle: number
    
    objectFaceSideAngle: number
    
    maximumPictureBrightness: number
    
    minimumPictureBrightness: number
    success?: (params: {
      
      imagePath: string
      
      lowQuality: boolean
      
      lowQualityReason: number
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

  
  export function supportPetDogPictureQuality(params?: {
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

  
  export function getTranslateRecords(params?: {
    
    deviceId?: string
    
    lastId?: number
    
    pageSize?: number
    success?: (params: {
      
      list?: TranslateRecord[]
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

  
  export function getTranslateRecord(params: {
    
    translateId: number
    success?: (params: {
      
      translateId: number
      
      deviceId: string
      
      originalLanguage?: string
      
      targetLanguage?: string
      
      recordId?: string
      
      agentId?: string
      
      name: string
      
      beginAt: number
      
      endAt: number
      
      duration: number
      
      visit: boolean
      
      remove: boolean
      
      wavFilePath?: string
      
      summaryStatus: number
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

  
  export function updateTranslateRecord(params: {
    
    translateId: number
    
    name?: string
    
    summaryStatus?: string
    
    visit?: string
    
    remove?: string
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

  
  export function removeTranslateRecord(params: {
    
    translateId: number
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

  
  export function getTranslateRealTimeResult(params: {
    
    translateId: string
    success?: (params: {
      
      list?: TranslateRealTimeResult[]
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

  
  export function processTranslateSummary(params: {
    
    translateId: number
    
    template: string
    
    language: string
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

  
  export function getTranslateSummaryProcessStatus(params: {
    
    deviceId: string
    
    translateIds: string[]
    success?: (params: {
      
      success: string[]
      
      fail: string[]
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

  
  export function getTranslateSummary(params: {
    
    translateId: number
    success?: (params: {
      
      text: string
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

  
  export function onOralModelDownProgress(
    listener: (params: OralModelDownProgressEvent) => void
  ): void

  
  export function offOralModelDownProgress(
    listener: (params: OralModelDownProgressEvent) => void
  ): void

  
  export function onEnhanceClarityProgress(
    listener: (params: EnhanceProgressEvent) => void
  ): void

  
  export function offEnhanceClarityProgress(
    listener: (params: EnhanceProgressEvent) => void
  ): void

  
  export function onEnhanceCalibrationProgress(
    listener: (params: EnhanceProgressEvent) => void
  ): void

  
  export function offEnhanceCalibrationProgress(
    listener: (params: EnhanceProgressEvent) => void
  ): void

  
  export function onPixelImageInitProgressEvent(
    listener: (params: PixelImageInitProgressModel) => void
  ): void

  
  export function offPixelImageInitProgressEvent(
    listener: (params: PixelImageInitProgressModel) => void
  ): void

  
  export function onVideoObjectDetectProgress(
    listener: (params: DetectProgressEvent) => void
  ): void

  
  export function offVideoObjectDetectProgress(
    listener: (params: DetectProgressEvent) => void
  ): void

  
  export function onAppAIWithFPSEvent(
    listener: (params: FPSModel) => void
  ): void

  
  export function offAppAIWithFPSEvent(
    listener: (params: FPSModel) => void
  ): void

  
  export function onAppAIWithCPUEvent(
    listener: (params: CPUModel) => void
  ): void

  
  export function offAppAIWithCPUEvent(
    listener: (params: CPUModel) => void
  ): void

  
  export function onAppAIWithMemoryEvent(
    listener: (params: MemoryModel) => void
  ): void

  
  export function offAppAIWithMemoryEvent(
    listener: (params: MemoryModel) => void
  ): void

  
  export function onAppAIWithGPUEvent(
    listener: (params: GPUModel) => void
  ): void

  
  export function offAppAIWithGPUEvent(
    listener: (params: GPUModel) => void
  ): void

  
  export function onPetsDetectProgress(
    listener: (params: DetectProgressEvent) => void
  ): void

  
  export function offPetsDetectProgress(
    listener: (params: DetectProgressEvent) => void
  ): void

  export type Object = {}

  export type FaceLandmark = {
    
    faceLandmarks: NormalizedLandmark[]
    
    extData?: Object
  }

  export type ForegroundMediaSource = {
    
    type: string
    
    path: string
    
    identifier: string
    
    loop?: boolean
    
    x?: number
    
    y?: number
    
    z_index?: number
    
    filter_chain?: string
    
    extendParam?: Object
  }

  export type OutputConfig = {
    
    path?: string
    
    name?: string
    
    min_duration?: number
    
    outputType?: string
    
    extendParam?: Object
  }

  export type ForegroundMediaTemplateObject = {
    
    type: string
    
    effect: ForegroundMediaTemplateEffectObject
    
    extendParam?: Object
  }

  export enum EnhanceOutputResolution {
    
    EnhanceOutputResolutionOriginal = 1,

    
    EnhanceOutputResolution640P = 2,

    
    EnhanceOutputResolution720P = 3,

    
    EnhanceOutputResolution1080P = 4,
  }

  export enum EnhanceType {
    
    EnhanceTypeNULL = 1,

    
    EnhanceTypeDenoise = 2,

    
    EnhanceTypeShadows = 3,

    
    EnhanceTypeSuperResolution = 4,

    
    EnhanceTypeDenoiseShadows = 5,

    
    EnhanceTypeDenoiseSuperResolution = 6,

    
    EnhanceTypeShadowsSuperResolution = 7,

    
    EnhanceTypeDenoiseShadowsSuperResolution = 8,
  }

  export enum EnhanceInterpolationType {
    
    EnhanceInterpolationTypeNULL = 1,

    
    EnhanceInterpolationTypeBILINEAR = 2,

    
    EnhanceInterpolationTypeBICUBIC = 3,

    
    EnhanceInterpolationTypeLANZCOS = 4,

    
    EnhanceInterpolationTypeEDGE = 5,
  }

  export type PixelImageCategoryBean = {
    
    categoryName: string
    
    categoryLabel: string[]
  }

  export type SceneStyleInfo = {
    
    name: string
    
    turnOnPercent?: number
    
    sceneDataList?: SceneData[]
    
    nameRosettaKey?: string
  }

  export type LightSceneInfo = {
    parentRegionId: string
    sceneType: number
    name: string
    icon: string
    matchType: number
    actions: LightSceneAction[]
  }

  export type MusicModel = {
    
    musicTitle: string
    
    musicUrl: string
  }

  export enum VideoConfig {
    
    Level_480 = 1,

    
    Level_540 = 2,

    
    Level_720 = 3,

    
    Level_1080 = 4,
  }

  export enum DetectType {
    
    VideoDetectMainBodyTypePet = 1,

    
    VideoDetectMainBodyTypePerson = 2,
  }

  export enum ImageEditType {
    
    ImageEditTypeNoEffect = 1,

    
    ImageEditTypeHighlight = 2,

    
    ImageEditTypeMosaic = 3,
  }

  export enum AudioEditType {
    
    audioEditTypeNULL = 1,

    
    audioEditTypeMix = 2,

    
    audioEditTypeMute = 3,
  }

  export type FPSModel = {
    
    timestamp: number
    
    fps: number
  }

  export type CPUModel = {
    
    timestamp: number
    
    cpu: number
  }

  export type MemoryModel = {
    
    timestamp: number
    
    memoryMB: number
    
    deviceMemoryMB: number
  }

  export type GPUModel = {
    
    timestamp: number
    
    gpuUsage: number
  }

  export enum LabelAllowEnum {
    
    labelTypeCat = 1,

    
    labelTypeDog = 2,
  }

  export type TranslateRecord = {
    
    translateId: number
    
    deviceId: string
    
    originalLanguage?: string
    
    targetLanguage?: string
    
    recordId?: string
    
    agentId?: string
    
    name: string
    
    beginAt: number
    
    endAt: number
    
    duration: number
    
    visit: boolean
    
    remove: boolean
    
    wavFilePath?: string
    
    summaryStatus: number
  }

  export type TranslateRealTimeResult = {
    
    asrId: number
    
    translateId: number
    
    requestId: string
    
    recordId: string
    
    beginTime: number
    
    endTime: number
    
    text: string
    
    asr: string
    
    channel: number
  }

  export type OralModelDownProgressEvent = {
    
    progress: number
  }

  export type EnhanceProgressEvent = {
    
    progress: number
  }

  export type PixelImageInitProgressModel = {
    
    progress: number
  }

  export type DetectProgressEvent = {
    
    progress: number
  }

  export type NormalizedLandmark = {
    x: number
    y: number
    z: number
    visibility?: number
    presence?: number
    
    extData?: Object
  }

  export type ForegroundMediaTemplateEffectObject = {
    
    code: string
    
    name: string
    
    ouputDuration: number
    
    outputDuration: number
    
    outputType?: string
    
    image: string
    
    resource: string
    
    extendParam?: Object
  }

  export type OralDiseaseParams = {
    
    inputImagePath: string
    
    outImagePath: string
  }

  export type OralDiseaseResult = {
    
    nonOral: boolean
    
    diseaseType?: string[]
    
    heatMapPath?: string
    
    sunlightPath?: string
    
    chromaPath?: string
    
    grayscalePath?: string
  }

  export type EnhanceClarityParams = {
    
    inputImagePath: string
    
    outputImagePath: string
    
    enhanceOutputResolution?: EnhanceOutputResolution
    
    enhanceType?: EnhanceType
  }

  export type EnhanceResult = {
    
    outputImagePath: string
    
    enhanceSuccess: boolean
    
    enhanceFaileReason: string
  }

  export type EnhanceCalibrationParams = {
    
    inputImagePath: string
    
    outputImagePath: string
    
    interpolationType?: EnhanceInterpolationType
    
    ratio: number
    
    fCx: number
    
    fCy: number
    
    fFx: number
    
    fFy: number
    
    fK1: number
    
    fK2: number
    
    fK3: number
    
    fP1: number
    
    fP2: number
  }

  export type PixelImageCategoryListBean = {
    
    imageCategory?: PixelImageCategoryBean[]
  }

  export type PixelImageParams = {
    
    deviceId: string
    
    label: string
    
    imageWidth: number
    
    imageHeight: number
    
    outImagePath: string
  }

  export type PixelImageResult = {
    
    success: boolean
    
    imagePath: string
  }

  export type PixelImageGifParams = {
    
    deviceId: string
    
    imageWidth: number
    
    imageHeight: number
    
    imagePath: string
    
    animType: string
    
    outImagePath: string
  }

  export type PixelGifImageResult = {
    
    success: boolean
    
    imagePath: string
  }

  export type PixelImageDataTrackingInitParams = {
    
    device_id: string
  }

  export type PixelImageDataTrackingLikeParams = {
    
    device_id: string
    
    image_generation_label: string
    
    image_generation_like: boolean
  }

  export type PixelImageDataTrackingUseParams = {
    
    device_id: string
    
    image_generation_label: string
    
    image_generation_use: boolean
  }

  export type SceneData = {
    
    productId: string
    
    sceneData: string
    
    sceneCellBackground: string
    
    sceneId: string
    
    dpCode: string
  }

  export type LightSceneAction = {
    actionExecutor: string
    entityId: string
    entityName: string
    executorProperty: any
    extraProperty: any
  }

  export type PredictLightSceneRequestParams = {
    
    roomId: number
    
    generateSceneStyles: SceneStyleInfo[]
    
    sceneType: number
  }

  export type MusicModelList = {
    
    musicList?: MusicModel[]
  }

  export type MusicParams = {
    
    musicUrl: string
    
    musicPath: string
  }

  export type MusicResponse = {
    
    musicPath: string
  }

  export type DetectVideoParams = {
    
    inputVideoPath: string
    
    outputVideoPath: string
    
    videoConfig?: VideoConfig
    
    detectType?: DetectType
    
    imageEditType?: ImageEditType
    
    musicPath: string
    
    audioEditType?: AudioEditType
    
    originAudioVolume?: number
    
    overlayAudioVolume?: number
  }

  export type DetectVideoResponse = {
    
    path: string
  }

  export type DetectImageParams = {
    
    inputPath: string
    
    outputPath: string
    
    detectType?: DetectType
    
    imageEditType?: ImageEditType
  }

  export type DetectImageResponse = {
    
    path: string
  }

  export type ClarityAndObjectParams = {
    
    inputImagePath: string
  }

  export type ClarityAndObjectResult = {
    
    sharpProbability: number
    
    blurProbability: number
    
    hasObject: boolean
  }

  export type MonitorFrequencyParams = {
    
    frequency?: number
  }

  export type FPSSessionModelList = {
    
    fpsList?: FPSModel[]
    
    lowestFps: number
    
    topFps: number
    
    averageFps: number
  }

  export type CPUSessionModelList = {
    
    cpuList?: CPUModel[]
    
    lowestCPUUsage: number
    
    topCPUUsage: number
    
    incrementCPUUsage: number
  }

  export type MemorySessionModelList = {
    
    memoryList?: MemoryModel[]
    
    lowestMemoryMB: number
    
    topMemoryMB: number
    
    incrementMemoryMB: number
    
    deviceMemoryMB: number
  }

  export type GPUSessionModelList = {
    
    gpuList?: GPUModel[]
    
    lowestGPU: number
    
    topGPU: number
    
    incrementGPU: number
  }

  export type DetectParams = {
    
    inputImagePath: string
    
    labelAllow?: LabelAllowEnum
    
    objectAreaPercent: number
    
    objectFaceRotationAngle: number
    
    objectFaceSideAngle: number
    
    maximumPictureBrightness: number
    
    minimumPictureBrightness: number
  }

  export type DetectResult = {
    
    imagePath: string
    
    lowQuality: boolean
    
    lowQualityReason: number
  }

  export type GenerateTranslateTaskParams = {
    
    contextId?: string
    
    deviceId: string
    
    dataTimeout: number
    
    originalLanguage: string
    
    targetLanguage: string
    
    agentId: string
  }

  export type StartSpeakParams = {
    
    contextId: string
    
    channel: number
  }

  export type StopSpeakParams = {
    
    contextId: string
  }

  export type DisposeParams = {
    
    contextId: string
  }

  export type TranslateEvent = {
    
    contextId: string
  }

  export type GetTranslateRecordsParams = {
    
    deviceId?: string
    
    lastId?: number
    
    pageSize?: number
  }

  export type GetTranslateRecordsResponse = {
    
    list?: TranslateRecord[]
  }

  export type GetTranslateRecordParams = {
    
    translateId: number
  }

  export type UpdateTranslateRecordParams = {
    
    translateId: number
    
    name?: string
    
    summaryStatus?: string
    
    visit?: string
    
    remove?: string
  }

  export type RemoveTranslateRecordParams = {
    
    translateId: number
  }

  export type GetTranslateRealTimeResultParams = {
    
    translateId: string
  }

  export type GetTranslateRealTimeResultResponse = {
    
    list?: TranslateRealTimeResult[]
  }

  export type ProcessTranslateSummaryParams = {
    
    translateId: number
    
    template: string
    
    language: string
  }

  export type GetTranslateSummaryProcessStatusParams = {
    
    deviceId: string
    
    translateIds: string[]
  }

  export type GetTranslateSummaryProcessStatusResponse = {
    
    success: string[]
    
    fail: string[]
  }

  export type GetTranslateSummaryParams = {
    
    translateId: number
  }

  export type GetTranslateSummaryResponse = {
    
    text: string
  }

  
  interface TranslateContext {
    
    startSpeak(params: {
      
      channel: number
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

    
    stopSpeak(params: {
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

    
    dispose(params: {
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

    
    onTranslateError(
      listener: (params: {
        
        code: number
        
        message?: string
      }) => void
    ): void

    
    offTranslateError(
      listener: (params: {
        
        code: number
        
        message?: string
      }) => void
    ): void

    
    onTranslateRealTimeStatusUpdate(
      listener: (params: {
        
        recordId: string
        
        requestId: string
        
        asrId: number
        
        channel: number
        
        phase: number
        
        status: number
        
        text?: string
        
        errorCode?: number
        
        errorMessage?: string
      }) => void
    ): void

    
    offTranslateRealTimeStatusUpdate(
      listener: (params: {
        
        recordId: string
        
        requestId: string
        
        asrId: number
        
        channel: number
        
        phase: number
        
        status: number
        
        text?: string
        
        errorCode?: number
        
        errorMessage?: string
      }) => void
    ): void
  }
  
  export function generateTranslateTask(params: {
    
    deviceId: string
    
    dataTimeout: number
    
    originalLanguage: string
    
    targetLanguage: string
    
    agentId: string
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
  }): TranslateContext
}
