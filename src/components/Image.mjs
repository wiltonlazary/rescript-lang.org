// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function Image$default(Props) {
  var src = Props.src;
  var withShadowOpt = Props.withShadow;
  var caption = Props.caption;
  var withShadow = withShadowOpt !== undefined ? withShadowOpt : false;
  var shadow = withShadow ? "shadow-md" : "";
  return React.createElement("div", {
              className: "mt-8 mb-12 md:-mx-16"
            }, React.createElement("a", {
                  href: src,
                  rel: "noopener noreferrer",
                  target: "_blank"
                }, React.createElement("img", {
                      className: "w-full " + shadow,
                      src: src
                    })), caption !== undefined ? React.createElement("div", {
                    className: "mt-4 text-14 text-gray-60 md:ml-16"
                  }, caption) : null);
}

var $$default = Image$default;

export {
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
