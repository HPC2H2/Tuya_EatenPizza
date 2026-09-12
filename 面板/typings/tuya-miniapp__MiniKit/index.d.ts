
declare namespace ty {
  
  export function getBackgroundFetchData(params?: {
    
    fetchType?: string
    
    fetchApiKeys?: string[]
    success?: (params: {
      
      fetchedData: any
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

  
  export function registerBackgroundFetchData(params: {
    
    fetchType?: string
    
    apiKey: string
    
    registerId: string
    success?: (params: {
      
      fetchedData: {}
      
      timeStamp: number
      
      registerId: string
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

  
  export function nativeDisabled(params: {
    
    nativeDisabled: boolean
    
    pageId: string
    success?: (params: string) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function nativeInovke(params: {
    
    type?: number
    
    apiName: string
    
    id: string
    
    pageId: string
    
    params: any
    success?: (params: {}) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getPermissionConfig(params?: {
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

  
  export function getPermissionConfigSync(): {
    
    result: any
  }

  
  export function openSetting(params?: {
    success?: (params: {
      
      scope: any
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

  
  export function changeDebugMode(params: {
    
    isEnable: boolean
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

  
  export function openHelpCenter(params?: {
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

  
  export function showTabBarRedDot(params: {
    
    index: number
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

  
  export function showTabBar(params: {
    
    animation: boolean
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

  
  export function setTabBarStyle(params: {
    
    color: string
    
    selectedColor: string
    
    backgroundColor: string
    
    borderStyle: string
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

  
  export function setTabBarItem(params: {
    
    index: number
    
    text: string
    
    iconPath: string
    
    selectedIconPath: string
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

  
  export function setTabBarBadge(params: {
    
    index: number
    
    text: string
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

  
  export function removeTabBarBadge(params: {
    
    index: number
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

  
  export function hideTabBarRedDot(params: {
    
    index: number
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

  
  export function hideTabBar(params: {
    
    animation: boolean
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

  
  export function apiRequestByHighway(params: {
    
    api: string
    
    data?: any
    
    method?: HighwayMethod
    
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

  
  export function navigateBackMiniProgram(params?: {
    
    extraData?: any
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

  
  export function exitMiniProgram(params?: {
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

  
  export function getLaunchOptions(params?: {
    success?: (params: {
      
      path: string
      
      scene?: MiniAppScene
      
      query: any
      
      referrerInfo: ReferrerInfo
      
      apiCategory?: string
      
      extraQuery?: any
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

  
  export function getLaunchOptionsSync(): {
    
    path: string
    
    scene?: MiniAppScene
    
    query: any
    
    referrerInfo: ReferrerInfo
    
    apiCategory?: string
    
    extraQuery?: any
  }

  
  export function getEnterOptions(params?: {
    success?: (params: {
      
      path: string
      
      scene?: MiniAppScene
      
      query: any
      
      referrerInfo: ReferrerInfo
      
      apiCategory?: string
      
      extraQuery?: any
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

  
  export function getEnterOptionsSync(): {
    
    path: string
    
    scene?: MiniAppScene
    
    query: any
    
    referrerInfo: ReferrerInfo
    
    apiCategory?: string
    
    extraQuery?: any
  }

  
  export function setBoardTitle(params: {
    
    title: string
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

  
  export function setBoardTitleSync(boardBean?: BoardBean): null

  
  export function setBoardIcon(params: {
    
    icon: string
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

  
  export function setBoardIconSync(boardIconBean?: BoardIconBean): null

  
  export function showBoardTitleIcon(params?: {
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

  
  export function showBoardTitleIconSync(): null

  
  export function hideBoardTitleIcon(params?: {
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

  
  export function hideBoardTitleIconSync(): null

  
  export function getMenuButtonBoundingClientRect(params?: {
    success?: (params: {
      
      width: number
      
      height: number
      
      top: number
      
      right: number
      
      bottom: number
      
      left: number
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

  
  export function getMenuButtonBoundingClientRectSync(): {
    
    width: number
    
    height: number
    
    top: number
    
    right: number
    
    bottom: number
    
    left: number
  }

  
  export function preDownloadMiniApp(params: {
    
    miniAppId: string
    
    miniAppVersion?: string
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

  
  export function login(params?: {
    
    timeout?: number
    success?: (params: {
      
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

  
  export function setPageOrientation(params: {
    
    pageOrientation: string
    
    reverse?: boolean
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

  
  export function hideMenuButton(params?: {
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

  
  export function showMenuButton(params?: {
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

  
  export function showStatusBar(params?: {
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

  
  export function hideStatusBar(params?: {
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

  
  export function exitMiniWidget(params?: {
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

  
  export function canOpenURL(params: {
    
    url: string
    success?: (params: {
      
      isCanOpen?: boolean
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

  
  export function canOpenURLSync(openURLBean?: OpenURLBean): {
    
    isCanOpen?: boolean
  }

  
  export function openURL(params: {
    
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

  
  export function getAccountInfo(params?: {
    success?: (params: {
      
      miniProgram: MiniProgramAccountInfo
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

  
  export function getAccountInfoSync(): {
    
    miniProgram: MiniProgramAccountInfo
  }

  
  export function getMiniAppConfig(params?: {
    success?: (params: {
      
      config: {}
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

  
  export function getMiniAppConfigSync(): {
    
    config: {}
  }

  
  export function showBoard(params?: {
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

  
  export function resetBoardMenus(params: {
    
    effectPage?: EffectPage
    
    menus: BoardItemBean[]
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

  
  export function resetSystemMenus(params: {
    
    effectPage?: EffectPage
    
    menus: BoardItemBean[]
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

  
  export function showRedBot(params: {
    
    effectPage?: EffectPage
    
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

  
  export function hiddenRedBot(params: {
    
    effectPage?: EffectPage
    
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

  
  export function hideRenderLoading(params?: {
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

  
  export function setBackgroundImage(params: {
    
    imageUrl: string
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

  
  export function setBackgroundColor(params: {
    
    color: string
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

  
  export function reloadMiniProgram(params?: {
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

  
  export function sendNotificationToNative(params: {
    
    eventId: string
    
    name: string
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

  
  export function showNavigationBarLoading(params?: {
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

  
  export function setNavigationBarTitle(params: {
    
    title: string
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

  
  export function setNavigationBarColor(params: {
    
    frontColor: string
    
    backgroundColor: string
    
    animation: NavigationBarColorAnimationInfo
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

  
  export function hideNavigationBarLoading(params?: {
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

  
  export function hideHomeButton(params?: {
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

  
  export function navigateTo(params: {
    
    url: string
    
    type?: string
    
    topMargin?: number
    
    topMarginPercent?: number
    
    animationType?: string
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

  
  export function navigateBack(params?: {
    
    delta?: number
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

  
  export function redirectTo(params: {
    
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

  
  export function reLaunch(params: {
    
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

  
  export function switchTab(params: {
    
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

  
  export function extApiCanIUse(params: {
    
    api: string
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

  
  export function extApiCanIUseSync(caniuseBean?: CanIUseBean): {
    
    result: boolean
  }

  
  export function extApiInvoke(params: {
    
    api: string
    
    params?: any
    success?: (params: {
      
      data?: {}
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

  
  export function extApiInvokeSync(extApiBean?: ExtApiBean): {
    
    data?: {}
  }

  
  export function receiveApiRequestCache(params: {
    
    requestId: string
    success?: (params: {
      
      thing_json_?: {}
      
      data: string
      
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

  
  export function removeApiRequestCache(params: {
    
    apiList: RemoveApiRequestCacheBean[]
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

  
  export function startPullDownRefresh(params?: {
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

  
  export function stopPullDownRefresh(params?: {
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

  
  export function widgetRemove(params?: {
    
    mode?: WidgetMode
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

  
  export function onNativeEvent(
    listener: (params: NativeUploadData) => void
  ): void

  
  export function offNativeEvent(
    listener: (params: NativeUploadData) => void
  ): void

  
  export function onExperienceRateEnd(
    listener: (params: {
      
      source: string
    }) => void
  ): void

  
  export function offExperienceRateEnd(
    listener: (params: {
      
      source: string
    }) => void
  ): void

  export type LogManagerCode = {
    
    code: string
    
    module: string
    
    msg?: string
    
    isEvent?: boolean
  }

  export type Object = {}

  export enum HighwayMethod {
    
    OPTIONS = "OPTIONS",

    
    GET = "GET",

    
    HEAD = "HEAD",

    
    POST = "POST",

    
    PUT = "PUT",

    
    DELETE = "DELETE",

    
    TRACE = "TRACE",

    
    CONNECT = "CONNECT",
  }

  export type ApiRequestCacheBean = {
    
    timeout: number
    
    policy?: CachePolicy
  }

  export enum MiniAppScene {
    
    DEFAULT = 1000,

    
    RECENTLY_USED = 1001,

    
    URL_MAPPING = 1002,
  }

  export type ReferrerInfo = {
    
    appId: string
    
    extraData: any
  }

  export type BoardBean = {
    
    title: string
  }

  export type BoardIconBean = {
    
    icon: string
  }

  export type OpenURLBean = {
    
    url: string
  }

  export type MiniProgramAccountInfo = {
    
    appId: string
    
    envVersion: string
    
    version: string
    
    appName: string
    
    appIcon: string
    
    providerType: string
  }

  export enum EffectPage {
    
    current = "current",

    
    all = "all",
  }

  export type BoardItemBean = {
    
    key: string
    
    iconPath: string
    
    text: string
    
    isShow?: boolean
  }

  export type NavigationBarColorAnimationInfo = {
    
    duration?: number
    
    timingFunc?: string
  }

  export type CanIUseBean = {
    
    api: string
  }

  export type ExtApiBean = {
    
    api: string
    
    params?: any
  }

  export type RemoveApiRequestCacheBean = {
    
    apiName: string
    
    version: string
  }

  export enum WidgetMode {
    
    ONCE = "ONCE",

    
    FOREVER = "FOREVER",
  }

  export type NativeUploadData = {
    
    eventName: string
    
    id: string
    
    pageId: string
    
    data: any
  }

  export type NativeDisabledParam = {
    
    nativeDisabled: boolean
    
    pageId: string
  }

  export type NativeParams = {
    
    type?: number
    
    apiName: string
    
    id: string
    
    pageId: string
    
    params: any
  }

  export type PermissionConfig = {
    
    result: any
  }

  export type AuthSetting = {
    
    scope: any
  }

  export type DebugModeSetting = {
    
    isEnable: boolean
  }

  export type TabBarIndexBean = {
    
    index: number
  }

  export type OperateTabBarParams = {
    
    animation: boolean
  }

  export type TabBarStyleParams = {
    
    color: string
    
    selectedColor: string
    
    backgroundColor: string
    
    borderStyle: string
  }

  export type TabBarItemParams = {
    
    index: number
    
    text: string
    
    iconPath: string
    
    selectedIconPath: string
  }

  export type TabBarBadgeParams = {
    
    index: number
    
    text: string
  }

  export enum CachePolicy {
    
    NETWORK_ONLY = "NETWORK_ONLY",

    
    CACHE_ELSE_NETWORK = "CACHE_ELSE_NETWORK",

    
    CACHE_THEN_NETWORK = "CACHE_THEN_NETWORK",
  }

  export type HighwayRequestBean = {
    
    api: string
    
    data?: any
    
    method?: HighwayMethod
    
    requestId?: string
    
    cache?: ApiRequestCacheBean
  }

  export type HighwayRequestResponse = {
    
    thing_json_?: {}
    
    data: string
  }

  export type MiniappLogContext = {
    
    logManagerId: number
    
    os: string
    
    publicParam?: any
  }

  export type LogManagerReqContext = {
    
    logManagerId: number
    
    code: LogManagerCode
    
    desc?: string
    
    params?: Object
  }

  export type BackMiniProgramBean = {
    
    extraData?: any
  }

  export type MiniAppOptions = {
    
    path: string
    
    scene?: MiniAppScene
    
    query: any
    
    referrerInfo: ReferrerInfo
    
    apiCategory?: string
    
    extraQuery?: any
  }

  export type CapsuleButtonRectBean = {
    
    width: number
    
    height: number
    
    top: number
    
    right: number
    
    bottom: number
    
    left: number
  }

  export type PreDownloadMiniAppParams = {
    
    miniAppId: string
    
    miniAppVersion?: string
  }

  export type LoginBean = {
    
    timeout?: number
  }

  export type LoginResult = {
    
    code: string
  }

  export type OrientationBean = {
    
    pageOrientation: string
    
    reverse?: boolean
  }

  export type CanOpenURLResultBean = {
    
    isCanOpen?: boolean
  }

  export type AccountInfoResp = {
    
    miniProgram: MiniProgramAccountInfo
  }

  export type MiniAppConfigResp = {
    
    config: {}
  }

  export type BoardMenusBean = {
    
    effectPage?: EffectPage
    
    menus: BoardItemBean[]
  }

  export type RedBodReq = {
    
    effectPage?: EffectPage
    
    key: string
  }

  export type BackgroundImageBean = {
    
    imageUrl: string
  }

  export type BackgroundColorBean = {
    
    color: string
  }

  export type CreateReq = {
    
    managerId: string
    
    name: string
  }

  export type ObserverReq = {
    
    managerId: string
  }

  export type SendNotificationToNativeParams = {
    
    eventId: string
    
    name: string
  }

  export type NavigationBarLoadingParams = {
    
    title: string
  }

  export type NavigationBarColorParams = {
    
    frontColor: string
    
    backgroundColor: string
    
    animation: NavigationBarColorAnimationInfo
  }

  export type RouteBean = {
    
    url: string
    
    type?: string
    
    topMargin?: number
    
    topMarginPercent?: number
    
    animationType?: string
  }

  export type BackRouteBean = {
    
    delta?: number
  }

  export type RedirectBean = {
    
    url: string
  }

  export type ReLaunchBean = {
    
    url: string
  }

  export type SwitchTabBean = {
    
    url: string
  }

  export type SuccessResult = {
    
    result: boolean
  }

  export type InvokeResult = {
    
    data?: {}
  }

  export type ReceiveApiRequestCacheReq = {
    
    requestId: string
  }

  export type ReceiveApiRequestCacheRes = {
    
    thing_json_?: {}
    
    data: string
    
    result: {}
    
    api: string
  }

  export type RemoveApiRequestCacheReq = {
    
    apiList: RemoveApiRequestCacheBean[]
  }

  export type MiniWidgetRemoveBean = {
    
    mode?: WidgetMode
  }

  
  interface MiniLogManager {
    
    logInfo(params: {
      
      code: LogManagerCode
      
      desc?: string
      
      params?: Object
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

    
    logError(params: {
      
      code: LogManagerCode
      
      desc?: string
      
      params?: Object
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

    
    logWarn(params: {
      
      code: LogManagerCode
      
      desc?: string
      
      params?: Object
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
  
  export function getMiniLogManager(params: {
    
    os: string
    
    publicParam?: any
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
  }): MiniLogManager

  
  interface NativeEventManager {
    
    offerListener(params: {
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

    
    onListener(
      listener: (params: {
        
        data: {}
      }) => void
    ): void

    
    offListener(
      listener: (params: {
        
        data: {}
      }) => void
    ): void
  }
  
  export function createNativeEventManager(params: {
    
    name: string
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
  }): NativeEventManager
}
