
declare namespace ty.map {
  
  export function isSupport(params?: {
    
    businessType?: string
    
    businessData?: any
    success?: (params: {
      
      isSupport?: boolean
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

  
  export function isReachLimit(params?: {
    
    businessType?: string
    
    businessData?: any
    success?: (params: {
      
      reachLimit?: boolean
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

  
  export function openMap(params: {
    
    businessInfo?: GeofenceBusinessInfo
    
    info: GeofenceInfo
    success?: (params: {
      
      isCancel?: boolean
      
      geofenceInfo: GeofenceInfo
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

  
  export function register(params: {
    
    businessInfo?: GeofenceBusinessInfo
    
    info: GeofenceInfo
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unregister(params: {
    
    businessInfo?: GeofenceBusinessInfo
    
    info: GeofenceInfo
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function changeGeofenceStatus(params: {
    
    businessInfo?: GeofenceBusinessInfo
    
    info: GeofenceInfo
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unregisterGeofence(params?: {
    
    geoTitle?: string
    
    longitude?: number
    
    latitude?: number
    
    radius?: number
    
    geofenceId?: string
    
    type?: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function isGeofenceReachLimit(params?: {
    success?: (params: {
      
      reachLimit?: boolean
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

  
  export function updateGeofence(params: {
    
    registerGeoFence: GeofenceInfo[]
    
    unregisterGeoFence: GeofenceInfo[]
    success?: (params: {
      
      success?: boolean
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

  
  export function registerGeofence(params?: {
    
    geoTitle?: string
    
    longitude?: number
    
    latitude?: number
    
    radius?: number
    
    geofenceId?: string
    
    type?: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openGeofenceMap(params?: {
    
    geoTitle?: string
    
    longitude?: number
    
    latitude?: number
    
    radius?: number
    
    geofenceId?: string
    
    type?: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getLocation(params: {
    
    type: string
    
    altitude: boolean
    
    isHighAccuracy: boolean
    
    highAccuracyExpireTime: number
    success?: (params: {
      
      latitude: number
      
      longitude: number
      
      speed: number
      
      accuracy: number
      
      altitude: number
      
      verticalAccuracy: number
      
      horizontalAccuracy: number
      
      cityName: string
      
      streetName: string
      
      address: string
      
      formatAddress: string
      
      countryCode: string
      
      postalCode: string
      
      countryName: string
      
      province: string
      
      district: string
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

  
  export function chooseLocation(params?: {
    
    latitude?: number
    
    longitude?: number
    success?: (params: {
      
      name: string
      
      address: string
      
      latitude: number
      
      longitude: number
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

  
  export function getMapList(params?: {
    success?: (params: {
      
      maps: string[]
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

  
  export function openMapAppLocation(params: {
    
    latitude: number
    
    longitude: number
    
    name: string
    
    address: string
    
    mapType: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function transformLocation(params: {
    
    type: string
    
    latitude: number
    
    longitude: number
    success?: (params: {
      
      latitude: number
      
      longitude: number
      
      cityName: string
      
      streetName: string
      
      address: string
      
      formatAddress: string
      
      countryCode: string
      
      postalCode: string
      
      countryName: string
      
      province: string
      
      district: string
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

  
  export function reverseGeocodeLocation(params: {
    
    longitude: number
    
    latitude: number
    
    requestType?: string
    
    responseType?: string
    success?: (params: {
      
      latitude: number
      
      longitude: number
      
      cityName: string
      
      streetName: string
      
      address: string
      
      formatAddress: string
      
      countryCode: string
      
      postalCode: string
      
      countryName: string
      
      province: string
      
      district: string
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

  
  export function coordinateWGS84ToGCJ02(params: {
    
    longitude: number
    
    latitude: number
    success?: (params: {
      
      longitude: number
      
      latitude: number
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

  
  export function coordinateGCJ02ToWGS84(params: {
    
    longitude: number
    
    latitude: number
    success?: (params: {
      
      longitude: number
      
      latitude: number
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

  
  export function getMapType(params?: {
    success?: (params: {
      
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

  
  export function searchAddressList(params: {
    
    type: number
    
    keyword: string
    
    city?: string
    
    countryCode: string
    
    region: CoordinateRegion
    success?: (params: AddressInfo[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getAddressInfo(params: {
    
    poiID: string
    
    name: string
    
    address: string
    
    coordinate2D: LocationCoordinate2D
    success?: (params: {
      
      poiID: string
      
      name: string
      
      address: string
      
      coordinate2D: LocationCoordinate2D
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

  export type GeofenceBusinessInfo = {
    
    businessType?: string
    
    businessData?: any
  }

  export type GeofenceInfo = {
    
    geoTitle?: string
    
    longitude?: number
    
    latitude?: number
    
    radius?: number
    
    geofenceId?: string
    
    type?: number
  }

  export type CoordinateRegion = {}

  export type AddressInfo = {
    
    poiID: string
    
    name: string
    
    address: string
    
    coordinate2D: LocationCoordinate2D
  }

  export type LocationCoordinate2D = {}

  export type IsGeofenceSupportResponse = {
    
    isSupport?: boolean
  }

  export type IsGeofenceReachLimitResponse = {
    
    reachLimit?: boolean
  }

  export type Geofence = {
    
    businessInfo?: GeofenceBusinessInfo
    
    info: GeofenceInfo
  }

  export type OpenMapResponse = {
    
    isCancel?: boolean
    
    geofenceInfo: GeofenceInfo
  }

  export type UpdateGeofenceParams = {
    
    registerGeoFence: GeofenceInfo[]
    
    unregisterGeoFence: GeofenceInfo[]
  }

  export type UpdateGeofenceResponse = {
    
    success?: boolean
  }

  export type LocationBean = {
    
    type: string
    
    altitude: boolean
    
    isHighAccuracy: boolean
    
    highAccuracyExpireTime: number
  }

  export type LocationCB = {
    
    latitude: number
    
    longitude: number
    
    speed: number
    
    accuracy: number
    
    altitude: number
    
    verticalAccuracy: number
    
    horizontalAccuracy: number
    
    cityName: string
    
    streetName: string
    
    address: string
    
    formatAddress: string
    
    countryCode: string
    
    postalCode: string
    
    countryName: string
    
    province: string
    
    district: string
  }

  export type ChooseBean = {
    
    latitude?: number
    
    longitude?: number
  }

  export type ChooseCB = {
    
    name: string
    
    address: string
    
    latitude: number
    
    longitude: number
  }

  export type MapsBean = {
    
    maps: string[]
  }

  export type OpenMapAppBean = {
    
    latitude: number
    
    longitude: number
    
    name: string
    
    address: string
    
    mapType: string
  }

  export type TransformLocationReq = {
    
    type: string
    
    latitude: number
    
    longitude: number
  }

  export type TransformLocationResp = {
    
    latitude: number
    
    longitude: number
    
    cityName: string
    
    streetName: string
    
    address: string
    
    formatAddress: string
    
    countryCode: string
    
    postalCode: string
    
    countryName: string
    
    province: string
    
    district: string
  }

  export type ReverseGeocodeLocationReq = {
    
    longitude: number
    
    latitude: number
    
    requestType?: string
    
    responseType?: string
  }

  export type Coordinate = {
    
    longitude: number
    
    latitude: number
  }

  export type MapTypeBean = {
    
    type: string
  }

  export type AddressRequestParams = {
    
    type: number
    
    keyword: string
    
    city?: string
    
    countryCode: string
    
    region: CoordinateRegion
  }
}
