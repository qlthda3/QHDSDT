var size = 0;
var placement = 'point';
var style_01highSpeed_82 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_02interCity_81 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,191,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_03commuterLine_80 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
function categories_1ExpressLineM1_104(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'Nét liền':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(76,95,153,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Nét đứt':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(76,95,153,1.0)', lineDash: [6.992,3.496], lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_1ExpressLineM1_104 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("attrib_1");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = categories_1ExpressLineM1_104(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
var style_1ExpressLineM8_123 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
function categories_1ExpressLineM8_96(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'Nét liền':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Nét đứt':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,127,0,1.0)', lineDash: [6.992,3.496], lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_1ExpressLineM8_96 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("attrib_1");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = categories_1ExpressLineM8_96(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
var style_2RegularLine2A_103 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,223,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_2RegularLineM10_94 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(102,153,204,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_2RegularLineM11_93 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,178,102,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_2RegularLineM14_90 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,159,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_2RegularLineM16_88 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,76,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_2RegularLineM2_102 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,204,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_2RegularLineM3_101 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_2RegularLineM4_100 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_2RegularLineM5_99 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,159,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_2RegularLineM6_98 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,102,204,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_2RegularLineM7_97 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(102,204,204,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_3LRTM13_91 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,76,114,1.0)', lineDash: [10.032,5.016], lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_3LRTM15_89 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: [10.032,5.016], lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_3LRTM9_95 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,255,1.0)', lineDash: [10.032,5.016], lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_3LRTORBRTM13_122 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,76,114,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_3LRTORBRTM17_121 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,127,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_4BRTM12_92 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,127,102,1.0)', lineDash: [10.032,5.016,2.508,5.016], lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_4BRTM17_87 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,127,255,1.0)', lineDash: [10.032,5.016,2.508,5.016], lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_4BRTM18_86 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,223,255,1.0)', lineDash: [10.032,5.016,2.508,5.016], lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_4Railway_120 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
function categories_4Railway_85(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'DS':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(99,100,102,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: [3.952,1.976], lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Nét đứt':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(99,100,102,1.0)', lineDash: [6.992,3.496], lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_4Railway_85 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("attrib_1");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = categories_4Railway_85(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
var style_6airport_84 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
image: new ol.style.Icon({
imgSize: [580, 580],
scale: 0.07758620689655173,
anchor: [290.0, 290.0],
anchorXUnits: "pixels",
anchorYUnits: "pixels",
rotation: 0.0,
src: "styles/transport_airport.svg"
}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.Icon({
imgSize: [580, 580],
scale: 0.07758620689655173,
anchor: [290.0, 290.0],
anchorXUnits: "pixels",
anchorYUnits: "pixels",
rotation: 0.0,
src: "styles/transport_airport_1.svg"
}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_7railwaystation2secondary_83 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
image: new ol.style.RegularShape({radius: 13.2 + size, points: 5,
radius2: 6.6, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(184,8,8,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.RegularShape({radius: 14.4 + size, points: 5,
radius2: 7.2, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Depot_157 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
image: new ol.style.Circle({radius: 9.2 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.RegularShape({radius: 8.0 + size, points: 5,
radius2: 4.0, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT10_109 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,0,102,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT15_108 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT16_107 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,0,204,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT1_119 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT2A_117 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,153,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT2_118 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,153,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT3_116 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT4_115 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,0,38,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT5_114 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT6_113 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT7_112 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,76,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT8_111 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSDT9_110 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,0,114,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_DSQG_155 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Duongsatvung_156 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
function categories_Ga_105(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '5-Station-transfer 2+':
return [ new ol.style.Style({
image: new ol.style.Circle({radius: 6.0 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(72,123,182,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '6-airport':
return [ new ol.style.Style({
image: new ol.style.Icon({
imgSize: [580, 580],
scale: 0.07758620689655173,
anchor: [290.0, 290.0],
anchorXUnits: "pixels",
anchorYUnits: "pixels",
rotation: 0.0,
src: "styles/transport_airport_2.svg"
}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.Icon({
imgSize: [580, 580],
scale: 0.07758620689655173,
anchor: [290.0, 290.0],
anchorXUnits: "pixels",
anchorYUnits: "pixels",
rotation: 0.0,
src: "styles/transport_airport_3.svg"
}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '7-railway station-1-primary':
return [ new ol.style.Style({
image: new ol.style.Circle({radius: 6.0 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(179,92,21,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(247,128,30,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Vuông':
return [ new ol.style.Style({
image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.RegularShape({radius: 2.66666 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_Ga_105 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_Ga_105(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
var style_Ga_51 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
image: new ol.style.Circle({radius: 6.0 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(0,95,127,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
text: new ol.style.Text({
text: 'G',
fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_02interCity_59 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,191,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_4BRTM18_61 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,223,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_4Railwaywhite_55 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_4Railway_56 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_CcTuynmi_176 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 5.699999999999999}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(250,255,255,1.0)', lineDash: [12.7115168,6.3557584], lineCap: 'round', lineJoin: 'round', width: 3.1778792}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DCaotoc_52 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_Dduongsattocdocao_58 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DPcCaotoc_53 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,255,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT10_68 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,0,102,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT12_66 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,95,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT1_78 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT2A_76 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,153,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT2_77 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,153,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT3_75 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT4_74 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,0,38,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT5_73 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT6_72 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT7_71 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,76,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT8_70 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT9_69 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,0,114,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT_11_67 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT_13_65 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT_15_64 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT_16_63 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,0,204,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_DSDT_17_62 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_ketnoidsdt_54 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(132,132,132,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M01_50 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M02A_48 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,102,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M02_49 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(76,153,114,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M03_47 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,204,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M04_46 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,159,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M05_45 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,159,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M06_44 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(223,255,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M07_43 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,204,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M08_42 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,63,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M09_41 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M10_40 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,255,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M11_39 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(114,76,153,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M12_38 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,255,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M13_37 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M14_36 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(63,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M15_35 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,127,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_M16_34 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,255,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_Monorail_60 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,63,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_layer_SQG_Thng2050_57 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn10_179 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(221,0,109,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn11_178 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(85,0,114,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn12_177 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,112,148,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn1_189 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn2A_187 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,184,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn2_188 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,184,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn3_186 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn4_185 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(184,0,45,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn5_184 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn6_183 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,0,255,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn7_182 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(184,91,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn8_181 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,255,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Layer_Tuyn9_180 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(184,0,138,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Monorail_106 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,63,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_nearbyProvince_79 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,159,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Phngn1_225 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Phngn2_224 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_Phngn3_223 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,0,114,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PhngnVQHXDdexuat_222 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(185,185,3,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_10_165 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,95,127,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_11_164 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,255,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_12_163 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,255,255,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_13_162 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(63,127,79,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_14_161 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,255,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_15_160 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(191,127,255,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_16_159 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,127,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_17_158 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(51,0,204,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_1_175 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_2A_173 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,0,95,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_2_174 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,76,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_3_172 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_4_171 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,0,31,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_5_170 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_6_169 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,0,255,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_7_168 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,63,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_8_167 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,255,0,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_PLine_9_166 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,0,95,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT10_132 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,0,102,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT11_131 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,255,0,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT12_130 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,95,127,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT15_129 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,127,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT16_128 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,0,204,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT17_127 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT1_142 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT2A_140 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,153,0,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT2_141 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,153,0,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT3_139 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT4_138 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,0,38,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT5_137 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT6_136 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,0,255,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT7_135 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,76,0,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT8_134 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,255,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100DSDT9_133 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,0,114,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100dsDT_126 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,255,255,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Ga_124 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
image: new ol.style.Circle({radius: 6.0 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.Circle({radius: 4.0 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Monorail_125 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,63,0,1.0)', lineDash: [13.072,6.536,3.268,6.536], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen14_144 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen16_143 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(153,0,38,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen1_154 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(76,76,153,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen2A_152 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,255,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen2_153 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(102,204,102,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen3_151 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen4_150 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,46,46,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen5_149 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen6_148 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(178,102,204,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen7_147 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,204,204,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen8_146 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH100Tuyen9_145 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(204,0,153,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_QH519Depot_204 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
image: new ol.style.Circle({radius: 8.0 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.Circle({radius: 6.0 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.Circle({radius: 2.0 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
function categories_QH519Ga_205(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '1':
return [ new ol.style.Style({
image: new ol.style.Circle({radius: 4.0 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.Circle({radius: 2.66666 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2':
return [ new ol.style.Style({
image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.RegularShape({radius: 2.66666 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2A':
return [ new ol.style.Style({
image: new ol.style.Circle({radius: 4.0 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.Circle({radius: 2.66666 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '3':
return [ new ol.style.Style({
image: new ol.style.Circle({radius: 4.0 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.Circle({radius: 2.66666 + size,
displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '4':
return [ new ol.style.Style({
image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.RegularShape({radius: 2.66666 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '5':
return [ new ol.style.Style({
image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.RegularShape({radius: 2.66666 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '6':
return [ new ol.style.Style({
image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.RegularShape({radius: 2.66666 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '7':
return [ new ol.style.Style({
image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.RegularShape({radius: 2.66666 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '8':
return [ new ol.style.Style({
image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
}),new ol.style.Style({
image: new ol.style.RegularShape({radius: 2.66666 + size, points: 4,
angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_QH519Ga_205 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("tuyen");
var labelFont = "13.0px \'Open Sans\', sans-serif";
var labelFill = "#323232";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if (feature.get("tenga") !== null) {
labelText = String(feature.get("tenga"));
}
var style = categories_QH519Ga_205(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
var style_QHGT_221 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(190,178,151,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
function categories_SDD3phankhu_220(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '0':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '1_cau vuot':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,0,63,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'D_mat nuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,204,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Dat cong cong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,0,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat o hien trang':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,127,63,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DAT TRUONG DAO TAO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLAMNGHIEP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,76,76,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(95,127,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'GT_duog_sat_dthi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(63,127,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Level 1':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Level 50':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Level 56':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Level 6':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Level 63':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'MocDinhThua':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh_cay xanh cach ly':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,95,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh_Dat cay xanh chuyen de':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh_Dat cong nghiep':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh_dat cx TDTT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-dat cay xanh do thi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,38,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-dat cay xanh dvo':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,153,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-dat cong cong dvo':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-dat cong tinh dau moi HTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(114,76,153,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-dat ton giao':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,0,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-mat nuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,102,204,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-nhom nha o':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,153,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-truong THCS TH mam non':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,76,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-truong THPT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,38,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(234,120,83,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDD3phankhu_220 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDD3phankhu_220(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDA6_33(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'dat cndvo':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANHCLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDUTRUPT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,76,153,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Di Tich':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_AN_QP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_Congcong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_Coquan':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_langxom':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_TH_giaoduc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,159,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANHTHANHPHO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(19,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CCTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-dathonhop':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,76,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-datothaptang':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-hatang':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-matnuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDA6_33 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "13.0px \'Open Sans\', sans-serif";
var labelFill = "#323232";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDA6_33(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDH12_32(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'H-PK GA':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Khu vuc Du an Rieng':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(173,173,173,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatANQP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatCCDothi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatCongTrinhHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(132,132,132,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatCQ-VienNC-TruongDT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatCXDoThi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatCXDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatCXDVO @ 1':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatDancu_HC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatDancu_HC @ 1':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatDiTich-Ton Giao':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatHonHop':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,76,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatHonHop @ 1':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,76,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatHTKT_BaiDoXe':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatMatNuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatMatNuoc @ 1':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatNG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,95,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatODT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_Datruonghoc_THCS':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDH12_32 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDH12_32(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDH13_31(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '!phamviga':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '1_cau vuot':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2_HACH TREN CAO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Bo via-Q':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'ĐẤT NGOẠI GIAO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,95,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANHCLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP @ 1':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'GT_text_ghi_chu':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_Coquan':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_DITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_Odothi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANH-KHUVUC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,31,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-cayxanhDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANHTHANHPHO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(19,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-congcongkhuvuc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-datohienco':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-matnuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'h-quocphong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'HATCH CC DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'HATCH-PK GA':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'kega_REV':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DatMatNuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_TH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,152,218,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDH13_31 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDH13_31(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDH14_30(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '1_cau vuot':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'C1':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'C2':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'C3':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DAT NT-MG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATOTHAPTANG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Khu vuc Du an Rieng':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(173,173,173,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(219,102,73,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDH14_30 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDH14_30(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDH21_29(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'BO-LODAT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANHCLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANHDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATTH-NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'KHUNG500':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(94,215,94,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDH21_29 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDH21_29(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDH22_28(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '!!! BO-LODAT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,79,63,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANHCLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATTH-NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANH-KHUVUC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,31,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANHTHANHPHO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(19,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CCTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(208,73,32,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDH22_28 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDH22_28(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDH23_27(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '!phamviga':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@cxdonvio':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '1_DUONG PKV':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,0,57,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2-h ton giao':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'CACHLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(191,255,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'cong thoat nuoc thai':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DAT_CAYXANH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(51,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_Congcong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_DITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_Odothi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_TH_giaoduc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,159,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANHTHANHPHO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(19,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'h-ccTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,0,0,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-congcongkhuvuc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'h-coquan':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,95,76,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CXKV':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-dathonhop':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,76,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'h-dato':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-HATANG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(91,91,91,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-LANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-matnuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'h-quocphong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'HAT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'HATCH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(51,51,51,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'KIHIEU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_CT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'SDD_DX':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(211,121,101,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDH23_27 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDH23_27(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDH24_26(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'BO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,31,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-AN_QP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,95,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANH-KHUVUC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,31,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-cayxanhcachly':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(191,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-cayxanhDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANHTHANHPHO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(19,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'h-ccTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-Congcong DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-congcongkhuvuc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-Coquan':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-dat o moi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-dathonhop':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,76,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-datohienco':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-DITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-langxom':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-matnuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TH_giaoduc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'HATCH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(51,51,51,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(19,52,238,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDH24_26 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDH24_26(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDHuyenChuongMy_219(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'Color_11':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,100,80,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_13':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,80,70,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_131':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(170,255,255,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_18':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,0,0,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_21':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(250,170,160,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_211':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,160,255,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_254':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,241,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_40':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,170,50,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_41':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,210,160,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_51':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,252,140,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_60':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(190,255,30,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_7':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_71':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(180,255,180,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_9':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(205,170,205,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Color_91':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(110,255,100,0.7843137254901961)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(146,69,206,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDHuyenChuongMy_219 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDHuyenChuongMy_219(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDN10_16(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '@_Nong Nghiep':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'CAY XANH KHU VUC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'CD-220KV':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'CX khu o':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,31,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANHCLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCONGNGHIEP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATOTHAPTANG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATTH-NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'TNT-CONG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(186,83,230,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDN10_16 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDN10_16(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDN11_15(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '@_Dat DA Dac Biet':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,191,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@- DAT CAY XANH CANH QUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'CAY XANH KHU VUC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANHCLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCONGNGHIEP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATOTHAPTANG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATTH-NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hatch nuoc ho':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,63,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'KIHIEU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Lang Trong CX':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(63,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'ThaiDgSatDoThi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'tim long':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(91,91,91,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(119,228,24,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDN11_15 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDN11_15(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDN1_25(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '0':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_AN_QP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_Congcong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_Congnghiep':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,0,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_Coquan':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_DITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_langxom':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_TH_giaoduc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,159,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANH-KHUVUC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,31,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-cayxanhcachly':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(191,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-cayxanhDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANHTHANHPHO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(19,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CCTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-congcongkhuvuc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-dathonhop':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,76,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-datothaptang':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-hatang':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-matnuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(98,17,204,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDN1_25 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDN1_25(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDN2_24(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '@- DAT CAY XANH CANH QUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2.dien tu -det may':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '3.thuc pham-hoaduoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(159,127,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '4-hach dtht':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '4.det may':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(178,102,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAY XANH DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(63,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANHCLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DOTHI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATKHOTANGBENBAI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TRUONGHOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hatchcau':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_cc_YTE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_CX_cachli':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_CX_congvien':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_CX_DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_CX_tronghoa':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_DATO_sinhthai':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(223,255,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_DIAPHUONG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,159,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_DIDAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_DITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_HO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,76,153,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_HTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_truong_THCS':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Tron ten o dat':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,38,153,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(222,102,136,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDN2_24 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDN2_24(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDN3_23(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '0':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2-h o lxom-do thi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DOTHI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATTH-NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_Coquan':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANH-KHUVUC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,31,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-cayxanhcachly':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(191,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-cayxanhdonvio':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-cx canh quan':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,31,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-hatang':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-matnuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-nha o':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(231,60,197,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDN3_23 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDN3_23(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDN4_22(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '@_O Moi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '+camxaydung':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,153,102,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_Coquan':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANH-KHUVUC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,31,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-cayxanhcachly':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(191,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-cayxanhdonvio':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CAYXANHTHANHPHO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(19,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CCTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-congcongDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-congcongkhuvuc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-congnghiep':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-DANDAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-dtich':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-hatang':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-langxom2':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-matnuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-nha o':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TH_giaoduc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'KIHIEU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'KYHIEU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'nut':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(91,53,203,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDN4_22 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDN4_22(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDN5_21(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '4-hach dtht':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '4-hacth-cai tao':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'b-truonghoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAY XANH DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(63,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH CLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DOTHI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATKHOTANGBENBAI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TRUONGHOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'KIHIEU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'KYHIEU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(213,157,46,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDN5_21 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDN5_21(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDN6_20(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'cong cong dvo':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'cong cong khu vuc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DAN DAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DAT CAY XANH DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,204,102,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANHCLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCONGNGHIEP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATTH-NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-matnuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hatch-CC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,0,63,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'odt dot dau':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,102,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Songho':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(103,230,232,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDN6_20 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDN6_20(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDN7_19(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '0':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2-h o lxom-cxanh':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '4-hach dtht':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '4-hacth-cai tao':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'b-truonghoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAY XANH DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(63,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH CANH QUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,76,19,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH CLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DOTHI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TRUONGHOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'KIHIEU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(216,138,237,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDN7_19 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDN7_19(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDN8_18(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '0':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '4-CC-DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,102,102,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '4-hach dtht':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '4-hacth-cai tao':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAY XANH DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(63,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH CANH QUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,76,19,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH CLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DOTHI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TRUONGHOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(163,33,206,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDN8_18 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDN8_18(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDN9_17(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '!giaothongchinh':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_Nong Nghiep':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_O Moi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@kyhieu':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '0':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2-h o lxom-cxanh':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'CAY XANH KHU VUC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DOTHI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCONGNGHIEP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATTH-NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'duong chinh':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H_langxom':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'h- ko xd':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(114,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TRUONGHOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hatch-cayxxanh':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(51,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Layer2':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,63,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'PHAN DOT2':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_cc_CHO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_cc_VANHOA':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_cc_YTE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_COQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_CX_cachli':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_CX_congvien':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_CX_DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_CX_rung':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_DIDAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_DITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_HO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,76,153,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_HTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_LANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(178,204,102,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_QuanSu':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_truong_NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'zBolinhtinh':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,102,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(108,206,38,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDN9_17 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDN9_17(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDPhuctho_14(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '.hdattrongluanuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'D.CongNghiep':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'd.nghia trang':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(130,155,176,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'd.o NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat cong ty':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,95,76,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DAT CX-TDTT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat du tru phat trien':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,204,153,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Dat Khai Thac VLXD':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat o dan cu moi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat san xuat Kinh doanh':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Dat TH Moi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat-tongiao':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'datcoquan':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(125,221,150,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'daumoihatang':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(91,91,91,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H DL moi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,191,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TRUONGHOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H.DCC Moi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hack dat cay an qua':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,76,38,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'HCXST':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hd.CX-TDTT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hd.TDTT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hdatconcong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hdatcongnghiep':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,0,204,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'HDATODOTHI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'HDATONONGTHON':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hdattruonghoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,95,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hddulich':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(95,153,76,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'htch-new resi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,223,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'htch-water':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'PHAN DOT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'songsuoi-l':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'TMDV':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,127,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'TTCN cu':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,127,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'TTCN moi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,127,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,96,175,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDPhuctho_14 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDPhuctho_14(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDPKR_13(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '1_cau vuot':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Dat cong cong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat o hien trang':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,127,63,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh_cay xanh cach ly':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,95,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh_Dat cay xanh chuyen de':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-dat cay xanh do thi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,38,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-dat cay xanh dvo':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-dat cong cong dvo':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-dat cong tinh dau moi HTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(114,76,153,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-dat ton giao':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-nhom nha o':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-truong THCS TH mam non':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,76,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'qh-truong THPT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,38,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'sdd_DIAPHUONG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,159,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(149,211,42,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDPKR_13 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDPKR_13(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDS1_12(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'Cay xanh DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAY XANH DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(63,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DOTHI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DAtHHDiaPhuong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATOTHAPTANG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATTH-NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'GT_depot':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'h_CongCong_DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(237,89,114,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDS1_12 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDS1_12(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDS2_11(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'CAY XANH KHU VUC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAY XANH DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(63,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DOTHI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DAtHHDiaPhuong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATOTHAPTANG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TRUONGHOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'KIHIEU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(208,205,26,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDS2_11 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDS2_11(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDS3_10(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'DATCAY XANH DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(63,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH KO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANH TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCAYXANHCLY':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC DOTHI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DAtHHDiaPhuong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATOTHAPTANG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'h_CongCong_DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TRUONGHOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(184,203,88,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDS3_10 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDS3_10(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDS4_9(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '@- DAT CAY XANH CANH QUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '4-hach dtht':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'cayxanh cach ly':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(31,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DAT CAY XANH khu vuc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCC TP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCOQUAN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCXKHUO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(38,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDOXE':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHONHOP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,51,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATHTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATLANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATMATNUOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATQUANSU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATTH-NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TRUONGHOC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'KIHIEU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(238,127,181,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDS4_9 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDS4_9(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDS5_8(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case 'H_CayXanh_DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'h_CongCong_DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-BAIDOXE-DVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(91,91,91,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-BAIDOXE-KHUO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(91,91,91,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CCKV':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CCTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CN':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(191,0,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CQ':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CXKV':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-CXTP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,76,38,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-DATOMOI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-DITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-HonHop':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-LANGXOM':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-QUOCPHONG':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(220,167,77,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-TH-THCS':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'H-THPT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'HatchSongho':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,191,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'KYHIEU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(13,217,43,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDS5_8 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDS5_8(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
function categories_SDDSonTay_7(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor, bufferWidth,
placement) {
var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
switch(valueStr) {case '-H-Cayxanh-CV':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,38,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '-H-Cayxanh-CV dvo':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@ Cay xanh khu vuc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_Cay an Qua':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(159,255,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_Cay Xanh':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,38,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_Cay xanh thanh pho':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_Cong Cong':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_cong cong KV':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_CX Cach Ly':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,63,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_Du Lich':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,191,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_Mat Nuoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,63,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_matnuoc_hat':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,63,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_Nc New Hatch':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,63,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_ngiadia_hat':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(192,192,192,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_Nong Nghiep':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_O Moi':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '@_Truong Dai Hoc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '08_Hatch':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,127,102,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2-h cn':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(159,127,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2-h coquan':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2-h o co':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,114,76,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2-h o lxom-cxanh':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2-h o Pho cu':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case '2009-10-17.Ban nen2$0$mauho':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Baidoxe':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(132,132,132,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'CCC':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dao o ONT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Dat Bai Tap Ket-XL Rac Thai':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(127,111,63,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat chan nuoi tap trung':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat chuyen rau':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,204,51,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Dat CXCV-TDTT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,255,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat di tich':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'đất mau':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat o do thi du lich':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,191,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Dat O Nong Thon':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat o tdcu':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Dat Rung San Xuat':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(76,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DAT RUNG- LAM NGHIEP':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,127,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat san xuat kinh doanh':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(194,238,100,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'dat trong Lua':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,204,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATCCDVO':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'DATDITICH':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'h- ton giao':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'hacth cc':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,0,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'HTKT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,128,128,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'kihieu':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(232,198,75,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'Lang xom do thi hoa':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(204,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'mo':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'N-dat quan su':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'QUAN SU':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,153,0,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'RANH GIOI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'RANHGIOI':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'T-hatch Ditich':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(153,76,76,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
case 'truonghoc-NT':
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,159,127,0.29411764705882354)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;
default:
return [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(226,26,22,1.0)'}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
break;}};
var style_SDDSonTay_7 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("Name");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'point';
if ("" !== null) {
labelText = String("");
}
var style = categories_SDDSonTay_7(feature, value, size, resolution, labelText,
labelFont, labelFill, bufferColor,
bufferWidth, placement);
return style;
};
var size = 0;
var placement = 'point';
var style_T10_192 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(221,0,109,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T11_191 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(85,0,114,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T12_190 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,112,148,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T1A_202 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T1_203 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T2A_200 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,184,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T2_201 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,184,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T3_199 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T4_198 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(184,0,45,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T5_197 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T6_196 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(127,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T7_195 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(184,91,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T8_194 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_T9_193 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(184,0,138,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_1_218 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(35,149,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_2A_216 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(185,185,3,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_2_217 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_3_215 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(148,72,72,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_4_214 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(151,0,3,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_5_213 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_6_212 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(165,1,220,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_7_211 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(221,137,109,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_8_210 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(254,1,252,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_M1_208 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(8,177,25,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_M2_207 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(39,35,32,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_M3_206 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(9,8,184,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
var size = 0;
var placement = 'point';
var style_tuyen_VT_209 = function(feature, resolution){
var context = {
feature: feature,
variables: {}
};
var labelText = "";
var value = feature.get("");
var labelFont = "10px, sans-serif";
var labelFill = "#000000";
var bufferColor = "";
var bufferWidth = 0;
var textAlign = "left";
var offsetX = 0;
var offsetY = 0;
var placement = 'line';
if ("" !== null) {
labelText = String("");
}
var style = [ new ol.style.Style({
stroke: new ol.style.Stroke({color: 'rgba(83,83,83,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
text: createTextStyle(feature, resolution, labelText, labelFont,
labelFill, placement, bufferColor,
bufferWidth)
})];
return style;
};
