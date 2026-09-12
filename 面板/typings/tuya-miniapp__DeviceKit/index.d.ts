
declare namespace ty.device {
  
  export function checkSupportMultiControl(params: {
    
    deviceId: string
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

  
  export function checkSupportMultiControlSync(
    params?: CheckSupportMultiControlParams
  ): {
    
    result: boolean
  }

  
  export function getMultiControlDp(params: {
    
    deviceId: string
    success?: (params: {
      
      infos: MultiControlDpInfo[]
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

  
  export function getMultiControlGroup(params: {
    
    deviceId: string
    
    dpId: number
    success?: (params: {
      
      info: MultiControlGroupInfo
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

  
  export function updateMultiControlGroupStatus(params: {
    
    multiControlGroupId: number
    
    enable: boolean
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

  
  export function getMultiControlDevices(params: {
    
    deviceId: string
    
    spaceId: number
    success?: (params: {
      
      devices: MultiControlDevice[]
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

  
  export function getAvailableMultiControlDp(params: {
    
    deviceId: string
    
    targetDeviceId: string
    
    targetDpId: number
    
    spaceId: number
    success?: (params: {
      
      info: MultiControlDeviceDpsInfo
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

  
  export function updateMultiControlGroup(params: {
    
    multiControlGroupId: number
    
    name: string
    
    spaceId: number
    
    deviceDps: UpdateMultiControlDPInfo[]
    success?: (params: {
      
      result: MultiControlGroup
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

  
  export function checkSupportDoubleControl(params: {
    
    deviceId: string
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

  
  export function checkSupportDoubleControlSync(
    params?: CheckSupportDoubleControlParams
  ): {
    
    result: boolean
  }

  
  export function getDoubleControlGroup(params: {
    
    deviceId: string
    
    spaceId: number
    success?: (params: {
      
      info: DoubleControlGroup
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

  
  export function removeDoubleControlSlaveDevice(params: {
    
    deviceId: string
    
    spaceId: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getDoubleControlAvailableSlaveDevices(params: {
    
    deviceId: string
    
    spaceId: number
    success?: (params: {
      
      devices: DoubleControlDevice[]
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

  
  export function updateDoubleControl(params: {
    
    mainDeviceId: string
    
    slaveDeviceIds: string[]
    
    spaceId: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getDoubleControlDPRelation(params: {
    
    mainDeviceId: string
    
    slaveDeviceId: string
    
    spaceId: number
    success?: (params: {
      
      relation: DoubleControlDPRelation
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

  
  export function getLocalizedDpInfo(params: {
    
    deviceId: string
    
    spaceId: number
    success?: (params: {
      
      infos: DoubleControlDPInfo[]
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

  
  export function updateDoubleControlDpRelation(params: {
    
    mainDeviceId: string
    
    slaveDeviceId: string
    
    relations: any
    
    spaceId: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unregisterLeaveBeaconFenceEvent(params: {
    
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

  
  export function registerLeaveBeaconFenceEvent(params: {
    
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

  
  export function writeBeaconFenceConfig(params: {
    
    deviceId: string
    
    beaconFenceRssi: number
    
    isOpenEventWhenApproachingBeaconFence: boolean
    
    isOpenEventWhenLeaveBeaconFence: boolean
    
    isOpenNotifyWhenLeaveBeaconFence: boolean
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function readBeaconFenceConfig(params: {
    
    deviceId: string
    success?: (params: {
      
      deviceId: string
      
      beaconFenceRssi: number
      
      isOpenEventWhenApproachingBeaconFence: boolean
      
      isOpenEventWhenLeaveBeaconFence: boolean
      
      isOpenNotifyWhenLeaveBeaconFence: boolean
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

  
  export function disconnectBTBond(params: {
    
    mac: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function connectBTBond(params: {
    
    mac: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function cancelBLEFileTransfer(params: {
    
    deviceId: string
    
    fileId: number
    
    fileIdentifier: string
    
    fileVersion: number
    
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

  
  export function postBLEFileTransfer(params: {
    
    deviceId: string
    
    fileId: number
    
    fileIdentifier: string
    
    fileVersion: number
    
    filePath: string
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

  
  export function getBLEDeviceRSSI(params: {
    
    deviceId: string
    success?: (params: {
      
      signal: number
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

  
  export function subscribeBLEConnectStatus(params: {
    
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

  
  export function unsubscribeBLEConnectStatus(params: {
    
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

  
  export function connectBLEDevice(params: {
    
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

  
  export function directConnectBLEDevice(params: {
    
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

  
  export function disconnectBLEDevice(params: {
    
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

  
  export function getBLEOnlineState(params: {
    
    deviceId: string
    success?: (params: {
      
      isOnline: boolean
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

  
  export function subscribeBLETransparentDataReport(params: {
    
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

  
  export function unsubscribeBLETransparentDataReport(params: {
    
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

  
  export function publishBLETransparentData(params: {
    
    deviceId: string
    
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

  
  export function getEncryptLocalKeyWithData(params: {
    
    deviceId: string
    
    keyDeviceId: string
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

  
  export function postBLEBigDataChannelWithProgress(params: {
    
    deviceId: string
    
    requestParams: any
    success?: (params: {
      
      deviceId: string
      
      resultParams: any
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

  
  export function startBLEMeshLowPowerConnection(params: {
    
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

  
  export function stopBLEMeshLowPowerConnection(params: {
    
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

  
  export function startBLEScanBeacon(params: {
    
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

  
  export function stopBLEScanBeacon(params: {
    
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

  
  export function bluetoothCapabilityOfBLEBeacon(params: {
    
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

  
  export function bluetoothIsPowerOn(params?: {
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

  
  export function startBLEScanBindDevice(params: {
    
    interval: number
    
    scanType: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function startBLEScan(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function startBLEScanSync(): null

  
  export function stopBLEScan(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function stopBLEScanSync(): null

  
  export function bluetoothCapabilityIsSupport(params: {
    
    deviceId: string
    
    capability: number
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

  
  export function getBTDeviceInfo(params: {
    
    deviceId: string
    success?: (params: {
      
      deviceName?: string
      
      isConnected?: boolean
      
      isBond?: boolean
      
      mac?: string
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

  
  export function connectBluetoothDevice(params: {
    
    devId: string
    
    timeoutMillis?: number
    
    souceType?: number
    
    connectType?: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function disconnectBluetoothDevice(params: {
    
    devId: string
    
    connectType?: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function activeDeviceExtendModule(params: {
    
    deviceId: string
    
    ssid?: string
    
    password?: string
    
    activeType: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function updateMeshProxyState(params: {
    
    deviceId: string
    
    isOpen: boolean
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function updateMeshRelayState(params: {
    
    deviceId: string
    
    isOpen: boolean
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function recordBleConnectEvent(params: {
    
    deviceId: string
    
    src: number
    
    actId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function startBLECommRodScanDevice(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function stopBLECommRodScanDevice(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function connectBLECommRodDevice(params: {
    
    deviceInfo: CommRodDeviceModel
    
    machineKey: string
    
    schema: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function disconnectBLECommRodDevice(params: {
    
    deviceId: string
    
    name: string
    
    uuid: string
    
    pid: string
    
    mac: string
    
    isActive: boolean
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function publishBLECommRodDps(params: {
    
    deviceInfo: CommRodDeviceModel
    
    dps: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function publishMeshCustomDataEvent(params: {
    
    meshId: string
    
    nodeId: string
    
    opCode: number
    
    payloadHexString: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function localDeviceEntry(params: {
    
    deviceId: string
    
    groupId: string
    
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

  
  export function localDeviceExit(params: {
    
    deviceId: string
    
    groupId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function startGWActivation(params: {
    
    gateway: Gateway
    
    timeout: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function stopGWActivation(params: {
    
    gwId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openReconnectPage(params: {
    
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

  
  export function startDirectlyConnectedDeviceActivator(params: {
    
    device: Device
    
    timeout: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function stopDirectlyConnectedDeviceActivator(params: {
    
    device: Device
    
    timeout: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openCategoryActivatorPage(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function startDirectlyConnectedSearchDevice(params: {
    
    device: Device
    
    timeout: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function stopDirectlyConnectedSearchDevice(params: {
    
    device: Device
    
    timeout: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getDeviceWifiActivatorStatus(params: {
    
    deviceId: string
    success?: (params: {
      
      wifiActivator: boolean
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

  
  export function startDeviceWifiActivator(params: {
    
    deviceId: string
    success?: (params: {
      
      wifiActivator: boolean
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

  
  export function aes128EncryptedStringWithPassword(params: {
    
    deviceId: string
    
    password: string
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

  
  export function aes128DecryptedStringWithPassword(params: {
    
    deviceId: string
    
    password: string
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

  
  export function yuChannelSaveState(params: {
    
    deviceId: string
    
    state: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function yuChannelSyncSingle(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function yuChannelSyncSingleSync(device?: Device_aQE9du): null

  
  export function yuChannelQueryNodes(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: {
      
      result: string[]
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

  
  export function requestWifiSignal(params: {
    
    deviceId: string
    
    dps?: any
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

  
  export function yuChannelSync(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function yuChannelSyncSync(): null

  
  export function isYuDeviceOnline(params: {
    
    deviceId: string
    
    dps?: any
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

  
  export function isYuDeviceOnlineSync(device?: Device_aQE9du): boolean

  
  export function syncDeviceMeshDps(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function renameDeviceName(params: {
    
    deviceId: string
    
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

  
  export function resetFactory(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function removeDevice(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function registerGateWaySubDeviceListener(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unregisterGateWaySubDeviceListener(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function registerZigbeeGateWaySubDeviceListener(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unregisterZigbeeGateWaySubDeviceListener(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getDeviceOnlineType(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: {
      
      onlineType: number
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

  
  export function getDeviceInfo(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: {
      
      roomName?: string
      
      schema: {}[]
      
      dps: any
      
      attribute: number
      
      baseAttribute: number
      
      capability: number
      
      dpName: any
      
      ability: number
      
      icon: string
      
      devId: string
      
      verSw: string
      
      isShare: boolean
      
      bv: string
      
      uuid: string
      
      panelConfig: any
      
      activeTime: number
      
      devAttribute: number
      
      pcc: string
      
      nodeId: string
      
      parentId?: string
      
      category: string
      
      standSchemaModel?: {}
      
      productId: string
      
      productVer: string
      
      bizAttribute: number
      
      meshId: string
      
      sigmeshId: string
      
      meta: any
      
      isLocalOnline: boolean
      
      isCloudOnline: boolean
      
      isOnline: boolean
      
      name: string
      
      groupId: string
      
      dpCodes: any
      
      devTimezoneId: string
      
      dpsTime: any
      
      latitude: string
      
      longitude: string
      
      ip?: string
      
      isVirtualDevice: boolean
      
      isZigbeeInstallCode: boolean
      
      protocolAttribute: number
      
      connectionStatus: number
      
      mac?: string
      
      bluetoothCapability?: string
      
      isTripartiteMatter: boolean
      
      isGW: boolean
      
      isSupportGroup: boolean
      
      isZigBeeSubDev: boolean
      
      cadv?: string
      
      isSupportOTA: boolean
      
      iconUrl: string
      
      hasWifi: boolean
      
      switchDp: number
      
      switchDps: number[]
      
      wifiEnableState: number
      
      configMetas: any
      
      isMatter: boolean
      
      isSupportLink: boolean
      
      isSupportAppleHomeKit?: boolean
      
      attributeString: string
      
      extModuleType: number
      
      isRelayOpen: boolean
      
      isProxyOpen: boolean
      
      isSupportProxyAndRelay: boolean
      
      yuNetState: number
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

  
  export function getDeviceListByDevIds(params: {
    
    deviceIds: string[]
    success?: (params: {
      
      deviceInfos: DeviceInfo[]
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

  
  export function getProductInfo(params: {
    
    productId: string
    
    productVer?: string
    success?: (params: {
      
      panelConfig: any
      
      schema: string
      
      schemaExt: string
      
      capability: number
      
      attribute: number
      
      productId: string
      
      category: string
      
      categoryCode: string
      
      standard: boolean
      
      pcc: string
      
      vendorInfo: string
      
      quickOpDps: string[]
      
      faultDps: string[]
      
      displayDps: string[]
      
      displayMsgs: any
      
      uiPhase: string
      
      uiId: string
      
      uiVersion: string
      
      ui: string
      
      rnFind: boolean
      
      uiType: string
      
      uiName: string
      
      i18nTime: number
      
      supportGroup: boolean
      
      supportSGroup: boolean
      
      configMetas: any
      
      productVer: string
      
      attributeString: string
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

  
  export function getSubDeviceInfoList(params: {
    
    meshId: string
    success?: (params: DeviceInfo[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function validDeviceOnlineType(params: {
    
    deviceId: string
    
    onlineType: number
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

  
  export function validDeviceOnline(params: {
    
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

  
  export function publishDps(params: {
    
    deviceId: string
    
    dps: any
    
    mode: number
    
    pipelines: number[]
    
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

  
  export function publishCommands(params: {
    
    deviceId: string
    
    dps: any
    
    mode: number
    
    pipelines: number[]
    
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

  
  export function publishDpsWithPipeType(params: {
    
    deviceId: string
    
    dps: any
    
    mode: number
    
    pipelines: number[]
    
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

  
  export function queryDps(params: {
    
    deviceId: string
    
    dpIds: number[]
    
    queryType?: number
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

  
  export function publishMqttMessage(params: {
    
    message: any
    
    deviceId: string
    
    protocol: number
    
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

  
  export function sendMqttMessage(params: {
    
    message: any
    
    deviceId: string
    
    protocol: number
    
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

  
  export function publishLanMessage(params: {
    
    message: string
    
    deviceId: string
    
    protocol: number
    
    options?: any
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

  
  export function publishSocketMessage(params: {
    
    message: any
    
    deviceId: string
    
    type: number
    
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

  
  export function getDeviceProperty(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: {
      
      properties: any
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

  
  export function setDeviceProperty(params: {
    
    deviceId: string
    
    code: string
    
    value: string
    success?: (params: {
      
      deviceId: string
      
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

  
  export function syncDeviceInfo(params: {
    
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

  
  export function subscribeDeviceRemoved(params: {
    
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

  
  export function unSubscribeDeviceRemoved(params: {
    
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

  
  export function registerMQTTDeviceListener(params: {
    
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

  
  export function unregisterMQTTDeviceListener(params: {
    
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

  
  export function registerMQTTProtocolListener(params: {
    
    protocol: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unregisterMQTTProtocolListener(params: {
    
    protocol: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function registerDeviceListListener(params: {
    
    deviceIdList: string[]
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unregisterDeviceListListener(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function registerTopicListListener(params: {
    
    topicList: string[]
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unregisterTopicListListener(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getMqttConnectState(params?: {
    success?: (params: {
      
      connectState: number
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

  
  export function requestAdvancedCapability(params: {
    
    resId: string
    
    dpCodes: string[]
    
    type: string
    
    spaceId: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function dpTranslateAdvancedCapability(params: {
    
    resId: string
    
    dps: OriginalDps[]
    
    type: string
    success?: (params: {
      
      advancedCapability: TranslateAdvancedCapability[]
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

  
  export function wakeUpDevice(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function lowPowerDeviceAwake(params: {
    
    deviceId: string
    
    timeout: number
    success?: (params: {
      
      awakeRsp: number
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

  
  export function queryGatewayReplacementCapabilityDeviceModel(params: {
    
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

  
  export function fetchReplaceableSubDevicesDeviceModel(params: {
    
    deviceId: string
    success?: (params: {
      
      result: string[]
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

  
  export function subDeviceReplace(params: {
    
    defaultSubDeviceId: string
    
    replaceSubDevId: string
    
    deleteOriginal: boolean
    
    timeout: number
    success?: (params: {
      
      jobId: number
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

  
  export function fetchReplacementOutcomeJobModel(params: {
    
    defaultSubDeviceId: string
    
    jobId: string
    success?: (params: {
      
      jobId: number
      
      operatorUid: string
      
      groupId: number
      
      gwId: string
      
      existFaultSubDevGwId: string
      
      faultSubDevId: string
      
      replaceSubDevId: string
      
      type: number
      
      currentStatus: string
      
      result: string
      
      failReason: string
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

  
  export function activateUnauthorizedBtDevice(params: {
    
    productKey: string
    
    btName: string
    
    homeId: number
    
    mac: string
    success?: (params: {
      
      deviceId: string
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

  
  export function registerDeviceServiceListener(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unregisterDeviceServiceListener(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getSupportDeviceService(params: {
    
    deviceId: string
    
    dps?: any
    success?: (params: {
      
      clientServices?: string[]
      
      serverServices?: string[]
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

  
  export function deviceServiceAlignServer(params: {
    
    devId: string
    
    service: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function deviceClientAlignServer(params: {
    
    devId: string
    
    service: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function deviceServiceDiscovery(params: {
    
    devId: string
    
    service: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function deviceServiceConfirm(params: {
    
    serviceInfo: ServiceInfo
    
    permit: boolean
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function deviceServiceCancel(params: {
    
    service: string
    
    client: string
    
    server: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function thirdPartyServiceDiscovery(params: {
    
    devId: string
    
    timeout: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function thirdPartyServiceConfirm(params: {
    
    devId: string
    
    ip: string
    
    port: number
    
    server_name: string
    
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

  
  export function thirdPartyServiceAlign(params: {
    
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

  
  export function thirdPartyServiceCancel(params: {
    
    devId: string
    
    client: string
    
    server: ThirdPartyServerInfo
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function registerDeviceBridgeListener(params: {
    
    deviceId: string
    
    data?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unregisterDeviceBridgeListener(params: {
    
    deviceId: string
    
    data?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function checkDeviceBridgeInfo(params: {
    
    deviceId: string
    
    data?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function deviceBridgeConfigure(params: {
    
    deviceId: string
    
    data?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getBridgeConnectStatus(params: {
    
    deviceId: string
    
    data?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function generateProvisioningData(params: {
    
    deviceId: string
    
    appPackageName: string
    
    baseUrl: string
    
    protocolVersion: string
    
    actionType: number
    
    subType: number
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

  
  export function generateSecureRandomBytes(params: {
    
    length: number
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

  
  export function storeNfcCardAction(params: {
    
    action: string
    
    uid: string
    
    devId: string
    
    isAdmin: boolean
    
    memberId: number
    
    phoneKey: string
    
    hardwareId: number
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

  
  export function findNfcCardAction(params: {
    
    uid: string
    
    devId: string
    success?: (params: {
      
      action: string
      
      uid: string
      
      devId: string
      
      isAdmin: boolean
      
      memberId: number
      
      phoneKey: string
      
      hardwareId: number
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

  
  export function getNfcStatus(params?: {
    success?: (params: {
      
      status: string
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

  
  export function isNfcSupported(params?: {
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

  
  export function isNfcEnabled(params?: {
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

  
  export function hasNfcPermission(params?: {
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

  
  export function openNfcSettings(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getDeviceDetailInfo(params: {
    
    deviceId: string
    success?: (params: {
      
      deviceId: string
      
      iccid: string
      
      imei: string
      
      netStrength: string
      
      lanIp: string
      
      ip: string
      
      mac: string
      
      timezone: string
      
      channel: string
      
      connectAbility: DeviceDetailConnectAbility
      
      rsrp: number
      
      wifiSignal: number
      
      vendorName: string
      
      meta: any
      
      matterCode: string
      
      matterQRCode: string
      
      homekitCode: string
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

  
  export function getDeviceDetailCubeConfig(params?: {
    success?: (params: {
      
      isSupport: boolean
      
      miniAppUrl: string
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

  
  export function checkOTAUpdateInfo(params: {
    
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

  
  export function getOTAUpdateInfo(params: {
    
    deviceId: string
    
    extra?: DirectlyDeviceExtraParams[]
    success?: (params: OTAUpdateInfo[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openDeviceDetailPage(params: {
    
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

  
  export function openGroupDetailPage(params: {
    
    groupId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openTimerPage(params: {
    
    deviceId: string
    
    category: string
    
    repeat?: number
    
    data: {}[]
    
    timerConfig?: TimerConfig
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openGroupTimerPage(params: {
    
    groupId: string
    
    category: string
    
    repeat?: number
    
    data: {}[]
    
    timerConfig?: TimerConfig
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openDeviceWifiNetworkMonitorPage(params: {
    
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

  
  export function syncTimerTask(params: {
    
    deviceId?: string
    
    groupId?: string
    
    category: string
    success?: (params: {
      
      timers: TimerModel[]
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

  
  export function addTimer(params: {
    
    deviceId?: string
    
    groupId?: string
    
    category: string
    
    timer: AddTimerModel
    success?: (params: {
      
      timerId: string
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

  
  export function updateTimer(params: {
    
    deviceId?: string
    
    groupId?: string
    
    timer: UpdateTimerModel
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function updateTimerStatus(params: {
    
    deviceId?: string
    
    groupId?: string
    
    timerId: string
    
    status: boolean
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function removeTimer(params: {
    
    deviceId?: string
    
    groupId?: string
    
    timerId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getShareDeviceInfo(params: {
    
    deviceId: string
    success?: (params: {
      
      name: string
      
      mobile: string
      
      email: string
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

  
  export function openDeviceEdit(params: {
    
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

  
  export function openGroupEdit(params: {
    
    groupId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openDeviceInfo(params: {
    
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

  
  export function isDeviceSupportOfflineReminder(params: {
    
    deviceId: string
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

  
  export function getDeviceOfflineReminderState(params: {
    
    deviceId: string
    success?: (params: {
      
      state: number
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

  
  export function toggleDeviceOfflineReminder(params: {
    
    deviceId: string
    
    state: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getDeviceOfflineReminderWarningText(params?: {
    success?: (params: {
      
      warningText: string
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

  
  export function openDeviceQuestionsAndFeedback(params: {
    
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

  
  export function openShareDevice(params: {
    
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

  
  export function addDeviceToDesk(params: {
    
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

  
  export function removeShareDevice(params: {
    
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

  
  export function getSupportedThirdPartyServices(params: {
    
    deviceId: string
    success?: (params: {
      
      services: ThirdPartyService[]
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

  
  export function getDeviceDetailConfiguration(params?: {
    success?: (params: {
      
      customConfiguration: {}[]
      
      hasImplFunctionList: string[]
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

  
  export function dispatchSubFunctionTouchEvent(params: {
    
    id: string
    
    name?: string
    
    type?: string
    
    optionType?: string
    
    from?: string
    
    order?: number
    
    isHide?: boolean
    
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

  
  export function dispatchDataResult(params: {
    
    id: string
    
    name?: string
    
    type?: string
    
    optionType?: string
    
    from?: string
    
    order?: number
    
    isHide?: boolean
    
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

  
  export function getSubFunctionShowState(params: {
    
    ids: string[]
    
    deviceId?: string
    
    groupId?: number
    success?: (params: {
      
      showStateList: SubFunctionShowState[]
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

  
  export function getSubFunctionExtShowData(params: {
    
    id: string
    
    data?: any
    success?: (params: {
      
      id: string
      
      data?: any
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

  
  export function getRemoteRebootTimers(params: {
    
    deviceId: string
    success?: (params: {
      
      timers: RemoteRebootTimers[]
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

  
  export function getActivatedBTDevices(params: {
    
    spaceId: number
    success?: (params: Device_4CPkXV[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getConnectedBTDevices(params?: {
    success?: (params: ThingBTModel[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openRecommendSceneDetail(params: {
    
    source: string
    
    sceneModel: any
    success?: (params: {
      
      status?: boolean
      
      type: number
      
      data?: any
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

  
  export function openDeviceExecutionAndAnutomation(params: {
    
    deviceId: string
    
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

  
  export function saveSceneAction(params: {
    
    deviceId: string
    
    taskPosition: number
    
    actionExecutor?: string
    
    executorProperty: any
    
    extraProperty: any
    
    actionDisplayNew: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function createAction(params: {
    
    createType: string
    
    smartType: string
    
    actionArray: SceneAction[]
    success?: (params: {
      
      actionArray: SceneAction[]
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

  
  export function editAction(params: {
    
    editIndex: string
    
    smartType: string
    
    actionArray: SceneAction[]
    success?: (params: {
      
      actionArray: SceneAction[]
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

  
  export function showSceneDialog(params?: {
    
    smartType?: string
    
    color?: string
    
    icon?: string
    
    image?: string
    success?: (params: {
      
      color?: string
      
      icon?: string
      
      image?: string
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

  
  export function openPreConditionPage(params?: {
    
    id?: string
    
    condType?: string
    
    expr?: Expr
    success?: (params: {
      
      id: string
      
      condType: string
      
      expr: Expr
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

  
  export function createCondition(params: {
    
    type: string
    
    condition?: string
    
    conditions?: string
    
    index?: number
    success?: (params: {
      
      type?: string
      
      condition?: string
      
      index?: number
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

  
  export function editCondition(params: {
    
    type: string
    
    condition?: string
    
    conditions?: string
    
    index?: number
    success?: (params: {
      
      type?: string
      
      condition?: string
      
      index?: number
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

  
  export function selectRooms(params?: {
    
    stickyOnTop?: boolean
    
    rooms?: string[]
    success?: (params: {
      
      stickyOnTop?: boolean
      
      rooms?: string[]
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

  
  export function selectPreCondition(params?: {
    
    id?: string
    
    condType?: string
    
    expr?: Expr
    success?: (params: {
      
      id: string
      
      condType: string
      
      expr: Expr
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

  
  export function openNativeFromMini(params: {
    
    identifier: string
    
    userInfo?: string
    success?: (params: {
      
      identifier: string
      
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

  
  export function checkSupportShare(params: {
    
    resId: string
    
    resType: number
    success?: (params: {
      
      support: boolean
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

  
  export function getRemainingShareTimes(params: {
    
    resId: string
    
    resType: number
    success?: (params: {
      
      times: number
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

  
  export function addReceiver(params: {
    
    resId: string
    
    resType: number
    
    spaceId: number
    
    countryCode?: string
    
    userAccount: string
    success?: (params: {
      
      memberId: number
      
      nickName: string
      
      userName: string
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

  
  export function removeReceiver(params: {
    
    resId: string
    
    resType: number
    
    memberId: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getReceivers(params: {
    
    resId: string
    
    resType: number
    
    page: number
    
    pageSize: number
    success?: (params: {
      
      receivers: Receiver[]
      
      total: number
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

  
  export function updateShareExpirationDate(params: {
    
    resId: string
    
    resType: number
    
    memberId: number
    
    shareMode: number
    
    endTime: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getRelationMembers(params?: {
    success?: (params: {
      
      members: Member[]
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

  
  export function removeRelationMember(params: {
    
    uid: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function createShareInfo(params: {
    
    resId: string
    
    resType: number
    
    spaceId: number
    
    shareType: number
    
    shareCount: number
    success?: (params: {
      
      content: string
      
      code: string
      
      shortUrl: string
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

  
  export function validateShareCode(params: {
    
    code: string
    success?: (params: {
      
      result: boolean
      
      originResult: any
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

  
  export function getShareCodeInfo(params: {
    
    code: string
    success?: (params: {
      
      appId: string
      
      resId: string
      
      resType: number
      
      resIcon: string
      
      resName: string
      
      nickName: string
      
      shareSource: number
      
      spaceId: number
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

  
  export function acceptShareInvite(params: {
    
    code: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function removeReceivedDeviceOrGroup(params: {
    
    resId: string
    
    resType: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getSharers(params?: {
    success?: (params: {
      
      sharers: Sharer[]
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

  
  export function getSharerNameOfDeviceOrGroup(params: {
    
    resId: string
    
    resType: number
    success?: (params: {
      
      userName: string
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

  
  export function getSharerDetail(params: {
    
    memberId: number
    success?: (params: {
      
      memberId: number
      
      account: string
      
      name: string
      
      remarkName: string
      
      devices: SharerDevice[]
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

  
  export function removeSharer(params: {
    
    memberId: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function updateSharer(params: {
    
    memberId: number
    
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

  
  export function isSupportGoogleHomeShare(params: {
    
    devId: string
    success?: (params: {
      
      support: boolean
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

  
  export function startGoogleHomeShare(params: {
    
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

  
  export function getGroupDeviceList(params: {
    
    groupId: string
    success?: (params: {
      
      groupId: string
      
      deviceList: DeviceInfo_0OLqTL[]
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

  
  export function getGroupDeviceNum(params: {
    
    groupId: string
    success?: (params: {
      
      groupId: string
      
      deviceNum: number
      
      devieNum: number
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

  
  export function getDeviceNumWithDpCode(params: {
    
    groupId: string
    
    dpCode: string
    success?: (params: {
      
      groupId: string
      
      deviceNum: number
      
      devieNum: number
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

  
  export function publishGroupDpCodes(params: {
    
    groupId: string
    
    dpCodes: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function publishSigMeshMultiDps(params: {
    
    groupId: string
    
    localId: string
    
    dps: any
    
    pcc: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function openMeshLocalGroup(params: {
    
    deviceId: string
    
    localId: string
    
    vendorIds: string
    
    type?: string
    
    pccs?: string[]
    
    codes?: string[]
    
    categoryCode?: string
    
    isSupportLowPower?: boolean
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getGroupInfo(params: {
    
    groupId: string
    success?: (params: {
      
      groupId: string
      
      productId: string
      
      name: string
      
      time: number
      
      iconUrl: string
      
      type: number
      
      isShare: boolean
      
      dps: {}
      
      dpCodes: {}
      
      deviceNum: number
      
      localKey: string
      
      pv: number
      
      productInfo: {}
      
      dpName: {}
      
      deviceList: DeviceInfo_0OLqTL[]
      
      localId: string
      
      pcc: string
      
      meshId: string
      
      groupKey: string
      
      schema: {}[]
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

  
  export function getGroupInfoList(params: {
    
    groupIdList: string[]
    success?: (params: {
      
      groupInfoList: GroupInfo[]
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

  
  export function publishGroupDps(params: {
    
    groupId: string
    
    dps: {}
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getGroupProperty(params: {
    
    groupId: string
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

  
  export function setGroupProperty(params: {
    
    groupId: string
    
    code: string
    
    value: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function registerGroupChange(params: {
    
    groupIdList: string[]
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unRegisterGroupChange(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function checkCanJoinMatter(params: {
    
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

  
  export function fetchAvailableMatterGatewayList(params: {
    
    spaceId: string
    success?: (params: AvailableGatewayModel[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function checkShowMatterMutilpleShare(params: {
    
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

  
  export function changeDeviceAdvMatterState(params: {
    
    deviceId: string
    success?: (params: {
      
      matterCode: string
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

  
  export function pairDeviceIntoHomeKit(params: {
    
    matterCode: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function pairMatterDevice(params: {
    
    matterCode: string
    
    gwID: string
    
    spaceID: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function cancelMatterActivator(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getMeshDeviceId(params: {
    
    nodeId: string
    
    deviceId: string
    success?: (params: {
      
      deviceId: string
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

  
  export function getMeshDeviceIdHex(params: {
    
    nodeId: string
    
    deviceId: string
    success?: (params: {
      
      deviceId: string
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

  
  export function getDpDataByMesh(params: {
    
    deviceId: string
    
    dpIds: Object[]
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function checkOTAUpgradeStatus(params: {
    
    deviceId: string
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

  
  export function otaStatus(params: {
    
    deviceId: string
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

  
  export function openOTAUpgrade(params: {
    
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

  
  export function registerOTACompleted(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function deviceIsSupportThingModel(params: {
    
    devId: string
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

  
  export function updateDeviceThingModelInfo(params: {
    
    pid: string
    
    productVersion: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getDeviceThingModelInfo(params: {
    
    devId: string
    success?: (params: {
      
      modelId: string
      
      productId: string
      
      productVersion: string
      
      services: ServiceModel[]
      
      extensions: any
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

  
  export function publishThingModelMessage(params: {
    
    devId: string
    
    type: number
    
    payload: any
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function subscribeReceivedThingModelMessage(params: {
    
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

  
  export function unSubscribeReceivedThingModelMessage(params: {
    
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

  
  export function initVirtualDevice(params: {
    
    pid: string
    success?: (params: {
      
      devId: string
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

  
  export function onLeaveBeaconFence(
    listener: (params: LeaveBeaconFenceEvent) => void
  ): void

  
  export function offLeaveBeaconFence(
    listener: (params: LeaveBeaconFenceEvent) => void
  ): void

  
  export function onFileTransferProgress(
    listener: (params: FileTransferProgressResult) => void
  ): void

  
  export function offFileTransferProgress(
    listener: (params: FileTransferProgressResult) => void
  ): void

  
  export function onBLEConnectStatusChange(
    listener: (params: ThingBLEConnectStatusEvent) => void
  ): void

  
  export function offBLEConnectStatusChange(
    listener: (params: ThingBLEConnectStatusEvent) => void
  ): void

  
  export function onBLETransparentDataReport(
    listener: (params: ThingBLETransparentDataBean) => void
  ): void

  
  export function offBLETransparentDataReport(
    listener: (params: ThingBLETransparentDataBean) => void
  ): void

  
  export function onBLEBigDataChannelProgressEvent(
    listener: (params: ThingBLEBigDataProgressEvent) => void
  ): void

  
  export function offBLEBigDataChannelProgressEvent(
    listener: (params: ThingBLEBigDataProgressEvent) => void
  ): void

  
  export function onBLEScanBindDevice(
    listener: (params: ThingBLEScanDeviceEvent) => void
  ): void

  
  export function offBLEScanBindDevice(
    listener: (params: ThingBLEScanDeviceEvent) => void
  ): void

  
  export function onBLEBigDataChannelDeviceToAppSuccess(
    listener: (params: BLEBigDataChannelDeviceToAppSuccessResponse) => void
  ): void

  
  export function offBLEBigDataChannelDeviceToAppSuccess(
    listener: (params: BLEBigDataChannelDeviceToAppSuccessResponse) => void
  ): void

  
  export function onBLEBigDataChannelUploadCloudProgress(
    listener: (params: ThingBLEBigDataProgressEvent) => void
  ): void

  
  export function offBLEBigDataChannelUploadCloudProgress(
    listener: (params: ThingBLEBigDataProgressEvent) => void
  ): void

  
  export function onBLECommRodScanDevice(
    listener: (params: CommRodScanDeviceEvent) => void
  ): void

  
  export function offBLECommRodScanDevice(
    listener: (params: CommRodScanDeviceEvent) => void
  ): void

  
  export function onBLECommRodConnectStatusChange(
    listener: (params: CommRodConnectStatusEvent) => void
  ): void

  
  export function offBLECommRodConnectStatusChange(
    listener: (params: CommRodConnectStatusEvent) => void
  ): void

  
  export function onBLECommRodSchemaUpload(
    listener: (params: CommRodSchemaUploadEvent) => void
  ): void

  
  export function offBLECommRodSchemaUpload(
    listener: (params: CommRodSchemaUploadEvent) => void
  ): void

  
  export function onBLECommRodDpsChange(
    listener: (params: CommRodDpsChangeEvent) => void
  ): void

  
  export function offBLECommRodDpsChange(
    listener: (params: CommRodDpsChangeEvent) => void
  ): void

  
  export function onSubDeviceInfoUpdateEvent(
    listener: (params: GWActivationRespond) => void
  ): void

  
  export function offSubDeviceInfoUpdateEvent(
    listener: (params: GWActivationRespond) => void
  ): void

  
  export function onDirectlyConnectedSearchDeviceEvent(
    listener: (params: DirectlyConnectedSearchRespond) => void
  ): void

  
  export function offDirectlyConnectedSearchDeviceEvent(
    listener: (params: DirectlyConnectedSearchRespond) => void
  ): void

  
  export function onDpDataChange(listener: (params: DpsChanged) => void): void

  
  export function offDpDataChange(listener: (params: DpsChanged) => void): void

  
  export function onMqttMessageReceived(
    listener: (params: MqttResponse) => void
  ): void

  
  export function offMqttMessageReceived(
    listener: (params: MqttResponse) => void
  ): void

  
  export function onSocketMessageReceived(
    listener: (params: SocketResponse) => void
  ): void

  
  export function offSocketMessageReceived(
    listener: (params: SocketResponse) => void
  ): void

  
  export function onDeviceOnlineStatusUpdate(
    listener: (params: Online) => void
  ): void

  
  export function offDeviceOnlineStatusUpdate(
    listener: (params: Online) => void
  ): void

  
  export function onDeviceInfoUpdated(
    listener: (params: Device_aQE9du) => void
  ): void

  
  export function offDeviceInfoUpdated(
    listener: (params: Device_aQE9du) => void
  ): void

  
  export function onSubDeviceReplaceResult(
    listener: (params: SubDevReplaceResult) => void
  ): void

  
  export function offSubDeviceReplaceResult(
    listener: (params: SubDevReplaceResult) => void
  ): void

  
  export function onDeviceRemoved(
    listener: (params: OnDeviceRemovedBody) => void
  ): void

  
  export function offDeviceRemoved(
    listener: (params: OnDeviceRemovedBody) => void
  ): void

  
  export function onMqttConnectState(
    listener: (params: MqttConnectStateResponse) => void
  ): void

  
  export function offMqttConnectState(
    listener: (params: MqttConnectStateResponse) => void
  ): void

  
  export function onSubDeviceDpUpdate(
    listener: (params: Device_aQE9du) => void
  ): void

  
  export function offSubDeviceDpUpdate(
    listener: (params: Device_aQE9du) => void
  ): void

  
  export function onSubDeviceRemoved(
    listener: (params: Device_aQE9du) => void
  ): void

  
  export function offSubDeviceRemoved(
    listener: (params: Device_aQE9du) => void
  ): void

  
  export function onSubDeviceAdded(
    listener: (params: Device_aQE9du) => void
  ): void

  
  export function offSubDeviceAdded(
    listener: (params: Device_aQE9du) => void
  ): void

  
  export function onSubDeviceInfoUpdate(
    listener: (params: Device_aQE9du) => void
  ): void

  
  export function offSubDeviceInfoUpdate(
    listener: (params: Device_aQE9du) => void
  ): void

  
  export function onDeviceServiceAlignResponse(
    listener: (params: AlignResponseParams) => void
  ): void

  
  export function offDeviceServiceAlignResponse(
    listener: (params: AlignResponseParams) => void
  ): void

  
  export function onDeviceServiceDiscovered(
    listener: (params: ServiceInfo) => void
  ): void

  
  export function offDeviceServiceDiscovered(
    listener: (params: ServiceInfo) => void
  ): void

  
  export function onDeviceServiceConfirmed(
    listener: (params: ServiceConfirmParams) => void
  ): void

  
  export function offDeviceServiceConfirmed(
    listener: (params: ServiceConfirmParams) => void
  ): void

  
  export function onDeviceServiceCanceled(
    listener: (params: ServiceCancelParams) => void
  ): void

  
  export function offDeviceServiceCanceled(
    listener: (params: ServiceCancelParams) => void
  ): void

  
  export function onThirdPartyServiceDiscoveredAck(
    listener: (params: ThirdPartyDiscoveryAckResponse) => void
  ): void

  
  export function offThirdPartyServiceDiscoveredAck(
    listener: (params: ThirdPartyDiscoveryAckResponse) => void
  ): void

  
  export function onThirdPartyServiceConfirmedAck(
    listener: (params: ThirdPartyConfirmAckResponse) => void
  ): void

  
  export function offThirdPartyServiceConfirmedAck(
    listener: (params: ThirdPartyConfirmAckResponse) => void
  ): void

  
  export function onThirdPartyServiceAlignResponse(
    listener: (params: ThirdPartySyncAckResponse) => void
  ): void

  
  export function offThirdPartyServiceAlignResponse(
    listener: (params: ThirdPartySyncAckResponse) => void
  ): void

  
  export function onThirdPartyServiceCanceledAck(
    listener: (params: ThirdPartyCancelAckResponse) => void
  ): void

  
  export function offThirdPartyServiceCanceledAck(
    listener: (params: ThirdPartyCancelAckResponse) => void
  ): void

  
  export function onDeviceBridgeInfo(
    listener: (params: DeviceBridge) => void
  ): void

  
  export function offDeviceBridgeInfo(
    listener: (params: DeviceBridge) => void
  ): void

  
  export function onDeviceBridgeConfigure(
    listener: (params: DeviceBridge) => void
  ): void

  
  export function offDeviceBridgeConfigure(
    listener: (params: DeviceBridge) => void
  ): void

  
  export function onDeviceBridgeConnectStatus(
    listener: (params: DeviceBridge) => void
  ): void

  
  export function offDeviceBridgeConnectStatus(
    listener: (params: DeviceBridge) => void
  ): void

  
  export function onTimerUpdate(listener: (params: {}) => void): void

  
  export function offTimerUpdate(listener: (params: {}) => void): void

  
  export function onSubFunctionDataChange(
    listener: (params: SubFunctionParams) => void
  ): void

  
  export function offSubFunctionDataChange(
    listener: (params: SubFunctionParams) => void
  ): void

  
  export function onDispatchEvent(
    listener: (params: SubFunctionParams) => void
  ): void

  
  export function offDispatchEvent(
    listener: (params: SubFunctionParams) => void
  ): void

  
  export function onGroupInfoChange(
    listener: (params: GroupInfoResponse) => void
  ): void

  
  export function offGroupInfoChange(
    listener: (params: GroupInfoResponse) => void
  ): void

  
  export function onGroupDpCodeChange(
    listener: (params: GroupDpCodeBean) => void
  ): void

  
  export function offGroupDpCodeChange(
    listener: (params: GroupDpCodeBean) => void
  ): void

  
  export function onGroupRemovedEvent(
    listener: (params: GroupBean) => void
  ): void

  
  export function offGroupRemovedEvent(
    listener: (params: GroupBean) => void
  ): void

  
  export function onGroupDpDataChangeEvent(
    listener: (params: GroupDpDataBean) => void
  ): void

  
  export function offGroupDpDataChangeEvent(
    listener: (params: GroupDpDataBean) => void
  ): void

  
  export function onOtaCompleted(
    listener: (params: OtaCompletedParams) => void
  ): void

  
  export function offOtaCompleted(
    listener: (params: OtaCompletedParams) => void
  ): void

  
  export function onReceivedThingModelMessage(
    listener: (params: OnReceivedThingModelMessageBody) => void
  ): void

  
  export function offReceivedThingModelMessage(
    listener: (params: OnReceivedThingModelMessageBody) => void
  ): void

  
  export function onRegisterExtModuleStatus(
    listener: (params: {
      
      devID: string
      
      status: number
    }) => void
  ): void

  
  export function offRegisterExtModuleStatus(
    listener: (params: {
      
      devID: string
      
      status: number
    }) => void
  ): void

  export type NetworkInfo = {
    
    network: number
    
    ssid: string
    
    signal: number
    
    flags?: number
    
    hashValue: string
  }

  export type NetworkBackupModel = {
    
    ssid: string
    
    password?: string
    
    hashValue?: string
  }

  export type WifiInfo = {
    
    ssid: string
    
    password: string
  }

  export type AddTimer = {
    
    time: string
    
    loops: string
    
    status: boolean
  }

  export type UpdateTimer = {
    
    tid: string
    
    time: string
    
    loops: string
    
    status: boolean
  }

  export type Timer = {
    
    tid: string
    
    time: string
    
    loops: string
    
    status: boolean
  }

  export type CheckSupportMultiControlParams = {
    
    deviceId: string
  }

  export type MultiControlDpInfo = {
    
    dpCode: string
    
    dpName: string
    
    dpId: number
  }

  export type MultiControlGroupInfo = {
    
    bindMaxValue: number
    
    multiGroup?: MultiControlGroup
    
    parentRules: MultiControlGroupParentRule[]
  }

  export type MultiControlDevice = {
    
    datapoints: MultiControlGroupDeviceDp[]
    
    devId: string
    
    iconUrl: string
    
    inRule: boolean
    
    multiControlIds: number[]
    
    name: string
    
    productId: string
    
    roomName: string
  }

  export type MultiControlDeviceDpsInfo = {
    
    bindMaxValue: number
    
    datapoints: MultiControlGroupDeviceDp[]
    
    mcGroups: MultiControlGroup[]
    
    parentRules: MultiControlGroupParentRule[]
  }

  export type UpdateMultiControlDPInfo = {
    
    dpId: number
    
    devId: string
  }

  export type MultiControlGroup = {
    
    multiControlGroupId: number
    
    multiControlId: number
    
    groupName: string
    
    enabled: boolean
    
    groupDetail: MultiControlGroupDevice[]
    
    groupType: number
  }

  export type CheckSupportDoubleControlParams = {
    
    deviceId: string
  }

  export type DoubleControlGroup = {
    
    mainDeviceId: string
    
    slaveDeviceIds: string[]
  }

  export type DoubleControlDevice = {
    
    devId: string
    
    isRelate: boolean
    
    parentId: string
  }

  export type DoubleControlDPRelation = {
    
    dpIds: string[]
    
    subDpIds: string[]
    
    dpIdMap: any
  }

  export type DoubleControlDPInfo = {
    
    code: string
    
    dpId: number
    
    name: string
    
    schemaId: string
  }

  export type CommRodDeviceModel = {
    
    deviceId: string
    
    name: string
    
    uuid: string
    
    pid: string
    
    mac: string
    
    isActive: boolean
  }

  export type Gateway = {
    
    gwId: string
  }

  export type Device = {
    
    deviceId: string
  }

  export type Device_aQE9du = {
    
    deviceId: string
    
    dps?: any
  }

  export type DeviceInfo = {
    
    roomName?: string
    
    schema: {}[]
    
    dps: any
    
    attribute: number
    
    baseAttribute: number
    
    capability: number
    
    dpName: any
    
    ability: number
    
    icon: string
    
    devId: string
    
    verSw: string
    
    isShare: boolean
    
    bv: string
    
    uuid: string
    
    panelConfig: any
    
    activeTime: number
    
    devAttribute: number
    
    pcc: string
    
    nodeId: string
    
    parentId?: string
    
    category: string
    
    standSchemaModel?: {}
    
    productId: string
    
    productVer: string
    
    bizAttribute: number
    
    meshId: string
    
    sigmeshId: string
    
    meta: any
    
    isLocalOnline: boolean
    
    isCloudOnline: boolean
    
    isOnline: boolean
    
    name: string
    
    groupId: string
    
    dpCodes: any
    
    devTimezoneId: string
    
    dpsTime: any
    
    latitude: string
    
    longitude: string
    
    ip?: string
    
    isVirtualDevice: boolean
    
    isZigbeeInstallCode: boolean
    
    protocolAttribute: number
    
    connectionStatus: number
    
    mac?: string
    
    bluetoothCapability?: string
    
    isTripartiteMatter: boolean
    
    isGW: boolean
    
    isSupportGroup: boolean
    
    isZigBeeSubDev: boolean
    
    cadv?: string
    
    isSupportOTA: boolean
    
    iconUrl: string
    
    hasWifi: boolean
    
    switchDp: number
    
    switchDps: number[]
    
    wifiEnableState: number
    
    configMetas: any
    
    isMatter: boolean
    
    isSupportLink: boolean
    
    isSupportAppleHomeKit?: boolean
    
    attributeString: string
    
    extModuleType: number
    
    isRelayOpen: boolean
    
    isProxyOpen: boolean
    
    isSupportProxyAndRelay: boolean
    
    yuNetState: number
  }

  export type OriginalDps = {
    
    dpId: string
    
    dpCode: string
    
    dpValue: {}
  }

  export type TranslateAdvancedCapability = {
    
    dpCode: string
    
    translatedValue: string
    
    unit: string
  }

  export type ServiceInfo = {
    
    service: string
    
    desc: string
    
    ip: string
    
    client: string
    
    server: string
  }

  export type ThirdPartyServerInfo = {
    
    ip: string
    
    port: number
    
    server_name: string
    
    type: string
  }

  export enum DeviceDetailConnectAbility {
    
    UNKNOW = 0,

    
    PHONE = 1,

    
    GATEWAY = 2,

    
    PHONE_AND_GATEWAY = 3,
  }

  export type DirectlyDeviceExtraParams = {
    
    type: string
    
    version: string
  }

  export type OTAUpdateInfo = {
    
    desc: string
    
    typeDesc: string
    
    upgradeStatus: number
    
    version: string
    
    currentVersion: string
    
    timeout: number
    
    upgradeType: number
    
    type: number
    
    devType: number
    
    controlType: boolean
    
    waitingDesc: string
    
    upgradingDesc: string
    
    canUpgrade: boolean
    
    remind: string
    
    upgradeMode: number
  }

  export type TimerConfig = {
    
    background?: string
  }

  export type TimerModel = {
    
    timerId: string
    
    date: string
    
    time: string
    
    status: boolean
    
    loops: string
    
    dps: any
    
    timezoneId: string
    
    aliasName: string
    
    isAppPush: boolean
    
    id: string
  }

  export type AddTimerModel = {
    
    time: string
    
    loops: string
    
    dps: any
    
    aliasName?: string
    
    isAppPush?: boolean
  }

  export type UpdateTimerModel = {
    
    timerId: string
    
    time: string
    
    loops: string
    
    dps: any
    
    aliasName?: string
    
    isAppPush?: boolean
  }

  export type ThirdPartyService = {
    
    serviceId: number
    
    name: string
    
    iconUrl: string
    
    url: string
    
    attributeKey: string
    
    attributeSign: number
    
    widgetUrl: string
    
    originJson: any
  }

  export type SubFunctionShowState = {
    
    id: string
    
    isShow: boolean
  }

  export type RemoteRebootTimers = {
    
    tid: string
    
    time: string
    
    loops: string
    
    status: boolean
  }

  export type Device_4CPkXV = {
    
    deviceId: string
  }

  export type ThingBTModel = {
    
    type: string
    
    name: string
    
    mac: string
  }

  export type SceneAction = {
    
    id?: string
    
    ruleId?: string
    
    orderNum?: number
    
    entityId: string
    
    entityName?: string
    
    actionExecutor: string
    
    executorProperty: any
    
    extraProperty: any
    
    isDevOnline?: boolean
    
    devDelMark?: boolean
    
    deleteDevIcon?: string
    
    devIcon?: string
    
    actionStrategy?: string
    
    extraPanelInfo?: ExtraPanelInfo
    
    pid?: string
    
    productId?: string
    
    productPic?: string
    
    defaultIconUrl?: string
    
    actionDisplay?: string
    
    actionDisplayNew?: any
    
    status?: boolean
    
    relationGroup?: any
  }

  export type Expr = {
    
    start: string
    
    end: string
    
    timeInterval: string
    
    loops: string
    
    timeZoneId: string
    
    cityId: string
    
    cityName: string
    
    repeatType: string
    
    monthLoops: string
    
    dayLoops: string
    
    regionCode: string
  }

  export type Receiver = {
    
    memberId: number
    
    nickName: string
    
    userName: string
    
    iconUrl: string
    
    shareMode: number
    
    endTime: number
    
    uid?: string
  }

  export type Member = {
    
    memberId: number
    
    nickName: string
    
    userName: string
    
    iconUrl: string
    
    shareMode: number
    
    endTime: number
    
    uid: string
  }

  export type Sharer = {
    
    memberId: number
    
    nickName: string
    
    userName: string
  }

  export type SharerDevice = {
    
    iconUrl: string
    
    devId: string
    
    name: string
    
    roomName: string
    
    homeName: string
  }

  export type DeviceInfo_0OLqTL = {
    
    roomName?: string
    
    schema: {}[]
    
    dps: any
    
    attribute: number
    
    baseAttribute: number
    
    capability: number
    
    dpName: any
    
    ability: number
    
    icon: string
    
    devId: string
    
    verSw: string
    
    isShare: boolean
    
    bv: string
    
    uuid: string
    
    panelConfig: any
    
    activeTime: number
    
    devAttribute: number
    
    pcc: string
    
    nodeId: string
    
    parentId?: string
    
    category: string
    
    standSchemaModel?: {}
    
    productId: string
    
    productVer: string
    
    bizAttribute: number
    
    meshId: string
    
    sigmeshId: string
    
    meta: any
    
    isLocalOnline: boolean
    
    isOnline: boolean
    
    isCloudOnline: boolean
    
    name: string
    
    groupId: string
    
    dpCodes: any
    
    originJson: any
    
    devTimezoneId: string
    
    dpsTime: any
    
    secCategory: string
    
    latitude: string
    
    longitude: string
    
    ip?: string
    
    isVirtualDevice: boolean
    
    isZigbeeInstallCode: boolean
    
    protocolAttribute: number
    
    connectionStatus: number
    
    mac?: string
    
    bluetoothCapability?: string
    
    isTripartiteMatter: boolean
    
    isGW: boolean
    
    isSupportGroup: boolean
    
    isZigBeeSubDev: boolean
    
    cadv?: string
    
    isSupportOTA: boolean
    
    iconUrl: string
    
    hasWifi: boolean
    
    switchDp: number
    
    switchDps: number[]
    
    wifiEnableState: number
    
    configMetas: any
    
    isMatter: boolean
    
    isSupportLink: boolean
    
    isSupportAppleHomeKit?: boolean
    
    attributeString: string
    
    extModuleType: number
    
    isRelayOpen: boolean
    
    isProxyOpen: boolean
    
    isSupportProxyAndRelay: boolean
    
    yuNetState: number
  }

  export type GroupInfo = {
    
    groupId: string
    
    productId: string
    
    name: string
    
    time: number
    
    iconUrl: string
    
    type: number
    
    isShare: boolean
    
    dps: {}
    
    dpCodes: {}
    
    deviceNum: number
    
    localKey: string
    
    pv: number
    
    productInfo: {}
    
    dpName: {}
    
    deviceList: DeviceInfo_0OLqTL[]
    
    localId: string
    
    pcc: string
    
    meshId: string
    
    groupKey: string
    
    schema: {}[]
  }

  export type AvailableGatewayModel = {
    
    deviceId: string
    
    deviceName: string
    
    isLocalOnline: boolean
  }

  export type Object = {}

  export type ServiceModel = {
    
    properties: ThingProperty[]
    
    actions: ThingAction[]
    
    events: ThingEvent[]
  }

  export type LeaveBeaconFenceEvent = {
    
    deviceId: string
    
    text: string
  }

  export type FileTransferProgressResult = {
    
    deviceId: string
    
    fileId: number
    
    fileIdentifier: string
    
    fileVersion: number
    
    filePath: string
    
    progress: number
  }

  export type ThingBLEConnectStatusEvent = {
    
    deviceId: string
    
    status: string
  }

  export type ThingBLETransparentDataBean = {
    
    deviceId: string
    
    data: string
  }

  export type ThingBLEBigDataProgressEvent = {
    
    deviceId: string
    
    progress: number
  }

  export type ThingBLEScanDeviceEvent = {
    
    deviceId: string
  }

  export type BLEBigDataChannelDeviceToAppSuccessResponse = {
    
    data: BLEBigDataChannelData[]
  }

  export type CommRodScanDeviceEvent = {
    
    deviceInfo: CommRodDeviceModel
  }

  export type CommRodConnectStatusEvent = {
    
    uuid: string
    
    status: string
  }

  export type CommRodSchemaUploadEvent = {
    
    uuid: string
    
    schema: string
  }

  export type CommRodDpsChangeEvent = {
    
    uuid: string
    
    dps: any
  }

  export type GWActivationRespond = {
    
    deviceId: string
    
    gwId: string
  }

  export type DirectlyConnectedSearchRespond = {
    
    isActive: boolean
  }

  export type DpsChanged = {
    
    deviceId: string
    
    gwId: string
    
    dps: any
    
    dpsTime?: any
    
    options: any
  }

  export type MqttResponse = {
    
    deviceId?: string
    
    message: any
    
    messageData: any
    
    type: string
    
    protocol: number
    
    topic?: string
  }

  export type SocketResponse = {
    
    message: any
    
    deviceId: string
    
    type: number
  }

  export type Online = {
    
    online: boolean
    
    deviceId: string
    
    onlineType: number
  }

  export type SubDevReplaceResult = {
    
    replaceResult: boolean
    
    errorCode?: string
    
    errorMsg?: string
  }

  export type OnDeviceRemovedBody = {
    
    deviceId: string
  }

  export type MqttConnectStateResponse = {
    
    connectState: number
  }

  export type AlignResponseParams = {
    
    devId: string
    
    data: ServiceResponse
  }

  export type ServiceConfirmParams = {
    
    serviceInfo: ServiceInfo
    
    permit: boolean
  }

  export type ServiceCancelParams = {
    
    service: string
    
    client: string
    
    server: string
  }

  export type ThirdPartyDiscoveryAckResponse = {
    
    devId: string
    
    servers: ThirdPartyServerInfo[]
  }

  export type ThirdPartyConfirmAckResponse = {
    
    devId: string
    
    ip: string
    
    port: number
    
    server_name: string
    
    type: string
  }

  export type ThirdPartySyncAckResponse = {
    
    devId: string
    
    servers: ThirdPartySyncAckServerStatus[]
  }

  export type ThirdPartyCancelAckResponse = {
    
    devId: string
    
    client: string
    
    server: ThirdPartyServerInfo
  }

  export type DeviceBridge = {
    
    deviceId: string
    
    data?: string
  }

  export type SubFunctionParams = {
    
    id: string
    
    name?: string
    
    type?: string
    
    optionType?: string
    
    from?: string
    
    order?: number
    
    isHide?: boolean
    
    data?: any
  }

  export type GroupInfoResponse = {
    
    groupId: string
  }

  export type GroupDpCodeBean = {
    
    groupId: string
    
    dpCodes: any
  }

  export type GroupBean = {
    
    groupId: string
  }

  export type GroupDpDataBean = {
    
    groupId: string
    
    dps: {}
  }

  export type OtaCompletedParams = {
    
    deviceId: string
    
    result: number
  }

  export type OnReceivedThingModelMessageBody = {
    
    type: number
    
    payload: any
  }

  export type MultiControlGroupDeviceDp = {
    
    dpId: number
    
    code: string
    
    name: string
  }

  export type MultiControlGroupDevice = {
    
    multiControlId: number
    
    datapoints: MultiControlGroupDeviceDp[]
    
    devId: string
    
    devName: string
    
    dpId: number
    
    dpName: string
    
    status: number
    
    enabled: boolean
  }

  export type MultiControlGroupParentRuleDpInfo = {
    
    dpId: number
    
    dpName: string
  }

  export type MultiControlGroupParentRule = {
    
    ruleId: string
    
    name: string
    
    dpList: MultiControlGroupParentRuleDpInfo[]
  }

  export type BLEBigDataChannelData = {
    
    dpsTime: string
    
    dps: any
  }

  export type BeaconFenceParams = {
    
    deviceId: string
  }

  export type BeaconFenceConfigParams = {
    
    deviceId: string
    
    beaconFenceRssi: number
    
    isOpenEventWhenApproachingBeaconFence: boolean
    
    isOpenEventWhenLeaveBeaconFence: boolean
    
    isOpenNotifyWhenLeaveBeaconFence: boolean
  }

  export type Device_XdtHcD = {
    
    deviceId: string
  }

  export type BeaconFenceConfigResponse = {
    
    deviceId: string
    
    beaconFenceRssi: number
    
    isOpenEventWhenApproachingBeaconFence: boolean
    
    isOpenEventWhenLeaveBeaconFence: boolean
    
    isOpenNotifyWhenLeaveBeaconFence: boolean
  }

  export type BTBondParams = {
    
    mac: string
  }

  export type ThingBLEFileTransferParams = {
    
    deviceId: string
    
    fileId: number
    
    fileIdentifier: string
    
    fileVersion: number
    
    filePath: string
  }

  export type ThingBLEFileTransferResult = {
    
    result: boolean
  }

  export type BLERSSIBean = {
    
    signal: number
  }

  export type ThingBLEOnlineStateBean = {
    
    isOnline: boolean
  }

  export type ThingBLEEncryptDeviceBean = {
    
    deviceId: string
    
    keyDeviceId: string
  }

  export type ThingBLEBigDataBean = {
    
    deviceId: string
    
    requestParams: any
  }

  export type ThingBLEBigDataResultBean = {
    
    deviceId: string
    
    resultParams: any
  }

  export type BleMeshLowPowerConnectionParams = {
    
    deviceId: string
  }

  export type ThingBLEScanParams = {
    
    interval: number
    
    scanType: string
  }

  export type ThingBLECapabilitySupportParams = {
    
    deviceId: string
    
    capability: number
  }

  export type ThingBLECapabilitySupportResult = {
    
    isSupport: boolean
  }

  export type BTDeviceInfoResponse = {
    
    deviceName?: string
    
    isConnected?: boolean
    
    isBond?: boolean
    
    mac?: string
  }

  export type BluetoothConnectReq = {
    
    devId: string
    
    timeoutMillis?: number
    
    souceType?: number
    
    connectType?: number
  }

  export type BluetoothDisconnectReq = {
    
    devId: string
    
    connectType?: number
  }

  export type ActiveDeviceExtendModuleParams = {
    
    deviceId: string
    
    ssid?: string
    
    password?: string
    
    activeType: number
  }

  export type MeshProxyOrRelayStateParams = {
    
    deviceId: string
    
    isOpen: boolean
  }

  export type RecordBleConnectEventParams = {
    
    deviceId: string
    
    src: number
    
    actId: string
  }

  export type CommRodConnectParams = {
    
    deviceInfo: CommRodDeviceModel
    
    machineKey: string
    
    schema: string
  }

  export type CommRodDpsPublish = {
    
    deviceInfo: CommRodDeviceModel
    
    dps: any
  }

  export type ThingMeshVendorControlEventParams = {
    
    meshId: string
    
    nodeId: string
    
    opCode: number
    
    payloadHexString: string
  }

  export type LocalDeviceEntryParams = {
    
    deviceId: string
    
    groupId: string
    
    type?: number
  }

  export type LocalDeviceExitParams = {
    
    deviceId: string
    
    groupId: string
  }

  export type ActivationInfoBean = {
    
    gateway: Gateway
    
    timeout: number
  }

  export type DirectlyConnectedActivationBean = {
    
    device: Device
    
    timeout: number
  }

  export type DeviceWifiActivatorResponse = {
    
    wifiActivator: boolean
  }

  export type ConnectStatus = {
    
    devId: string
    
    status: number
  }

  export type ServiceResponse = {
    
    service: string
    
    servers: ConnectStatus[]
    
    clients: ConnectStatus[]
  }

  export type ThirdPartySyncAckServerStatus = {
    
    ip: string
    
    port: number
    
    server_name: string
    
    type: string
    
    state: number
  }

  export type AESOpParams = {
    
    deviceId: string
    
    password: string
  }

  export type YuNetStateParams = {
    
    deviceId: string
    
    state: number
  }

  export type GeneralArrayStringResponse = {
    
    result: string[]
  }

  export type DeviceNameParams = {
    
    deviceId: string
    
    name: string
  }

  export type DeviceOnlineTypeResponse = {
    
    onlineType: number
  }

  export type DeviceListReq = {
    
    deviceIds: string[]
  }

  export type DeviceListResp = {
    
    deviceInfos: DeviceInfo[]
  }

  export type Product = {
    
    productId: string
    
    productVer?: string
  }

  export type ProductInfo = {
    
    panelConfig: any
    
    schema: string
    
    schemaExt: string
    
    capability: number
    
    attribute: number
    
    productId: string
    
    category: string
    
    categoryCode: string
    
    standard: boolean
    
    pcc: string
    
    vendorInfo: string
    
    quickOpDps: string[]
    
    faultDps: string[]
    
    displayDps: string[]
    
    displayMsgs: any
    
    uiPhase: string
    
    uiId: string
    
    uiVersion: string
    
    ui: string
    
    rnFind: boolean
    
    uiType: string
    
    uiName: string
    
    i18nTime: number
    
    supportGroup: boolean
    
    supportSGroup: boolean
    
    configMetas: any
    
    productVer: string
    
    attributeString: string
  }

  export type Mesh = {
    
    meshId: string
  }

  export type DeviceOnline = {
    
    deviceId: string
    
    onlineType: number
  }

  export type DeviceOnlineParam = {
    
    deviceId: string
  }

  export type DpsPublish = {
    
    deviceId: string
    
    dps: any
    
    mode: number
    
    pipelines: number[]
    
    options: any
  }

  export type QueryDps = {
    
    deviceId: string
    
    dpIds: number[]
    
    queryType?: number
  }

  export type MqttMessage = {
    
    message: any
    
    deviceId: string
    
    protocol: number
    
    options: any
  }

  export type LanMessageParams = {
    
    message: string
    
    deviceId: string
    
    protocol: number
    
    options?: any
  }

  export type SocketMessage = {
    
    message: any
    
    deviceId: string
    
    type: number
    
    options: any
  }

  export type DeviceProperties = {
    
    properties: any
  }

  export type DeviceProperty = {
    
    deviceId: string
    
    code: string
    
    value: string
  }

  export type DevicePropertyCB = {
    
    deviceId: string
    
    result: boolean
  }

  export type SyncDeviceInfoParams = {
    
    deviceId: string
  }

  export type SubscribeDeviceRemovedParams = {
    
    deviceId: string
  }

  export type UnSubscribeDeviceRemovedParams = {
    
    deviceId: string
  }

  export type MQTTDeviceListenerParams = {
    
    deviceId: string
  }

  export type MQTTProtocolListenerParams = {
    
    protocol: number
  }

  export type DeviceListListenerParams = {
    
    deviceIdList: string[]
  }

  export type TopicListListenerParams = {
    
    topicList: string[]
  }

  export type AdvancedCapabilityParams = {
    
    resId: string
    
    dpCodes: string[]
    
    type: string
    
    spaceId: number
  }

  export type TranslateAdvancedCapabilityParams = {
    
    resId: string
    
    dps: OriginalDps[]
    
    type: string
  }

  export type TranslateAdvancedCapabilityResponse = {
    
    advancedCapability: TranslateAdvancedCapability[]
  }

  export type LowPowerDeviceAwakeParams = {
    
    deviceId: string
    
    timeout: number
  }

  export type LowPowerDeviceAwakeResponse = {
    
    awakeRsp: number
  }

  export type ReplaceDeviceModel = {
    
    deviceId: string
  }

  export type SubDeviceIdList = {
    
    result: string[]
  }

  export type SubDeviceReplaceParams = {
    
    defaultSubDeviceId: string
    
    replaceSubDevId: string
    
    deleteOriginal: boolean
    
    timeout: number
  }

  export type SubDevReplaceRequestResult = {
    
    jobId: number
  }

  export type JobIdModel = {
    
    defaultSubDeviceId: string
    
    jobId: string
  }

  export type JobModel = {
    
    jobId: number
    
    operatorUid: string
    
    groupId: number
    
    gwId: string
    
    existFaultSubDevGwId: string
    
    faultSubDevId: string
    
    replaceSubDevId: string
    
    type: number
    
    currentStatus: string
    
    result: string
    
    failReason: string
  }

  export type BTActivateParams = {
    
    productKey: string
    
    btName: string
    
    homeId: number
    
    mac: string
  }

  export type SupportDeviceServices = {
    
    clientServices?: string[]
    
    serverServices?: string[]
  }

  export type ServiceAlignParams = {
    
    devId: string
    
    service: string
  }

  export type ServiceDiscoveryParams = {
    
    devId: string
    
    service: string
  }

  export type ThirdPartyDiscoveryParams = {
    
    devId: string
    
    timeout: number
  }

  export type ThirdPartyConfirmParams = {
    
    devId: string
    
    ip: string
    
    port: number
    
    server_name: string
    
    type: string
  }

  export type ThirdPartyCancelParams = {
    
    devId: string
    
    client: string
    
    server: ThirdPartyServerInfo
  }

  export type ProvisioningInfo = {
    
    deviceId: string
    
    appPackageName: string
    
    baseUrl: string
    
    protocolVersion: string
    
    actionType: number
    
    subType: number
  }

  export type GenerateSecureRandomBytesParams = {
    
    length: number
  }

  export type NfcCardAction = {
    
    action: string
    
    uid: string
    
    devId: string
    
    isAdmin: boolean
    
    memberId: number
    
    phoneKey: string
    
    hardwareId: number
  }

  export type FindNfcCardActionParams = {
    
    uid: string
    
    devId: string
  }

  export type NfcStatusResponse = {
    
    status: string
  }

  export type DeviceDetailInfoReq = {
    
    deviceId: string
  }

  export type DeviceDetailInfoResp = {
    
    deviceId: string
    
    iccid: string
    
    imei: string
    
    netStrength: string
    
    lanIp: string
    
    ip: string
    
    mac: string
    
    timezone: string
    
    channel: string
    
    connectAbility: DeviceDetailConnectAbility
    
    rsrp: number
    
    wifiSignal: number
    
    vendorName: string
    
    meta: any
    
    matterCode: string
    
    matterQRCode: string
    
    homekitCode: string
  }

  export type CubeConfigRes = {
    
    isSupport: boolean
    
    miniAppUrl: string
  }

  export type OTAUpdateInfoParams = {
    
    deviceId: string
  }

  export type GetOTAUpdateInfoParams = {
    
    deviceId: string
    
    extra?: DirectlyDeviceExtraParams[]
  }

  export type DeviceDetailParams = {
    
    deviceId: string
  }

  export type GroupDetailParams = {
    
    groupId: string
  }

  export type TimerParams = {
    
    deviceId: string
    
    category: string
    
    repeat?: number
    
    data: {}[]
    
    timerConfig?: TimerConfig
  }

  export type GroupTimerParams = {
    
    groupId: string
    
    category: string
    
    repeat?: number
    
    data: {}[]
    
    timerConfig?: TimerConfig
  }

  export type WifiNetworkParams = {
    
    deviceId: string
  }

  export type SyncTimerParams = {
    
    deviceId?: string
    
    groupId?: string
    
    category: string
  }

  export type SyncTimerResult = {
    
    timers: TimerModel[]
  }

  export type AddTimerParams = {
    
    deviceId?: string
    
    groupId?: string
    
    category: string
    
    timer: AddTimerModel
  }

  export type AddNewTimerModel = {
    
    timerId: string
  }

  export type UpdateTimerParams = {
    
    deviceId?: string
    
    groupId?: string
    
    timer: UpdateTimerModel
  }

  export type UpdateTimerStatusParams = {
    
    deviceId?: string
    
    groupId?: string
    
    timerId: string
    
    status: boolean
  }

  export type RemoveTimerParams = {
    
    deviceId?: string
    
    groupId?: string
    
    timerId: string
  }

  export type GetShareDeviceInfoParams = {
    
    deviceId: string
  }

  export type GetShareDeviceInfoResponse = {
    
    name: string
    
    mobile: string
    
    email: string
  }

  export type OpenDeviceEditParams = {
    
    deviceId: string
  }

  export type OpenGroupEditParams = {
    
    groupId: string
  }

  export type OpenDeviceInfoParams = {
    
    deviceId: string
  }

  export type IsDeviceSupportOfflineReminderParams = {
    
    deviceId: string
  }

  export type IsDeviceSupportOfflineReminderResponse = {
    
    isSupport: boolean
  }

  export type GetDeviceOfflineReminderStateParams = {
    
    deviceId: string
  }

  export type GetDeviceOfflineReminderStateResponse = {
    
    state: number
  }

  export type ToggleDeviceOfflineReminderParams = {
    
    deviceId: string
    
    state: number
  }

  export type GetDeviceOfflineReminderWarningTextResponse = {
    
    warningText: string
  }

  export type OpenShareDeviceParams = {
    
    deviceId: string
  }

  export type AddDeviceToDeskParams = {
    
    deviceId: string
  }

  export type RemoveShareDeviceParams = {
    
    deviceId: string
  }

  export type GetSupportedThirdPartyServicesParams = {
    
    deviceId: string
  }

  export type GetSupportedThirdPartyServicesResponse = {
    
    services: ThirdPartyService[]
  }

  export type ConfigurationResponse = {
    
    customConfiguration: {}[]
    
    hasImplFunctionList: string[]
  }

  export type SubFunctionShowParams = {
    
    ids: string[]
    
    deviceId?: string
    
    groupId?: number
  }

  export type SubFunctionShowResponse = {
    
    showStateList: SubFunctionShowState[]
  }

  export type SubFunctionExtShowData = {
    
    id: string
    
    data?: any
  }

  export type GetRemoteRebootTimersParams = {
    
    deviceId: string
  }

  export type GetRemoteRebootTimersResult = {
    
    timers: RemoteRebootTimers[]
  }

  export type SpaceParams = {
    
    spaceId: number
  }

  export type GetDeviceNetworkManagerParams = {
    
    contextId?: string
    
    deviceId: string
  }

  export type CheckBackupNetworkAbilityParams = {
    
    contextId: string
  }

  export type CheckBackupNetworkAbilityResponse = {
    
    result: boolean
  }

  export type GetCurrentNetworkInfoParams = {
    
    contextId: string
  }

  export type GetCurrentNetworkInfoResponse = {
    
    info: NetworkInfo
  }

  export type GetBackupNetworkInfosParams = {
    
    contextId: string
  }

  export type GetBackupNetworkInfosResponse = {
    
    infos: NetworkBackupModel[]
    
    maxNum: number
  }

  export type GenerateBackupNetworkInfoParams = {
    
    contextId: string
    
    wifiInfo: WifiInfo
  }

  export type GenerateBackupNetworkInfoResponse = {
    
    info: NetworkBackupModel
  }

  export type CheckWhetherCanUpdateBackupNetworkParams = {
    
    contextId: string
    
    info: NetworkInfo
  }

  export type CheckWhetherCanUpdateBackupNetworkResponse = {
    
    result: boolean
  }

  export type UpdateBackupNetworkParams = {
    
    contextId: string
    
    networks: NetworkBackupModel[]
  }

  export type CheckWhetherCanSwitchBackupNetworkParams = {
    
    contextId: string
    
    info: NetworkInfo
  }

  export type CheckWhetherCanSwitchBackupNetworkResponse = {
    
    result: boolean
  }

  export type SwitchBackupNetworkParams = {
    
    contextId: string
    
    hashValue?: string
    
    wifiInfo?: WifiInfo
  }

  export type UiComponent = {
    
    code: string
    
    version: string
    
    sort: number
    
    content?: string
    
    fileSize?: string
    
    fileMd5?: string
  }

  export type UiInfo = {
    
    phase?: string
    
    type?: string
    
    ui?: string
    
    appRnVersion?: string
    
    name?: string
    
    rnFind?: boolean
    
    uiConfig?: any
    
    content?: string
    
    fileSize?: string
    
    fileMd5?: string
    
    rnBizPack?: number
    
    bizClientId?: string
    
    uiComponentList?: UiComponent[]
  }

  export type RNPanelInfo = {
    
    uiid?: string
    
    uiInfo?: UiInfo
    
    androidUiInfo?: UiInfo
    
    i18nTime?: number
  }

  export type MiniInfo = {
    
    extraMiniInfo?: any
  }

  export type ExtraPanelInfo = {
    
    rnPanelInfo?: RNPanelInfo
    
    miniInfo?: MiniInfo
  }

  export type RecommendSceneParams = {
    
    source: string
    
    sceneModel: any
  }

  export type RecommendSceneCallBack = {
    
    status?: boolean
    
    type: number
    
    data?: any
  }

  export type OpenDeviceExecutionAndAnutomationParams = {
    
    deviceId: string
    
    title?: string
  }

  export type SaveSceneActionParams = {
    
    deviceId: string
    
    taskPosition: number
    
    actionExecutor?: string
    
    executorProperty: any
    
    extraProperty: any
    
    actionDisplayNew: any
  }

  export type ActionParams = {
    
    createType: string
    
    smartType: string
    
    actionArray: SceneAction[]
  }

  export type ActionResponse = {
    
    actionArray: SceneAction[]
  }

  export type EditActionParams = {
    
    editIndex: string
    
    smartType: string
    
    actionArray: SceneAction[]
  }

  export type SceneDialogParams = {
    
    smartType?: string
    
    color?: string
    
    icon?: string
    
    image?: string
  }

  export type SceneDialogResponse = {
    
    color?: string
    
    icon?: string
    
    image?: string
  }

  export type PreConditionPageParams = {
    
    id?: string
    
    condType?: string
    
    expr?: Expr
  }

  export type PreConditionPageResponse = {
    
    id: string
    
    condType: string
    
    expr: Expr
  }

  export type ConditionParams = {
    
    type: string
    
    condition?: string
    
    conditions?: string
    
    index?: number
  }

  export type ConditionResponse = {
    
    type?: string
    
    condition?: string
    
    index?: number
  }

  export type SelectRoomParams = {
    
    stickyOnTop?: boolean
    
    rooms?: string[]
  }

  export type OpenParams = {
    
    identifier: string
    
    userInfo?: string
  }

  export type OpenMiniResponse = {
    
    identifier: string
    
    data?: string
  }

  export type CheckSupportShareParams = {
    
    resId: string
    
    resType: number
  }

  export type CheckSupportShareResponse = {
    
    support: boolean
  }

  export type GetRemainingShareTimesParams = {
    
    resId: string
    
    resType: number
  }

  export type GetRemainingShareTimesResponse = {
    
    times: number
  }

  export type AddReceiverParams = {
    
    resId: string
    
    resType: number
    
    spaceId: number
    
    countryCode?: string
    
    userAccount: string
  }

  export type AddReceiverResponse = {
    
    memberId: number
    
    nickName: string
    
    userName: string
  }

  export type RemoveReceiverParams = {
    
    resId: string
    
    resType: number
    
    memberId: number
  }

  export type GetReceiversParams = {
    
    resId: string
    
    resType: number
    
    page: number
    
    pageSize: number
  }

  export type GetReceiversResponse = {
    
    receivers: Receiver[]
    
    total: number
  }

  export type UpdateShareExpirationDateParams = {
    
    resId: string
    
    resType: number
    
    memberId: number
    
    shareMode: number
    
    endTime: number
  }

  export type GetRelationMembersResponse = {
    
    members: Member[]
  }

  export type RemoveRelationMemberParams = {
    
    uid: string
  }

  export type CreateShareInfoParams = {
    
    resId: string
    
    resType: number
    
    spaceId: number
    
    shareType: number
    
    shareCount: number
  }

  export type CreateShareInfoResponse = {
    
    content: string
    
    code: string
    
    shortUrl: string
  }

  export type ValidateShareCodeParams = {
    
    code: string
  }

  export type ValidateShareCodeResponse = {
    
    result: boolean
    
    originResult: any
  }

  export type GetShareCodeInfoParams = {
    
    code: string
  }

  export type GetShareCodeInfoResponse = {
    
    appId: string
    
    resId: string
    
    resType: number
    
    resIcon: string
    
    resName: string
    
    nickName: string
    
    shareSource: number
    
    spaceId: number
  }

  export type AcceptShareInviteParams = {
    
    code: string
  }

  export type RemoveReceivedDeviceOrGroupParams = {
    
    resId: string
    
    resType: number
  }

  export type GetSharersResponse = {
    
    sharers: Sharer[]
  }

  export type GetSharerNameOfDeviceOrGroupParams = {
    
    resId: string
    
    resType: number
  }

  export type GetSharerNameOfDeviceOrGroupResponse = {
    
    userName: string
  }

  export type GetSharerDetailParams = {
    
    memberId: number
  }

  export type GetSharerDetailResponse = {
    
    memberId: number
    
    account: string
    
    name: string
    
    remarkName: string
    
    devices: SharerDevice[]
  }

  export type RemoveSharerParams = {
    
    memberId: number
  }

  export type UpdateSharerParams = {
    
    memberId: number
    
    name: string
  }

  export type SupportGoogleHomeShareParams = {
    
    devId: string
  }

  export type GetGoogleHomeShareResponse = {
    
    support: boolean
  }

  export type StartGoogleHomeShareParams = {
    
    devId: string
  }

  export type DeviceListResponse = {
    
    groupId: string
    
    deviceList: DeviceInfo_0OLqTL[]
  }

  export type DeviceNumResponse = {
    
    groupId: string
    
    deviceNum: number
    
    devieNum: number
  }

  export type DpCodeParams = {
    
    groupId: string
    
    dpCode: string
  }

  export type SigMeshMultiDpDataParams = {
    
    groupId: string
    
    localId: string
    
    dps: any
    
    pcc: string
  }

  export type MeshLocalGroupParams = {
    
    deviceId: string
    
    localId: string
    
    vendorIds: string
    
    type?: string
    
    pccs?: string[]
    
    codes?: string[]
    
    categoryCode?: string
    
    isSupportLowPower?: boolean
  }

  export type GroupIdListBean = {
    
    groupIdList: string[]
  }

  export type GroupInfoList = {
    
    groupInfoList: GroupInfo[]
  }

  export type GetGroupPropertyResponse = {
    
    result: any
  }

  export type SetGroupPropertyBean = {
    
    groupId: string
    
    code: string
    
    value: string
  }

  export type Device_D8CyDL = {
    
    deviceId: string
  }

  export type Space = {
    
    spaceId: string
  }

  export type MatterManualCode = {
    
    matterCode: string
  }

  export type MatterActivatorParam = {
    
    matterCode: string
    
    gwID: string
    
    spaceID: string
  }

  export type NodeParams = {
    
    nodeId: string
    
    deviceId: string
  }

  export type DeviceResult = {
    
    deviceId: string
  }

  export type DpDataParams = {
    
    deviceId: string
    
    dpIds: Object[]
  }

  export type CheckOTAUpgradeStatusParams = {
    
    deviceId: string
  }

  export type CheckOTAUpgradeStatusResponse = {
    
    status: number
  }

  export type OtaStatusResponse = {
    
    status: number
  }

  export type OpenOTAUpgradeParams = {
    
    deviceId: string
  }

  export type GetRemoteRebootManagerParams = {
    
    contextId?: string
    
    deviceId: string
  }

  export type CheckRebootAbilityParams = {
    
    contextId: string
  }

  export type CheckRebootAbilityResponse = {
    
    result: boolean
  }

  export type RebootImmediatelyParams = {
    
    contextId: string
  }

  export type AddRebootTimerParams = {
    
    contextId: string
    
    timer: AddTimer
  }

  export type AddRebootTimerResponse = {
    
    tid: string
  }

  export type UpdateRebootTimerParams = {
    
    contextId: string
    
    timer: UpdateTimer
  }

  export type GetRebootTimerParams = {
    
    contextId: string
  }

  export type GetRebootTimerResponse = {
    
    timer: Timer
  }

  export type ThingProperty = {
    
    abilityId: number
    
    accessMode: string
    
    typeSpec: any
    
    defaultValue: {}
    
    code: string
  }

  export type ThingAction = {
    
    abilityId: number
    
    inputParams: {}[]
    
    outputParams: {}[]
    
    code: string
  }

  export type ThingEvent = {
    
    abilityId: number
    
    outputParams: {}[]
    
    code: string
  }

  export type DeviceIsSupportThingModelParams = {
    
    devId: string
  }

  export type DeviceIsSupportThingModelResponse = {
    
    isSupport: boolean
  }

  export type UpdateThingModelInfoParams = {
    
    pid: string
    
    productVersion: string
  }

  export type GetDeviceThingModelInfoParams = {
    
    devId: string
  }

  export type GetDeviceThingModelInfoResponse = {
    
    modelId: string
    
    productId: string
    
    productVersion: string
    
    services: ServiceModel[]
    
    extensions: any
  }

  export type PublishThingModelMessageParams = {
    
    devId: string
    
    type: number
    
    payload: any
  }

  export type SubscribeReceivedThingModelMessageParams = {
    
    devId: string
  }

  export type UnSubscribeReceivedThingModelMessageParams = {
    
    devId: string
  }

  export type InitReq = {
    
    pid: string
  }

  export type InitRes = {
    
    devId: string
  }

  
  interface BackupNetworkContext {
    
    checkBackupNetworkAbility(params: {
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

    
    getCurrentNetworkInfo(params: {
      success?: (params: {
        
        info: NetworkInfo
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

    
    getBackupNetworkInfos(params: {
      success?: (params: {
        
        infos: NetworkBackupModel[]
        
        maxNum: number
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

    
    generateBackupNetworkInfo(params: {
      
      wifiInfo: WifiInfo
      success?: (params: {
        
        info: NetworkBackupModel
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

    
    checkWhetherCanUpdateBackupNetwork(params: {
      
      info: NetworkInfo
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

    
    updateBackupNetwork(params: {
      
      networks: NetworkBackupModel[]
      success?: (params: null) => void
      fail?: (params: {
        errorMsg: string
        errorCode: string | number
        innerError: {
          errorCode: string | number
          errorMsg: string
        }
      }) => void
      complete?: () => void
    }): void

    
    checkWhetherCanSwitchBackupNetwork(params: {
      
      info: NetworkInfo
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

    
    switchBackupNetwork(params: {
      
      hashValue?: string
      
      wifiInfo?: WifiInfo
      success?: (params: null) => void
      fail?: (params: {
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
  
  export function getDeviceNetworkManager(params: {
    
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
  }): BackupNetworkContext

  
  interface RemoteRebootContext {
    
    checkRebootAbility(params: {
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

    
    rebootImmediately(params: {
      success?: (params: null) => void
      fail?: (params: {
        errorMsg: string
        errorCode: string | number
        innerError: {
          errorCode: string | number
          errorMsg: string
        }
      }) => void
      complete?: () => void
    }): void

    
    addRebootTimer(params: {
      
      timer: AddTimer
      success?: (params: {
        
        tid: string
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

    
    updateRebootTimer(params: {
      
      timer: UpdateTimer
      success?: (params: null) => void
      fail?: (params: {
        errorMsg: string
        errorCode: string | number
        innerError: {
          errorCode: string | number
          errorMsg: string
        }
      }) => void
      complete?: () => void
    }): void

    
    getRebootTimer(params: {
      success?: (params: {
        
        timer: Timer
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
  }
  
  export function getRemoteRebootManager(params: {
    
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
  }): RemoteRebootContext
}
