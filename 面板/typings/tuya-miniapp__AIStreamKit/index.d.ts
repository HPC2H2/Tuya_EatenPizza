
declare namespace ty.aistream {
  
  export function isConnected(params: {
    
    clientType: number
    
    deviceId?: string
    success?: (params: {
      
      connected: boolean
      
      state: number
      
      clientType?: number
      
      connectionId?: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function isConnectedSync(params?: ConnectParams): {
    
    connected: boolean
    
    state: number
    
    clientType?: number
    
    connectionId?: string
  }

  
  export function connect(params: {
    
    clientType: number
    
    deviceId?: string
    success?: (params: {
      
      connectionId: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function queryAgentToken(params: {
    
    ownerId?: string
    
    solutionCode: string
    
    api: string
    
    apiVersion?: string
    
    extParams: any
    success?: (params: {
      
      agentToken: string
      
      bizConfig: BizConfig
      
      extParams: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function createSession(params: {
    
    bizTag?: number
    
    agentToken: string
    
    sessionId?: string
    
    bizConfig: BizConfig
    
    userData?: Attribute[]
    
    userDataJson?: string
    
    reuseDataChannel?: boolean
    success?: (params: {
      
      sessionId: string
      
      sendDataChannels: string[]
      
      revDataChannels: string[]
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function closeSession(params: {
    
    sessionId: string
    
    code: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function disconnect(params: {
    
    connectionId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function sendEventStart(params: {
    
    sessionId: string
    
    userData?: Attribute[]
    
    userDataJson?: string
    
    eventIdPrefix?: string
    success?: (params: {
      
      eventId: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function sendEventPayloadEnd(params: {
    
    eventId: string
    
    sessionId: string
    
    dataChannel: string
    
    userData?: Attribute[]
    
    userDataJson?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function sendEventEnd(params: {
    
    eventId: string
    
    sessionId: string
    
    userData?: Attribute[]
    
    userDataJson?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function sendEventChatBreak(params: {
    
    eventId: string
    
    sessionId: string
    
    userData?: Attribute[]
    
    userDataJson?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function initAudioRecorder(params?: {
    
    sampleRate?: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function startRecordAndSendAudioData(params: {
    
    sessionId: string
    
    dataChannel?: string
    
    userData?: Attribute[]
    
    saveFile?: boolean
    
    recordInitParams?: RecordInitParams
    
    userDataJson?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function stopRecordAndSendAudioData(params: {
    
    sessionId: string
    
    dataChannel?: string
    
    userData?: Attribute[]
    
    saveFile?: boolean
    
    recordInitParams?: RecordInitParams
    
    userDataJson?: string
    success?: (params: {
      
      path?: string
      
      codecType: number
      
      sampleRate: number
      
      channels: number
      
      bitDepth: number
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function sendImageData(params: {
    
    sessionId: string
    
    dataChannel?: string
    
    path: string
    
    format: number
    
    userData?: Attribute[]
    
    userDataJson?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function sendTextData(params: {
    
    sessionId: string
    
    dataChannel?: string
    
    text: string
    
    userData?: Attribute[]
    
    userDataJson?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function queryRecordList(params?: {
    
    id?: number[]
    
    bizCode?: number[]
    
    solutionCode?: string[]
    
    devId?: string[]
    
    homeId?: number[]
    
    type?: string[]
    
    index?: string[]
    
    index1?: string[]
    
    index2?: string[]
    
    offset?: number
    
    limit?: number
    
    sortType?: number
    success?: (params: {
      
      records: RecordBody[]
      
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

  
  export function deleteRecordList(params?: {
    
    id?: number[]
    
    bizCode?: number[]
    
    solutionCode?: string[]
    
    devId?: string[]
    
    homeId?: number[]
    
    type?: string[]
    
    index?: string[]
    
    index1?: string[]
    
    index2?: string[]
    
    offset?: number
    
    limit?: number
    
    sortType?: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function updateRecord(params?: {
    
    id?: number
    
    bizCode?: number
    
    solutionCode?: string
    
    devId?: string
    
    homeId?: number
    
    type?: string
    
    index?: string
    
    index1?: string
    
    index2?: string
    
    data?: string
    
    value?: string
    
    value1?: string
    
    value2?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function insertRecord(params?: {
    
    id?: number
    
    bizCode?: number
    
    solutionCode?: string
    
    devId?: string
    
    homeId?: number
    
    type?: string
    
    index?: string
    
    index1?: string
    
    index2?: string
    
    data?: string
    
    value?: string
    
    value1?: string
    
    value2?: string
    success?: (params: {
      
      id: number
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function registerRecordAmplitudes(params: {
    
    count: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function unregisterVoiceAmplitudes(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function startPlayAudio(params: {
    
    path: string
    
    codecType: number
    
    sampleRate: number
    
    channels: number
    
    bitDepth: number
    
    pts?: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function stopPlayAudio(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function onEventReceived(listener: (params: EventBody) => void): void

  
  export function offEventReceived(listener: (params: EventBody) => void): void

  
  export function onAudioReceived(listener: (params: AudioBody) => void): void

  
  export function offAudioReceived(listener: (params: AudioBody) => void): void

  
  export function onImageReceived(listener: (params: ImageBody) => void): void

  
  export function offImageReceived(listener: (params: ImageBody) => void): void

  
  export function onTextReceived(listener: (params: TextBody) => void): void

  
  export function offTextReceived(listener: (params: TextBody) => void): void

  
  export function onConnectStateChanged(
    listener: (params: ConnectStateBody) => void
  ): void

  
  export function offConnectStateChanged(
    listener: (params: ConnectStateBody) => void
  ): void

  
  export function onSessionStateChanged(
    listener: (params: SessionStateBody) => void
  ): void

  
  export function offSessionStateChanged(
    listener: (params: SessionStateBody) => void
  ): void

  
  export function onRecordAmplitudes(
    listener: (params: RecordAmplitudesBody) => void
  ): void

  
  export function offRecordAmplitudes(
    listener: (params: RecordAmplitudesBody) => void
  ): void

  
  export function onAudioPlayChanged(
    listener: (params: AudioPlayChangedBody) => void
  ): void

  
  export function offAudioPlayChanged(
    listener: (params: AudioPlayChangedBody) => void
  ): void

  
  export function onRecordAndSendAudioFail(
    listener: (params: RecordAndSendAudioFailBody) => void
  ): void

  
  export function offRecordAndSendAudioFail(
    listener: (params: RecordAndSendAudioFailBody) => void
  ): void

  export type ConnectParams = {
    
    clientType: number
    
    deviceId?: string
  }

  export type BizConfig = {
    
    bizCode: number
    
    sendData: string[]
    
    revData: string[]
  }

  export type Attribute = {
    
    type: number
    
    payloadType: number
    
    value: string
  }

  export type RecordInitParams = {
    
    sampleRate?: number
  }

  export type RecordBody = {
    
    id?: number
    
    bizCode?: number
    
    solutionCode?: string
    
    devId?: string
    
    homeId?: number
    
    type?: string
    
    index?: string
    
    index1?: string
    
    index2?: string
    
    data?: string
    
    value?: string
    
    value1?: string
    
    value2?: string
  }

  export type EventBody = {
    
    eventId: string
    
    sessionId: string
    
    eventType: number
    
    userData?: Attribute[]
    
    userDataJson?: string
  }

  export type AudioBody = {
    
    dataChannel: string
    
    streamFlag: number
    
    path: string
    
    userData?: Attribute[]
    
    userDataJson?: string
    
    sessionIdList?: string[]
    
    pts?: number
    
    codecType?: number
    
    sampleRate?: number
    
    channels?: number
    
    bitDepth?: number
  }

  export type ImageBody = {
    
    dataChannel: string
    
    streamFlag: number
    
    path: string
    
    format: number
    
    width: number
    
    height: number
    
    userData?: Attribute[]
    
    userDataJson?: string
    
    sessionIdList?: string[]
  }

  export type TextBody = {
    
    dataChannel: string
    
    streamFlag: number
    
    text: string
    
    userData?: Attribute[]
    
    userDataJson?: string
    
    sessionIdList?: string[]
  }

  export type ConnectStateBody = {
    
    connectionId: string
    
    connectState: number
    
    code?: number
  }

  export type SessionStateBody = {
    
    sessionId: string
    
    sessionState: number
    
    code?: number
  }

  export type RecordAmplitudesBody = {
    
    amplitudes: number[]
  }

  export type AudioPlayChangedBody = {
    
    path: string
    
    state: number
    
    code?: number
  }

  export type RecordAndSendAudioFailBody = {
    
    code: number
  }
}
