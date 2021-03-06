## Usecase Design

### 1. The [XWalkPreferencesActivity](XWalkPreferencesActivity.java) sample demonstrates XWALK-2376 feature basic functionalities, include:

* XWalkView can set style value
* XWalkView can get style value

This usecase covers following interface and methods:

* XWalkPreferences interface: setValue, getStringValue, getBooleanValue, getIntegerValue methods



### 2. The [EchoExtensionActivity](EchoExtensionActivity.java) sample demonstrates XWALK-3917 feature basic functionalities, include:

* extension can be supported

These two usecases cover following interface and methods:

* XWalkExtension interface: onMessage, onSyncMessage methods
* XWalkView interface: load method



### 3. The [MultiSurfaceViewsActivity](MultiSurfaceViewsActivity.java) and [MultiTextureViewsActivity](MultiTextureViewsActivity.java) sample demonstrate XWALK-2012 feature basic functionalities, include:

* Multiple surfaceViews can be shown in order at first
* Multiple surfaceViews can be shown in order when rotating the device screen 90 degrees
* Multiple surfaceViews can be shown in order when restoring the device screen
* Multiple textureViews can be shown in order at first
* Multiple textureViews can be shown in order when rotating the device screen 90 degrees
* Multiple textureViews can be shown in order when restoring the device screen

This usecase covers following interface and methods:

* XWalkPreference interface: setValue method
* XWalkView interface: load method



### 4. The [AnimatableXWalkViewActivity](AnimatableXWalkViewActivity.java) sample demonstrates how to use the basic functionalities of animatible XWalkView, include:

* Animatable XWalkView can be scaled down or scaled up

This usecase covers following interface and methods:

* XWalkPreference interface: setValue method
* XWalkView interface: load, getAlpha, getScaleX, getScaleY methods



### 5. The [LoadAppFromManifestLayoutActivity](LoadAppFromManifestLayoutActivity.java) sample demonstrates how to load app from manifest, include:

* XWalkView can load app from manifest

This usecase covers following interface and methods:

* XWalkView interface: loadAppFromManifest methods



### 6. The [MultiXWalkViewActivity](MultiXWalkViewActivity.java) sample demonstrates how to create multi instance, include:

* XWalkView can create multi instance

This usecase covers following interface and methods:

* XWalkView interface: load method



### 7. The [OnHideOnShowActivity](OnHideOnShowActivity.java) sample demonstrates XWalkView can hide and show, include:

* XWalkView can hide when clicking home key
* There is no short white screen displayed when clicking home key
* XWalkView can show when Click the 'EmbeddedAPISamples' app again

This usecase covers following interface and methods:

* XWalkView interface: load method



### 8. The [PauseTimersActivity](PauseTimersActivity.java) sample demonstrates XWalkView can pause timers, include:

* XWalkView can pause timers when it's pauseTimers() method is called
* XWalkView can resume timers when it's resumeTimers() method is called

This usecase covers following interface and methods:

* XWalkView interface: load, pauseTimers, resumeTimers methods



### 9. The [ResourceAndUIClientsActivity](ResourceAndUIClientsActivity.java) sample demonstrates how to set resource client and UI client, include:

* XWalkView can set resource client
* XWalkView can set UI client
* The log record the the implementation methods of resource client and UI client

This usecase covers following interface and methods:

* XWalkView interface: load, setResourceClient, setUIClient methods
* ResourceClient interface: onLoadStarted, onLoadFinished, onProgressChanged, shouldInterceptLoadRequest, onReceivedLoadError methods
* UIClient interface: onJavascriptCloseWindow, onJavascriptModalDialog, onFullscreenToggled, openFileChooser, onScaleChanged methods



### 10. The [XWalkNavigationActivity](XWalkNavigationActivity.java) sample demonstrates how to forward and backward history, include:

* XWalkView can backward history client when go backward button is clicked
* XWalkView can forward history client when go forward button is clicked

This usecase covers following interface and methods:

* XWalkView interface: load, getNavigationHistory methods
* XWalkNavigationHistory interface: canGoForward, navigate, getCurrentItem methods
* XWalkNavigationItem interface: getOriginalUrl, getTitle methods



### 11. The [XWalkVersionAndAPIVersion](XWalkVersionAndAPIVersion.java) sample demonstrates how to get API version and xwalk version, include:

* XWalkView can get and show API version
* XWalkView can get and show xwalk version

This usecase covers following interface and methods:

* XWalkView interface: load, getAPIVersion, getXWalkVersion methods



### 12. The [XWalkViewWithLayoutActivity](XWalkViewWithLayoutActivity.java) sample demonstrates how to load view UI, include:

* XWalkView can load view UI

This usecase covers following interface and methods:

* XWalkView interface: load method



### 13. The [OnIconAvailableOnReceivedIconActivity](OnIconAvailableOnReceivedIconActivity.java) sample demonstrates how to load icon when it's available, include:

* XWalkView can load icon when it's available

This usecase covers following interface and methods:

* XWalkView interface: load method
* UIClient interface: onIconAvailable, onReceivedIcon methods



### 14. The [OnCreateWindowRequestedActivity](OnCreateWindowRequestedActivity.java) sample demonstrates how to create new window, include:

* XWalkView can create new window

This usecase covers following interface and methods:

* XWalkView interface: load method
* UIClient interface: onCreateWindowRequested methods



### 15. The [FullScreenActivity](FullScreenActivity.java) sample demonstrates how to enter and exit fullscreen, include:

* XWalkView can enter and exit fullscreen

This usecase covers following interface and methods:

* XWalkView interface: load, leaveFullscreen method



### 16. The [ShouldOverrideUrlLoadingActivity](ShouldOverrideUrlLoadingActivity.java) sample demonstrates how to trigger shouldOverrideUrlLoading method, include:

* XWalkView can trigger shouldOverrideUrlLoading method

This usecase covers following interface and methods:

* XWalkView interface: load method
* ResourceClient interface: shouldOverrideUrlLoading methods



### 17. The [XWalkViewWithSetZOrderOnTop](XWalkViewWithSetZOrderOnTop.java) sample check XWalkView's transparent feature whether display the view under the webview, include:

* XWalkView's transparent can display the view under the webview

This usecase covers following interface and methods:

* XWalkView interface: setZOrderOnTop, setBackgroundColor methods



### 18. The [XWalkViewWithRedirection](XWalkViewWithRedirection.java) sample verifies how many times onPageLoadStopped called when visit a web page with redirection, include:

* XWalkUIClient's onPageLoadStopped() method just be called once when visit a web page with redirection

This usecase covers following interface and methods:

* XWalkView interface: load, setResourceClient, setUIClient methods
* ResourceClient interface: onProgressChanged method
* UIClient interface: onPageLoadStarted, onPageLoadStopped methods



### 19. The [XWalkViewWithLoadImage](XWalkViewWithLoadImage.java) sample load image from XWalkView, include:

* XWalkView can load image

This usecase covers following interface and methods:

* XWalkView interface: load, onActivityResult methods



### 20. The [XWalkViewWithClearCache](XWalkViewWithClearCache.java) sample check whether xwalkview can clear cache, include:

* XWalkView can clear cache

This usecase covers following interface and methods:

* XWalkView interface: load, clearCache methods
* UIClient interface: onPageLoadStopped methods



### 21. The [ContactExtensionActivity](ContactExtensionActivity.java) sample demonstrates XWALK-3917 feature basic functionalities, include:

* extension can be supported with additional permissions

These two usecases cover following interface and methods:

* XWalkExtension interface: onMessage methods
* XWalkView interface: load method



### 22. The [ZoomInAndOutXWalkViewActivity](ZoomInAndOutXWalkViewActivity.java) sample check whether xwalkview can zoom, include:

* XWalkView can zoom in, zoom out, zoom by

This usecase covers following interface and methods:

* XWalkView interface: load, zoomIn, zoomOut, zoomBy, canZoomOut, canZoomIn methods



### 23. The [XWalkViewWithDownloadListener](XWalkViewWithDownloadListenerActivity.java) sample check whether xwalkview can setUserAgentString & getUserAgentString & setDownloadListener & override onDownloadStart, include:

* XWalkView can setUserAgentString & getUserAgentString & setDownloadListener & override onDownloadStart

This usecase covers following interface and methods:

* XWalkView interface: load, setUserAgentString, getUserAgentString, setDownloadListener, onDownloadStart methods



### 24. The [XWalkBlockAndErrorRedirection](XWalkBlockAndErrorRedirection.java) sample check whether xwalkview can block response and redirect when url or internet is not avaliable, include:

* XWalkView can block response & make error redirection

This usecase covers following interface and methods:

* XWalkView interface: load, setResourceClient methods
* ResourceClient interface: shouldInterceptLoadRequest, onReceivedLoadError methods



### 25. The [XWalkWithSaveState](XWalkWithSaveState.java) sample check whether xwalkview can saveState & restoreState bundle, include:

* XWalkView can saveState & restoreState bundle

This usecase covers following interface and methods:

* XWalkView interface: load, saveState, restoreState methods



### 26. The [XWalkWithInputConnection](XWalkWithInputConnection.java) sample check whether xwalkview can use onCreateInputConnection method, include:

* XWalkView can use onCreateInputConnection method

This usecase covers following interface and methods:

* XWalkView interface: load, onCreateInputConnection methods



### 27. The [XWalkViewWithDispatchKeyEvent](XWalkViewWithDispatchKeyEvent.java) sample check whether xwalkview can use dispatchKeyEvent method, include:

* XWalkView can use dispatchKeyEvent method

This usecase covers following interface and methods:

* XWalkView interface: load, dispatchKeyEvent methods



### 28. The [XWalkViewWithSetLanguage](XWalkViewWithSetLanguage.java) sample check whether xwalkview can set accept language, include:

* XWalkView can use setAcceptLanguages method

This usecase covers following interface and methods:

* XWalkView interface: load, setAcceptLanguages methods



### 29. The [XWalkViewWithDispatchDraw](XWalkViewWithDispatchDraw.java) sample check whether dispatchDraw method work as same as WebView, include:

* dispatchDraw can be override

This usecase covers following interface and methods:

* XWalkView interface: dispatchDraw methods


### 30. The [CookieManagerTestActivity](CookieManagerTestActivity.java) sample check whether XWalkCookieManager apis can work, include:

* XWalkCookieManager apis can work

This usecase covers following interface and methods:

* XWalkView interface: load method
* XWalkCookieManager interface: setAcceptCookie, acceptCookie, setCookie, getCookie, removeSessionCookie, removeAllCookie, hasCookies, removeExpiredCookie, flushCookieStore



### 31. The [XWalkViewWithOnDraw](XWalkViewWithOnDraw.java) sample check whether onDraw method work as same as WebView, include:

* onDraw can be override

This usecase covers following interface and methods:

* XWalkView interface: onDraw method



### 32. The [XWalkViewWithOverScroll](XWalkViewWithOverScroll.java) sample check whether onOverScrolled method work as same as WebView, include:

* onOverScrolled can be override

This usecase covers following interface and methods:

* XWalkView interface: onOverScrolled method



### 33. The [AcceptFileSchemeCookiesActivity](AcceptFileSchemeCookiesActivity.java) sample check whether XWalkCookieManager can set AcceptFileSchemeCookies, include:

* XWalkCookieManager apis can work

This usecase covers following interface and methods:

* XWalkCookieManager interface: setAcceptFileSchemeCookies, allowFileSchemeCookies methods



### 34. The [XWalkViewWithOnTouchEvent](XWalkViewWithOnTouchEvent.java) sample check whether onTouchEvent method work as same as WebView, include:

* onTouchEvent can be override

This usecase covers following interface and methods:

* XWalkView interface: onTouchEvent method



### 35. The [XWalkViewWithOverScrollBy](XWalkViewWithOverScrollBy.java) sample check whether overScrollBy method work as same as WebView, include:

* overScrollBy can be override

This usecase covers following interface and methods:

* XWalkView interface: overScrollBy method



### 36. The [XWalkViewWithFocusChanged](XWalkViewWithFocusChanged.java) sample check whether onFocusChanged method work as same as WebView, include:

* onFocusChanged can be override

This usecase covers following interface and methods:

* XWalkView interface: onFocusChanged method



### 37. The [XWalkViewWithScrollChanged](XWalkViewWithScrollChanged.java) sample check whether onScrollChanged method work as same as WebView, include:

* onScrollChanged can be override

This usecase covers following interface and methods:

* XWalkView interface: onScrollChanged method


### 38. The [XWalkViewWithSizeChanged](XWalkViewWithSizeChanged.java) sample check whether onSizeChanged method work as same as WebView, include:

* onSizeChanged can be override

This usecase covers following interface and methods:

* XWalkView interface: onSizeChanged method



### 39. The [XWalkViewWithVisibilityChanged](XWalkViewWithVisibilityChanged.java) sample check whether onVisibilityChanged method work as same as WebView, include:

* onVisibilityChanged can be override

This usecase covers following interface and methods:

* XWalkView interface: onVisibilityChanged method


### 40. The [XWalkViewWithWindowFocusChanged](XWalkViewWithWindowFocusChanged.java) sample check whether onWindowFocusChanged method work as same as WebView, include:

* onWindowFocusChanged can be override

This usecase covers following interface and methods:

* XWalkView interface: onWindowFocusChanged method


### 41. The [XWalkViewWithWindowsVisibilityChanged](XWalkViewWithWindowsVisibilityChanged.java) sample check whether onWindowVisibilityChanged method work as same as WebView, include:

* onWindowVisibilityChanged can be override

This usecase covers following interface and methods:

* XWalkView interface: onWindowVisibilityChanged method


### 42. The [XWalkWithClearFormData](XWalkWithClearFormData.java) sample check whether clearFormData method work as same as WebView, include:

* clearFormData can work

This usecase covers following interface and methods:

* XWalkView interface: load, clearFormData methods




### 43. The [XWalkViewWithDisableLongClick](XWalkViewWithDisableLongClick.java) sample check whether setOnLongClickListener method work as same as WebView, include:

* setOnLongClickListener can work

This usecase covers following interface and methods:

* XWalkView interface: load, setOnLongClickListener, setLongClickable methods



### 44. The [XWalkWithOnReceivedLoadError](XWalkWithOnReceivedLoadError.java) sample check whether XWalkView change dialog of onReceivedLoadError to toast, include:

* onReceivedLoadError can work

This usecase covers following interface and methods:

* XWalkView interface: load, onReceivedLoadError methods


### 45. The [XWalkViewWithLongClick](XWalkViewWithLongClick.java) sample check whether performLongClick and setOnLongClickListener method work as same as WebView, include:

* performLongClick and setOnLongClickListener can be override and invoked

This usecase covers following interface and methods:

* XWalkView interface: performLongClick, setOnLongClickListener methods


### 46. The [XWalkViewWithRequestFocus](XWalkViewWithRequestFocus.java) sample check whether requestFocus method work as same as WebView, include:

* requestFocus can be override and invoked

This usecase covers following interface and methods:

* XWalkView interface: requestFocus methods


### 47. The [XWalkViewWithSetLayerType](XWalkViewWithSetLayerType.java) sample check whether setLayerType method work as same as WebView, include:

* setLayerType can be invoked

This usecase covers following interface and methods:

* XWalkView interface: setLayerType methods


### 48. The [XWalkViewWithNetworkAvailable](XWalkViewWithNetworkAvailable.java) sample check whether setNetworkAvailable method work as same as WebView, include:

* setNetworkAvailable can be invoked

This usecase covers following interface and methods:

* XWalkView interface: setNetworkAvailable methods


### 49. The [XWalkViewWithConsoleLog](XWalkViewWithConsoleLog.java) sample check whether onConsoleMessage method work as same as WebView, include:

* onConsoleMessage can be invoked

This usecase covers following interface and methods:

* XWalkView XWalkUIClient interface: onConsoleMessage methods


### 50. The [XWalkViewWithReceivedTitle](XWalkViewWithReceivedTitle.java) sample check whether onReceivedTitle method work as same as WebView, include:

* onReceivedTitle can be invoked

This usecase covers following interface and methods:

* XWalkView XWalkUIClient interface: onReceivedTitle methods



### 51. The [XWalkViewWithClientOnRequestFocus](XWalkViewWithClientOnRequestFocus.java) sample check whether XWalkUIClient.onRequestFocus method work as same as WebView, include:

* XWalkUIClient.onRequestFocus can be invoked

This usecase covers following interface and methods:

* XWalkView interface: XWalkUIClient.onRequestFocus methods


### 52. The [XWalkViewWithClientKeyEvent](XWalkViewWithClientKeyEvent.java) sample check whether XWalkUIClient.shouldOverrideKeyEvent method work as same as WebView, include:

* XWalkUIClient.shouldOverrideKeyEvent can be invoked

This usecase covers following interface and methods:

* XWalkView interface: XWalkUIClient.shouldOverrideKeyEvent methods

### 53. The [XWalkViewWithClientReceivedSSLError](XWalkViewWithClientReceivedSSLError.java) sample check whether XWalkResourceClient.onReceivedSslError method work as same as WebView, include:

* XWalkResourceClient.onReceivedSslError can be invoked

This usecase covers following interface and methods:

* XWalkView interface: XWalkResourceClient.onReceivedSslError methods



### 54. The [XWalkViewWithTransparent](XWalkViewWithTransparent.java) sample check XWalkView's transparent feature, include:

* XWalkView's transparent can display

This usecase covers following interface and methods:

* XWalkView interface: setBackgroundColor methods



### 55. The [XWalkViewWithSetInitialScale](XWalkViewWithSetInitialScale.java) sample check XWalkView's setInitialScale feature, include:

* XWalkView can setInitialScale

This usecase covers following interface and methods:

* XWalkView interface: load, setInitialScale methods



### 56. The [XWalkViewWithOnUnhandledKeyEvent](XWalkViewWithOnUnhandledKeyEvent.java) sample check XWalkUIClient.onUnhandledKeyEvent method work as same as WebView, include:

* XWalkUIClient.onUnhandledKeyEvent can be invoked

This usecase covers following interface and methods:

* XWalkView interface: XWalkUIClient.onUnhandledKeyEvent methods



### 57. The [XWalkViewWithClearCacheForSingleFile](XWalkViewWithClearCacheForSingleFile.java) sample check XWalkView can implement clearCacheForSingleFile API, include:

* XWalkView can implement clearCacheForSingleFile API

This usecase covers following interface and methods:

* XWalkView interface: clearCacheForSingleFile, load methods



### 58. The [XWalkViewWithEncodingDisplay](XWalkViewWithEncodingDisplay.java) sample check XWalkView can display utf-8 charset html file, include:

* XWalkView can display utf-8 charset

This usecase covers following interface and methods:

* XWalkView interface: load



### 59. The [XWalkViewWithOpenFileChooser](XWalkViewWithOpenFileChooser.java) sample check XWalkView can open local file, include:

* XWalkUIClient.openFileChooser can be invoked

This usecase covers following interface and methods:

* XWalkView interface: XWalkUIClient.openFileChooser methods

