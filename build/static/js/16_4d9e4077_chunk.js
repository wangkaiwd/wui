(window.webpackJsonpWUI=window.webpackJsonpWUI||[]).push([[16],{23:function(e,a,n){"use strict";n.r(a);var t=n(1),o=n(0),r=n.n(o),u=n(2),i=Object(u.a)("form");a.default=function(e){var a=e.className,n=(e.formData,e.fields),o=e.errors,s=(e.onChange,e.onSubmit,e.buttons),m=t.b(e,["className","formData","fields","errors","onChange","onSubmit","buttons"]),c=function(a,n){var o,r=t.a({},e.formData,((o={})[a]=n.target.value,o));e.onChange(r)};return r.a.createElement("form",t.a({className:Object(u.b)(i(),a),onSubmit:function(a){a.preventDefault(),e.onSubmit()},onReset:function(){var a={};for(var n in e.formData)a[n]="";e.onChange(a)}},m),n.map(function(a){return r.a.createElement("div",{key:a.key},a.label,r.a.createElement("input",{value:e.formData[a.key],type:a.input.type,onChange:c.bind(null,a.key)}),o[a.key])}),r.a.createElement("div",{className:i("buttons")},s))}}}]);