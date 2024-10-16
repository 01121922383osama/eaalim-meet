
// `modulePromise` is a promise to the `WebAssembly.module` object to be
//   instantiated.
// `importObjectPromise` is a promise to an object that contains any additional
//   imports needed by the module that aren't provided by the standard runtime.
//   The fields on this object will be merged into the importObject with which
//   the module will be instantiated.
// This function returns a promise to the instantiated module.
export const instantiate = async (modulePromise, importObjectPromise) => {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + js;
    }

    // Converts a Dart List to a JS array. Any Dart objects will be converted, but
    // this will be cheap for JSValues.
    function arrayFromDartList(constructor, list) {
      const exports = dartInstance.exports;
      const read = exports.$listRead;
      const length = exports.$listLength(list);
      const array = new constructor(length);
      for (let i = 0; i < length; i++) {
        array[i] = read(list, i);
      }
      return array;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {

_1: (x0,x1,x2) => x0.set(x1,x2),
_2: (x0,x1,x2) => x0.set(x1,x2),
_6: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._6(f,arguments.length,x0) }),
_7: x0 => new window.FinalizationRegistry(x0),
_8: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
_9: (x0,x1) => x0.unregister(x1),
_10: (x0,x1,x2) => x0.slice(x1,x2),
_11: (x0,x1) => x0.decode(x1),
_12: (x0,x1) => x0.segment(x1),
_13: () => new TextDecoder(),
_14: x0 => x0.buffer,
_15: x0 => x0.wasmMemory,
_16: () => globalThis.window._flutter_skwasmInstance,
_17: x0 => x0.rasterStartMilliseconds,
_18: x0 => x0.rasterEndMilliseconds,
_19: x0 => x0.imageBitmaps,
_167: x0 => x0.select(),
_168: (x0,x1) => x0.append(x1),
_169: x0 => x0.remove(),
_172: x0 => x0.unlock(),
_177: x0 => x0.getReader(),
_189: x0 => new MutationObserver(x0),
_208: (x0,x1,x2) => x0.addEventListener(x1,x2),
_209: (x0,x1,x2) => x0.removeEventListener(x1,x2),
_212: x0 => new ResizeObserver(x0),
_215: (x0,x1) => new Intl.Segmenter(x0,x1),
_216: x0 => x0.next(),
_217: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
_294: x0 => x0.close(),
_295: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
_296: x0 => new window.ImageDecoder(x0),
_297: x0 => x0.close(),
_298: x0 => ({frameIndex: x0}),
_299: (x0,x1) => x0.decode(x1),
_302: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._302(f,arguments.length,x0) }),
_303: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._303(f,arguments.length,x0) }),
_304: (x0,x1) => ({addView: x0,removeView: x1}),
_305: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._305(f,arguments.length,x0) }),
_306: f => finalizeWrapper(f, function() { return dartInstance.exports._306(f,arguments.length) }),
_307: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
_308: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._308(f,arguments.length,x0) }),
_309: x0 => ({runApp: x0}),
_310: x0 => new Uint8Array(x0),
_312: x0 => x0.preventDefault(),
_313: x0 => x0.stopPropagation(),
_314: (x0,x1) => x0.addListener(x1),
_315: (x0,x1) => x0.removeListener(x1),
_316: (x0,x1) => x0.prepend(x1),
_317: x0 => x0.remove(),
_318: x0 => x0.disconnect(),
_319: (x0,x1) => x0.addListener(x1),
_320: (x0,x1) => x0.removeListener(x1),
_322: (x0,x1) => x0.append(x1),
_323: x0 => x0.remove(),
_324: x0 => x0.stopPropagation(),
_328: x0 => x0.preventDefault(),
_329: (x0,x1) => x0.append(x1),
_330: x0 => x0.remove(),
_331: x0 => x0.preventDefault(),
_336: (x0,x1) => x0.appendChild(x1),
_337: (x0,x1,x2) => x0.insertBefore(x1,x2),
_338: (x0,x1) => x0.removeChild(x1),
_339: (x0,x1) => x0.appendChild(x1),
_340: (x0,x1) => x0.transferFromImageBitmap(x1),
_341: (x0,x1) => x0.append(x1),
_342: (x0,x1) => x0.append(x1),
_343: (x0,x1) => x0.append(x1),
_344: x0 => x0.remove(),
_345: x0 => x0.remove(),
_346: x0 => x0.remove(),
_347: (x0,x1) => x0.appendChild(x1),
_348: (x0,x1) => x0.appendChild(x1),
_349: x0 => x0.remove(),
_350: (x0,x1) => x0.append(x1),
_351: (x0,x1) => x0.append(x1),
_352: x0 => x0.remove(),
_353: (x0,x1) => x0.append(x1),
_354: (x0,x1) => x0.append(x1),
_355: (x0,x1,x2) => x0.insertBefore(x1,x2),
_356: (x0,x1) => x0.append(x1),
_357: (x0,x1,x2) => x0.insertBefore(x1,x2),
_358: x0 => x0.remove(),
_359: x0 => x0.remove(),
_360: (x0,x1) => x0.append(x1),
_361: x0 => x0.remove(),
_362: (x0,x1) => x0.append(x1),
_363: x0 => x0.remove(),
_364: x0 => x0.remove(),
_365: x0 => x0.getBoundingClientRect(),
_366: x0 => x0.remove(),
_367: x0 => x0.blur(),
_368: x0 => x0.remove(),
_369: x0 => x0.blur(),
_370: x0 => x0.remove(),
_383: (x0,x1) => x0.append(x1),
_384: x0 => x0.remove(),
_385: (x0,x1) => x0.append(x1),
_386: (x0,x1,x2) => x0.insertBefore(x1,x2),
_387: x0 => x0.preventDefault(),
_388: x0 => x0.preventDefault(),
_389: x0 => x0.preventDefault(),
_390: x0 => x0.preventDefault(),
_391: x0 => x0.remove(),
_392: (x0,x1) => x0.observe(x1),
_393: x0 => x0.disconnect(),
_394: (x0,x1) => x0.appendChild(x1),
_395: (x0,x1) => x0.appendChild(x1),
_396: (x0,x1) => x0.appendChild(x1),
_397: (x0,x1) => x0.append(x1),
_398: x0 => x0.remove(),
_399: (x0,x1) => x0.append(x1),
_401: (x0,x1) => x0.appendChild(x1),
_402: (x0,x1) => x0.append(x1),
_403: x0 => x0.remove(),
_404: (x0,x1) => x0.append(x1),
_408: (x0,x1) => x0.appendChild(x1),
_409: x0 => x0.remove(),
_969: () => globalThis.window.flutterConfiguration,
_970: x0 => x0.assetBase,
_975: x0 => x0.debugShowSemanticsNodes,
_976: x0 => x0.hostElement,
_977: x0 => x0.multiViewEnabled,
_978: x0 => x0.nonce,
_980: x0 => x0.fontFallbackBaseUrl,
_981: x0 => x0.useColorEmoji,
_985: x0 => x0.console,
_986: x0 => x0.devicePixelRatio,
_987: x0 => x0.document,
_988: x0 => x0.history,
_989: x0 => x0.innerHeight,
_990: x0 => x0.innerWidth,
_991: x0 => x0.location,
_992: x0 => x0.navigator,
_993: x0 => x0.visualViewport,
_994: x0 => x0.performance,
_995: (x0,x1) => x0.fetch(x1),
_1000: (x0,x1) => x0.dispatchEvent(x1),
_1001: (x0,x1) => x0.matchMedia(x1),
_1002: (x0,x1) => x0.getComputedStyle(x1),
_1004: x0 => x0.screen,
_1005: (x0,x1) => x0.requestAnimationFrame(x1),
_1006: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1006(f,arguments.length,x0) }),
_1010: (x0,x1) => x0.warn(x1),
_1013: () => globalThis.window,
_1014: () => globalThis.Intl,
_1015: () => globalThis.Symbol,
_1018: x0 => x0.clipboard,
_1019: x0 => x0.maxTouchPoints,
_1020: x0 => x0.vendor,
_1021: x0 => x0.language,
_1022: x0 => x0.platform,
_1023: x0 => x0.userAgent,
_1024: x0 => x0.languages,
_1025: x0 => x0.documentElement,
_1026: (x0,x1) => x0.querySelector(x1),
_1029: (x0,x1) => x0.createElement(x1),
_1031: (x0,x1) => x0.execCommand(x1),
_1035: (x0,x1) => x0.createTextNode(x1),
_1036: (x0,x1) => x0.createEvent(x1),
_1040: x0 => x0.head,
_1041: x0 => x0.body,
_1042: (x0,x1) => x0.title = x1,
_1045: x0 => x0.activeElement,
_1047: x0 => x0.visibilityState,
_1048: () => globalThis.document,
_1049: (x0,x1,x2) => x0.addEventListener(x1,x2),
_1050: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
_1051: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
_1052: (x0,x1,x2) => x0.removeEventListener(x1,x2),
_1055: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1055(f,arguments.length,x0) }),
_1056: x0 => x0.target,
_1058: x0 => x0.timeStamp,
_1059: x0 => x0.type,
_1061: x0 => x0.preventDefault(),
_1065: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
_1069: x0 => x0.baseURI,
_1070: x0 => x0.firstChild,
_1076: x0 => x0.parentElement,
_1078: x0 => x0.parentNode,
_1081: (x0,x1) => x0.removeChild(x1),
_1082: (x0,x1) => x0.removeChild(x1),
_1083: x0 => x0.isConnected,
_1084: (x0,x1) => x0.textContent = x1,
_1087: (x0,x1) => x0.contains(x1),
_1092: x0 => x0.firstElementChild,
_1094: x0 => x0.nextElementSibling,
_1095: x0 => x0.clientHeight,
_1096: x0 => x0.clientWidth,
_1097: x0 => x0.offsetHeight,
_1098: x0 => x0.offsetWidth,
_1099: x0 => x0.id,
_1100: (x0,x1) => x0.id = x1,
_1103: (x0,x1) => x0.spellcheck = x1,
_1104: x0 => x0.tagName,
_1105: x0 => x0.style,
_1107: (x0,x1) => x0.append(x1),
_1108: (x0,x1) => x0.getAttribute(x1),
_1109: x0 => x0.getBoundingClientRect(),
_1112: (x0,x1) => x0.closest(x1),
_1114: (x0,x1) => x0.querySelectorAll(x1),
_1115: x0 => x0.remove(),
_1116: (x0,x1,x2) => x0.setAttribute(x1,x2),
_1118: (x0,x1) => x0.removeAttribute(x1),
_1119: (x0,x1) => x0.tabIndex = x1,
_1121: (x0,x1) => x0.focus(x1),
_1122: x0 => x0.scrollTop,
_1123: (x0,x1) => x0.scrollTop = x1,
_1124: x0 => x0.scrollLeft,
_1125: (x0,x1) => x0.scrollLeft = x1,
_1126: x0 => x0.classList,
_1127: (x0,x1) => x0.className = x1,
_1131: (x0,x1) => x0.getElementsByClassName(x1),
_1132: x0 => x0.click(),
_1133: (x0,x1) => x0.hasAttribute(x1),
_1136: (x0,x1) => x0.attachShadow(x1),
_1140: (x0,x1) => x0.getPropertyValue(x1),
_1142: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
_1144: (x0,x1) => x0.removeProperty(x1),
_1146: x0 => x0.offsetLeft,
_1147: x0 => x0.offsetTop,
_1148: x0 => x0.offsetParent,
_1150: (x0,x1) => x0.name = x1,
_1151: x0 => x0.content,
_1152: (x0,x1) => x0.content = x1,
_1165: (x0,x1) => x0.nonce = x1,
_1170: x0 => x0.now(),
_1172: (x0,x1) => x0.width = x1,
_1174: (x0,x1) => x0.height = x1,
_1178: (x0,x1) => x0.getContext(x1),
_1256: x0 => x0.status,
_1257: x0 => x0.headers,
_1258: x0 => x0.body,
_1259: x0 => x0.arrayBuffer(),
_1262: (x0,x1) => x0.get(x1),
_1264: x0 => x0.read(),
_1265: x0 => x0.value,
_1266: x0 => x0.done,
_1268: x0 => x0.name,
_1269: x0 => x0.x,
_1270: x0 => x0.y,
_1273: x0 => x0.top,
_1274: x0 => x0.right,
_1275: x0 => x0.bottom,
_1276: x0 => x0.left,
_1285: x0 => x0.height,
_1286: x0 => x0.width,
_1287: (x0,x1) => x0.value = x1,
_1289: (x0,x1) => x0.placeholder = x1,
_1290: (x0,x1) => x0.name = x1,
_1291: x0 => x0.selectionDirection,
_1292: x0 => x0.selectionStart,
_1293: x0 => x0.selectionEnd,
_1296: x0 => x0.value,
_1298: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
_1303: x0 => x0.readText(),
_1304: (x0,x1) => x0.writeText(x1),
_1305: x0 => x0.altKey,
_1306: x0 => x0.code,
_1307: x0 => x0.ctrlKey,
_1308: x0 => x0.key,
_1309: x0 => x0.keyCode,
_1310: x0 => x0.location,
_1311: x0 => x0.metaKey,
_1312: x0 => x0.repeat,
_1313: x0 => x0.shiftKey,
_1314: x0 => x0.isComposing,
_1315: (x0,x1) => x0.getModifierState(x1),
_1316: x0 => x0.state,
_1319: (x0,x1) => x0.go(x1),
_1320: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
_1321: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
_1322: x0 => x0.pathname,
_1323: x0 => x0.search,
_1324: x0 => x0.hash,
_1327: x0 => x0.state,
_1333: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1333(f,arguments.length,x0,x1) }),
_1335: (x0,x1,x2) => x0.observe(x1,x2),
_1338: x0 => x0.attributeName,
_1339: x0 => x0.type,
_1340: x0 => x0.matches,
_1344: x0 => x0.matches,
_1345: x0 => x0.relatedTarget,
_1346: x0 => x0.clientX,
_1347: x0 => x0.clientY,
_1348: x0 => x0.offsetX,
_1349: x0 => x0.offsetY,
_1352: x0 => x0.button,
_1353: x0 => x0.buttons,
_1354: x0 => x0.ctrlKey,
_1355: (x0,x1) => x0.getModifierState(x1),
_1356: x0 => x0.pointerId,
_1357: x0 => x0.pointerType,
_1358: x0 => x0.pressure,
_1359: x0 => x0.tiltX,
_1360: x0 => x0.tiltY,
_1361: x0 => x0.getCoalescedEvents(),
_1362: x0 => x0.deltaX,
_1363: x0 => x0.deltaY,
_1364: x0 => x0.wheelDeltaX,
_1365: x0 => x0.wheelDeltaY,
_1366: x0 => x0.deltaMode,
_1371: x0 => x0.changedTouches,
_1373: x0 => x0.clientX,
_1374: x0 => x0.clientY,
_1375: x0 => x0.data,
_1376: (x0,x1) => x0.type = x1,
_1377: (x0,x1) => x0.max = x1,
_1378: (x0,x1) => x0.min = x1,
_1379: (x0,x1) => x0.value = x1,
_1380: x0 => x0.value,
_1381: x0 => x0.disabled,
_1382: (x0,x1) => x0.disabled = x1,
_1383: (x0,x1) => x0.placeholder = x1,
_1384: (x0,x1) => x0.name = x1,
_1385: (x0,x1) => x0.autocomplete = x1,
_1386: x0 => x0.selectionDirection,
_1387: x0 => x0.selectionStart,
_1388: x0 => x0.selectionEnd,
_1392: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
_1399: (x0,x1) => x0.add(x1),
_1402: (x0,x1) => x0.noValidate = x1,
_1403: (x0,x1) => x0.method = x1,
_1404: (x0,x1) => x0.action = x1,
_1431: x0 => x0.orientation,
_1432: x0 => x0.width,
_1433: x0 => x0.height,
_1434: (x0,x1) => x0.lock(x1),
_1451: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1451(f,arguments.length,x0,x1) }),
_1461: x0 => x0.length,
_1462: (x0,x1) => x0.item(x1),
_1463: x0 => x0.length,
_1464: (x0,x1) => x0.item(x1),
_1465: x0 => x0.iterator,
_1466: x0 => x0.Segmenter,
_1467: x0 => x0.v8BreakIterator,
_1470: x0 => x0.done,
_1471: x0 => x0.value,
_1472: x0 => x0.index,
_1476: (x0,x1) => x0.adoptText(x1),
_1478: x0 => x0.first(),
_1479: x0 => x0.next(),
_1480: x0 => x0.current(),
_1493: x0 => x0.hostElement,
_1494: x0 => x0.viewConstraints,
_1496: x0 => x0.maxHeight,
_1497: x0 => x0.maxWidth,
_1498: x0 => x0.minHeight,
_1499: x0 => x0.minWidth,
_1500: x0 => x0.loader,
_1501: () => globalThis._flutter,
_1502: (x0,x1) => x0.didCreateEngineInitializer(x1),
_1503: (x0,x1,x2) => x0.call(x1,x2),
_1504: () => globalThis.Promise,
_1505: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1505(f,arguments.length,x0,x1) }),
_1508: x0 => x0.length,
_1511: x0 => x0.tracks,
_1515: x0 => x0.image,
_1520: x0 => x0.codedWidth,
_1521: x0 => x0.codedHeight,
_1524: x0 => x0.duration,
_1528: x0 => x0.ready,
_1529: x0 => x0.selectedTrack,
_1530: x0 => x0.repetitionCount,
_1531: x0 => x0.frameCount,
_1577: (x0,x1,x2,x3,x4,x5,x6,x7) => ({apiKey: x0,authDomain: x1,databaseURL: x2,projectId: x3,storageBucket: x4,messagingSenderId: x5,measurementId: x6,appId: x7}),
_1578: (x0,x1) => globalThis.firebase_core.initializeApp(x0,x1),
_1579: x0 => globalThis.firebase_core.getApp(x0),
_1580: () => globalThis.firebase_core.getApp(),
_1608: () => globalThis.firebase_core.SDK_VERSION,
_1615: x0 => x0.apiKey,
_1617: x0 => x0.authDomain,
_1619: x0 => x0.databaseURL,
_1621: x0 => x0.projectId,
_1623: x0 => x0.storageBucket,
_1625: x0 => x0.messagingSenderId,
_1627: x0 => x0.measurementId,
_1629: x0 => x0.appId,
_1631: x0 => x0.name,
_1632: x0 => x0.options,
_1633: (x0,x1,x2) => ({errorMap: x0,persistence: x1,popupRedirectResolver: x2}),
_1649: x0 => globalThis.firebase_auth.OAuthProvider.credentialFromResult(x0),
_1650: x0 => globalThis.firebase_auth.OAuthProvider.credentialFromError(x0),
_1672: (x0,x1) => globalThis.firebase_auth.initializeAuth(x0,x1),
_1673: () => globalThis.firebase_auth.debugErrorMap,
_1677: () => globalThis.firebase_auth.browserSessionPersistence,
_1679: () => globalThis.firebase_auth.browserLocalPersistence,
_1681: () => globalThis.firebase_auth.indexedDBLocalPersistence,
_1685: (x0,x1) => globalThis.firebase_auth.connectAuthEmulator(x0,x1),
_1688: x0 => globalThis.firebase_auth.getAdditionalUserInfo(x0),
_1698: (x0,x1,x2) => globalThis.firebase_auth.signInWithEmailAndPassword(x0,x1,x2),
_1720: x0 => globalThis.firebase_auth.multiFactor(x0),
_1721: (x0,x1) => globalThis.firebase_auth.getMultiFactorResolver(x0,x1),
_1723: x0 => x0.currentUser,
_1727: x0 => x0.tenantId,
_1731: x0 => x0.signOut(),
_1738: x0 => x0.displayName,
_1739: x0 => x0.email,
_1740: x0 => x0.phoneNumber,
_1741: x0 => x0.photoURL,
_1742: x0 => x0.providerId,
_1743: x0 => x0.uid,
_1744: x0 => x0.emailVerified,
_1745: x0 => x0.isAnonymous,
_1746: x0 => x0.providerData,
_1747: x0 => x0.refreshToken,
_1748: x0 => x0.tenantId,
_1749: x0 => x0.metadata,
_1751: (x0,x1) => x0.getIdToken(x1),
_1754: x0 => x0.toJSON(),
_1756: x0 => x0.providerId,
_1757: x0 => x0.signInMethod,
_1758: x0 => x0.accessToken,
_1759: x0 => x0.idToken,
_1760: x0 => x0.secret,
_1787: x0 => x0.creationTime,
_1788: x0 => x0.lastSignInTime,
_1793: x0 => x0.code,
_1795: x0 => x0.message,
_1807: x0 => x0.email,
_1808: x0 => x0.phoneNumber,
_1809: x0 => x0.tenantId,
_1830: x0 => x0.user,
_1833: x0 => x0.providerId,
_1834: x0 => x0.profile,
_1835: x0 => x0.username,
_1836: x0 => x0.isNewUser,
_1839: () => globalThis.firebase_auth.browserPopupRedirectResolver,
_1845: x0 => x0.displayName,
_1846: x0 => x0.enrollmentTime,
_1847: x0 => x0.factorId,
_1848: x0 => x0.uid,
_1850: x0 => x0.hints,
_1851: x0 => x0.session,
_1853: x0 => x0.phoneNumber,
_1865: (x0,x1) => x0.getItem(x1),
_1872: (x0,x1) => x0.createElement(x1),
_1879: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1879(f,arguments.length,x0) }),
_1880: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1880(f,arguments.length,x0) }),
_1881: (x0,x1,x2) => x0.onAuthStateChanged(x1,x2),
_1882: x0 => x0.call(),
_1883: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1883(f,arguments.length,x0) }),
_1884: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1884(f,arguments.length,x0) }),
_1885: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1885(f,arguments.length,x0) }),
_1886: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1886(f,arguments.length,x0) }),
_1887: (x0,x1,x2) => x0.onIdTokenChanged(x1,x2),
_1894: (x0,x1) => new firebase_firestore.GeoPoint(x0,x1),
_1896: x0 => globalThis.firebase_firestore.Bytes.fromUint8Array(x0),
_1899: x0 => globalThis.firebase_firestore.Timestamp.fromMillis(x0),
_1910: (x0,x1) => globalThis.firebase_firestore.getFirestore(x0,x1),
_1919: (x0,x1) => globalThis.firebase_firestore.collection(x0,x1),
_1925: (x0,x1) => globalThis.firebase_firestore.doc(x0,x1),
_1926: () => globalThis.firebase_firestore.documentId(),
_1973: x0 => x0.path,
_1996: x0 => x0.path,
_2104: (x0,x1) => globalThis.firebase_firestore.setDoc(x0,x1),
_2108: x0 => globalThis.firebase_firestore.doc(x0),
_2113: () => globalThis.firebase_firestore.getFirestore(),
_2128: f => finalizeWrapper(f, function() { return dartInstance.exports._2128(f,arguments.length) }),
_2129: (x0,x1) => x0.debug(x1),
_2130: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2130(f,arguments.length,x0) }),
_2131: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._2131(f,arguments.length,x0,x1) }),
_2132: (x0,x1) => ({createScript: x0,createScriptURL: x1}),
_2133: (x0,x1,x2) => x0.createPolicy(x1,x2),
_2134: (x0,x1) => x0.createScriptURL(x1),
_2135: (x0,x1,x2) => x0.createScript(x1,x2),
_2136: (x0,x1) => x0.appendChild(x1),
_2137: (x0,x1) => x0.appendChild(x1),
_2138: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2138(f,arguments.length,x0) }),
_2150: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
_2151: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
_2152: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2152(f,arguments.length,x0) }),
_2153: (x0,x1,x2) => x0.addEventListener(x1,x2),
_2154: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2154(f,arguments.length,x0) }),
_2155: x0 => x0.send(),
_2156: () => new XMLHttpRequest(),
_2167: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
_2176: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
_2202: (x0,x1) => x0.querySelector(x1),
_2203: (x0,x1) => x0.getAttribute(x1),
_2204: (x0,x1,x2) => x0.setAttribute(x1,x2),
_2206: (x0,x1) => x0.initialize(x1),
_2207: (x0,x1) => x0.initTokenClient(x1),
_2208: (x0,x1) => x0.initCodeClient(x1),
_2241: x0 => new Array(x0),
_2248: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2248(f,arguments.length,x0) }),
_2249: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2249(f,arguments.length,x0) }),
_2274: (decoder, codeUnits) => decoder.decode(codeUnits),
_2275: () => new TextDecoder("utf-8", {fatal: true}),
_2276: () => new TextDecoder("utf-8", {fatal: false}),
_2277: v => v.toString(),
_2278: (d, digits) => d.toFixed(digits),
_2282: x0 => new WeakRef(x0),
_2283: x0 => x0.deref(),
_2289: Date.now,
_2291: s => new Date(s * 1000).getTimezoneOffset() * 60 ,
_2292: s => {
      if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
        return NaN;
      }
      return parseFloat(s);
    },
_2293: () => {
          let stackString = new Error().stack.toString();
          let frames = stackString.split('\n');
          let drop = 2;
          if (frames[0] === 'Error') {
              drop += 1;
          }
          return frames.slice(drop).join('\n');
        },
_2294: () => typeof dartUseDateNowForTicks !== "undefined",
_2295: () => 1000 * performance.now(),
_2296: () => Date.now(),
_2297: () => {
      // On browsers return `globalThis.location.href`
      if (globalThis.location != null) {
        return globalThis.location.href;
      }
      return null;
    },
_2298: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
_2299: () => new WeakMap(),
_2300: (map, o) => map.get(o),
_2301: (map, o, v) => map.set(o, v),
_2302: () => globalThis.WeakRef,
_2313: s => JSON.stringify(s),
_2314: s => printToConsole(s),
_2315: a => a.join(''),
_2318: (s, t) => s.split(t),
_2319: s => s.toLowerCase(),
_2320: s => s.toUpperCase(),
_2321: s => s.trim(),
_2322: s => s.trimLeft(),
_2323: s => s.trimRight(),
_2325: (s, p, i) => s.indexOf(p, i),
_2326: (s, p, i) => s.lastIndexOf(p, i),
_2328: Object.is,
_2329: s => s.toUpperCase(),
_2330: s => s.toLowerCase(),
_2331: (a, i) => a.push(i),
_2335: a => a.pop(),
_2336: (a, i) => a.splice(i, 1),
_2338: (a, s) => a.join(s),
_2339: (a, s, e) => a.slice(s, e),
_2342: a => a.length,
_2344: (a, i) => a[i],
_2345: (a, i, v) => a[i] = v,
_2347: (o, offsetInBytes, lengthInBytes) => {
      var dst = new ArrayBuffer(lengthInBytes);
      new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
      return new DataView(dst);
    },
_2348: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
_2349: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
_2350: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
_2351: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
_2352: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
_2353: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
_2354: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
_2356: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
_2357: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
_2358: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
_2359: (t, s) => t.set(s),
_2361: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
_2363: o => o.buffer,
_2364: o => o.byteOffset,
_2365: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
_2366: (b, o) => new DataView(b, o),
_2367: (b, o, l) => new DataView(b, o, l),
_2368: Function.prototype.call.bind(DataView.prototype.getUint8),
_2369: Function.prototype.call.bind(DataView.prototype.setUint8),
_2370: Function.prototype.call.bind(DataView.prototype.getInt8),
_2371: Function.prototype.call.bind(DataView.prototype.setInt8),
_2372: Function.prototype.call.bind(DataView.prototype.getUint16),
_2373: Function.prototype.call.bind(DataView.prototype.setUint16),
_2374: Function.prototype.call.bind(DataView.prototype.getInt16),
_2375: Function.prototype.call.bind(DataView.prototype.setInt16),
_2376: Function.prototype.call.bind(DataView.prototype.getUint32),
_2377: Function.prototype.call.bind(DataView.prototype.setUint32),
_2378: Function.prototype.call.bind(DataView.prototype.getInt32),
_2379: Function.prototype.call.bind(DataView.prototype.setInt32),
_2382: Function.prototype.call.bind(DataView.prototype.getBigInt64),
_2383: Function.prototype.call.bind(DataView.prototype.setBigInt64),
_2384: Function.prototype.call.bind(DataView.prototype.getFloat32),
_2385: Function.prototype.call.bind(DataView.prototype.setFloat32),
_2386: Function.prototype.call.bind(DataView.prototype.getFloat64),
_2387: Function.prototype.call.bind(DataView.prototype.setFloat64),
_2388: (x0,x1) => x0.getRandomValues(x1),
_2389: x0 => new Uint8Array(x0),
_2390: () => globalThis.crypto,
_2401: (o, t) => o instanceof t,
_2403: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2403(f,arguments.length,x0) }),
_2404: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2404(f,arguments.length,x0) }),
_2405: o => Object.keys(o),
_2406: (ms, c) =>
              setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
_2407: (handle) => clearTimeout(handle),
_2408: (ms, c) =>
          setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
_2409: (handle) => clearInterval(handle),
_2410: (c) =>
              queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
_2411: () => Date.now(),
_2423: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
_2430: () => new XMLHttpRequest(),
_2431: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
_2432: (x0,x1) => x0.send(x1),
_2433: x0 => x0.abort(),
_2434: x0 => x0.getAllResponseHeaders(),
_2440: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2440(f,arguments.length,x0) }),
_2441: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2441(f,arguments.length,x0) }),
_2451: x0 => x0.trustedTypes,
_2452: (x0,x1) => x0.src = x1,
_2453: (x0,x1) => x0.createScriptURL(x1),
_2454: (x0,x1) => x0.debug(x1),
_2455: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2455(f,arguments.length,x0) }),
_2456: x0 => ({createScriptURL: x0}),
_2457: (x0,x1) => x0.appendChild(x1),
_2458: x0 => x0.trustedTypes,
_2460: (x0,x1) => x0.text = x1,
_2477: (s, m) => {
          try {
            return new RegExp(s, m);
          } catch (e) {
            return String(e);
          }
        },
_2478: (x0,x1) => x0.exec(x1),
_2479: (x0,x1) => x0.test(x1),
_2480: (x0,x1) => x0.exec(x1),
_2481: (x0,x1) => x0.exec(x1),
_2482: x0 => x0.pop(),
_2486: (x0,x1,x2) => x0[x1] = x2,
_2488: o => o === undefined,
_2489: o => typeof o === 'boolean',
_2490: o => typeof o === 'number',
_2492: o => typeof o === 'string',
_2495: o => o instanceof Int8Array,
_2496: o => o instanceof Uint8Array,
_2497: o => o instanceof Uint8ClampedArray,
_2498: o => o instanceof Int16Array,
_2499: o => o instanceof Uint16Array,
_2500: o => o instanceof Int32Array,
_2501: o => o instanceof Uint32Array,
_2502: o => o instanceof Float32Array,
_2503: o => o instanceof Float64Array,
_2504: o => o instanceof ArrayBuffer,
_2505: o => o instanceof DataView,
_2506: o => o instanceof Array,
_2507: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
_2509: o => {
            const proto = Object.getPrototypeOf(o);
            return proto === Object.prototype || proto === null;
          },
_2510: o => o instanceof RegExp,
_2511: (l, r) => l === r,
_2512: o => o,
_2513: o => o,
_2514: o => o,
_2515: b => !!b,
_2516: o => o.length,
_2519: (o, i) => o[i],
_2520: f => f.dartFunction,
_2521: l => arrayFromDartList(Int8Array, l),
_2522: (data, length) => {
          const jsBytes = new Uint8Array(length);
          const getByte = dartInstance.exports.$uint8ListGet;
          for (let i = 0; i < length; i++) {
            jsBytes[i] = getByte(data, i);
          }
          return jsBytes;
        },
_2523: l => arrayFromDartList(Uint8ClampedArray, l),
_2524: l => arrayFromDartList(Int16Array, l),
_2525: l => arrayFromDartList(Uint16Array, l),
_2526: l => arrayFromDartList(Int32Array, l),
_2527: l => arrayFromDartList(Uint32Array, l),
_2528: l => arrayFromDartList(Float32Array, l),
_2529: l => arrayFromDartList(Float64Array, l),
_2530: (data, length) => {
          const read = dartInstance.exports.$byteDataGetUint8;
          const view = new DataView(new ArrayBuffer(length));
          for (let i = 0; i < length; i++) {
              view.setUint8(i, read(data, i));
          }
          return view;
        },
_2531: l => arrayFromDartList(Array, l),
_2532:       (s, length) => {
        if (length == 0) return '';

        const read = dartInstance.exports.$stringRead1;
        let result = '';
        let index = 0;
        const chunkLength = Math.min(length - index, 500);
        let array = new Array(chunkLength);
        while (index < length) {
          const newChunkLength = Math.min(length - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(s, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      }
      ,
_2533:     (s, length) => {
      if (length == 0) return '';

      const read = dartInstance.exports.$stringRead2;
      let result = '';
      let index = 0;
      const chunkLength = Math.min(length - index, 500);
      let array = new Array(chunkLength);
      while (index < length) {
        const newChunkLength = Math.min(length - index, 500);
        for (let i = 0; i < newChunkLength; i++) {
          array[i] = read(s, index++);
        }
        if (newChunkLength < chunkLength) {
          array = array.slice(0, newChunkLength);
        }
        result += String.fromCharCode(...array);
      }
      return result;
    }
    ,
_2534:     (s) => {
      let length = s.length;
      let range = 0;
      for (let i = 0; i < length; i++) {
        range |= s.codePointAt(i);
      }
      const exports = dartInstance.exports;
      if (range < 256) {
        if (length <= 10) {
          if (length == 1) {
            return exports.$stringAllocate1_1(s.codePointAt(0));
          }
          if (length == 2) {
            return exports.$stringAllocate1_2(s.codePointAt(0), s.codePointAt(1));
          }
          if (length == 3) {
            return exports.$stringAllocate1_3(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2));
          }
          if (length == 4) {
            return exports.$stringAllocate1_4(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3));
          }
          if (length == 5) {
            return exports.$stringAllocate1_5(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4));
          }
          if (length == 6) {
            return exports.$stringAllocate1_6(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5));
          }
          if (length == 7) {
            return exports.$stringAllocate1_7(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6));
          }
          if (length == 8) {
            return exports.$stringAllocate1_8(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6), s.codePointAt(7));
          }
          if (length == 9) {
            return exports.$stringAllocate1_9(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6), s.codePointAt(7), s.codePointAt(8));
          }
          if (length == 10) {
            return exports.$stringAllocate1_10(s.codePointAt(0), s.codePointAt(1), s.codePointAt(2), s.codePointAt(3), s.codePointAt(4), s.codePointAt(5), s.codePointAt(6), s.codePointAt(7), s.codePointAt(8), s.codePointAt(9));
          }
        }
        const dartString = exports.$stringAllocate1(length);
        const write = exports.$stringWrite1;
        for (let i = 0; i < length; i++) {
          write(dartString, i, s.codePointAt(i));
        }
        return dartString;
      } else {
        const dartString = exports.$stringAllocate2(length);
        const write = exports.$stringWrite2;
        for (let i = 0; i < length; i++) {
          write(dartString, i, s.charCodeAt(i));
        }
        return dartString;
      }
    }
    ,
_2535: () => ({}),
_2536: () => [],
_2537: l => new Array(l),
_2538: () => globalThis,
_2539: (constructor, args) => {
      const factoryFunction = constructor.bind.apply(
          constructor, [null, ...args]);
      return new factoryFunction();
    },
_2540: (o, p) => p in o,
_2541: (o, p) => o[p],
_2542: (o, p, v) => o[p] = v,
_2543: (o, m, a) => o[m].apply(o, a),
_2545: o => String(o),
_2546: (p, s, f) => p.then(s, f),
_2547: s => {
      if (/[[\]{}()*+?.\\^$|]/.test(s)) {
          s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
      }
      return s;
    },
_2550: x0 => x0.index,
_2551: x0 => x0.groups,
_2552: x0 => x0.length,
_2554: (x0,x1) => x0[x1],
_2557: x0 => x0.flags,
_2558: x0 => x0.multiline,
_2559: x0 => x0.ignoreCase,
_2560: x0 => x0.unicode,
_2561: x0 => x0.dotAll,
_2562: (x0,x1) => x0.lastIndex = x1,
_2564: (o, p) => o[p],
_2565: (o, p, v) => o[p] = v,
_2566: (o, p) => delete o[p],
_2626: x0 => x0.status,
_2627: (x0,x1) => x0.responseType = x1,
_2629: x0 => x0.response,
_2630: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2630(f,arguments.length,x0) }),
_2631: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2631(f,arguments.length,x0) }),
_2632: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12) => ({client_id: x0,scope: x1,include_granted_scopes: x2,redirect_uri: x3,callback: x4,state: x5,enable_granular_consent: x6,enable_serial_consent: x7,login_hint: x8,hd: x9,ux_mode: x10,select_account: x11,error_callback: x12}),
_2633: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2633(f,arguments.length,x0) }),
_2634: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2634(f,arguments.length,x0) }),
_2635: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) => ({client_id: x0,callback: x1,scope: x2,include_granted_scopes: x3,prompt: x4,enable_granular_consent: x5,enable_serial_consent: x6,login_hint: x7,hd: x8,state: x9,error_callback: x10}),
_2637: () => globalThis.google.accounts.oauth2,
_2650: x0 => x0.error,
_2658: x0 => x0.expires_in,
_2664: x0 => x0.error,
_2667: x0 => x0.type,
_2672: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2672(f,arguments.length,x0) }),
_2675: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16) => ({client_id: x0,auto_select: x1,callback: x2,login_uri: x3,native_callback: x4,cancel_on_tap_outside: x5,prompt_parent_id: x6,nonce: x7,context: x8,state_cookie_domain: x9,ux_mode: x10,allowed_parent_origin: x11,intermediate_iframe_close_callback: x12,itp_support: x13,login_hint: x14,hd: x15,use_fedcm_for_prompt: x16}),
_2679: () => globalThis.google.accounts.id,
_2724: x0 => x0.error,
_2726: x0 => x0.credential,
_2734: x0 => globalThis.onGoogleLibraryLoad = x0,
_2735: f => finalizeWrapper(f, function() { return dartInstance.exports._2735(f,arguments.length) }),
_2787: (x0,x1) => x0.withCredentials = x1,
_2789: x0 => x0.responseURL,
_2790: x0 => x0.status,
_2791: x0 => x0.statusText,
_2793: (x0,x1) => x0.responseType = x1,
_2794: x0 => x0.response,
_4119: (x0,x1) => x0.src = x1,
_4121: (x0,x1) => x0.type = x1,
_4125: (x0,x1) => x0.async = x1,
_4127: (x0,x1) => x0.defer = x1,
_4129: (x0,x1) => x0.crossOrigin = x1,
_4131: (x0,x1) => x0.text = x1,
_4606: () => globalThis.window,
_4652: x0 => x0.location,
_4671: x0 => x0.navigator,
_4933: x0 => x0.trustedTypes,
_4934: x0 => x0.sessionStorage,
_4950: x0 => x0.hostname,
_5041: x0 => x0.geolocation,
_5044: x0 => x0.mediaDevices,
_5046: x0 => x0.permissions,
_5060: x0 => x0.userAgent,
_7383: () => globalThis.document,
_7478: x0 => x0.head,
_7827: (x0,x1) => x0.id = x1,
_14328: () => globalThis.console,
_14357: () => globalThis.window.flutterCanvasKit,
_14358: () => globalThis.window._flutter_skwasmInstance,
_14359: x0 => x0.name,
_14360: x0 => x0.message,
_14361: x0 => x0.code,
_14363: x0 => x0.customData
    };

    const baseImports = {
        dart2wasm: dart2wasm,


        Math: Math,
        Date: Date,
        Object: Object,
        Array: Array,
        Reflect: Reflect,
    };

    const jsStringPolyfill = {
        "charCodeAt": (s, i) => s.charCodeAt(i),
        "compare": (s1, s2) => {
            if (s1 < s2) return -1;
            if (s1 > s2) return 1;
            return 0;
        },
        "concat": (s1, s2) => s1 + s2,
        "equals": (s1, s2) => s1 === s2,
        "fromCharCode": (i) => String.fromCharCode(i),
        "length": (s) => s.length,
        "substring": (s, a, b) => s.substring(a, b),
    };

    dartInstance = await WebAssembly.instantiate(await modulePromise, {
        ...baseImports,
        ...(await importObjectPromise),
        "wasm:js-string": jsStringPolyfill,
    });

    return dartInstance;
}

// Call the main function for the instantiated module
// `moduleInstance` is the instantiated dart2wasm module
// `args` are any arguments that should be passed into the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

