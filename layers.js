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
            
            className: 'grayscale-basemap',
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
var format_layer_M16_7 = new ol.format.GeoJSON();
var features_layer_M16_7 = format_layer_M16_7.readFeatures(json_layer_M16_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M16_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M16_7.addFeatures(features_layer_M16_7);
var lyr_layer_M16_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M16_7, 
                style: style_layer_M16_7,
                popuplayertitle: 'layer_M16',
                interactive: true,
                title: '<img src="styles/legend/layer_M16_7.png" /> layer_M16'
            });
var format_layer_M15_8 = new ol.format.GeoJSON();
var features_layer_M15_8 = format_layer_M15_8.readFeatures(json_layer_M15_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M15_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M15_8.addFeatures(features_layer_M15_8);
var lyr_layer_M15_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M15_8, 
                style: style_layer_M15_8,
                popuplayertitle: 'layer_M15',
                interactive: true,
                title: '<img src="styles/legend/layer_M15_8.png" /> layer_M15'
            });
var format_layer_M14_9 = new ol.format.GeoJSON();
var features_layer_M14_9 = format_layer_M14_9.readFeatures(json_layer_M14_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M14_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M14_9.addFeatures(features_layer_M14_9);
var lyr_layer_M14_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M14_9, 
                style: style_layer_M14_9,
                popuplayertitle: 'layer_M14',
                interactive: true,
                title: '<img src="styles/legend/layer_M14_9.png" /> layer_M14'
            });
var format_layer_M13_10 = new ol.format.GeoJSON();
var features_layer_M13_10 = format_layer_M13_10.readFeatures(json_layer_M13_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M13_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M13_10.addFeatures(features_layer_M13_10);
var lyr_layer_M13_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M13_10, 
                style: style_layer_M13_10,
                popuplayertitle: 'layer_M13',
                interactive: true,
                title: '<img src="styles/legend/layer_M13_10.png" /> layer_M13'
            });
var format_layer_M12_11 = new ol.format.GeoJSON();
var features_layer_M12_11 = format_layer_M12_11.readFeatures(json_layer_M12_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M12_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M12_11.addFeatures(features_layer_M12_11);
var lyr_layer_M12_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M12_11, 
                style: style_layer_M12_11,
                popuplayertitle: 'layer_M12',
                interactive: true,
                title: '<img src="styles/legend/layer_M12_11.png" /> layer_M12'
            });
var format_layer_M11_12 = new ol.format.GeoJSON();
var features_layer_M11_12 = format_layer_M11_12.readFeatures(json_layer_M11_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M11_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M11_12.addFeatures(features_layer_M11_12);
var lyr_layer_M11_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M11_12, 
                style: style_layer_M11_12,
                popuplayertitle: 'layer_M11',
                interactive: true,
                title: '<img src="styles/legend/layer_M11_12.png" /> layer_M11'
            });
var format_layer_M10_13 = new ol.format.GeoJSON();
var features_layer_M10_13 = format_layer_M10_13.readFeatures(json_layer_M10_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M10_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M10_13.addFeatures(features_layer_M10_13);
var lyr_layer_M10_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M10_13, 
                style: style_layer_M10_13,
                popuplayertitle: 'layer_M10',
                interactive: true,
                title: '<img src="styles/legend/layer_M10_13.png" /> layer_M10'
            });
var format_layer_M09_14 = new ol.format.GeoJSON();
var features_layer_M09_14 = format_layer_M09_14.readFeatures(json_layer_M09_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M09_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M09_14.addFeatures(features_layer_M09_14);
var lyr_layer_M09_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M09_14, 
                style: style_layer_M09_14,
                popuplayertitle: 'layer_M09',
                interactive: true,
                title: '<img src="styles/legend/layer_M09_14.png" /> layer_M09'
            });
var format_layer_M08_15 = new ol.format.GeoJSON();
var features_layer_M08_15 = format_layer_M08_15.readFeatures(json_layer_M08_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M08_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M08_15.addFeatures(features_layer_M08_15);
var lyr_layer_M08_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M08_15, 
                style: style_layer_M08_15,
                popuplayertitle: 'layer_M08',
                interactive: true,
                title: '<img src="styles/legend/layer_M08_15.png" /> layer_M08'
            });
var format_layer_M07_16 = new ol.format.GeoJSON();
var features_layer_M07_16 = format_layer_M07_16.readFeatures(json_layer_M07_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M07_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M07_16.addFeatures(features_layer_M07_16);
var lyr_layer_M07_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M07_16, 
                style: style_layer_M07_16,
                popuplayertitle: 'layer_M07',
                interactive: true,
                title: '<img src="styles/legend/layer_M07_16.png" /> layer_M07'
            });
var format_layer_M06_17 = new ol.format.GeoJSON();
var features_layer_M06_17 = format_layer_M06_17.readFeatures(json_layer_M06_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M06_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M06_17.addFeatures(features_layer_M06_17);
var lyr_layer_M06_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M06_17, 
                style: style_layer_M06_17,
                popuplayertitle: 'layer_M06',
                interactive: true,
                title: '<img src="styles/legend/layer_M06_17.png" /> layer_M06'
            });
var format_layer_M05_18 = new ol.format.GeoJSON();
var features_layer_M05_18 = format_layer_M05_18.readFeatures(json_layer_M05_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M05_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M05_18.addFeatures(features_layer_M05_18);
var lyr_layer_M05_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M05_18, 
                style: style_layer_M05_18,
                popuplayertitle: 'layer_M05',
                interactive: true,
                title: '<img src="styles/legend/layer_M05_18.png" /> layer_M05'
            });
var format_layer_M04_19 = new ol.format.GeoJSON();
var features_layer_M04_19 = format_layer_M04_19.readFeatures(json_layer_M04_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M04_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M04_19.addFeatures(features_layer_M04_19);
var lyr_layer_M04_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M04_19, 
                style: style_layer_M04_19,
                popuplayertitle: 'layer_M04',
                interactive: true,
                title: '<img src="styles/legend/layer_M04_19.png" /> layer_M04'
            });
var format_layer_M03_20 = new ol.format.GeoJSON();
var features_layer_M03_20 = format_layer_M03_20.readFeatures(json_layer_M03_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M03_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M03_20.addFeatures(features_layer_M03_20);
var lyr_layer_M03_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M03_20, 
                style: style_layer_M03_20,
                popuplayertitle: 'layer_M03',
                interactive: true,
                title: '<img src="styles/legend/layer_M03_20.png" /> layer_M03'
            });
var format_layer_M02A_21 = new ol.format.GeoJSON();
var features_layer_M02A_21 = format_layer_M02A_21.readFeatures(json_layer_M02A_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M02A_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M02A_21.addFeatures(features_layer_M02A_21);
var lyr_layer_M02A_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M02A_21, 
                style: style_layer_M02A_21,
                popuplayertitle: 'layer_M02A',
                interactive: true,
                title: '<img src="styles/legend/layer_M02A_21.png" /> layer_M02A'
            });
var format_layer_M02_22 = new ol.format.GeoJSON();
var features_layer_M02_22 = format_layer_M02_22.readFeatures(json_layer_M02_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M02_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M02_22.addFeatures(features_layer_M02_22);
var lyr_layer_M02_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M02_22, 
                style: style_layer_M02_22,
                popuplayertitle: 'layer_M02',
                interactive: true,
                title: '<img src="styles/legend/layer_M02_22.png" /> layer_M02'
            });
var format_layer_M01_23 = new ol.format.GeoJSON();
var features_layer_M01_23 = format_layer_M01_23.readFeatures(json_layer_M01_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_M01_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_M01_23.addFeatures(features_layer_M01_23);
var lyr_layer_M01_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_M01_23, 
                style: style_layer_M01_23,
                popuplayertitle: 'layer_M01',
                interactive: true,
                title: '<img src="styles/legend/layer_M01_23.png" /> layer_M01'
            });
var format_QH100HUPI260406polylines_24 = new ol.format.GeoJSON();
var features_QH100HUPI260406polylines_24 = format_QH100HUPI260406polylines_24.readFeatures(json_QH100HUPI260406polylines_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100HUPI260406polylines_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100HUPI260406polylines_24.addFeatures(features_QH100HUPI260406polylines_24);
var lyr_QH100HUPI260406polylines_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100HUPI260406polylines_24, 
                style: style_QH100HUPI260406polylines_24,
                popuplayertitle: 'QH100 - HUPI 260406 — polylines',
                interactive: false,
    title: 'QH100 - HUPI 260406 — polylines<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_0.png" /> @@02-interCity<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_1.png" /> 4-BRT-M18<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_2.png" /> 4-Railway<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_3.png" /> 4-Railway-white<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_4.png" /> D- duong sat toc do cao<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_5.png" /> D-Cao toc<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_6.png" /> D-Pc Cao toc<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_7.png" /> DSDT 1<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_8.png" /> DSDT 10<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_9.png" /> DSDT 12<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_10.png" /> DSDT 2<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_11.png" /> DSDT 2A<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_12.png" /> DSDT 3<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_13.png" /> DSDT 4<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_14.png" /> DSDT 5<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_15.png" /> DSDT 6<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_16.png" /> DSDT 7<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_17.png" /> DSDT 8<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_18.png" /> DSDT 9<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_19.png" /> DSDT_11<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_20.png" /> DSDT_13<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_21.png" /> DSDT_15<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_22.png" /> DSDT_16<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_23.png" /> DSDT_17<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_24.png" /> ĐSQG_Thường 2050<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_25.png" /> ket noi dsdt<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_26.png" /> Monorail<br />\
    <img src="styles/legend/QH100HUPI260406polylines_24_27.png" /> <br />' });
var format_layer_DCaotoc_25 = new ol.format.GeoJSON();
var features_layer_DCaotoc_25 = format_layer_DCaotoc_25.readFeatures(json_layer_DCaotoc_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DCaotoc_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DCaotoc_25.addFeatures(features_layer_DCaotoc_25);
var lyr_layer_DCaotoc_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DCaotoc_25, 
                style: style_layer_DCaotoc_25,
                popuplayertitle: 'layer_D-Cao toc',
                interactive: true,
                title: '<img src="styles/legend/layer_DCaotoc_25.png" /> layer_D-Cao toc'
            });
var format_layer_DPcCaotoc_26 = new ol.format.GeoJSON();
var features_layer_DPcCaotoc_26 = format_layer_DPcCaotoc_26.readFeatures(json_layer_DPcCaotoc_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DPcCaotoc_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DPcCaotoc_26.addFeatures(features_layer_DPcCaotoc_26);
var lyr_layer_DPcCaotoc_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DPcCaotoc_26, 
                style: style_layer_DPcCaotoc_26,
                popuplayertitle: 'layer_D-Pc Cao toc',
                interactive: true,
                title: '<img src="styles/legend/layer_DPcCaotoc_26.png" /> layer_D-Pc Cao toc'
            });
var format_layer_ketnoidsdt_27 = new ol.format.GeoJSON();
var features_layer_ketnoidsdt_27 = format_layer_ketnoidsdt_27.readFeatures(json_layer_ketnoidsdt_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_ketnoidsdt_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_ketnoidsdt_27.addFeatures(features_layer_ketnoidsdt_27);
var lyr_layer_ketnoidsdt_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_ketnoidsdt_27, 
                style: style_layer_ketnoidsdt_27,
                popuplayertitle: 'layer_ket noi dsdt',
                interactive: true,
                title: '<img src="styles/legend/layer_ketnoidsdt_27.png" /> layer_ket noi dsdt'
            });
var format_layer_4Railwaywhite_28 = new ol.format.GeoJSON();
var features_layer_4Railwaywhite_28 = format_layer_4Railwaywhite_28.readFeatures(json_layer_4Railwaywhite_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_4Railwaywhite_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_4Railwaywhite_28.addFeatures(features_layer_4Railwaywhite_28);
var lyr_layer_4Railwaywhite_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_4Railwaywhite_28, 
                style: style_layer_4Railwaywhite_28,
                popuplayertitle: 'layer_4-Railway-white',
                interactive: true,
                title: '<img src="styles/legend/layer_4Railwaywhite_28.png" /> layer_4-Railway-white'
            });
var format_layer_4Railway_29 = new ol.format.GeoJSON();
var features_layer_4Railway_29 = format_layer_4Railway_29.readFeatures(json_layer_4Railway_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_4Railway_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_4Railway_29.addFeatures(features_layer_4Railway_29);
var lyr_layer_4Railway_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_4Railway_29, 
                style: style_layer_4Railway_29,
                popuplayertitle: 'layer_4-Railway',
                interactive: true,
                title: '<img src="styles/legend/layer_4Railway_29.png" /> layer_4-Railway'
            });
var format_layer_SQG_Thng2050_30 = new ol.format.GeoJSON();
var features_layer_SQG_Thng2050_30 = format_layer_SQG_Thng2050_30.readFeatures(json_layer_SQG_Thng2050_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_SQG_Thng2050_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_SQG_Thng2050_30.addFeatures(features_layer_SQG_Thng2050_30);
var lyr_layer_SQG_Thng2050_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_SQG_Thng2050_30, 
                style: style_layer_SQG_Thng2050_30,
                popuplayertitle: 'layer_ĐSQG_Thường 2050',
                interactive: true,
                title: '<img src="styles/legend/layer_SQG_Thng2050_30.png" /> layer_ĐSQG_Thường 2050'
            });
var format_layer_Dduongsattocdocao_31 = new ol.format.GeoJSON();
var features_layer_Dduongsattocdocao_31 = format_layer_Dduongsattocdocao_31.readFeatures(json_layer_Dduongsattocdocao_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_Dduongsattocdocao_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_Dduongsattocdocao_31.addFeatures(features_layer_Dduongsattocdocao_31);
var lyr_layer_Dduongsattocdocao_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_Dduongsattocdocao_31, 
                style: style_layer_Dduongsattocdocao_31,
                popuplayertitle: 'layer_D- duong sat toc do cao',
                interactive: true,
                title: '<img src="styles/legend/layer_Dduongsattocdocao_31.png" /> layer_D- duong sat toc do cao'
            });
var format_layer_Monorail_32 = new ol.format.GeoJSON();
var features_layer_Monorail_32 = format_layer_Monorail_32.readFeatures(json_layer_Monorail_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_Monorail_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_Monorail_32.addFeatures(features_layer_Monorail_32);
var lyr_layer_Monorail_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_Monorail_32, 
                style: style_layer_Monorail_32,
                popuplayertitle: 'layer_Monorail',
                interactive: true,
                title: '<img src="styles/legend/layer_Monorail_32.png" /> layer_Monorail'
            });
var format_layer_4BRTM18_33 = new ol.format.GeoJSON();
var features_layer_4BRTM18_33 = format_layer_4BRTM18_33.readFeatures(json_layer_4BRTM18_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_4BRTM18_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_4BRTM18_33.addFeatures(features_layer_4BRTM18_33);
var lyr_layer_4BRTM18_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_4BRTM18_33, 
                style: style_layer_4BRTM18_33,
                popuplayertitle: 'layer_4-BRT-M18',
                interactive: true,
                title: '<img src="styles/legend/layer_4BRTM18_33.png" /> layer_4-BRT-M18'
            });
var format_layer_DSDT_17_34 = new ol.format.GeoJSON();
var features_layer_DSDT_17_34 = format_layer_DSDT_17_34.readFeatures(json_layer_DSDT_17_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT_17_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT_17_34.addFeatures(features_layer_DSDT_17_34);
var lyr_layer_DSDT_17_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT_17_34, 
                style: style_layer_DSDT_17_34,
                popuplayertitle: 'layer_DSDT_17',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT_17_34.png" /> layer_DSDT_17'
            });
var format_layer_DSDT_16_35 = new ol.format.GeoJSON();
var features_layer_DSDT_16_35 = format_layer_DSDT_16_35.readFeatures(json_layer_DSDT_16_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT_16_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT_16_35.addFeatures(features_layer_DSDT_16_35);
var lyr_layer_DSDT_16_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT_16_35, 
                style: style_layer_DSDT_16_35,
                popuplayertitle: 'layer_DSDT_16',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT_16_35.png" /> layer_DSDT_16'
            });
var format_layer_DSDT_15_36 = new ol.format.GeoJSON();
var features_layer_DSDT_15_36 = format_layer_DSDT_15_36.readFeatures(json_layer_DSDT_15_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT_15_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT_15_36.addFeatures(features_layer_DSDT_15_36);
var lyr_layer_DSDT_15_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT_15_36, 
                style: style_layer_DSDT_15_36,
                popuplayertitle: 'layer_DSDT_15',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT_15_36.png" /> layer_DSDT_15'
            });
var format_layer_DSDT_13_37 = new ol.format.GeoJSON();
var features_layer_DSDT_13_37 = format_layer_DSDT_13_37.readFeatures(json_layer_DSDT_13_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT_13_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT_13_37.addFeatures(features_layer_DSDT_13_37);
var lyr_layer_DSDT_13_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT_13_37, 
                style: style_layer_DSDT_13_37,
                popuplayertitle: 'layer_DSDT_13',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT_13_37.png" /> layer_DSDT_13'
            });
var format_layer_DSDT12_38 = new ol.format.GeoJSON();
var features_layer_DSDT12_38 = format_layer_DSDT12_38.readFeatures(json_layer_DSDT12_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT12_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT12_38.addFeatures(features_layer_DSDT12_38);
var lyr_layer_DSDT12_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT12_38, 
                style: style_layer_DSDT12_38,
                popuplayertitle: 'layer_DSDT 12',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT12_38.png" /> layer_DSDT 12'
            });
var format_layer_DSDT_11_39 = new ol.format.GeoJSON();
var features_layer_DSDT_11_39 = format_layer_DSDT_11_39.readFeatures(json_layer_DSDT_11_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT_11_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT_11_39.addFeatures(features_layer_DSDT_11_39);
var lyr_layer_DSDT_11_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT_11_39, 
                style: style_layer_DSDT_11_39,
                popuplayertitle: 'layer_DSDT_11',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT_11_39.png" /> layer_DSDT_11'
            });
var format_layer_DSDT10_40 = new ol.format.GeoJSON();
var features_layer_DSDT10_40 = format_layer_DSDT10_40.readFeatures(json_layer_DSDT10_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT10_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT10_40.addFeatures(features_layer_DSDT10_40);
var lyr_layer_DSDT10_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT10_40, 
                style: style_layer_DSDT10_40,
                popuplayertitle: 'layer_DSDT 10',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT10_40.png" /> layer_DSDT 10'
            });
var format_layer_DSDT9_41 = new ol.format.GeoJSON();
var features_layer_DSDT9_41 = format_layer_DSDT9_41.readFeatures(json_layer_DSDT9_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT9_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT9_41.addFeatures(features_layer_DSDT9_41);
var lyr_layer_DSDT9_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT9_41, 
                style: style_layer_DSDT9_41,
                popuplayertitle: 'layer_DSDT 9',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT9_41.png" /> layer_DSDT 9'
            });
var format_layer_DSDT8_42 = new ol.format.GeoJSON();
var features_layer_DSDT8_42 = format_layer_DSDT8_42.readFeatures(json_layer_DSDT8_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT8_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT8_42.addFeatures(features_layer_DSDT8_42);
var lyr_layer_DSDT8_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT8_42, 
                style: style_layer_DSDT8_42,
                popuplayertitle: 'layer_DSDT 8',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT8_42.png" /> layer_DSDT 8'
            });
var format_layer_DSDT7_43 = new ol.format.GeoJSON();
var features_layer_DSDT7_43 = format_layer_DSDT7_43.readFeatures(json_layer_DSDT7_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT7_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT7_43.addFeatures(features_layer_DSDT7_43);
var lyr_layer_DSDT7_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT7_43, 
                style: style_layer_DSDT7_43,
                popuplayertitle: 'layer_DSDT 7',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT7_43.png" /> layer_DSDT 7'
            });
var format_layer_DSDT6_44 = new ol.format.GeoJSON();
var features_layer_DSDT6_44 = format_layer_DSDT6_44.readFeatures(json_layer_DSDT6_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT6_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT6_44.addFeatures(features_layer_DSDT6_44);
var lyr_layer_DSDT6_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT6_44, 
                style: style_layer_DSDT6_44,
                popuplayertitle: 'layer_DSDT 6',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT6_44.png" /> layer_DSDT 6'
            });
var format_layer_DSDT5_45 = new ol.format.GeoJSON();
var features_layer_DSDT5_45 = format_layer_DSDT5_45.readFeatures(json_layer_DSDT5_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT5_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT5_45.addFeatures(features_layer_DSDT5_45);
var lyr_layer_DSDT5_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT5_45, 
                style: style_layer_DSDT5_45,
                popuplayertitle: 'layer_DSDT 5',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT5_45.png" /> layer_DSDT 5'
            });
var format_layer_DSDT4_46 = new ol.format.GeoJSON();
var features_layer_DSDT4_46 = format_layer_DSDT4_46.readFeatures(json_layer_DSDT4_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT4_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT4_46.addFeatures(features_layer_DSDT4_46);
var lyr_layer_DSDT4_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT4_46, 
                style: style_layer_DSDT4_46,
                popuplayertitle: 'layer_DSDT 4',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT4_46.png" /> layer_DSDT 4'
            });
var format_layer_DSDT3_47 = new ol.format.GeoJSON();
var features_layer_DSDT3_47 = format_layer_DSDT3_47.readFeatures(json_layer_DSDT3_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT3_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT3_47.addFeatures(features_layer_DSDT3_47);
var lyr_layer_DSDT3_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT3_47, 
                style: style_layer_DSDT3_47,
                popuplayertitle: 'layer_DSDT 3',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT3_47.png" /> layer_DSDT 3'
            });
var format_layer_DSDT2A_48 = new ol.format.GeoJSON();
var features_layer_DSDT2A_48 = format_layer_DSDT2A_48.readFeatures(json_layer_DSDT2A_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT2A_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT2A_48.addFeatures(features_layer_DSDT2A_48);
var lyr_layer_DSDT2A_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT2A_48, 
                style: style_layer_DSDT2A_48,
                popuplayertitle: 'layer_DSDT 2A',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT2A_48.png" /> layer_DSDT 2A'
            });
var format_layer_DSDT2_49 = new ol.format.GeoJSON();
var features_layer_DSDT2_49 = format_layer_DSDT2_49.readFeatures(json_layer_DSDT2_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT2_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT2_49.addFeatures(features_layer_DSDT2_49);
var lyr_layer_DSDT2_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT2_49, 
                style: style_layer_DSDT2_49,
                popuplayertitle: 'layer_DSDT 2',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT2_49.png" /> layer_DSDT 2'
            });
var format_layer_DSDT1_50 = new ol.format.GeoJSON();
var features_layer_DSDT1_50 = format_layer_DSDT1_50.readFeatures(json_layer_DSDT1_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT1_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT1_50.addFeatures(features_layer_DSDT1_50);
var lyr_layer_DSDT1_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT1_50, 
                style: style_layer_DSDT1_50,
                popuplayertitle: 'layer_DSDT 1',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT1_50.png" /> layer_DSDT 1'
            });
var format_layer_02interCity_51 = new ol.format.GeoJSON();
var features_layer_02interCity_51 = format_layer_02interCity_51.readFeatures(json_layer_02interCity_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_02interCity_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_02interCity_51.addFeatures(features_layer_02interCity_51);
var lyr_layer_02interCity_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_02interCity_51, 
                style: style_layer_02interCity_51,
                popuplayertitle: 'layer_@@02-interCity',
                interactive: true,
                title: '<img src="styles/legend/layer_02interCity_51.png" /> layer_@@02-interCity'
            });
var format_Ga_52 = new ol.format.GeoJSON();
var features_Ga_52 = format_Ga_52.readFeatures(json_Ga_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ga_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ga_52.addFeatures(features_Ga_52);
var lyr_Ga_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ga_52, 
                style: style_Ga_52,
                popuplayertitle: 'Ga',
                interactive: false,
                title: '<img src="styles/legend/Ga_52.png" /> Ga'
            });
var format_nearbyProvince_53 = new ol.format.GeoJSON();
var features_nearbyProvince_53 = format_nearbyProvince_53.readFeatures(json_nearbyProvince_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nearbyProvince_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nearbyProvince_53.addFeatures(features_nearbyProvince_53);
var lyr_nearbyProvince_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nearbyProvince_53, 
                style: style_nearbyProvince_53,
                popuplayertitle: '@nearbyProvince',
                interactive: true,
                title: '<img src="styles/legend/nearbyProvince_53.png" /> @nearbyProvince'
            });
var format_nearbyProvince_54 = new ol.format.GeoJSON();
var features_nearbyProvince_54 = format_nearbyProvince_54.readFeatures(json_nearbyProvince_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nearbyProvince_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nearbyProvince_54.addFeatures(features_nearbyProvince_54);
var lyr_nearbyProvince_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nearbyProvince_54, 
                style: style_nearbyProvince_54,
                popuplayertitle: '@nearbyProvince',
                interactive: true,
                title: '<img src="styles/legend/nearbyProvince_54.png" /> @nearbyProvince'
            });
var format_03commuterLine_55 = new ol.format.GeoJSON();
var features_03commuterLine_55 = format_03commuterLine_55.readFeatures(json_03commuterLine_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03commuterLine_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03commuterLine_55.addFeatures(features_03commuterLine_55);
var lyr_03commuterLine_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03commuterLine_55, 
                style: style_03commuterLine_55,
                popuplayertitle: '@@03-commuterLine',
                interactive: true,
                title: '<img src="styles/legend/03commuterLine_55.png" /> @@03-commuterLine'
            });
var format_02interCity_56 = new ol.format.GeoJSON();
var features_02interCity_56 = format_02interCity_56.readFeatures(json_02interCity_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02interCity_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02interCity_56.addFeatures(features_02interCity_56);
var lyr_02interCity_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02interCity_56, 
                style: style_02interCity_56,
                popuplayertitle: '@@02-interCity',
                interactive: true,
                title: '<img src="styles/legend/02interCity_56.png" /> @@02-interCity'
            });
var format_01highSpeed_57 = new ol.format.GeoJSON();
var features_01highSpeed_57 = format_01highSpeed_57.readFeatures(json_01highSpeed_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01highSpeed_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01highSpeed_57.addFeatures(features_01highSpeed_57);
var lyr_01highSpeed_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01highSpeed_57, 
                style: style_01highSpeed_57,
                popuplayertitle: '@@01-highSpeed',
                interactive: true,
                title: '<img src="styles/legend/01highSpeed_57.png" /> @@01-highSpeed'
            });
var format_7railwaystation2secondary_58 = new ol.format.GeoJSON();
var features_7railwaystation2secondary_58 = format_7railwaystation2secondary_58.readFeatures(json_7railwaystation2secondary_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7railwaystation2secondary_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7railwaystation2secondary_58.addFeatures(features_7railwaystation2secondary_58);
var lyr_7railwaystation2secondary_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7railwaystation2secondary_58, 
                style: style_7railwaystation2secondary_58,
                popuplayertitle: '7-railway station-2-secondary',
                interactive: false,
                title: '<img src="styles/legend/7railwaystation2secondary_58.png" /> 7-railway station-2-secondary'
            });
var format_6airport_59 = new ol.format.GeoJSON();
var features_6airport_59 = format_6airport_59.readFeatures(json_6airport_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6airport_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6airport_59.addFeatures(features_6airport_59);
var lyr_6airport_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6airport_59, 
                style: style_6airport_59,
                popuplayertitle: '6-airport',
                interactive: false,
                title: '<img src="styles/legend/6airport_59.png" /> 6-airport'
            });
var format_4Railway_60 = new ol.format.GeoJSON();
var features_4Railway_60 = format_4Railway_60.readFeatures(json_4Railway_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Railway_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Railway_60.addFeatures(features_4Railway_60);
var lyr_4Railway_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4Railway_60, 
                style: style_4Railway_60,
                popuplayertitle: '4-Railway',
                interactive: true,
    title: '4-Railway<br />\
    <img src="styles/legend/4Railway_60_0.png" /> DS<br />\
    <img src="styles/legend/4Railway_60_1.png" /> Nét đứt<br />' });
var format_4BRTM18_61 = new ol.format.GeoJSON();
var features_4BRTM18_61 = format_4BRTM18_61.readFeatures(json_4BRTM18_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4BRTM18_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4BRTM18_61.addFeatures(features_4BRTM18_61);
var lyr_4BRTM18_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4BRTM18_61, 
                style: style_4BRTM18_61,
                popuplayertitle: '4-BRT-M18',
                interactive: true,
                title: '<img src="styles/legend/4BRTM18_61.png" /> 4-BRT-M18'
            });
var format_4BRTM17_62 = new ol.format.GeoJSON();
var features_4BRTM17_62 = format_4BRTM17_62.readFeatures(json_4BRTM17_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4BRTM17_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4BRTM17_62.addFeatures(features_4BRTM17_62);
var lyr_4BRTM17_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4BRTM17_62, 
                style: style_4BRTM17_62,
                popuplayertitle: '4-BRT-M17',
                interactive: true,
                title: '<img src="styles/legend/4BRTM17_62.png" /> 4-BRT-M17'
            });
var format_4BRTM12_63 = new ol.format.GeoJSON();
var features_4BRTM12_63 = format_4BRTM12_63.readFeatures(json_4BRTM12_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4BRTM12_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4BRTM12_63.addFeatures(features_4BRTM12_63);
var lyr_4BRTM12_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4BRTM12_63, 
                style: style_4BRTM12_63,
                popuplayertitle: '4-BRT-M12',
                interactive: true,
                title: '<img src="styles/legend/4BRTM12_63.png" /> 4-BRT-M12'
            });
var format_3LRTM15_64 = new ol.format.GeoJSON();
var features_3LRTM15_64 = format_3LRTM15_64.readFeatures(json_3LRTM15_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTM15_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTM15_64.addFeatures(features_3LRTM15_64);
var lyr_3LRTM15_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTM15_64, 
                style: style_3LRTM15_64,
                popuplayertitle: '3-LRT-M15',
                interactive: true,
                title: '<img src="styles/legend/3LRTM15_64.png" /> 3-LRT-M15'
            });
var format_3LRTM13_65 = new ol.format.GeoJSON();
var features_3LRTM13_65 = format_3LRTM13_65.readFeatures(json_3LRTM13_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTM13_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTM13_65.addFeatures(features_3LRTM13_65);
var lyr_3LRTM13_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTM13_65, 
                style: style_3LRTM13_65,
                popuplayertitle: '3-LRT-M13',
                interactive: true,
                title: '<img src="styles/legend/3LRTM13_65.png" /> 3-LRT-M13'
            });
var format_3LRTM9_66 = new ol.format.GeoJSON();
var features_3LRTM9_66 = format_3LRTM9_66.readFeatures(json_3LRTM9_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTM9_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTM9_66.addFeatures(features_3LRTM9_66);
var lyr_3LRTM9_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTM9_66, 
                style: style_3LRTM9_66,
                popuplayertitle: '3-LRT-M9',
                interactive: true,
                title: '<img src="styles/legend/3LRTM9_66.png" /> 3-LRT-M9'
            });
var format_2RegularLineM16_67 = new ol.format.GeoJSON();
var features_2RegularLineM16_67 = format_2RegularLineM16_67.readFeatures(json_2RegularLineM16_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM16_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM16_67.addFeatures(features_2RegularLineM16_67);
var lyr_2RegularLineM16_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM16_67, 
                style: style_2RegularLineM16_67,
                popuplayertitle: '2-Regular Line-M16',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM16_67.png" /> 2-Regular Line-M16'
            });
var format_2RegularLineM14_68 = new ol.format.GeoJSON();
var features_2RegularLineM14_68 = format_2RegularLineM14_68.readFeatures(json_2RegularLineM14_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM14_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM14_68.addFeatures(features_2RegularLineM14_68);
var lyr_2RegularLineM14_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM14_68, 
                style: style_2RegularLineM14_68,
                popuplayertitle: '2-Regular Line-M14',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM14_68.png" /> 2-Regular Line-M14'
            });
var format_2RegularLineM11_69 = new ol.format.GeoJSON();
var features_2RegularLineM11_69 = format_2RegularLineM11_69.readFeatures(json_2RegularLineM11_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM11_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM11_69.addFeatures(features_2RegularLineM11_69);
var lyr_2RegularLineM11_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM11_69, 
                style: style_2RegularLineM11_69,
                popuplayertitle: '2-Regular Line-M11',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM11_69.png" /> 2-Regular Line-M11'
            });
var format_2RegularLineM10_70 = new ol.format.GeoJSON();
var features_2RegularLineM10_70 = format_2RegularLineM10_70.readFeatures(json_2RegularLineM10_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM10_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM10_70.addFeatures(features_2RegularLineM10_70);
var lyr_2RegularLineM10_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM10_70, 
                style: style_2RegularLineM10_70,
                popuplayertitle: '2-Regular Line-M10',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM10_70.png" /> 2-Regular Line-M10'
            });
var format_2RegularLineM7_71 = new ol.format.GeoJSON();
var features_2RegularLineM7_71 = format_2RegularLineM7_71.readFeatures(json_2RegularLineM7_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM7_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM7_71.addFeatures(features_2RegularLineM7_71);
var lyr_2RegularLineM7_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM7_71, 
                style: style_2RegularLineM7_71,
                popuplayertitle: '2-Regular Line-M7',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM7_71.png" /> 2-Regular Line-M7'
            });
var format_2RegularLineM6_72 = new ol.format.GeoJSON();
var features_2RegularLineM6_72 = format_2RegularLineM6_72.readFeatures(json_2RegularLineM6_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM6_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM6_72.addFeatures(features_2RegularLineM6_72);
var lyr_2RegularLineM6_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM6_72, 
                style: style_2RegularLineM6_72,
                popuplayertitle: '2-Regular Line-M6',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM6_72.png" /> 2-Regular Line-M6'
            });
var format_2RegularLineM5_73 = new ol.format.GeoJSON();
var features_2RegularLineM5_73 = format_2RegularLineM5_73.readFeatures(json_2RegularLineM5_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM5_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM5_73.addFeatures(features_2RegularLineM5_73);
var lyr_2RegularLineM5_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM5_73, 
                style: style_2RegularLineM5_73,
                popuplayertitle: '2-Regular Line-M5',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM5_73.png" /> 2-Regular Line-M5'
            });
var format_2RegularLineM4_74 = new ol.format.GeoJSON();
var features_2RegularLineM4_74 = format_2RegularLineM4_74.readFeatures(json_2RegularLineM4_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM4_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM4_74.addFeatures(features_2RegularLineM4_74);
var lyr_2RegularLineM4_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM4_74, 
                style: style_2RegularLineM4_74,
                popuplayertitle: '2-Regular Line-M4',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM4_74.png" /> 2-Regular Line-M4'
            });
var format_2RegularLineM3_75 = new ol.format.GeoJSON();
var features_2RegularLineM3_75 = format_2RegularLineM3_75.readFeatures(json_2RegularLineM3_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM3_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM3_75.addFeatures(features_2RegularLineM3_75);
var lyr_2RegularLineM3_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM3_75, 
                style: style_2RegularLineM3_75,
                popuplayertitle: '2-Regular Line-M3',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM3_75.png" /> 2-Regular Line-M3'
            });
var format_2RegularLineM2_76 = new ol.format.GeoJSON();
var features_2RegularLineM2_76 = format_2RegularLineM2_76.readFeatures(json_2RegularLineM2_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM2_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM2_76.addFeatures(features_2RegularLineM2_76);
var lyr_2RegularLineM2_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM2_76, 
                style: style_2RegularLineM2_76,
                popuplayertitle: '2-Regular Line-M2',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM2_76.png" /> 2-Regular Line-M2'
            });
var format_2RegularLine2A_77 = new ol.format.GeoJSON();
var features_2RegularLine2A_77 = format_2RegularLine2A_77.readFeatures(json_2RegularLine2A_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLine2A_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLine2A_77.addFeatures(features_2RegularLine2A_77);
var lyr_2RegularLine2A_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLine2A_77, 
                style: style_2RegularLine2A_77,
                popuplayertitle: '2-Regular Line-2A',
                interactive: true,
                title: '<img src="styles/legend/2RegularLine2A_77.png" /> 2-Regular Line-2A'
            });
var format_1ExpressLineM8_78 = new ol.format.GeoJSON();
var features_1ExpressLineM8_78 = format_1ExpressLineM8_78.readFeatures(json_1ExpressLineM8_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ExpressLineM8_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ExpressLineM8_78.addFeatures(features_1ExpressLineM8_78);
var lyr_1ExpressLineM8_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ExpressLineM8_78, 
                style: style_1ExpressLineM8_78,
                popuplayertitle: '1-Express Line-M8',
                interactive: true,
    title: '1-Express Line-M8<br />\
    <img src="styles/legend/1ExpressLineM8_78_0.png" /> Nét liền<br />\
    <img src="styles/legend/1ExpressLineM8_78_1.png" /> Nét đứt<br />' });
var format_1ExpressLineM1_79 = new ol.format.GeoJSON();
var features_1ExpressLineM1_79 = format_1ExpressLineM1_79.readFeatures(json_1ExpressLineM1_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ExpressLineM1_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ExpressLineM1_79.addFeatures(features_1ExpressLineM1_79);
var lyr_1ExpressLineM1_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ExpressLineM1_79, 
                style: style_1ExpressLineM1_79,
                popuplayertitle: '1-Express Line-M1',
                interactive: true,
    title: '1-Express Line-M1<br />\
    <img src="styles/legend/1ExpressLineM1_79_0.png" /> Nét liền<br />\
    <img src="styles/legend/1ExpressLineM1_79_1.png" /> Nét đứt<br />' });
var format_Monorail_80 = new ol.format.GeoJSON();
var features_Monorail_80 = format_Monorail_80.readFeatures(json_Monorail_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monorail_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monorail_80.addFeatures(features_Monorail_80);
var lyr_Monorail_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monorail_80, 
                style: style_Monorail_80,
                popuplayertitle: 'Monorail',
                interactive: true,
                title: '<img src="styles/legend/Monorail_80.png" /> Monorail'
            });
var format_DSDT16_81 = new ol.format.GeoJSON();
var features_DSDT16_81 = format_DSDT16_81.readFeatures(json_DSDT16_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT16_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT16_81.addFeatures(features_DSDT16_81);
var lyr_DSDT16_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT16_81, 
                style: style_DSDT16_81,
                popuplayertitle: 'DSDT 16',
                interactive: true,
                title: '<img src="styles/legend/DSDT16_81.png" /> DSDT 16'
            });
var format_DSDT15_82 = new ol.format.GeoJSON();
var features_DSDT15_82 = format_DSDT15_82.readFeatures(json_DSDT15_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT15_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT15_82.addFeatures(features_DSDT15_82);
var lyr_DSDT15_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT15_82, 
                style: style_DSDT15_82,
                popuplayertitle: 'DSDT 15',
                interactive: true,
                title: '<img src="styles/legend/DSDT15_82.png" /> DSDT 15'
            });
var format_DSDT10_83 = new ol.format.GeoJSON();
var features_DSDT10_83 = format_DSDT10_83.readFeatures(json_DSDT10_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT10_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT10_83.addFeatures(features_DSDT10_83);
var lyr_DSDT10_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT10_83, 
                style: style_DSDT10_83,
                popuplayertitle: 'DSDT 10',
                interactive: true,
                title: '<img src="styles/legend/DSDT10_83.png" /> DSDT 10'
            });
var format_DSDT9_84 = new ol.format.GeoJSON();
var features_DSDT9_84 = format_DSDT9_84.readFeatures(json_DSDT9_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT9_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT9_84.addFeatures(features_DSDT9_84);
var lyr_DSDT9_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT9_84, 
                style: style_DSDT9_84,
                popuplayertitle: 'DSDT 9',
                interactive: true,
                title: '<img src="styles/legend/DSDT9_84.png" /> DSDT 9'
            });
var format_DSDT8_85 = new ol.format.GeoJSON();
var features_DSDT8_85 = format_DSDT8_85.readFeatures(json_DSDT8_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT8_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT8_85.addFeatures(features_DSDT8_85);
var lyr_DSDT8_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT8_85, 
                style: style_DSDT8_85,
                popuplayertitle: 'DSDT 8',
                interactive: true,
                title: '<img src="styles/legend/DSDT8_85.png" /> DSDT 8'
            });
var format_DSDT7_86 = new ol.format.GeoJSON();
var features_DSDT7_86 = format_DSDT7_86.readFeatures(json_DSDT7_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT7_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT7_86.addFeatures(features_DSDT7_86);
var lyr_DSDT7_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT7_86, 
                style: style_DSDT7_86,
                popuplayertitle: 'DSDT 7',
                interactive: true,
                title: '<img src="styles/legend/DSDT7_86.png" /> DSDT 7'
            });
var format_DSDT6_87 = new ol.format.GeoJSON();
var features_DSDT6_87 = format_DSDT6_87.readFeatures(json_DSDT6_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT6_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT6_87.addFeatures(features_DSDT6_87);
var lyr_DSDT6_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT6_87, 
                style: style_DSDT6_87,
                popuplayertitle: 'DSDT 6',
                interactive: true,
                title: '<img src="styles/legend/DSDT6_87.png" /> DSDT 6'
            });
var format_DSDT5_88 = new ol.format.GeoJSON();
var features_DSDT5_88 = format_DSDT5_88.readFeatures(json_DSDT5_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT5_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT5_88.addFeatures(features_DSDT5_88);
var lyr_DSDT5_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT5_88, 
                style: style_DSDT5_88,
                popuplayertitle: 'DSDT 5',
                interactive: true,
                title: '<img src="styles/legend/DSDT5_88.png" /> DSDT 5'
            });
var format_DSDT4_89 = new ol.format.GeoJSON();
var features_DSDT4_89 = format_DSDT4_89.readFeatures(json_DSDT4_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT4_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT4_89.addFeatures(features_DSDT4_89);
var lyr_DSDT4_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT4_89, 
                style: style_DSDT4_89,
                popuplayertitle: 'DSDT 4',
                interactive: true,
                title: '<img src="styles/legend/DSDT4_89.png" /> DSDT 4'
            });
var format_DSDT3_90 = new ol.format.GeoJSON();
var features_DSDT3_90 = format_DSDT3_90.readFeatures(json_DSDT3_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT3_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT3_90.addFeatures(features_DSDT3_90);
var lyr_DSDT3_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT3_90, 
                style: style_DSDT3_90,
                popuplayertitle: 'DSDT 3',
                interactive: true,
                title: '<img src="styles/legend/DSDT3_90.png" /> DSDT 3'
            });
var format_DSDT2A_91 = new ol.format.GeoJSON();
var features_DSDT2A_91 = format_DSDT2A_91.readFeatures(json_DSDT2A_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT2A_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT2A_91.addFeatures(features_DSDT2A_91);
var lyr_DSDT2A_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT2A_91, 
                style: style_DSDT2A_91,
                popuplayertitle: 'DSDT 2A',
                interactive: true,
                title: '<img src="styles/legend/DSDT2A_91.png" /> DSDT 2A'
            });
var format_DSDT2_92 = new ol.format.GeoJSON();
var features_DSDT2_92 = format_DSDT2_92.readFeatures(json_DSDT2_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT2_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT2_92.addFeatures(features_DSDT2_92);
var lyr_DSDT2_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT2_92, 
                style: style_DSDT2_92,
                popuplayertitle: 'DSDT 2',
                interactive: true,
                title: '<img src="styles/legend/DSDT2_92.png" /> DSDT 2'
            });
var format_DSDT1_93 = new ol.format.GeoJSON();
var features_DSDT1_93 = format_DSDT1_93.readFeatures(json_DSDT1_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT1_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT1_93.addFeatures(features_DSDT1_93);
var lyr_DSDT1_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT1_93, 
                style: style_DSDT1_93,
                popuplayertitle: 'DSDT 1',
                interactive: true,
                title: '<img src="styles/legend/DSDT1_93.png" /> DSDT 1'
            });
var format_4Railway_94 = new ol.format.GeoJSON();
var features_4Railway_94 = format_4Railway_94.readFeatures(json_4Railway_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Railway_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Railway_94.addFeatures(features_4Railway_94);
var lyr_4Railway_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4Railway_94, 
                style: style_4Railway_94,
                popuplayertitle: '4-Railway',
                interactive: true,
                title: '<img src="styles/legend/4Railway_94.png" /> 4-Railway'
            });
var format_3LRTORBRTM17_95 = new ol.format.GeoJSON();
var features_3LRTORBRTM17_95 = format_3LRTORBRTM17_95.readFeatures(json_3LRTORBRTM17_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTORBRTM17_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTORBRTM17_95.addFeatures(features_3LRTORBRTM17_95);
var lyr_3LRTORBRTM17_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTORBRTM17_95, 
                style: style_3LRTORBRTM17_95,
                popuplayertitle: '3-LRT OR BRT-M17',
                interactive: true,
                title: '<img src="styles/legend/3LRTORBRTM17_95.png" /> 3-LRT OR BRT-M17'
            });
var format_3LRTORBRTM13_96 = new ol.format.GeoJSON();
var features_3LRTORBRTM13_96 = format_3LRTORBRTM13_96.readFeatures(json_3LRTORBRTM13_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTORBRTM13_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTORBRTM13_96.addFeatures(features_3LRTORBRTM13_96);
var lyr_3LRTORBRTM13_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTORBRTM13_96, 
                style: style_3LRTORBRTM13_96,
                popuplayertitle: '3-LRT OR BRT-M13',
                interactive: true,
                title: '<img src="styles/legend/3LRTORBRTM13_96.png" /> 3-LRT OR BRT-M13'
            });
var format_1ExpressLineM8_97 = new ol.format.GeoJSON();
var features_1ExpressLineM8_97 = format_1ExpressLineM8_97.readFeatures(json_1ExpressLineM8_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ExpressLineM8_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ExpressLineM8_97.addFeatures(features_1ExpressLineM8_97);
var lyr_1ExpressLineM8_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ExpressLineM8_97, 
                style: style_1ExpressLineM8_97,
                popuplayertitle: '1-Express Line-M8',
                interactive: true,
                title: '<img src="styles/legend/1ExpressLineM8_97.png" /> 1-Express Line-M8'
            });
var format_Ga_98 = new ol.format.GeoJSON();
var features_Ga_98 = format_Ga_98.readFeatures(json_Ga_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ga_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ga_98.addFeatures(features_Ga_98);
var lyr_Ga_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ga_98, 
                style: style_Ga_98,
                popuplayertitle: 'Ga',
                interactive: false,
    title: 'Ga<br />\
    <img src="styles/legend/Ga_98_0.png" /> 5-Station-transfer 2+<br />\
    <img src="styles/legend/Ga_98_1.png" /> 6-airport<br />\
    <img src="styles/legend/Ga_98_2.png" /> 7-railway station-1-primary<br />\
    <img src="styles/legend/Ga_98_3.png" /> Vuông<br />' });
var format_QH100Ga_99 = new ol.format.GeoJSON();
var features_QH100Ga_99 = format_QH100Ga_99.readFeatures(json_QH100Ga_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Ga_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Ga_99.addFeatures(features_QH100Ga_99);
var lyr_QH100Ga_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Ga_99, 
                style: style_QH100Ga_99,
                popuplayertitle: 'QH100-Ga',
                interactive: true,
                title: '<img src="styles/legend/QH100Ga_99.png" /> QH100-Ga'
            });
var format_QH100Monorail_100 = new ol.format.GeoJSON();
var features_QH100Monorail_100 = format_QH100Monorail_100.readFeatures(json_QH100Monorail_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Monorail_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Monorail_100.addFeatures(features_QH100Monorail_100);
var lyr_QH100Monorail_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Monorail_100, 
                style: style_QH100Monorail_100,
                popuplayertitle: 'QH100-Monorail',
                interactive: true,
                title: '<img src="styles/legend/QH100Monorail_100.png" /> QH100-Monorail'
            });
var format_QH100dsDT_101 = new ol.format.GeoJSON();
var features_QH100dsDT_101 = format_QH100dsDT_101.readFeatures(json_QH100dsDT_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100dsDT_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100dsDT_101.addFeatures(features_QH100dsDT_101);
var lyr_QH100dsDT_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100dsDT_101, 
                style: style_QH100dsDT_101,
                popuplayertitle: 'QH100-dsDT',
                interactive: true,
                title: '<img src="styles/legend/QH100dsDT_101.png" /> QH100-dsDT'
            });
var format_QH100DSDT17_102 = new ol.format.GeoJSON();
var features_QH100DSDT17_102 = format_QH100DSDT17_102.readFeatures(json_QH100DSDT17_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT17_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT17_102.addFeatures(features_QH100DSDT17_102);
var lyr_QH100DSDT17_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT17_102, 
                style: style_QH100DSDT17_102,
                popuplayertitle: 'QH100-DSDT 17',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT17_102.png" /> QH100-DSDT 17'
            });
var format_QH100DSDT16_103 = new ol.format.GeoJSON();
var features_QH100DSDT16_103 = format_QH100DSDT16_103.readFeatures(json_QH100DSDT16_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT16_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT16_103.addFeatures(features_QH100DSDT16_103);
var lyr_QH100DSDT16_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT16_103, 
                style: style_QH100DSDT16_103,
                popuplayertitle: 'QH100-DSDT 16',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT16_103.png" /> QH100-DSDT 16'
            });
var format_QH100DSDT15_104 = new ol.format.GeoJSON();
var features_QH100DSDT15_104 = format_QH100DSDT15_104.readFeatures(json_QH100DSDT15_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT15_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT15_104.addFeatures(features_QH100DSDT15_104);
var lyr_QH100DSDT15_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT15_104, 
                style: style_QH100DSDT15_104,
                popuplayertitle: 'QH100-DSDT 15',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT15_104.png" /> QH100-DSDT 15'
            });
var format_QH100DSDT12_105 = new ol.format.GeoJSON();
var features_QH100DSDT12_105 = format_QH100DSDT12_105.readFeatures(json_QH100DSDT12_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT12_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT12_105.addFeatures(features_QH100DSDT12_105);
var lyr_QH100DSDT12_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT12_105, 
                style: style_QH100DSDT12_105,
                popuplayertitle: 'QH100-DSDT 12',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT12_105.png" /> QH100-DSDT 12'
            });
var format_QH100DSDT11_106 = new ol.format.GeoJSON();
var features_QH100DSDT11_106 = format_QH100DSDT11_106.readFeatures(json_QH100DSDT11_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT11_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT11_106.addFeatures(features_QH100DSDT11_106);
var lyr_QH100DSDT11_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT11_106, 
                style: style_QH100DSDT11_106,
                popuplayertitle: 'QH100-DSDT 11',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT11_106.png" /> QH100-DSDT 11'
            });
var format_QH100DSDT10_107 = new ol.format.GeoJSON();
var features_QH100DSDT10_107 = format_QH100DSDT10_107.readFeatures(json_QH100DSDT10_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT10_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT10_107.addFeatures(features_QH100DSDT10_107);
var lyr_QH100DSDT10_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT10_107, 
                style: style_QH100DSDT10_107,
                popuplayertitle: 'QH100-DSDT 10',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT10_107.png" /> QH100-DSDT 10'
            });
var format_QH100DSDT9_108 = new ol.format.GeoJSON();
var features_QH100DSDT9_108 = format_QH100DSDT9_108.readFeatures(json_QH100DSDT9_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT9_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT9_108.addFeatures(features_QH100DSDT9_108);
var lyr_QH100DSDT9_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT9_108, 
                style: style_QH100DSDT9_108,
                popuplayertitle: 'QH100-DSDT 9',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT9_108.png" /> QH100-DSDT 9'
            });
var format_QH100DSDT8_109 = new ol.format.GeoJSON();
var features_QH100DSDT8_109 = format_QH100DSDT8_109.readFeatures(json_QH100DSDT8_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT8_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT8_109.addFeatures(features_QH100DSDT8_109);
var lyr_QH100DSDT8_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT8_109, 
                style: style_QH100DSDT8_109,
                popuplayertitle: 'QH100-DSDT 8',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT8_109.png" /> QH100-DSDT 8'
            });
var format_QH100DSDT7_110 = new ol.format.GeoJSON();
var features_QH100DSDT7_110 = format_QH100DSDT7_110.readFeatures(json_QH100DSDT7_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT7_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT7_110.addFeatures(features_QH100DSDT7_110);
var lyr_QH100DSDT7_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT7_110, 
                style: style_QH100DSDT7_110,
                popuplayertitle: 'QH100-DSDT 7',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT7_110.png" /> QH100-DSDT 7'
            });
var format_QH100DSDT6_111 = new ol.format.GeoJSON();
var features_QH100DSDT6_111 = format_QH100DSDT6_111.readFeatures(json_QH100DSDT6_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT6_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT6_111.addFeatures(features_QH100DSDT6_111);
var lyr_QH100DSDT6_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT6_111, 
                style: style_QH100DSDT6_111,
                popuplayertitle: 'QH100-DSDT 6',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT6_111.png" /> QH100-DSDT 6'
            });
var format_QH100DSDT5_112 = new ol.format.GeoJSON();
var features_QH100DSDT5_112 = format_QH100DSDT5_112.readFeatures(json_QH100DSDT5_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT5_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT5_112.addFeatures(features_QH100DSDT5_112);
var lyr_QH100DSDT5_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT5_112, 
                style: style_QH100DSDT5_112,
                popuplayertitle: 'QH100-DSDT 5',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT5_112.png" /> QH100-DSDT 5'
            });
var format_QH100DSDT4_113 = new ol.format.GeoJSON();
var features_QH100DSDT4_113 = format_QH100DSDT4_113.readFeatures(json_QH100DSDT4_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT4_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT4_113.addFeatures(features_QH100DSDT4_113);
var lyr_QH100DSDT4_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT4_113, 
                style: style_QH100DSDT4_113,
                popuplayertitle: 'QH100-DSDT 4',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT4_113.png" /> QH100-DSDT 4'
            });
var format_QH100DSDT3_114 = new ol.format.GeoJSON();
var features_QH100DSDT3_114 = format_QH100DSDT3_114.readFeatures(json_QH100DSDT3_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT3_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT3_114.addFeatures(features_QH100DSDT3_114);
var lyr_QH100DSDT3_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT3_114, 
                style: style_QH100DSDT3_114,
                popuplayertitle: 'QH100-DSDT 3',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT3_114.png" /> QH100-DSDT 3'
            });
var format_QH100DSDT2A_115 = new ol.format.GeoJSON();
var features_QH100DSDT2A_115 = format_QH100DSDT2A_115.readFeatures(json_QH100DSDT2A_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT2A_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT2A_115.addFeatures(features_QH100DSDT2A_115);
var lyr_QH100DSDT2A_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT2A_115, 
                style: style_QH100DSDT2A_115,
                popuplayertitle: 'QH100-DSDT 2A',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT2A_115.png" /> QH100-DSDT 2A'
            });
var format_QH100DSDT2_116 = new ol.format.GeoJSON();
var features_QH100DSDT2_116 = format_QH100DSDT2_116.readFeatures(json_QH100DSDT2_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT2_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT2_116.addFeatures(features_QH100DSDT2_116);
var lyr_QH100DSDT2_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT2_116, 
                style: style_QH100DSDT2_116,
                popuplayertitle: 'QH100-DSDT 2',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT2_116.png" /> QH100-DSDT 2'
            });
var format_QH100DSDT1_117 = new ol.format.GeoJSON();
var features_QH100DSDT1_117 = format_QH100DSDT1_117.readFeatures(json_QH100DSDT1_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT1_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT1_117.addFeatures(features_QH100DSDT1_117);
var lyr_QH100DSDT1_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT1_117, 
                style: style_QH100DSDT1_117,
                popuplayertitle: 'QH100-DSDT 1',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT1_117.png" /> QH100-DSDT 1'
            });
var format_QH100DSQG_Thuong2050_118 = new ol.format.GeoJSON();
var features_QH100DSQG_Thuong2050_118 = format_QH100DSQG_Thuong2050_118.readFeatures(json_QH100DSQG_Thuong2050_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSQG_Thuong2050_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSQG_Thuong2050_118.addFeatures(features_QH100DSQG_Thuong2050_118);
var lyr_QH100DSQG_Thuong2050_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSQG_Thuong2050_118, 
                style: style_QH100DSQG_Thuong2050_118,
                popuplayertitle: 'QH100-DSQG_Thuong 2050',
                interactive: true,
                title: '<img src="styles/legend/QH100DSQG_Thuong2050_118.png" /> QH100-DSQG_Thuong 2050'
            });
var format_QH100Tuyen16_119 = new ol.format.GeoJSON();
var features_QH100Tuyen16_119 = format_QH100Tuyen16_119.readFeatures(json_QH100Tuyen16_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen16_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen16_119.addFeatures(features_QH100Tuyen16_119);
var lyr_QH100Tuyen16_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen16_119, 
                style: style_QH100Tuyen16_119,
                popuplayertitle: 'QH100 Tuyen-16',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen16_119.png" /> QH100 Tuyen-16'
            });
var format_QH100Tuyen14_120 = new ol.format.GeoJSON();
var features_QH100Tuyen14_120 = format_QH100Tuyen14_120.readFeatures(json_QH100Tuyen14_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen14_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen14_120.addFeatures(features_QH100Tuyen14_120);
var lyr_QH100Tuyen14_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen14_120, 
                style: style_QH100Tuyen14_120,
                popuplayertitle: 'QH100 Tuyen-14',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen14_120.png" /> QH100 Tuyen-14'
            });
var format_QH100Tuyen9_121 = new ol.format.GeoJSON();
var features_QH100Tuyen9_121 = format_QH100Tuyen9_121.readFeatures(json_QH100Tuyen9_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen9_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen9_121.addFeatures(features_QH100Tuyen9_121);
var lyr_QH100Tuyen9_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen9_121, 
                style: style_QH100Tuyen9_121,
                popuplayertitle: 'QH100 Tuyen-9',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen9_121.png" /> QH100 Tuyen-9'
            });
var format_QH100Tuyen8_122 = new ol.format.GeoJSON();
var features_QH100Tuyen8_122 = format_QH100Tuyen8_122.readFeatures(json_QH100Tuyen8_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen8_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen8_122.addFeatures(features_QH100Tuyen8_122);
var lyr_QH100Tuyen8_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen8_122, 
                style: style_QH100Tuyen8_122,
                popuplayertitle: 'QH100 Tuyen-8',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen8_122.png" /> QH100 Tuyen-8'
            });
var format_QH100Tuyen7_123 = new ol.format.GeoJSON();
var features_QH100Tuyen7_123 = format_QH100Tuyen7_123.readFeatures(json_QH100Tuyen7_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen7_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen7_123.addFeatures(features_QH100Tuyen7_123);
var lyr_QH100Tuyen7_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen7_123, 
                style: style_QH100Tuyen7_123,
                popuplayertitle: 'QH100 Tuyen-7',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen7_123.png" /> QH100 Tuyen-7'
            });
var format_QH100Tuyen6_124 = new ol.format.GeoJSON();
var features_QH100Tuyen6_124 = format_QH100Tuyen6_124.readFeatures(json_QH100Tuyen6_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen6_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen6_124.addFeatures(features_QH100Tuyen6_124);
var lyr_QH100Tuyen6_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen6_124, 
                style: style_QH100Tuyen6_124,
                popuplayertitle: 'QH100 Tuyen-6',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen6_124.png" /> QH100 Tuyen-6'
            });
var format_QH100Tuyen5_125 = new ol.format.GeoJSON();
var features_QH100Tuyen5_125 = format_QH100Tuyen5_125.readFeatures(json_QH100Tuyen5_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen5_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen5_125.addFeatures(features_QH100Tuyen5_125);
var lyr_QH100Tuyen5_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen5_125, 
                style: style_QH100Tuyen5_125,
                popuplayertitle: 'QH100 Tuyen-5',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen5_125.png" /> QH100 Tuyen-5'
            });
var format_QH100Tuyen4_126 = new ol.format.GeoJSON();
var features_QH100Tuyen4_126 = format_QH100Tuyen4_126.readFeatures(json_QH100Tuyen4_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen4_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen4_126.addFeatures(features_QH100Tuyen4_126);
var lyr_QH100Tuyen4_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen4_126, 
                style: style_QH100Tuyen4_126,
                popuplayertitle: 'QH100 Tuyen-4',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen4_126.png" /> QH100 Tuyen-4'
            });
var format_QH100Tuyen3_127 = new ol.format.GeoJSON();
var features_QH100Tuyen3_127 = format_QH100Tuyen3_127.readFeatures(json_QH100Tuyen3_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen3_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen3_127.addFeatures(features_QH100Tuyen3_127);
var lyr_QH100Tuyen3_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen3_127, 
                style: style_QH100Tuyen3_127,
                popuplayertitle: 'QH100 Tuyen-3',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen3_127.png" /> QH100 Tuyen-3'
            });
var format_QH100Tuyen2A_128 = new ol.format.GeoJSON();
var features_QH100Tuyen2A_128 = format_QH100Tuyen2A_128.readFeatures(json_QH100Tuyen2A_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen2A_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen2A_128.addFeatures(features_QH100Tuyen2A_128);
var lyr_QH100Tuyen2A_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen2A_128, 
                style: style_QH100Tuyen2A_128,
                popuplayertitle: 'QH100 Tuyen-2A',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen2A_128.png" /> QH100 Tuyen-2A'
            });
var format_QH100Tuyen2_129 = new ol.format.GeoJSON();
var features_QH100Tuyen2_129 = format_QH100Tuyen2_129.readFeatures(json_QH100Tuyen2_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen2_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen2_129.addFeatures(features_QH100Tuyen2_129);
var lyr_QH100Tuyen2_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen2_129, 
                style: style_QH100Tuyen2_129,
                popuplayertitle: 'QH100 Tuyen-2',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen2_129.png" /> QH100 Tuyen-2'
            });
var format_QH100Tuyen1_130 = new ol.format.GeoJSON();
var features_QH100Tuyen1_130 = format_QH100Tuyen1_130.readFeatures(json_QH100Tuyen1_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen1_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen1_130.addFeatures(features_QH100Tuyen1_130);
var lyr_QH100Tuyen1_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen1_130, 
                style: style_QH100Tuyen1_130,
                popuplayertitle: 'QH100 Tuyen-1',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen1_130.png" /> QH100 Tuyen-1'
            });
var format_DSQG_131 = new ol.format.GeoJSON();
var features_DSQG_131 = format_DSQG_131.readFeatures(json_DSQG_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSQG_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSQG_131.addFeatures(features_DSQG_131);
var lyr_DSQG_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSQG_131, 
                style: style_DSQG_131,
                popuplayertitle: 'DSQG',
                interactive: true,
                title: '<img src="styles/legend/DSQG_131.png" /> DSQG'
            });
var format_Duongsatvung_132 = new ol.format.GeoJSON();
var features_Duongsatvung_132 = format_Duongsatvung_132.readFeatures(json_Duongsatvung_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Duongsatvung_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Duongsatvung_132.addFeatures(features_Duongsatvung_132);
var lyr_Duongsatvung_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Duongsatvung_132, 
                style: style_Duongsatvung_132,
                popuplayertitle: 'Duongsatvung',
                interactive: true,
                title: '<img src="styles/legend/Duongsatvung_132.png" /> Duongsatvung'
            });
var format_Depot_133 = new ol.format.GeoJSON();
var features_Depot_133 = format_Depot_133.readFeatures(json_Depot_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Depot_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Depot_133.addFeatures(features_Depot_133);
var lyr_Depot_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Depot_133, 
                style: style_Depot_133,
                popuplayertitle: 'Depot',
                interactive: false,
                title: '<img src="styles/legend/Depot_133.png" /> Depot'
            });
var format_PLine_17_134 = new ol.format.GeoJSON();
var features_PLine_17_134 = format_PLine_17_134.readFeatures(json_PLine_17_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_17_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_17_134.addFeatures(features_PLine_17_134);
var lyr_PLine_17_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_17_134, 
                style: style_PLine_17_134,
                popuplayertitle: 'PLine_17',
                interactive: true,
                title: '<img src="styles/legend/PLine_17_134.png" /> PLine_17'
            });
var format_PLine_16_135 = new ol.format.GeoJSON();
var features_PLine_16_135 = format_PLine_16_135.readFeatures(json_PLine_16_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_16_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_16_135.addFeatures(features_PLine_16_135);
var lyr_PLine_16_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_16_135, 
                style: style_PLine_16_135,
                popuplayertitle: 'PLine_16',
                interactive: true,
                title: '<img src="styles/legend/PLine_16_135.png" /> PLine_16'
            });
var format_PLine_15_136 = new ol.format.GeoJSON();
var features_PLine_15_136 = format_PLine_15_136.readFeatures(json_PLine_15_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_15_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_15_136.addFeatures(features_PLine_15_136);
var lyr_PLine_15_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_15_136, 
                style: style_PLine_15_136,
                popuplayertitle: 'PLine_15',
                interactive: true,
                title: '<img src="styles/legend/PLine_15_136.png" /> PLine_15'
            });
var format_PLine_14_137 = new ol.format.GeoJSON();
var features_PLine_14_137 = format_PLine_14_137.readFeatures(json_PLine_14_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_14_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_14_137.addFeatures(features_PLine_14_137);
var lyr_PLine_14_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_14_137, 
                style: style_PLine_14_137,
                popuplayertitle: 'PLine_14',
                interactive: true,
                title: '<img src="styles/legend/PLine_14_137.png" /> PLine_14'
            });
var format_PLine_13_138 = new ol.format.GeoJSON();
var features_PLine_13_138 = format_PLine_13_138.readFeatures(json_PLine_13_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_13_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_13_138.addFeatures(features_PLine_13_138);
var lyr_PLine_13_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_13_138, 
                style: style_PLine_13_138,
                popuplayertitle: 'PLine_13',
                interactive: true,
                title: '<img src="styles/legend/PLine_13_138.png" /> PLine_13'
            });
var format_PLine_12_139 = new ol.format.GeoJSON();
var features_PLine_12_139 = format_PLine_12_139.readFeatures(json_PLine_12_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_12_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_12_139.addFeatures(features_PLine_12_139);
var lyr_PLine_12_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_12_139, 
                style: style_PLine_12_139,
                popuplayertitle: 'PLine_12',
                interactive: true,
                title: '<img src="styles/legend/PLine_12_139.png" /> PLine_12'
            });
var format_PLine_11_140 = new ol.format.GeoJSON();
var features_PLine_11_140 = format_PLine_11_140.readFeatures(json_PLine_11_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_11_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_11_140.addFeatures(features_PLine_11_140);
var lyr_PLine_11_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_11_140, 
                style: style_PLine_11_140,
                popuplayertitle: 'PLine_11',
                interactive: true,
                title: '<img src="styles/legend/PLine_11_140.png" /> PLine_11'
            });
var format_PLine_10_141 = new ol.format.GeoJSON();
var features_PLine_10_141 = format_PLine_10_141.readFeatures(json_PLine_10_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_10_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_10_141.addFeatures(features_PLine_10_141);
var lyr_PLine_10_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_10_141, 
                style: style_PLine_10_141,
                popuplayertitle: 'PLine_10',
                interactive: true,
                title: '<img src="styles/legend/PLine_10_141.png" /> PLine_10'
            });
var format_PLine_9_142 = new ol.format.GeoJSON();
var features_PLine_9_142 = format_PLine_9_142.readFeatures(json_PLine_9_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_9_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_9_142.addFeatures(features_PLine_9_142);
var lyr_PLine_9_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_9_142, 
                style: style_PLine_9_142,
                popuplayertitle: 'PLine_9',
                interactive: true,
                title: '<img src="styles/legend/PLine_9_142.png" /> PLine_9'
            });
var format_PLine_8_143 = new ol.format.GeoJSON();
var features_PLine_8_143 = format_PLine_8_143.readFeatures(json_PLine_8_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_8_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_8_143.addFeatures(features_PLine_8_143);
var lyr_PLine_8_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_8_143, 
                style: style_PLine_8_143,
                popuplayertitle: 'PLine_8',
                interactive: true,
                title: '<img src="styles/legend/PLine_8_143.png" /> PLine_8'
            });
var format_PLine_7_144 = new ol.format.GeoJSON();
var features_PLine_7_144 = format_PLine_7_144.readFeatures(json_PLine_7_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_7_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_7_144.addFeatures(features_PLine_7_144);
var lyr_PLine_7_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_7_144, 
                style: style_PLine_7_144,
                popuplayertitle: 'PLine_7',
                interactive: true,
                title: '<img src="styles/legend/PLine_7_144.png" /> PLine_7'
            });
var format_PLine_6_145 = new ol.format.GeoJSON();
var features_PLine_6_145 = format_PLine_6_145.readFeatures(json_PLine_6_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_6_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_6_145.addFeatures(features_PLine_6_145);
var lyr_PLine_6_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_6_145, 
                style: style_PLine_6_145,
                popuplayertitle: 'PLine_6',
                interactive: true,
                title: '<img src="styles/legend/PLine_6_145.png" /> PLine_6'
            });
var format_PLine_5_146 = new ol.format.GeoJSON();
var features_PLine_5_146 = format_PLine_5_146.readFeatures(json_PLine_5_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_5_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_5_146.addFeatures(features_PLine_5_146);
var lyr_PLine_5_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_5_146, 
                style: style_PLine_5_146,
                popuplayertitle: 'PLine_5',
                interactive: true,
                title: '<img src="styles/legend/PLine_5_146.png" /> PLine_5'
            });
var format_PLine_4_147 = new ol.format.GeoJSON();
var features_PLine_4_147 = format_PLine_4_147.readFeatures(json_PLine_4_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_4_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_4_147.addFeatures(features_PLine_4_147);
var lyr_PLine_4_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_4_147, 
                style: style_PLine_4_147,
                popuplayertitle: 'PLine_4',
                interactive: true,
                title: '<img src="styles/legend/PLine_4_147.png" /> PLine_4'
            });
var format_PLine_3_148 = new ol.format.GeoJSON();
var features_PLine_3_148 = format_PLine_3_148.readFeatures(json_PLine_3_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_3_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_3_148.addFeatures(features_PLine_3_148);
var lyr_PLine_3_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_3_148, 
                style: style_PLine_3_148,
                popuplayertitle: 'PLine_3',
                interactive: true,
                title: '<img src="styles/legend/PLine_3_148.png" /> PLine_3'
            });
var format_PLine_2A_149 = new ol.format.GeoJSON();
var features_PLine_2A_149 = format_PLine_2A_149.readFeatures(json_PLine_2A_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_2A_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_2A_149.addFeatures(features_PLine_2A_149);
var lyr_PLine_2A_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_2A_149, 
                style: style_PLine_2A_149,
                popuplayertitle: 'PLine_2A',
                interactive: true,
                title: '<img src="styles/legend/PLine_2A_149.png" /> PLine_2A'
            });
var format_PLine_2_150 = new ol.format.GeoJSON();
var features_PLine_2_150 = format_PLine_2_150.readFeatures(json_PLine_2_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_2_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_2_150.addFeatures(features_PLine_2_150);
var lyr_PLine_2_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_2_150, 
                style: style_PLine_2_150,
                popuplayertitle: 'PLine_2',
                interactive: true,
                title: '<img src="styles/legend/PLine_2_150.png" /> PLine_2'
            });
var format_PLine_1_151 = new ol.format.GeoJSON();
var features_PLine_1_151 = format_PLine_1_151.readFeatures(json_PLine_1_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_1_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_1_151.addFeatures(features_PLine_1_151);
var lyr_PLine_1_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_1_151, 
                style: style_PLine_1_151,
                popuplayertitle: 'PLine_1',
                interactive: true,
                title: '<img src="styles/legend/PLine_1_151.png" /> PLine_1'
            });
var format_All_152 = new ol.format.GeoJSON();
var features_All_152 = format_All_152.readFeatures(json_All_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_152.addFeatures(features_All_152);
var lyr_All_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_All_152, 
                style: style_All_152,
                popuplayertitle: 'All',
                interactive: true,
                title: '<img src="styles/legend/All_152.png" /> All'
            });
var format_MangluoiRasoatSXD_153 = new ol.format.GeoJSON();
var features_MangluoiRasoatSXD_153 = format_MangluoiRasoatSXD_153.readFeatures(json_MangluoiRasoatSXD_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MangluoiRasoatSXD_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MangluoiRasoatSXD_153.addFeatures(features_MangluoiRasoatSXD_153);
var lyr_MangluoiRasoatSXD_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MangluoiRasoatSXD_153, 
                style: style_MangluoiRasoatSXD_153,
                popuplayertitle: 'Mang luoi Ra soat SXD',
                interactive: false,
    title: 'Mang luoi Ra soat SXD<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_0.png" /> Tuyến 1<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_1.png" /> Tuyến 10<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_2.png" /> Tuyến 11<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_3.png" /> Tuyến 12<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_4.png" /> Tuyến 2<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_5.png" /> Tuyến 2A<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_6.png" /> Tuyến 3<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_7.png" /> Tuyến 4<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_8.png" /> Tuyến 5<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_9.png" /> Tuyến 6<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_10.png" /> Tuyến 7<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_11.png" /> Tuyến 8<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_12.png" /> Tuyến 9<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_13.png" /> Tuyến mới<br />\
    <img src="styles/legend/MangluoiRasoatSXD_153_14.png" /> <br />' });
var format_Layer_CcTuynmi_154 = new ol.format.GeoJSON();
var features_Layer_CcTuynmi_154 = format_Layer_CcTuynmi_154.readFeatures(json_Layer_CcTuynmi_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_CcTuynmi_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_CcTuynmi_154.addFeatures(features_Layer_CcTuynmi_154);
var lyr_Layer_CcTuynmi_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_CcTuynmi_154, 
                style: style_Layer_CcTuynmi_154,
                popuplayertitle: 'Layer_Các Tuyến mới',
                interactive: true,
                title: '<img src="styles/legend/Layer_CcTuynmi_154.png" /> Layer_Các Tuyến mới'
            });
var format_Layer_Tuyn12_155 = new ol.format.GeoJSON();
var features_Layer_Tuyn12_155 = format_Layer_Tuyn12_155.readFeatures(json_Layer_Tuyn12_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn12_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn12_155.addFeatures(features_Layer_Tuyn12_155);
var lyr_Layer_Tuyn12_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn12_155, 
                style: style_Layer_Tuyn12_155,
                popuplayertitle: 'Layer_Tuyến 12',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn12_155.png" /> Layer_Tuyến 12'
            });
var format_Layer_Tuyn11_156 = new ol.format.GeoJSON();
var features_Layer_Tuyn11_156 = format_Layer_Tuyn11_156.readFeatures(json_Layer_Tuyn11_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn11_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn11_156.addFeatures(features_Layer_Tuyn11_156);
var lyr_Layer_Tuyn11_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn11_156, 
                style: style_Layer_Tuyn11_156,
                popuplayertitle: 'Layer_Tuyến 11',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn11_156.png" /> Layer_Tuyến 11'
            });
var format_Layer_Tuyn10_157 = new ol.format.GeoJSON();
var features_Layer_Tuyn10_157 = format_Layer_Tuyn10_157.readFeatures(json_Layer_Tuyn10_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn10_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn10_157.addFeatures(features_Layer_Tuyn10_157);
var lyr_Layer_Tuyn10_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn10_157, 
                style: style_Layer_Tuyn10_157,
                popuplayertitle: 'Layer_Tuyến 10',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn10_157.png" /> Layer_Tuyến 10'
            });
var format_Layer_Tuyn9_158 = new ol.format.GeoJSON();
var features_Layer_Tuyn9_158 = format_Layer_Tuyn9_158.readFeatures(json_Layer_Tuyn9_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn9_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn9_158.addFeatures(features_Layer_Tuyn9_158);
var lyr_Layer_Tuyn9_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn9_158, 
                style: style_Layer_Tuyn9_158,
                popuplayertitle: 'Layer_Tuyến 9',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn9_158.png" /> Layer_Tuyến 9'
            });
var format_Layer_Tuyn8_159 = new ol.format.GeoJSON();
var features_Layer_Tuyn8_159 = format_Layer_Tuyn8_159.readFeatures(json_Layer_Tuyn8_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn8_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn8_159.addFeatures(features_Layer_Tuyn8_159);
var lyr_Layer_Tuyn8_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn8_159, 
                style: style_Layer_Tuyn8_159,
                popuplayertitle: 'Layer_Tuyến 8',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn8_159.png" /> Layer_Tuyến 8'
            });
var format_Layer_Tuyn7_160 = new ol.format.GeoJSON();
var features_Layer_Tuyn7_160 = format_Layer_Tuyn7_160.readFeatures(json_Layer_Tuyn7_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn7_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn7_160.addFeatures(features_Layer_Tuyn7_160);
var lyr_Layer_Tuyn7_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn7_160, 
                style: style_Layer_Tuyn7_160,
                popuplayertitle: 'Layer_Tuyến 7',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn7_160.png" /> Layer_Tuyến 7'
            });
var format_Layer_Tuyn6_161 = new ol.format.GeoJSON();
var features_Layer_Tuyn6_161 = format_Layer_Tuyn6_161.readFeatures(json_Layer_Tuyn6_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn6_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn6_161.addFeatures(features_Layer_Tuyn6_161);
var lyr_Layer_Tuyn6_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn6_161, 
                style: style_Layer_Tuyn6_161,
                popuplayertitle: 'Layer_Tuyến 6',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn6_161.png" /> Layer_Tuyến 6'
            });
var format_Layer_Tuyn5_162 = new ol.format.GeoJSON();
var features_Layer_Tuyn5_162 = format_Layer_Tuyn5_162.readFeatures(json_Layer_Tuyn5_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn5_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn5_162.addFeatures(features_Layer_Tuyn5_162);
var lyr_Layer_Tuyn5_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn5_162, 
                style: style_Layer_Tuyn5_162,
                popuplayertitle: 'Layer_Tuyến 5',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn5_162.png" /> Layer_Tuyến 5'
            });
var format_Layer_Tuyn4_163 = new ol.format.GeoJSON();
var features_Layer_Tuyn4_163 = format_Layer_Tuyn4_163.readFeatures(json_Layer_Tuyn4_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn4_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn4_163.addFeatures(features_Layer_Tuyn4_163);
var lyr_Layer_Tuyn4_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn4_163, 
                style: style_Layer_Tuyn4_163,
                popuplayertitle: 'Layer_Tuyến 4',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn4_163.png" /> Layer_Tuyến 4'
            });
var format_Layer_Tuyn3_164 = new ol.format.GeoJSON();
var features_Layer_Tuyn3_164 = format_Layer_Tuyn3_164.readFeatures(json_Layer_Tuyn3_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn3_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn3_164.addFeatures(features_Layer_Tuyn3_164);
var lyr_Layer_Tuyn3_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn3_164, 
                style: style_Layer_Tuyn3_164,
                popuplayertitle: 'Layer_Tuyến 3',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn3_164.png" /> Layer_Tuyến 3'
            });
var format_Layer_Tuyn2A_165 = new ol.format.GeoJSON();
var features_Layer_Tuyn2A_165 = format_Layer_Tuyn2A_165.readFeatures(json_Layer_Tuyn2A_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn2A_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn2A_165.addFeatures(features_Layer_Tuyn2A_165);
var lyr_Layer_Tuyn2A_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn2A_165, 
                style: style_Layer_Tuyn2A_165,
                popuplayertitle: 'Layer_Tuyến 2A',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn2A_165.png" /> Layer_Tuyến 2A'
            });
var format_Layer_Tuyn2_166 = new ol.format.GeoJSON();
var features_Layer_Tuyn2_166 = format_Layer_Tuyn2_166.readFeatures(json_Layer_Tuyn2_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn2_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn2_166.addFeatures(features_Layer_Tuyn2_166);
var lyr_Layer_Tuyn2_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn2_166, 
                style: style_Layer_Tuyn2_166,
                popuplayertitle: 'Layer_Tuyến 2',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn2_166.png" /> Layer_Tuyến 2'
            });
var format_Layer_Tuyn1_167 = new ol.format.GeoJSON();
var features_Layer_Tuyn1_167 = format_Layer_Tuyn1_167.readFeatures(json_Layer_Tuyn1_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn1_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn1_167.addFeatures(features_Layer_Tuyn1_167);
var lyr_Layer_Tuyn1_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn1_167, 
                style: style_Layer_Tuyn1_167,
                popuplayertitle: 'Layer_Tuyến 1',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn1_167.png" /> Layer_Tuyến 1'
            });
var format_T12_168 = new ol.format.GeoJSON();
var features_T12_168 = format_T12_168.readFeatures(json_T12_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T12_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T12_168.addFeatures(features_T12_168);
var lyr_T12_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T12_168, 
                style: style_T12_168,
                popuplayertitle: 'T12',
                interactive: true,
                title: '<img src="styles/legend/T12_168.png" /> T12'
            });
var format_T11_169 = new ol.format.GeoJSON();
var features_T11_169 = format_T11_169.readFeatures(json_T11_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T11_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T11_169.addFeatures(features_T11_169);
var lyr_T11_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T11_169, 
                style: style_T11_169,
                popuplayertitle: 'T11',
                interactive: true,
                title: '<img src="styles/legend/T11_169.png" /> T11'
            });
var format_T10_170 = new ol.format.GeoJSON();
var features_T10_170 = format_T10_170.readFeatures(json_T10_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T10_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T10_170.addFeatures(features_T10_170);
var lyr_T10_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T10_170, 
                style: style_T10_170,
                popuplayertitle: 'T10',
                interactive: true,
                title: '<img src="styles/legend/T10_170.png" /> T10'
            });
var format_T9_171 = new ol.format.GeoJSON();
var features_T9_171 = format_T9_171.readFeatures(json_T9_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T9_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T9_171.addFeatures(features_T9_171);
var lyr_T9_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T9_171, 
                style: style_T9_171,
                popuplayertitle: 'T9',
                interactive: true,
                title: '<img src="styles/legend/T9_171.png" /> T9'
            });
var format_T8_172 = new ol.format.GeoJSON();
var features_T8_172 = format_T8_172.readFeatures(json_T8_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T8_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T8_172.addFeatures(features_T8_172);
var lyr_T8_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T8_172, 
                style: style_T8_172,
                popuplayertitle: 'T8',
                interactive: true,
                title: '<img src="styles/legend/T8_172.png" /> T8'
            });
var format_T7_173 = new ol.format.GeoJSON();
var features_T7_173 = format_T7_173.readFeatures(json_T7_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T7_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T7_173.addFeatures(features_T7_173);
var lyr_T7_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T7_173, 
                style: style_T7_173,
                popuplayertitle: 'T7',
                interactive: true,
                title: '<img src="styles/legend/T7_173.png" /> T7'
            });
var format_T6_174 = new ol.format.GeoJSON();
var features_T6_174 = format_T6_174.readFeatures(json_T6_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T6_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T6_174.addFeatures(features_T6_174);
var lyr_T6_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T6_174, 
                style: style_T6_174,
                popuplayertitle: 'T6',
                interactive: true,
                title: '<img src="styles/legend/T6_174.png" /> T6'
            });
var format_T5_175 = new ol.format.GeoJSON();
var features_T5_175 = format_T5_175.readFeatures(json_T5_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T5_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T5_175.addFeatures(features_T5_175);
var lyr_T5_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T5_175, 
                style: style_T5_175,
                popuplayertitle: 'T5',
                interactive: true,
                title: '<img src="styles/legend/T5_175.png" /> T5'
            });
var format_T4_176 = new ol.format.GeoJSON();
var features_T4_176 = format_T4_176.readFeatures(json_T4_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T4_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T4_176.addFeatures(features_T4_176);
var lyr_T4_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T4_176, 
                style: style_T4_176,
                popuplayertitle: 'T4',
                interactive: true,
                title: '<img src="styles/legend/T4_176.png" /> T4'
            });
var format_T3_177 = new ol.format.GeoJSON();
var features_T3_177 = format_T3_177.readFeatures(json_T3_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3_177.addFeatures(features_T3_177);
var lyr_T3_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T3_177, 
                style: style_T3_177,
                popuplayertitle: 'T3',
                interactive: true,
                title: '<img src="styles/legend/T3_177.png" /> T3'
            });
var format_T2A_178 = new ol.format.GeoJSON();
var features_T2A_178 = format_T2A_178.readFeatures(json_T2A_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2A_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2A_178.addFeatures(features_T2A_178);
var lyr_T2A_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2A_178, 
                style: style_T2A_178,
                popuplayertitle: 'T2A',
                interactive: true,
                title: '<img src="styles/legend/T2A_178.png" /> T2A'
            });
var format_T2_179 = new ol.format.GeoJSON();
var features_T2_179 = format_T2_179.readFeatures(json_T2_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2_179.addFeatures(features_T2_179);
var lyr_T2_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2_179, 
                style: style_T2_179,
                popuplayertitle: 'T2',
                interactive: true,
                title: '<img src="styles/legend/T2_179.png" /> T2'
            });
var format_T1A_180 = new ol.format.GeoJSON();
var features_T1A_180 = format_T1A_180.readFeatures(json_T1A_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1A_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1A_180.addFeatures(features_T1A_180);
var lyr_T1A_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1A_180, 
                style: style_T1A_180,
                popuplayertitle: 'T1A',
                interactive: true,
                title: '<img src="styles/legend/T1A_180.png" /> T1A'
            });
var format_T1_181 = new ol.format.GeoJSON();
var features_T1_181 = format_T1_181.readFeatures(json_T1_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1_181.addFeatures(features_T1_181);
var lyr_T1_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1_181, 
                style: style_T1_181,
                popuplayertitle: 'T1',
                interactive: true,
                title: '<img src="styles/legend/T1_181.png" /> T1'
            });
var format_MangluoiQH519_182 = new ol.format.GeoJSON();
var features_MangluoiQH519_182 = format_MangluoiQH519_182.readFeatures(json_MangluoiQH519_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MangluoiQH519_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MangluoiQH519_182.addFeatures(features_MangluoiQH519_182);
var lyr_MangluoiQH519_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MangluoiQH519_182, 
                style: style_MangluoiQH519_182,
                popuplayertitle: 'Mang luoi QH519',
                interactive: false,
    title: 'Mang luoi QH519<br />\
    <img src="styles/legend/MangluoiQH519_182_0.png" /> 1.1<br />\
    <img src="styles/legend/MangluoiQH519_182_1.png" /> 1.2<br />\
    <img src="styles/legend/MangluoiQH519_182_2.png" /> 2.1<br />\
    <img src="styles/legend/MangluoiQH519_182_3.png" /> 2.2<br />\
    <img src="styles/legend/MangluoiQH519_182_4.png" /> 2.3<br />\
    <img src="styles/legend/MangluoiQH519_182_5.png" /> 2.4<br />\
    <img src="styles/legend/MangluoiQH519_182_6.png" /> 2.ext<br />\
    <img src="styles/legend/MangluoiQH519_182_7.png" /> 2A<br />\
    <img src="styles/legend/MangluoiQH519_182_8.png" /> 2A.ext<br />\
    <img src="styles/legend/MangluoiQH519_182_9.png" /> 3.1<br />\
    <img src="styles/legend/MangluoiQH519_182_10.png" /> 3.2<br />\
    <img src="styles/legend/MangluoiQH519_182_11.png" /> 3.3<br />\
    <img src="styles/legend/MangluoiQH519_182_12.png" /> 3.ext<br />\
    <img src="styles/legend/MangluoiQH519_182_13.png" /> 4<br />\
    <img src="styles/legend/MangluoiQH519_182_14.png" /> 5<br />\
    <img src="styles/legend/MangluoiQH519_182_15.png" /> 6<br />\
    <img src="styles/legend/MangluoiQH519_182_16.png" /> 7<br />\
    <img src="styles/legend/MangluoiQH519_182_17.png" /> 8<br />\
    <img src="styles/legend/MangluoiQH519_182_18.png" /> M1<br />\
    <img src="styles/legend/MangluoiQH519_182_19.png" /> M2<br />\
    <img src="styles/legend/MangluoiQH519_182_20.png" /> M3<br />\
    <img src="styles/legend/MangluoiQH519_182_21.png" /> VT<br />\
    <img src="styles/legend/MangluoiQH519_182_22.png" /> <br />' });
var format_QH519Depot_183 = new ol.format.GeoJSON();
var features_QH519Depot_183 = format_QH519Depot_183.readFeatures(json_QH519Depot_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH519Depot_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH519Depot_183.addFeatures(features_QH519Depot_183);
var lyr_QH519Depot_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH519Depot_183, 
                style: style_QH519Depot_183,
                popuplayertitle: 'QH519-Depot',
                interactive: false,
                title: '<img src="styles/legend/QH519Depot_183.png" /> QH519-Depot'
            });
var format_QH519Ga_184 = new ol.format.GeoJSON();
var features_QH519Ga_184 = format_QH519Ga_184.readFeatures(json_QH519Ga_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH519Ga_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH519Ga_184.addFeatures(features_QH519Ga_184);
var lyr_QH519Ga_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH519Ga_184, 
                style: style_QH519Ga_184,
                popuplayertitle: 'QH519-Ga',
                interactive: false,
    title: 'QH519-Ga<br />\
    <img src="styles/legend/QH519Ga_184_0.png" /> 1<br />\
    <img src="styles/legend/QH519Ga_184_1.png" /> 2<br />\
    <img src="styles/legend/QH519Ga_184_2.png" /> 2A<br />\
    <img src="styles/legend/QH519Ga_184_3.png" /> 3<br />\
    <img src="styles/legend/QH519Ga_184_4.png" /> 4<br />\
    <img src="styles/legend/QH519Ga_184_5.png" /> 5<br />\
    <img src="styles/legend/QH519Ga_184_6.png" /> 6<br />\
    <img src="styles/legend/QH519Ga_184_7.png" /> 7<br />\
    <img src="styles/legend/QH519Ga_184_8.png" /> 8<br />' });
var format_tuyen_M3_185 = new ol.format.GeoJSON();
var features_tuyen_M3_185 = format_tuyen_M3_185.readFeatures(json_tuyen_M3_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M3_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M3_185.addFeatures(features_tuyen_M3_185);
var lyr_tuyen_M3_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M3_185, 
                style: style_tuyen_M3_185,
                popuplayertitle: 'tuyen_M3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M3_185.png" /> tuyen_M3'
            });
var format_tuyen_M2_186 = new ol.format.GeoJSON();
var features_tuyen_M2_186 = format_tuyen_M2_186.readFeatures(json_tuyen_M2_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M2_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M2_186.addFeatures(features_tuyen_M2_186);
var lyr_tuyen_M2_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M2_186, 
                style: style_tuyen_M2_186,
                popuplayertitle: 'tuyen_M2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M2_186.png" /> tuyen_M2'
            });
var format_tuyen_M1_187 = new ol.format.GeoJSON();
var features_tuyen_M1_187 = format_tuyen_M1_187.readFeatures(json_tuyen_M1_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M1_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M1_187.addFeatures(features_tuyen_M1_187);
var lyr_tuyen_M1_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M1_187, 
                style: style_tuyen_M1_187,
                popuplayertitle: 'tuyen_M1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M1_187.png" /> tuyen_M1'
            });
var format_tuyen_VT_188 = new ol.format.GeoJSON();
var features_tuyen_VT_188 = format_tuyen_VT_188.readFeatures(json_tuyen_VT_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_VT_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_VT_188.addFeatures(features_tuyen_VT_188);
var lyr_tuyen_VT_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_VT_188, 
                style: style_tuyen_VT_188,
                popuplayertitle: 'tuyen_VT',
                interactive: true,
                title: '<img src="styles/legend/tuyen_VT_188.png" /> tuyen_VT'
            });
var format_tuyen_8_189 = new ol.format.GeoJSON();
var features_tuyen_8_189 = format_tuyen_8_189.readFeatures(json_tuyen_8_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_8_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_8_189.addFeatures(features_tuyen_8_189);
var lyr_tuyen_8_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_8_189, 
                style: style_tuyen_8_189,
                popuplayertitle: 'tuyen_8',
                interactive: true,
                title: '<img src="styles/legend/tuyen_8_189.png" /> tuyen_8'
            });
var format_tuyen_7_190 = new ol.format.GeoJSON();
var features_tuyen_7_190 = format_tuyen_7_190.readFeatures(json_tuyen_7_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_7_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_7_190.addFeatures(features_tuyen_7_190);
var lyr_tuyen_7_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_7_190, 
                style: style_tuyen_7_190,
                popuplayertitle: 'tuyen_7',
                interactive: true,
                title: '<img src="styles/legend/tuyen_7_190.png" /> tuyen_7'
            });
var format_tuyen_6_191 = new ol.format.GeoJSON();
var features_tuyen_6_191 = format_tuyen_6_191.readFeatures(json_tuyen_6_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_6_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_6_191.addFeatures(features_tuyen_6_191);
var lyr_tuyen_6_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_6_191, 
                style: style_tuyen_6_191,
                popuplayertitle: 'tuyen_6',
                interactive: true,
                title: '<img src="styles/legend/tuyen_6_191.png" /> tuyen_6'
            });
var format_tuyen_5_192 = new ol.format.GeoJSON();
var features_tuyen_5_192 = format_tuyen_5_192.readFeatures(json_tuyen_5_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_5_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_5_192.addFeatures(features_tuyen_5_192);
var lyr_tuyen_5_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_5_192, 
                style: style_tuyen_5_192,
                popuplayertitle: 'tuyen_5',
                interactive: true,
                title: '<img src="styles/legend/tuyen_5_192.png" /> tuyen_5'
            });
var format_tuyen_4_193 = new ol.format.GeoJSON();
var features_tuyen_4_193 = format_tuyen_4_193.readFeatures(json_tuyen_4_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_4_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_4_193.addFeatures(features_tuyen_4_193);
var lyr_tuyen_4_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_4_193, 
                style: style_tuyen_4_193,
                popuplayertitle: 'tuyen_4',
                interactive: true,
                title: '<img src="styles/legend/tuyen_4_193.png" /> tuyen_4'
            });
var format_tuyen_3_194 = new ol.format.GeoJSON();
var features_tuyen_3_194 = format_tuyen_3_194.readFeatures(json_tuyen_3_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_3_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_3_194.addFeatures(features_tuyen_3_194);
var lyr_tuyen_3_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_3_194, 
                style: style_tuyen_3_194,
                popuplayertitle: 'tuyen_3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_3_194.png" /> tuyen_3'
            });
var format_tuyen_2A_195 = new ol.format.GeoJSON();
var features_tuyen_2A_195 = format_tuyen_2A_195.readFeatures(json_tuyen_2A_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2A_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2A_195.addFeatures(features_tuyen_2A_195);
var lyr_tuyen_2A_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2A_195, 
                style: style_tuyen_2A_195,
                popuplayertitle: 'tuyen_2A',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2A_195.png" /> tuyen_2A'
            });
var format_tuyen_2_196 = new ol.format.GeoJSON();
var features_tuyen_2_196 = format_tuyen_2_196.readFeatures(json_tuyen_2_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2_196.addFeatures(features_tuyen_2_196);
var lyr_tuyen_2_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2_196, 
                style: style_tuyen_2_196,
                popuplayertitle: 'tuyen_2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2_196.png" /> tuyen_2'
            });
var format_tuyen_1_197 = new ol.format.GeoJSON();
var features_tuyen_1_197 = format_tuyen_1_197.readFeatures(json_tuyen_1_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_1_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_1_197.addFeatures(features_tuyen_1_197);
var lyr_tuyen_1_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_1_197, 
                style: style_tuyen_1_197,
                popuplayertitle: 'tuyen_1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_1_197.png" /> tuyen_1'
            });
var format_SDDSonTay_198 = new ol.format.GeoJSON();
var features_SDDSonTay_198 = format_SDDSonTay_198.readFeatures(json_SDDSonTay_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDSonTay_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDSonTay_198.addFeatures(features_SDDSonTay_198);
var lyr_SDDSonTay_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDSonTay_198, 
                style: style_SDDSonTay_198,
                popuplayertitle: 'SDD Son Tay',
                interactive: true,
    title: 'SDD Son Tay<br />\
    <img src="styles/legend/SDDSonTay_198_0.png" /> -H-Cayxanh-CV<br />\
    <img src="styles/legend/SDDSonTay_198_1.png" /> -H-Cayxanh-CV dvo<br />\
    <img src="styles/legend/SDDSonTay_198_2.png" /> @ Cay xanh khu vuc<br />\
    <img src="styles/legend/SDDSonTay_198_3.png" /> @_Cay an Qua<br />\
    <img src="styles/legend/SDDSonTay_198_4.png" /> @_Cay Xanh<br />\
    <img src="styles/legend/SDDSonTay_198_5.png" /> @_Cay xanh thanh pho<br />\
    <img src="styles/legend/SDDSonTay_198_6.png" /> @_Cong Cong<br />\
    <img src="styles/legend/SDDSonTay_198_7.png" /> @_cong cong KV<br />\
    <img src="styles/legend/SDDSonTay_198_8.png" /> @_CX Cach Ly<br />\
    <img src="styles/legend/SDDSonTay_198_9.png" /> @_Du Lich<br />\
    <img src="styles/legend/SDDSonTay_198_10.png" /> @_Mat Nuoc<br />\
    <img src="styles/legend/SDDSonTay_198_11.png" /> @_matnuoc_hat<br />\
    <img src="styles/legend/SDDSonTay_198_12.png" /> @_Nc New Hatch<br />\
    <img src="styles/legend/SDDSonTay_198_13.png" /> @_ngiadia_hat<br />\
    <img src="styles/legend/SDDSonTay_198_14.png" /> @_Nong Nghiep<br />\
    <img src="styles/legend/SDDSonTay_198_15.png" /> @_O Moi<br />\
    <img src="styles/legend/SDDSonTay_198_16.png" /> @_Truong Dai Hoc<br />\
    <img src="styles/legend/SDDSonTay_198_17.png" /> 08_Hatch<br />\
    <img src="styles/legend/SDDSonTay_198_18.png" /> 2-h cn<br />\
    <img src="styles/legend/SDDSonTay_198_19.png" /> 2-h coquan<br />\
    <img src="styles/legend/SDDSonTay_198_20.png" /> 2-h o co<br />\
    <img src="styles/legend/SDDSonTay_198_21.png" /> 2-h o lxom-cxanh<br />\
    <img src="styles/legend/SDDSonTay_198_22.png" /> 2-h o Pho cu<br />\
    <img src="styles/legend/SDDSonTay_198_23.png" /> 2009-10-17.Ban nen2$0$mauho<br />\
    <img src="styles/legend/SDDSonTay_198_24.png" /> Baidoxe<br />\
    <img src="styles/legend/SDDSonTay_198_25.png" /> CCC<br />\
    <img src="styles/legend/SDDSonTay_198_26.png" /> dao o ONT<br />\
    <img src="styles/legend/SDDSonTay_198_27.png" /> Dat Bai Tap Ket-XL Rac Thai<br />\
    <img src="styles/legend/SDDSonTay_198_28.png" /> dat chan nuoi tap trung<br />\
    <img src="styles/legend/SDDSonTay_198_29.png" /> dat chuyen rau<br />\
    <img src="styles/legend/SDDSonTay_198_30.png" /> Dat CXCV-TDTT<br />\
    <img src="styles/legend/SDDSonTay_198_31.png" /> dat di tich<br />\
    <img src="styles/legend/SDDSonTay_198_32.png" /> đất mau<br />\
    <img src="styles/legend/SDDSonTay_198_33.png" /> dat o do thi du lich<br />\
    <img src="styles/legend/SDDSonTay_198_34.png" /> Dat O Nong Thon<br />\
    <img src="styles/legend/SDDSonTay_198_35.png" /> dat o tdcu<br />\
    <img src="styles/legend/SDDSonTay_198_36.png" /> Dat Rung San Xuat<br />\
    <img src="styles/legend/SDDSonTay_198_37.png" /> DAT RUNG- LAM NGHIEP<br />\
    <img src="styles/legend/SDDSonTay_198_38.png" /> dat san xuat kinh doanh<br />\
    <img src="styles/legend/SDDSonTay_198_39.png" /> dat trong Lua<br />\
    <img src="styles/legend/SDDSonTay_198_40.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDSonTay_198_41.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDSonTay_198_42.png" /> h- ton giao<br />\
    <img src="styles/legend/SDDSonTay_198_43.png" /> hacth cc<br />\
    <img src="styles/legend/SDDSonTay_198_44.png" /> HTKT<br />\
    <img src="styles/legend/SDDSonTay_198_45.png" /> kihieu<br />\
    <img src="styles/legend/SDDSonTay_198_46.png" /> Lang xom do thi hoa<br />\
    <img src="styles/legend/SDDSonTay_198_47.png" /> mo<br />\
    <img src="styles/legend/SDDSonTay_198_48.png" /> N-dat quan su<br />\
    <img src="styles/legend/SDDSonTay_198_49.png" /> QUAN SU<br />\
    <img src="styles/legend/SDDSonTay_198_50.png" /> RANH GIOI<br />\
    <img src="styles/legend/SDDSonTay_198_51.png" /> RANHGIOI<br />\
    <img src="styles/legend/SDDSonTay_198_52.png" /> T-hatch Ditich<br />\
    <img src="styles/legend/SDDSonTay_198_53.png" /> truonghoc-NT<br />\
    <img src="styles/legend/SDDSonTay_198_54.png" /> <br />' });
var format_SDDS5_199 = new ol.format.GeoJSON();
var features_SDDS5_199 = format_SDDS5_199.readFeatures(json_SDDS5_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDS5_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDS5_199.addFeatures(features_SDDS5_199);
var lyr_SDDS5_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDS5_199, 
                style: style_SDDS5_199,
                popuplayertitle: 'SDD S5',
                interactive: true,
    title: 'SDD S5<br />\
    <img src="styles/legend/SDDS5_199_0.png" /> H_CayXanh_DVO<br />\
    <img src="styles/legend/SDDS5_199_1.png" /> h_CongCong_DVO<br />\
    <img src="styles/legend/SDDS5_199_2.png" /> H-BAIDOXE-DVO<br />\
    <img src="styles/legend/SDDS5_199_3.png" /> H-BAIDOXE-KHUO<br />\
    <img src="styles/legend/SDDS5_199_4.png" /> H-CCKV<br />\
    <img src="styles/legend/SDDS5_199_5.png" /> H-CCTP<br />\
    <img src="styles/legend/SDDS5_199_6.png" /> H-CN<br />\
    <img src="styles/legend/SDDS5_199_7.png" /> H-CQ<br />\
    <img src="styles/legend/SDDS5_199_8.png" /> H-CXKV<br />\
    <img src="styles/legend/SDDS5_199_9.png" /> H-CXTP<br />\
    <img src="styles/legend/SDDS5_199_10.png" /> H-DATOMOI<br />\
    <img src="styles/legend/SDDS5_199_11.png" /> H-DITICH<br />\
    <img src="styles/legend/SDDS5_199_12.png" /> H-HonHop<br />\
    <img src="styles/legend/SDDS5_199_13.png" /> H-LANGXOM<br />\
    <img src="styles/legend/SDDS5_199_14.png" /> H-QUOCPHONG<br />\
    <img src="styles/legend/SDDS5_199_15.png" /> H-TH-THCS<br />\
    <img src="styles/legend/SDDS5_199_16.png" /> H-THPT<br />\
    <img src="styles/legend/SDDS5_199_17.png" /> HatchSongho<br />\
    <img src="styles/legend/SDDS5_199_18.png" /> KYHIEU<br />\
    <img src="styles/legend/SDDS5_199_19.png" /> <br />' });
var format_SDDS4_200 = new ol.format.GeoJSON();
var features_SDDS4_200 = format_SDDS4_200.readFeatures(json_SDDS4_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDS4_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDS4_200.addFeatures(features_SDDS4_200);
var lyr_SDDS4_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDS4_200, 
                style: style_SDDS4_200,
                popuplayertitle: 'SDD S4',
                interactive: true,
    title: 'SDD S4<br />\
    <img src="styles/legend/SDDS4_200_0.png" /> @- DAT CAY XANH CANH QUAN<br />\
    <img src="styles/legend/SDDS4_200_1.png" /> 4-hach dtht<br />\
    <img src="styles/legend/SDDS4_200_2.png" /> cayxanh cach ly<br />\
    <img src="styles/legend/SDDS4_200_3.png" /> DAT CAY XANH khu vuc<br />\
    <img src="styles/legend/SDDS4_200_4.png" /> DATCC TP<br />\
    <img src="styles/legend/SDDS4_200_5.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDS4_200_6.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDS4_200_7.png" /> DATCXKHUO<br />\
    <img src="styles/legend/SDDS4_200_8.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDS4_200_9.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDS4_200_10.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDS4_200_11.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDS4_200_12.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDS4_200_13.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDS4_200_14.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDS4_200_15.png" /> DATTH-NT<br />\
    <img src="styles/legend/SDDS4_200_16.png" /> H-TRUONGHOC<br />\
    <img src="styles/legend/SDDS4_200_17.png" /> KIHIEU<br />\
    <img src="styles/legend/SDDS4_200_18.png" /> <br />' });
var format_SDDS3_201 = new ol.format.GeoJSON();
var features_SDDS3_201 = format_SDDS3_201.readFeatures(json_SDDS3_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDS3_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDS3_201.addFeatures(features_SDDS3_201);
var lyr_SDDS3_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDS3_201, 
                style: style_SDDS3_201,
                popuplayertitle: 'SDD S3',
                interactive: true,
    title: 'SDD S3<br />\
    <img src="styles/legend/SDDS3_201_0.png" /> DATCAY XANH DVO<br />\
    <img src="styles/legend/SDDS3_201_1.png" /> DATCAYXANH KO<br />\
    <img src="styles/legend/SDDS3_201_2.png" /> DATCAYXANH TP<br />\
    <img src="styles/legend/SDDS3_201_3.png" /> DATCAYXANHCLY<br />\
    <img src="styles/legend/SDDS3_201_4.png" /> DATCC DOTHI<br />\
    <img src="styles/legend/SDDS3_201_5.png" /> DATCC TP<br />\
    <img src="styles/legend/SDDS3_201_6.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDS3_201_7.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDS3_201_8.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDS3_201_9.png" /> DAtHHDiaPhuong<br />\
    <img src="styles/legend/SDDS3_201_10.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDS3_201_11.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDS3_201_12.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDS3_201_13.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDS3_201_14.png" /> DATOTHAPTANG<br />\
    <img src="styles/legend/SDDS3_201_15.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDS3_201_16.png" /> h_CongCong_DVO<br />\
    <img src="styles/legend/SDDS3_201_17.png" /> H-TRUONGHOC<br />\
    <img src="styles/legend/SDDS3_201_18.png" /> <br />' });
var format_SDDS2_202 = new ol.format.GeoJSON();
var features_SDDS2_202 = format_SDDS2_202.readFeatures(json_SDDS2_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDS2_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDS2_202.addFeatures(features_SDDS2_202);
var lyr_SDDS2_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDS2_202, 
                style: style_SDDS2_202,
                popuplayertitle: 'SDD S2',
                interactive: true,
    title: 'SDD S2<br />\
    <img src="styles/legend/SDDS2_202_0.png" /> CAY XANH KHU VUC<br />\
    <img src="styles/legend/SDDS2_202_1.png" /> DATCAY XANH DVO<br />\
    <img src="styles/legend/SDDS2_202_2.png" /> DATCAYXANH TP<br />\
    <img src="styles/legend/SDDS2_202_3.png" /> DATCC DOTHI<br />\
    <img src="styles/legend/SDDS2_202_4.png" /> DATCC TP<br />\
    <img src="styles/legend/SDDS2_202_5.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDS2_202_6.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDS2_202_7.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDS2_202_8.png" /> DAtHHDiaPhuong<br />\
    <img src="styles/legend/SDDS2_202_9.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDS2_202_10.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDS2_202_11.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDS2_202_12.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDS2_202_13.png" /> DATOTHAPTANG<br />\
    <img src="styles/legend/SDDS2_202_14.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDS2_202_15.png" /> H-TRUONGHOC<br />\
    <img src="styles/legend/SDDS2_202_16.png" /> KIHIEU<br />\
    <img src="styles/legend/SDDS2_202_17.png" /> <br />' });
var format_SDDS1_203 = new ol.format.GeoJSON();
var features_SDDS1_203 = format_SDDS1_203.readFeatures(json_SDDS1_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDS1_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDS1_203.addFeatures(features_SDDS1_203);
var lyr_SDDS1_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDS1_203, 
                style: style_SDDS1_203,
                popuplayertitle: 'SDD S1',
                interactive: true,
    title: 'SDD S1<br />\
    <img src="styles/legend/SDDS1_203_0.png" /> Cay xanh DVO<br />\
    <img src="styles/legend/SDDS1_203_1.png" /> DATCAY XANH DVO<br />\
    <img src="styles/legend/SDDS1_203_2.png" /> DATCAYXANH TP<br />\
    <img src="styles/legend/SDDS1_203_3.png" /> DATCC DOTHI<br />\
    <img src="styles/legend/SDDS1_203_4.png" /> DATCC TP<br />\
    <img src="styles/legend/SDDS1_203_5.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDS1_203_6.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDS1_203_7.png" /> DAtHHDiaPhuong<br />\
    <img src="styles/legend/SDDS1_203_8.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDS1_203_9.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDS1_203_10.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDS1_203_11.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDS1_203_12.png" /> DATOTHAPTANG<br />\
    <img src="styles/legend/SDDS1_203_13.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDS1_203_14.png" /> DATTH-NT<br />\
    <img src="styles/legend/SDDS1_203_15.png" /> GT_depot<br />\
    <img src="styles/legend/SDDS1_203_16.png" /> h_CongCong_DVO<br />\
    <img src="styles/legend/SDDS1_203_17.png" /> <br />' });
var format_SDDPKR_204 = new ol.format.GeoJSON();
var features_SDDPKR_204 = format_SDDPKR_204.readFeatures(json_SDDPKR_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDPKR_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDPKR_204.addFeatures(features_SDDPKR_204);
var lyr_SDDPKR_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDPKR_204, 
                style: style_SDDPKR_204,
                popuplayertitle: 'SDD PK R',
                interactive: true,
    title: 'SDD PK R<br />\
    <img src="styles/legend/SDDPKR_204_0.png" /> 1_cau vuot<br />\
    <img src="styles/legend/SDDPKR_204_1.png" /> Dat cong cong<br />\
    <img src="styles/legend/SDDPKR_204_2.png" /> dat o hien trang<br />\
    <img src="styles/legend/SDDPKR_204_3.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDPKR_204_4.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDPKR_204_5.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDPKR_204_6.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDPKR_204_7.png" /> qh_cay xanh cach ly<br />\
    <img src="styles/legend/SDDPKR_204_8.png" /> qh_Dat cay xanh chuyen de<br />\
    <img src="styles/legend/SDDPKR_204_9.png" /> qh-dat cay xanh do thi<br />\
    <img src="styles/legend/SDDPKR_204_10.png" /> qh-dat cay xanh dvo<br />\
    <img src="styles/legend/SDDPKR_204_11.png" /> qh-dat cong cong dvo<br />\
    <img src="styles/legend/SDDPKR_204_12.png" /> qh-dat cong tinh dau moi HTKT<br />\
    <img src="styles/legend/SDDPKR_204_13.png" /> qh-dat ton giao<br />\
    <img src="styles/legend/SDDPKR_204_14.png" /> qh-nhom nha o<br />\
    <img src="styles/legend/SDDPKR_204_15.png" /> qh-truong THCS TH mam non<br />\
    <img src="styles/legend/SDDPKR_204_16.png" /> qh-truong THPT<br />\
    <img src="styles/legend/SDDPKR_204_17.png" /> sdd_DIAPHUONG<br />\
    <img src="styles/legend/SDDPKR_204_18.png" /> <br />' });
var format_SDDPhuctho_205 = new ol.format.GeoJSON();
var features_SDDPhuctho_205 = format_SDDPhuctho_205.readFeatures(json_SDDPhuctho_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDPhuctho_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDPhuctho_205.addFeatures(features_SDDPhuctho_205);
var lyr_SDDPhuctho_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDPhuctho_205, 
                style: style_SDDPhuctho_205,
                popuplayertitle: 'SDD Phuc tho',
                interactive: true,
    title: 'SDD Phuc tho<br />\
    <img src="styles/legend/SDDPhuctho_205_0.png" /> .hdattrongluanuoc<br />\
    <img src="styles/legend/SDDPhuctho_205_1.png" /> D.CongNghiep<br />\
    <img src="styles/legend/SDDPhuctho_205_2.png" /> d.nghia trang<br />\
    <img src="styles/legend/SDDPhuctho_205_3.png" /> d.o NT<br />\
    <img src="styles/legend/SDDPhuctho_205_4.png" /> dat cong ty<br />\
    <img src="styles/legend/SDDPhuctho_205_5.png" /> DAT CX-TDTT<br />\
    <img src="styles/legend/SDDPhuctho_205_6.png" /> dat du tru phat trien<br />\
    <img src="styles/legend/SDDPhuctho_205_7.png" /> Dat Khai Thac VLXD<br />\
    <img src="styles/legend/SDDPhuctho_205_8.png" /> dat o dan cu moi<br />\
    <img src="styles/legend/SDDPhuctho_205_9.png" /> dat san xuat Kinh doanh<br />\
    <img src="styles/legend/SDDPhuctho_205_10.png" /> Dat TH Moi<br />\
    <img src="styles/legend/SDDPhuctho_205_11.png" /> dat-tongiao<br />\
    <img src="styles/legend/SDDPhuctho_205_12.png" /> datcoquan<br />\
    <img src="styles/legend/SDDPhuctho_205_13.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDPhuctho_205_14.png" /> daumoihatang<br />\
    <img src="styles/legend/SDDPhuctho_205_15.png" /> H DL moi<br />\
    <img src="styles/legend/SDDPhuctho_205_16.png" /> H-TRUONGHOC<br />\
    <img src="styles/legend/SDDPhuctho_205_17.png" /> H.DCC Moi<br />\
    <img src="styles/legend/SDDPhuctho_205_18.png" /> hack dat cay an qua<br />\
    <img src="styles/legend/SDDPhuctho_205_19.png" /> HCXST<br />\
    <img src="styles/legend/SDDPhuctho_205_20.png" /> hd.CX-TDTT<br />\
    <img src="styles/legend/SDDPhuctho_205_21.png" /> hd.TDTT<br />\
    <img src="styles/legend/SDDPhuctho_205_22.png" /> hdatconcong<br />\
    <img src="styles/legend/SDDPhuctho_205_23.png" /> hdatcongnghiep<br />\
    <img src="styles/legend/SDDPhuctho_205_24.png" /> HDATODOTHI<br />\
    <img src="styles/legend/SDDPhuctho_205_25.png" /> HDATONONGTHON<br />\
    <img src="styles/legend/SDDPhuctho_205_26.png" /> hdattruonghoc<br />\
    <img src="styles/legend/SDDPhuctho_205_27.png" /> hddulich<br />\
    <img src="styles/legend/SDDPhuctho_205_28.png" /> htch-new resi<br />\
    <img src="styles/legend/SDDPhuctho_205_29.png" /> htch-water<br />\
    <img src="styles/legend/SDDPhuctho_205_30.png" /> PHAN DOT<br />\
    <img src="styles/legend/SDDPhuctho_205_31.png" /> songsuoi-l<br />\
    <img src="styles/legend/SDDPhuctho_205_32.png" /> TMDV<br />\
    <img src="styles/legend/SDDPhuctho_205_33.png" /> TTCN cu<br />\
    <img src="styles/legend/SDDPhuctho_205_34.png" /> TTCN moi<br />\
    <img src="styles/legend/SDDPhuctho_205_35.png" /> <br />' });
var format_SDDN11_206 = new ol.format.GeoJSON();
var features_SDDN11_206 = format_SDDN11_206.readFeatures(json_SDDN11_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDN11_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDN11_206.addFeatures(features_SDDN11_206);
var lyr_SDDN11_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDN11_206, 
                style: style_SDDN11_206,
                popuplayertitle: 'SDD N11',
                interactive: true,
    title: 'SDD N11<br />\
    <img src="styles/legend/SDDN11_206_0.png" /> @_Dat DA Dac Biet<br />\
    <img src="styles/legend/SDDN11_206_1.png" /> @- DAT CAY XANH CANH QUAN<br />\
    <img src="styles/legend/SDDN11_206_2.png" /> CAY XANH KHU VUC<br />\
    <img src="styles/legend/SDDN11_206_3.png" /> DATCAYXANH<br />\
    <img src="styles/legend/SDDN11_206_4.png" /> DATCAYXANHCLY<br />\
    <img src="styles/legend/SDDN11_206_5.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDN11_206_6.png" /> DATCCTP<br />\
    <img src="styles/legend/SDDN11_206_7.png" /> DATCONGNGHIEP<br />\
    <img src="styles/legend/SDDN11_206_8.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDN11_206_9.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDN11_206_10.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDN11_206_11.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDN11_206_12.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDN11_206_13.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDN11_206_14.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDN11_206_15.png" /> DATOTHAPTANG<br />\
    <img src="styles/legend/SDDN11_206_16.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDN11_206_17.png" /> DATTH-NT<br />\
    <img src="styles/legend/SDDN11_206_18.png" /> hatch nuoc ho<br />\
    <img src="styles/legend/SDDN11_206_19.png" /> KIHIEU<br />\
    <img src="styles/legend/SDDN11_206_20.png" /> Lang Trong CX<br />\
    <img src="styles/legend/SDDN11_206_21.png" /> ThaiDgSatDoThi<br />\
    <img src="styles/legend/SDDN11_206_22.png" /> tim long<br />\
    <img src="styles/legend/SDDN11_206_23.png" /> <br />' });
var format_SDDN10_207 = new ol.format.GeoJSON();
var features_SDDN10_207 = format_SDDN10_207.readFeatures(json_SDDN10_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDN10_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDN10_207.addFeatures(features_SDDN10_207);
var lyr_SDDN10_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDN10_207, 
                style: style_SDDN10_207,
                popuplayertitle: 'SDD N10',
                interactive: true,
    title: 'SDD N10<br />\
    <img src="styles/legend/SDDN10_207_0.png" /> @_Nong Nghiep<br />\
    <img src="styles/legend/SDDN10_207_1.png" /> CAY XANH KHU VUC<br />\
    <img src="styles/legend/SDDN10_207_2.png" /> CD-220KV<br />\
    <img src="styles/legend/SDDN10_207_3.png" /> CX khu o<br />\
    <img src="styles/legend/SDDN10_207_4.png" /> DATCAYXANH<br />\
    <img src="styles/legend/SDDN10_207_5.png" /> DATCAYXANHCLY<br />\
    <img src="styles/legend/SDDN10_207_6.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDN10_207_7.png" /> DATCCTP<br />\
    <img src="styles/legend/SDDN10_207_8.png" /> DATCONGNGHIEP<br />\
    <img src="styles/legend/SDDN10_207_9.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDN10_207_10.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDN10_207_11.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDN10_207_12.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDN10_207_13.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDN10_207_14.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDN10_207_15.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDN10_207_16.png" /> DATOTHAPTANG<br />\
    <img src="styles/legend/SDDN10_207_17.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDN10_207_18.png" /> DATTH-NT<br />\
    <img src="styles/legend/SDDN10_207_19.png" /> TNT-CONG<br />\
    <img src="styles/legend/SDDN10_207_20.png" /> <br />' });
var format_SDDN9_208 = new ol.format.GeoJSON();
var features_SDDN9_208 = format_SDDN9_208.readFeatures(json_SDDN9_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDN9_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDN9_208.addFeatures(features_SDDN9_208);
var lyr_SDDN9_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDN9_208, 
                style: style_SDDN9_208,
                popuplayertitle: 'SDD N9',
                interactive: true,
    title: 'SDD N9<br />\
    <img src="styles/legend/SDDN9_208_0.png" /> !giaothongchinh<br />\
    <img src="styles/legend/SDDN9_208_1.png" /> @_Nong Nghiep<br />\
    <img src="styles/legend/SDDN9_208_2.png" /> @_O Moi<br />\
    <img src="styles/legend/SDDN9_208_3.png" /> @kyhieu<br />\
    <img src="styles/legend/SDDN9_208_4.png" /> 0<br />\
    <img src="styles/legend/SDDN9_208_5.png" /> 2-h o lxom-cxanh<br />\
    <img src="styles/legend/SDDN9_208_6.png" /> CAY XANH KHU VUC<br />\
    <img src="styles/legend/SDDN9_208_7.png" /> DATCAYXANH<br />\
    <img src="styles/legend/SDDN9_208_8.png" /> DATCC DOTHI<br />\
    <img src="styles/legend/SDDN9_208_9.png" /> DATCC TP<br />\
    <img src="styles/legend/SDDN9_208_10.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDN9_208_11.png" /> DATCONGNGHIEP<br />\
    <img src="styles/legend/SDDN9_208_12.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDN9_208_13.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDN9_208_14.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDN9_208_15.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDN9_208_16.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDN9_208_17.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDN9_208_18.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDN9_208_19.png" /> DATTH-NT<br />\
    <img src="styles/legend/SDDN9_208_20.png" /> duong chinh<br />\
    <img src="styles/legend/SDDN9_208_21.png" /> H_langxom<br />\
    <img src="styles/legend/SDDN9_208_22.png" /> h- ko xd<br />\
    <img src="styles/legend/SDDN9_208_23.png" /> H-TRUONGHOC<br />\
    <img src="styles/legend/SDDN9_208_24.png" /> hatch-cayxxanh<br />\
    <img src="styles/legend/SDDN9_208_25.png" /> Layer2<br />\
    <img src="styles/legend/SDDN9_208_26.png" /> PHAN DOT2<br />\
    <img src="styles/legend/SDDN9_208_27.png" /> sdd_cc_CHO<br />\
    <img src="styles/legend/SDDN9_208_28.png" /> sdd_cc_VANHOA<br />\
    <img src="styles/legend/SDDN9_208_29.png" /> sdd_cc_YTE<br />\
    <img src="styles/legend/SDDN9_208_30.png" /> sdd_COQUAN<br />\
    <img src="styles/legend/SDDN9_208_31.png" /> sdd_CX_cachli<br />\
    <img src="styles/legend/SDDN9_208_32.png" /> sdd_CX_congvien<br />\
    <img src="styles/legend/SDDN9_208_33.png" /> sdd_CX_DVO<br />\
    <img src="styles/legend/SDDN9_208_34.png" /> sdd_CX_rung<br />\
    <img src="styles/legend/SDDN9_208_35.png" /> sdd_DIDAN<br />\
    <img src="styles/legend/SDDN9_208_36.png" /> sdd_DITICH<br />\
    <img src="styles/legend/SDDN9_208_37.png" /> sdd_HO<br />\
    <img src="styles/legend/SDDN9_208_38.png" /> sdd_HTKT<br />\
    <img src="styles/legend/SDDN9_208_39.png" /> sdd_LANGXOM<br />\
    <img src="styles/legend/SDDN9_208_40.png" /> sdd_QuanSu<br />\
    <img src="styles/legend/SDDN9_208_41.png" /> sdd_truong_NT<br />\
    <img src="styles/legend/SDDN9_208_42.png" /> zBolinhtinh<br />\
    <img src="styles/legend/SDDN9_208_43.png" /> <br />' });
var format_SDDN8_209 = new ol.format.GeoJSON();
var features_SDDN8_209 = format_SDDN8_209.readFeatures(json_SDDN8_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDN8_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDN8_209.addFeatures(features_SDDN8_209);
var lyr_SDDN8_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDN8_209, 
                style: style_SDDN8_209,
                popuplayertitle: 'SDD N8',
                interactive: true,
    title: 'SDD N8<br />\
    <img src="styles/legend/SDDN8_209_0.png" /> 0<br />\
    <img src="styles/legend/SDDN8_209_1.png" /> 4-CC-DVO<br />\
    <img src="styles/legend/SDDN8_209_2.png" /> 4-hach dtht<br />\
    <img src="styles/legend/SDDN8_209_3.png" /> 4-hacth-cai tao<br />\
    <img src="styles/legend/SDDN8_209_4.png" /> DATCAY XANH DVO<br />\
    <img src="styles/legend/SDDN8_209_5.png" /> DATCAYXANH CANH QUAN<br />\
    <img src="styles/legend/SDDN8_209_6.png" /> DATCAYXANH CLY<br />\
    <img src="styles/legend/SDDN8_209_7.png" /> DATCAYXANH TP<br />\
    <img src="styles/legend/SDDN8_209_8.png" /> DATCC DOTHI<br />\
    <img src="styles/legend/SDDN8_209_9.png" /> DATCC DVO<br />\
    <img src="styles/legend/SDDN8_209_10.png" /> DATCC TP<br />\
    <img src="styles/legend/SDDN8_209_11.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDN8_209_12.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDN8_209_13.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDN8_209_14.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDN8_209_15.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDN8_209_16.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDN8_209_17.png" /> H-TRUONGHOC<br />\
    <img src="styles/legend/SDDN8_209_18.png" /> <br />' });
var format_SDDN7_210 = new ol.format.GeoJSON();
var features_SDDN7_210 = format_SDDN7_210.readFeatures(json_SDDN7_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDN7_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDN7_210.addFeatures(features_SDDN7_210);
var lyr_SDDN7_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDN7_210, 
                style: style_SDDN7_210,
                popuplayertitle: 'SDD N7',
                interactive: true,
    title: 'SDD N7<br />\
    <img src="styles/legend/SDDN7_210_0.png" /> 0<br />\
    <img src="styles/legend/SDDN7_210_1.png" /> 2-h o lxom-cxanh<br />\
    <img src="styles/legend/SDDN7_210_2.png" /> 4-hach dtht<br />\
    <img src="styles/legend/SDDN7_210_3.png" /> 4-hacth-cai tao<br />\
    <img src="styles/legend/SDDN7_210_4.png" /> b-truonghoc<br />\
    <img src="styles/legend/SDDN7_210_5.png" /> DATCAY XANH DVO<br />\
    <img src="styles/legend/SDDN7_210_6.png" /> DATCAYXANH CANH QUAN<br />\
    <img src="styles/legend/SDDN7_210_7.png" /> DATCAYXANH CLY<br />\
    <img src="styles/legend/SDDN7_210_8.png" /> DATCAYXANH TP<br />\
    <img src="styles/legend/SDDN7_210_9.png" /> DATCC DOTHI<br />\
    <img src="styles/legend/SDDN7_210_10.png" /> DATCC DVO<br />\
    <img src="styles/legend/SDDN7_210_11.png" /> DATCC TP<br />\
    <img src="styles/legend/SDDN7_210_12.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDN7_210_13.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDN7_210_14.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDN7_210_15.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDN7_210_16.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDN7_210_17.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDN7_210_18.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDN7_210_19.png" /> H-TRUONGHOC<br />\
    <img src="styles/legend/SDDN7_210_20.png" /> KIHIEU<br />\
    <img src="styles/legend/SDDN7_210_21.png" /> <br />' });
var format_SDDN6_211 = new ol.format.GeoJSON();
var features_SDDN6_211 = format_SDDN6_211.readFeatures(json_SDDN6_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDN6_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDN6_211.addFeatures(features_SDDN6_211);
var lyr_SDDN6_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDN6_211, 
                style: style_SDDN6_211,
                popuplayertitle: 'SDD N6',
                interactive: true,
    title: 'SDD N6<br />\
    <img src="styles/legend/SDDN6_211_0.png" /> cong cong dvo<br />\
    <img src="styles/legend/SDDN6_211_1.png" /> cong cong khu vuc<br />\
    <img src="styles/legend/SDDN6_211_2.png" /> DAN DAN<br />\
    <img src="styles/legend/SDDN6_211_3.png" /> DAT CAY XANH DVO<br />\
    <img src="styles/legend/SDDN6_211_4.png" /> DATCAYXANH<br />\
    <img src="styles/legend/SDDN6_211_5.png" /> DATCAYXANHCLY<br />\
    <img src="styles/legend/SDDN6_211_6.png" /> DATCONGNGHIEP<br />\
    <img src="styles/legend/SDDN6_211_7.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDN6_211_8.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDN6_211_9.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDN6_211_10.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDN6_211_11.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDN6_211_12.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDN6_211_13.png" /> DATTH-NT<br />\
    <img src="styles/legend/SDDN6_211_14.png" /> H-matnuoc<br />\
    <img src="styles/legend/SDDN6_211_15.png" /> hatch-CC<br />\
    <img src="styles/legend/SDDN6_211_16.png" /> odt dot dau<br />\
    <img src="styles/legend/SDDN6_211_17.png" /> Songho<br />\
    <img src="styles/legend/SDDN6_211_18.png" /> <br />' });
var format_SDDN5_212 = new ol.format.GeoJSON();
var features_SDDN5_212 = format_SDDN5_212.readFeatures(json_SDDN5_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDN5_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDN5_212.addFeatures(features_SDDN5_212);
var lyr_SDDN5_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDN5_212, 
                style: style_SDDN5_212,
                popuplayertitle: 'SDD N5',
                interactive: true,
    title: 'SDD N5<br />\
    <img src="styles/legend/SDDN5_212_0.png" /> 4-hach dtht<br />\
    <img src="styles/legend/SDDN5_212_1.png" /> 4-hacth-cai tao<br />\
    <img src="styles/legend/SDDN5_212_2.png" /> b-truonghoc<br />\
    <img src="styles/legend/SDDN5_212_3.png" /> DATCAY XANH DVO<br />\
    <img src="styles/legend/SDDN5_212_4.png" /> DATCAYXANH CLY<br />\
    <img src="styles/legend/SDDN5_212_5.png" /> DATCAYXANH TP<br />\
    <img src="styles/legend/SDDN5_212_6.png" /> DATCC DOTHI<br />\
    <img src="styles/legend/SDDN5_212_7.png" /> DATCC DVO<br />\
    <img src="styles/legend/SDDN5_212_8.png" /> DATCC TP<br />\
    <img src="styles/legend/SDDN5_212_9.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDN5_212_10.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDN5_212_11.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDN5_212_12.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDN5_212_13.png" /> DATKHOTANGBENBAI<br />\
    <img src="styles/legend/SDDN5_212_14.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDN5_212_15.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDN5_212_16.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDN5_212_17.png" /> H-TRUONGHOC<br />\
    <img src="styles/legend/SDDN5_212_18.png" /> KIHIEU<br />\
    <img src="styles/legend/SDDN5_212_19.png" /> KYHIEU<br />\
    <img src="styles/legend/SDDN5_212_20.png" /> <br />' });
var format_SDDN4_213 = new ol.format.GeoJSON();
var features_SDDN4_213 = format_SDDN4_213.readFeatures(json_SDDN4_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDN4_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDN4_213.addFeatures(features_SDDN4_213);
var lyr_SDDN4_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDN4_213, 
                style: style_SDDN4_213,
                popuplayertitle: 'SDD N4',
                interactive: true,
    title: 'SDD N4<br />\
    <img src="styles/legend/SDDN4_213_0.png" /> @_O Moi<br />\
    <img src="styles/legend/SDDN4_213_1.png" /> +camxaydung<br />\
    <img src="styles/legend/SDDN4_213_2.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDN4_213_3.png" /> H_Coquan<br />\
    <img src="styles/legend/SDDN4_213_4.png" /> H-CAYXANH-KHUVUC<br />\
    <img src="styles/legend/SDDN4_213_5.png" /> H-cayxanhcachly<br />\
    <img src="styles/legend/SDDN4_213_6.png" /> H-cayxanhdonvio<br />\
    <img src="styles/legend/SDDN4_213_7.png" /> H-CAYXANHTHANHPHO<br />\
    <img src="styles/legend/SDDN4_213_8.png" /> H-CCTP<br />\
    <img src="styles/legend/SDDN4_213_9.png" /> H-congcongDVO<br />\
    <img src="styles/legend/SDDN4_213_10.png" /> H-congcongkhuvuc<br />\
    <img src="styles/legend/SDDN4_213_11.png" /> H-congnghiep<br />\
    <img src="styles/legend/SDDN4_213_12.png" /> H-DANDAN<br />\
    <img src="styles/legend/SDDN4_213_13.png" /> H-dtich<br />\
    <img src="styles/legend/SDDN4_213_14.png" /> H-hatang<br />\
    <img src="styles/legend/SDDN4_213_15.png" /> H-langxom2<br />\
    <img src="styles/legend/SDDN4_213_16.png" /> H-matnuoc<br />\
    <img src="styles/legend/SDDN4_213_17.png" /> H-nha o<br />\
    <img src="styles/legend/SDDN4_213_18.png" /> H-TH_giaoduc<br />\
    <img src="styles/legend/SDDN4_213_19.png" /> KIHIEU<br />\
    <img src="styles/legend/SDDN4_213_20.png" /> KYHIEU<br />\
    <img src="styles/legend/SDDN4_213_21.png" /> nut<br />\
    <img src="styles/legend/SDDN4_213_22.png" /> <br />' });
var format_SDDN3_214 = new ol.format.GeoJSON();
var features_SDDN3_214 = format_SDDN3_214.readFeatures(json_SDDN3_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDN3_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDN3_214.addFeatures(features_SDDN3_214);
var lyr_SDDN3_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDN3_214, 
                style: style_SDDN3_214,
                popuplayertitle: 'SDD N3',
                interactive: true,
    title: 'SDD N3<br />\
    <img src="styles/legend/SDDN3_214_0.png" /> 0<br />\
    <img src="styles/legend/SDDN3_214_1.png" /> 2-h o lxom-do thi<br />\
    <img src="styles/legend/SDDN3_214_2.png" /> DATCC DOTHI<br />\
    <img src="styles/legend/SDDN3_214_3.png" /> DATCC TP<br />\
    <img src="styles/legend/SDDN3_214_4.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDN3_214_5.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDN3_214_6.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDN3_214_7.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDN3_214_8.png" /> DATTH-NT<br />\
    <img src="styles/legend/SDDN3_214_9.png" /> H_Coquan<br />\
    <img src="styles/legend/SDDN3_214_10.png" /> H-CAYXANH-KHUVUC<br />\
    <img src="styles/legend/SDDN3_214_11.png" /> H-cayxanhcachly<br />\
    <img src="styles/legend/SDDN3_214_12.png" /> H-cayxanhdonvio<br />\
    <img src="styles/legend/SDDN3_214_13.png" /> H-cx canh quan<br />\
    <img src="styles/legend/SDDN3_214_14.png" /> H-hatang<br />\
    <img src="styles/legend/SDDN3_214_15.png" /> H-matnuoc<br />\
    <img src="styles/legend/SDDN3_214_16.png" /> H-nha o<br />\
    <img src="styles/legend/SDDN3_214_17.png" /> <br />' });
var format_SDDN2_215 = new ol.format.GeoJSON();
var features_SDDN2_215 = format_SDDN2_215.readFeatures(json_SDDN2_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDN2_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDN2_215.addFeatures(features_SDDN2_215);
var lyr_SDDN2_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDN2_215, 
                style: style_SDDN2_215,
                popuplayertitle: 'SDD N2',
                interactive: true,
    title: 'SDD N2<br />\
    <img src="styles/legend/SDDN2_215_0.png" /> @- DAT CAY XANH CANH QUAN<br />\
    <img src="styles/legend/SDDN2_215_1.png" /> 2.dien tu -det may<br />\
    <img src="styles/legend/SDDN2_215_2.png" /> 3.thuc pham-hoaduoc<br />\
    <img src="styles/legend/SDDN2_215_3.png" /> 4-hach dtht<br />\
    <img src="styles/legend/SDDN2_215_4.png" /> 4.det may<br />\
    <img src="styles/legend/SDDN2_215_5.png" /> DATCAY XANH DVO<br />\
    <img src="styles/legend/SDDN2_215_6.png" /> DATCAYXANHCLY<br />\
    <img src="styles/legend/SDDN2_215_7.png" /> DATCC DOTHI<br />\
    <img src="styles/legend/SDDN2_215_8.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDN2_215_9.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDN2_215_10.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDN2_215_11.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDN2_215_12.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDN2_215_13.png" /> DATKHOTANGBENBAI<br />\
    <img src="styles/legend/SDDN2_215_14.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDN2_215_15.png" /> H-TRUONGHOC<br />\
    <img src="styles/legend/SDDN2_215_16.png" /> hatchcau<br />\
    <img src="styles/legend/SDDN2_215_17.png" /> sdd_cc_YTE<br />\
    <img src="styles/legend/SDDN2_215_18.png" /> sdd_CX_cachli<br />\
    <img src="styles/legend/SDDN2_215_19.png" /> sdd_CX_congvien<br />\
    <img src="styles/legend/SDDN2_215_20.png" /> sdd_CX_DVO<br />\
    <img src="styles/legend/SDDN2_215_21.png" /> sdd_CX_tronghoa<br />\
    <img src="styles/legend/SDDN2_215_22.png" /> sdd_DATO_sinhthai<br />\
    <img src="styles/legend/SDDN2_215_23.png" /> sdd_DIAPHUONG<br />\
    <img src="styles/legend/SDDN2_215_24.png" /> sdd_DIDAN<br />\
    <img src="styles/legend/SDDN2_215_25.png" /> sdd_DITICH<br />\
    <img src="styles/legend/SDDN2_215_26.png" /> sdd_HO<br />\
    <img src="styles/legend/SDDN2_215_27.png" /> sdd_HTKT<br />\
    <img src="styles/legend/SDDN2_215_28.png" /> sdd_truong_THCS<br />\
    <img src="styles/legend/SDDN2_215_29.png" /> Tron ten o dat<br />\
    <img src="styles/legend/SDDN2_215_30.png" /> <br />' });
var format_SDDN1_216 = new ol.format.GeoJSON();
var features_SDDN1_216 = format_SDDN1_216.readFeatures(json_SDDN1_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDN1_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDN1_216.addFeatures(features_SDDN1_216);
var lyr_SDDN1_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDN1_216, 
                style: style_SDDN1_216,
                popuplayertitle: 'SDD N1',
                interactive: true,
    title: 'SDD N1<br />\
    <img src="styles/legend/SDDN1_216_0.png" /> 0<br />\
    <img src="styles/legend/SDDN1_216_1.png" /> H_AN_QP<br />\
    <img src="styles/legend/SDDN1_216_2.png" /> H_Congcong<br />\
    <img src="styles/legend/SDDN1_216_3.png" /> H_Congnghiep<br />\
    <img src="styles/legend/SDDN1_216_4.png" /> H_Coquan<br />\
    <img src="styles/legend/SDDN1_216_5.png" /> H_DITICH<br />\
    <img src="styles/legend/SDDN1_216_6.png" /> H_langxom<br />\
    <img src="styles/legend/SDDN1_216_7.png" /> H_TH_giaoduc<br />\
    <img src="styles/legend/SDDN1_216_8.png" /> H-CAYXANH-KHUVUC<br />\
    <img src="styles/legend/SDDN1_216_9.png" /> H-cayxanhcachly<br />\
    <img src="styles/legend/SDDN1_216_10.png" /> H-cayxanhDVO<br />\
    <img src="styles/legend/SDDN1_216_11.png" /> H-CAYXANHTHANHPHO<br />\
    <img src="styles/legend/SDDN1_216_12.png" /> H-CCTP<br />\
    <img src="styles/legend/SDDN1_216_13.png" /> H-congcongkhuvuc<br />\
    <img src="styles/legend/SDDN1_216_14.png" /> H-dathonhop<br />\
    <img src="styles/legend/SDDN1_216_15.png" /> H-datothaptang<br />\
    <img src="styles/legend/SDDN1_216_16.png" /> H-hatang<br />\
    <img src="styles/legend/SDDN1_216_17.png" /> H-matnuoc<br />\
    <img src="styles/legend/SDDN1_216_18.png" /> <br />' });
var format_SDDH24_217 = new ol.format.GeoJSON();
var features_SDDH24_217 = format_SDDH24_217.readFeatures(json_SDDH24_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDH24_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDH24_217.addFeatures(features_SDDH24_217);
var lyr_SDDH24_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDH24_217, 
                style: style_SDDH24_217,
                popuplayertitle: 'SDD H2-4',
                interactive: true,
    title: 'SDD H2-4<br />\
    <img src="styles/legend/SDDH24_217_0.png" /> BO<br />\
    <img src="styles/legend/SDDH24_217_1.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDH24_217_2.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDH24_217_3.png" /> H-AN_QP<br />\
    <img src="styles/legend/SDDH24_217_4.png" /> H-CAYXANH-KHUVUC<br />\
    <img src="styles/legend/SDDH24_217_5.png" /> H-cayxanhcachly<br />\
    <img src="styles/legend/SDDH24_217_6.png" /> H-cayxanhDVO<br />\
    <img src="styles/legend/SDDH24_217_7.png" /> H-CAYXANHTHANHPHO<br />\
    <img src="styles/legend/SDDH24_217_8.png" /> h-ccTP<br />\
    <img src="styles/legend/SDDH24_217_9.png" /> H-Congcong DVO<br />\
    <img src="styles/legend/SDDH24_217_10.png" /> H-congcongkhuvuc<br />\
    <img src="styles/legend/SDDH24_217_11.png" /> H-Coquan<br />\
    <img src="styles/legend/SDDH24_217_12.png" /> H-dat o moi<br />\
    <img src="styles/legend/SDDH24_217_13.png" /> H-dathonhop<br />\
    <img src="styles/legend/SDDH24_217_14.png" /> H-datohienco<br />\
    <img src="styles/legend/SDDH24_217_15.png" /> H-DITICH<br />\
    <img src="styles/legend/SDDH24_217_16.png" /> H-langxom<br />\
    <img src="styles/legend/SDDH24_217_17.png" /> H-matnuoc<br />\
    <img src="styles/legend/SDDH24_217_18.png" /> H-TH_giaoduc<br />\
    <img src="styles/legend/SDDH24_217_19.png" /> HATCH<br />\
    <img src="styles/legend/SDDH24_217_20.png" /> <br />' });
var format_SDDH23_218 = new ol.format.GeoJSON();
var features_SDDH23_218 = format_SDDH23_218.readFeatures(json_SDDH23_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDH23_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDH23_218.addFeatures(features_SDDH23_218);
var lyr_SDDH23_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDH23_218, 
                style: style_SDDH23_218,
                popuplayertitle: 'SDD H2-3',
                interactive: true,
    title: 'SDD H2-3<br />\
    <img src="styles/legend/SDDH23_218_0.png" /> !phamviga<br />\
    <img src="styles/legend/SDDH23_218_1.png" /> @cxdonvio<br />\
    <img src="styles/legend/SDDH23_218_2.png" /> 1_DUONG PKV<br />\
    <img src="styles/legend/SDDH23_218_3.png" /> 2-h ton giao<br />\
    <img src="styles/legend/SDDH23_218_4.png" /> CACHLY<br />\
    <img src="styles/legend/SDDH23_218_5.png" /> cong thoat nuoc thai<br />\
    <img src="styles/legend/SDDH23_218_6.png" /> DAT_CAYXANH<br />\
    <img src="styles/legend/SDDH23_218_7.png" /> H_Congcong<br />\
    <img src="styles/legend/SDDH23_218_8.png" /> H_DITICH<br />\
    <img src="styles/legend/SDDH23_218_9.png" /> H_Odothi<br />\
    <img src="styles/legend/SDDH23_218_10.png" /> H_TH_giaoduc<br />\
    <img src="styles/legend/SDDH23_218_11.png" /> H-CAYXANHTHANHPHO<br />\
    <img src="styles/legend/SDDH23_218_12.png" /> h-ccTP<br />\
    <img src="styles/legend/SDDH23_218_13.png" /> H-congcongkhuvuc<br />\
    <img src="styles/legend/SDDH23_218_14.png" /> h-coquan<br />\
    <img src="styles/legend/SDDH23_218_15.png" /> H-CXKV<br />\
    <img src="styles/legend/SDDH23_218_16.png" /> H-dathonhop<br />\
    <img src="styles/legend/SDDH23_218_17.png" /> h-dato<br />\
    <img src="styles/legend/SDDH23_218_18.png" /> H-HATANG<br />\
    <img src="styles/legend/SDDH23_218_19.png" /> H-LANGXOM<br />\
    <img src="styles/legend/SDDH23_218_20.png" /> H-matnuoc<br />\
    <img src="styles/legend/SDDH23_218_21.png" /> h-quocphong<br />\
    <img src="styles/legend/SDDH23_218_22.png" /> HAT<br />\
    <img src="styles/legend/SDDH23_218_23.png" /> HATCH<br />\
    <img src="styles/legend/SDDH23_218_24.png" /> KIHIEU<br />\
    <img src="styles/legend/SDDH23_218_25.png" /> SDD_CT<br />\
    <img src="styles/legend/SDDH23_218_26.png" /> SDD_DX<br />\
    <img src="styles/legend/SDDH23_218_27.png" /> <br />' });
var format_SDDH22_219 = new ol.format.GeoJSON();
var features_SDDH22_219 = format_SDDH22_219.readFeatures(json_SDDH22_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDH22_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDH22_219.addFeatures(features_SDDH22_219);
var lyr_SDDH22_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDH22_219, 
                style: style_SDDH22_219,
                popuplayertitle: 'SDD H2-2',
                interactive: true,
    title: 'SDD H2-2<br />\
    <img src="styles/legend/SDDH22_219_0.png" /> !!! BO-LODAT<br />\
    <img src="styles/legend/SDDH22_219_1.png" /> DATCAYXANHCLY<br />\
    <img src="styles/legend/SDDH22_219_2.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDH22_219_3.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDH22_219_4.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDH22_219_5.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDH22_219_6.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDH22_219_7.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDH22_219_8.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDH22_219_9.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDH22_219_10.png" /> DATO<br />\
    <img src="styles/legend/SDDH22_219_11.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDH22_219_12.png" /> DATTH-NT<br />\
    <img src="styles/legend/SDDH22_219_13.png" /> H-CAYXANH-KHUVUC<br />\
    <img src="styles/legend/SDDH22_219_14.png" /> H-CAYXANHTHANHPHO<br />\
    <img src="styles/legend/SDDH22_219_15.png" /> H-CCTP<br />\
    <img src="styles/legend/SDDH22_219_16.png" /> <br />' });
var format_SDDH21_220 = new ol.format.GeoJSON();
var features_SDDH21_220 = format_SDDH21_220.readFeatures(json_SDDH21_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDH21_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDH21_220.addFeatures(features_SDDH21_220);
var lyr_SDDH21_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDH21_220, 
                style: style_SDDH21_220,
                popuplayertitle: 'SDD H2-1',
                interactive: true,
    title: 'SDD H2-1<br />\
    <img src="styles/legend/SDDH21_220_0.png" /> BO-LODAT<br />\
    <img src="styles/legend/SDDH21_220_1.png" /> DATCAYXANH<br />\
    <img src="styles/legend/SDDH21_220_2.png" /> DATCAYXANHCLY<br />\
    <img src="styles/legend/SDDH21_220_3.png" /> DATCAYXANHDVO<br />\
    <img src="styles/legend/SDDH21_220_4.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDH21_220_5.png" /> DATCCTP<br />\
    <img src="styles/legend/SDDH21_220_6.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDH21_220_7.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDH21_220_8.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDH21_220_9.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDH21_220_10.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDH21_220_11.png" /> DATLANGXOM<br />\
    <img src="styles/legend/SDDH21_220_12.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDH21_220_13.png" /> DATO<br />\
    <img src="styles/legend/SDDH21_220_14.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDH21_220_15.png" /> DATTH-NT<br />\
    <img src="styles/legend/SDDH21_220_16.png" /> KHUNG500<br />\
    <img src="styles/legend/SDDH21_220_17.png" /> <br />' });
var format_SDDH14_221 = new ol.format.GeoJSON();
var features_SDDH14_221 = format_SDDH14_221.readFeatures(json_SDDH14_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDH14_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDH14_221.addFeatures(features_SDDH14_221);
var lyr_SDDH14_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDH14_221, 
                style: style_SDDH14_221,
                popuplayertitle: 'SDD H1-4',
                interactive: true,
    title: 'SDD H1-4<br />\
    <img src="styles/legend/SDDH14_221_0.png" /> 1_cau vuot<br />\
    <img src="styles/legend/SDDH14_221_1.png" /> C1<br />\
    <img src="styles/legend/SDDH14_221_2.png" /> C2<br />\
    <img src="styles/legend/SDDH14_221_3.png" /> C3<br />\
    <img src="styles/legend/SDDH14_221_4.png" /> DAT NT-MG<br />\
    <img src="styles/legend/SDDH14_221_5.png" /> DATCAYXANH<br />\
    <img src="styles/legend/SDDH14_221_6.png" /> DATCCDVO<br />\
    <img src="styles/legend/SDDH14_221_7.png" /> DATCCTP<br />\
    <img src="styles/legend/SDDH14_221_8.png" /> DATCOQUAN<br />\
    <img src="styles/legend/SDDH14_221_9.png" /> DATDITICH<br />\
    <img src="styles/legend/SDDH14_221_10.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDH14_221_11.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDH14_221_12.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDH14_221_13.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDH14_221_14.png" /> DATO<br />\
    <img src="styles/legend/SDDH14_221_15.png" /> DATOTHAPTANG<br />\
    <img src="styles/legend/SDDH14_221_16.png" /> DATQUANSU<br />\
    <img src="styles/legend/SDDH14_221_17.png" /> Khu vuc Du an Rieng<br />\
    <img src="styles/legend/SDDH14_221_18.png" /> <br />' });
var format_SDDH13_222 = new ol.format.GeoJSON();
var features_SDDH13_222 = format_SDDH13_222.readFeatures(json_SDDH13_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDH13_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDH13_222.addFeatures(features_SDDH13_222);
var lyr_SDDH13_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDH13_222, 
                style: style_SDDH13_222,
                popuplayertitle: 'SDD H1-3',
                interactive: true,
    title: 'SDD H1-3<br />\
    <img src="styles/legend/SDDH13_222_0.png" /> !phamviga<br />\
    <img src="styles/legend/SDDH13_222_1.png" /> 1_cau vuot<br />\
    <img src="styles/legend/SDDH13_222_2.png" /> 2_HACH TREN CAO<br />\
    <img src="styles/legend/SDDH13_222_3.png" /> Bo via-Q<br />\
    <img src="styles/legend/SDDH13_222_4.png" /> ĐẤT NGOẠI GIAO<br />\
    <img src="styles/legend/SDDH13_222_5.png" /> DATCAYXANHCLY<br />\
    <img src="styles/legend/SDDH13_222_6.png" /> DATDOXE<br />\
    <img src="styles/legend/SDDH13_222_7.png" /> DATHONHOP<br />\
    <img src="styles/legend/SDDH13_222_8.png" /> DATHONHOP @ 1<br />\
    <img src="styles/legend/SDDH13_222_9.png" /> DATHTKT<br />\
    <img src="styles/legend/SDDH13_222_10.png" /> DATMATNUOC<br />\
    <img src="styles/legend/SDDH13_222_11.png" /> GT_text_ghi_chu<br />\
    <img src="styles/legend/SDDH13_222_12.png" /> H_Coquan<br />\
    <img src="styles/legend/SDDH13_222_13.png" /> H_DITICH<br />\
    <img src="styles/legend/SDDH13_222_14.png" /> H_Odothi<br />\
    <img src="styles/legend/SDDH13_222_15.png" /> H-CAYXANH-KHUVUC<br />\
    <img src="styles/legend/SDDH13_222_16.png" /> H-cayxanhDVO<br />\
    <img src="styles/legend/SDDH13_222_17.png" /> H-CAYXANHTHANHPHO<br />\
    <img src="styles/legend/SDDH13_222_18.png" /> H-congcongkhuvuc<br />\
    <img src="styles/legend/SDDH13_222_19.png" /> H-datohienco<br />\
    <img src="styles/legend/SDDH13_222_20.png" /> H-matnuoc<br />\
    <img src="styles/legend/SDDH13_222_21.png" /> h-quocphong<br />\
    <img src="styles/legend/SDDH13_222_22.png" /> HATCH CC DVO<br />\
    <img src="styles/legend/SDDH13_222_23.png" /> HATCH-PK GA<br />\
    <img src="styles/legend/SDDH13_222_24.png" /> kega_REV<br />\
    <img src="styles/legend/SDDH13_222_25.png" /> SDD_DatMatNuoc<br />\
    <img src="styles/legend/SDDH13_222_26.png" /> SDD_TH<br />\
    <img src="styles/legend/SDDH13_222_27.png" /> <br />' });
var format_SDDH12_223 = new ol.format.GeoJSON();
var features_SDDH12_223 = format_SDDH12_223.readFeatures(json_SDDH12_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDH12_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDH12_223.addFeatures(features_SDDH12_223);
var lyr_SDDH12_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDH12_223, 
                style: style_SDDH12_223,
                popuplayertitle: 'SDD H1-2',
                interactive: true,
    title: 'SDD H1-2<br />\
    <img src="styles/legend/SDDH12_223_0.png" /> H-PK GA<br />\
    <img src="styles/legend/SDDH12_223_1.png" /> Khu vuc Du an Rieng<br />\
    <img src="styles/legend/SDDH12_223_2.png" /> SDD_DatANQP<br />\
    <img src="styles/legend/SDDH12_223_3.png" /> SDD_DatCCDothi<br />\
    <img src="styles/legend/SDDH12_223_4.png" /> SDD_DatCCDVO<br />\
    <img src="styles/legend/SDDH12_223_5.png" /> SDD_DatCongTrinhHTKT<br />\
    <img src="styles/legend/SDDH12_223_6.png" /> SDD_DatCQ-VienNC-TruongDT<br />\
    <img src="styles/legend/SDDH12_223_7.png" /> SDD_DatCXDoThi<br />\
    <img src="styles/legend/SDDH12_223_8.png" /> SDD_DatCXDVO<br />\
    <img src="styles/legend/SDDH12_223_9.png" /> SDD_DatCXDVO @ 1<br />\
    <img src="styles/legend/SDDH12_223_10.png" /> SDD_DatDancu_HC<br />\
    <img src="styles/legend/SDDH12_223_11.png" /> SDD_DatDancu_HC @ 1<br />\
    <img src="styles/legend/SDDH12_223_12.png" /> SDD_DatDiTich-Ton Giao<br />\
    <img src="styles/legend/SDDH12_223_13.png" /> SDD_DatHonHop<br />\
    <img src="styles/legend/SDDH12_223_14.png" /> SDD_DatHonHop @ 1<br />\
    <img src="styles/legend/SDDH12_223_15.png" /> SDD_DatHTKT_BaiDoXe<br />\
    <img src="styles/legend/SDDH12_223_16.png" /> SDD_DatMatNuoc<br />\
    <img src="styles/legend/SDDH12_223_17.png" /> SDD_DatMatNuoc @ 1<br />\
    <img src="styles/legend/SDDH12_223_18.png" /> SDD_DatNG<br />\
    <img src="styles/legend/SDDH12_223_19.png" /> SDD_DatODT<br />\
    <img src="styles/legend/SDDH12_223_20.png" /> SDD_Datruonghoc_THCS<br />' });
var format_SDDA6_224 = new ol.format.GeoJSON();
var features_SDDA6_224 = format_SDDA6_224.readFeatures(json_SDDA6_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDDA6_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDDA6_224.addFeatures(features_SDDA6_224);
var lyr_SDDA6_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDDA6_224, 
                style: style_SDDA6_224,
                popuplayertitle: 'SDD A6',
                interactive: true,
    title: 'SDD A6<br />\
    <img src="styles/legend/SDDA6_224_0.png" /> dat cndvo<br />\
    <img src="styles/legend/SDDA6_224_1.png" /> DATCAYXANHCLY<br />\
    <img src="styles/legend/SDDA6_224_2.png" /> DATDUTRUPT<br />\
    <img src="styles/legend/SDDA6_224_3.png" /> Di Tich<br />\
    <img src="styles/legend/SDDA6_224_4.png" /> H_AN_QP<br />\
    <img src="styles/legend/SDDA6_224_5.png" /> H_Congcong<br />\
    <img src="styles/legend/SDDA6_224_6.png" /> H_Coquan<br />\
    <img src="styles/legend/SDDA6_224_7.png" /> H_langxom<br />\
    <img src="styles/legend/SDDA6_224_8.png" /> H_TH_giaoduc<br />\
    <img src="styles/legend/SDDA6_224_9.png" /> H-CAYXANHTHANHPHO<br />\
    <img src="styles/legend/SDDA6_224_10.png" /> H-CCTP<br />\
    <img src="styles/legend/SDDA6_224_11.png" /> H-dathonhop<br />\
    <img src="styles/legend/SDDA6_224_12.png" /> H-datothaptang<br />\
    <img src="styles/legend/SDDA6_224_13.png" /> H-hatang<br />\
    <img src="styles/legend/SDDA6_224_14.png" /> H-matnuoc<br />' });
var group_QHPK = new ol.layer.Group({
                                layers: [lyr_SDDSonTay_198,lyr_SDDS5_199,lyr_SDDS4_200,lyr_SDDS3_201,lyr_SDDS2_202,lyr_SDDS1_203,lyr_SDDPKR_204,lyr_SDDPhuctho_205,lyr_SDDN11_206,lyr_SDDN10_207,lyr_SDDN9_208,lyr_SDDN8_209,lyr_SDDN7_210,lyr_SDDN6_211,lyr_SDDN5_212,lyr_SDDN4_213,lyr_SDDN3_214,lyr_SDDN2_215,lyr_SDDN1_216,lyr_SDDH24_217,lyr_SDDH23_218,lyr_SDDH22_219,lyr_SDDH21_220,lyr_SDDH14_221,lyr_SDDH13_222,lyr_SDDH12_223,lyr_SDDA6_224,],
                                fold: 'close',
                                title: 'QH PK'});
var group_QH519 = new ol.layer.Group({
                                layers: [lyr_MangluoiQH519_182,lyr_QH519Depot_183,lyr_QH519Ga_184,lyr_tuyen_M3_185,lyr_tuyen_M2_186,lyr_tuyen_M1_187,lyr_tuyen_VT_188,lyr_tuyen_8_189,lyr_tuyen_7_190,lyr_tuyen_6_191,lyr_tuyen_5_192,lyr_tuyen_4_193,lyr_tuyen_3_194,lyr_tuyen_2A_195,lyr_tuyen_2_196,lyr_tuyen_1_197,],
                                fold: 'close',
                                title: 'QH 519'});
var group_QH1668 = new ol.layer.Group({
                                layers: [lyr_T12_168,lyr_T11_169,lyr_T10_170,lyr_T9_171,lyr_T8_172,lyr_T7_173,lyr_T6_174,lyr_T5_175,lyr_T4_176,lyr_T3_177,lyr_T2A_178,lyr_T2_179,lyr_T1A_180,lyr_T1_181,],
                                fold: 'open',
                                title: 'QH1668'});
var group_RasoatSXD03022026 = new ol.layer.Group({
                                layers: [lyr_MangluoiRasoatSXD_153,lyr_Layer_CcTuynmi_154,lyr_Layer_Tuyn12_155,lyr_Layer_Tuyn11_156,lyr_Layer_Tuyn10_157,lyr_Layer_Tuyn9_158,lyr_Layer_Tuyn8_159,lyr_Layer_Tuyn7_160,lyr_Layer_Tuyn6_161,lyr_Layer_Tuyn5_162,lyr_Layer_Tuyn4_163,lyr_Layer_Tuyn3_164,lyr_Layer_Tuyn2A_165,lyr_Layer_Tuyn2_166,lyr_Layer_Tuyn1_167,],
                                fold: 'close',
                                title: 'Ra soat SXD (03-02-2026)'});
var group_RasoatSXD04032026 = new ol.layer.Group({
                                layers: [lyr_DSQG_131,lyr_Duongsatvung_132,lyr_Depot_133,lyr_PLine_17_134,lyr_PLine_16_135,lyr_PLine_15_136,lyr_PLine_14_137,lyr_PLine_13_138,lyr_PLine_12_139,lyr_PLine_11_140,lyr_PLine_10_141,lyr_PLine_9_142,lyr_PLine_8_143,lyr_PLine_7_144,lyr_PLine_6_145,lyr_PLine_5_146,lyr_PLine_4_147,lyr_PLine_3_148,lyr_PLine_2A_149,lyr_PLine_2_150,lyr_PLine_1_151,lyr_All_152,],
                                fold: 'close',
                                title: 'Ra soat SXD (04-03-2026)'});
var group_QH100nam07022026 = new ol.layer.Group({
                                layers: [lyr_QH100Tuyen16_119,lyr_QH100Tuyen14_120,lyr_QH100Tuyen9_121,lyr_QH100Tuyen8_122,lyr_QH100Tuyen7_123,lyr_QH100Tuyen6_124,lyr_QH100Tuyen5_125,lyr_QH100Tuyen4_126,lyr_QH100Tuyen3_127,lyr_QH100Tuyen2A_128,lyr_QH100Tuyen2_129,lyr_QH100Tuyen1_130,],
                                fold: 'close',
                                title: 'QH 100nam (07-02-2026)'});
var group_QH100nam10022026 = new ol.layer.Group({
                                layers: [lyr_QH100Ga_99,lyr_QH100Monorail_100,lyr_QH100dsDT_101,lyr_QH100DSDT17_102,lyr_QH100DSDT16_103,lyr_QH100DSDT15_104,lyr_QH100DSDT12_105,lyr_QH100DSDT11_106,lyr_QH100DSDT10_107,lyr_QH100DSDT9_108,lyr_QH100DSDT8_109,lyr_QH100DSDT7_110,lyr_QH100DSDT6_111,lyr_QH100DSDT5_112,lyr_QH100DSDT4_113,lyr_QH100DSDT3_114,lyr_QH100DSDT2A_115,lyr_QH100DSDT2_116,lyr_QH100DSDT1_117,lyr_QH100DSQG_Thuong2050_118,],
                                fold: 'close',
                                title: 'QH 100nam (10-02-2026)'});
var group_QH100namxcangT12032026 = new ol.layer.Group({
                                layers: [lyr_Monorail_80,lyr_DSDT16_81,lyr_DSDT15_82,lyr_DSDT10_83,lyr_DSDT9_84,lyr_DSDT8_85,lyr_DSDT7_86,lyr_DSDT6_87,lyr_DSDT5_88,lyr_DSDT4_89,lyr_DSDT3_90,lyr_DSDT2A_91,lyr_DSDT2_92,lyr_DSDT1_93,lyr_4Railway_94,lyr_3LRTORBRTM17_95,lyr_3LRTORBRTM13_96,lyr_1ExpressLineM8_97,lyr_Ga_98,],
                                fold: 'close',
                                title: 'QH 100nam - Đx của Đồng Tế (12-03-2026)'});
var group_QH100sauhpChnhph13032026 = new ol.layer.Group({
                                layers: [lyr_nearbyProvince_53,lyr_nearbyProvince_54,lyr_03commuterLine_55,lyr_02interCity_56,lyr_01highSpeed_57,lyr_7railwaystation2secondary_58,lyr_6airport_59,lyr_4Railway_60,lyr_4BRTM18_61,lyr_4BRTM17_62,lyr_4BRTM12_63,lyr_3LRTM15_64,lyr_3LRTM13_65,lyr_3LRTM9_66,lyr_2RegularLineM16_67,lyr_2RegularLineM14_68,lyr_2RegularLineM11_69,lyr_2RegularLineM10_70,lyr_2RegularLineM7_71,lyr_2RegularLineM6_72,lyr_2RegularLineM5_73,lyr_2RegularLineM4_74,lyr_2RegularLineM3_75,lyr_2RegularLineM2_76,lyr_2RegularLine2A_77,lyr_1ExpressLineM8_78,lyr_1ExpressLineM1_79,],
                                fold: 'close',
                                title: 'QH100 sau họp Chính phủ (13-03-2026)'});
var group_QH100HUPI260406 = new ol.layer.Group({
                                layers: [lyr_QH100HUPI260406polylines_24,lyr_layer_DCaotoc_25,lyr_layer_DPcCaotoc_26,lyr_layer_ketnoidsdt_27,lyr_layer_4Railwaywhite_28,lyr_layer_4Railway_29,lyr_layer_SQG_Thng2050_30,lyr_layer_Dduongsattocdocao_31,lyr_layer_Monorail_32,lyr_layer_4BRTM18_33,lyr_layer_DSDT_17_34,lyr_layer_DSDT_16_35,lyr_layer_DSDT_15_36,lyr_layer_DSDT_13_37,lyr_layer_DSDT12_38,lyr_layer_DSDT_11_39,lyr_layer_DSDT10_40,lyr_layer_DSDT9_41,lyr_layer_DSDT8_42,lyr_layer_DSDT7_43,lyr_layer_DSDT6_44,lyr_layer_DSDT5_45,lyr_layer_DSDT4_46,lyr_layer_DSDT3_47,lyr_layer_DSDT2A_48,lyr_layer_DSDT2_49,lyr_layer_DSDT1_50,lyr_layer_02interCity_51,lyr_Ga_52,],
                                fold: 'open',
                                title: 'QH100 - HUPI 260406'});
var group_260406AREP_Proposallines_v2 = new ol.layer.Group({
                                layers: [lyr_layer_M16_7,lyr_layer_M15_8,lyr_layer_M14_9,lyr_layer_M13_10,lyr_layer_M12_11,lyr_layer_M11_12,lyr_layer_M10_13,lyr_layer_M09_14,lyr_layer_M08_15,lyr_layer_M07_16,lyr_layer_M06_17,lyr_layer_M05_18,lyr_layer_M04_19,lyr_layer_M03_20,lyr_layer_M02A_21,lyr_layer_M02_22,lyr_layer_M01_23,],
                                fold: 'close',
                                title: '260406 AREP_Proposal lines_v2'});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleTraffic_1.setVisible(false);lyr_GoogleTerrain_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(false);lyr_GoogleRoad_4.setVisible(true);lyr_GoogleLabels_5.setVisible(false);lyr_GoogleHybrid_6.setVisible(false);lyr_layer_M16_7.setVisible(false);lyr_layer_M15_8.setVisible(false);lyr_layer_M14_9.setVisible(false);lyr_layer_M13_10.setVisible(false);lyr_layer_M12_11.setVisible(false);lyr_layer_M11_12.setVisible(false);lyr_layer_M10_13.setVisible(false);lyr_layer_M09_14.setVisible(false);lyr_layer_M08_15.setVisible(false);lyr_layer_M07_16.setVisible(false);lyr_layer_M06_17.setVisible(false);lyr_layer_M05_18.setVisible(false);lyr_layer_M04_19.setVisible(false);lyr_layer_M03_20.setVisible(false);lyr_layer_M02A_21.setVisible(false);lyr_layer_M02_22.setVisible(false);lyr_layer_M01_23.setVisible(false);lyr_QH100HUPI260406polylines_24.setVisible(false);lyr_layer_DCaotoc_25.setVisible(false);lyr_layer_DPcCaotoc_26.setVisible(false);lyr_layer_ketnoidsdt_27.setVisible(false);lyr_layer_4Railwaywhite_28.setVisible(false);lyr_layer_4Railway_29.setVisible(false);lyr_layer_SQG_Thng2050_30.setVisible(false);lyr_layer_Dduongsattocdocao_31.setVisible(false);lyr_layer_Monorail_32.setVisible(false);lyr_layer_4BRTM18_33.setVisible(false);lyr_layer_DSDT_17_34.setVisible(false);lyr_layer_DSDT_16_35.setVisible(false);lyr_layer_DSDT_15_36.setVisible(false);lyr_layer_DSDT_13_37.setVisible(false);lyr_layer_DSDT12_38.setVisible(false);lyr_layer_DSDT_11_39.setVisible(false);lyr_layer_DSDT10_40.setVisible(false);lyr_layer_DSDT9_41.setVisible(false);lyr_layer_DSDT8_42.setVisible(false);lyr_layer_DSDT7_43.setVisible(false);lyr_layer_DSDT6_44.setVisible(false);lyr_layer_DSDT5_45.setVisible(false);lyr_layer_DSDT4_46.setVisible(false);lyr_layer_DSDT3_47.setVisible(false);lyr_layer_DSDT2A_48.setVisible(false);lyr_layer_DSDT2_49.setVisible(false);lyr_layer_DSDT1_50.setVisible(false);lyr_layer_02interCity_51.setVisible(false);lyr_Ga_52.setVisible(false);lyr_nearbyProvince_53.setVisible(false);lyr_nearbyProvince_54.setVisible(false);lyr_03commuterLine_55.setVisible(false);lyr_02interCity_56.setVisible(false);lyr_01highSpeed_57.setVisible(false);lyr_7railwaystation2secondary_58.setVisible(false);lyr_6airport_59.setVisible(false);lyr_4Railway_60.setVisible(false);lyr_4BRTM18_61.setVisible(false);lyr_4BRTM17_62.setVisible(false);lyr_4BRTM12_63.setVisible(false);lyr_3LRTM15_64.setVisible(false);lyr_3LRTM13_65.setVisible(false);lyr_3LRTM9_66.setVisible(false);lyr_2RegularLineM16_67.setVisible(false);lyr_2RegularLineM14_68.setVisible(false);lyr_2RegularLineM11_69.setVisible(false);lyr_2RegularLineM10_70.setVisible(false);lyr_2RegularLineM7_71.setVisible(false);lyr_2RegularLineM6_72.setVisible(false);lyr_2RegularLineM5_73.setVisible(false);lyr_2RegularLineM4_74.setVisible(false);lyr_2RegularLineM3_75.setVisible(false);lyr_2RegularLineM2_76.setVisible(false);lyr_2RegularLine2A_77.setVisible(false);lyr_1ExpressLineM8_78.setVisible(false);lyr_1ExpressLineM1_79.setVisible(false);lyr_Monorail_80.setVisible(false);lyr_DSDT16_81.setVisible(false);lyr_DSDT15_82.setVisible(false);lyr_DSDT10_83.setVisible(false);lyr_DSDT9_84.setVisible(false);lyr_DSDT8_85.setVisible(false);lyr_DSDT7_86.setVisible(false);lyr_DSDT6_87.setVisible(false);lyr_DSDT5_88.setVisible(false);lyr_DSDT4_89.setVisible(false);lyr_DSDT3_90.setVisible(false);lyr_DSDT2A_91.setVisible(false);lyr_DSDT2_92.setVisible(false);lyr_DSDT1_93.setVisible(false);lyr_4Railway_94.setVisible(false);lyr_3LRTORBRTM17_95.setVisible(false);lyr_3LRTORBRTM13_96.setVisible(false);lyr_1ExpressLineM8_97.setVisible(false);lyr_Ga_98.setVisible(false);lyr_QH100Ga_99.setVisible(false);lyr_QH100Monorail_100.setVisible(false);lyr_QH100dsDT_101.setVisible(false);lyr_QH100DSDT17_102.setVisible(false);lyr_QH100DSDT16_103.setVisible(false);lyr_QH100DSDT15_104.setVisible(false);lyr_QH100DSDT12_105.setVisible(false);lyr_QH100DSDT11_106.setVisible(false);lyr_QH100DSDT10_107.setVisible(false);lyr_QH100DSDT9_108.setVisible(false);lyr_QH100DSDT8_109.setVisible(false);lyr_QH100DSDT7_110.setVisible(false);lyr_QH100DSDT6_111.setVisible(false);lyr_QH100DSDT5_112.setVisible(false);lyr_QH100DSDT4_113.setVisible(false);lyr_QH100DSDT3_114.setVisible(false);lyr_QH100DSDT2A_115.setVisible(false);lyr_QH100DSDT2_116.setVisible(false);lyr_QH100DSDT1_117.setVisible(false);lyr_QH100DSQG_Thuong2050_118.setVisible(false);lyr_QH100Tuyen16_119.setVisible(false);lyr_QH100Tuyen14_120.setVisible(false);lyr_QH100Tuyen9_121.setVisible(false);lyr_QH100Tuyen8_122.setVisible(false);lyr_QH100Tuyen7_123.setVisible(false);lyr_QH100Tuyen6_124.setVisible(false);lyr_QH100Tuyen5_125.setVisible(false);lyr_QH100Tuyen4_126.setVisible(false);lyr_QH100Tuyen3_127.setVisible(false);lyr_QH100Tuyen2A_128.setVisible(false);lyr_QH100Tuyen2_129.setVisible(false);lyr_QH100Tuyen1_130.setVisible(false);lyr_DSQG_131.setVisible(false);lyr_Duongsatvung_132.setVisible(false);lyr_Depot_133.setVisible(false);lyr_PLine_17_134.setVisible(false);lyr_PLine_16_135.setVisible(false);lyr_PLine_15_136.setVisible(false);lyr_PLine_14_137.setVisible(false);lyr_PLine_13_138.setVisible(false);lyr_PLine_12_139.setVisible(false);lyr_PLine_11_140.setVisible(false);lyr_PLine_10_141.setVisible(false);lyr_PLine_9_142.setVisible(false);lyr_PLine_8_143.setVisible(false);lyr_PLine_7_144.setVisible(false);lyr_PLine_6_145.setVisible(false);lyr_PLine_5_146.setVisible(false);lyr_PLine_4_147.setVisible(false);lyr_PLine_3_148.setVisible(false);lyr_PLine_2A_149.setVisible(false);lyr_PLine_2_150.setVisible(false);lyr_PLine_1_151.setVisible(false);lyr_All_152.setVisible(false);lyr_MangluoiRasoatSXD_153.setVisible(false);lyr_Layer_CcTuynmi_154.setVisible(false);lyr_Layer_Tuyn12_155.setVisible(false);lyr_Layer_Tuyn11_156.setVisible(false);lyr_Layer_Tuyn10_157.setVisible(false);lyr_Layer_Tuyn9_158.setVisible(false);lyr_Layer_Tuyn8_159.setVisible(false);lyr_Layer_Tuyn7_160.setVisible(false);lyr_Layer_Tuyn6_161.setVisible(false);lyr_Layer_Tuyn5_162.setVisible(false);lyr_Layer_Tuyn4_163.setVisible(false);lyr_Layer_Tuyn3_164.setVisible(false);lyr_Layer_Tuyn2A_165.setVisible(false);lyr_Layer_Tuyn2_166.setVisible(false);lyr_Layer_Tuyn1_167.setVisible(false);lyr_T12_168.setVisible(true);lyr_T11_169.setVisible(true);lyr_T10_170.setVisible(true);lyr_T9_171.setVisible(true);lyr_T8_172.setVisible(true);lyr_T7_173.setVisible(true);lyr_T6_174.setVisible(true);lyr_T5_175.setVisible(true);lyr_T4_176.setVisible(true);lyr_T3_177.setVisible(true);lyr_T2A_178.setVisible(true);lyr_T2_179.setVisible(true);lyr_T1A_180.setVisible(true);lyr_T1_181.setVisible(true);lyr_MangluoiQH519_182.setVisible(false);lyr_QH519Depot_183.setVisible(false);lyr_QH519Ga_184.setVisible(false);lyr_tuyen_M3_185.setVisible(false);lyr_tuyen_M2_186.setVisible(false);lyr_tuyen_M1_187.setVisible(false);lyr_tuyen_VT_188.setVisible(false);lyr_tuyen_8_189.setVisible(false);lyr_tuyen_7_190.setVisible(false);lyr_tuyen_6_191.setVisible(false);lyr_tuyen_5_192.setVisible(false);lyr_tuyen_4_193.setVisible(false);lyr_tuyen_3_194.setVisible(false);lyr_tuyen_2A_195.setVisible(false);lyr_tuyen_2_196.setVisible(false);lyr_tuyen_1_197.setVisible(false);lyr_SDDSonTay_198.setVisible(false);lyr_SDDS5_199.setVisible(false);lyr_SDDS4_200.setVisible(false);lyr_SDDS3_201.setVisible(false);lyr_SDDS2_202.setVisible(false);lyr_SDDS1_203.setVisible(false);lyr_SDDPKR_204.setVisible(false);lyr_SDDPhuctho_205.setVisible(false);lyr_SDDN11_206.setVisible(false);lyr_SDDN10_207.setVisible(false);lyr_SDDN9_208.setVisible(false);lyr_SDDN8_209.setVisible(false);lyr_SDDN7_210.setVisible(false);lyr_SDDN6_211.setVisible(false);lyr_SDDN5_212.setVisible(false);lyr_SDDN4_213.setVisible(false);lyr_SDDN3_214.setVisible(false);lyr_SDDN2_215.setVisible(false);lyr_SDDN1_216.setVisible(false);lyr_SDDH24_217.setVisible(false);lyr_SDDH23_218.setVisible(false);lyr_SDDH22_219.setVisible(false);lyr_SDDH21_220.setVisible(false);lyr_SDDH14_221.setVisible(false);lyr_SDDH13_222.setVisible(false);lyr_SDDH12_223.setVisible(false);lyr_SDDA6_224.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleTraffic_1,lyr_GoogleTerrain_2,lyr_GoogleSatellite_3,lyr_GoogleRoad_4,lyr_GoogleLabels_5,lyr_GoogleHybrid_6,group_260406AREP_Proposallines_v2,group_QH100HUPI260406,group_QH100sauhpChnhph13032026,group_QH100namxcangT12032026,group_QH100nam10022026,group_QH100nam07022026,group_RasoatSXD04032026,group_RasoatSXD03022026,group_QH1668,group_QH519,group_QHPK];
lyr_layer_M16_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M15_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M14_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M13_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M12_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M11_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M10_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M09_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M08_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M07_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M06_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M05_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M04_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M03_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M02A_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M02_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_M01_23.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_QH100HUPI260406polylines_24.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DCaotoc_25.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DPcCaotoc_26.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_ketnoidsdt_27.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_4Railwaywhite_28.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_4Railway_29.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_SQG_Thng2050_30.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_Dduongsattocdocao_31.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_Monorail_32.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_4BRTM18_33.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT_17_34.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT_16_35.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT_15_36.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT_13_37.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT12_38.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT_11_39.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT10_40.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT9_41.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT8_42.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT7_43.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT6_44.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT5_45.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT4_46.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT3_47.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT2A_48.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT2_49.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT1_50.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_02interCity_51.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_Ga_52.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_nearbyProvince_53.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_nearbyProvince_54.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_03commuterLine_55.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_02interCity_56.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_01highSpeed_57.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', });
lyr_7railwaystation2secondary_58.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'name_1': 'name_1', });
lyr_6airport_59.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'name_1': 'name_1', });
lyr_4Railway_60.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_4BRTM18_61.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_4BRTM17_62.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_4BRTM12_63.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_3LRTM15_64.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_3LRTM13_65.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_3LRTM9_66.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM16_67.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM14_68.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM11_69.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM10_70.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM7_71.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM6_72.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM5_73.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM4_74.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM3_75.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM2_76.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_2RegularLine2A_77.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_1ExpressLineM8_78.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_1ExpressLineM1_79.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_Monorail_80.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT16_81.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT15_82.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT10_83.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT9_84.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT8_85.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT7_86.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT6_87.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT5_88.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT4_89.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT3_90.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT2A_91.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT2_92.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT1_93.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_4Railway_94.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_3LRTORBRTM17_95.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_3LRTORBRTM13_96.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_1ExpressLineM8_97.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ga_98.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QH100Ga_99.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100Monorail_100.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100dsDT_101.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT17_102.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT16_103.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT15_104.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT12_105.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT11_106.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT10_107.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT9_108.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT8_109.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT7_110.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT6_111.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT5_112.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT4_113.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT3_114.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT2A_115.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT2_116.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT1_117.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSQG_Thuong2050_118.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100Tuyen16_119.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen14_120.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen9_121.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen8_122.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen7_123.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen6_124.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen5_125.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen4_126.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen3_127.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen2A_128.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen2_129.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen1_130.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_DSQG_131.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_Duongsatvung_132.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_Depot_133.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PLine_17_134.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_16_135.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_15_136.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_14_137.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_13_138.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_12_139.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_11_140.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_10_141.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_9_142.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_8_143.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_7_144.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_6_145.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_5_146.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_4_147.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_3_148.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_2A_149.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_2_150.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_1_151.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_All_152.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_MangluoiRasoatSXD_153.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_CcTuynmi_154.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn12_155.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn11_156.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn10_157.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn9_158.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn8_159.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn7_160.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn6_161.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn5_162.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn4_163.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn3_164.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn2A_165.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn2_166.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn1_167.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_T12_168.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T11_169.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T10_170.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T9_171.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T8_172.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T7_173.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T6_174.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T5_175.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T4_176.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T3_177.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T2A_178.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T2_179.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T1A_180.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T1_181.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_MangluoiQH519_182.set('fieldAliases', {'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_QH519Depot_183.set('fieldAliases', {'fid': 'fid', });
lyr_QH519Ga_184.set('fieldAliases', {'fid': 'fid', 'tenga': 'tenga', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', });
lyr_tuyen_M3_185.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M2_186.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M1_187.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_VT_188.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_8_189.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_7_190.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_6_191.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_5_192.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_4_193.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_3_194.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2A_195.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2_196.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_1_197.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_SDDSonTay_198.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDS5_199.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDS4_200.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDS3_201.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDS2_202.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDS1_203.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDPKR_204.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDPhuctho_205.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDN11_206.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDN10_207.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDN9_208.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDN8_209.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDN7_210.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDN6_211.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDN5_212.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDN4_213.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDN3_214.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDN2_215.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDN1_216.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDH24_217.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDH23_218.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDH22_219.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDH21_220.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDH14_221.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDH13_222.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDH12_223.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SDDA6_224.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_layer_M16_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M15_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M14_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M13_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M12_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M11_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M10_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M09_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M08_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M07_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M06_17.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M05_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M04_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M03_20.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M02A_21.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M02_22.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_M01_23.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_QH100HUPI260406polylines_24.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DCaotoc_25.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DPcCaotoc_26.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_ketnoidsdt_27.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_4Railwaywhite_28.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_4Railway_29.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_SQG_Thng2050_30.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_Dduongsattocdocao_31.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_Monorail_32.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_4BRTM18_33.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT_17_34.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT_16_35.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT_15_36.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT_13_37.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT12_38.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT_11_39.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT10_40.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT9_41.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT8_42.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT7_43.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT6_44.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT5_45.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT4_46.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT3_47.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT2A_48.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT2_49.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT1_50.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_02interCity_51.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_Ga_52.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_nearbyProvince_53.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_nearbyProvince_54.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_03commuterLine_55.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_02interCity_56.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_01highSpeed_57.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', });
lyr_7railwaystation2secondary_58.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'name_1': 'TextEdit', });
lyr_6airport_59.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'name_1': 'TextEdit', });
lyr_4Railway_60.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_4BRTM18_61.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_4BRTM17_62.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_4BRTM12_63.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_3LRTM15_64.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_3LRTM13_65.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_3LRTM9_66.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM16_67.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM14_68.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM11_69.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM10_70.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM7_71.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM6_72.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM5_73.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM4_74.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM3_75.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM2_76.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLine2A_77.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_1ExpressLineM8_78.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_1ExpressLineM1_79.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_Monorail_80.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT16_81.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT15_82.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT10_83.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT9_84.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT8_85.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT7_86.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT6_87.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT5_88.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT4_89.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT3_90.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT2A_91.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT2_92.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT1_93.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_4Railway_94.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_3LRTORBRTM17_95.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_3LRTORBRTM13_96.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_1ExpressLineM8_97.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Ga_98.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QH100Ga_99.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100Monorail_100.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100dsDT_101.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT17_102.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT16_103.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT15_104.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT12_105.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT11_106.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT10_107.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT9_108.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT8_109.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT7_110.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT6_111.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT5_112.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT4_113.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT3_114.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT2A_115.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT2_116.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT1_117.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSQG_Thuong2050_118.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100Tuyen16_119.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen14_120.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen9_121.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen8_122.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen7_123.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen6_124.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen5_125.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen4_126.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen3_127.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen2A_128.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen2_129.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen1_130.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_DSQG_131.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_Duongsatvung_132.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_Depot_133.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PLine_17_134.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_16_135.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_15_136.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_14_137.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_13_138.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_12_139.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_11_140.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_10_141.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_9_142.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_8_143.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_7_144.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_6_145.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_5_146.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_4_147.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_3_148.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_2A_149.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_2_150.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_1_151.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_All_152.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_MangluoiRasoatSXD_153.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_CcTuynmi_154.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn12_155.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn11_156.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn10_157.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn9_158.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn8_159.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn7_160.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn6_161.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn5_162.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn4_163.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn3_164.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn2A_165.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn2_166.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn1_167.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_T12_168.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T11_169.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T10_170.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T9_171.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T8_172.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T7_173.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T6_174.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T5_175.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T4_176.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T3_177.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T2A_178.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T2_179.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T1A_180.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T1_181.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_MangluoiQH519_182.set('fieldImages', {'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_QH519Depot_183.set('fieldImages', {'fid': '', });
lyr_QH519Ga_184.set('fieldImages', {'fid': '', 'tenga': '', 'tuyen': '', 'doantuyen': '', 'quanhuyen': '', 'phuongxa': '', });
lyr_tuyen_M3_185.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M2_186.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M1_187.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_VT_188.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_8_189.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_7_190.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_6_191.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_5_192.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_4_193.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_3_194.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_2A_195.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_2_196.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_1_197.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_SDDSonTay_198.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDS5_199.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDS4_200.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDS3_201.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDS2_202.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDS1_203.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDPKR_204.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDPhuctho_205.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDN11_206.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDN10_207.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDN9_208.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDN8_209.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDN7_210.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDN6_211.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDN5_212.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDN4_213.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDN3_214.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDN2_215.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDN1_216.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDH24_217.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDH23_218.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDH22_219.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDH21_220.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDH14_221.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDH13_222.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDH12_223.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SDDA6_224.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_layer_M16_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M15_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M14_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M13_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M12_11.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M11_12.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M10_13.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M09_14.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M08_15.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M07_16.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M06_17.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M05_18.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M04_19.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M03_20.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M02A_21.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M02_22.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_M01_23.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_QH100HUPI260406polylines_24.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'hidden field', });
lyr_layer_DCaotoc_25.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DPcCaotoc_26.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_ketnoidsdt_27.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_4Railwaywhite_28.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_4Railway_29.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_SQG_Thng2050_30.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_Dduongsattocdocao_31.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_Monorail_32.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_4BRTM18_33.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT_17_34.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT_16_35.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT_15_36.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT_13_37.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT12_38.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT_11_39.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT10_40.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT9_41.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT8_42.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT7_43.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT6_44.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT5_45.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT4_46.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT3_47.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT2A_48.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT2_49.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_DSDT1_50.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_layer_02interCity_51.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - always visible', });
lyr_Ga_52.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_nearbyProvince_53.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', });
lyr_nearbyProvince_54.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', });
lyr_03commuterLine_55.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_02interCity_56.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', });
lyr_01highSpeed_57.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', });
lyr_7railwaystation2secondary_58.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'name_1': 'hidden field', });
lyr_6airport_59.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'name_1': 'hidden field', });
lyr_4Railway_60.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_4BRTM18_61.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_4BRTM17_62.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_4BRTM12_63.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_3LRTM15_64.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_3LRTM13_65.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_3LRTM9_66.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM16_67.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM14_68.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM11_69.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM10_70.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM7_71.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM6_72.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM5_73.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM4_74.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM3_75.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM2_76.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLine2A_77.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_1ExpressLineM8_78.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_1ExpressLineM1_79.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_Monorail_80.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT16_81.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT15_82.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT10_83.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT9_84.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT8_85.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT7_86.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT6_87.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT5_88.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT4_89.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT3_90.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT2A_91.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT2_92.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT1_93.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_4Railway_94.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_3LRTORBRTM17_95.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_3LRTORBRTM13_96.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_1ExpressLineM8_97.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Ga_98.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_QH100Ga_99.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100Monorail_100.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100dsDT_101.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT17_102.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT16_103.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT15_104.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT12_105.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT11_106.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT10_107.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT9_108.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT8_109.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT7_110.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT6_111.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT5_112.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT4_113.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT3_114.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT2A_115.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT2_116.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT1_117.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSQG_Thuong2050_118.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100Tuyen16_119.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen14_120.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen9_121.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen8_122.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen7_123.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen6_124.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen5_125.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen4_126.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen3_127.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen2A_128.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen2_129.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen1_130.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_DSQG_131.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_Duongsatvung_132.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_Depot_133.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_PLine_17_134.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_16_135.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_15_136.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_14_137.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_13_138.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_12_139.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_11_140.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_10_141.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_9_142.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_8_143.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_7_144.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_6_145.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_5_146.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_4_147.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_3_148.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_2A_149.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_2_150.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_1_151.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_All_152.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_MangluoiRasoatSXD_153.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_CcTuynmi_154.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn12_155.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn11_156.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn10_157.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn9_158.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn8_159.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn7_160.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn6_161.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn5_162.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn4_163.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn3_164.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn2A_165.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn2_166.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn1_167.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_T12_168.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T11_169.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T10_170.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T9_171.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T8_172.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T7_173.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T6_174.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T5_175.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T4_176.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T3_177.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T2A_178.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T2_179.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T1A_180.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T1_181.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_MangluoiQH519_182.set('fieldLabels', {'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_QH519Depot_183.set('fieldLabels', {'fid': 'hidden field', });
lyr_QH519Ga_184.set('fieldLabels', {'fid': 'hidden field', 'tenga': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', });
lyr_tuyen_M3_185.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_M2_186.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_M1_187.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_VT_188.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_8_189.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_7_190.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_6_191.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_5_192.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_4_193.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_3_194.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_2A_195.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_2_196.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_1_197.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_SDDSonTay_198.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDS5_199.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDS4_200.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDS3_201.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDS2_202.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDS1_203.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDPKR_204.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDPhuctho_205.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDN11_206.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDN10_207.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDN9_208.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDN8_209.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDN7_210.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDN6_211.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDN5_212.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDN4_213.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDN3_214.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDN2_215.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDN1_216.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDH24_217.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDH23_218.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDH22_219.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDH21_220.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDH14_221.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDH13_222.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDH12_223.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDA6_224.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SDDA6_224.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});