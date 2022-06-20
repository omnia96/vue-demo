export class RuntimeEnv {
  /**
   * 微信webview
   * @return {boolean}
   */
  static isWeChat() {
    return (/MicroMessenger/i.test(window.navigator.userAgent));
  }
  /**
   * Android系统
   * @return {boolean}
   */
  static isAndroid() {
    return /Android/i.test(navigator.userAgent) || /Linux/i.test(navigator.appVersion);
  }
  /**
   * 苹果手机
   * @return {boolean}
   */
  static isIphone() {
    return /iPhone/i.test(navigator.userAgent);
  }
  /**
   * Ios系统
   * @return {boolean}
   */
  static isIOS() {
    return (/ipad|iphone/i.test(navigator.userAgent));
  }
  /**
   * Safari浏览器
   * @return {boolean}
   */
  static isSafari() {
    return (/msie|applewebkit.+safari/i.test(navigator.userAgent));
  }
  /**
   * Windows
   * @return {boolean}
   */
  static isWindows() {
    return /windows|win32/i.test(navigator.userAgent);
  }
  /**
   * Mac
   * @return {boolean}
   */
  static isMac() {
    return /macintosh|mac os x/i.test(navigator.userAgent);
  }
  static isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }
}
