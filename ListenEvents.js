// https://reactjs.org/docs/events.html#supported-events
// Clipboard Events
onCopy onCut onPaste
// Properties:
    DOMDataTransfer clipboardData

// Composition Events
onCompositionEnd onCompositionStart onCompositionUpdate
// Properties:
    string data

// Keyboard Events
onKeyDown onKeyPress onKeyUp
// Properties:
    boolean altKey
    number charCode
    boolean ctrlKey
    boolean getModifierState(key)
    string key
    number keyCode
    string locale
    number location
    boolean metaKey
    boolean repeat
    boolean shiftKey
    number which

// Focus Events
onFocus onBlur
// These focus events work on all elements in the React DOM, not just form elements.
// Properties:
    DOMEventTarget relatedTarget
    
// Form Events
onChange onInput onInvalid onSubmit
// For more information about the onChange event, see Forms.

// Mouse Events
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
// The onMouseEnter and onMouseLeave events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.
// Properties:
    boolean altKey
    number button
    number buttons
    number clientX
    number clientY
    boolean ctrlKey
    boolean getModifierState(key)
    boolean metaKey
    number pageX
    number pageY
    DOMEventTarget relatedTarget
    number screenX
    number screenY
    boolean shiftKey

// Selection Events
onSelect

// Touch Events
onTouchCancel onTouchEnd onTouchMove onTouchStart
// Properties:
    boolean altKey
    DOMTouchList changedTouches
    boolean ctrlKey
    boolean getModifierState(key)
    boolean metaKey
    boolean shiftKey
    DOMTouchList targetTouches
    DOMTouchList touches

// UI Events
onScroll
// Properties:
    number detail
    DOMAbstractView view

// Wheel Events
onWheel
// Properties:
    number deltaMode
    number deltaX
    number deltaY
    number deltaZ

// Media Events
onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
onTimeUpdate onVolumeChange onWaiting

// Image Events
onLoad onError

// Animation Events
onAnimationStart onAnimationEnd onAnimationIteration
// Properties:
  string animationName
  string pseudoElement
  float elapsedTime

// Transition Events
onTransitionEnd
// Properties:
  string propertyName
  string pseudoElement
  float elapsedTime

// Other Events
onToggle