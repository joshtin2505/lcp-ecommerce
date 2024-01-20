export type Color = `#${string}` | `Color${number}`
export type Theme = 'light' | 'dark'
// ----------------------->
export interface GrupoColor { 
    Color300 : Color,
    Color400 : Color,
    Color500 : Color,
    Color600 : Color,
    Color700 : Color,
}
export interface BgColor {
    pBgroundColor : Color,
    sBgroundColor : Color,
    tBgroundColor : Color,
    qBgroundColor : Color
}
export interface TxtColor {
    primaryTextColor : Color,
    secondaryTextColor : Color,
    tertiaryTextColor : Color,
    quaternaryTextColor : Color
}
export interface StatColor {
    successColor : Color,
    warningColor : Color,
    dangerColor : Color,
    infoColor : Color,
    normalColor: Color        
}
// ------------------------>
export interface ThemeColor {
    primary : GrupoColor
    secondary : GrupoColor
    tertiary : GrupoColor
    backgroundColor : BgColor
    textColor: TxtColor
    statusColor: StatColor
}