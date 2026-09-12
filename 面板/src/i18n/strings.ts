export default {
  en: {
    submitText: 'Submit',
    errorTitle: 'Had an accident',
    errorText: 'You can click the button below to provide feedback, and we will handle it.',

    // Device name / brand
    deviceName: 'Eaten Pizza',
    online: 'Online',
    offline: 'Offline',
    syncing: 'Syncing device state…',
    syncFailed: 'Sync failed',
    retry: 'Retry',
    resync: 'Resync',

    // total_duration enum
    duration_min_15: '15 min',
    duration_min_30: '30 min',
    duration_min_45: '45 min',
    duration_min_60: '60 min',
    duration_min_90: '90 min',

    // piece_count enum
    piece_piece_1: '1 piece',
    piece_piece_3: '3 pieces',
    piece_piece_5: '5 pieces',
    piece_piece_6: '6 pieces',
    piece_piece_9: '9 pieces',

    // timer_status enum
    status_idle_not_started: 'Not started',
    status_idle_paused: 'Paused',
    status_running: 'Focusing',
    status_completed: 'Completed',

    // theme enum
    theme_pizza: 'Pizza',
    theme_stars: 'Stars',
    theme_miku: 'Miku',
    theme_custom: 'Custom',

    // image_upload_status enum
    upload_idle: 'Not uploaded',
    upload_receiving: 'Receiving',
    upload_ready: 'Ready',
    upload_error: 'Upload failed',

    // labels / units
    focusDuration: 'Focus duration',
    pieceCount: 'Number of pieces',
    minutesPerPiece: 'min/piece',
    piecesUnit: 'pieces',
    unitPiece: 'piece',
    currentConfigSummary: 'Currently applied',
    draftNotApplied: 'Draft not applied',
    applyConfig: 'Apply configuration',
    applyAndStart: 'Apply & start',

    // status banners
    dataMayBeStale: 'Data may not be up to date',
    deviceOfflineBanner: 'Device offline',
    deviceAnomaly: 'Device state sync anomaly',
    anomalyRetry: 'Resync',
    uploadingKeepOnline: 'Please keep the app and device online',
    waitingConfirm: 'Waiting for device confirmation…',
    inkRefreshHint: 'The e-ink screen is refreshing, this takes about 20s',
    confirmTimeout: 'Device confirmation timed out, please try again',
    deviceRejected: 'The device did not accept this configuration',

    // theme grid
    useThisImage: 'Use this image',
    changeImage: 'Change image',
    reupload: 'Re-upload',
    noLocalPreview: 'Device already has a custom image',
    themeWillApplyNextSession: 'Theme saved, it will show at the next focus session.',
    themeSwitchInkHint: 'Confirmed, the e-ink screen will refresh in about 20s',

    // image pick / crop / preview flow
    chooseImage: 'Choose image',
    imageTooLarge: 'Image exceeds 5MB, please choose another',
    imageFormatUnsupported: 'Unsupported format, please choose JPG/PNG/WebP',
    imageSizeInvalid: 'Choose a square image between 400 and 4096 px',
    imageInfoReadFailed: 'Could not read image information, please choose another',
    confirmSquareImage: 'Confirm square image',
    createSixColorPreview: 'Create six-color preview',
    processingImage: 'Processing image…',
    imageProcessFailed: 'Image processing failed, please choose another image',
    cropImage: 'Crop image',
    sixColorPreview: 'Six-color preview',
    confirmUpload: 'Confirm & upload',
    processorNotReady: 'Image processing module not ready yet',
    reselect: 'Choose again',

    // upload progress / state machine
    uploadProgress: 'Upload progress',
    uploadWaitingReceiving: 'Waiting for device to start receiving…',
    uploadFailedNoReceiving: 'Device did not enter receiving state, please re-upload',
    uploadFailedError: 'Device reported an error, upload failed',
    uploadStalled: 'Upload stalled for too long, please re-upload',
    uploadInterrupted: 'Upload interrupted, please re-upload',
    uploadSucceeded: 'Upload complete, the e-ink screen is refreshing',
    uploadTimeoutNotConfirmed: 'Device did not confirm upload completion, please re-upload',

    // bottom primary button
    startFocus: 'Start focus',
    pauseFocus: 'Pause focus',
    continueFocus: 'Continue focus',
    startAgain: 'Start again',
    confirmPending: 'Waiting for device confirmation',
    deviceOfflineButton: 'Device offline',
    syncingButton: 'Syncing…',
    uploadingButton: 'Uploading image',

    // progress ring
    piecesEatenLabel: 'Progress',
    ringStatusIdleNotStarted: 'Not started',
    ringStatusPaused: 'Paused',
    ringStatusRunning: 'Focusing',
    ringStatusCompleted: 'Completed',
    ringFinishedAllWhite: 'All white',

    // anomaly copy
    anomalyCompletedMismatch: 'Completed state does not match progress',
    anomalyProgressOverflow: 'Progress exceeds piece count',
    anomalyThemeNotReady: 'Custom theme selected but image is not ready',
    anomalyInvalidCombo: 'Duration and piece count combination is invalid',

    // change config while paused
    changeConfigConfirmTitle: 'Change focus configuration?',
    changeConfigConfirmContent: 'Changing configuration will clear current progress. Continue?',
    confirmText: 'Confirm',
    cancelText: 'Cancel',

    // settings entry / nav
    settingsEntry: 'Settings',
    statusEntry: 'Device status',
    deviceInfoEntry: 'Device info',

    // misc
    loading: 'Loading',
    saveSuccess: 'Saved',
    sendFailed: 'Failed, please try again',
  },
  zh: {
    submitText: '提交',
    errorTitle: '发生点意外',
    errorText: '您可以点击下方的按钮反馈给我们，我们将第一时间处理',

    deviceName: '拼好时',
    online: '在线',
    offline: '离线',
    syncing: '正在同步设备状态',
    syncFailed: '同步失败',
    retry: '重试',
    resync: '重新同步',

    duration_min_15: '15分钟',
    duration_min_30: '30分钟',
    duration_min_45: '45分钟',
    duration_min_60: '60分钟',
    duration_min_90: '90分钟',

    piece_piece_1: '1块',
    piece_piece_3: '3块',
    piece_piece_5: '5块',
    piece_piece_6: '6块',
    piece_piece_9: '9块',

    status_idle_not_started: '待开始',
    status_idle_paused: '已暂停',
    status_running: '专注中',
    status_completed: '专注完成',

    theme_pizza: '披萨',
    theme_stars: '星空',
    theme_miku: '初音',
    theme_custom: '自定义',

    upload_idle: '未上传',
    upload_receiving: '接收中',
    upload_ready: '就绪',
    upload_error: '上传失败',

    focusDuration: '专注时长',
    pieceCount: '图块数量',
    minutesPerPiece: '分钟/块',
    piecesUnit: '块',
    unitPiece: '块',
    currentConfigSummary: '当前生效配置',
    draftNotApplied: '草稿未应用',
    applyConfig: '应用配置',
    applyAndStart: '应用并开始',

    dataMayBeStale: '数据可能不是最新',
    deviceOfflineBanner: '设备离线',
    deviceAnomaly: '设备状态同步异常',
    anomalyRetry: '重新同步',
    uploadingKeepOnline: '请保持App和设备在线',
    waitingConfirm: '等待设备确认',
    inkRefreshHint: '墨水屏正在刷新，约需20秒',
    confirmTimeout: '设备确认超时，请重试',
    deviceRejected: '设备未接受本次配置',

    useThisImage: '使用此图片',
    changeImage: '更换图片',
    reupload: '重新上传',
    noLocalPreview: '设备中已有自定义图片',
    themeWillApplyNextSession: '主题已保存，将在下一次专注开始时显示。',
    themeSwitchInkHint: '已确认，墨水屏将在约20秒后刷新',

    chooseImage: '选择图片',
    imageTooLarge: '图片超过5MB，请重新选择',
    imageFormatUnsupported: '不支持的格式，请选择JPG/PNG/WebP',
    imageSizeInvalid: '请选择边长为400～4096像素的正方形图片',
    imageInfoReadFailed: '无法读取图片信息，请重新选择',
    confirmSquareImage: '确认正方形图片',
    createSixColorPreview: '生成六色预览',
    processingImage: '正在处理图片…',
    imageProcessFailed: '图片处理失败，请重新选择图片',
    cropImage: '裁剪图片',
    sixColorPreview: '六色预览',
    confirmUpload: '确认并上传',
    processorNotReady: '图像处理模块尚未就绪',
    reselect: '重新选择',

    uploadProgress: '上传进度',
    uploadWaitingReceiving: '等待设备进入接收状态…',
    uploadFailedNoReceiving: '设备未进入接收状态，请重新上传',
    uploadFailedError: '设备回报错误，上传失败',
    uploadStalled: '上传长时间无法推进，请重新上传',
    uploadInterrupted: '上传被中断，请重新上传',
    uploadSucceeded: '上传完成，墨水屏正在刷新',
    uploadTimeoutNotConfirmed: '设备未确认上传完成，请重新上传',

    startFocus: '开始专注',
    pauseFocus: '暂停专注',
    continueFocus: '继续专注',
    startAgain: '再次开始',
    confirmPending: '等待设备确认',
    deviceOfflineButton: '设备离线',
    syncingButton: '正在同步',
    uploadingButton: '图片上传中',

    piecesEatenLabel: '进度',
    ringStatusIdleNotStarted: '待开始',
    ringStatusPaused: '已暂停',
    ringStatusRunning: '专注中',
    ringStatusCompleted: '专注完成',
    ringFinishedAllWhite: '全白',

    anomalyCompletedMismatch: '完成状态与进度不一致',
    anomalyProgressOverflow: '进度超出图块总数',
    anomalyThemeNotReady: '已选自定义主题但图片未就绪',
    anomalyInvalidCombo: '时长与图块数组合不合法',

    changeConfigConfirmTitle: '修改专注配置？',
    changeConfigConfirmContent: '修改专注配置将清除当前进度，是否继续？',
    confirmText: '确定',
    cancelText: '取消',

    settingsEntry: '设置',
    statusEntry: '设备状态',
    deviceInfoEntry: '设备信息',

    loading: '加载中',
    saveSuccess: '已保存',
    sendFailed: '发送失败，请重试',
  },
};
