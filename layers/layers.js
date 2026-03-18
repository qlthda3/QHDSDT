var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleTraffic_1 = new ol.layer.Tile({
            'title': 'Google Traffic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_2 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_4 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_5 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_6 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_1769_DaumoiHaNoi_modified_7 = new ol.layer.Image({
        opacity: 1,
        
    title: '@1769_Dau moi Ha Noi_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1769_DaumoiHaNoi_modified_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11706958.700315, 2327589.562842, 11887829.607373, 2456848.462091]
        })
    });
var format_nearbyProvince_8 = new ol.format.GeoJSON();
var features_nearbyProvince_8 = format_nearbyProvince_8.readFeatures(json_nearbyProvince_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nearbyProvince_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nearbyProvince_8.addFeatures(features_nearbyProvince_8);
var lyr_nearbyProvince_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nearbyProvince_8, 
                style: style_nearbyProvince_8,
                popuplayertitle: '@nearbyProvince',
                interactive: true,
                title: '<img src="styles/legend/nearbyProvince_8.png" /> @nearbyProvince'
            });
var format_nearbyProvince_9 = new ol.format.GeoJSON();
var features_nearbyProvince_9 = format_nearbyProvince_9.readFeatures(json_nearbyProvince_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nearbyProvince_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nearbyProvince_9.addFeatures(features_nearbyProvince_9);
var lyr_nearbyProvince_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nearbyProvince_9, 
                style: style_nearbyProvince_9,
                popuplayertitle: '@nearbyProvince',
                interactive: true,
                title: '<img src="styles/legend/nearbyProvince_9.png" /> @nearbyProvince'
            });
var format_03commuterLine_10 = new ol.format.GeoJSON();
var features_03commuterLine_10 = format_03commuterLine_10.readFeatures(json_03commuterLine_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03commuterLine_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03commuterLine_10.addFeatures(features_03commuterLine_10);
var lyr_03commuterLine_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03commuterLine_10, 
                style: style_03commuterLine_10,
                popuplayertitle: '@@03-commuterLine',
                interactive: true,
                title: '<img src="styles/legend/03commuterLine_10.png" /> @@03-commuterLine'
            });
var format_02interCity_11 = new ol.format.GeoJSON();
var features_02interCity_11 = format_02interCity_11.readFeatures(json_02interCity_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02interCity_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02interCity_11.addFeatures(features_02interCity_11);
var lyr_02interCity_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02interCity_11, 
                style: style_02interCity_11,
                popuplayertitle: '@@02-interCity',
                interactive: true,
                title: '<img src="styles/legend/02interCity_11.png" /> @@02-interCity'
            });
var format_01highSpeed_12 = new ol.format.GeoJSON();
var features_01highSpeed_12 = format_01highSpeed_12.readFeatures(json_01highSpeed_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01highSpeed_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01highSpeed_12.addFeatures(features_01highSpeed_12);
var lyr_01highSpeed_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01highSpeed_12, 
                style: style_01highSpeed_12,
                popuplayertitle: '@@01-highSpeed',
                interactive: true,
                title: '<img src="styles/legend/01highSpeed_12.png" /> @@01-highSpeed'
            });
var format_7railwaystation2secondary_13 = new ol.format.GeoJSON();
var features_7railwaystation2secondary_13 = format_7railwaystation2secondary_13.readFeatures(json_7railwaystation2secondary_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7railwaystation2secondary_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7railwaystation2secondary_13.addFeatures(features_7railwaystation2secondary_13);
var lyr_7railwaystation2secondary_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7railwaystation2secondary_13, 
                style: style_7railwaystation2secondary_13,
                popuplayertitle: '7-railway station-2-secondary',
                interactive: true,
                title: '<img src="styles/legend/7railwaystation2secondary_13.png" /> 7-railway station-2-secondary'
            });
var format_6airport_14 = new ol.format.GeoJSON();
var features_6airport_14 = format_6airport_14.readFeatures(json_6airport_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6airport_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6airport_14.addFeatures(features_6airport_14);
var lyr_6airport_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6airport_14, 
                style: style_6airport_14,
                popuplayertitle: '6-airport',
                interactive: true,
                title: '<img src="styles/legend/6airport_14.png" /> 6-airport'
            });
var format_4Railway_15 = new ol.format.GeoJSON();
var features_4Railway_15 = format_4Railway_15.readFeatures(json_4Railway_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Railway_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Railway_15.addFeatures(features_4Railway_15);
var lyr_4Railway_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4Railway_15, 
                style: style_4Railway_15,
                popuplayertitle: '4-Railway',
                interactive: true,
    title: '4-Railway<br />\
    <img src="styles/legend/4Railway_15_0.png" /> DS<br />\
    <img src="styles/legend/4Railway_15_1.png" /> Nét đứt<br />' });
var format_4BRTM18_16 = new ol.format.GeoJSON();
var features_4BRTM18_16 = format_4BRTM18_16.readFeatures(json_4BRTM18_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4BRTM18_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4BRTM18_16.addFeatures(features_4BRTM18_16);
var lyr_4BRTM18_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4BRTM18_16, 
                style: style_4BRTM18_16,
                popuplayertitle: '4-BRT-M18',
                interactive: true,
                title: '<img src="styles/legend/4BRTM18_16.png" /> 4-BRT-M18'
            });
var format_4BRTM17_17 = new ol.format.GeoJSON();
var features_4BRTM17_17 = format_4BRTM17_17.readFeatures(json_4BRTM17_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4BRTM17_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4BRTM17_17.addFeatures(features_4BRTM17_17);
var lyr_4BRTM17_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4BRTM17_17, 
                style: style_4BRTM17_17,
                popuplayertitle: '4-BRT-M17',
                interactive: true,
                title: '<img src="styles/legend/4BRTM17_17.png" /> 4-BRT-M17'
            });
var format_4BRTM12_18 = new ol.format.GeoJSON();
var features_4BRTM12_18 = format_4BRTM12_18.readFeatures(json_4BRTM12_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4BRTM12_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4BRTM12_18.addFeatures(features_4BRTM12_18);
var lyr_4BRTM12_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4BRTM12_18, 
                style: style_4BRTM12_18,
                popuplayertitle: '4-BRT-M12',
                interactive: true,
                title: '<img src="styles/legend/4BRTM12_18.png" /> 4-BRT-M12'
            });
var format_3LRTM15_19 = new ol.format.GeoJSON();
var features_3LRTM15_19 = format_3LRTM15_19.readFeatures(json_3LRTM15_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTM15_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTM15_19.addFeatures(features_3LRTM15_19);
var lyr_3LRTM15_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTM15_19, 
                style: style_3LRTM15_19,
                popuplayertitle: '3-LRT-M15',
                interactive: true,
                title: '<img src="styles/legend/3LRTM15_19.png" /> 3-LRT-M15'
            });
var format_3LRTM13_20 = new ol.format.GeoJSON();
var features_3LRTM13_20 = format_3LRTM13_20.readFeatures(json_3LRTM13_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTM13_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTM13_20.addFeatures(features_3LRTM13_20);
var lyr_3LRTM13_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTM13_20, 
                style: style_3LRTM13_20,
                popuplayertitle: '3-LRT-M13',
                interactive: true,
                title: '<img src="styles/legend/3LRTM13_20.png" /> 3-LRT-M13'
            });
var format_3LRTM9_21 = new ol.format.GeoJSON();
var features_3LRTM9_21 = format_3LRTM9_21.readFeatures(json_3LRTM9_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTM9_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTM9_21.addFeatures(features_3LRTM9_21);
var lyr_3LRTM9_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTM9_21, 
                style: style_3LRTM9_21,
                popuplayertitle: '3-LRT-M9',
                interactive: true,
                title: '<img src="styles/legend/3LRTM9_21.png" /> 3-LRT-M9'
            });
var format_2RegularLineM16_22 = new ol.format.GeoJSON();
var features_2RegularLineM16_22 = format_2RegularLineM16_22.readFeatures(json_2RegularLineM16_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM16_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM16_22.addFeatures(features_2RegularLineM16_22);
var lyr_2RegularLineM16_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM16_22, 
                style: style_2RegularLineM16_22,
                popuplayertitle: '2-Regular Line-M16',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM16_22.png" /> 2-Regular Line-M16'
            });
var format_2RegularLineM14_23 = new ol.format.GeoJSON();
var features_2RegularLineM14_23 = format_2RegularLineM14_23.readFeatures(json_2RegularLineM14_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM14_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM14_23.addFeatures(features_2RegularLineM14_23);
var lyr_2RegularLineM14_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM14_23, 
                style: style_2RegularLineM14_23,
                popuplayertitle: '2-Regular Line-M14',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM14_23.png" /> 2-Regular Line-M14'
            });
var format_2RegularLineM11_24 = new ol.format.GeoJSON();
var features_2RegularLineM11_24 = format_2RegularLineM11_24.readFeatures(json_2RegularLineM11_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM11_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM11_24.addFeatures(features_2RegularLineM11_24);
var lyr_2RegularLineM11_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM11_24, 
                style: style_2RegularLineM11_24,
                popuplayertitle: '2-Regular Line-M11',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM11_24.png" /> 2-Regular Line-M11'
            });
var format_2RegularLineM10_25 = new ol.format.GeoJSON();
var features_2RegularLineM10_25 = format_2RegularLineM10_25.readFeatures(json_2RegularLineM10_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM10_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM10_25.addFeatures(features_2RegularLineM10_25);
var lyr_2RegularLineM10_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM10_25, 
                style: style_2RegularLineM10_25,
                popuplayertitle: '2-Regular Line-M10',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM10_25.png" /> 2-Regular Line-M10'
            });
var format_2RegularLineM7_26 = new ol.format.GeoJSON();
var features_2RegularLineM7_26 = format_2RegularLineM7_26.readFeatures(json_2RegularLineM7_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM7_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM7_26.addFeatures(features_2RegularLineM7_26);
var lyr_2RegularLineM7_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM7_26, 
                style: style_2RegularLineM7_26,
                popuplayertitle: '2-Regular Line-M7',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM7_26.png" /> 2-Regular Line-M7'
            });
var format_2RegularLineM6_27 = new ol.format.GeoJSON();
var features_2RegularLineM6_27 = format_2RegularLineM6_27.readFeatures(json_2RegularLineM6_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM6_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM6_27.addFeatures(features_2RegularLineM6_27);
var lyr_2RegularLineM6_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM6_27, 
                style: style_2RegularLineM6_27,
                popuplayertitle: '2-Regular Line-M6',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM6_27.png" /> 2-Regular Line-M6'
            });
var format_2RegularLineM5_28 = new ol.format.GeoJSON();
var features_2RegularLineM5_28 = format_2RegularLineM5_28.readFeatures(json_2RegularLineM5_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM5_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM5_28.addFeatures(features_2RegularLineM5_28);
var lyr_2RegularLineM5_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM5_28, 
                style: style_2RegularLineM5_28,
                popuplayertitle: '2-Regular Line-M5',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM5_28.png" /> 2-Regular Line-M5'
            });
var format_2RegularLineM4_29 = new ol.format.GeoJSON();
var features_2RegularLineM4_29 = format_2RegularLineM4_29.readFeatures(json_2RegularLineM4_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM4_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM4_29.addFeatures(features_2RegularLineM4_29);
var lyr_2RegularLineM4_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM4_29, 
                style: style_2RegularLineM4_29,
                popuplayertitle: '2-Regular Line-M4',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM4_29.png" /> 2-Regular Line-M4'
            });
var format_2RegularLineM3_30 = new ol.format.GeoJSON();
var features_2RegularLineM3_30 = format_2RegularLineM3_30.readFeatures(json_2RegularLineM3_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM3_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM3_30.addFeatures(features_2RegularLineM3_30);
var lyr_2RegularLineM3_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM3_30, 
                style: style_2RegularLineM3_30,
                popuplayertitle: '2-Regular Line-M3',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM3_30.png" /> 2-Regular Line-M3'
            });
var format_2RegularLineM2_31 = new ol.format.GeoJSON();
var features_2RegularLineM2_31 = format_2RegularLineM2_31.readFeatures(json_2RegularLineM2_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM2_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM2_31.addFeatures(features_2RegularLineM2_31);
var lyr_2RegularLineM2_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM2_31, 
                style: style_2RegularLineM2_31,
                popuplayertitle: '2-Regular Line-M2',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM2_31.png" /> 2-Regular Line-M2'
            });
var format_2RegularLine2A_32 = new ol.format.GeoJSON();
var features_2RegularLine2A_32 = format_2RegularLine2A_32.readFeatures(json_2RegularLine2A_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLine2A_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLine2A_32.addFeatures(features_2RegularLine2A_32);
var lyr_2RegularLine2A_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLine2A_32, 
                style: style_2RegularLine2A_32,
                popuplayertitle: '2-Regular Line-2A',
                interactive: true,
                title: '<img src="styles/legend/2RegularLine2A_32.png" /> 2-Regular Line-2A'
            });
var format_1ExpressLineM8_33 = new ol.format.GeoJSON();
var features_1ExpressLineM8_33 = format_1ExpressLineM8_33.readFeatures(json_1ExpressLineM8_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ExpressLineM8_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ExpressLineM8_33.addFeatures(features_1ExpressLineM8_33);
var lyr_1ExpressLineM8_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ExpressLineM8_33, 
                style: style_1ExpressLineM8_33,
                popuplayertitle: '1-Express Line-M8',
                interactive: true,
    title: '1-Express Line-M8<br />\
    <img src="styles/legend/1ExpressLineM8_33_0.png" /> Nét đứt<br />\
    <img src="styles/legend/1ExpressLineM8_33_1.png" /> Nét liền<br />' });
var format_1ExpressLineM1_34 = new ol.format.GeoJSON();
var features_1ExpressLineM1_34 = format_1ExpressLineM1_34.readFeatures(json_1ExpressLineM1_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ExpressLineM1_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ExpressLineM1_34.addFeatures(features_1ExpressLineM1_34);
var lyr_1ExpressLineM1_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ExpressLineM1_34, 
                style: style_1ExpressLineM1_34,
                popuplayertitle: '1-Express Line-M1',
                interactive: true,
    title: '1-Express Line-M1<br />\
    <img src="styles/legend/1ExpressLineM1_34_0.png" /> Nét đứt<br />\
    <img src="styles/legend/1ExpressLineM1_34_1.png" /> Nét liền<br />' });
var format_Monorail_35 = new ol.format.GeoJSON();
var features_Monorail_35 = format_Monorail_35.readFeatures(json_Monorail_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monorail_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monorail_35.addFeatures(features_Monorail_35);
var lyr_Monorail_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monorail_35, 
                style: style_Monorail_35,
                popuplayertitle: 'Monorail',
                interactive: true,
                title: '<img src="styles/legend/Monorail_35.png" /> Monorail'
            });
var format_DSDT16_36 = new ol.format.GeoJSON();
var features_DSDT16_36 = format_DSDT16_36.readFeatures(json_DSDT16_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT16_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT16_36.addFeatures(features_DSDT16_36);
var lyr_DSDT16_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT16_36, 
                style: style_DSDT16_36,
                popuplayertitle: 'DSDT 16',
                interactive: true,
                title: '<img src="styles/legend/DSDT16_36.png" /> DSDT 16'
            });
var format_DSDT15_37 = new ol.format.GeoJSON();
var features_DSDT15_37 = format_DSDT15_37.readFeatures(json_DSDT15_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT15_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT15_37.addFeatures(features_DSDT15_37);
var lyr_DSDT15_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT15_37, 
                style: style_DSDT15_37,
                popuplayertitle: 'DSDT 15',
                interactive: true,
                title: '<img src="styles/legend/DSDT15_37.png" /> DSDT 15'
            });
var format_DSDT10_38 = new ol.format.GeoJSON();
var features_DSDT10_38 = format_DSDT10_38.readFeatures(json_DSDT10_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT10_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT10_38.addFeatures(features_DSDT10_38);
var lyr_DSDT10_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT10_38, 
                style: style_DSDT10_38,
                popuplayertitle: 'DSDT 10',
                interactive: true,
                title: '<img src="styles/legend/DSDT10_38.png" /> DSDT 10'
            });
var format_DSDT9_39 = new ol.format.GeoJSON();
var features_DSDT9_39 = format_DSDT9_39.readFeatures(json_DSDT9_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT9_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT9_39.addFeatures(features_DSDT9_39);
var lyr_DSDT9_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT9_39, 
                style: style_DSDT9_39,
                popuplayertitle: 'DSDT 9',
                interactive: true,
                title: '<img src="styles/legend/DSDT9_39.png" /> DSDT 9'
            });
var format_DSDT8_40 = new ol.format.GeoJSON();
var features_DSDT8_40 = format_DSDT8_40.readFeatures(json_DSDT8_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT8_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT8_40.addFeatures(features_DSDT8_40);
var lyr_DSDT8_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT8_40, 
                style: style_DSDT8_40,
                popuplayertitle: 'DSDT 8',
                interactive: true,
                title: '<img src="styles/legend/DSDT8_40.png" /> DSDT 8'
            });
var format_DSDT7_41 = new ol.format.GeoJSON();
var features_DSDT7_41 = format_DSDT7_41.readFeatures(json_DSDT7_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT7_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT7_41.addFeatures(features_DSDT7_41);
var lyr_DSDT7_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT7_41, 
                style: style_DSDT7_41,
                popuplayertitle: 'DSDT 7',
                interactive: true,
                title: '<img src="styles/legend/DSDT7_41.png" /> DSDT 7'
            });
var format_DSDT6_42 = new ol.format.GeoJSON();
var features_DSDT6_42 = format_DSDT6_42.readFeatures(json_DSDT6_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT6_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT6_42.addFeatures(features_DSDT6_42);
var lyr_DSDT6_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT6_42, 
                style: style_DSDT6_42,
                popuplayertitle: 'DSDT 6',
                interactive: true,
                title: '<img src="styles/legend/DSDT6_42.png" /> DSDT 6'
            });
var format_DSDT5_43 = new ol.format.GeoJSON();
var features_DSDT5_43 = format_DSDT5_43.readFeatures(json_DSDT5_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT5_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT5_43.addFeatures(features_DSDT5_43);
var lyr_DSDT5_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT5_43, 
                style: style_DSDT5_43,
                popuplayertitle: 'DSDT 5',
                interactive: true,
                title: '<img src="styles/legend/DSDT5_43.png" /> DSDT 5'
            });
var format_DSDT4_44 = new ol.format.GeoJSON();
var features_DSDT4_44 = format_DSDT4_44.readFeatures(json_DSDT4_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT4_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT4_44.addFeatures(features_DSDT4_44);
var lyr_DSDT4_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT4_44, 
                style: style_DSDT4_44,
                popuplayertitle: 'DSDT 4',
                interactive: true,
                title: '<img src="styles/legend/DSDT4_44.png" /> DSDT 4'
            });
var format_DSDT3_45 = new ol.format.GeoJSON();
var features_DSDT3_45 = format_DSDT3_45.readFeatures(json_DSDT3_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT3_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT3_45.addFeatures(features_DSDT3_45);
var lyr_DSDT3_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT3_45, 
                style: style_DSDT3_45,
                popuplayertitle: 'DSDT 3',
                interactive: true,
                title: '<img src="styles/legend/DSDT3_45.png" /> DSDT 3'
            });
var format_DSDT2A_46 = new ol.format.GeoJSON();
var features_DSDT2A_46 = format_DSDT2A_46.readFeatures(json_DSDT2A_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT2A_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT2A_46.addFeatures(features_DSDT2A_46);
var lyr_DSDT2A_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT2A_46, 
                style: style_DSDT2A_46,
                popuplayertitle: 'DSDT 2A',
                interactive: true,
                title: '<img src="styles/legend/DSDT2A_46.png" /> DSDT 2A'
            });
var format_DSDT2_47 = new ol.format.GeoJSON();
var features_DSDT2_47 = format_DSDT2_47.readFeatures(json_DSDT2_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT2_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT2_47.addFeatures(features_DSDT2_47);
var lyr_DSDT2_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT2_47, 
                style: style_DSDT2_47,
                popuplayertitle: 'DSDT 2',
                interactive: true,
                title: '<img src="styles/legend/DSDT2_47.png" /> DSDT 2'
            });
var format_DSDT1_48 = new ol.format.GeoJSON();
var features_DSDT1_48 = format_DSDT1_48.readFeatures(json_DSDT1_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT1_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT1_48.addFeatures(features_DSDT1_48);
var lyr_DSDT1_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT1_48, 
                style: style_DSDT1_48,
                popuplayertitle: 'DSDT 1',
                interactive: true,
                title: '<img src="styles/legend/DSDT1_48.png" /> DSDT 1'
            });
var format_4Railway_49 = new ol.format.GeoJSON();
var features_4Railway_49 = format_4Railway_49.readFeatures(json_4Railway_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Railway_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Railway_49.addFeatures(features_4Railway_49);
var lyr_4Railway_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4Railway_49, 
                style: style_4Railway_49,
                popuplayertitle: '4-Railway',
                interactive: true,
                title: '<img src="styles/legend/4Railway_49.png" /> 4-Railway'
            });
var format_3LRTORBRTM17_50 = new ol.format.GeoJSON();
var features_3LRTORBRTM17_50 = format_3LRTORBRTM17_50.readFeatures(json_3LRTORBRTM17_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTORBRTM17_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTORBRTM17_50.addFeatures(features_3LRTORBRTM17_50);
var lyr_3LRTORBRTM17_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTORBRTM17_50, 
                style: style_3LRTORBRTM17_50,
                popuplayertitle: '3-LRT OR BRT-M17',
                interactive: true,
                title: '<img src="styles/legend/3LRTORBRTM17_50.png" /> 3-LRT OR BRT-M17'
            });
var format_3LRTORBRTM13_51 = new ol.format.GeoJSON();
var features_3LRTORBRTM13_51 = format_3LRTORBRTM13_51.readFeatures(json_3LRTORBRTM13_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTORBRTM13_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTORBRTM13_51.addFeatures(features_3LRTORBRTM13_51);
var lyr_3LRTORBRTM13_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTORBRTM13_51, 
                style: style_3LRTORBRTM13_51,
                popuplayertitle: '3-LRT OR BRT-M13',
                interactive: true,
                title: '<img src="styles/legend/3LRTORBRTM13_51.png" /> 3-LRT OR BRT-M13'
            });
var format_1ExpressLineM8_52 = new ol.format.GeoJSON();
var features_1ExpressLineM8_52 = format_1ExpressLineM8_52.readFeatures(json_1ExpressLineM8_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ExpressLineM8_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ExpressLineM8_52.addFeatures(features_1ExpressLineM8_52);
var lyr_1ExpressLineM8_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ExpressLineM8_52, 
                style: style_1ExpressLineM8_52,
                popuplayertitle: '1-Express Line-M8',
                interactive: true,
                title: '<img src="styles/legend/1ExpressLineM8_52.png" /> 1-Express Line-M8'
            });
var format_Ga_53 = new ol.format.GeoJSON();
var features_Ga_53 = format_Ga_53.readFeatures(json_Ga_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ga_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ga_53.addFeatures(features_Ga_53);
var lyr_Ga_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ga_53, 
                style: style_Ga_53,
                popuplayertitle: 'Ga',
                interactive: true,
    title: 'Ga<br />\
    <img src="styles/legend/Ga_53_0.png" /> 5-Station-transfer 2+<br />\
    <img src="styles/legend/Ga_53_1.png" /> 6-airport<br />\
    <img src="styles/legend/Ga_53_2.png" /> 7-railway station-1-primary<br />\
    <img src="styles/legend/Ga_53_3.png" /> Vuông<br />' });
var format_QH100Ga_54 = new ol.format.GeoJSON();
var features_QH100Ga_54 = format_QH100Ga_54.readFeatures(json_QH100Ga_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Ga_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Ga_54.addFeatures(features_QH100Ga_54);
var lyr_QH100Ga_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Ga_54, 
                style: style_QH100Ga_54,
                popuplayertitle: 'QH100-Ga',
                interactive: true,
                title: '<img src="styles/legend/QH100Ga_54.png" /> QH100-Ga'
            });
var format_QH100Monorail_55 = new ol.format.GeoJSON();
var features_QH100Monorail_55 = format_QH100Monorail_55.readFeatures(json_QH100Monorail_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Monorail_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Monorail_55.addFeatures(features_QH100Monorail_55);
var lyr_QH100Monorail_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Monorail_55, 
                style: style_QH100Monorail_55,
                popuplayertitle: 'QH100-Monorail',
                interactive: true,
                title: '<img src="styles/legend/QH100Monorail_55.png" /> QH100-Monorail'
            });
var format_QH100dsDT_56 = new ol.format.GeoJSON();
var features_QH100dsDT_56 = format_QH100dsDT_56.readFeatures(json_QH100dsDT_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100dsDT_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100dsDT_56.addFeatures(features_QH100dsDT_56);
var lyr_QH100dsDT_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100dsDT_56, 
                style: style_QH100dsDT_56,
                popuplayertitle: 'QH100-dsDT',
                interactive: true,
                title: '<img src="styles/legend/QH100dsDT_56.png" /> QH100-dsDT'
            });
var format_QH100DSDT17_57 = new ol.format.GeoJSON();
var features_QH100DSDT17_57 = format_QH100DSDT17_57.readFeatures(json_QH100DSDT17_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT17_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT17_57.addFeatures(features_QH100DSDT17_57);
var lyr_QH100DSDT17_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT17_57, 
                style: style_QH100DSDT17_57,
                popuplayertitle: 'QH100-DSDT 17',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT17_57.png" /> QH100-DSDT 17'
            });
var format_QH100DSDT16_58 = new ol.format.GeoJSON();
var features_QH100DSDT16_58 = format_QH100DSDT16_58.readFeatures(json_QH100DSDT16_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT16_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT16_58.addFeatures(features_QH100DSDT16_58);
var lyr_QH100DSDT16_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT16_58, 
                style: style_QH100DSDT16_58,
                popuplayertitle: 'QH100-DSDT 16',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT16_58.png" /> QH100-DSDT 16'
            });
var format_QH100DSDT15_59 = new ol.format.GeoJSON();
var features_QH100DSDT15_59 = format_QH100DSDT15_59.readFeatures(json_QH100DSDT15_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT15_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT15_59.addFeatures(features_QH100DSDT15_59);
var lyr_QH100DSDT15_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT15_59, 
                style: style_QH100DSDT15_59,
                popuplayertitle: 'QH100-DSDT 15',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT15_59.png" /> QH100-DSDT 15'
            });
var format_QH100DSDT12_60 = new ol.format.GeoJSON();
var features_QH100DSDT12_60 = format_QH100DSDT12_60.readFeatures(json_QH100DSDT12_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT12_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT12_60.addFeatures(features_QH100DSDT12_60);
var lyr_QH100DSDT12_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT12_60, 
                style: style_QH100DSDT12_60,
                popuplayertitle: 'QH100-DSDT 12',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT12_60.png" /> QH100-DSDT 12'
            });
var format_QH100DSDT11_61 = new ol.format.GeoJSON();
var features_QH100DSDT11_61 = format_QH100DSDT11_61.readFeatures(json_QH100DSDT11_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT11_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT11_61.addFeatures(features_QH100DSDT11_61);
var lyr_QH100DSDT11_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT11_61, 
                style: style_QH100DSDT11_61,
                popuplayertitle: 'QH100-DSDT 11',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT11_61.png" /> QH100-DSDT 11'
            });
var format_QH100DSDT10_62 = new ol.format.GeoJSON();
var features_QH100DSDT10_62 = format_QH100DSDT10_62.readFeatures(json_QH100DSDT10_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT10_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT10_62.addFeatures(features_QH100DSDT10_62);
var lyr_QH100DSDT10_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT10_62, 
                style: style_QH100DSDT10_62,
                popuplayertitle: 'QH100-DSDT 10',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT10_62.png" /> QH100-DSDT 10'
            });
var format_QH100DSDT9_63 = new ol.format.GeoJSON();
var features_QH100DSDT9_63 = format_QH100DSDT9_63.readFeatures(json_QH100DSDT9_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT9_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT9_63.addFeatures(features_QH100DSDT9_63);
var lyr_QH100DSDT9_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT9_63, 
                style: style_QH100DSDT9_63,
                popuplayertitle: 'QH100-DSDT 9',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT9_63.png" /> QH100-DSDT 9'
            });
var format_QH100DSDT8_64 = new ol.format.GeoJSON();
var features_QH100DSDT8_64 = format_QH100DSDT8_64.readFeatures(json_QH100DSDT8_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT8_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT8_64.addFeatures(features_QH100DSDT8_64);
var lyr_QH100DSDT8_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT8_64, 
                style: style_QH100DSDT8_64,
                popuplayertitle: 'QH100-DSDT 8',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT8_64.png" /> QH100-DSDT 8'
            });
var format_QH100DSDT7_65 = new ol.format.GeoJSON();
var features_QH100DSDT7_65 = format_QH100DSDT7_65.readFeatures(json_QH100DSDT7_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT7_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT7_65.addFeatures(features_QH100DSDT7_65);
var lyr_QH100DSDT7_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT7_65, 
                style: style_QH100DSDT7_65,
                popuplayertitle: 'QH100-DSDT 7',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT7_65.png" /> QH100-DSDT 7'
            });
var format_QH100DSDT6_66 = new ol.format.GeoJSON();
var features_QH100DSDT6_66 = format_QH100DSDT6_66.readFeatures(json_QH100DSDT6_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT6_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT6_66.addFeatures(features_QH100DSDT6_66);
var lyr_QH100DSDT6_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT6_66, 
                style: style_QH100DSDT6_66,
                popuplayertitle: 'QH100-DSDT 6',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT6_66.png" /> QH100-DSDT 6'
            });
var format_QH100DSDT5_67 = new ol.format.GeoJSON();
var features_QH100DSDT5_67 = format_QH100DSDT5_67.readFeatures(json_QH100DSDT5_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT5_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT5_67.addFeatures(features_QH100DSDT5_67);
var lyr_QH100DSDT5_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT5_67, 
                style: style_QH100DSDT5_67,
                popuplayertitle: 'QH100-DSDT 5',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT5_67.png" /> QH100-DSDT 5'
            });
var format_QH100DSDT4_68 = new ol.format.GeoJSON();
var features_QH100DSDT4_68 = format_QH100DSDT4_68.readFeatures(json_QH100DSDT4_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT4_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT4_68.addFeatures(features_QH100DSDT4_68);
var lyr_QH100DSDT4_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT4_68, 
                style: style_QH100DSDT4_68,
                popuplayertitle: 'QH100-DSDT 4',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT4_68.png" /> QH100-DSDT 4'
            });
var format_QH100DSDT3_69 = new ol.format.GeoJSON();
var features_QH100DSDT3_69 = format_QH100DSDT3_69.readFeatures(json_QH100DSDT3_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT3_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT3_69.addFeatures(features_QH100DSDT3_69);
var lyr_QH100DSDT3_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT3_69, 
                style: style_QH100DSDT3_69,
                popuplayertitle: 'QH100-DSDT 3',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT3_69.png" /> QH100-DSDT 3'
            });
var format_QH100DSDT2A_70 = new ol.format.GeoJSON();
var features_QH100DSDT2A_70 = format_QH100DSDT2A_70.readFeatures(json_QH100DSDT2A_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT2A_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT2A_70.addFeatures(features_QH100DSDT2A_70);
var lyr_QH100DSDT2A_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT2A_70, 
                style: style_QH100DSDT2A_70,
                popuplayertitle: 'QH100-DSDT 2A',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT2A_70.png" /> QH100-DSDT 2A'
            });
var format_QH100DSDT2_71 = new ol.format.GeoJSON();
var features_QH100DSDT2_71 = format_QH100DSDT2_71.readFeatures(json_QH100DSDT2_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT2_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT2_71.addFeatures(features_QH100DSDT2_71);
var lyr_QH100DSDT2_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT2_71, 
                style: style_QH100DSDT2_71,
                popuplayertitle: 'QH100-DSDT 2',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT2_71.png" /> QH100-DSDT 2'
            });
var format_QH100DSDT1_72 = new ol.format.GeoJSON();
var features_QH100DSDT1_72 = format_QH100DSDT1_72.readFeatures(json_QH100DSDT1_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT1_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT1_72.addFeatures(features_QH100DSDT1_72);
var lyr_QH100DSDT1_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT1_72, 
                style: style_QH100DSDT1_72,
                popuplayertitle: 'QH100-DSDT 1',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT1_72.png" /> QH100-DSDT 1'
            });
var format_QH100DSQG_Thuong2050_73 = new ol.format.GeoJSON();
var features_QH100DSQG_Thuong2050_73 = format_QH100DSQG_Thuong2050_73.readFeatures(json_QH100DSQG_Thuong2050_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSQG_Thuong2050_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSQG_Thuong2050_73.addFeatures(features_QH100DSQG_Thuong2050_73);
var lyr_QH100DSQG_Thuong2050_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSQG_Thuong2050_73, 
                style: style_QH100DSQG_Thuong2050_73,
                popuplayertitle: 'QH100-DSQG_Thuong 2050',
                interactive: true,
                title: '<img src="styles/legend/QH100DSQG_Thuong2050_73.png" /> QH100-DSQG_Thuong 2050'
            });
var format_QH100Tuyen16_74 = new ol.format.GeoJSON();
var features_QH100Tuyen16_74 = format_QH100Tuyen16_74.readFeatures(json_QH100Tuyen16_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen16_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen16_74.addFeatures(features_QH100Tuyen16_74);
var lyr_QH100Tuyen16_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen16_74, 
                style: style_QH100Tuyen16_74,
                popuplayertitle: 'QH100 Tuyen-16',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen16_74.png" /> QH100 Tuyen-16'
            });
var format_QH100Tuyen14_75 = new ol.format.GeoJSON();
var features_QH100Tuyen14_75 = format_QH100Tuyen14_75.readFeatures(json_QH100Tuyen14_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen14_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen14_75.addFeatures(features_QH100Tuyen14_75);
var lyr_QH100Tuyen14_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen14_75, 
                style: style_QH100Tuyen14_75,
                popuplayertitle: 'QH100 Tuyen-14',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen14_75.png" /> QH100 Tuyen-14'
            });
var format_QH100Tuyen9_76 = new ol.format.GeoJSON();
var features_QH100Tuyen9_76 = format_QH100Tuyen9_76.readFeatures(json_QH100Tuyen9_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen9_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen9_76.addFeatures(features_QH100Tuyen9_76);
var lyr_QH100Tuyen9_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen9_76, 
                style: style_QH100Tuyen9_76,
                popuplayertitle: 'QH100 Tuyen-9',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen9_76.png" /> QH100 Tuyen-9'
            });
var format_QH100Tuyen8_77 = new ol.format.GeoJSON();
var features_QH100Tuyen8_77 = format_QH100Tuyen8_77.readFeatures(json_QH100Tuyen8_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen8_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen8_77.addFeatures(features_QH100Tuyen8_77);
var lyr_QH100Tuyen8_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen8_77, 
                style: style_QH100Tuyen8_77,
                popuplayertitle: 'QH100 Tuyen-8',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen8_77.png" /> QH100 Tuyen-8'
            });
var format_QH100Tuyen7_78 = new ol.format.GeoJSON();
var features_QH100Tuyen7_78 = format_QH100Tuyen7_78.readFeatures(json_QH100Tuyen7_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen7_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen7_78.addFeatures(features_QH100Tuyen7_78);
var lyr_QH100Tuyen7_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen7_78, 
                style: style_QH100Tuyen7_78,
                popuplayertitle: 'QH100 Tuyen-7',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen7_78.png" /> QH100 Tuyen-7'
            });
var format_QH100Tuyen6_79 = new ol.format.GeoJSON();
var features_QH100Tuyen6_79 = format_QH100Tuyen6_79.readFeatures(json_QH100Tuyen6_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen6_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen6_79.addFeatures(features_QH100Tuyen6_79);
var lyr_QH100Tuyen6_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen6_79, 
                style: style_QH100Tuyen6_79,
                popuplayertitle: 'QH100 Tuyen-6',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen6_79.png" /> QH100 Tuyen-6'
            });
var format_QH100Tuyen5_80 = new ol.format.GeoJSON();
var features_QH100Tuyen5_80 = format_QH100Tuyen5_80.readFeatures(json_QH100Tuyen5_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen5_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen5_80.addFeatures(features_QH100Tuyen5_80);
var lyr_QH100Tuyen5_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen5_80, 
                style: style_QH100Tuyen5_80,
                popuplayertitle: 'QH100 Tuyen-5',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen5_80.png" /> QH100 Tuyen-5'
            });
var format_QH100Tuyen4_81 = new ol.format.GeoJSON();
var features_QH100Tuyen4_81 = format_QH100Tuyen4_81.readFeatures(json_QH100Tuyen4_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen4_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen4_81.addFeatures(features_QH100Tuyen4_81);
var lyr_QH100Tuyen4_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen4_81, 
                style: style_QH100Tuyen4_81,
                popuplayertitle: 'QH100 Tuyen-4',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen4_81.png" /> QH100 Tuyen-4'
            });
var format_QH100Tuyen3_82 = new ol.format.GeoJSON();
var features_QH100Tuyen3_82 = format_QH100Tuyen3_82.readFeatures(json_QH100Tuyen3_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen3_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen3_82.addFeatures(features_QH100Tuyen3_82);
var lyr_QH100Tuyen3_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen3_82, 
                style: style_QH100Tuyen3_82,
                popuplayertitle: 'QH100 Tuyen-3',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen3_82.png" /> QH100 Tuyen-3'
            });
var format_QH100Tuyen2A_83 = new ol.format.GeoJSON();
var features_QH100Tuyen2A_83 = format_QH100Tuyen2A_83.readFeatures(json_QH100Tuyen2A_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen2A_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen2A_83.addFeatures(features_QH100Tuyen2A_83);
var lyr_QH100Tuyen2A_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen2A_83, 
                style: style_QH100Tuyen2A_83,
                popuplayertitle: 'QH100 Tuyen-2A',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen2A_83.png" /> QH100 Tuyen-2A'
            });
var format_QH100Tuyen2_84 = new ol.format.GeoJSON();
var features_QH100Tuyen2_84 = format_QH100Tuyen2_84.readFeatures(json_QH100Tuyen2_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen2_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen2_84.addFeatures(features_QH100Tuyen2_84);
var lyr_QH100Tuyen2_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen2_84, 
                style: style_QH100Tuyen2_84,
                popuplayertitle: 'QH100 Tuyen-2',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen2_84.png" /> QH100 Tuyen-2'
            });
var format_QH100Tuyen1_85 = new ol.format.GeoJSON();
var features_QH100Tuyen1_85 = format_QH100Tuyen1_85.readFeatures(json_QH100Tuyen1_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen1_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen1_85.addFeatures(features_QH100Tuyen1_85);
var lyr_QH100Tuyen1_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen1_85, 
                style: style_QH100Tuyen1_85,
                popuplayertitle: 'QH100 Tuyen-1',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen1_85.png" /> QH100 Tuyen-1'
            });
var format_DSQG_86 = new ol.format.GeoJSON();
var features_DSQG_86 = format_DSQG_86.readFeatures(json_DSQG_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSQG_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSQG_86.addFeatures(features_DSQG_86);
var lyr_DSQG_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSQG_86, 
                style: style_DSQG_86,
                popuplayertitle: 'DSQG',
                interactive: true,
                title: '<img src="styles/legend/DSQG_86.png" /> DSQG'
            });
var format_Duongsatvung_87 = new ol.format.GeoJSON();
var features_Duongsatvung_87 = format_Duongsatvung_87.readFeatures(json_Duongsatvung_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Duongsatvung_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Duongsatvung_87.addFeatures(features_Duongsatvung_87);
var lyr_Duongsatvung_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Duongsatvung_87, 
                style: style_Duongsatvung_87,
                popuplayertitle: 'Duongsatvung',
                interactive: true,
                title: '<img src="styles/legend/Duongsatvung_87.png" /> Duongsatvung'
            });
var format_Depot_88 = new ol.format.GeoJSON();
var features_Depot_88 = format_Depot_88.readFeatures(json_Depot_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Depot_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Depot_88.addFeatures(features_Depot_88);
var lyr_Depot_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Depot_88, 
                style: style_Depot_88,
                popuplayertitle: 'Depot',
                interactive: true,
                title: '<img src="styles/legend/Depot_88.png" /> Depot'
            });
var format_PLine_17_89 = new ol.format.GeoJSON();
var features_PLine_17_89 = format_PLine_17_89.readFeatures(json_PLine_17_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_17_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_17_89.addFeatures(features_PLine_17_89);
var lyr_PLine_17_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_17_89, 
                style: style_PLine_17_89,
                popuplayertitle: 'PLine_17',
                interactive: true,
                title: '<img src="styles/legend/PLine_17_89.png" /> PLine_17'
            });
var format_PLine_16_90 = new ol.format.GeoJSON();
var features_PLine_16_90 = format_PLine_16_90.readFeatures(json_PLine_16_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_16_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_16_90.addFeatures(features_PLine_16_90);
var lyr_PLine_16_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_16_90, 
                style: style_PLine_16_90,
                popuplayertitle: 'PLine_16',
                interactive: true,
                title: '<img src="styles/legend/PLine_16_90.png" /> PLine_16'
            });
var format_PLine_15_91 = new ol.format.GeoJSON();
var features_PLine_15_91 = format_PLine_15_91.readFeatures(json_PLine_15_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_15_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_15_91.addFeatures(features_PLine_15_91);
var lyr_PLine_15_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_15_91, 
                style: style_PLine_15_91,
                popuplayertitle: 'PLine_15',
                interactive: true,
                title: '<img src="styles/legend/PLine_15_91.png" /> PLine_15'
            });
var format_PLine_14_92 = new ol.format.GeoJSON();
var features_PLine_14_92 = format_PLine_14_92.readFeatures(json_PLine_14_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_14_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_14_92.addFeatures(features_PLine_14_92);
var lyr_PLine_14_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_14_92, 
                style: style_PLine_14_92,
                popuplayertitle: 'PLine_14',
                interactive: true,
                title: '<img src="styles/legend/PLine_14_92.png" /> PLine_14'
            });
var format_PLine_13_93 = new ol.format.GeoJSON();
var features_PLine_13_93 = format_PLine_13_93.readFeatures(json_PLine_13_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_13_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_13_93.addFeatures(features_PLine_13_93);
var lyr_PLine_13_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_13_93, 
                style: style_PLine_13_93,
                popuplayertitle: 'PLine_13',
                interactive: true,
                title: '<img src="styles/legend/PLine_13_93.png" /> PLine_13'
            });
var format_PLine_12_94 = new ol.format.GeoJSON();
var features_PLine_12_94 = format_PLine_12_94.readFeatures(json_PLine_12_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_12_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_12_94.addFeatures(features_PLine_12_94);
var lyr_PLine_12_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_12_94, 
                style: style_PLine_12_94,
                popuplayertitle: 'PLine_12',
                interactive: true,
                title: '<img src="styles/legend/PLine_12_94.png" /> PLine_12'
            });
var format_PLine_11_95 = new ol.format.GeoJSON();
var features_PLine_11_95 = format_PLine_11_95.readFeatures(json_PLine_11_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_11_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_11_95.addFeatures(features_PLine_11_95);
var lyr_PLine_11_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_11_95, 
                style: style_PLine_11_95,
                popuplayertitle: 'PLine_11',
                interactive: true,
                title: '<img src="styles/legend/PLine_11_95.png" /> PLine_11'
            });
var format_PLine_10_96 = new ol.format.GeoJSON();
var features_PLine_10_96 = format_PLine_10_96.readFeatures(json_PLine_10_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_10_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_10_96.addFeatures(features_PLine_10_96);
var lyr_PLine_10_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_10_96, 
                style: style_PLine_10_96,
                popuplayertitle: 'PLine_10',
                interactive: true,
                title: '<img src="styles/legend/PLine_10_96.png" /> PLine_10'
            });
var format_PLine_9_97 = new ol.format.GeoJSON();
var features_PLine_9_97 = format_PLine_9_97.readFeatures(json_PLine_9_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_9_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_9_97.addFeatures(features_PLine_9_97);
var lyr_PLine_9_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_9_97, 
                style: style_PLine_9_97,
                popuplayertitle: 'PLine_9',
                interactive: true,
                title: '<img src="styles/legend/PLine_9_97.png" /> PLine_9'
            });
var format_PLine_8_98 = new ol.format.GeoJSON();
var features_PLine_8_98 = format_PLine_8_98.readFeatures(json_PLine_8_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_8_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_8_98.addFeatures(features_PLine_8_98);
var lyr_PLine_8_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_8_98, 
                style: style_PLine_8_98,
                popuplayertitle: 'PLine_8',
                interactive: true,
                title: '<img src="styles/legend/PLine_8_98.png" /> PLine_8'
            });
var format_PLine_7_99 = new ol.format.GeoJSON();
var features_PLine_7_99 = format_PLine_7_99.readFeatures(json_PLine_7_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_7_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_7_99.addFeatures(features_PLine_7_99);
var lyr_PLine_7_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_7_99, 
                style: style_PLine_7_99,
                popuplayertitle: 'PLine_7',
                interactive: true,
                title: '<img src="styles/legend/PLine_7_99.png" /> PLine_7'
            });
var format_PLine_6_100 = new ol.format.GeoJSON();
var features_PLine_6_100 = format_PLine_6_100.readFeatures(json_PLine_6_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_6_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_6_100.addFeatures(features_PLine_6_100);
var lyr_PLine_6_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_6_100, 
                style: style_PLine_6_100,
                popuplayertitle: 'PLine_6',
                interactive: true,
                title: '<img src="styles/legend/PLine_6_100.png" /> PLine_6'
            });
var format_PLine_5_101 = new ol.format.GeoJSON();
var features_PLine_5_101 = format_PLine_5_101.readFeatures(json_PLine_5_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_5_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_5_101.addFeatures(features_PLine_5_101);
var lyr_PLine_5_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_5_101, 
                style: style_PLine_5_101,
                popuplayertitle: 'PLine_5',
                interactive: true,
                title: '<img src="styles/legend/PLine_5_101.png" /> PLine_5'
            });
var format_PLine_4_102 = new ol.format.GeoJSON();
var features_PLine_4_102 = format_PLine_4_102.readFeatures(json_PLine_4_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_4_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_4_102.addFeatures(features_PLine_4_102);
var lyr_PLine_4_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_4_102, 
                style: style_PLine_4_102,
                popuplayertitle: 'PLine_4',
                interactive: true,
                title: '<img src="styles/legend/PLine_4_102.png" /> PLine_4'
            });
var format_PLine_3_103 = new ol.format.GeoJSON();
var features_PLine_3_103 = format_PLine_3_103.readFeatures(json_PLine_3_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_3_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_3_103.addFeatures(features_PLine_3_103);
var lyr_PLine_3_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_3_103, 
                style: style_PLine_3_103,
                popuplayertitle: 'PLine_3',
                interactive: true,
                title: '<img src="styles/legend/PLine_3_103.png" /> PLine_3'
            });
var format_PLine_2A_104 = new ol.format.GeoJSON();
var features_PLine_2A_104 = format_PLine_2A_104.readFeatures(json_PLine_2A_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_2A_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_2A_104.addFeatures(features_PLine_2A_104);
var lyr_PLine_2A_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_2A_104, 
                style: style_PLine_2A_104,
                popuplayertitle: 'PLine_2A',
                interactive: true,
                title: '<img src="styles/legend/PLine_2A_104.png" /> PLine_2A'
            });
var format_PLine_2_105 = new ol.format.GeoJSON();
var features_PLine_2_105 = format_PLine_2_105.readFeatures(json_PLine_2_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_2_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_2_105.addFeatures(features_PLine_2_105);
var lyr_PLine_2_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_2_105, 
                style: style_PLine_2_105,
                popuplayertitle: 'PLine_2',
                interactive: true,
                title: '<img src="styles/legend/PLine_2_105.png" /> PLine_2'
            });
var format_PLine_1_106 = new ol.format.GeoJSON();
var features_PLine_1_106 = format_PLine_1_106.readFeatures(json_PLine_1_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_1_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_1_106.addFeatures(features_PLine_1_106);
var lyr_PLine_1_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_1_106, 
                style: style_PLine_1_106,
                popuplayertitle: 'PLine_1',
                interactive: true,
                title: '<img src="styles/legend/PLine_1_106.png" /> PLine_1'
            });
var format_All_107 = new ol.format.GeoJSON();
var features_All_107 = format_All_107.readFeatures(json_All_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_107.addFeatures(features_All_107);
var lyr_All_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_All_107, 
                style: style_All_107,
                popuplayertitle: 'All',
                interactive: true,
                title: '<img src="styles/legend/All_107.png" /> All'
            });
var format_Layer_CcTuynmi_108 = new ol.format.GeoJSON();
var features_Layer_CcTuynmi_108 = format_Layer_CcTuynmi_108.readFeatures(json_Layer_CcTuynmi_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_CcTuynmi_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_CcTuynmi_108.addFeatures(features_Layer_CcTuynmi_108);
var lyr_Layer_CcTuynmi_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_CcTuynmi_108, 
                style: style_Layer_CcTuynmi_108,
                popuplayertitle: 'Layer_Các Tuyến mới',
                interactive: true,
                title: '<img src="styles/legend/Layer_CcTuynmi_108.png" /> Layer_Các Tuyến mới'
            });
var format_Layer_Tuyn12_109 = new ol.format.GeoJSON();
var features_Layer_Tuyn12_109 = format_Layer_Tuyn12_109.readFeatures(json_Layer_Tuyn12_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn12_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn12_109.addFeatures(features_Layer_Tuyn12_109);
var lyr_Layer_Tuyn12_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn12_109, 
                style: style_Layer_Tuyn12_109,
                popuplayertitle: 'Layer_Tuyến 12',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn12_109.png" /> Layer_Tuyến 12'
            });
var format_Layer_Tuyn11_110 = new ol.format.GeoJSON();
var features_Layer_Tuyn11_110 = format_Layer_Tuyn11_110.readFeatures(json_Layer_Tuyn11_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn11_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn11_110.addFeatures(features_Layer_Tuyn11_110);
var lyr_Layer_Tuyn11_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn11_110, 
                style: style_Layer_Tuyn11_110,
                popuplayertitle: 'Layer_Tuyến 11',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn11_110.png" /> Layer_Tuyến 11'
            });
var format_Layer_Tuyn10_111 = new ol.format.GeoJSON();
var features_Layer_Tuyn10_111 = format_Layer_Tuyn10_111.readFeatures(json_Layer_Tuyn10_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn10_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn10_111.addFeatures(features_Layer_Tuyn10_111);
var lyr_Layer_Tuyn10_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn10_111, 
                style: style_Layer_Tuyn10_111,
                popuplayertitle: 'Layer_Tuyến 10',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn10_111.png" /> Layer_Tuyến 10'
            });
var format_Layer_Tuyn9_112 = new ol.format.GeoJSON();
var features_Layer_Tuyn9_112 = format_Layer_Tuyn9_112.readFeatures(json_Layer_Tuyn9_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn9_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn9_112.addFeatures(features_Layer_Tuyn9_112);
var lyr_Layer_Tuyn9_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn9_112, 
                style: style_Layer_Tuyn9_112,
                popuplayertitle: 'Layer_Tuyến 9',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn9_112.png" /> Layer_Tuyến 9'
            });
var format_Layer_Tuyn8_113 = new ol.format.GeoJSON();
var features_Layer_Tuyn8_113 = format_Layer_Tuyn8_113.readFeatures(json_Layer_Tuyn8_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn8_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn8_113.addFeatures(features_Layer_Tuyn8_113);
var lyr_Layer_Tuyn8_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn8_113, 
                style: style_Layer_Tuyn8_113,
                popuplayertitle: 'Layer_Tuyến 8',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn8_113.png" /> Layer_Tuyến 8'
            });
var format_Layer_Tuyn7_114 = new ol.format.GeoJSON();
var features_Layer_Tuyn7_114 = format_Layer_Tuyn7_114.readFeatures(json_Layer_Tuyn7_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn7_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn7_114.addFeatures(features_Layer_Tuyn7_114);
var lyr_Layer_Tuyn7_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn7_114, 
                style: style_Layer_Tuyn7_114,
                popuplayertitle: 'Layer_Tuyến 7',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn7_114.png" /> Layer_Tuyến 7'
            });
var format_Layer_Tuyn6_115 = new ol.format.GeoJSON();
var features_Layer_Tuyn6_115 = format_Layer_Tuyn6_115.readFeatures(json_Layer_Tuyn6_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn6_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn6_115.addFeatures(features_Layer_Tuyn6_115);
var lyr_Layer_Tuyn6_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn6_115, 
                style: style_Layer_Tuyn6_115,
                popuplayertitle: 'Layer_Tuyến 6',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn6_115.png" /> Layer_Tuyến 6'
            });
var format_Layer_Tuyn5_116 = new ol.format.GeoJSON();
var features_Layer_Tuyn5_116 = format_Layer_Tuyn5_116.readFeatures(json_Layer_Tuyn5_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn5_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn5_116.addFeatures(features_Layer_Tuyn5_116);
var lyr_Layer_Tuyn5_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn5_116, 
                style: style_Layer_Tuyn5_116,
                popuplayertitle: 'Layer_Tuyến 5',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn5_116.png" /> Layer_Tuyến 5'
            });
var format_Layer_Tuyn4_117 = new ol.format.GeoJSON();
var features_Layer_Tuyn4_117 = format_Layer_Tuyn4_117.readFeatures(json_Layer_Tuyn4_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn4_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn4_117.addFeatures(features_Layer_Tuyn4_117);
var lyr_Layer_Tuyn4_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn4_117, 
                style: style_Layer_Tuyn4_117,
                popuplayertitle: 'Layer_Tuyến 4',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn4_117.png" /> Layer_Tuyến 4'
            });
var format_Layer_Tuyn3_118 = new ol.format.GeoJSON();
var features_Layer_Tuyn3_118 = format_Layer_Tuyn3_118.readFeatures(json_Layer_Tuyn3_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn3_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn3_118.addFeatures(features_Layer_Tuyn3_118);
var lyr_Layer_Tuyn3_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn3_118, 
                style: style_Layer_Tuyn3_118,
                popuplayertitle: 'Layer_Tuyến 3',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn3_118.png" /> Layer_Tuyến 3'
            });
var format_Layer_Tuyn2A_119 = new ol.format.GeoJSON();
var features_Layer_Tuyn2A_119 = format_Layer_Tuyn2A_119.readFeatures(json_Layer_Tuyn2A_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn2A_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn2A_119.addFeatures(features_Layer_Tuyn2A_119);
var lyr_Layer_Tuyn2A_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn2A_119, 
                style: style_Layer_Tuyn2A_119,
                popuplayertitle: 'Layer_Tuyến 2A',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn2A_119.png" /> Layer_Tuyến 2A'
            });
var format_Layer_Tuyn2_120 = new ol.format.GeoJSON();
var features_Layer_Tuyn2_120 = format_Layer_Tuyn2_120.readFeatures(json_Layer_Tuyn2_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn2_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn2_120.addFeatures(features_Layer_Tuyn2_120);
var lyr_Layer_Tuyn2_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn2_120, 
                style: style_Layer_Tuyn2_120,
                popuplayertitle: 'Layer_Tuyến 2',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn2_120.png" /> Layer_Tuyến 2'
            });
var format_Layer_Tuyn1_121 = new ol.format.GeoJSON();
var features_Layer_Tuyn1_121 = format_Layer_Tuyn1_121.readFeatures(json_Layer_Tuyn1_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn1_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn1_121.addFeatures(features_Layer_Tuyn1_121);
var lyr_Layer_Tuyn1_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn1_121, 
                style: style_Layer_Tuyn1_121,
                popuplayertitle: 'Layer_Tuyến 1',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn1_121.png" /> Layer_Tuyến 1'
            });
var format_GaQHDSKhudaumoi_122 = new ol.format.GeoJSON();
var features_GaQHDSKhudaumoi_122 = format_GaQHDSKhudaumoi_122.readFeatures(json_GaQHDSKhudaumoi_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GaQHDSKhudaumoi_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GaQHDSKhudaumoi_122.addFeatures(features_GaQHDSKhudaumoi_122);
var lyr_GaQHDSKhudaumoi_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GaQHDSKhudaumoi_122, 
                style: style_GaQHDSKhudaumoi_122,
                popuplayertitle: 'Ga QHDS Khu dau moi',
                interactive: true,
                title: '<img src="styles/legend/GaQHDSKhudaumoi_122.png" /> Ga QHDS Khu dau moi'
            });
var format_QHDSKhudaumoi_123 = new ol.format.GeoJSON();
var features_QHDSKhudaumoi_123 = format_QHDSKhudaumoi_123.readFeatures(json_QHDSKhudaumoi_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QHDSKhudaumoi_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QHDSKhudaumoi_123.addFeatures(features_QHDSKhudaumoi_123);
var lyr_QHDSKhudaumoi_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QHDSKhudaumoi_123, 
                style: style_QHDSKhudaumoi_123,
                popuplayertitle: 'QHDS Khu dau moi',
                interactive: true,
                title: '<img src="styles/legend/QHDSKhudaumoi_123.png" /> QHDS Khu dau moi'
            });
var format_T12_124 = new ol.format.GeoJSON();
var features_T12_124 = format_T12_124.readFeatures(json_T12_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T12_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T12_124.addFeatures(features_T12_124);
var lyr_T12_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T12_124, 
                style: style_T12_124,
                popuplayertitle: 'T12',
                interactive: true,
                title: '<img src="styles/legend/T12_124.png" /> T12'
            });
var format_T11_125 = new ol.format.GeoJSON();
var features_T11_125 = format_T11_125.readFeatures(json_T11_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T11_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T11_125.addFeatures(features_T11_125);
var lyr_T11_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T11_125, 
                style: style_T11_125,
                popuplayertitle: 'T11',
                interactive: true,
                title: '<img src="styles/legend/T11_125.png" /> T11'
            });
var format_T10_126 = new ol.format.GeoJSON();
var features_T10_126 = format_T10_126.readFeatures(json_T10_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T10_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T10_126.addFeatures(features_T10_126);
var lyr_T10_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T10_126, 
                style: style_T10_126,
                popuplayertitle: 'T10',
                interactive: true,
                title: '<img src="styles/legend/T10_126.png" /> T10'
            });
var format_T9_127 = new ol.format.GeoJSON();
var features_T9_127 = format_T9_127.readFeatures(json_T9_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T9_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T9_127.addFeatures(features_T9_127);
var lyr_T9_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T9_127, 
                style: style_T9_127,
                popuplayertitle: 'T9',
                interactive: true,
                title: '<img src="styles/legend/T9_127.png" /> T9'
            });
var format_T8_128 = new ol.format.GeoJSON();
var features_T8_128 = format_T8_128.readFeatures(json_T8_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T8_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T8_128.addFeatures(features_T8_128);
var lyr_T8_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T8_128, 
                style: style_T8_128,
                popuplayertitle: 'T8',
                interactive: true,
                title: '<img src="styles/legend/T8_128.png" /> T8'
            });
var format_T7_129 = new ol.format.GeoJSON();
var features_T7_129 = format_T7_129.readFeatures(json_T7_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T7_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T7_129.addFeatures(features_T7_129);
var lyr_T7_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T7_129, 
                style: style_T7_129,
                popuplayertitle: 'T7',
                interactive: true,
                title: '<img src="styles/legend/T7_129.png" /> T7'
            });
var format_T6_130 = new ol.format.GeoJSON();
var features_T6_130 = format_T6_130.readFeatures(json_T6_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T6_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T6_130.addFeatures(features_T6_130);
var lyr_T6_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T6_130, 
                style: style_T6_130,
                popuplayertitle: 'T6',
                interactive: true,
                title: '<img src="styles/legend/T6_130.png" /> T6'
            });
var format_T5_131 = new ol.format.GeoJSON();
var features_T5_131 = format_T5_131.readFeatures(json_T5_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T5_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T5_131.addFeatures(features_T5_131);
var lyr_T5_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T5_131, 
                style: style_T5_131,
                popuplayertitle: 'T5',
                interactive: true,
                title: '<img src="styles/legend/T5_131.png" /> T5'
            });
var format_T4_132 = new ol.format.GeoJSON();
var features_T4_132 = format_T4_132.readFeatures(json_T4_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T4_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T4_132.addFeatures(features_T4_132);
var lyr_T4_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T4_132, 
                style: style_T4_132,
                popuplayertitle: 'T4',
                interactive: true,
                title: '<img src="styles/legend/T4_132.png" /> T4'
            });
var format_T3_133 = new ol.format.GeoJSON();
var features_T3_133 = format_T3_133.readFeatures(json_T3_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3_133.addFeatures(features_T3_133);
var lyr_T3_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T3_133, 
                style: style_T3_133,
                popuplayertitle: 'T3',
                interactive: true,
                title: '<img src="styles/legend/T3_133.png" /> T3'
            });
var format_T2A_134 = new ol.format.GeoJSON();
var features_T2A_134 = format_T2A_134.readFeatures(json_T2A_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2A_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2A_134.addFeatures(features_T2A_134);
var lyr_T2A_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2A_134, 
                style: style_T2A_134,
                popuplayertitle: 'T2A',
                interactive: true,
                title: '<img src="styles/legend/T2A_134.png" /> T2A'
            });
var format_T2_135 = new ol.format.GeoJSON();
var features_T2_135 = format_T2_135.readFeatures(json_T2_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2_135.addFeatures(features_T2_135);
var lyr_T2_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2_135, 
                style: style_T2_135,
                popuplayertitle: 'T2',
                interactive: true,
                title: '<img src="styles/legend/T2_135.png" /> T2'
            });
var format_T1A_136 = new ol.format.GeoJSON();
var features_T1A_136 = format_T1A_136.readFeatures(json_T1A_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1A_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1A_136.addFeatures(features_T1A_136);
var lyr_T1A_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1A_136, 
                style: style_T1A_136,
                popuplayertitle: 'T1A',
                interactive: true,
                title: '<img src="styles/legend/T1A_136.png" /> T1A'
            });
var format_T1_137 = new ol.format.GeoJSON();
var features_T1_137 = format_T1_137.readFeatures(json_T1_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1_137.addFeatures(features_T1_137);
var lyr_T1_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1_137, 
                style: style_T1_137,
                popuplayertitle: 'T1',
                interactive: true,
                title: '<img src="styles/legend/T1_137.png" /> T1'
            });
var format_QH519Depot_138 = new ol.format.GeoJSON();
var features_QH519Depot_138 = format_QH519Depot_138.readFeatures(json_QH519Depot_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH519Depot_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH519Depot_138.addFeatures(features_QH519Depot_138);
var lyr_QH519Depot_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH519Depot_138, 
                style: style_QH519Depot_138,
                popuplayertitle: 'QH519-Depot',
                interactive: false,
                title: '<img src="styles/legend/QH519Depot_138.png" /> QH519-Depot'
            });
var format_tuyen_M3_139 = new ol.format.GeoJSON();
var features_tuyen_M3_139 = format_tuyen_M3_139.readFeatures(json_tuyen_M3_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M3_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M3_139.addFeatures(features_tuyen_M3_139);
var lyr_tuyen_M3_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M3_139, 
                style: style_tuyen_M3_139,
                popuplayertitle: 'tuyen_M3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M3_139.png" /> tuyen_M3'
            });
var format_tuyen_M2_140 = new ol.format.GeoJSON();
var features_tuyen_M2_140 = format_tuyen_M2_140.readFeatures(json_tuyen_M2_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M2_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M2_140.addFeatures(features_tuyen_M2_140);
var lyr_tuyen_M2_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M2_140, 
                style: style_tuyen_M2_140,
                popuplayertitle: 'tuyen_M2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M2_140.png" /> tuyen_M2'
            });
var format_tuyen_M1_141 = new ol.format.GeoJSON();
var features_tuyen_M1_141 = format_tuyen_M1_141.readFeatures(json_tuyen_M1_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M1_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M1_141.addFeatures(features_tuyen_M1_141);
var lyr_tuyen_M1_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M1_141, 
                style: style_tuyen_M1_141,
                popuplayertitle: 'tuyen_M1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M1_141.png" /> tuyen_M1'
            });
var format_tuyen_VT_142 = new ol.format.GeoJSON();
var features_tuyen_VT_142 = format_tuyen_VT_142.readFeatures(json_tuyen_VT_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_VT_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_VT_142.addFeatures(features_tuyen_VT_142);
var lyr_tuyen_VT_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_VT_142, 
                style: style_tuyen_VT_142,
                popuplayertitle: 'tuyen_VT',
                interactive: true,
                title: '<img src="styles/legend/tuyen_VT_142.png" /> tuyen_VT'
            });
var format_tuyen_8_143 = new ol.format.GeoJSON();
var features_tuyen_8_143 = format_tuyen_8_143.readFeatures(json_tuyen_8_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_8_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_8_143.addFeatures(features_tuyen_8_143);
var lyr_tuyen_8_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_8_143, 
                style: style_tuyen_8_143,
                popuplayertitle: 'tuyen_8',
                interactive: true,
                title: '<img src="styles/legend/tuyen_8_143.png" /> tuyen_8'
            });
var format_tuyen_7_144 = new ol.format.GeoJSON();
var features_tuyen_7_144 = format_tuyen_7_144.readFeatures(json_tuyen_7_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_7_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_7_144.addFeatures(features_tuyen_7_144);
var lyr_tuyen_7_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_7_144, 
                style: style_tuyen_7_144,
                popuplayertitle: 'tuyen_7',
                interactive: true,
                title: '<img src="styles/legend/tuyen_7_144.png" /> tuyen_7'
            });
var format_tuyen_6_145 = new ol.format.GeoJSON();
var features_tuyen_6_145 = format_tuyen_6_145.readFeatures(json_tuyen_6_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_6_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_6_145.addFeatures(features_tuyen_6_145);
var lyr_tuyen_6_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_6_145, 
                style: style_tuyen_6_145,
                popuplayertitle: 'tuyen_6',
                interactive: true,
                title: '<img src="styles/legend/tuyen_6_145.png" /> tuyen_6'
            });
var format_tuyen_5_146 = new ol.format.GeoJSON();
var features_tuyen_5_146 = format_tuyen_5_146.readFeatures(json_tuyen_5_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_5_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_5_146.addFeatures(features_tuyen_5_146);
var lyr_tuyen_5_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_5_146, 
                style: style_tuyen_5_146,
                popuplayertitle: 'tuyen_5',
                interactive: true,
                title: '<img src="styles/legend/tuyen_5_146.png" /> tuyen_5'
            });
var format_tuyen_4_147 = new ol.format.GeoJSON();
var features_tuyen_4_147 = format_tuyen_4_147.readFeatures(json_tuyen_4_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_4_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_4_147.addFeatures(features_tuyen_4_147);
var lyr_tuyen_4_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_4_147, 
                style: style_tuyen_4_147,
                popuplayertitle: 'tuyen_4',
                interactive: true,
                title: '<img src="styles/legend/tuyen_4_147.png" /> tuyen_4'
            });
var format_tuyen_3_148 = new ol.format.GeoJSON();
var features_tuyen_3_148 = format_tuyen_3_148.readFeatures(json_tuyen_3_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_3_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_3_148.addFeatures(features_tuyen_3_148);
var lyr_tuyen_3_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_3_148, 
                style: style_tuyen_3_148,
                popuplayertitle: 'tuyen_3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_3_148.png" /> tuyen_3'
            });
var format_tuyen_2A_149 = new ol.format.GeoJSON();
var features_tuyen_2A_149 = format_tuyen_2A_149.readFeatures(json_tuyen_2A_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2A_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2A_149.addFeatures(features_tuyen_2A_149);
var lyr_tuyen_2A_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2A_149, 
                style: style_tuyen_2A_149,
                popuplayertitle: 'tuyen_2A',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2A_149.png" /> tuyen_2A'
            });
var format_tuyen_2_150 = new ol.format.GeoJSON();
var features_tuyen_2_150 = format_tuyen_2_150.readFeatures(json_tuyen_2_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2_150.addFeatures(features_tuyen_2_150);
var lyr_tuyen_2_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2_150, 
                style: style_tuyen_2_150,
                popuplayertitle: 'tuyen_2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2_150.png" /> tuyen_2'
            });
var format_tuyen_1_151 = new ol.format.GeoJSON();
var features_tuyen_1_151 = format_tuyen_1_151.readFeatures(json_tuyen_1_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_1_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_1_151.addFeatures(features_tuyen_1_151);
var lyr_tuyen_1_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_1_151, 
                style: style_tuyen_1_151,
                popuplayertitle: 'tuyen_1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_1_151.png" /> tuyen_1'
            });
var group_QH519 = new ol.layer.Group({
                                layers: [lyr_QH519Depot_138,lyr_tuyen_M3_139,lyr_tuyen_M2_140,lyr_tuyen_M1_141,lyr_tuyen_VT_142,lyr_tuyen_8_143,lyr_tuyen_7_144,lyr_tuyen_6_145,lyr_tuyen_5_146,lyr_tuyen_4_147,lyr_tuyen_3_148,lyr_tuyen_2A_149,lyr_tuyen_2_150,lyr_tuyen_1_151,],
                                fold: 'open',
                                title: 'QH 519'});
var group_QH1668 = new ol.layer.Group({
                                layers: [lyr_GaQHDSKhudaumoi_122,lyr_QHDSKhudaumoi_123,lyr_T12_124,lyr_T11_125,lyr_T10_126,lyr_T9_127,lyr_T8_128,lyr_T7_129,lyr_T6_130,lyr_T5_131,lyr_T4_132,lyr_T3_133,lyr_T2A_134,lyr_T2_135,lyr_T1A_136,lyr_T1_137,],
                                fold: 'open',
                                title: 'QH1668'});
var group_RasoatSXD03022026 = new ol.layer.Group({
                                layers: [lyr_Layer_CcTuynmi_108,lyr_Layer_Tuyn12_109,lyr_Layer_Tuyn11_110,lyr_Layer_Tuyn10_111,lyr_Layer_Tuyn9_112,lyr_Layer_Tuyn8_113,lyr_Layer_Tuyn7_114,lyr_Layer_Tuyn6_115,lyr_Layer_Tuyn5_116,lyr_Layer_Tuyn4_117,lyr_Layer_Tuyn3_118,lyr_Layer_Tuyn2A_119,lyr_Layer_Tuyn2_120,lyr_Layer_Tuyn1_121,],
                                fold: 'close',
                                title: 'Ra soat SXD (03-02-2026)'});
var group_RasoatSXD04032026 = new ol.layer.Group({
                                layers: [lyr_DSQG_86,lyr_Duongsatvung_87,lyr_Depot_88,lyr_PLine_17_89,lyr_PLine_16_90,lyr_PLine_15_91,lyr_PLine_14_92,lyr_PLine_13_93,lyr_PLine_12_94,lyr_PLine_11_95,lyr_PLine_10_96,lyr_PLine_9_97,lyr_PLine_8_98,lyr_PLine_7_99,lyr_PLine_6_100,lyr_PLine_5_101,lyr_PLine_4_102,lyr_PLine_3_103,lyr_PLine_2A_104,lyr_PLine_2_105,lyr_PLine_1_106,lyr_All_107,],
                                fold: 'close',
                                title: 'Ra soat SXD (04-03-2026)'});
var group_QH100nam07022026 = new ol.layer.Group({
                                layers: [lyr_QH100Tuyen16_74,lyr_QH100Tuyen14_75,lyr_QH100Tuyen9_76,lyr_QH100Tuyen8_77,lyr_QH100Tuyen7_78,lyr_QH100Tuyen6_79,lyr_QH100Tuyen5_80,lyr_QH100Tuyen4_81,lyr_QH100Tuyen3_82,lyr_QH100Tuyen2A_83,lyr_QH100Tuyen2_84,lyr_QH100Tuyen1_85,],
                                fold: 'close',
                                title: 'QH 100nam (07-02-2026)'});
var group_QH100nam10022026 = new ol.layer.Group({
                                layers: [lyr_QH100Ga_54,lyr_QH100Monorail_55,lyr_QH100dsDT_56,lyr_QH100DSDT17_57,lyr_QH100DSDT16_58,lyr_QH100DSDT15_59,lyr_QH100DSDT12_60,lyr_QH100DSDT11_61,lyr_QH100DSDT10_62,lyr_QH100DSDT9_63,lyr_QH100DSDT8_64,lyr_QH100DSDT7_65,lyr_QH100DSDT6_66,lyr_QH100DSDT5_67,lyr_QH100DSDT4_68,lyr_QH100DSDT3_69,lyr_QH100DSDT2A_70,lyr_QH100DSDT2_71,lyr_QH100DSDT1_72,lyr_QH100DSQG_Thuong2050_73,],
                                fold: 'close',
                                title: 'QH 100nam (10-02-2026)'});
var group_QH100namxcangT12032026 = new ol.layer.Group({
                                layers: [lyr_Monorail_35,lyr_DSDT16_36,lyr_DSDT15_37,lyr_DSDT10_38,lyr_DSDT9_39,lyr_DSDT8_40,lyr_DSDT7_41,lyr_DSDT6_42,lyr_DSDT5_43,lyr_DSDT4_44,lyr_DSDT3_45,lyr_DSDT2A_46,lyr_DSDT2_47,lyr_DSDT1_48,lyr_4Railway_49,lyr_3LRTORBRTM17_50,lyr_3LRTORBRTM13_51,lyr_1ExpressLineM8_52,lyr_Ga_53,],
                                fold: 'close',
                                title: 'QH 100nam - Đx của Đồng Tế (12-03-2026)'});
var group_QH100sauhpChnhph13032026 = new ol.layer.Group({
                                layers: [lyr_nearbyProvince_8,lyr_nearbyProvince_9,lyr_03commuterLine_10,lyr_02interCity_11,lyr_01highSpeed_12,lyr_7railwaystation2secondary_13,lyr_6airport_14,lyr_4Railway_15,lyr_4BRTM18_16,lyr_4BRTM17_17,lyr_4BRTM12_18,lyr_3LRTM15_19,lyr_3LRTM13_20,lyr_3LRTM9_21,lyr_2RegularLineM16_22,lyr_2RegularLineM14_23,lyr_2RegularLineM11_24,lyr_2RegularLineM10_25,lyr_2RegularLineM7_26,lyr_2RegularLineM6_27,lyr_2RegularLineM5_28,lyr_2RegularLineM4_29,lyr_2RegularLineM3_30,lyr_2RegularLineM2_31,lyr_2RegularLine2A_32,lyr_1ExpressLineM8_33,lyr_1ExpressLineM1_34,],
                                fold: 'open',
                                title: 'QH100 sau họp Chính phủ (13-03-2026)'});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleTraffic_1.setVisible(false);lyr_GoogleTerrain_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(false);lyr_GoogleRoad_4.setVisible(true);lyr_GoogleLabels_5.setVisible(false);lyr_GoogleHybrid_6.setVisible(false);lyr_1769_DaumoiHaNoi_modified_7.setVisible(false);lyr_nearbyProvince_8.setVisible(false);lyr_nearbyProvince_9.setVisible(false);lyr_03commuterLine_10.setVisible(false);lyr_02interCity_11.setVisible(false);lyr_01highSpeed_12.setVisible(false);lyr_7railwaystation2secondary_13.setVisible(false);lyr_6airport_14.setVisible(false);lyr_4Railway_15.setVisible(false);lyr_4BRTM18_16.setVisible(false);lyr_4BRTM17_17.setVisible(false);lyr_4BRTM12_18.setVisible(false);lyr_3LRTM15_19.setVisible(false);lyr_3LRTM13_20.setVisible(false);lyr_3LRTM9_21.setVisible(false);lyr_2RegularLineM16_22.setVisible(false);lyr_2RegularLineM14_23.setVisible(false);lyr_2RegularLineM11_24.setVisible(false);lyr_2RegularLineM10_25.setVisible(false);lyr_2RegularLineM7_26.setVisible(false);lyr_2RegularLineM6_27.setVisible(false);lyr_2RegularLineM5_28.setVisible(false);lyr_2RegularLineM4_29.setVisible(false);lyr_2RegularLineM3_30.setVisible(false);lyr_2RegularLineM2_31.setVisible(false);lyr_2RegularLine2A_32.setVisible(false);lyr_1ExpressLineM8_33.setVisible(false);lyr_1ExpressLineM1_34.setVisible(false);lyr_Monorail_35.setVisible(false);lyr_DSDT16_36.setVisible(false);lyr_DSDT15_37.setVisible(false);lyr_DSDT10_38.setVisible(false);lyr_DSDT9_39.setVisible(false);lyr_DSDT8_40.setVisible(false);lyr_DSDT7_41.setVisible(false);lyr_DSDT6_42.setVisible(false);lyr_DSDT5_43.setVisible(false);lyr_DSDT4_44.setVisible(false);lyr_DSDT3_45.setVisible(false);lyr_DSDT2A_46.setVisible(false);lyr_DSDT2_47.setVisible(false);lyr_DSDT1_48.setVisible(false);lyr_4Railway_49.setVisible(false);lyr_3LRTORBRTM17_50.setVisible(false);lyr_3LRTORBRTM13_51.setVisible(false);lyr_1ExpressLineM8_52.setVisible(false);lyr_Ga_53.setVisible(false);lyr_QH100Ga_54.setVisible(false);lyr_QH100Monorail_55.setVisible(false);lyr_QH100dsDT_56.setVisible(false);lyr_QH100DSDT17_57.setVisible(false);lyr_QH100DSDT16_58.setVisible(false);lyr_QH100DSDT15_59.setVisible(false);lyr_QH100DSDT12_60.setVisible(false);lyr_QH100DSDT11_61.setVisible(false);lyr_QH100DSDT10_62.setVisible(false);lyr_QH100DSDT9_63.setVisible(false);lyr_QH100DSDT8_64.setVisible(false);lyr_QH100DSDT7_65.setVisible(false);lyr_QH100DSDT6_66.setVisible(false);lyr_QH100DSDT5_67.setVisible(false);lyr_QH100DSDT4_68.setVisible(false);lyr_QH100DSDT3_69.setVisible(false);lyr_QH100DSDT2A_70.setVisible(false);lyr_QH100DSDT2_71.setVisible(false);lyr_QH100DSDT1_72.setVisible(false);lyr_QH100DSQG_Thuong2050_73.setVisible(false);lyr_QH100Tuyen16_74.setVisible(false);lyr_QH100Tuyen14_75.setVisible(false);lyr_QH100Tuyen9_76.setVisible(false);lyr_QH100Tuyen8_77.setVisible(false);lyr_QH100Tuyen7_78.setVisible(false);lyr_QH100Tuyen6_79.setVisible(false);lyr_QH100Tuyen5_80.setVisible(false);lyr_QH100Tuyen4_81.setVisible(false);lyr_QH100Tuyen3_82.setVisible(false);lyr_QH100Tuyen2A_83.setVisible(false);lyr_QH100Tuyen2_84.setVisible(false);lyr_QH100Tuyen1_85.setVisible(false);lyr_DSQG_86.setVisible(false);lyr_Duongsatvung_87.setVisible(false);lyr_Depot_88.setVisible(false);lyr_PLine_17_89.setVisible(false);lyr_PLine_16_90.setVisible(false);lyr_PLine_15_91.setVisible(false);lyr_PLine_14_92.setVisible(false);lyr_PLine_13_93.setVisible(false);lyr_PLine_12_94.setVisible(false);lyr_PLine_11_95.setVisible(false);lyr_PLine_10_96.setVisible(false);lyr_PLine_9_97.setVisible(false);lyr_PLine_8_98.setVisible(false);lyr_PLine_7_99.setVisible(false);lyr_PLine_6_100.setVisible(false);lyr_PLine_5_101.setVisible(false);lyr_PLine_4_102.setVisible(false);lyr_PLine_3_103.setVisible(false);lyr_PLine_2A_104.setVisible(false);lyr_PLine_2_105.setVisible(false);lyr_PLine_1_106.setVisible(false);lyr_All_107.setVisible(false);lyr_Layer_CcTuynmi_108.setVisible(false);lyr_Layer_Tuyn12_109.setVisible(false);lyr_Layer_Tuyn11_110.setVisible(false);lyr_Layer_Tuyn10_111.setVisible(false);lyr_Layer_Tuyn9_112.setVisible(false);lyr_Layer_Tuyn8_113.setVisible(false);lyr_Layer_Tuyn7_114.setVisible(false);lyr_Layer_Tuyn6_115.setVisible(false);lyr_Layer_Tuyn5_116.setVisible(false);lyr_Layer_Tuyn4_117.setVisible(false);lyr_Layer_Tuyn3_118.setVisible(false);lyr_Layer_Tuyn2A_119.setVisible(false);lyr_Layer_Tuyn2_120.setVisible(false);lyr_Layer_Tuyn1_121.setVisible(false);lyr_GaQHDSKhudaumoi_122.setVisible(false);lyr_QHDSKhudaumoi_123.setVisible(false);lyr_T12_124.setVisible(false);lyr_T11_125.setVisible(false);lyr_T10_126.setVisible(false);lyr_T9_127.setVisible(false);lyr_T8_128.setVisible(false);lyr_T7_129.setVisible(false);lyr_T6_130.setVisible(false);lyr_T5_131.setVisible(false);lyr_T4_132.setVisible(false);lyr_T3_133.setVisible(false);lyr_T2A_134.setVisible(false);lyr_T2_135.setVisible(false);lyr_T1A_136.setVisible(false);lyr_T1_137.setVisible(false);lyr_QH519Depot_138.setVisible(true);lyr_tuyen_M3_139.setVisible(true);lyr_tuyen_M2_140.setVisible(true);lyr_tuyen_M1_141.setVisible(true);lyr_tuyen_VT_142.setVisible(true);lyr_tuyen_8_143.setVisible(true);lyr_tuyen_7_144.setVisible(true);lyr_tuyen_6_145.setVisible(true);lyr_tuyen_5_146.setVisible(true);lyr_tuyen_4_147.setVisible(true);lyr_tuyen_3_148.setVisible(true);lyr_tuyen_2A_149.setVisible(true);lyr_tuyen_2_150.setVisible(true);lyr_tuyen_1_151.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleTraffic_1,lyr_GoogleTerrain_2,lyr_GoogleSatellite_3,lyr_GoogleRoad_4,lyr_GoogleLabels_5,lyr_GoogleHybrid_6,lyr_1769_DaumoiHaNoi_modified_7,group_QH100sauhpChnhph13032026,group_QH100namxcangT12032026,group_QH100nam10022026,group_QH100nam07022026,group_RasoatSXD04032026,group_RasoatSXD03022026,group_QH1668,group_QH519];
lyr_nearbyProvince_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_nearbyProvince_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_03commuterLine_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_02interCity_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_01highSpeed_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', });
lyr_7railwaystation2secondary_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'name_1': 'name_1', });
lyr_6airport_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'name_1': 'name_1', });
lyr_4Railway_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_4BRTM18_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_4BRTM17_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_4BRTM12_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_3LRTM15_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_3LRTM13_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_3LRTM9_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM16_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM14_23.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM11_24.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM10_25.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM7_26.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM6_27.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM5_28.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM4_29.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM3_30.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM2_31.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_2RegularLine2A_32.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_1ExpressLineM8_33.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_1ExpressLineM1_34.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_Monorail_35.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT16_36.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT15_37.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT10_38.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT9_39.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT8_40.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT7_41.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT6_42.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT5_43.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT4_44.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT3_45.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT2A_46.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT2_47.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT1_48.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_4Railway_49.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_3LRTORBRTM17_50.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_3LRTORBRTM13_51.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_1ExpressLineM8_52.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ga_53.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QH100Ga_54.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100Monorail_55.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100dsDT_56.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT17_57.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT16_58.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT15_59.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT12_60.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT11_61.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT10_62.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT9_63.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT8_64.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT7_65.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT6_66.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT5_67.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT4_68.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT3_69.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT2A_70.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT2_71.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT1_72.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSQG_Thuong2050_73.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100Tuyen16_74.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen14_75.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen9_76.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen8_77.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen7_78.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen6_79.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen5_80.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen4_81.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen3_82.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen2A_83.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen2_84.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen1_85.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_DSQG_86.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_Duongsatvung_87.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_Depot_88.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PLine_17_89.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_16_90.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_15_91.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_14_92.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_13_93.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_12_94.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_11_95.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_10_96.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_9_97.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_8_98.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_7_99.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_6_100.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_5_101.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_4_102.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_3_103.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_2A_104.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_2_105.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_1_106.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_All_107.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_Layer_CcTuynmi_108.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn12_109.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn11_110.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn10_111.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn9_112.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn8_113.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn7_114.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn6_115.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn5_116.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn4_117.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn3_118.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn2A_119.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn2_120.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn1_121.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_GaQHDSKhudaumoi_122.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QHDSKhudaumoi_123.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_T12_124.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T11_125.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T10_126.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T9_127.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T8_128.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T7_129.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T6_130.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T5_131.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T4_132.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T3_133.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T2A_134.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T2_135.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T1A_136.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T1_137.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_QH519Depot_138.set('fieldAliases', {'fid': 'fid', });
lyr_tuyen_M3_139.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M2_140.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M1_141.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_VT_142.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_8_143.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_7_144.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_6_145.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_5_146.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_4_147.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_3_148.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2A_149.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2_150.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_1_151.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_nearbyProvince_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_nearbyProvince_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_03commuterLine_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_02interCity_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_01highSpeed_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', });
lyr_7railwaystation2secondary_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'name_1': 'TextEdit', });
lyr_6airport_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'name_1': 'TextEdit', });
lyr_4Railway_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_4BRTM18_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_4BRTM17_17.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_4BRTM12_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_3LRTM15_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_3LRTM13_20.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_3LRTM9_21.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM16_22.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM14_23.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM11_24.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM10_25.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM7_26.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM6_27.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM5_28.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM4_29.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM3_30.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM2_31.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLine2A_32.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_1ExpressLineM8_33.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_1ExpressLineM1_34.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_Monorail_35.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT16_36.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT15_37.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT10_38.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT9_39.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT8_40.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT7_41.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT6_42.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT5_43.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT4_44.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT3_45.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT2A_46.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT2_47.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT1_48.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_4Railway_49.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_3LRTORBRTM17_50.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_3LRTORBRTM13_51.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_1ExpressLineM8_52.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Ga_53.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QH100Ga_54.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100Monorail_55.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100dsDT_56.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT17_57.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT16_58.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT15_59.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT12_60.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT11_61.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT10_62.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT9_63.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT8_64.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT7_65.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT6_66.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT5_67.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT4_68.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT3_69.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT2A_70.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT2_71.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT1_72.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSQG_Thuong2050_73.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100Tuyen16_74.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen14_75.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen9_76.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen8_77.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen7_78.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen6_79.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen5_80.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen4_81.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen3_82.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen2A_83.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen2_84.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen1_85.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_DSQG_86.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_Duongsatvung_87.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_Depot_88.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PLine_17_89.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_16_90.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_15_91.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_14_92.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_13_93.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_12_94.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_11_95.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_10_96.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_9_97.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_8_98.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_7_99.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_6_100.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_5_101.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_4_102.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_3_103.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_2A_104.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_2_105.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_1_106.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_All_107.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_Layer_CcTuynmi_108.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn12_109.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn11_110.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn10_111.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn9_112.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn8_113.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn7_114.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn6_115.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn5_116.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn4_117.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn3_118.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn2A_119.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn2_120.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn1_121.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_GaQHDSKhudaumoi_122.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QHDSKhudaumoi_123.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_T12_124.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T11_125.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T10_126.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T9_127.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T8_128.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T7_129.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T6_130.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T5_131.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T4_132.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T3_133.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T2A_134.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T2_135.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T1A_136.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T1_137.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_QH519Depot_138.set('fieldImages', {'fid': '', });
lyr_tuyen_M3_139.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M2_140.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M1_141.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_VT_142.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_8_143.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_7_144.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_6_145.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_5_146.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_4_147.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_3_148.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_2A_149.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_2_150.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_1_151.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_nearbyProvince_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', });
lyr_nearbyProvince_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', });
lyr_03commuterLine_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_02interCity_11.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'line_section': 'no label', });
lyr_01highSpeed_12.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', });
lyr_7railwaystation2secondary_13.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'name_1': 'no label', });
lyr_6airport_14.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'name_1': 'no label', });
lyr_4Railway_15.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'line_section': 'no label', 'attrib_1': 'no label', });
lyr_4BRTM18_16.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'line_section': 'no label', 'attrib_1': 'no label', });
lyr_4BRTM17_17.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'line_section': 'no label', 'attrib_1': 'no label', });
lyr_4BRTM12_18.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'line_section': 'no label', 'attrib_1': 'no label', });
lyr_3LRTM15_19.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'attrib_1': 'no label', });
lyr_3LRTM13_20.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'attrib_1': 'no label', });
lyr_3LRTM9_21.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'attrib_1': 'no label', });
lyr_2RegularLineM16_22.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'attrib_1': 'no label', });
lyr_2RegularLineM14_23.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'attrib_1': 'no label', });
lyr_2RegularLineM11_24.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'attrib_1': 'no label', });
lyr_2RegularLineM10_25.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'attrib_1': 'no label', });
lyr_2RegularLineM7_26.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'attrib_1': 'no label', });
lyr_2RegularLineM6_27.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'attrib_1': 'no label', });
lyr_2RegularLineM5_28.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'attrib_1': 'no label', });
lyr_2RegularLineM4_29.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'attrib_1': 'no label', });
lyr_2RegularLineM3_30.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'attrib_1': 'no label', });
lyr_2RegularLineM2_31.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'line_section': 'no label', 'attrib_1': 'no label', });
lyr_2RegularLine2A_32.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'line_section': 'no label', 'attrib_1': 'no label', });
lyr_1ExpressLineM8_33.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'line_section': 'no label', 'attrib_1': 'no label', });
lyr_1ExpressLineM1_34.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', 'line_section': 'no label', 'attrib_1': 'no label', });
lyr_Monorail_35.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT16_36.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT15_37.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT10_38.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT9_39.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT8_40.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT7_41.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT6_42.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT5_43.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT4_44.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT3_45.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT2A_46.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT2_47.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DSDT1_48.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_4Railway_49.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_3LRTORBRTM17_50.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_3LRTORBRTM13_51.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_1ExpressLineM8_52.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Ga_53.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_QH100Ga_54.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'no label', });
lyr_QH100Monorail_55.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100dsDT_56.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT17_57.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT16_58.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT15_59.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT12_60.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT11_61.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT10_62.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT9_63.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT8_64.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT7_65.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT6_66.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT5_67.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT4_68.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT3_69.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT2A_70.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT2_71.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT1_72.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSQG_Thuong2050_73.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100Tuyen16_74.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen14_75.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen9_76.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen8_77.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen7_78.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen6_79.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen5_80.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen4_81.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen3_82.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen2A_83.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen2_84.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen1_85.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_DSQG_86.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_Duongsatvung_87.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_Depot_88.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PLine_17_89.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_16_90.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_15_91.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_14_92.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_13_93.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_12_94.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_11_95.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_10_96.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_9_97.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_8_98.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_7_99.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_6_100.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_5_101.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_4_102.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_3_103.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_2A_104.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_2_105.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_PLine_1_106.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_All_107.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'no label', });
lyr_Layer_CcTuynmi_108.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn12_109.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn11_110.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn10_111.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn9_112.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn8_113.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn7_114.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn6_115.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn5_116.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn4_117.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn3_118.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn2A_119.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn2_120.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn1_121.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_GaQHDSKhudaumoi_122.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_QHDSKhudaumoi_123.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', });
lyr_T12_124.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T11_125.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T10_126.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T9_127.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T8_128.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T7_129.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T6_130.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T5_131.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T4_132.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T3_133.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T2A_134.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T2_135.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T1A_136.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T1_137.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_QH519Depot_138.set('fieldLabels', {'fid': 'hidden field', });
lyr_tuyen_M3_139.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_M2_140.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_M1_141.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_VT_142.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_8_143.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_7_144.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_6_145.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_5_146.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_4_147.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_3_148.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_2A_149.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_2_150.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_1_151.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_1_151.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});