
declare namespace ty {
  
  export function getAIAssistantHistory(params: {
    
    size: number
    
    primaryId: number
    
    requestId: string
    
    type: string
    
    channel: string
    success?: (params: {
      
      data: string
      
      channel: string
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

  
  export function getAIAssistantGroupHistory(params: {
    
    size: number
    
    primaryId: number
    
    channels?: string[]
    
    sessions?: string[]
    success?: (params: {
      
      size: number
      
      list: GroupHistoryResItem[][]
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

  
  export function deleteAIAssistant(params: {
    
    primaryId: number
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

  
  export function sendAIAssistant(params: {
    
    block: string
    
    options: string
    
    type: string
    
    requestId?: string
    
    channel?: string
    
    session?: string
    success?: (params: {
      
      requestId: string
      
      primaryId: number
      
      code: string
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

  
  export function terminateAIAssistant(params: {
    
    requestId: string
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

  
  export function createAIAssistant(params?: {
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

  
  export function getAIAssistantRequestId(params?: {
    success?: (params: {
      
      requestId: string
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

  
  export function getAIAssistantRequestIdSync(): {
    
    requestId: string
  }

  
  export function insertAIAssistantInfo(params: {
    
    requestId: string
    
    type: string
    
    data: string
    
    code: string
    
    message: string
    
    source: number
    
    channel?: string
    
    session?: string
    
    options?: string
    success?: (params: {
      
      primaryId: number
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

  
  export function updateAIAssistantInfo(params: {
    
    primaryId: number
    
    data?: string
    
    code?: string
    
    message?: string
    
    source?: string
    
    type: string
    
    channel?: string
    
    session?: string
    
    options?: string
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

  
  export function getSpeechDisplayType(params?: {
    success?: (params: {
      
      type: number
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

  
  export function disableAIAssistant(params?: {
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

  
  export function enableAIAssistant(params?: {
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

  
  export function deleteAIAssistantDbSource(params: {
    
    homeId: string
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

  
  export function getSingleAIAssistant(params: {
    
    primaryId: number
    success?: (params: {
      
      primaryId: number
      
      requestId: string
      
      source: number
      
      data: string
      
      code: number
      
      type: string
      
      createTime: number
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

  
  export function isSupportOldSpeech(params?: {
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

  
  export function apiRequestByAtop(params: {
    
    api: string
    
    version?: string
    
    postData: any
    
    extData?: any
    
    requestId?: string
    
    cache?: ApiRequestCacheBean
    success?: (params: {
      
      thing_json_?: {}
      
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

  
  export function apiRequestByHighwayRestful(params: {
    
    host?: string
    
    api: string
    
    header?: any
    
    query?: any
    
    body?: any
    
    method?: HighwayMethod
    
    requestId?: string
    
    cache?: ApiRequestCacheBean
    success?: (params: {
      
      result: {}
      
      api: string
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

  
  export function event(params: {
    
    eventId: string
    
    event: any
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

  
  export function beginEvent(params: {
    
    eventName: string
    
    identifier: string
    
    attributes: any
    
    infos: any
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

  
  export function trackEvent(params: {
    
    eventName: string
    
    identifier: string
    
    attributes: any
    
    infos: any
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

  
  export function endEvent(params: {
    
    eventName: string
    
    identifier: string
    
    attributes: any
    
    infos: any
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

  
  export function eventLink(params: {
    
    linkIndex: number
    
    linkId: string
    
    params: string
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

  
  export function performanceEvent(params?: {
    
    launchData?: string
    
    perfData?: any
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

  
  export function getAppInfo(params?: {
    success?: (params: {
      
      serverTimestamp: number
      
      appVersion: string
      
      language: string
      
      countryCode: string
      
      regionCode: string
      
      appName: string
      
      appIcon: string
      
      appEnv?: number
      
      appBundleId: string
      
      appScheme: string
      
      appId: string
      
      clientId?: string
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

  
  export function getCurrentWifiSSID(params?: {
    success?: (params: {
      
      ssId: string
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

  
  export function getNGConfigByKeys(params: {
    
    keys: string[]
    success?: (params: {
      
      config: any
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

  
  export function getConfigByKeys(params: {
    
    keys: string[]
    success?: (params: {
      
      config: any
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

  
  export function getThirdPartyServiceInfo(params: {
    
    types: number[]
    success?: (params: ThirdPartyServiceInfo[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openThirdPartyMiniProgram(params: {
    
    type?: ThirdPartyMiniProgramType
    
    params: any
    success?: (params: {
      
      data: any
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

  
  export function getCloudEnv(params?: {
    success?: (params: {
      
      env?: CloudEnvType
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

  
  export function isMiniAppAvailable(params?: {
    success?: (params: {
      
      availalble: boolean
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

  
  export function getAppTabInfo(params?: {
    success?: (params: {
      
      tabInfo: AppTabInfo[]
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

  
  export function getAppPrivacyPolicyInfo(params?: {
    success?: (params: {
      
      privacyTitle: string
      
      privacyContent: string
      
      privacyTxt: string
      
      privacyUrl: string
      
      userAgreementTxt: string
      
      userAgreementUrl: string
      
      isSupportChildrenPrivacy: boolean
      
      childrenPrivacyTxt: string
      
      childrenPrivacyUrl: string
      
      isSupportThirdPartyPrivacy: boolean
      
      thirdPartyPrivacyTxt: string
      
      thirdPartyPrivacyUrl: string
      
      agreePrivacyPolicy: string
      
      disAgreePrivacyPolicy: string
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

  
  export function openCountrySelectPage(params?: {
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

  
  export function getIconfontInfo(params?: {
    success?: (params: {
      
      nameMap: string
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

  
  export function iapPay(params: {
    
    orderID: string
    
    productID: string
    
    preFlowCode: string
    
    subscription?: number
    
    billing_mode?: number
    
    previous_sku?: string
    
    offer?: OfferParam
    
    offerToken?: string
    success?: (params: {
      
      orderID?: string
      
      token?: string
      
      products?: string
      
      paymentType?: number
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

  
  export function iapType(params?: {
    success?: (params: {
      
      data: number
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

  
  export function getProductInfos(params: {
    
    productIds: string[]
    
    ignoreIneligibleOffer: boolean
    success?: (params: {
      
      result: any
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

  
  export function uploadImage(params: {
    
    filePath: string
    
    bizType: string
    
    contentType?: string
    
    delayTime?: number
    
    pollMaxCount?: number
    success?: (params: {
      
      result: string
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

  
  export function uploadVideo(params: {
    
    filePath: string
    
    bizType: string
    
    contentType?: string
    success?: (params: {
      
      result: string
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

  
  export function createLiveActivity(params: {
    
    activityType?: any
    
    activityId: string
    
    data: any
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

  
  export function getDebugLangCodes(params?: {
    success?: (params: {
      
      codes: string[]
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

  
  export function setDebugLangCodes(params: {
    
    codes: string[]
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

  
  export function getLangKey(params?: {
    success?: (params: {
      
      langKey: string
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

  
  export function getLangContent(params?: {
    success?: (params: {
      
      langContent: {}
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

  
  export function showLogUploadDialog(params?: {
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

  
  export function registerPageRefreshListener(params?: {
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

  
  export function getNgRawData(params: {
    
    rawKey: string
    success?: (params: {
      
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

  
  export function getOnlineCustomerService(params?: {
    success?: (params: { url: string }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openRNPanel(params: {
    
    deviceId: string
    
    uiId: string
    
    panelUiInfoBean?: PanelUiInfoBean
    
    initialProps?: any
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

  
  export function openPanel(params: {
    
    deviceId: string
    
    extraInfo?: PanelExtraParams
    
    initialProps?: any
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

  
  export function backToHomeAndOpenPanel(params: {
    
    deviceId: string
    
    extraInfo?: PanelExtraParams
    
    initialProps?: any
    
    removeUIInfo?: boolean
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

  
  export function preloadPanel(params: {
    
    deviceId: string
    
    extraInfo?: PanelExtraParams
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

  
  export function openInnerH5(params: {
    
    url: string
    
    title?: string
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

  
  export function openAppSystemSettingPage(params: {
    
    scope: string
    
    requestCode?: number
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

  
  export function openSystemSettingPage(params: {
    
    scope: string
    
    requestCode?: number
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

  
  export function emitChannel(params: {
    
    eventName: string
    
    event?: {}
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

  
  export function setActivityResult(params: {
    
    resultCode: number
    
    data?: any
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

  
  export function openThirdApp(params: {
    
    uriString: string
    
    packageName: string
    success?: (params: { isCanOpen?: boolean }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openThirdAppSync(params?: ThirdAppBean): {
    isCanOpen?: boolean
  }

  
  export function openUrlForceDefaultBrowser(params: {
    
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

  
  export function enablePanelAgent(params?: {
    
    enableFloat?: boolean
    
    enableDrop?: boolean
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

  
  export function getIapInfo(params?: {
    success?: (params: {
      
      iapType?: number
      
      googleIapEnableUserChoice?: boolean
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

  
  export function iapPayReady(params: {
    
    subscription: number
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

  
  export function pay(params: {
    
    order_id: string
    
    product_id: string
    
    subscription?: number
    
    billing_mode?: number
    
    previous_sku?: string
    
    offerToken?: string
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

  
  export function addOrderStatusListener(params: {
    
    order_id: string
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

  
  export function removeOrderStatusListener(params: {
    
    order_id: string
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

  
  export function queryProductDetails(params: {
    
    productList: ProductSub[]
    success?: (params: {
      
      productSubsMap?: any
      
      productInAppMap?: any
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

  
  export function router(params: {
    
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

  
  export function canIUseRouter(params: {
    
    url: string
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

  
  export function goDeviceDetail(params: {
    
    deviceId: string
    
    groupId?: string
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

  
  export function goDeviceAlarm(params: {
    
    deviceId: string
    
    groupId?: string
    
    category?: string
    
    repeat?: number
    
    timerConfig?: TimeConfig
    
    data: {}[]
    
    enableFilter?: boolean
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

  
  export function share(params: {
    
    type?: ShareInfoType
    
    title: string
    
    message: string
    
    contentType?: ShareInfoContentType
    
    recipients?: string[]
    
    imagePath?: string
    
    filePath?: string
    
    webPageUrl?: string
    
    miniProgramInfo?: MiniProgramInfo
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

  
  export function getShareChannelList(params?: {
    success?: (params: {
      
      shareChannelList: string[]
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

  
  export function showSharePanel(params: {
    
    contentType: number
    success?: (params: {
      
      platformType: string
      
      installed: boolean
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

  
  export function shareDirectly(params: {
    
    platformType: string
    
    localIdentifier: string
    
    contentType: number
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

  
  export function isSupportedShortcut(params?: {
    success?: (params: {
      
      isSupported: boolean
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

  
  export function isAssociatedShortcut(params: {
    
    sceneId: string
    
    name?: string
    success?: (params: {
      
      isAssociated: boolean
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

  
  export function handleShortcut(params: {
    
    type: number
    
    sceneId: string
    
    name: string
    
    iconUrl?: string
    success?: (params: {
      
      operationStep: number
      
      operationStatus: boolean
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

  
  export function getUserInfo(params?: {
    success?: (params: {
      
      nickName: string
      
      avatarUrl: string
      
      phoneCode: string
      
      regionCode: string
      
      isTemporaryUser: boolean
      
      timezoneId: string
      
      regFrom: number
      
      tempUnit: number
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

  
  export function changeDiyHomeStatus(params: {
    
    isOn: boolean
    success?: (params: {
      
      isSuccess: boolean
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

  
  export function getUnreadState(params: {
    
    messageCenterUnread: boolean
    
    faqUnread: boolean
    
    feedbackUnread: boolean
    
    customerServiceUnread: boolean
    success?: (params: {
      
      messageCenterUnread: MessageCenterUnread
      
      faqUnread: FAQUnread
      
      feedbackUnread: FeedbackUnread
      
      customerServiceUnread: CustomerServiceUnread
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

  
  export function resizeImage(params: {
    
    aspectFitWidth: number
    
    aspectFitHeight: number
    
    maxFileSize?: number
    
    path: string
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

  
  export function rotateImage(params: {
    
    path: string
    
    orientation: number
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

  
  export function saveToAlbum(params: {
    
    url: string
    
    encryptKey: string
    
    orientation: number
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

  
  export function takeScreenShot(params?: {
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

  
  export function convertVideoToGif(params: {
    
    videoFilePath: string
    
    width: number
    
    height: number
    
    frameRate: number
    
    startTime: number
    
    durationTime: number
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

  
  export function convertGifToImages(params: {
    
    gifFilePath: string
    
    quality: number
    success?: (params: {
      
      path: string
      
      imageNameList: string[]
      
      frameTime: number
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

  
  export function compressImageToTargetSize(params: {
    
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

  
  export function getWebSocketStatus(params?: {
    success?: (params: {
      
      status: number
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

  
  export function getWebSocketStatusSync(): {
    
    status: number
  }

  
  export function bindWechat(params?: {
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

  
  export function isSupportWechat(params?: {
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

  
  export function gotoWechatMiniApp(params: {
    
    miniAppId: string
    
    path: string
    
    miniProgramType: number
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

  
  export function isCalling(params?: {
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

  
  export function canLaunchCall(params?: {
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

  
  export function launchCall(params: {
    
    targetId: string
    
    timeout: number
    
    extra: any
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

  
  export function onAIAssistantChange(
    listener: (params: ReceiveBean) => void
  ): void

  
  export function offAIAssistantChange(
    listener: (params: ReceiveBean) => void
  ): void

  
  export function onCountrySelectResult(
    listener: (params: CountrySelectResultResponse) => void
  ): void

  
  export function offCountrySelectResult(
    listener: (params: CountrySelectResultResponse) => void
  ): void

  
  export function onUploadProgressUpdate(
    listener: (params: ProgressEvent) => void
  ): void

  
  export function offUploadProgressUpdate(
    listener: (params: ProgressEvent) => void
  ): void

  
  export function onPageRefresh(listener: (params: RefreshParams) => void): void

  
  export function offPageRefresh(
    listener: (params: RefreshParams) => void
  ): void

  
  export function onReceiveMessage(
    listener: (params: EventChannelMessageParams) => void
  ): void

  
  export function offReceiveMessage(
    listener: (params: EventChannelMessageParams) => void
  ): void

  
  export function onOrderStatusListener(
    listener: (params: OrderStatusEvent) => void
  ): void

  
  export function offOrderStatusListener(
    listener: (params: OrderStatusEvent) => void
  ): void

  
  export function onUserSelectedAlternativeBilling(
    listener: (params: UserSelectedAlternativeEvent) => void
  ): void

  
  export function offUserSelectedAlternativeBilling(
    listener: (params: UserSelectedAlternativeEvent) => void
  ): void

  
  export function onRouterEvent(listener: (params: RouterEvent) => void): void

  
  export function offRouterEvent(listener: (params: RouterEvent) => void): void

  
  export function onRouterResult(
    listener: (params: RouterResultResponse) => void
  ): void

  
  export function offRouterResult(
    listener: (params: RouterResultResponse) => void
  ): void

  
  export function onUnreadStateChanged(
    listener: (params: SupportUnreadResp) => void
  ): void

  
  export function offUnreadStateChanged(
    listener: (params: SupportUnreadResp) => void
  ): void

  
  export function onFrontPageClose(
    listener: (params: PageCloseResponse) => void
  ): void

  
  export function offFrontPageClose(
    listener: (params: PageCloseResponse) => void
  ): void

  
  export function onWebSocketStatusChange(
    listener: (params: StatusBean) => void
  ): void

  
  export function offWebSocketStatusChange(
    listener: (params: StatusBean) => void
  ): void

  export type GroupHistoryResItem = {
    
    primaryId: number
    
    requestId: string
    
    source: number
    
    code: string
    
    message: string
    
    type: string
    
    createTime: number
    
    homeId: string
    
    channel: string
    
    session: string
    
    options: string
    
    data: string
  }

  export type ApiRequestCacheBean = {
    
    timeout: number
    
    policy?: CachePolicy
  }

  export enum HighwayMethod {
    
    GET = "GET",

    
    POST = "POST",

    
    PUT = "PUT",

    
    DELETE = "DELETE",
  }

  export type ThirdPartyServiceInfo = {
    
    available: boolean
    
    isAppInstalled: boolean
    
    appInstallUrl: string
    
    type: number
  }

  export enum ThirdPartyMiniProgramType {
    
    QQ = 1,

    
    Wechat = 2,
  }

  export enum CloudEnvType {
    
    Public = 0,

    
    Private = 1,
  }

  export type AppTabInfo = {
    
    key: string
    
    text: string
    
    iconPath: string
    
    selectedIconPath: string
  }

  export type OfferParam = {
    
    offerId: string
    
    type?: OfferType
    
    keyId?: string
    
    nonce?: string
    
    timestamp?: number
    
    signature?: string
  }

  export type PanelUiInfoBean = {
    
    phase?: string
    
    type?: string
    
    ui?: string
    
    version?: string
    
    appRnVersion?: string
    
    name?: string
    
    uiConfig?: any
    
    rnFind?: boolean
    
    pid?: string
    
    i18nTime?: number
  }

  export type PanelExtraParams = {
    
    productId: string
    
    productVersion: string
    
    i18nTime: string
    
    bizClientId: string
    
    uiType?: string
    
    uiPhase?: string
  }

  export type ThirdAppBean = {
    
    uriString: string
    
    packageName: string
  }

  export type ProductSub = {
    
    productId: string
    
    subscription: number
  }

  export type TimeConfig = {
    
    background: string
  }

  export enum ShareInfoType {
    
    WeChat = "WeChat",

    
    Message = "Message",

    
    Email = "Email",

    
    More = "More",
  }

  export enum ShareInfoContentType {
    
    Text = "text",

    
    Image = "image",

    
    File = "file",

    
    Web = "web",

    
    MiniProgram = "miniProgram",
  }

  export type MiniProgramInfo = {
    
    userName: string
    
    path: string
    
    hdImagePath: string
    
    withShareTicket: boolean
    
    miniProgramType: number
    
    webPageUrl: string
  }

  export type MessageCenterUnread = {
    
    state: boolean
  }

  export type FAQUnread = {
    
    state: boolean
  }

  export type FeedbackUnread = {
    
    state: boolean
  }

  export type CustomerServiceUnread = {
    
    state: boolean
  }

  export type ReceiveBean = {
    
    data: string
  }

  export type CountrySelectResultResponse = {
    
    countryCode?: string
    
    countryAbb?: string
    
    countryName?: string
  }

  export type ProgressEvent = {
    
    filePath: string
    
    progress: number
  }

  export type RefreshParams = {
    
    key: string
    
    data?: any
  }

  export type EventChannelMessageParams = {
    
    eventId: string
    
    event?: {}
  }

  export type OrderStatusEvent = {
    
    order_id: string
    
    resultCode: number
    
    errorCode?: number
    
    errorMsg?: string
  }

  export type UserSelectedAlternativeEvent = {
    
    externalTransactionToken?: string
    
    products?: string
  }

  export type RouterEvent = {
    
    bizEventName: string
    
    bizEventData: Object
  }

  export type RouterResultResponse = {
    
    url: string
    
    data?: string
  }

  export type SupportUnreadResp = {
    
    messageCenterUnread: MessageCenterUnread
    
    faqUnread: FAQUnread
    
    feedbackUnread: FeedbackUnread
    
    customerServiceUnread: CustomerServiceUnread
  }

  export type PageCloseResponse = {
    
    from?: string
  }

  export type StatusBean = {
    
    status: number
  }

  export enum CachePolicy {
    
    NETWORK_ONLY = "NETWORK_ONLY",

    
    CACHE_ELSE_NETWORK = "CACHE_ELSE_NETWORK",

    
    CACHE_THEN_NETWORK = "CACHE_THEN_NETWORK",
  }

  export type ApiRequestByAtopParams = {
    
    api: string
    
    version?: string
    
    postData: any
    
    extData?: any
    
    requestId?: string
    
    cache?: ApiRequestCacheBean
  }

  export type ApiRequestByAtopResponse = {
    
    thing_json_?: {}
    
    data: string
  }

  export type HighwayReq = {
    
    host?: string
    
    api: string
    
    header?: any
    
    query?: any
    
    body?: any
    
    method?: HighwayMethod
    
    requestId?: string
    
    cache?: ApiRequestCacheBean
  }

  export type HighwayResp = {
    
    result: {}
    
    api: string
  }

  export type EventBean = {
    
    eventId: string
    
    event: any
  }

  export type TrackEventBean = {
    
    eventName: string
    
    identifier: string
    
    attributes: any
    
    infos: any
  }

  export type EventLinkBean = {
    
    linkIndex: number
    
    linkId: string
    
    params: string
  }

  export type PerformanceBean = {
    
    launchData?: string
    
    perfData?: any
  }

  export type ManagerContext = {
    
    managerId: number
    
    homeId: string
    
    sampleRate: number
    
    channels: number
    
    codec: string
    
    options: string
  }

  export type AsrManagerContext = {
    
    managerId: number
  }

  export type Active = {
    
    isActive: boolean
  }

  export type AppInfoBean = {
    
    serverTimestamp: number
    
    appVersion: string
    
    language: string
    
    countryCode: string
    
    regionCode: string
    
    appName: string
    
    appIcon: string
    
    appEnv?: number
    
    appBundleId: string
    
    appScheme: string
    
    appId: string
    
    clientId?: string
  }

  export type SystemWirelessInfoBean = {
    
    ssId: string
  }

  export type NGConfigParams = {
    
    keys: string[]
  }

  export type ConfigResponse = {
    
    config: any
  }

  export type ConfigParams = {
    
    keys: string[]
  }

  export type ThirdPartyServiceParams = {
    
    types: number[]
  }

  export type ThirdPartyMiniProgramParams = {
    
    type?: ThirdPartyMiniProgramType
    
    params: any
  }

  export type ThirdPartyMiniProgramResult = {
    
    data: any
  }

  export type CloudEnvResult = {
    
    env?: CloudEnvType
  }

  export type MiniAppAvailableRes = {
    
    availalble: boolean
  }

  export type AppTabInfoResponse = {
    
    tabInfo: AppTabInfo[]
  }

  export type AppPrivacyPolicyInfoResponse = {
    
    privacyTitle: string
    
    privacyContent: string
    
    privacyTxt: string
    
    privacyUrl: string
    
    userAgreementTxt: string
    
    userAgreementUrl: string
    
    isSupportChildrenPrivacy: boolean
    
    childrenPrivacyTxt: string
    
    childrenPrivacyUrl: string
    
    isSupportThirdPartyPrivacy: boolean
    
    thirdPartyPrivacyTxt: string
    
    thirdPartyPrivacyUrl: string
    
    agreePrivacyPolicy: string
    
    disAgreePrivacyPolicy: string
  }

  export type IconfontInfoBean = {
    
    nameMap: string
  }

  export enum OfferType {
    
    introductory = "introductory",

    
    promotional = "promotional",

    
    winBack = "winBack",

    
    unknown = "unknown",
  }

  export type PaymentParam = {
    
    orderID: string
    
    productID: string
    
    preFlowCode: string
    
    subscription?: number
    
    billing_mode?: number
    
    previous_sku?: string
    
    offer?: OfferParam
    
    offerToken?: string
  }

  export type PaymentResponse = {
    
    orderID?: string
    
    token?: string
    
    products?: string
    
    paymentType?: number
  }

  export type TypeResponse = {
    
    data: number
  }

  export type ProductInfosParam = {
    
    productIds: string[]
    
    ignoreIneligibleOffer: boolean
  }

  export type ProductInfosResult = {
    
    result: any
  }

  export enum PeriodUnit {
    
    day = "day",

    
    week = "week",

    
    month = "month",

    
    year = "year",

    
    unknown = "unknown",
  }

  export enum PaymentMode {
    
    payUpFront = "payUpFront",

    
    payAsYouGo = "payAsYouGo",

    
    freeTrial = "freeTrial",

    
    unknown = "unknown",
  }

  export type ProductOffer = {
    
    offerId?: string
    
    type?: OfferType
    
    price: number
    
    displayPrice: string
    
    period: string
    
    periodUnit?: PeriodUnit
    
    periodValue: number
    
    periodCount: number
    
    paymentMode?: PaymentMode
    
    eligible: boolean
  }

  export type UploadParams = {
    
    filePath: string
    
    bizType: string
    
    contentType?: string
    
    delayTime?: number
    
    pollMaxCount?: number
  }

  export type UploadResponse = {
    
    result: string
  }

  export type VideoUploadParams = {
    
    filePath: string
    
    bizType: string
    
    contentType?: string
  }

  export type RequestModel = {
    
    activityType?: any
    
    activityId: string
    
    data: any
  }

  export type DebugCodes = {
    
    codes: string[]
  }

  export type LocalConstants = {
    
    langKey: string
    
    langContent: {}
  }

  export type LangKeyResult = {
    
    langKey: string
  }

  export type LangContentResult = {
    
    langContent: {}
  }

  export type ManagerContext_1OZBg0 = {
    
    managerId: number
    
    tag: string
  }

  export type ManagerReqContext = {
    
    managerId: number
    
    message: string
  }

  export type ConnectBean = {
    
    taskId: string
    
    host: string
    
    port: number
    
    userName?: string
    
    password?: string
    
    clientId: string
    
    ssl: boolean
  }

  export type ClientBean = {
    
    taskId: string
  }

  export type SubscribeBean = {
    
    taskId: string
    
    topic: string
  }

  export type PublishBean = {
    
    taskId: string
    
    topic: string
    
    message: string
  }

  export type NGRequestBean = {
    
    rawKey: string
  }

  export type NGResponseBean = {
    
    rawData: string
  }

  export type CustomerServiceRes = {
    url: string
  }

  export type PanelBean = {
    
    deviceId: string
    
    uiId: string
    
    panelUiInfoBean?: PanelUiInfoBean
    
    initialProps?: any
  }

  export type PanelParams = {
    
    deviceId: string
    
    extraInfo?: PanelExtraParams
    
    initialProps?: any
  }

  export type BackToPanelParams = {
    
    deviceId: string
    
    extraInfo?: PanelExtraParams
    
    initialProps?: any
    
    removeUIInfo?: boolean
  }

  export type PreloadPanelParams = {
    
    deviceId: string
    
    extraInfo?: PanelExtraParams
  }

  export type WebViewBean = {
    
    url: string
    
    title?: string
  }

  export type SettingPageBean = {
    
    scope: string
    
    requestCode?: number
  }

  export type EventEmitChannelParams = {
    
    eventName: string
    
    event?: {}
  }

  export type EventChannelParams = {
    
    eventId: string
    
    eventName: string
  }

  export type EventOffChannelParams = {
    
    eventId: string
  }

  export type ActivityResultBean = {
    
    resultCode: number
    
    data?: any
  }

  export type CanOpenThirdAppBean = {
    isCanOpen?: boolean
  }

  export type OpenDefaultBrowserUrlBean = {
    
    url: string
  }

  export type AgentEnableBean = {
    
    enableFloat?: boolean
    
    enableDrop?: boolean
  }

  export type PricePhase = {
    
    price: string
    
    priceCode: string
    
    priceAmountMicros: number
    
    billingPeriod: string
    
    recurrenceMode: number
    
    billingCycleCount: number
  }

  export type SubscriptionOfferDetail = {
    
    basePlanId: string
    
    offerId: string
    
    offerToken: string
    
    offerTags: string[]
    
    pricingPhases: PricePhase[]
  }

  export type PayInfoBean = {
    
    iapType?: number
    
    googleIapEnableUserChoice?: boolean
  }

  export type iapPayReadyReq = {
    
    subscription: number
  }

  export type iapPayReadyResp = {
    
    result: boolean
  }

  export type payReq = {
    
    order_id: string
    
    product_id: string
    
    subscription?: number
    
    billing_mode?: number
    
    previous_sku?: string
    
    offerToken?: string
  }

  export type OrderReq = {
    
    order_id: string
  }

  export type ProductQueryReq = {
    
    productList: ProductSub[]
  }

  export type ProductQueryResp = {
    
    productSubsMap?: any
    
    productInAppMap?: any
  }

  export type Object = {}

  export type RouterBean = {
    
    url: string
  }

  export type RouteUsageResult = {
    
    result: boolean
  }

  export type DeviceDetailBean = {
    
    deviceId: string
    
    groupId?: string
  }

  export type AlarmBean = {
    
    deviceId: string
    
    groupId?: string
    
    category?: string
    
    repeat?: number
    
    timerConfig?: TimeConfig
    
    data: {}[]
    
    enableFilter?: boolean
  }

  export type ShareInformationBean = {
    
    type?: ShareInfoType
    
    title: string
    
    message: string
    
    contentType?: ShareInfoContentType
    
    recipients?: string[]
    
    imagePath?: string
    
    filePath?: string
    
    webPageUrl?: string
    
    miniProgramInfo?: MiniProgramInfo
  }

  export type ShareChannelResponse = {
    
    shareChannelList: string[]
  }

  export type SharePanelParams = {
    
    contentType: number
  }

  export type SharePanelResponse = {
    
    platformType: string
    
    installed: boolean
  }

  export type ShareContentParams = {
    
    platformType: string
    
    localIdentifier: string
    
    contentType: number
  }

  export type ShareContentResponse = {
    
    code: number
    
    msg: string
  }

  export type SiriEnabledResponse = {
    
    isSupported: boolean
  }

  export type ShortcutAssociatedParams = {
    
    sceneId: string
    
    name?: string
  }

  export type ShortcutAssociatedResponse = {
    
    isAssociated: boolean
  }

  export type ShortcutParams = {
    
    type: number
    
    sceneId: string
    
    name: string
    
    iconUrl?: string
  }

  export type ShortcutOperationResponse = {
    
    operationStep: number
    
    operationStatus: boolean
  }

  export type UserInfoResult = {
    
    nickName: string
    
    avatarUrl: string
    
    phoneCode: string
    
    regionCode: string
    
    isTemporaryUser: boolean
    
    timezoneId: string
    
    regFrom: number
    
    tempUnit: number
  }

  export type DiyHomeStatusParam = {
    
    isOn: boolean
  }

  export type ChangeDiyHomeResponse = {
    
    isSuccess: boolean
  }

  export type SupportUnreadReq = {
    
    messageCenterUnread: boolean
    
    faqUnread: boolean
    
    feedbackUnread: boolean
    
    customerServiceUnread: boolean
  }

  export type ImageResizeBean = {
    
    aspectFitWidth: number
    
    aspectFitHeight: number
    
    maxFileSize?: number
    
    path: string
  }

  export type ImageResizeResultBean = {
    
    path: string
  }

  export type ImageRotateBean = {
    
    path: string
    
    orientation: number
  }

  export type ImageEncryptBean = {
    
    url: string
    
    encryptKey: string
    
    orientation: number
  }

  export type ScreenShotResultBean = {
    
    path: string
  }

  export type VideoToGifBean = {
    
    videoFilePath: string
    
    width: number
    
    height: number
    
    frameRate: number
    
    startTime: number
    
    durationTime: number
  }

  export type VideoToGifResultBean = {
    
    path: string
  }

  export type GifToImagesBean = {
    
    gifFilePath: string
    
    quality: number
  }

  export type GifToImagesResultBean = {
    
    path: string
    
    imageNameList: string[]
    
    frameTime: number
  }

  export type CompressImageToTargetSizeBean = {
    
    fileList?: string[]
    
    dstWidth: number
    
    dstHeight: number
    
    format?: number
    
    imageSize?: number
  }

  export type CompressImageToTargetCb = {
    
    fileList?: string[]
  }

  export type WechatSupport = {
    
    isSupport: boolean
  }

  export type MiniApp = {
    
    miniAppId: string
    
    path: string
    
    miniProgramType: number
  }

  export type Result = {
    
    result: boolean
  }

  export type Call = {
    
    targetId: string
    
    timeout: number
    
    extra: any
  }

  
  interface AsrListenerManager {
    
    getAsrActive(params: {
      success?: (params: {
        
        isActive: boolean
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

    
    stopDetect(params: {
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

    
    startDetect(params: {
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

    
    onDetect(
      listener: (params: {
        
        state: number
        
        text: string
        
        errorCode: number
      }) => void
    ): void

    
    offDetect(
      listener: (params: {
        
        state: number
        
        text: string
        
        errorCode: number
      }) => void
    ): void
  }
  
  export function getAsrListenerManager(params: {
    
    homeId: string
    
    sampleRate: number
    
    channels: number
    
    codec: string
    
    options: string
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
  }): AsrListenerManager

  
  interface LogManager {
    
    log(params: {
      
      message: string
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

    
    error(params: {
      
      message: string
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

    
    feedback(params: {
      
      message: string
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

    
    debug(params: {
      
      message: string
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
  
  export function getLogManager(params: {
    
    tag: string
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
  }): LogManager

  
  interface MQTTClientTask {
    
    connect(params: {
      
      host: string
      
      port: number
      
      userName?: string
      
      password?: string
      
      clientId: string
      
      ssl: boolean
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

    
    disconnect(params: {
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

    
    subscribe(params: {
      
      topic: string
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

    
    unsubscribe(params: {
      
      topic: string
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

    
    publish(params: {
      
      topic: string
      
      message: string
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

    
    onMessage(
      listener: (params: {
        
        topic: string
        
        message: string
      }) => void
    ): void

    
    offMessage(
      listener: (params: {
        
        topic: string
        
        message: string
      }) => void
    ): void

    
    onStateChange(
      listener: (params: {
        
        state: number
      }) => void
    ): void

    
    offStateChange(
      listener: (params: {
        
        state: number
      }) => void
    ): void
  }
  
  export function createMQTTClient(params?: {
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
  }): MQTTClientTask

  
  interface EventChannelManager {
    
    unRegisterChannel(params: {
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
  
  export function registerChannel(params: {
    
    eventName: string
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
  }): EventChannelManager
}
