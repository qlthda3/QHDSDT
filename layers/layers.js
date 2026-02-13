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
var format_QH100Ga_8 = new ol.format.GeoJSON();
var features_QH100Ga_8 = format_QH100Ga_8.readFeatures(json_QH100Ga_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Ga_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Ga_8.addFeatures(features_QH100Ga_8);
var lyr_QH100Ga_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Ga_8, 
                style: style_QH100Ga_8,
                popuplayertitle: 'QH100-Ga',
                interactive: true,
                title: '<img src="styles/legend/QH100Ga_8.png" /> QH100-Ga'
            });
var format_QH100Monorail_9 = new ol.format.GeoJSON();
var features_QH100Monorail_9 = format_QH100Monorail_9.readFeatures(json_QH100Monorail_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Monorail_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Monorail_9.addFeatures(features_QH100Monorail_9);
var lyr_QH100Monorail_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Monorail_9, 
                style: style_QH100Monorail_9,
                popuplayertitle: 'QH100-Monorail',
                interactive: true,
                title: '<img src="styles/legend/QH100Monorail_9.png" /> QH100-Monorail'
            });
var format_QH100dsDT_10 = new ol.format.GeoJSON();
var features_QH100dsDT_10 = format_QH100dsDT_10.readFeatures(json_QH100dsDT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100dsDT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100dsDT_10.addFeatures(features_QH100dsDT_10);
var lyr_QH100dsDT_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100dsDT_10, 
                style: style_QH100dsDT_10,
                popuplayertitle: 'QH100-dsDT',
                interactive: true,
                title: '<img src="styles/legend/QH100dsDT_10.png" /> QH100-dsDT'
            });
var format_QH100DSDT17_11 = new ol.format.GeoJSON();
var features_QH100DSDT17_11 = format_QH100DSDT17_11.readFeatures(json_QH100DSDT17_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT17_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT17_11.addFeatures(features_QH100DSDT17_11);
var lyr_QH100DSDT17_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT17_11, 
                style: style_QH100DSDT17_11,
                popuplayertitle: 'QH100-DSDT 17',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT17_11.png" /> QH100-DSDT 17'
            });
var format_QH100DSDT16_12 = new ol.format.GeoJSON();
var features_QH100DSDT16_12 = format_QH100DSDT16_12.readFeatures(json_QH100DSDT16_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT16_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT16_12.addFeatures(features_QH100DSDT16_12);
var lyr_QH100DSDT16_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT16_12, 
                style: style_QH100DSDT16_12,
                popuplayertitle: 'QH100-DSDT 16',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT16_12.png" /> QH100-DSDT 16'
            });
var format_QH100DSDT15_13 = new ol.format.GeoJSON();
var features_QH100DSDT15_13 = format_QH100DSDT15_13.readFeatures(json_QH100DSDT15_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT15_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT15_13.addFeatures(features_QH100DSDT15_13);
var lyr_QH100DSDT15_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT15_13, 
                style: style_QH100DSDT15_13,
                popuplayertitle: 'QH100-DSDT 15',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT15_13.png" /> QH100-DSDT 15'
            });
var format_QH100DSDT12_14 = new ol.format.GeoJSON();
var features_QH100DSDT12_14 = format_QH100DSDT12_14.readFeatures(json_QH100DSDT12_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT12_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT12_14.addFeatures(features_QH100DSDT12_14);
var lyr_QH100DSDT12_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT12_14, 
                style: style_QH100DSDT12_14,
                popuplayertitle: 'QH100-DSDT 12',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT12_14.png" /> QH100-DSDT 12'
            });
var format_QH100DSDT11_15 = new ol.format.GeoJSON();
var features_QH100DSDT11_15 = format_QH100DSDT11_15.readFeatures(json_QH100DSDT11_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT11_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT11_15.addFeatures(features_QH100DSDT11_15);
var lyr_QH100DSDT11_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT11_15, 
                style: style_QH100DSDT11_15,
                popuplayertitle: 'QH100-DSDT 11',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT11_15.png" /> QH100-DSDT 11'
            });
var format_QH100DSDT10_16 = new ol.format.GeoJSON();
var features_QH100DSDT10_16 = format_QH100DSDT10_16.readFeatures(json_QH100DSDT10_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT10_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT10_16.addFeatures(features_QH100DSDT10_16);
var lyr_QH100DSDT10_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT10_16, 
                style: style_QH100DSDT10_16,
                popuplayertitle: 'QH100-DSDT 10',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT10_16.png" /> QH100-DSDT 10'
            });
var format_QH100DSDT9_17 = new ol.format.GeoJSON();
var features_QH100DSDT9_17 = format_QH100DSDT9_17.readFeatures(json_QH100DSDT9_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT9_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT9_17.addFeatures(features_QH100DSDT9_17);
var lyr_QH100DSDT9_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT9_17, 
                style: style_QH100DSDT9_17,
                popuplayertitle: 'QH100-DSDT 9',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT9_17.png" /> QH100-DSDT 9'
            });
var format_QH100DSDT8_18 = new ol.format.GeoJSON();
var features_QH100DSDT8_18 = format_QH100DSDT8_18.readFeatures(json_QH100DSDT8_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT8_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT8_18.addFeatures(features_QH100DSDT8_18);
var lyr_QH100DSDT8_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT8_18, 
                style: style_QH100DSDT8_18,
                popuplayertitle: 'QH100-DSDT 8',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT8_18.png" /> QH100-DSDT 8'
            });
var format_QH100DSDT7_19 = new ol.format.GeoJSON();
var features_QH100DSDT7_19 = format_QH100DSDT7_19.readFeatures(json_QH100DSDT7_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT7_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT7_19.addFeatures(features_QH100DSDT7_19);
var lyr_QH100DSDT7_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT7_19, 
                style: style_QH100DSDT7_19,
                popuplayertitle: 'QH100-DSDT 7',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT7_19.png" /> QH100-DSDT 7'
            });
var format_QH100DSDT6_20 = new ol.format.GeoJSON();
var features_QH100DSDT6_20 = format_QH100DSDT6_20.readFeatures(json_QH100DSDT6_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT6_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT6_20.addFeatures(features_QH100DSDT6_20);
var lyr_QH100DSDT6_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT6_20, 
                style: style_QH100DSDT6_20,
                popuplayertitle: 'QH100-DSDT 6',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT6_20.png" /> QH100-DSDT 6'
            });
var format_QH100DSDT5_21 = new ol.format.GeoJSON();
var features_QH100DSDT5_21 = format_QH100DSDT5_21.readFeatures(json_QH100DSDT5_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT5_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT5_21.addFeatures(features_QH100DSDT5_21);
var lyr_QH100DSDT5_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT5_21, 
                style: style_QH100DSDT5_21,
                popuplayertitle: 'QH100-DSDT 5',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT5_21.png" /> QH100-DSDT 5'
            });
var format_QH100DSDT4_22 = new ol.format.GeoJSON();
var features_QH100DSDT4_22 = format_QH100DSDT4_22.readFeatures(json_QH100DSDT4_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT4_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT4_22.addFeatures(features_QH100DSDT4_22);
var lyr_QH100DSDT4_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT4_22, 
                style: style_QH100DSDT4_22,
                popuplayertitle: 'QH100-DSDT 4',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT4_22.png" /> QH100-DSDT 4'
            });
var format_QH100DSDT3_23 = new ol.format.GeoJSON();
var features_QH100DSDT3_23 = format_QH100DSDT3_23.readFeatures(json_QH100DSDT3_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT3_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT3_23.addFeatures(features_QH100DSDT3_23);
var lyr_QH100DSDT3_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT3_23, 
                style: style_QH100DSDT3_23,
                popuplayertitle: 'QH100-DSDT 3',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT3_23.png" /> QH100-DSDT 3'
            });
var format_QH100DSDT2A_24 = new ol.format.GeoJSON();
var features_QH100DSDT2A_24 = format_QH100DSDT2A_24.readFeatures(json_QH100DSDT2A_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT2A_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT2A_24.addFeatures(features_QH100DSDT2A_24);
var lyr_QH100DSDT2A_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT2A_24, 
                style: style_QH100DSDT2A_24,
                popuplayertitle: 'QH100-DSDT 2A',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT2A_24.png" /> QH100-DSDT 2A'
            });
var format_QH100DSDT2_25 = new ol.format.GeoJSON();
var features_QH100DSDT2_25 = format_QH100DSDT2_25.readFeatures(json_QH100DSDT2_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT2_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT2_25.addFeatures(features_QH100DSDT2_25);
var lyr_QH100DSDT2_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT2_25, 
                style: style_QH100DSDT2_25,
                popuplayertitle: 'QH100-DSDT 2',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT2_25.png" /> QH100-DSDT 2'
            });
var format_QH100DSDT1_26 = new ol.format.GeoJSON();
var features_QH100DSDT1_26 = format_QH100DSDT1_26.readFeatures(json_QH100DSDT1_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT1_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT1_26.addFeatures(features_QH100DSDT1_26);
var lyr_QH100DSDT1_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT1_26, 
                style: style_QH100DSDT1_26,
                popuplayertitle: 'QH100-DSDT 1',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT1_26.png" /> QH100-DSDT 1'
            });
var format_QH100Tuyen16_27 = new ol.format.GeoJSON();
var features_QH100Tuyen16_27 = format_QH100Tuyen16_27.readFeatures(json_QH100Tuyen16_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen16_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen16_27.addFeatures(features_QH100Tuyen16_27);
var lyr_QH100Tuyen16_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen16_27, 
                style: style_QH100Tuyen16_27,
                popuplayertitle: 'QH100 Tuyen-16',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen16_27.png" /> QH100 Tuyen-16'
            });
var format_QH100Tuyen14_28 = new ol.format.GeoJSON();
var features_QH100Tuyen14_28 = format_QH100Tuyen14_28.readFeatures(json_QH100Tuyen14_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen14_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen14_28.addFeatures(features_QH100Tuyen14_28);
var lyr_QH100Tuyen14_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen14_28, 
                style: style_QH100Tuyen14_28,
                popuplayertitle: 'QH100 Tuyen-14',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen14_28.png" /> QH100 Tuyen-14'
            });
var format_QH100Tuyen9_29 = new ol.format.GeoJSON();
var features_QH100Tuyen9_29 = format_QH100Tuyen9_29.readFeatures(json_QH100Tuyen9_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen9_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen9_29.addFeatures(features_QH100Tuyen9_29);
var lyr_QH100Tuyen9_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen9_29, 
                style: style_QH100Tuyen9_29,
                popuplayertitle: 'QH100 Tuyen-9',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen9_29.png" /> QH100 Tuyen-9'
            });
var format_QH100Tuyen8_30 = new ol.format.GeoJSON();
var features_QH100Tuyen8_30 = format_QH100Tuyen8_30.readFeatures(json_QH100Tuyen8_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen8_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen8_30.addFeatures(features_QH100Tuyen8_30);
var lyr_QH100Tuyen8_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen8_30, 
                style: style_QH100Tuyen8_30,
                popuplayertitle: 'QH100 Tuyen-8',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen8_30.png" /> QH100 Tuyen-8'
            });
var format_QH100Tuyen7_31 = new ol.format.GeoJSON();
var features_QH100Tuyen7_31 = format_QH100Tuyen7_31.readFeatures(json_QH100Tuyen7_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen7_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen7_31.addFeatures(features_QH100Tuyen7_31);
var lyr_QH100Tuyen7_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen7_31, 
                style: style_QH100Tuyen7_31,
                popuplayertitle: 'QH100 Tuyen-7',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen7_31.png" /> QH100 Tuyen-7'
            });
var format_QH100Tuyen6_32 = new ol.format.GeoJSON();
var features_QH100Tuyen6_32 = format_QH100Tuyen6_32.readFeatures(json_QH100Tuyen6_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen6_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen6_32.addFeatures(features_QH100Tuyen6_32);
var lyr_QH100Tuyen6_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen6_32, 
                style: style_QH100Tuyen6_32,
                popuplayertitle: 'QH100 Tuyen-6',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen6_32.png" /> QH100 Tuyen-6'
            });
var format_QH100Tuyen5_33 = new ol.format.GeoJSON();
var features_QH100Tuyen5_33 = format_QH100Tuyen5_33.readFeatures(json_QH100Tuyen5_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen5_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen5_33.addFeatures(features_QH100Tuyen5_33);
var lyr_QH100Tuyen5_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen5_33, 
                style: style_QH100Tuyen5_33,
                popuplayertitle: 'QH100 Tuyen-5',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen5_33.png" /> QH100 Tuyen-5'
            });
var format_QH100Tuyen4_34 = new ol.format.GeoJSON();
var features_QH100Tuyen4_34 = format_QH100Tuyen4_34.readFeatures(json_QH100Tuyen4_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen4_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen4_34.addFeatures(features_QH100Tuyen4_34);
var lyr_QH100Tuyen4_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen4_34, 
                style: style_QH100Tuyen4_34,
                popuplayertitle: 'QH100 Tuyen-4',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen4_34.png" /> QH100 Tuyen-4'
            });
var format_QH100Tuyen3_35 = new ol.format.GeoJSON();
var features_QH100Tuyen3_35 = format_QH100Tuyen3_35.readFeatures(json_QH100Tuyen3_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen3_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen3_35.addFeatures(features_QH100Tuyen3_35);
var lyr_QH100Tuyen3_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen3_35, 
                style: style_QH100Tuyen3_35,
                popuplayertitle: 'QH100 Tuyen-3',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen3_35.png" /> QH100 Tuyen-3'
            });
var format_QH100Tuyen2A_36 = new ol.format.GeoJSON();
var features_QH100Tuyen2A_36 = format_QH100Tuyen2A_36.readFeatures(json_QH100Tuyen2A_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen2A_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen2A_36.addFeatures(features_QH100Tuyen2A_36);
var lyr_QH100Tuyen2A_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen2A_36, 
                style: style_QH100Tuyen2A_36,
                popuplayertitle: 'QH100 Tuyen-2A',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen2A_36.png" /> QH100 Tuyen-2A'
            });
var format_QH100Tuyen2_37 = new ol.format.GeoJSON();
var features_QH100Tuyen2_37 = format_QH100Tuyen2_37.readFeatures(json_QH100Tuyen2_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen2_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen2_37.addFeatures(features_QH100Tuyen2_37);
var lyr_QH100Tuyen2_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen2_37, 
                style: style_QH100Tuyen2_37,
                popuplayertitle: 'QH100 Tuyen-2',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen2_37.png" /> QH100 Tuyen-2'
            });
var format_QH100Tuyen1_38 = new ol.format.GeoJSON();
var features_QH100Tuyen1_38 = format_QH100Tuyen1_38.readFeatures(json_QH100Tuyen1_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Tuyen1_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Tuyen1_38.addFeatures(features_QH100Tuyen1_38);
var lyr_QH100Tuyen1_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Tuyen1_38, 
                style: style_QH100Tuyen1_38,
                popuplayertitle: 'QH100 Tuyen-1',
                interactive: true,
                title: '<img src="styles/legend/QH100Tuyen1_38.png" /> QH100 Tuyen-1'
            });
var format_Layer_CcTuynmi_39 = new ol.format.GeoJSON();
var features_Layer_CcTuynmi_39 = format_Layer_CcTuynmi_39.readFeatures(json_Layer_CcTuynmi_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_CcTuynmi_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_CcTuynmi_39.addFeatures(features_Layer_CcTuynmi_39);
var lyr_Layer_CcTuynmi_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_CcTuynmi_39, 
                style: style_Layer_CcTuynmi_39,
                popuplayertitle: 'Layer_Các Tuyến mới',
                interactive: true,
                title: '<img src="styles/legend/Layer_CcTuynmi_39.png" /> Layer_Các Tuyến mới'
            });
var format_Layer_Tuyn12_40 = new ol.format.GeoJSON();
var features_Layer_Tuyn12_40 = format_Layer_Tuyn12_40.readFeatures(json_Layer_Tuyn12_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn12_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn12_40.addFeatures(features_Layer_Tuyn12_40);
var lyr_Layer_Tuyn12_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn12_40, 
                style: style_Layer_Tuyn12_40,
                popuplayertitle: 'Layer_Tuyến 12',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn12_40.png" /> Layer_Tuyến 12'
            });
var format_Layer_Tuyn11_41 = new ol.format.GeoJSON();
var features_Layer_Tuyn11_41 = format_Layer_Tuyn11_41.readFeatures(json_Layer_Tuyn11_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn11_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn11_41.addFeatures(features_Layer_Tuyn11_41);
var lyr_Layer_Tuyn11_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn11_41, 
                style: style_Layer_Tuyn11_41,
                popuplayertitle: 'Layer_Tuyến 11',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn11_41.png" /> Layer_Tuyến 11'
            });
var format_Layer_Tuyn10_42 = new ol.format.GeoJSON();
var features_Layer_Tuyn10_42 = format_Layer_Tuyn10_42.readFeatures(json_Layer_Tuyn10_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn10_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn10_42.addFeatures(features_Layer_Tuyn10_42);
var lyr_Layer_Tuyn10_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn10_42, 
                style: style_Layer_Tuyn10_42,
                popuplayertitle: 'Layer_Tuyến 10',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn10_42.png" /> Layer_Tuyến 10'
            });
var format_Layer_Tuyn9_43 = new ol.format.GeoJSON();
var features_Layer_Tuyn9_43 = format_Layer_Tuyn9_43.readFeatures(json_Layer_Tuyn9_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn9_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn9_43.addFeatures(features_Layer_Tuyn9_43);
var lyr_Layer_Tuyn9_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn9_43, 
                style: style_Layer_Tuyn9_43,
                popuplayertitle: 'Layer_Tuyến 9',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn9_43.png" /> Layer_Tuyến 9'
            });
var format_Layer_Tuyn8_44 = new ol.format.GeoJSON();
var features_Layer_Tuyn8_44 = format_Layer_Tuyn8_44.readFeatures(json_Layer_Tuyn8_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn8_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn8_44.addFeatures(features_Layer_Tuyn8_44);
var lyr_Layer_Tuyn8_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn8_44, 
                style: style_Layer_Tuyn8_44,
                popuplayertitle: 'Layer_Tuyến 8',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn8_44.png" /> Layer_Tuyến 8'
            });
var format_Layer_Tuyn7_45 = new ol.format.GeoJSON();
var features_Layer_Tuyn7_45 = format_Layer_Tuyn7_45.readFeatures(json_Layer_Tuyn7_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn7_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn7_45.addFeatures(features_Layer_Tuyn7_45);
var lyr_Layer_Tuyn7_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn7_45, 
                style: style_Layer_Tuyn7_45,
                popuplayertitle: 'Layer_Tuyến 7',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn7_45.png" /> Layer_Tuyến 7'
            });
var format_Layer_Tuyn6_46 = new ol.format.GeoJSON();
var features_Layer_Tuyn6_46 = format_Layer_Tuyn6_46.readFeatures(json_Layer_Tuyn6_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn6_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn6_46.addFeatures(features_Layer_Tuyn6_46);
var lyr_Layer_Tuyn6_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn6_46, 
                style: style_Layer_Tuyn6_46,
                popuplayertitle: 'Layer_Tuyến 6',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn6_46.png" /> Layer_Tuyến 6'
            });
var format_Layer_Tuyn5_47 = new ol.format.GeoJSON();
var features_Layer_Tuyn5_47 = format_Layer_Tuyn5_47.readFeatures(json_Layer_Tuyn5_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn5_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn5_47.addFeatures(features_Layer_Tuyn5_47);
var lyr_Layer_Tuyn5_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn5_47, 
                style: style_Layer_Tuyn5_47,
                popuplayertitle: 'Layer_Tuyến 5',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn5_47.png" /> Layer_Tuyến 5'
            });
var format_Layer_Tuyn4_48 = new ol.format.GeoJSON();
var features_Layer_Tuyn4_48 = format_Layer_Tuyn4_48.readFeatures(json_Layer_Tuyn4_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn4_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn4_48.addFeatures(features_Layer_Tuyn4_48);
var lyr_Layer_Tuyn4_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn4_48, 
                style: style_Layer_Tuyn4_48,
                popuplayertitle: 'Layer_Tuyến 4',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn4_48.png" /> Layer_Tuyến 4'
            });
var format_Layer_Tuyn3_49 = new ol.format.GeoJSON();
var features_Layer_Tuyn3_49 = format_Layer_Tuyn3_49.readFeatures(json_Layer_Tuyn3_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn3_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn3_49.addFeatures(features_Layer_Tuyn3_49);
var lyr_Layer_Tuyn3_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn3_49, 
                style: style_Layer_Tuyn3_49,
                popuplayertitle: 'Layer_Tuyến 3',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn3_49.png" /> Layer_Tuyến 3'
            });
var format_Layer_Tuyn2A_50 = new ol.format.GeoJSON();
var features_Layer_Tuyn2A_50 = format_Layer_Tuyn2A_50.readFeatures(json_Layer_Tuyn2A_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn2A_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn2A_50.addFeatures(features_Layer_Tuyn2A_50);
var lyr_Layer_Tuyn2A_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn2A_50, 
                style: style_Layer_Tuyn2A_50,
                popuplayertitle: 'Layer_Tuyến 2A',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn2A_50.png" /> Layer_Tuyến 2A'
            });
var format_Layer_Tuyn2_51 = new ol.format.GeoJSON();
var features_Layer_Tuyn2_51 = format_Layer_Tuyn2_51.readFeatures(json_Layer_Tuyn2_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn2_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn2_51.addFeatures(features_Layer_Tuyn2_51);
var lyr_Layer_Tuyn2_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn2_51, 
                style: style_Layer_Tuyn2_51,
                popuplayertitle: 'Layer_Tuyến 2',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn2_51.png" /> Layer_Tuyến 2'
            });
var format_Layer_Tuyn1_52 = new ol.format.GeoJSON();
var features_Layer_Tuyn1_52 = format_Layer_Tuyn1_52.readFeatures(json_Layer_Tuyn1_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn1_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn1_52.addFeatures(features_Layer_Tuyn1_52);
var lyr_Layer_Tuyn1_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn1_52, 
                style: style_Layer_Tuyn1_52,
                popuplayertitle: 'Layer_Tuyến 1',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn1_52.png" /> Layer_Tuyến 1'
            });
var format_Line5PAtuyenkml_53 = new ol.format.GeoJSON();
var features_Line5PAtuyenkml_53 = format_Line5PAtuyenkml_53.readFeatures(json_Line5PAtuyenkml_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line5PAtuyenkml_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line5PAtuyenkml_53.addFeatures(features_Line5PAtuyenkml_53);
var lyr_Line5PAtuyenkml_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line5PAtuyenkml_53, 
                style: style_Line5PAtuyenkml_53,
                popuplayertitle: 'Line 5 PA tuyen.kml',
                interactive: true,
                title: 'Line 5 PA tuyen.kml'
            });
var format_Line5PAtuyenkml_54 = new ol.format.GeoJSON();
var features_Line5PAtuyenkml_54 = format_Line5PAtuyenkml_54.readFeatures(json_Line5PAtuyenkml_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line5PAtuyenkml_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line5PAtuyenkml_54.addFeatures(features_Line5PAtuyenkml_54);
var lyr_Line5PAtuyenkml_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line5PAtuyenkml_54, 
                style: style_Line5PAtuyenkml_54,
                popuplayertitle: 'Line 5 PA tuyen.kml',
                interactive: true,
                title: '<img src="styles/legend/Line5PAtuyenkml_54.png" /> Line 5 PA tuyen.kml'
            });
var format_Line5PAtuyenkml_55 = new ol.format.GeoJSON();
var features_Line5PAtuyenkml_55 = format_Line5PAtuyenkml_55.readFeatures(json_Line5PAtuyenkml_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line5PAtuyenkml_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line5PAtuyenkml_55.addFeatures(features_Line5PAtuyenkml_55);
var lyr_Line5PAtuyenkml_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line5PAtuyenkml_55, 
                style: style_Line5PAtuyenkml_55,
                popuplayertitle: 'Line 5 PA tuyen.kml',
                interactive: true,
                title: '<img src="styles/legend/Line5PAtuyenkml_55.png" /> Line 5 PA tuyen.kml'
            });
var format_Line32DepotYenSo_56 = new ol.format.GeoJSON();
var features_Line32DepotYenSo_56 = format_Line32DepotYenSo_56.readFeatures(json_Line32DepotYenSo_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32DepotYenSo_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32DepotYenSo_56.addFeatures(features_Line32DepotYenSo_56);
var lyr_Line32DepotYenSo_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32DepotYenSo_56, 
                style: style_Line32DepotYenSo_56,
                popuplayertitle: 'Line 3.2 Depot Yen So',
                interactive: true,
                title: 'Line 3.2 Depot Yen So'
            });
var format_Line32GaPolygon_57 = new ol.format.GeoJSON();
var features_Line32GaPolygon_57 = format_Line32GaPolygon_57.readFeatures(json_Line32GaPolygon_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32GaPolygon_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32GaPolygon_57.addFeatures(features_Line32GaPolygon_57);
var lyr_Line32GaPolygon_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32GaPolygon_57, 
                style: style_Line32GaPolygon_57,
                popuplayertitle: 'Line 3.2 Ga-Polygon',
                interactive: true,
                title: 'Line 3.2 Ga-Polygon'
            });
var format_Line32TuyenLinestring_58 = new ol.format.GeoJSON();
var features_Line32TuyenLinestring_58 = format_Line32TuyenLinestring_58.readFeatures(json_Line32TuyenLinestring_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32TuyenLinestring_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32TuyenLinestring_58.addFeatures(features_Line32TuyenLinestring_58);
var lyr_Line32TuyenLinestring_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32TuyenLinestring_58, 
                style: style_Line32TuyenLinestring_58,
                popuplayertitle: 'Line 3.2 Tuyen-Linestring',
                interactive: true,
                title: '<img src="styles/legend/Line32TuyenLinestring_58.png" /> Line 3.2 Tuyen-Linestring'
            });
var format_Line32DepotYenSo_59 = new ol.format.GeoJSON();
var features_Line32DepotYenSo_59 = format_Line32DepotYenSo_59.readFeatures(json_Line32DepotYenSo_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32DepotYenSo_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32DepotYenSo_59.addFeatures(features_Line32DepotYenSo_59);
var lyr_Line32DepotYenSo_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32DepotYenSo_59, 
                style: style_Line32DepotYenSo_59,
                popuplayertitle: 'Line 3.2 Depot Yen So',
                interactive: true,
                title: 'Line 3.2 Depot Yen So'
            });
var format_Line32GaPoint_60 = new ol.format.GeoJSON();
var features_Line32GaPoint_60 = format_Line32GaPoint_60.readFeatures(json_Line32GaPoint_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32GaPoint_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32GaPoint_60.addFeatures(features_Line32GaPoint_60);
var lyr_Line32GaPoint_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32GaPoint_60, 
                style: style_Line32GaPoint_60,
                popuplayertitle: 'Line 3.2 Ga-Point',
                interactive: true,
                title: '<img src="styles/legend/Line32GaPoint_60.png" /> Line 3.2 Ga-Point'
            });
var format_T2AextGaPolygon_61 = new ol.format.GeoJSON();
var features_T2AextGaPolygon_61 = format_T2AextGaPolygon_61.readFeatures(json_T2AextGaPolygon_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2AextGaPolygon_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2AextGaPolygon_61.addFeatures(features_T2AextGaPolygon_61);
var lyr_T2AextGaPolygon_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2AextGaPolygon_61, 
                style: style_T2AextGaPolygon_61,
                popuplayertitle: 'T2Aext-Ga Polygon',
                interactive: true,
                title: 'T2Aext-Ga Polygon'
            });
var format_T2AextGaPoint_62 = new ol.format.GeoJSON();
var features_T2AextGaPoint_62 = format_T2AextGaPoint_62.readFeatures(json_T2AextGaPoint_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2AextGaPoint_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2AextGaPoint_62.addFeatures(features_T2AextGaPoint_62);
var lyr_T2AextGaPoint_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2AextGaPoint_62, 
                style: style_T2AextGaPoint_62,
                popuplayertitle: 'T2Aext-Ga Point',
                interactive: true,
                title: '<img src="styles/legend/T2AextGaPoint_62.png" /> T2Aext-Ga Point'
            });
var format_Line23DepotSocSon_63 = new ol.format.GeoJSON();
var features_Line23DepotSocSon_63 = format_Line23DepotSocSon_63.readFeatures(json_Line23DepotSocSon_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23DepotSocSon_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23DepotSocSon_63.addFeatures(features_Line23DepotSocSon_63);
var lyr_Line23DepotSocSon_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23DepotSocSon_63, 
                style: style_Line23DepotSocSon_63,
                popuplayertitle: 'Line 2.3 Depot Soc Son',
                interactive: true,
                title: 'Line 2.3 Depot Soc Son'
            });
var format_Line23GaPolygon_64 = new ol.format.GeoJSON();
var features_Line23GaPolygon_64 = format_Line23GaPolygon_64.readFeatures(json_Line23GaPolygon_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23GaPolygon_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23GaPolygon_64.addFeatures(features_Line23GaPolygon_64);
var lyr_Line23GaPolygon_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23GaPolygon_64, 
                style: style_Line23GaPolygon_64,
                popuplayertitle: 'Line 2.3 Ga-Polygon',
                interactive: true,
                title: 'Line 2.3 Ga-Polygon'
            });
var format_Line23TuyenLinestring_65 = new ol.format.GeoJSON();
var features_Line23TuyenLinestring_65 = format_Line23TuyenLinestring_65.readFeatures(json_Line23TuyenLinestring_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23TuyenLinestring_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23TuyenLinestring_65.addFeatures(features_Line23TuyenLinestring_65);
var lyr_Line23TuyenLinestring_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23TuyenLinestring_65, 
                style: style_Line23TuyenLinestring_65,
                popuplayertitle: 'Line 2.3 Tuyen-Linestring',
                interactive: true,
                title: '<img src="styles/legend/Line23TuyenLinestring_65.png" /> Line 2.3 Tuyen-Linestring'
            });
var format_Line23DepotSocSon_66 = new ol.format.GeoJSON();
var features_Line23DepotSocSon_66 = format_Line23DepotSocSon_66.readFeatures(json_Line23DepotSocSon_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23DepotSocSon_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23DepotSocSon_66.addFeatures(features_Line23DepotSocSon_66);
var lyr_Line23DepotSocSon_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23DepotSocSon_66, 
                style: style_Line23DepotSocSon_66,
                popuplayertitle: 'Line 2.3 Depot Soc Son',
                interactive: true,
                title: 'Line 2.3 Depot Soc Son'
            });
var format_Line23GaPoint_67 = new ol.format.GeoJSON();
var features_Line23GaPoint_67 = format_Line23GaPoint_67.readFeatures(json_Line23GaPoint_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23GaPoint_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23GaPoint_67.addFeatures(features_Line23GaPoint_67);
var lyr_Line23GaPoint_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23GaPoint_67, 
                style: style_Line23GaPoint_67,
                popuplayertitle: 'Line 2.3 Ga-Point',
                interactive: true,
                title: '<img src="styles/legend/Line23GaPoint_67.png" /> Line 2.3 Ga-Point'
            });
var format_Line22GaPolygon_68 = new ol.format.GeoJSON();
var features_Line22GaPolygon_68 = format_Line22GaPolygon_68.readFeatures(json_Line22GaPolygon_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line22GaPolygon_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line22GaPolygon_68.addFeatures(features_Line22GaPolygon_68);
var lyr_Line22GaPolygon_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line22GaPolygon_68, 
                style: style_Line22GaPolygon_68,
                popuplayertitle: 'Line 2.2 Ga-Polygon',
                interactive: true,
                title: 'Line 2.2 Ga-Polygon'
            });
var format_Line22TuyenLinestring_69 = new ol.format.GeoJSON();
var features_Line22TuyenLinestring_69 = format_Line22TuyenLinestring_69.readFeatures(json_Line22TuyenLinestring_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line22TuyenLinestring_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line22TuyenLinestring_69.addFeatures(features_Line22TuyenLinestring_69);
var lyr_Line22TuyenLinestring_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line22TuyenLinestring_69, 
                style: style_Line22TuyenLinestring_69,
                popuplayertitle: 'Line 2.2 Tuyen-Linestring',
                interactive: true,
                title: '<img src="styles/legend/Line22TuyenLinestring_69.png" /> Line 2.2 Tuyen-Linestring'
            });
var format_Line22GaPoint_70 = new ol.format.GeoJSON();
var features_Line22GaPoint_70 = format_Line22GaPoint_70.readFeatures(json_Line22GaPoint_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line22GaPoint_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line22GaPoint_70.addFeatures(features_Line22GaPoint_70);
var lyr_Line22GaPoint_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line22GaPoint_70, 
                style: style_Line22GaPoint_70,
                popuplayertitle: 'Line 2.2 Ga-Point',
                interactive: true,
                title: '<img src="styles/legend/Line22GaPoint_70.png" /> Line 2.2 Ga-Point'
            });
var format_T21Nhaga_71 = new ol.format.GeoJSON();
var features_T21Nhaga_71 = format_T21Nhaga_71.readFeatures(json_T21Nhaga_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T21Nhaga_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T21Nhaga_71.addFeatures(features_T21Nhaga_71);
var lyr_T21Nhaga_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T21Nhaga_71, 
                style: style_T21Nhaga_71,
                popuplayertitle: 'T2.1-Nha ga',
                interactive: true,
                title: '<img src="styles/legend/T21Nhaga_71.png" /> T2.1-Nha ga'
            });
var format_T21NorthBound_72 = new ol.format.GeoJSON();
var features_T21NorthBound_72 = format_T21NorthBound_72.readFeatures(json_T21NorthBound_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T21NorthBound_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T21NorthBound_72.addFeatures(features_T21NorthBound_72);
var lyr_T21NorthBound_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T21NorthBound_72, 
                style: style_T21NorthBound_72,
                popuplayertitle: 'T2.1-NorthBound',
                interactive: true,
                title: '<img src="styles/legend/T21NorthBound_72.png" /> T2.1-NorthBound'
            });
var format_T21SouthBound_73 = new ol.format.GeoJSON();
var features_T21SouthBound_73 = format_T21SouthBound_73.readFeatures(json_T21SouthBound_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T21SouthBound_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T21SouthBound_73.addFeatures(features_T21SouthBound_73);
var lyr_T21SouthBound_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T21SouthBound_73, 
                style: style_T21SouthBound_73,
                popuplayertitle: 'T2.1-SouthBound',
                interactive: true,
                title: '<img src="styles/legend/T21SouthBound_73.png" /> T2.1-SouthBound'
            });
var format_T21TimTuyen_74 = new ol.format.GeoJSON();
var features_T21TimTuyen_74 = format_T21TimTuyen_74.readFeatures(json_T21TimTuyen_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T21TimTuyen_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T21TimTuyen_74.addFeatures(features_T21TimTuyen_74);
var lyr_T21TimTuyen_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T21TimTuyen_74, 
                style: style_T21TimTuyen_74,
                popuplayertitle: 'T2.1-Tim Tuyen',
                interactive: true,
                title: '<img src="styles/legend/T21TimTuyen_74.png" /> T2.1-Tim Tuyen'
            });
var format_T21NhagaText_75 = new ol.format.GeoJSON();
var features_T21NhagaText_75 = format_T21NhagaText_75.readFeatures(json_T21NhagaText_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T21NhagaText_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T21NhagaText_75.addFeatures(features_T21NhagaText_75);
var lyr_T21NhagaText_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T21NhagaText_75, 
                style: style_T21NhagaText_75,
                popuplayertitle: 'T2.1-Nha ga - Text',
                interactive: true,
                title: 'T2.1-Nha ga - Text'
            });
var format_T21Depot_76 = new ol.format.GeoJSON();
var features_T21Depot_76 = format_T21Depot_76.readFeatures(json_T21Depot_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T21Depot_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T21Depot_76.addFeatures(features_T21Depot_76);
var lyr_T21Depot_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T21Depot_76, 
                style: style_T21Depot_76,
                popuplayertitle: 'T2.1-Depot',
                interactive: true,
                title: '<img src="styles/legend/T21Depot_76.png" /> T2.1-Depot'
            });
var format_QH519Depot_77 = new ol.format.GeoJSON();
var features_QH519Depot_77 = format_QH519Depot_77.readFeatures(json_QH519Depot_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH519Depot_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH519Depot_77.addFeatures(features_QH519Depot_77);
var lyr_QH519Depot_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH519Depot_77, 
                style: style_QH519Depot_77,
                popuplayertitle: 'QH519-Depot',
                interactive: false,
                title: '<img src="styles/legend/QH519Depot_77.png" /> QH519-Depot'
            });
var format_tuyen_M3_78 = new ol.format.GeoJSON();
var features_tuyen_M3_78 = format_tuyen_M3_78.readFeatures(json_tuyen_M3_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M3_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M3_78.addFeatures(features_tuyen_M3_78);
var lyr_tuyen_M3_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M3_78, 
                style: style_tuyen_M3_78,
                popuplayertitle: 'tuyen_M3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M3_78.png" /> tuyen_M3'
            });
var format_tuyen_M2_79 = new ol.format.GeoJSON();
var features_tuyen_M2_79 = format_tuyen_M2_79.readFeatures(json_tuyen_M2_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M2_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M2_79.addFeatures(features_tuyen_M2_79);
var lyr_tuyen_M2_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M2_79, 
                style: style_tuyen_M2_79,
                popuplayertitle: 'tuyen_M2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M2_79.png" /> tuyen_M2'
            });
var format_tuyen_M1_80 = new ol.format.GeoJSON();
var features_tuyen_M1_80 = format_tuyen_M1_80.readFeatures(json_tuyen_M1_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M1_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M1_80.addFeatures(features_tuyen_M1_80);
var lyr_tuyen_M1_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M1_80, 
                style: style_tuyen_M1_80,
                popuplayertitle: 'tuyen_M1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M1_80.png" /> tuyen_M1'
            });
var format_tuyen_VT_81 = new ol.format.GeoJSON();
var features_tuyen_VT_81 = format_tuyen_VT_81.readFeatures(json_tuyen_VT_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_VT_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_VT_81.addFeatures(features_tuyen_VT_81);
var lyr_tuyen_VT_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_VT_81, 
                style: style_tuyen_VT_81,
                popuplayertitle: 'tuyen_VT',
                interactive: true,
                title: '<img src="styles/legend/tuyen_VT_81.png" /> tuyen_VT'
            });
var format_tuyen_8_82 = new ol.format.GeoJSON();
var features_tuyen_8_82 = format_tuyen_8_82.readFeatures(json_tuyen_8_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_8_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_8_82.addFeatures(features_tuyen_8_82);
var lyr_tuyen_8_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_8_82, 
                style: style_tuyen_8_82,
                popuplayertitle: 'tuyen_8',
                interactive: true,
                title: '<img src="styles/legend/tuyen_8_82.png" /> tuyen_8'
            });
var format_tuyen_7_83 = new ol.format.GeoJSON();
var features_tuyen_7_83 = format_tuyen_7_83.readFeatures(json_tuyen_7_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_7_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_7_83.addFeatures(features_tuyen_7_83);
var lyr_tuyen_7_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_7_83, 
                style: style_tuyen_7_83,
                popuplayertitle: 'tuyen_7',
                interactive: true,
                title: '<img src="styles/legend/tuyen_7_83.png" /> tuyen_7'
            });
var format_tuyen_6_84 = new ol.format.GeoJSON();
var features_tuyen_6_84 = format_tuyen_6_84.readFeatures(json_tuyen_6_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_6_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_6_84.addFeatures(features_tuyen_6_84);
var lyr_tuyen_6_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_6_84, 
                style: style_tuyen_6_84,
                popuplayertitle: 'tuyen_6',
                interactive: true,
                title: '<img src="styles/legend/tuyen_6_84.png" /> tuyen_6'
            });
var format_tuyen_5_85 = new ol.format.GeoJSON();
var features_tuyen_5_85 = format_tuyen_5_85.readFeatures(json_tuyen_5_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_5_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_5_85.addFeatures(features_tuyen_5_85);
var lyr_tuyen_5_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_5_85, 
                style: style_tuyen_5_85,
                popuplayertitle: 'tuyen_5',
                interactive: true,
                title: '<img src="styles/legend/tuyen_5_85.png" /> tuyen_5'
            });
var format_tuyen_4_86 = new ol.format.GeoJSON();
var features_tuyen_4_86 = format_tuyen_4_86.readFeatures(json_tuyen_4_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_4_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_4_86.addFeatures(features_tuyen_4_86);
var lyr_tuyen_4_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_4_86, 
                style: style_tuyen_4_86,
                popuplayertitle: 'tuyen_4',
                interactive: true,
                title: '<img src="styles/legend/tuyen_4_86.png" /> tuyen_4'
            });
var format_tuyen_3_87 = new ol.format.GeoJSON();
var features_tuyen_3_87 = format_tuyen_3_87.readFeatures(json_tuyen_3_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_3_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_3_87.addFeatures(features_tuyen_3_87);
var lyr_tuyen_3_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_3_87, 
                style: style_tuyen_3_87,
                popuplayertitle: 'tuyen_3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_3_87.png" /> tuyen_3'
            });
var format_tuyen_2A_88 = new ol.format.GeoJSON();
var features_tuyen_2A_88 = format_tuyen_2A_88.readFeatures(json_tuyen_2A_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2A_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2A_88.addFeatures(features_tuyen_2A_88);
var lyr_tuyen_2A_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2A_88, 
                style: style_tuyen_2A_88,
                popuplayertitle: 'tuyen_2A',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2A_88.png" /> tuyen_2A'
            });
var format_tuyen_2_89 = new ol.format.GeoJSON();
var features_tuyen_2_89 = format_tuyen_2_89.readFeatures(json_tuyen_2_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2_89.addFeatures(features_tuyen_2_89);
var lyr_tuyen_2_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2_89, 
                style: style_tuyen_2_89,
                popuplayertitle: 'tuyen_2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2_89.png" /> tuyen_2'
            });
var format_tuyen_1_90 = new ol.format.GeoJSON();
var features_tuyen_1_90 = format_tuyen_1_90.readFeatures(json_tuyen_1_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_1_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_1_90.addFeatures(features_tuyen_1_90);
var lyr_tuyen_1_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_1_90, 
                style: style_tuyen_1_90,
                popuplayertitle: 'tuyen_1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_1_90.png" /> tuyen_1'
            });
var group_QH519 = new ol.layer.Group({
                                layers: [lyr_QH519Depot_77,lyr_tuyen_M3_78,lyr_tuyen_M2_79,lyr_tuyen_M1_80,lyr_tuyen_VT_81,lyr_tuyen_8_82,lyr_tuyen_7_83,lyr_tuyen_6_84,lyr_tuyen_5_85,lyr_tuyen_4_86,lyr_tuyen_3_87,lyr_tuyen_2A_88,lyr_tuyen_2_89,lyr_tuyen_1_90,],
                                fold: 'close',
                                title: 'QH 519'});
var group_CBT = new ol.layer.Group({
                                layers: [lyr_Line5PAtuyenkml_53,lyr_Line5PAtuyenkml_54,lyr_Line5PAtuyenkml_55,lyr_Line32DepotYenSo_56,lyr_Line32GaPolygon_57,lyr_Line32TuyenLinestring_58,lyr_Line32DepotYenSo_59,lyr_Line32GaPoint_60,lyr_T2AextGaPolygon_61,lyr_T2AextGaPoint_62,lyr_Line23DepotSocSon_63,lyr_Line23GaPolygon_64,lyr_Line23TuyenLinestring_65,lyr_Line23DepotSocSon_66,lyr_Line23GaPoint_67,lyr_Line22GaPolygon_68,lyr_Line22TuyenLinestring_69,lyr_Line22GaPoint_70,lyr_T21Nhaga_71,lyr_T21NorthBound_72,lyr_T21SouthBound_73,lyr_T21TimTuyen_74,lyr_T21NhagaText_75,lyr_T21Depot_76,],
                                fold: 'close',
                                title: 'CBĐT'});
var group_QH1668 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'QH1668'});
var group_RasoatSXD = new ol.layer.Group({
                                layers: [lyr_Layer_CcTuynmi_39,lyr_Layer_Tuyn12_40,lyr_Layer_Tuyn11_41,lyr_Layer_Tuyn10_42,lyr_Layer_Tuyn9_43,lyr_Layer_Tuyn8_44,lyr_Layer_Tuyn7_45,lyr_Layer_Tuyn6_46,lyr_Layer_Tuyn5_47,lyr_Layer_Tuyn4_48,lyr_Layer_Tuyn3_49,lyr_Layer_Tuyn2A_50,lyr_Layer_Tuyn2_51,lyr_Layer_Tuyn1_52,],
                                fold: 'open',
                                title: 'Ra soat SXD'});
var group_QH10007022026 = new ol.layer.Group({
                                layers: [lyr_QH100Tuyen16_27,lyr_QH100Tuyen14_28,lyr_QH100Tuyen9_29,lyr_QH100Tuyen8_30,lyr_QH100Tuyen7_31,lyr_QH100Tuyen6_32,lyr_QH100Tuyen5_33,lyr_QH100Tuyen4_34,lyr_QH100Tuyen3_35,lyr_QH100Tuyen2A_36,lyr_QH100Tuyen2_37,lyr_QH100Tuyen1_38,],
                                fold: 'close',
                                title: 'QH 100 (07-02-2026)'});
var group_QH10010022026 = new ol.layer.Group({
                                layers: [lyr_QH100Ga_8,lyr_QH100Monorail_9,lyr_QH100dsDT_10,lyr_QH100DSDT17_11,lyr_QH100DSDT16_12,lyr_QH100DSDT15_13,lyr_QH100DSDT12_14,lyr_QH100DSDT11_15,lyr_QH100DSDT10_16,lyr_QH100DSDT9_17,lyr_QH100DSDT8_18,lyr_QH100DSDT7_19,lyr_QH100DSDT6_20,lyr_QH100DSDT5_21,lyr_QH100DSDT4_22,lyr_QH100DSDT3_23,lyr_QH100DSDT2A_24,lyr_QH100DSDT2_25,lyr_QH100DSDT1_26,],
                                fold: 'open',
                                title: 'QH100 (10-02-2026)'});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleTraffic_1.setVisible(false);lyr_GoogleTerrain_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(false);lyr_GoogleRoad_4.setVisible(true);lyr_GoogleLabels_5.setVisible(false);lyr_GoogleHybrid_6.setVisible(false);lyr_1769_DaumoiHaNoi_modified_7.setVisible(false);lyr_QH100Ga_8.setVisible(false);lyr_QH100Monorail_9.setVisible(false);lyr_QH100dsDT_10.setVisible(false);lyr_QH100DSDT17_11.setVisible(false);lyr_QH100DSDT16_12.setVisible(false);lyr_QH100DSDT15_13.setVisible(false);lyr_QH100DSDT12_14.setVisible(false);lyr_QH100DSDT11_15.setVisible(false);lyr_QH100DSDT10_16.setVisible(false);lyr_QH100DSDT9_17.setVisible(false);lyr_QH100DSDT8_18.setVisible(false);lyr_QH100DSDT7_19.setVisible(false);lyr_QH100DSDT6_20.setVisible(false);lyr_QH100DSDT5_21.setVisible(false);lyr_QH100DSDT4_22.setVisible(false);lyr_QH100DSDT3_23.setVisible(false);lyr_QH100DSDT2A_24.setVisible(false);lyr_QH100DSDT2_25.setVisible(false);lyr_QH100DSDT1_26.setVisible(false);lyr_QH100Tuyen16_27.setVisible(false);lyr_QH100Tuyen14_28.setVisible(false);lyr_QH100Tuyen9_29.setVisible(false);lyr_QH100Tuyen8_30.setVisible(false);lyr_QH100Tuyen7_31.setVisible(false);lyr_QH100Tuyen6_32.setVisible(false);lyr_QH100Tuyen5_33.setVisible(false);lyr_QH100Tuyen4_34.setVisible(false);lyr_QH100Tuyen3_35.setVisible(false);lyr_QH100Tuyen2A_36.setVisible(false);lyr_QH100Tuyen2_37.setVisible(false);lyr_QH100Tuyen1_38.setVisible(false);lyr_Layer_CcTuynmi_39.setVisible(false);lyr_Layer_Tuyn12_40.setVisible(false);lyr_Layer_Tuyn11_41.setVisible(false);lyr_Layer_Tuyn10_42.setVisible(false);lyr_Layer_Tuyn9_43.setVisible(false);lyr_Layer_Tuyn8_44.setVisible(false);lyr_Layer_Tuyn7_45.setVisible(false);lyr_Layer_Tuyn6_46.setVisible(false);lyr_Layer_Tuyn5_47.setVisible(false);lyr_Layer_Tuyn4_48.setVisible(false);lyr_Layer_Tuyn3_49.setVisible(false);lyr_Layer_Tuyn2A_50.setVisible(false);lyr_Layer_Tuyn2_51.setVisible(false);lyr_Layer_Tuyn1_52.setVisible(false);lyr_Line5PAtuyenkml_53.setVisible(false);lyr_Line5PAtuyenkml_54.setVisible(false);lyr_Line5PAtuyenkml_55.setVisible(false);lyr_Line32DepotYenSo_56.setVisible(false);lyr_Line32GaPolygon_57.setVisible(false);lyr_Line32TuyenLinestring_58.setVisible(false);lyr_Line32DepotYenSo_59.setVisible(false);lyr_Line32GaPoint_60.setVisible(false);lyr_T2AextGaPolygon_61.setVisible(false);lyr_T2AextGaPoint_62.setVisible(false);lyr_Line23DepotSocSon_63.setVisible(false);lyr_Line23GaPolygon_64.setVisible(false);lyr_Line23TuyenLinestring_65.setVisible(false);lyr_Line23DepotSocSon_66.setVisible(false);lyr_Line23GaPoint_67.setVisible(false);lyr_Line22GaPolygon_68.setVisible(false);lyr_Line22TuyenLinestring_69.setVisible(false);lyr_Line22GaPoint_70.setVisible(false);lyr_T21Nhaga_71.setVisible(false);lyr_T21NorthBound_72.setVisible(false);lyr_T21SouthBound_73.setVisible(false);lyr_T21TimTuyen_74.setVisible(false);lyr_T21NhagaText_75.setVisible(false);lyr_T21Depot_76.setVisible(false);lyr_QH519Depot_77.setVisible(true);lyr_tuyen_M3_78.setVisible(true);lyr_tuyen_M2_79.setVisible(true);lyr_tuyen_M1_80.setVisible(true);lyr_tuyen_VT_81.setVisible(true);lyr_tuyen_8_82.setVisible(true);lyr_tuyen_7_83.setVisible(true);lyr_tuyen_6_84.setVisible(true);lyr_tuyen_5_85.setVisible(true);lyr_tuyen_4_86.setVisible(true);lyr_tuyen_3_87.setVisible(true);lyr_tuyen_2A_88.setVisible(true);lyr_tuyen_2_89.setVisible(true);lyr_tuyen_1_90.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleTraffic_1,lyr_GoogleTerrain_2,lyr_GoogleSatellite_3,lyr_GoogleRoad_4,lyr_GoogleLabels_5,lyr_GoogleHybrid_6,lyr_1769_DaumoiHaNoi_modified_7,group_QH10010022026,group_QH10007022026,group_RasoatSXD,group_CBT,group_QH519];
lyr_QH100Ga_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100Monorail_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100dsDT_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT17_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT16_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT15_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT12_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT11_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT10_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT9_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT8_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT7_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT6_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT5_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT4_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT3_23.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT2A_24.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT2_25.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT1_26.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100Tuyen16_27.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen14_28.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen9_29.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen8_30.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen7_31.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen6_32.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen5_33.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen4_34.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen3_35.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen2A_36.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen2_37.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QH100Tuyen1_38.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_Layer_CcTuynmi_39.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn12_40.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn11_41.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn10_42.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn9_43.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn8_44.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn7_45.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn6_46.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn5_47.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn4_48.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn3_49.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn2A_50.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn2_51.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn1_52.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Line5PAtuyenkml_53.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'name_1': 'name_1', 'name_2': 'name_2', 'attrib_1': 'attrib_1', 'snippet': 'snippet', });
lyr_Line5PAtuyenkml_54.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'name_1': 'name_1', 'name_2': 'name_2', 'attrib_1': 'attrib_1', 'snippet': 'snippet', });
lyr_Line5PAtuyenkml_55.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'name_1': 'name_1', 'name_2': 'name_2', 'attrib_1': 'attrib_1', 'snippet': 'snippet', });
lyr_Line32DepotYenSo_56.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line32GaPolygon_57.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line32TuyenLinestring_58.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', });
lyr_Line32DepotYenSo_59.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line32GaPoint_60.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_T2AextGaPolygon_61.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_T2AextGaPoint_62.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_Line23DepotSocSon_63.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line23GaPolygon_64.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line23TuyenLinestring_65.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'attrib_1': 'attrib_1', 'attrib_2': 'attrib_2', });
lyr_Line23DepotSocSon_66.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line23GaPoint_67.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', });
lyr_Line22GaPolygon_68.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line22TuyenLinestring_69.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'attrib_1': 'attrib_1', 'attrib_2': 'attrib_2', });
lyr_Line22GaPoint_70.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', 'name_3': 'name_3', 'attrib_1': 'attrib_1', });
lyr_T21Nhaga_71.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_T21NorthBound_72.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_T21SouthBound_73.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_T21TimTuyen_74.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_T21NhagaText_75.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_T21Depot_76.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH519Depot_77.set('fieldAliases', {'fid': 'fid', });
lyr_tuyen_M3_78.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M2_79.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M1_80.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_VT_81.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_8_82.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_7_83.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_6_84.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_5_85.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_4_86.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_3_87.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2A_88.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2_89.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_1_90.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_QH100Ga_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100Monorail_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100dsDT_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT17_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT16_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT15_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT12_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT11_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT10_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT9_17.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT8_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT7_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT6_20.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT5_21.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT4_22.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT3_23.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT2A_24.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT2_25.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT1_26.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100Tuyen16_27.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen14_28.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen9_29.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen8_30.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen7_31.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen6_32.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen5_33.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen4_34.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen3_35.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen2A_36.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen2_37.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_QH100Tuyen1_38.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_Layer_CcTuynmi_39.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn12_40.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn11_41.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn10_42.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn9_43.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn8_44.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn7_45.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn6_46.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn5_47.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn4_48.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn3_49.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn2A_50.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn2_51.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn1_52.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Line5PAtuyenkml_53.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'name_1': '', 'name_2': '', 'attrib_1': '', 'snippet': '', });
lyr_Line5PAtuyenkml_54.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', 'attrib_1': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Line5PAtuyenkml_55.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', 'attrib_1': '', 'snippet': '', });
lyr_Line32DepotYenSo_56.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line32GaPolygon_57.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line32TuyenLinestring_58.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', });
lyr_Line32DepotYenSo_59.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line32GaPoint_60.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', });
lyr_T2AextGaPolygon_61.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_T2AextGaPoint_62.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_Line23DepotSocSon_63.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line23GaPolygon_64.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line23TuyenLinestring_65.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': '', 'line_section': '', 'name_1': '', 'attrib_1': '', 'attrib_2': '', });
lyr_Line23DepotSocSon_66.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line23GaPoint_67.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', });
lyr_Line22GaPolygon_68.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line22TuyenLinestring_69.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', 'attrib_1': 'TextEdit', 'attrib_2': 'TextEdit', });
lyr_Line22GaPoint_70.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', 'name_3': '', 'attrib_1': '', });
lyr_T21Nhaga_71.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_T21NorthBound_72.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_T21SouthBound_73.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_T21TimTuyen_74.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_T21NhagaText_75.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_T21Depot_76.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH519Depot_77.set('fieldImages', {'fid': '', });
lyr_tuyen_M3_78.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M2_79.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M1_80.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_VT_81.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_8_82.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_7_83.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_6_84.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_5_85.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_4_86.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_3_87.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_2A_88.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_2_89.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_1_90.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_QH100Ga_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'no label', });
lyr_QH100Monorail_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100dsDT_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT17_11.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT16_12.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT15_13.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT12_14.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT11_15.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT10_16.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT9_17.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT8_18.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT7_19.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT6_20.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT5_21.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT4_22.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT3_23.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT2A_24.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT2_25.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT1_26.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100Tuyen16_27.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen14_28.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen9_29.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen8_30.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen7_31.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen6_32.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen5_33.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen4_34.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen3_35.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen2A_36.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen2_37.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_QH100Tuyen1_38.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'no label', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'width': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', });
lyr_Layer_CcTuynmi_39.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn12_40.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn11_41.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn10_42.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn9_43.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn8_44.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn7_45.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn6_46.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn5_47.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn4_48.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn3_49.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn2A_50.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn2_51.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Layer_Tuyn1_52.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Line5PAtuyenkml_53.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', 'attrib_1': 'hidden field', 'snippet': 'hidden field', });
lyr_Line5PAtuyenkml_54.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', 'attrib_1': 'hidden field', 'snippet': 'hidden field', });
lyr_Line5PAtuyenkml_55.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', 'attrib_1': 'hidden field', 'snippet': 'hidden field', });
lyr_Line32DepotYenSo_56.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', });
lyr_Line32GaPolygon_57.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', });
lyr_Line32TuyenLinestring_58.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', });
lyr_Line32DepotYenSo_59.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', });
lyr_Line32GaPoint_60.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', });
lyr_T2AextGaPolygon_61.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_T2AextGaPoint_62.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', });
lyr_Line23DepotSocSon_63.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', });
lyr_Line23GaPolygon_64.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', });
lyr_Line23TuyenLinestring_65.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', 'attrib_1': 'hidden field', 'attrib_2': 'hidden field', });
lyr_Line23DepotSocSon_66.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', });
lyr_Line23GaPoint_67.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', });
lyr_Line22GaPolygon_68.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', });
lyr_Line22TuyenLinestring_69.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', 'attrib_1': 'hidden field', 'attrib_2': 'hidden field', });
lyr_Line22GaPoint_70.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', 'name_2': 'hidden field', 'name_3': 'hidden field', 'attrib_1': 'hidden field', });
lyr_T21Nhaga_71.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_T21NorthBound_72.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_T21SouthBound_73.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_T21TimTuyen_74.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_T21NhagaText_75.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_T21Depot_76.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH519Depot_77.set('fieldLabels', {'fid': 'hidden field', });
lyr_tuyen_M3_78.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_M2_79.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_M1_80.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_VT_81.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_8_82.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_7_83.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_6_84.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_5_85.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_4_86.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_3_87.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_2A_88.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_2_89.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_1_90.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_1_90.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});