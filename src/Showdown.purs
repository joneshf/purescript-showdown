module Showdown where

  makeHtml :: String -> String
  makeHtml = converter {}

  foreign import converter
    "function converter(options) {\
    \  return function(markdown) {\
    \    var converter = new Showdown.converter(options);\
    \    return converter.makeHtml(markdown);\
    \  };\
    \}" :: forall r. { | r } -> String -> String
