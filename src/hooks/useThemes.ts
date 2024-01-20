import { BgColor, GrupoColor, StatColor, Theme, ThemeColor, TxtColor } from "@/types.d"
import { useState } from "react"
const lightTheme: ThemeColor = {
  primary: {
    Color300: '#209BAF',
    Color400: '#108295',
    Color500: '#00697A',
    Color600: '#005462',
    Color700: '#003F49'
  },
  secondary: {
    Color300: '#A9D3CF',
    Color400: '#90C6C0',
    Color500: '#76B9B2',
    Color600: '#66A29C',
    Color700: '#568C86'
  },
  tertiary: {
    Color300: '#CEE8EC',
    Color400: '#BEE0E5',
    Color500: '#AED8DF',
    Color600: '#97C8D0',
    Color700: '#80B8C1'
  },
  backgroundColor: {
    pBgroundColor: '#FBF8F4',
    sBgroundColor: '#A3F2FF',
    tBgroundColor: '#E4F1F0',
    qBgroundColor: '#EFF7F9',
  },
  textColor: {
    primaryTextColor: '#181818',
    secondaryTextColor: '#212121',
    tertiaryTextColor: '#424242',
    quaternaryTextColor: '#67676767',
  },
  statusColor: {
    successColor : '#00c851',
    warningColor : '#ffbb33',
    dangerColor : '#ff4444',
    infoColor : '#2573e8',
    normalColor: '#969696' 
  }
}
const darkTheme: ThemeColor = {
  primary: {
    Color300: '#209BAF',
    Color400: '#108295',
    Color500: '#00697A',
    Color600: '#005462',
    Color700: '#003F49'
  },
  secondary: {
    Color300: '#A9D3CF',
    Color400: '#90C6C0',
    Color500: '#76B9B2',
    Color600: '#66A29C',
    Color700: '#568C86'
  },
  tertiary: {
    Color300: '#CEE8EC',
    Color400: '#BEE0E5',
    Color500: '#AED8DF',
    Color600: '#97C8D0',
    Color700: '#80B8C1'
  },
  backgroundColor: {
    pBgroundColor: '#3C494A',
    sBgroundColor: '#001518',
    tBgroundColor: '#192928',
    qBgroundColor: '#213A3D',
  },
  textColor: {
    primaryTextColor: '#F4F4F4',
    secondaryTextColor: '#E0E0E0',
    tertiaryTextColor: '#BDBDBD',
    quaternaryTextColor: '#9E9E9E',
  },
  statusColor: {
    successColor : '#007e33',
    warningColor : '#ff8800',
    dangerColor : '#cc0000',
    infoColor : '#0344a6',
    normalColor: '#787878' 
  }
}
const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light')
    if (!theme ) {
      throw new Error('No hay un theme')
    }
    else if(theme === "light") {
      setCssTheme({themeColors: lightTheme})
      return setTheme
    }
    else if (theme === "dark") {
      setCssTheme({themeColors: darkTheme})
      return setTheme
    }
}
function setCssTheme({themeColors}: {themeColors: ThemeColor}) {
  if (typeof document !== 'undefined'){ // this runtime in client
    const rootElement = document.documentElement
    const style = rootElement.style
    // Colors keys
    const primaryColorKey = Object.keys(themeColors.primary)
    const secondaryColorKey = Object.keys(themeColors.secondary)
    const tertiaryColorKey = Object.keys(themeColors.tertiary)
    const bgColorKey = Object.keys(themeColors.backgroundColor)
    const TextColorKey = Object.keys(themeColors.textColor)
    const statusColorsKey = Object.keys(themeColors.statusColor)



    setColors({
      color:themeColors.primary,
      keyPrfix:'primary',
      key: primaryColorKey, 
      style, 
      status: themeColors.statusColor, 
      statusKey: statusColorsKey
    })
    setColors({
      color:themeColors.secondary, 
      keyPrfix:'secondary',
      key: secondaryColorKey, 
      style,
      text: themeColors.textColor,
      textKey: TextColorKey
    })
    setColors({
      color:themeColors.tertiary, 
      keyPrfix:'tertiary',
      key: tertiaryColorKey, 
      style, 
      bg: themeColors.backgroundColor, 
      bgKey: bgColorKey
    })
  } 
}
// Set Colors to css
interface SetColorsParams {
  style : CSSStyleDeclaration, 
  color: GrupoColor, 
  keyPrfix: string,
  key: string[],
  bg?: BgColor,
  bgKey? : string[],
  text?: TxtColor,
  textKey? : string[],
  status?: StatColor,
  statusKey? : string[]
}
function setColors({style, color, keyPrfix, key, bg, bgKey, text, textKey, status, statusKey}: SetColorsParams): void{
  style.setProperty(`--${keyPrfix + key[0]}`, color.Color300)
  style.setProperty(`--${keyPrfix + key[1]}`, color.Color400)
  style.setProperty(`--${keyPrfix + key[2]}`, color.Color500)
  style.setProperty(`--${keyPrfix + key[3]}`, color.Color600)
  style.setProperty(`--${keyPrfix + key[4]}`, color.Color700)
  if (bg && bgKey) {
    style.setProperty(`--${bgKey[0]}`, bg.pBgroundColor)
    style.setProperty(`--${bgKey[1]}`, bg.sBgroundColor)
    style.setProperty(`--${bgKey[2]}`, bg.tBgroundColor)
    style.setProperty(`--${bgKey[3]}`, bg.qBgroundColor)
  }
  else if (text && textKey) {
    style.setProperty(`--${textKey[0]}`, text.primaryTextColor)
    style.setProperty(`--${textKey[1]}`, text.secondaryTextColor)
    style.setProperty(`--${textKey[2]}`, text.tertiaryTextColor)
    style.setProperty(`--${textKey[3]}`, text.quaternaryTextColor)
  }
  if (status && statusKey) {
    style.setProperty(`--${statusKey[0]}`, status.successColor)
    style.setProperty(`--${statusKey[1]}`, status.warningColor)
    style.setProperty(`--${statusKey[2]}`, status.dangerColor)
    style.setProperty(`--${statusKey[3]}`, status.infoColor)
    style.setProperty(`--${statusKey[5]}`, status.normalColor)
  }
}
export default useTheme