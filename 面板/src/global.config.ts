import { GlobalConfig } from '@ray-js/types';

export const tuya = {
  themeLocation: 'theme.json',
  darkmode: 'auto',
  window: {
    backgroundColor: '--app-B1',
    navigationBarTitleText: '',
    navigationBarBackgroundColor: '--app-B2',
    navigationBarTextStyle: '@navTxtStyle',
  },
  functionalPages: {},
};

const globalConfig: GlobalConfig = {
  basename: '',
};

export default globalConfig;
