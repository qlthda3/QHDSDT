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
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_4 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 0.800000,
            
            
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
var format_QH100DSDT17_7 = new ol.format.GeoJSON();
var features_QH100DSDT17_7 = format_QH100DSDT17_7.readFeatures(json_QH100DSDT17_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT17_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT17_7.addFeatures(features_QH100DSDT17_7);
var lyr_QH100DSDT17_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT17_7, 
                style: style_QH100DSDT17_7,
                popuplayertitle: 'QH100-DSDT 17',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT17_7.png" /> QH100-DSDT 17'
            });
var format_QH100DSDT16_8 = new ol.format.GeoJSON();
var features_QH100DSDT16_8 = format_QH100DSDT16_8.readFeatures(json_QH100DSDT16_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT16_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT16_8.addFeatures(features_QH100DSDT16_8);
var lyr_QH100DSDT16_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT16_8, 
                style: style_QH100DSDT16_8,
                popuplayertitle: 'QH100-DSDT 16',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT16_8.png" /> QH100-DSDT 16'
            });
var format_QH100DSDT15_9 = new ol.format.GeoJSON();
var features_QH100DSDT15_9 = format_QH100DSDT15_9.readFeatures(json_QH100DSDT15_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT15_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT15_9.addFeatures(features_QH100DSDT15_9);
var lyr_QH100DSDT15_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT15_9, 
                style: style_QH100DSDT15_9,
                popuplayertitle: 'QH100-DSDT 15',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT15_9.png" /> QH100-DSDT 15'
            });
var format_QH100DSDT12_10 = new ol.format.GeoJSON();
var features_QH100DSDT12_10 = format_QH100DSDT12_10.readFeatures(json_QH100DSDT12_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT12_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT12_10.addFeatures(features_QH100DSDT12_10);
var lyr_QH100DSDT12_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT12_10, 
                style: style_QH100DSDT12_10,
                popuplayertitle: 'QH100-DSDT 12',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT12_10.png" /> QH100-DSDT 12'
            });
var format_QH100DSDT11_11 = new ol.format.GeoJSON();
var features_QH100DSDT11_11 = format_QH100DSDT11_11.readFeatures(json_QH100DSDT11_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT11_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT11_11.addFeatures(features_QH100DSDT11_11);
var lyr_QH100DSDT11_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT11_11, 
                style: style_QH100DSDT11_11,
                popuplayertitle: 'QH100-DSDT 11',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT11_11.png" /> QH100-DSDT 11'
            });
var format_QH100DSDT10_12 = new ol.format.GeoJSON();
var features_QH100DSDT10_12 = format_QH100DSDT10_12.readFeatures(json_QH100DSDT10_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT10_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT10_12.addFeatures(features_QH100DSDT10_12);
var lyr_QH100DSDT10_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT10_12, 
                style: style_QH100DSDT10_12,
                popuplayertitle: 'QH100-DSDT 10',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT10_12.png" /> QH100-DSDT 10'
            });
var format_QH100DSDT9_13 = new ol.format.GeoJSON();
var features_QH100DSDT9_13 = format_QH100DSDT9_13.readFeatures(json_QH100DSDT9_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT9_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT9_13.addFeatures(features_QH100DSDT9_13);
var lyr_QH100DSDT9_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT9_13, 
                style: style_QH100DSDT9_13,
                popuplayertitle: 'QH100-DSDT 9',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT9_13.png" /> QH100-DSDT 9'
            });
var format_QH100DSDT8_14 = new ol.format.GeoJSON();
var features_QH100DSDT8_14 = format_QH100DSDT8_14.readFeatures(json_QH100DSDT8_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT8_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT8_14.addFeatures(features_QH100DSDT8_14);
var lyr_QH100DSDT8_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT8_14, 
                style: style_QH100DSDT8_14,
                popuplayertitle: 'QH100-DSDT 8',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT8_14.png" /> QH100-DSDT 8'
            });
var format_QH100DSDT7_15 = new ol.format.GeoJSON();
var features_QH100DSDT7_15 = format_QH100DSDT7_15.readFeatures(json_QH100DSDT7_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT7_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT7_15.addFeatures(features_QH100DSDT7_15);
var lyr_QH100DSDT7_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT7_15, 
                style: style_QH100DSDT7_15,
                popuplayertitle: 'QH100-DSDT 7',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT7_15.png" /> QH100-DSDT 7'
            });
var format_QH100DSDT6_16 = new ol.format.GeoJSON();
var features_QH100DSDT6_16 = format_QH100DSDT6_16.readFeatures(json_QH100DSDT6_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT6_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT6_16.addFeatures(features_QH100DSDT6_16);
var lyr_QH100DSDT6_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT6_16, 
                style: style_QH100DSDT6_16,
                popuplayertitle: 'QH100-DSDT 6',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT6_16.png" /> QH100-DSDT 6'
            });
var format_QH100DSDT5_17 = new ol.format.GeoJSON();
var features_QH100DSDT5_17 = format_QH100DSDT5_17.readFeatures(json_QH100DSDT5_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT5_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT5_17.addFeatures(features_QH100DSDT5_17);
var lyr_QH100DSDT5_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT5_17, 
                style: style_QH100DSDT5_17,
                popuplayertitle: 'QH100-DSDT 5',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT5_17.png" /> QH100-DSDT 5'
            });
var format_QH100DSDT4_18 = new ol.format.GeoJSON();
var features_QH100DSDT4_18 = format_QH100DSDT4_18.readFeatures(json_QH100DSDT4_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT4_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT4_18.addFeatures(features_QH100DSDT4_18);
var lyr_QH100DSDT4_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT4_18, 
                style: style_QH100DSDT4_18,
                popuplayertitle: 'QH100-DSDT 4',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT4_18.png" /> QH100-DSDT 4'
            });
var format_QH100DSDT3_19 = new ol.format.GeoJSON();
var features_QH100DSDT3_19 = format_QH100DSDT3_19.readFeatures(json_QH100DSDT3_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT3_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT3_19.addFeatures(features_QH100DSDT3_19);
var lyr_QH100DSDT3_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT3_19, 
                style: style_QH100DSDT3_19,
                popuplayertitle: 'QH100-DSDT 3',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT3_19.png" /> QH100-DSDT 3'
            });
var format_QH100DSDT2A_20 = new ol.format.GeoJSON();
var features_QH100DSDT2A_20 = format_QH100DSDT2A_20.readFeatures(json_QH100DSDT2A_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT2A_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT2A_20.addFeatures(features_QH100DSDT2A_20);
var lyr_QH100DSDT2A_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT2A_20, 
                style: style_QH100DSDT2A_20,
                popuplayertitle: 'QH100-DSDT 2A',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT2A_20.png" /> QH100-DSDT 2A'
            });
var format_QH100DSDT2_21 = new ol.format.GeoJSON();
var features_QH100DSDT2_21 = format_QH100DSDT2_21.readFeatures(json_QH100DSDT2_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT2_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT2_21.addFeatures(features_QH100DSDT2_21);
var lyr_QH100DSDT2_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT2_21, 
                style: style_QH100DSDT2_21,
                popuplayertitle: 'QH100-DSDT 2',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT2_21.png" /> QH100-DSDT 2'
            });
var format_QH100DSDT1_22 = new ol.format.GeoJSON();
var features_QH100DSDT1_22 = format_QH100DSDT1_22.readFeatures(json_QH100DSDT1_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT1_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT1_22.addFeatures(features_QH100DSDT1_22);
var lyr_QH100DSDT1_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT1_22, 
                style: style_QH100DSDT1_22,
                popuplayertitle: 'QH100-DSDT 1',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT1_22.png" /> QH100-DSDT 1'
            });
var format_QH100Tuyen16_23 = new ol.format.GeoJSON();
var features_QH100Tuyen16_23 = format_QH100Tuyen16_23.readFeatures(json_QH100Tuyen16_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen16_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen16_23.addFeatures(features_QH100Tuyen16_23);
var lyr_QH100Tuyen16_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen16_23, 
                style: style_QH100Tuyen16_23,
                popuplayertitle: 'QH100 Tuyen-16',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen16_23.png" /> QH100 Tuyen-16'
            });
var format_QH100Tuyen14_24 = new ol.format.GeoJSON();
var features_QH100Tuyen14_24 = format_QH100Tuyen14_24.readFeatures(json_QH100Tuyen14_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen14_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen14_24.addFeatures(features_QH100Tuyen14_24);
var lyr_QH100Tuyen14_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen14_24, 
                style: style_QH100Tuyen14_24,
                popuplayertitle: 'QH100 Tuyen-14',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen14_24.png" /> QH100 Tuyen-14'
            });
var format_QH100Tuyen9_25 = new ol.format.GeoJSON();
var features_QH100Tuyen9_25 = format_QH100Tuyen9_25.readFeatures(json_QH100Tuyen9_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen9_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen9_25.addFeatures(features_QH100Tuyen9_25);
var lyr_QH100Tuyen9_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen9_25, 
                style: style_QH100Tuyen9_25,
                popuplayertitle: 'QH100 Tuyen-9',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen9_25.png" /> QH100 Tuyen-9'
            });
var format_QH100Tuyen8_26 = new ol.format.GeoJSON();
var features_QH100Tuyen8_26 = format_QH100Tuyen8_26.readFeatures(json_QH100Tuyen8_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen8_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen8_26.addFeatures(features_QH100Tuyen8_26);
var lyr_QH100Tuyen8_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen8_26, 
                style: style_QH100Tuyen8_26,
                popuplayertitle: 'QH100 Tuyen-8',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen8_26.png" /> QH100 Tuyen-8'
            });
var format_QH100Tuyen7_27 = new ol.format.GeoJSON();
var features_QH100Tuyen7_27 = format_QH100Tuyen7_27.readFeatures(json_QH100Tuyen7_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen7_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen7_27.addFeatures(features_QH100Tuyen7_27);
var lyr_QH100Tuyen7_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen7_27, 
                style: style_QH100Tuyen7_27,
                popuplayertitle: 'QH100 Tuyen-7',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen7_27.png" /> QH100 Tuyen-7'
            });
var format_QH100Tuyen6_28 = new ol.format.GeoJSON();
var features_QH100Tuyen6_28 = format_QH100Tuyen6_28.readFeatures(json_QH100Tuyen6_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen6_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen6_28.addFeatures(features_QH100Tuyen6_28);
var lyr_QH100Tuyen6_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen6_28, 
                style: style_QH100Tuyen6_28,
                popuplayertitle: 'QH100 Tuyen-6',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen6_28.png" /> QH100 Tuyen-6'
            });
var format_QH100Tuyen5_29 = new ol.format.GeoJSON();
var features_QH100Tuyen5_29 = format_QH100Tuyen5_29.readFeatures(json_QH100Tuyen5_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen5_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen5_29.addFeatures(features_QH100Tuyen5_29);
var lyr_QH100Tuyen5_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen5_29, 
                style: style_QH100Tuyen5_29,
                popuplayertitle: 'QH100 Tuyen-5',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen5_29.png" /> QH100 Tuyen-5'
            });
var format_QH100Tuyen4_30 = new ol.format.GeoJSON();
var features_QH100Tuyen4_30 = format_QH100Tuyen4_30.readFeatures(json_QH100Tuyen4_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen4_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen4_30.addFeatures(features_QH100Tuyen4_30);
var lyr_QH100Tuyen4_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen4_30, 
                style: style_QH100Tuyen4_30,
                popuplayertitle: 'QH100 Tuyen-4',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen4_30.png" /> QH100 Tuyen-4'
            });
var format_QH100Tuyen3_31 = new ol.format.GeoJSON();
var features_QH100Tuyen3_31 = format_QH100Tuyen3_31.readFeatures(json_QH100Tuyen3_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen3_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen3_31.addFeatures(features_QH100Tuyen3_31);
var lyr_QH100Tuyen3_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen3_31, 
                style: style_QH100Tuyen3_31,
                popuplayertitle: 'QH100 Tuyen-3',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen3_31.png" /> QH100 Tuyen-3'
            });
var format_QH100Tuyen2A_32 = new ol.format.GeoJSON();
var features_QH100Tuyen2A_32 = format_QH100Tuyen2A_32.readFeatures(json_QH100Tuyen2A_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen2A_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen2A_32.addFeatures(features_QH100Tuyen2A_32);
var lyr_QH100Tuyen2A_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen2A_32, 
                style: style_QH100Tuyen2A_32,
                popuplayertitle: 'QH100 Tuyen-2A',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen2A_32.png" /> QH100 Tuyen-2A'
            });
var format_QH100Tuyen2_33 = new ol.format.GeoJSON();
var features_QH100Tuyen2_33 = format_QH100Tuyen2_33.readFeatures(json_QH100Tuyen2_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen2_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen2_33.addFeatures(features_QH100Tuyen2_33);
var lyr_QH100Tuyen2_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen2_33, 
                style: style_QH100Tuyen2_33,
                popuplayertitle: 'QH100 Tuyen-2',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen2_33.png" /> QH100 Tuyen-2'
            });
var format_QH100Tuyen1_34 = new ol.format.GeoJSON();
var features_QH100Tuyen1_34 = format_QH100Tuyen1_34.readFeatures(json_QH100Tuyen1_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen1_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen1_34.addFeatures(features_QH100Tuyen1_34);
var lyr_QH100Tuyen1_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen1_34, 
                style: style_QH100Tuyen1_34,
                popuplayertitle: 'QH100 Tuyen-1',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen1_34.png" /> QH100 Tuyen-1'
            });
var format_Layer_CcTuynmi_35 = new ol.format.GeoJSON();
var features_Layer_CcTuynmi_35 = format_Layer_CcTuynmi_35.readFeatures(json_Layer_CcTuynmi_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_CcTuynmi_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_CcTuynmi_35.addFeatures(features_Layer_CcTuynmi_35);
var lyr_Layer_CcTuynmi_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_CcTuynmi_35, 
                style: style_Layer_CcTuynmi_35,
                popuplayertitle: 'Layer_Các Tuyến mới',
                interactive: true,
                title: '<img src="styles/legend/Layer_CcTuynmi_35.png" /> Layer_Các Tuyến mới'
            });
var format_Layer_Tuyn12_36 = new ol.format.GeoJSON();
var features_Layer_Tuyn12_36 = format_Layer_Tuyn12_36.readFeatures(json_Layer_Tuyn12_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn12_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn12_36.addFeatures(features_Layer_Tuyn12_36);
var lyr_Layer_Tuyn12_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn12_36, 
                style: style_Layer_Tuyn12_36,
                popuplayertitle: 'Layer_Tuyến 12',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn12_36.png" /> Layer_Tuyến 12'
            });
var format_Layer_Tuyn11_37 = new ol.format.GeoJSON();
var features_Layer_Tuyn11_37 = format_Layer_Tuyn11_37.readFeatures(json_Layer_Tuyn11_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn11_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn11_37.addFeatures(features_Layer_Tuyn11_37);
var lyr_Layer_Tuyn11_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn11_37, 
                style: style_Layer_Tuyn11_37,
                popuplayertitle: 'Layer_Tuyến 11',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn11_37.png" /> Layer_Tuyến 11'
            });
var format_Layer_Tuyn10_38 = new ol.format.GeoJSON();
var features_Layer_Tuyn10_38 = format_Layer_Tuyn10_38.readFeatures(json_Layer_Tuyn10_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn10_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn10_38.addFeatures(features_Layer_Tuyn10_38);
var lyr_Layer_Tuyn10_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn10_38, 
                style: style_Layer_Tuyn10_38,
                popuplayertitle: 'Layer_Tuyến 10',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn10_38.png" /> Layer_Tuyến 10'
            });
var format_Layer_Tuyn9_39 = new ol.format.GeoJSON();
var features_Layer_Tuyn9_39 = format_Layer_Tuyn9_39.readFeatures(json_Layer_Tuyn9_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn9_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn9_39.addFeatures(features_Layer_Tuyn9_39);
var lyr_Layer_Tuyn9_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn9_39, 
                style: style_Layer_Tuyn9_39,
                popuplayertitle: 'Layer_Tuyến 9',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn9_39.png" /> Layer_Tuyến 9'
            });
var format_Layer_Tuyn8_40 = new ol.format.GeoJSON();
var features_Layer_Tuyn8_40 = format_Layer_Tuyn8_40.readFeatures(json_Layer_Tuyn8_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn8_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn8_40.addFeatures(features_Layer_Tuyn8_40);
var lyr_Layer_Tuyn8_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn8_40, 
                style: style_Layer_Tuyn8_40,
                popuplayertitle: 'Layer_Tuyến 8',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn8_40.png" /> Layer_Tuyến 8'
            });
var format_Layer_Tuyn7_41 = new ol.format.GeoJSON();
var features_Layer_Tuyn7_41 = format_Layer_Tuyn7_41.readFeatures(json_Layer_Tuyn7_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn7_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn7_41.addFeatures(features_Layer_Tuyn7_41);
var lyr_Layer_Tuyn7_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn7_41, 
                style: style_Layer_Tuyn7_41,
                popuplayertitle: 'Layer_Tuyến 7',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn7_41.png" /> Layer_Tuyến 7'
            });
var format_Layer_Tuyn6_42 = new ol.format.GeoJSON();
var features_Layer_Tuyn6_42 = format_Layer_Tuyn6_42.readFeatures(json_Layer_Tuyn6_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn6_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn6_42.addFeatures(features_Layer_Tuyn6_42);
var lyr_Layer_Tuyn6_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn6_42, 
                style: style_Layer_Tuyn6_42,
                popuplayertitle: 'Layer_Tuyến 6',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn6_42.png" /> Layer_Tuyến 6'
            });
var format_Layer_Tuyn5_43 = new ol.format.GeoJSON();
var features_Layer_Tuyn5_43 = format_Layer_Tuyn5_43.readFeatures(json_Layer_Tuyn5_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn5_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn5_43.addFeatures(features_Layer_Tuyn5_43);
var lyr_Layer_Tuyn5_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn5_43, 
                style: style_Layer_Tuyn5_43,
                popuplayertitle: 'Layer_Tuyến 5',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn5_43.png" /> Layer_Tuyến 5'
            });
var format_Layer_Tuyn4_44 = new ol.format.GeoJSON();
var features_Layer_Tuyn4_44 = format_Layer_Tuyn4_44.readFeatures(json_Layer_Tuyn4_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn4_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn4_44.addFeatures(features_Layer_Tuyn4_44);
var lyr_Layer_Tuyn4_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn4_44, 
                style: style_Layer_Tuyn4_44,
                popuplayertitle: 'Layer_Tuyến 4',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn4_44.png" /> Layer_Tuyến 4'
            });
var format_Layer_Tuyn3_45 = new ol.format.GeoJSON();
var features_Layer_Tuyn3_45 = format_Layer_Tuyn3_45.readFeatures(json_Layer_Tuyn3_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn3_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn3_45.addFeatures(features_Layer_Tuyn3_45);
var lyr_Layer_Tuyn3_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn3_45, 
                style: style_Layer_Tuyn3_45,
                popuplayertitle: 'Layer_Tuyến 3',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn3_45.png" /> Layer_Tuyến 3'
            });
var format_Layer_Tuyn2A_46 = new ol.format.GeoJSON();
var features_Layer_Tuyn2A_46 = format_Layer_Tuyn2A_46.readFeatures(json_Layer_Tuyn2A_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn2A_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn2A_46.addFeatures(features_Layer_Tuyn2A_46);
var lyr_Layer_Tuyn2A_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn2A_46, 
                style: style_Layer_Tuyn2A_46,
                popuplayertitle: 'Layer_Tuyến 2A',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn2A_46.png" /> Layer_Tuyến 2A'
            });
var format_Layer_Tuyn2_47 = new ol.format.GeoJSON();
var features_Layer_Tuyn2_47 = format_Layer_Tuyn2_47.readFeatures(json_Layer_Tuyn2_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn2_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn2_47.addFeatures(features_Layer_Tuyn2_47);
var lyr_Layer_Tuyn2_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn2_47, 
                style: style_Layer_Tuyn2_47,
                popuplayertitle: 'Layer_Tuyến 2',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn2_47.png" /> Layer_Tuyến 2'
            });
var format_Layer_Tuyn1_48 = new ol.format.GeoJSON();
var features_Layer_Tuyn1_48 = format_Layer_Tuyn1_48.readFeatures(json_Layer_Tuyn1_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn1_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn1_48.addFeatures(features_Layer_Tuyn1_48);
var lyr_Layer_Tuyn1_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn1_48, 
                style: style_Layer_Tuyn1_48,
                popuplayertitle: 'Layer_Tuyến 1',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn1_48.png" /> Layer_Tuyến 1'
            });
var format_T12_49 = new ol.format.GeoJSON();
var features_T12_49 = format_T12_49.readFeatures(json_T12_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T12_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T12_49.addFeatures(features_T12_49);
var lyr_T12_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T12_49, 
                style: style_T12_49,
                popuplayertitle: 'T12',
                interactive: true,
                title: '<img src="styles/legend/T12_49.png" /> T12'
            });
var format_T11_50 = new ol.format.GeoJSON();
var features_T11_50 = format_T11_50.readFeatures(json_T11_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T11_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T11_50.addFeatures(features_T11_50);
var lyr_T11_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T11_50, 
                style: style_T11_50,
                popuplayertitle: 'T11',
                interactive: true,
                title: '<img src="styles/legend/T11_50.png" /> T11'
            });
var format_T10_51 = new ol.format.GeoJSON();
var features_T10_51 = format_T10_51.readFeatures(json_T10_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T10_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T10_51.addFeatures(features_T10_51);
var lyr_T10_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T10_51, 
                style: style_T10_51,
                popuplayertitle: 'T10',
                interactive: true,
                title: '<img src="styles/legend/T10_51.png" /> T10'
            });
var format_T9_52 = new ol.format.GeoJSON();
var features_T9_52 = format_T9_52.readFeatures(json_T9_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T9_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T9_52.addFeatures(features_T9_52);
var lyr_T9_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T9_52, 
                style: style_T9_52,
                popuplayertitle: 'T9',
                interactive: true,
                title: '<img src="styles/legend/T9_52.png" /> T9'
            });
var format_T8_53 = new ol.format.GeoJSON();
var features_T8_53 = format_T8_53.readFeatures(json_T8_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T8_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T8_53.addFeatures(features_T8_53);
var lyr_T8_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T8_53, 
                style: style_T8_53,
                popuplayertitle: 'T8',
                interactive: true,
                title: '<img src="styles/legend/T8_53.png" /> T8'
            });
var format_T7_54 = new ol.format.GeoJSON();
var features_T7_54 = format_T7_54.readFeatures(json_T7_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T7_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T7_54.addFeatures(features_T7_54);
var lyr_T7_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T7_54, 
                style: style_T7_54,
                popuplayertitle: 'T7',
                interactive: true,
                title: '<img src="styles/legend/T7_54.png" /> T7'
            });
var format_T6_55 = new ol.format.GeoJSON();
var features_T6_55 = format_T6_55.readFeatures(json_T6_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T6_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T6_55.addFeatures(features_T6_55);
var lyr_T6_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T6_55, 
                style: style_T6_55,
                popuplayertitle: 'T6',
                interactive: true,
                title: '<img src="styles/legend/T6_55.png" /> T6'
            });
var format_T5_56 = new ol.format.GeoJSON();
var features_T5_56 = format_T5_56.readFeatures(json_T5_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T5_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T5_56.addFeatures(features_T5_56);
var lyr_T5_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T5_56, 
                style: style_T5_56,
                popuplayertitle: 'T5',
                interactive: true,
                title: '<img src="styles/legend/T5_56.png" /> T5'
            });
var format_T4_57 = new ol.format.GeoJSON();
var features_T4_57 = format_T4_57.readFeatures(json_T4_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T4_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T4_57.addFeatures(features_T4_57);
var lyr_T4_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T4_57, 
                style: style_T4_57,
                popuplayertitle: 'T4',
                interactive: true,
                title: '<img src="styles/legend/T4_57.png" /> T4'
            });
var format_T3_58 = new ol.format.GeoJSON();
var features_T3_58 = format_T3_58.readFeatures(json_T3_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3_58.addFeatures(features_T3_58);
var lyr_T3_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T3_58, 
                style: style_T3_58,
                popuplayertitle: 'T3',
                interactive: true,
                title: '<img src="styles/legend/T3_58.png" /> T3'
            });
var format_T2A_59 = new ol.format.GeoJSON();
var features_T2A_59 = format_T2A_59.readFeatures(json_T2A_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2A_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2A_59.addFeatures(features_T2A_59);
var lyr_T2A_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2A_59, 
                style: style_T2A_59,
                popuplayertitle: 'T2A',
                interactive: true,
                title: '<img src="styles/legend/T2A_59.png" /> T2A'
            });
var format_T2_60 = new ol.format.GeoJSON();
var features_T2_60 = format_T2_60.readFeatures(json_T2_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2_60.addFeatures(features_T2_60);
var lyr_T2_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2_60, 
                style: style_T2_60,
                popuplayertitle: 'T2',
                interactive: true,
                title: '<img src="styles/legend/T2_60.png" /> T2'
            });
var format_T1A_61 = new ol.format.GeoJSON();
var features_T1A_61 = format_T1A_61.readFeatures(json_T1A_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1A_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1A_61.addFeatures(features_T1A_61);
var lyr_T1A_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1A_61, 
                style: style_T1A_61,
                popuplayertitle: 'T1A',
                interactive: true,
                title: '<img src="styles/legend/T1A_61.png" /> T1A'
            });
var format_T1_62 = new ol.format.GeoJSON();
var features_T1_62 = format_T1_62.readFeatures(json_T1_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1_62.addFeatures(features_T1_62);
var lyr_T1_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1_62, 
                style: style_T1_62,
                popuplayertitle: 'T1',
                interactive: true,
                title: '<img src="styles/legend/T1_62.png" /> T1'
            });
var format_QH519Depot_63 = new ol.format.GeoJSON();
var features_QH519Depot_63 = format_QH519Depot_63.readFeatures(json_QH519Depot_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH519Depot_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH519Depot_63.addFeatures(features_QH519Depot_63);
var lyr_QH519Depot_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH519Depot_63, 
                style: style_QH519Depot_63,
                popuplayertitle: 'QH519-Depot',
                interactive: false,
                title: '<img src="styles/legend/QH519Depot_63.png" /> QH519-Depot'
            });
var format_tuyen_M3_64 = new ol.format.GeoJSON();
var features_tuyen_M3_64 = format_tuyen_M3_64.readFeatures(json_tuyen_M3_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M3_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M3_64.addFeatures(features_tuyen_M3_64);
var lyr_tuyen_M3_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M3_64, 
                style: style_tuyen_M3_64,
                popuplayertitle: 'tuyen_M3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M3_64.png" /> tuyen_M3'
            });
var format_tuyen_M2_65 = new ol.format.GeoJSON();
var features_tuyen_M2_65 = format_tuyen_M2_65.readFeatures(json_tuyen_M2_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M2_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M2_65.addFeatures(features_tuyen_M2_65);
var lyr_tuyen_M2_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M2_65, 
                style: style_tuyen_M2_65,
                popuplayertitle: 'tuyen_M2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M2_65.png" /> tuyen_M2'
            });
var format_tuyen_M1_66 = new ol.format.GeoJSON();
var features_tuyen_M1_66 = format_tuyen_M1_66.readFeatures(json_tuyen_M1_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M1_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M1_66.addFeatures(features_tuyen_M1_66);
var lyr_tuyen_M1_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M1_66, 
                style: style_tuyen_M1_66,
                popuplayertitle: 'tuyen_M1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M1_66.png" /> tuyen_M1'
            });
var format_tuyen_VT_67 = new ol.format.GeoJSON();
var features_tuyen_VT_67 = format_tuyen_VT_67.readFeatures(json_tuyen_VT_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_VT_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_VT_67.addFeatures(features_tuyen_VT_67);
var lyr_tuyen_VT_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_VT_67, 
                style: style_tuyen_VT_67,
                popuplayertitle: 'tuyen_VT',
                interactive: true,
                title: '<img src="styles/legend/tuyen_VT_67.png" /> tuyen_VT'
            });
var format_tuyen_8_68 = new ol.format.GeoJSON();
var features_tuyen_8_68 = format_tuyen_8_68.readFeatures(json_tuyen_8_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_8_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_8_68.addFeatures(features_tuyen_8_68);
var lyr_tuyen_8_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_8_68, 
                style: style_tuyen_8_68,
                popuplayertitle: 'tuyen_8',
                interactive: true,
                title: '<img src="styles/legend/tuyen_8_68.png" /> tuyen_8'
            });
var format_tuyen_7_69 = new ol.format.GeoJSON();
var features_tuyen_7_69 = format_tuyen_7_69.readFeatures(json_tuyen_7_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_7_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_7_69.addFeatures(features_tuyen_7_69);
var lyr_tuyen_7_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_7_69, 
                style: style_tuyen_7_69,
                popuplayertitle: 'tuyen_7',
                interactive: true,
                title: '<img src="styles/legend/tuyen_7_69.png" /> tuyen_7'
            });
var format_tuyen_6_70 = new ol.format.GeoJSON();
var features_tuyen_6_70 = format_tuyen_6_70.readFeatures(json_tuyen_6_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_6_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_6_70.addFeatures(features_tuyen_6_70);
var lyr_tuyen_6_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_6_70, 
                style: style_tuyen_6_70,
                popuplayertitle: 'tuyen_6',
                interactive: true,
                title: '<img src="styles/legend/tuyen_6_70.png" /> tuyen_6'
            });
var format_tuyen_5_71 = new ol.format.GeoJSON();
var features_tuyen_5_71 = format_tuyen_5_71.readFeatures(json_tuyen_5_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_5_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_5_71.addFeatures(features_tuyen_5_71);
var lyr_tuyen_5_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_5_71, 
                style: style_tuyen_5_71,
                popuplayertitle: 'tuyen_5',
                interactive: true,
                title: '<img src="styles/legend/tuyen_5_71.png" /> tuyen_5'
            });
var format_tuyen_4_72 = new ol.format.GeoJSON();
var features_tuyen_4_72 = format_tuyen_4_72.readFeatures(json_tuyen_4_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_4_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_4_72.addFeatures(features_tuyen_4_72);
var lyr_tuyen_4_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_4_72, 
                style: style_tuyen_4_72,
                popuplayertitle: 'tuyen_4',
                interactive: true,
                title: '<img src="styles/legend/tuyen_4_72.png" /> tuyen_4'
            });
var format_tuyen_3_73 = new ol.format.GeoJSON();
var features_tuyen_3_73 = format_tuyen_3_73.readFeatures(json_tuyen_3_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_3_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_3_73.addFeatures(features_tuyen_3_73);
var lyr_tuyen_3_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_3_73, 
                style: style_tuyen_3_73,
                popuplayertitle: 'tuyen_3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_3_73.png" /> tuyen_3'
            });
var format_tuyen_2A_74 = new ol.format.GeoJSON();
var features_tuyen_2A_74 = format_tuyen_2A_74.readFeatures(json_tuyen_2A_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2A_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2A_74.addFeatures(features_tuyen_2A_74);
var lyr_tuyen_2A_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2A_74, 
                style: style_tuyen_2A_74,
                popuplayertitle: 'tuyen_2A',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2A_74.png" /> tuyen_2A'
            });
var format_tuyen_2_75 = new ol.format.GeoJSON();
var features_tuyen_2_75 = format_tuyen_2_75.readFeatures(json_tuyen_2_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2_75.addFeatures(features_tuyen_2_75);
var lyr_tuyen_2_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2_75, 
                style: style_tuyen_2_75,
                popuplayertitle: 'tuyen_2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2_75.png" /> tuyen_2'
            });
var format_tuyen_1_76 = new ol.format.GeoJSON();
var features_tuyen_1_76 = format_tuyen_1_76.readFeatures(json_tuyen_1_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_1_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_1_76.addFeatures(features_tuyen_1_76);
var lyr_tuyen_1_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_1_76, 
                style: style_tuyen_1_76,
                popuplayertitle: 'tuyen_1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_1_76.png" /> tuyen_1'
            });
var group_QH519 = new ol.layer.Group({
                                layers: [lyr_QH519Depot_63,lyr_tuyen_M3_64,lyr_tuyen_M2_65,lyr_tuyen_M1_66,lyr_tuyen_VT_67,lyr_tuyen_8_68,lyr_tuyen_7_69,lyr_tuyen_6_70,lyr_tuyen_5_71,lyr_tuyen_4_72,lyr_tuyen_3_73,lyr_tuyen_2A_74,lyr_tuyen_2_75,lyr_tuyen_1_76,],
                                fold: 'close',
                                title: 'QH 519'});
var group_CBT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CBĐT'});
var group_QH1668 = new ol.layer.Group({
                                layers: [lyr_T12_49,lyr_T11_50,lyr_T10_51,lyr_T9_52,lyr_T8_53,lyr_T7_54,lyr_T6_55,lyr_T5_56,lyr_T4_57,lyr_T3_58,lyr_T2A_59,lyr_T2_60,lyr_T1A_61,lyr_T1_62,],
                                fold: 'open',
                                title: 'QH1668'});
var group_RasoatSXD = new ol.layer.Group({
                                layers: [lyr_Layer_CcTuynmi_35,lyr_Layer_Tuyn12_36,lyr_Layer_Tuyn11_37,lyr_Layer_Tuyn10_38,lyr_Layer_Tuyn9_39,lyr_Layer_Tuyn8_40,lyr_Layer_Tuyn7_41,lyr_Layer_Tuyn6_42,lyr_Layer_Tuyn5_43,lyr_Layer_Tuyn4_44,lyr_Layer_Tuyn3_45,lyr_Layer_Tuyn2A_46,lyr_Layer_Tuyn2_47,lyr_Layer_Tuyn1_48,],
                                fold: 'open',
                                title: 'Ra soat SXD'});
var group_QH10007022026 = new ol.layer.Group({
                                layers: [lyr_QH100Tuyen16_23,lyr_QH100Tuyen14_24,lyr_QH100Tuyen9_25,lyr_QH100Tuyen8_26,lyr_QH100Tuyen7_27,lyr_QH100Tuyen6_28,lyr_QH100Tuyen5_29,lyr_QH100Tuyen4_30,lyr_QH100Tuyen3_31,lyr_QH100Tuyen2A_32,lyr_QH100Tuyen2_33,lyr_QH100Tuyen1_34,],
                                fold: 'close',
                                title: 'QH 100 (07-02-2026)'});
var group_QH10010022026 = new ol.layer.Group({
                                layers: [lyr_QH100DSDT17_7,lyr_QH100DSDT16_8,lyr_QH100DSDT15_9,lyr_QH100DSDT12_10,lyr_QH100DSDT11_11,lyr_QH100DSDT10_12,lyr_QH100DSDT9_13,lyr_QH100DSDT8_14,lyr_QH100DSDT7_15,lyr_QH100DSDT6_16,lyr_QH100DSDT5_17,lyr_QH100DSDT4_18,lyr_QH100DSDT3_19,lyr_QH100DSDT2A_20,lyr_QH100DSDT2_21,lyr_QH100DSDT1_22,],
                                fold: 'open',
                                title: 'QH100 (10-02-2026)'});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleTraffic_1.setVisible(false);lyr_GoogleTerrain_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(false);lyr_GoogleRoad_4.setVisible(true);lyr_GoogleLabels_5.setVisible(false);lyr_GoogleHybrid_6.setVisible(false);lyr_QH100DSDT17_7.setVisible(false);lyr_QH100DSDT16_8.setVisible(false);lyr_QH100DSDT15_9.setVisible(false);lyr_QH100DSDT12_10.setVisible(false);lyr_QH100DSDT11_11.setVisible(false);lyr_QH100DSDT10_12.setVisible(false);lyr_QH100DSDT9_13.setVisible(false);lyr_QH100DSDT8_14.setVisible(false);lyr_QH100DSDT7_15.setVisible(false);lyr_QH100DSDT6_16.setVisible(false);lyr_QH100DSDT5_17.setVisible(false);lyr_QH100DSDT4_18.setVisible(false);lyr_QH100DSDT3_19.setVisible(false);lyr_QH100DSDT2A_20.setVisible(false);lyr_QH100DSDT2_21.setVisible(false);lyr_QH100DSDT1_22.setVisible(false);lyr_QH100Tuyen16_23.setVisible(false);lyr_QH100Tuyen14_24.setVisible(false);lyr_QH100Tuyen9_25.setVisible(false);lyr_QH100Tuyen8_26.setVisible(false);lyr_QH100Tuyen7_27.setVisible(false);lyr_QH100Tuyen6_28.setVisible(false);lyr_QH100Tuyen5_29.setVisible(false);lyr_QH100Tuyen4_30.setVisible(false);lyr_QH100Tuyen3_31.setVisible(false);lyr_QH100Tuyen2A_32.setVisible(false);lyr_QH100Tuyen2_33.setVisible(false);lyr_QH100Tuyen1_34.setVisible(false);lyr_Layer_CcTuynmi_35.setVisible(false);lyr_Layer_Tuyn12_36.setVisible(false);lyr_Layer_Tuyn11_37.setVisible(false);lyr_Layer_Tuyn10_38.setVisible(false);lyr_Layer_Tuyn9_39.setVisible(false);lyr_Layer_Tuyn8_40.setVisible(false);lyr_Layer_Tuyn7_41.setVisible(false);lyr_Layer_Tuyn6_42.setVisible(false);lyr_Layer_Tuyn5_43.setVisible(false);lyr_Layer_Tuyn4_44.setVisible(false);lyr_Layer_Tuyn3_45.setVisible(false);lyr_Layer_Tuyn2A_46.setVisible(false);lyr_Layer_Tuyn2_47.setVisible(false);lyr_Layer_Tuyn1_48.setVisible(false);lyr_T12_49.setVisible(false);lyr_T11_50.setVisible(false);lyr_T10_51.setVisible(false);lyr_T9_52.setVisible(false);lyr_T8_53.setVisible(false);lyr_T7_54.setVisible(false);lyr_T6_55.setVisible(false);lyr_T5_56.setVisible(false);lyr_T4_57.setVisible(false);lyr_T3_58.setVisible(false);lyr_T2A_59.setVisible(false);lyr_T2_60.setVisible(false);lyr_T1A_61.setVisible(false);lyr_T1_62.setVisible(false);lyr_QH519Depot_63.setVisible(true);lyr_tuyen_M3_64.setVisible(true);lyr_tuyen_M2_65.setVisible(true);lyr_tuyen_M1_66.setVisible(true);lyr_tuyen_VT_67.setVisible(true);lyr_tuyen_8_68.setVisible(true);lyr_tuyen_7_69.setVisible(true);lyr_tuyen_6_70.setVisible(true);lyr_tuyen_5_71.setVisible(true);lyr_tuyen_4_72.setVisible(true);lyr_tuyen_3_73.setVisible(true);lyr_tuyen_2A_74.setVisible(true);lyr_tuyen_2_75.setVisible(true);lyr_tuyen_1_76.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleTraffic_1,lyr_GoogleTerrain_2,lyr_GoogleSatellite_3,lyr_GoogleRoad_4,lyr_GoogleLabels_5,lyr_GoogleHybrid_6,group_QH10010022026,group_QH10007022026,group_RasoatSXD,group_QH1668,group_QH519];
lyr_QH100DSDT17_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT16_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT15_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT12_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT11_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT10_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT9_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT8_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT7_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT6_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT5_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT4_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT3_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT2A_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT2_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT1_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100Tuyen16_23.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen14_24.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen9_25.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen8_26.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen7_27.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen6_28.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen5_29.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen4_30.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen3_31.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen2A_32.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen2_33.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen1_34.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_Layer_CcTuynmi_35.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn12_36.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn11_37.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn10_38.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn9_39.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn8_40.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn7_41.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn6_42.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn5_43.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn4_44.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn3_45.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn2A_46.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn2_47.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn1_48.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_T12_49.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T11_50.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T10_51.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T9_52.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T8_53.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T7_54.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T6_55.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T5_56.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T4_57.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T3_58.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T2A_59.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T2_60.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T1A_61.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T1_62.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_QH519Depot_63.set('fieldAliases', {'fid': 'fid', });
lyr_tuyen_M3_64.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M2_65.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M1_66.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_VT_67.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_8_68.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_7_69.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_6_70.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_5_71.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_4_72.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_3_73.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2A_74.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2_75.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_1_76.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_QH100DSDT17_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT16_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT15_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT12_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT11_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT10_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT9_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT8_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT7_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT6_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT5_17.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT4_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT3_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT2A_20.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT2_21.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT1_22.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100Tuyen16_23.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen14_24.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen9_25.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen8_26.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen7_27.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen6_28.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen5_29.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen4_30.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen3_31.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen2A_32.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen2_33.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen1_34.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_Layer_CcTuynmi_35.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn12_36.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn11_37.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn10_38.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn9_39.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn8_40.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn7_41.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn6_42.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn5_43.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn4_44.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn3_45.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn2A_46.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn2_47.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn1_48.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_T12_49.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T11_50.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T10_51.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T9_52.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T8_53.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T7_54.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T6_55.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T5_56.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T4_57.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T3_58.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T2A_59.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T2_60.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T1A_61.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T1_62.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_QH519Depot_63.set('fieldImages', {'fid': '', });
lyr_tuyen_M3_64.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M2_65.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M1_66.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_VT_67.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_8_68.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_7_69.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_6_70.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_5_71.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_4_72.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_3_73.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_2A_74.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_2_75.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_1_76.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_QH100DSDT17_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT16_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT15_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT12_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT11_11.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT10_12.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT9_13.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT8_14.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT7_15.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT6_16.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT5_17.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT4_18.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT3_19.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT2A_20.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT2_21.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT1_22.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100Tuyen16_23.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen14_24.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen9_25.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen8_26.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen7_27.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen6_28.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen5_29.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen4_30.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen3_31.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen2A_32.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen2_33.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen1_34.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_Layer_CcTuynmi_35.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn12_36.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn11_37.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn10_38.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn9_39.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn8_40.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn7_41.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn6_42.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn5_43.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn4_44.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn3_45.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn2A_46.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn2_47.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn1_48.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_T12_49.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T11_50.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T10_51.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T9_52.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T8_53.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T7_54.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T6_55.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T5_56.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T4_57.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T3_58.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T2A_59.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T2_60.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T1A_61.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T1_62.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_QH519Depot_63.set('fieldLabels', {'fid': 'hidden field', });
lyr_tuyen_M3_64.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_M2_65.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_M1_66.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_VT_67.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_8_68.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_7_69.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_6_70.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_5_71.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_4_72.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_3_73.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_2A_74.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_2_75.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_1_76.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_1_76.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});