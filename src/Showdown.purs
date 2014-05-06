module Showdown where

  makeHtml :: String -> String
  makeHtml = convertor {}

  foreign import convertor
    "function convertor(options) {\
    \  return function(markdown) {\
    \    var convertor = new Showdown.convertor(options);\
    \    return convertor(markdown);\
    \  }\
    \}" :: forall r. { | r } -> String -> String
