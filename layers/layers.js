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
var format_layer_DCaotoc_24 = new ol.format.GeoJSON();
var features_layer_DCaotoc_24 = format_layer_DCaotoc_24.readFeatures(json_layer_DCaotoc_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DCaotoc_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DCaotoc_24.addFeatures(features_layer_DCaotoc_24);
var lyr_layer_DCaotoc_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DCaotoc_24, 
                style: style_layer_DCaotoc_24,
                popuplayertitle: 'layer_D-Cao toc',
                interactive: true,
                title: '<img src="styles/legend/layer_DCaotoc_24.png" /> layer_D-Cao toc'
            });
var format_layer_DPcCaotoc_25 = new ol.format.GeoJSON();
var features_layer_DPcCaotoc_25 = format_layer_DPcCaotoc_25.readFeatures(json_layer_DPcCaotoc_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DPcCaotoc_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DPcCaotoc_25.addFeatures(features_layer_DPcCaotoc_25);
var lyr_layer_DPcCaotoc_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DPcCaotoc_25, 
                style: style_layer_DPcCaotoc_25,
                popuplayertitle: 'layer_D-Pc Cao toc',
                interactive: true,
                title: '<img src="styles/legend/layer_DPcCaotoc_25.png" /> layer_D-Pc Cao toc'
            });
var format_layer_ketnoidsdt_26 = new ol.format.GeoJSON();
var features_layer_ketnoidsdt_26 = format_layer_ketnoidsdt_26.readFeatures(json_layer_ketnoidsdt_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_ketnoidsdt_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_ketnoidsdt_26.addFeatures(features_layer_ketnoidsdt_26);
var lyr_layer_ketnoidsdt_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_ketnoidsdt_26, 
                style: style_layer_ketnoidsdt_26,
                popuplayertitle: 'layer_ket noi dsdt',
                interactive: true,
                title: '<img src="styles/legend/layer_ketnoidsdt_26.png" /> layer_ket noi dsdt'
            });
var format_layer_4Railwaywhite_27 = new ol.format.GeoJSON();
var features_layer_4Railwaywhite_27 = format_layer_4Railwaywhite_27.readFeatures(json_layer_4Railwaywhite_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_4Railwaywhite_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_4Railwaywhite_27.addFeatures(features_layer_4Railwaywhite_27);
var lyr_layer_4Railwaywhite_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_4Railwaywhite_27, 
                style: style_layer_4Railwaywhite_27,
                popuplayertitle: 'layer_4-Railway-white',
                interactive: true,
                title: '<img src="styles/legend/layer_4Railwaywhite_27.png" /> layer_4-Railway-white'
            });
var format_layer_4Railway_28 = new ol.format.GeoJSON();
var features_layer_4Railway_28 = format_layer_4Railway_28.readFeatures(json_layer_4Railway_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_4Railway_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_4Railway_28.addFeatures(features_layer_4Railway_28);
var lyr_layer_4Railway_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_4Railway_28, 
                style: style_layer_4Railway_28,
                popuplayertitle: 'layer_4-Railway',
                interactive: true,
                title: '<img src="styles/legend/layer_4Railway_28.png" /> layer_4-Railway'
            });
var format_layer_SQG_Thng2050_29 = new ol.format.GeoJSON();
var features_layer_SQG_Thng2050_29 = format_layer_SQG_Thng2050_29.readFeatures(json_layer_SQG_Thng2050_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_SQG_Thng2050_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_SQG_Thng2050_29.addFeatures(features_layer_SQG_Thng2050_29);
var lyr_layer_SQG_Thng2050_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_SQG_Thng2050_29, 
                style: style_layer_SQG_Thng2050_29,
                popuplayertitle: 'layer_ĐSQG_Thường 2050',
                interactive: true,
                title: '<img src="styles/legend/layer_SQG_Thng2050_29.png" /> layer_ĐSQG_Thường 2050'
            });
var format_layer_Dduongsattocdocao_30 = new ol.format.GeoJSON();
var features_layer_Dduongsattocdocao_30 = format_layer_Dduongsattocdocao_30.readFeatures(json_layer_Dduongsattocdocao_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_Dduongsattocdocao_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_Dduongsattocdocao_30.addFeatures(features_layer_Dduongsattocdocao_30);
var lyr_layer_Dduongsattocdocao_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_Dduongsattocdocao_30, 
                style: style_layer_Dduongsattocdocao_30,
                popuplayertitle: 'layer_D- duong sat toc do cao',
                interactive: true,
                title: '<img src="styles/legend/layer_Dduongsattocdocao_30.png" /> layer_D- duong sat toc do cao'
            });
var format_layer_Monorail_31 = new ol.format.GeoJSON();
var features_layer_Monorail_31 = format_layer_Monorail_31.readFeatures(json_layer_Monorail_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_Monorail_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_Monorail_31.addFeatures(features_layer_Monorail_31);
var lyr_layer_Monorail_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_Monorail_31, 
                style: style_layer_Monorail_31,
                popuplayertitle: 'layer_Monorail',
                interactive: true,
                title: '<img src="styles/legend/layer_Monorail_31.png" /> layer_Monorail'
            });
var format_layer_4BRTM18_32 = new ol.format.GeoJSON();
var features_layer_4BRTM18_32 = format_layer_4BRTM18_32.readFeatures(json_layer_4BRTM18_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_4BRTM18_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_4BRTM18_32.addFeatures(features_layer_4BRTM18_32);
var lyr_layer_4BRTM18_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_4BRTM18_32, 
                style: style_layer_4BRTM18_32,
                popuplayertitle: 'layer_4-BRT-M18',
                interactive: true,
                title: '<img src="styles/legend/layer_4BRTM18_32.png" /> layer_4-BRT-M18'
            });
var format_layer_DSDT_17_33 = new ol.format.GeoJSON();
var features_layer_DSDT_17_33 = format_layer_DSDT_17_33.readFeatures(json_layer_DSDT_17_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT_17_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT_17_33.addFeatures(features_layer_DSDT_17_33);
var lyr_layer_DSDT_17_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT_17_33, 
                style: style_layer_DSDT_17_33,
                popuplayertitle: 'layer_DSDT_17',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT_17_33.png" /> layer_DSDT_17'
            });
var format_layer_DSDT_16_34 = new ol.format.GeoJSON();
var features_layer_DSDT_16_34 = format_layer_DSDT_16_34.readFeatures(json_layer_DSDT_16_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT_16_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT_16_34.addFeatures(features_layer_DSDT_16_34);
var lyr_layer_DSDT_16_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT_16_34, 
                style: style_layer_DSDT_16_34,
                popuplayertitle: 'layer_DSDT_16',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT_16_34.png" /> layer_DSDT_16'
            });
var format_layer_DSDT_15_35 = new ol.format.GeoJSON();
var features_layer_DSDT_15_35 = format_layer_DSDT_15_35.readFeatures(json_layer_DSDT_15_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT_15_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT_15_35.addFeatures(features_layer_DSDT_15_35);
var lyr_layer_DSDT_15_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT_15_35, 
                style: style_layer_DSDT_15_35,
                popuplayertitle: 'layer_DSDT_15',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT_15_35.png" /> layer_DSDT_15'
            });
var format_layer_DSDT_13_36 = new ol.format.GeoJSON();
var features_layer_DSDT_13_36 = format_layer_DSDT_13_36.readFeatures(json_layer_DSDT_13_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT_13_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT_13_36.addFeatures(features_layer_DSDT_13_36);
var lyr_layer_DSDT_13_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT_13_36, 
                style: style_layer_DSDT_13_36,
                popuplayertitle: 'layer_DSDT_13',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT_13_36.png" /> layer_DSDT_13'
            });
var format_layer_DSDT12_37 = new ol.format.GeoJSON();
var features_layer_DSDT12_37 = format_layer_DSDT12_37.readFeatures(json_layer_DSDT12_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT12_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT12_37.addFeatures(features_layer_DSDT12_37);
var lyr_layer_DSDT12_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT12_37, 
                style: style_layer_DSDT12_37,
                popuplayertitle: 'layer_DSDT 12',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT12_37.png" /> layer_DSDT 12'
            });
var format_layer_DSDT_11_38 = new ol.format.GeoJSON();
var features_layer_DSDT_11_38 = format_layer_DSDT_11_38.readFeatures(json_layer_DSDT_11_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT_11_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT_11_38.addFeatures(features_layer_DSDT_11_38);
var lyr_layer_DSDT_11_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT_11_38, 
                style: style_layer_DSDT_11_38,
                popuplayertitle: 'layer_DSDT_11',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT_11_38.png" /> layer_DSDT_11'
            });
var format_layer_DSDT10_39 = new ol.format.GeoJSON();
var features_layer_DSDT10_39 = format_layer_DSDT10_39.readFeatures(json_layer_DSDT10_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT10_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT10_39.addFeatures(features_layer_DSDT10_39);
var lyr_layer_DSDT10_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT10_39, 
                style: style_layer_DSDT10_39,
                popuplayertitle: 'layer_DSDT 10',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT10_39.png" /> layer_DSDT 10'
            });
var format_layer_DSDT9_40 = new ol.format.GeoJSON();
var features_layer_DSDT9_40 = format_layer_DSDT9_40.readFeatures(json_layer_DSDT9_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT9_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT9_40.addFeatures(features_layer_DSDT9_40);
var lyr_layer_DSDT9_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT9_40, 
                style: style_layer_DSDT9_40,
                popuplayertitle: 'layer_DSDT 9',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT9_40.png" /> layer_DSDT 9'
            });
var format_layer_DSDT8_41 = new ol.format.GeoJSON();
var features_layer_DSDT8_41 = format_layer_DSDT8_41.readFeatures(json_layer_DSDT8_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT8_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT8_41.addFeatures(features_layer_DSDT8_41);
var lyr_layer_DSDT8_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT8_41, 
                style: style_layer_DSDT8_41,
                popuplayertitle: 'layer_DSDT 8',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT8_41.png" /> layer_DSDT 8'
            });
var format_layer_DSDT7_42 = new ol.format.GeoJSON();
var features_layer_DSDT7_42 = format_layer_DSDT7_42.readFeatures(json_layer_DSDT7_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT7_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT7_42.addFeatures(features_layer_DSDT7_42);
var lyr_layer_DSDT7_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT7_42, 
                style: style_layer_DSDT7_42,
                popuplayertitle: 'layer_DSDT 7',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT7_42.png" /> layer_DSDT 7'
            });
var format_layer_DSDT6_43 = new ol.format.GeoJSON();
var features_layer_DSDT6_43 = format_layer_DSDT6_43.readFeatures(json_layer_DSDT6_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT6_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT6_43.addFeatures(features_layer_DSDT6_43);
var lyr_layer_DSDT6_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT6_43, 
                style: style_layer_DSDT6_43,
                popuplayertitle: 'layer_DSDT 6',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT6_43.png" /> layer_DSDT 6'
            });
var format_layer_DSDT5_44 = new ol.format.GeoJSON();
var features_layer_DSDT5_44 = format_layer_DSDT5_44.readFeatures(json_layer_DSDT5_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT5_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT5_44.addFeatures(features_layer_DSDT5_44);
var lyr_layer_DSDT5_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT5_44, 
                style: style_layer_DSDT5_44,
                popuplayertitle: 'layer_DSDT 5',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT5_44.png" /> layer_DSDT 5'
            });
var format_layer_DSDT4_45 = new ol.format.GeoJSON();
var features_layer_DSDT4_45 = format_layer_DSDT4_45.readFeatures(json_layer_DSDT4_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT4_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT4_45.addFeatures(features_layer_DSDT4_45);
var lyr_layer_DSDT4_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT4_45, 
                style: style_layer_DSDT4_45,
                popuplayertitle: 'layer_DSDT 4',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT4_45.png" /> layer_DSDT 4'
            });
var format_layer_DSDT3_46 = new ol.format.GeoJSON();
var features_layer_DSDT3_46 = format_layer_DSDT3_46.readFeatures(json_layer_DSDT3_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT3_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT3_46.addFeatures(features_layer_DSDT3_46);
var lyr_layer_DSDT3_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT3_46, 
                style: style_layer_DSDT3_46,
                popuplayertitle: 'layer_DSDT 3',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT3_46.png" /> layer_DSDT 3'
            });
var format_layer_DSDT2A_47 = new ol.format.GeoJSON();
var features_layer_DSDT2A_47 = format_layer_DSDT2A_47.readFeatures(json_layer_DSDT2A_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT2A_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT2A_47.addFeatures(features_layer_DSDT2A_47);
var lyr_layer_DSDT2A_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT2A_47, 
                style: style_layer_DSDT2A_47,
                popuplayertitle: 'layer_DSDT 2A',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT2A_47.png" /> layer_DSDT 2A'
            });
var format_layer_DSDT2_48 = new ol.format.GeoJSON();
var features_layer_DSDT2_48 = format_layer_DSDT2_48.readFeatures(json_layer_DSDT2_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT2_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT2_48.addFeatures(features_layer_DSDT2_48);
var lyr_layer_DSDT2_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT2_48, 
                style: style_layer_DSDT2_48,
                popuplayertitle: 'layer_DSDT 2',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT2_48.png" /> layer_DSDT 2'
            });
var format_layer_DSDT1_49 = new ol.format.GeoJSON();
var features_layer_DSDT1_49 = format_layer_DSDT1_49.readFeatures(json_layer_DSDT1_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_DSDT1_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_DSDT1_49.addFeatures(features_layer_DSDT1_49);
var lyr_layer_DSDT1_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_DSDT1_49, 
                style: style_layer_DSDT1_49,
                popuplayertitle: 'layer_DSDT 1',
                interactive: true,
                title: '<img src="styles/legend/layer_DSDT1_49.png" /> layer_DSDT 1'
            });
var format_layer_02interCity_50 = new ol.format.GeoJSON();
var features_layer_02interCity_50 = format_layer_02interCity_50.readFeatures(json_layer_02interCity_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_02interCity_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_02interCity_50.addFeatures(features_layer_02interCity_50);
var lyr_layer_02interCity_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_02interCity_50, 
                style: style_layer_02interCity_50,
                popuplayertitle: 'layer_@@02-interCity',
                interactive: true,
                title: '<img src="styles/legend/layer_02interCity_50.png" /> layer_@@02-interCity'
            });
var format_nearbyProvince_51 = new ol.format.GeoJSON();
var features_nearbyProvince_51 = format_nearbyProvince_51.readFeatures(json_nearbyProvince_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nearbyProvince_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nearbyProvince_51.addFeatures(features_nearbyProvince_51);
var lyr_nearbyProvince_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nearbyProvince_51, 
                style: style_nearbyProvince_51,
                popuplayertitle: '@nearbyProvince',
                interactive: true,
                title: '<img src="styles/legend/nearbyProvince_51.png" /> @nearbyProvince'
            });
var format_nearbyProvince_52 = new ol.format.GeoJSON();
var features_nearbyProvince_52 = format_nearbyProvince_52.readFeatures(json_nearbyProvince_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nearbyProvince_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nearbyProvince_52.addFeatures(features_nearbyProvince_52);
var lyr_nearbyProvince_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nearbyProvince_52, 
                style: style_nearbyProvince_52,
                popuplayertitle: '@nearbyProvince',
                interactive: true,
                title: '<img src="styles/legend/nearbyProvince_52.png" /> @nearbyProvince'
            });
var format_03commuterLine_53 = new ol.format.GeoJSON();
var features_03commuterLine_53 = format_03commuterLine_53.readFeatures(json_03commuterLine_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03commuterLine_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03commuterLine_53.addFeatures(features_03commuterLine_53);
var lyr_03commuterLine_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03commuterLine_53, 
                style: style_03commuterLine_53,
                popuplayertitle: '@@03-commuterLine',
                interactive: true,
                title: '<img src="styles/legend/03commuterLine_53.png" /> @@03-commuterLine'
            });
var format_02interCity_54 = new ol.format.GeoJSON();
var features_02interCity_54 = format_02interCity_54.readFeatures(json_02interCity_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02interCity_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02interCity_54.addFeatures(features_02interCity_54);
var lyr_02interCity_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02interCity_54, 
                style: style_02interCity_54,
                popuplayertitle: '@@02-interCity',
                interactive: true,
                title: '<img src="styles/legend/02interCity_54.png" /> @@02-interCity'
            });
var format_01highSpeed_55 = new ol.format.GeoJSON();
var features_01highSpeed_55 = format_01highSpeed_55.readFeatures(json_01highSpeed_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01highSpeed_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01highSpeed_55.addFeatures(features_01highSpeed_55);
var lyr_01highSpeed_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01highSpeed_55, 
                style: style_01highSpeed_55,
                popuplayertitle: '@@01-highSpeed',
                interactive: true,
                title: '<img src="styles/legend/01highSpeed_55.png" /> @@01-highSpeed'
            });
var format_7railwaystation2secondary_56 = new ol.format.GeoJSON();
var features_7railwaystation2secondary_56 = format_7railwaystation2secondary_56.readFeatures(json_7railwaystation2secondary_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7railwaystation2secondary_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7railwaystation2secondary_56.addFeatures(features_7railwaystation2secondary_56);
var lyr_7railwaystation2secondary_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7railwaystation2secondary_56, 
                style: style_7railwaystation2secondary_56,
                popuplayertitle: '7-railway station-2-secondary',
                interactive: true,
                title: '<img src="styles/legend/7railwaystation2secondary_56.png" /> 7-railway station-2-secondary'
            });
var format_6airport_57 = new ol.format.GeoJSON();
var features_6airport_57 = format_6airport_57.readFeatures(json_6airport_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6airport_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6airport_57.addFeatures(features_6airport_57);
var lyr_6airport_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6airport_57, 
                style: style_6airport_57,
                popuplayertitle: '6-airport',
                interactive: true,
                title: '<img src="styles/legend/6airport_57.png" /> 6-airport'
            });
var format_4Railway_58 = new ol.format.GeoJSON();
var features_4Railway_58 = format_4Railway_58.readFeatures(json_4Railway_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Railway_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Railway_58.addFeatures(features_4Railway_58);
var lyr_4Railway_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4Railway_58, 
                style: style_4Railway_58,
                popuplayertitle: '4-Railway',
                interactive: true,
    title: '4-Railway<br />\
    <img src="styles/legend/4Railway_58_0.png" /> DS<br />\
    <img src="styles/legend/4Railway_58_1.png" /> Nét đứt<br />' });
var format_4BRTM18_59 = new ol.format.GeoJSON();
var features_4BRTM18_59 = format_4BRTM18_59.readFeatures(json_4BRTM18_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4BRTM18_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4BRTM18_59.addFeatures(features_4BRTM18_59);
var lyr_4BRTM18_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4BRTM18_59, 
                style: style_4BRTM18_59,
                popuplayertitle: '4-BRT-M18',
                interactive: true,
                title: '<img src="styles/legend/4BRTM18_59.png" /> 4-BRT-M18'
            });
var format_4BRTM17_60 = new ol.format.GeoJSON();
var features_4BRTM17_60 = format_4BRTM17_60.readFeatures(json_4BRTM17_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4BRTM17_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4BRTM17_60.addFeatures(features_4BRTM17_60);
var lyr_4BRTM17_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4BRTM17_60, 
                style: style_4BRTM17_60,
                popuplayertitle: '4-BRT-M17',
                interactive: true,
                title: '<img src="styles/legend/4BRTM17_60.png" /> 4-BRT-M17'
            });
var format_4BRTM12_61 = new ol.format.GeoJSON();
var features_4BRTM12_61 = format_4BRTM12_61.readFeatures(json_4BRTM12_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4BRTM12_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4BRTM12_61.addFeatures(features_4BRTM12_61);
var lyr_4BRTM12_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4BRTM12_61, 
                style: style_4BRTM12_61,
                popuplayertitle: '4-BRT-M12',
                interactive: true,
                title: '<img src="styles/legend/4BRTM12_61.png" /> 4-BRT-M12'
            });
var format_3LRTM15_62 = new ol.format.GeoJSON();
var features_3LRTM15_62 = format_3LRTM15_62.readFeatures(json_3LRTM15_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTM15_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTM15_62.addFeatures(features_3LRTM15_62);
var lyr_3LRTM15_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTM15_62, 
                style: style_3LRTM15_62,
                popuplayertitle: '3-LRT-M15',
                interactive: true,
                title: '<img src="styles/legend/3LRTM15_62.png" /> 3-LRT-M15'
            });
var format_3LRTM13_63 = new ol.format.GeoJSON();
var features_3LRTM13_63 = format_3LRTM13_63.readFeatures(json_3LRTM13_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTM13_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTM13_63.addFeatures(features_3LRTM13_63);
var lyr_3LRTM13_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTM13_63, 
                style: style_3LRTM13_63,
                popuplayertitle: '3-LRT-M13',
                interactive: true,
                title: '<img src="styles/legend/3LRTM13_63.png" /> 3-LRT-M13'
            });
var format_3LRTM9_64 = new ol.format.GeoJSON();
var features_3LRTM9_64 = format_3LRTM9_64.readFeatures(json_3LRTM9_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTM9_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTM9_64.addFeatures(features_3LRTM9_64);
var lyr_3LRTM9_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTM9_64, 
                style: style_3LRTM9_64,
                popuplayertitle: '3-LRT-M9',
                interactive: true,
                title: '<img src="styles/legend/3LRTM9_64.png" /> 3-LRT-M9'
            });
var format_2RegularLineM16_65 = new ol.format.GeoJSON();
var features_2RegularLineM16_65 = format_2RegularLineM16_65.readFeatures(json_2RegularLineM16_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM16_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM16_65.addFeatures(features_2RegularLineM16_65);
var lyr_2RegularLineM16_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM16_65, 
                style: style_2RegularLineM16_65,
                popuplayertitle: '2-Regular Line-M16',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM16_65.png" /> 2-Regular Line-M16'
            });
var format_2RegularLineM14_66 = new ol.format.GeoJSON();
var features_2RegularLineM14_66 = format_2RegularLineM14_66.readFeatures(json_2RegularLineM14_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM14_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM14_66.addFeatures(features_2RegularLineM14_66);
var lyr_2RegularLineM14_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM14_66, 
                style: style_2RegularLineM14_66,
                popuplayertitle: '2-Regular Line-M14',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM14_66.png" /> 2-Regular Line-M14'
            });
var format_2RegularLineM11_67 = new ol.format.GeoJSON();
var features_2RegularLineM11_67 = format_2RegularLineM11_67.readFeatures(json_2RegularLineM11_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM11_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM11_67.addFeatures(features_2RegularLineM11_67);
var lyr_2RegularLineM11_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM11_67, 
                style: style_2RegularLineM11_67,
                popuplayertitle: '2-Regular Line-M11',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM11_67.png" /> 2-Regular Line-M11'
            });
var format_2RegularLineM10_68 = new ol.format.GeoJSON();
var features_2RegularLineM10_68 = format_2RegularLineM10_68.readFeatures(json_2RegularLineM10_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM10_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM10_68.addFeatures(features_2RegularLineM10_68);
var lyr_2RegularLineM10_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM10_68, 
                style: style_2RegularLineM10_68,
                popuplayertitle: '2-Regular Line-M10',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM10_68.png" /> 2-Regular Line-M10'
            });
var format_2RegularLineM7_69 = new ol.format.GeoJSON();
var features_2RegularLineM7_69 = format_2RegularLineM7_69.readFeatures(json_2RegularLineM7_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM7_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM7_69.addFeatures(features_2RegularLineM7_69);
var lyr_2RegularLineM7_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM7_69, 
                style: style_2RegularLineM7_69,
                popuplayertitle: '2-Regular Line-M7',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM7_69.png" /> 2-Regular Line-M7'
            });
var format_2RegularLineM6_70 = new ol.format.GeoJSON();
var features_2RegularLineM6_70 = format_2RegularLineM6_70.readFeatures(json_2RegularLineM6_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM6_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM6_70.addFeatures(features_2RegularLineM6_70);
var lyr_2RegularLineM6_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM6_70, 
                style: style_2RegularLineM6_70,
                popuplayertitle: '2-Regular Line-M6',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM6_70.png" /> 2-Regular Line-M6'
            });
var format_2RegularLineM5_71 = new ol.format.GeoJSON();
var features_2RegularLineM5_71 = format_2RegularLineM5_71.readFeatures(json_2RegularLineM5_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM5_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM5_71.addFeatures(features_2RegularLineM5_71);
var lyr_2RegularLineM5_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM5_71, 
                style: style_2RegularLineM5_71,
                popuplayertitle: '2-Regular Line-M5',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM5_71.png" /> 2-Regular Line-M5'
            });
var format_2RegularLineM4_72 = new ol.format.GeoJSON();
var features_2RegularLineM4_72 = format_2RegularLineM4_72.readFeatures(json_2RegularLineM4_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM4_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM4_72.addFeatures(features_2RegularLineM4_72);
var lyr_2RegularLineM4_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM4_72, 
                style: style_2RegularLineM4_72,
                popuplayertitle: '2-Regular Line-M4',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM4_72.png" /> 2-Regular Line-M4'
            });
var format_2RegularLineM3_73 = new ol.format.GeoJSON();
var features_2RegularLineM3_73 = format_2RegularLineM3_73.readFeatures(json_2RegularLineM3_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM3_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM3_73.addFeatures(features_2RegularLineM3_73);
var lyr_2RegularLineM3_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM3_73, 
                style: style_2RegularLineM3_73,
                popuplayertitle: '2-Regular Line-M3',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM3_73.png" /> 2-Regular Line-M3'
            });
var format_2RegularLineM2_74 = new ol.format.GeoJSON();
var features_2RegularLineM2_74 = format_2RegularLineM2_74.readFeatures(json_2RegularLineM2_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLineM2_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLineM2_74.addFeatures(features_2RegularLineM2_74);
var lyr_2RegularLineM2_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLineM2_74, 
                style: style_2RegularLineM2_74,
                popuplayertitle: '2-Regular Line-M2',
                interactive: true,
                title: '<img src="styles/legend/2RegularLineM2_74.png" /> 2-Regular Line-M2'
            });
var format_2RegularLine2A_75 = new ol.format.GeoJSON();
var features_2RegularLine2A_75 = format_2RegularLine2A_75.readFeatures(json_2RegularLine2A_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RegularLine2A_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RegularLine2A_75.addFeatures(features_2RegularLine2A_75);
var lyr_2RegularLine2A_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RegularLine2A_75, 
                style: style_2RegularLine2A_75,
                popuplayertitle: '2-Regular Line-2A',
                interactive: true,
                title: '<img src="styles/legend/2RegularLine2A_75.png" /> 2-Regular Line-2A'
            });
var format_1ExpressLineM8_76 = new ol.format.GeoJSON();
var features_1ExpressLineM8_76 = format_1ExpressLineM8_76.readFeatures(json_1ExpressLineM8_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ExpressLineM8_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ExpressLineM8_76.addFeatures(features_1ExpressLineM8_76);
var lyr_1ExpressLineM8_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ExpressLineM8_76, 
                style: style_1ExpressLineM8_76,
                popuplayertitle: '1-Express Line-M8',
                interactive: true,
    title: '1-Express Line-M8<br />\
    <img src="styles/legend/1ExpressLineM8_76_0.png" /> Nét liền<br />\
    <img src="styles/legend/1ExpressLineM8_76_1.png" /> Nét đứt<br />' });
var format_1ExpressLineM1_77 = new ol.format.GeoJSON();
var features_1ExpressLineM1_77 = format_1ExpressLineM1_77.readFeatures(json_1ExpressLineM1_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ExpressLineM1_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ExpressLineM1_77.addFeatures(features_1ExpressLineM1_77);
var lyr_1ExpressLineM1_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ExpressLineM1_77, 
                style: style_1ExpressLineM1_77,
                popuplayertitle: '1-Express Line-M1',
                interactive: true,
    title: '1-Express Line-M1<br />\
    <img src="styles/legend/1ExpressLineM1_77_0.png" /> Nét liền<br />\
    <img src="styles/legend/1ExpressLineM1_77_1.png" /> Nét đứt<br />' });
var format_Monorail_78 = new ol.format.GeoJSON();
var features_Monorail_78 = format_Monorail_78.readFeatures(json_Monorail_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monorail_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monorail_78.addFeatures(features_Monorail_78);
var lyr_Monorail_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monorail_78, 
                style: style_Monorail_78,
                popuplayertitle: 'Monorail',
                interactive: true,
                title: '<img src="styles/legend/Monorail_78.png" /> Monorail'
            });
var format_DSDT16_79 = new ol.format.GeoJSON();
var features_DSDT16_79 = format_DSDT16_79.readFeatures(json_DSDT16_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT16_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT16_79.addFeatures(features_DSDT16_79);
var lyr_DSDT16_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT16_79, 
                style: style_DSDT16_79,
                popuplayertitle: 'DSDT 16',
                interactive: true,
                title: '<img src="styles/legend/DSDT16_79.png" /> DSDT 16'
            });
var format_DSDT15_80 = new ol.format.GeoJSON();
var features_DSDT15_80 = format_DSDT15_80.readFeatures(json_DSDT15_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT15_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT15_80.addFeatures(features_DSDT15_80);
var lyr_DSDT15_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT15_80, 
                style: style_DSDT15_80,
                popuplayertitle: 'DSDT 15',
                interactive: true,
                title: '<img src="styles/legend/DSDT15_80.png" /> DSDT 15'
            });
var format_DSDT10_81 = new ol.format.GeoJSON();
var features_DSDT10_81 = format_DSDT10_81.readFeatures(json_DSDT10_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT10_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT10_81.addFeatures(features_DSDT10_81);
var lyr_DSDT10_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT10_81, 
                style: style_DSDT10_81,
                popuplayertitle: 'DSDT 10',
                interactive: true,
                title: '<img src="styles/legend/DSDT10_81.png" /> DSDT 10'
            });
var format_DSDT9_82 = new ol.format.GeoJSON();
var features_DSDT9_82 = format_DSDT9_82.readFeatures(json_DSDT9_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT9_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT9_82.addFeatures(features_DSDT9_82);
var lyr_DSDT9_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT9_82, 
                style: style_DSDT9_82,
                popuplayertitle: 'DSDT 9',
                interactive: true,
                title: '<img src="styles/legend/DSDT9_82.png" /> DSDT 9'
            });
var format_DSDT8_83 = new ol.format.GeoJSON();
var features_DSDT8_83 = format_DSDT8_83.readFeatures(json_DSDT8_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT8_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT8_83.addFeatures(features_DSDT8_83);
var lyr_DSDT8_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT8_83, 
                style: style_DSDT8_83,
                popuplayertitle: 'DSDT 8',
                interactive: true,
                title: '<img src="styles/legend/DSDT8_83.png" /> DSDT 8'
            });
var format_DSDT7_84 = new ol.format.GeoJSON();
var features_DSDT7_84 = format_DSDT7_84.readFeatures(json_DSDT7_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT7_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT7_84.addFeatures(features_DSDT7_84);
var lyr_DSDT7_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT7_84, 
                style: style_DSDT7_84,
                popuplayertitle: 'DSDT 7',
                interactive: true,
                title: '<img src="styles/legend/DSDT7_84.png" /> DSDT 7'
            });
var format_DSDT6_85 = new ol.format.GeoJSON();
var features_DSDT6_85 = format_DSDT6_85.readFeatures(json_DSDT6_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT6_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT6_85.addFeatures(features_DSDT6_85);
var lyr_DSDT6_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT6_85, 
                style: style_DSDT6_85,
                popuplayertitle: 'DSDT 6',
                interactive: true,
                title: '<img src="styles/legend/DSDT6_85.png" /> DSDT 6'
            });
var format_DSDT5_86 = new ol.format.GeoJSON();
var features_DSDT5_86 = format_DSDT5_86.readFeatures(json_DSDT5_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT5_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT5_86.addFeatures(features_DSDT5_86);
var lyr_DSDT5_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT5_86, 
                style: style_DSDT5_86,
                popuplayertitle: 'DSDT 5',
                interactive: true,
                title: '<img src="styles/legend/DSDT5_86.png" /> DSDT 5'
            });
var format_DSDT4_87 = new ol.format.GeoJSON();
var features_DSDT4_87 = format_DSDT4_87.readFeatures(json_DSDT4_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT4_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT4_87.addFeatures(features_DSDT4_87);
var lyr_DSDT4_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT4_87, 
                style: style_DSDT4_87,
                popuplayertitle: 'DSDT 4',
                interactive: true,
                title: '<img src="styles/legend/DSDT4_87.png" /> DSDT 4'
            });
var format_DSDT3_88 = new ol.format.GeoJSON();
var features_DSDT3_88 = format_DSDT3_88.readFeatures(json_DSDT3_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT3_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT3_88.addFeatures(features_DSDT3_88);
var lyr_DSDT3_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT3_88, 
                style: style_DSDT3_88,
                popuplayertitle: 'DSDT 3',
                interactive: true,
                title: '<img src="styles/legend/DSDT3_88.png" /> DSDT 3'
            });
var format_DSDT2A_89 = new ol.format.GeoJSON();
var features_DSDT2A_89 = format_DSDT2A_89.readFeatures(json_DSDT2A_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT2A_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT2A_89.addFeatures(features_DSDT2A_89);
var lyr_DSDT2A_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT2A_89, 
                style: style_DSDT2A_89,
                popuplayertitle: 'DSDT 2A',
                interactive: true,
                title: '<img src="styles/legend/DSDT2A_89.png" /> DSDT 2A'
            });
var format_DSDT2_90 = new ol.format.GeoJSON();
var features_DSDT2_90 = format_DSDT2_90.readFeatures(json_DSDT2_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT2_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT2_90.addFeatures(features_DSDT2_90);
var lyr_DSDT2_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT2_90, 
                style: style_DSDT2_90,
                popuplayertitle: 'DSDT 2',
                interactive: true,
                title: '<img src="styles/legend/DSDT2_90.png" /> DSDT 2'
            });
var format_DSDT1_91 = new ol.format.GeoJSON();
var features_DSDT1_91 = format_DSDT1_91.readFeatures(json_DSDT1_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDT1_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDT1_91.addFeatures(features_DSDT1_91);
var lyr_DSDT1_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDT1_91, 
                style: style_DSDT1_91,
                popuplayertitle: 'DSDT 1',
                interactive: true,
                title: '<img src="styles/legend/DSDT1_91.png" /> DSDT 1'
            });
var format_4Railway_92 = new ol.format.GeoJSON();
var features_4Railway_92 = format_4Railway_92.readFeatures(json_4Railway_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Railway_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Railway_92.addFeatures(features_4Railway_92);
var lyr_4Railway_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4Railway_92, 
                style: style_4Railway_92,
                popuplayertitle: '4-Railway',
                interactive: true,
                title: '<img src="styles/legend/4Railway_92.png" /> 4-Railway'
            });
var format_3LRTORBRTM17_93 = new ol.format.GeoJSON();
var features_3LRTORBRTM17_93 = format_3LRTORBRTM17_93.readFeatures(json_3LRTORBRTM17_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTORBRTM17_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTORBRTM17_93.addFeatures(features_3LRTORBRTM17_93);
var lyr_3LRTORBRTM17_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTORBRTM17_93, 
                style: style_3LRTORBRTM17_93,
                popuplayertitle: '3-LRT OR BRT-M17',
                interactive: true,
                title: '<img src="styles/legend/3LRTORBRTM17_93.png" /> 3-LRT OR BRT-M17'
            });
var format_3LRTORBRTM13_94 = new ol.format.GeoJSON();
var features_3LRTORBRTM13_94 = format_3LRTORBRTM13_94.readFeatures(json_3LRTORBRTM13_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3LRTORBRTM13_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3LRTORBRTM13_94.addFeatures(features_3LRTORBRTM13_94);
var lyr_3LRTORBRTM13_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3LRTORBRTM13_94, 
                style: style_3LRTORBRTM13_94,
                popuplayertitle: '3-LRT OR BRT-M13',
                interactive: true,
                title: '<img src="styles/legend/3LRTORBRTM13_94.png" /> 3-LRT OR BRT-M13'
            });
var format_1ExpressLineM8_95 = new ol.format.GeoJSON();
var features_1ExpressLineM8_95 = format_1ExpressLineM8_95.readFeatures(json_1ExpressLineM8_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ExpressLineM8_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ExpressLineM8_95.addFeatures(features_1ExpressLineM8_95);
var lyr_1ExpressLineM8_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ExpressLineM8_95, 
                style: style_1ExpressLineM8_95,
                popuplayertitle: '1-Express Line-M8',
                interactive: true,
                title: '<img src="styles/legend/1ExpressLineM8_95.png" /> 1-Express Line-M8'
            });
var format_Ga_96 = new ol.format.GeoJSON();
var features_Ga_96 = format_Ga_96.readFeatures(json_Ga_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ga_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ga_96.addFeatures(features_Ga_96);
var lyr_Ga_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ga_96, 
                style: style_Ga_96,
                popuplayertitle: 'Ga',
                interactive: true,
    title: 'Ga<br />\
    <img src="styles/legend/Ga_96_0.png" /> 5-Station-transfer 2+<br />\
    <img src="styles/legend/Ga_96_1.png" /> 6-airport<br />\
    <img src="styles/legend/Ga_96_2.png" /> 7-railway station-1-primary<br />\
    <img src="styles/legend/Ga_96_3.png" /> Vuông<br />' });
var format_QH100Ga_97 = new ol.format.GeoJSON();
var features_QH100Ga_97 = format_QH100Ga_97.readFeatures(json_QH100Ga_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Ga_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Ga_97.addFeatures(features_QH100Ga_97);
var lyr_QH100Ga_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Ga_97, 
                style: style_QH100Ga_97,
                popuplayertitle: 'QH100-Ga',
                interactive: true,
                title: '<img src="styles/legend/QH100Ga_97.png" /> QH100-Ga'
            });
var format_QH100Monorail_98 = new ol.format.GeoJSON();
var features_QH100Monorail_98 = format_QH100Monorail_98.readFeatures(json_QH100Monorail_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100Monorail_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100Monorail_98.addFeatures(features_QH100Monorail_98);
var lyr_QH100Monorail_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100Monorail_98, 
                style: style_QH100Monorail_98,
                popuplayertitle: 'QH100-Monorail',
                interactive: true,
                title: '<img src="styles/legend/QH100Monorail_98.png" /> QH100-Monorail'
            });
var format_QH100dsDT_99 = new ol.format.GeoJSON();
var features_QH100dsDT_99 = format_QH100dsDT_99.readFeatures(json_QH100dsDT_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100dsDT_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100dsDT_99.addFeatures(features_QH100dsDT_99);
var lyr_QH100dsDT_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100dsDT_99, 
                style: style_QH100dsDT_99,
                popuplayertitle: 'QH100-dsDT',
                interactive: true,
                title: '<img src="styles/legend/QH100dsDT_99.png" /> QH100-dsDT'
            });
var format_QH100DSDT17_100 = new ol.format.GeoJSON();
var features_QH100DSDT17_100 = format_QH100DSDT17_100.readFeatures(json_QH100DSDT17_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT17_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT17_100.addFeatures(features_QH100DSDT17_100);
var lyr_QH100DSDT17_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT17_100, 
                style: style_QH100DSDT17_100,
                popuplayertitle: 'QH100-DSDT 17',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT17_100.png" /> QH100-DSDT 17'
            });
var format_QH100DSDT16_101 = new ol.format.GeoJSON();
var features_QH100DSDT16_101 = format_QH100DSDT16_101.readFeatures(json_QH100DSDT16_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT16_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT16_101.addFeatures(features_QH100DSDT16_101);
var lyr_QH100DSDT16_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT16_101, 
                style: style_QH100DSDT16_101,
                popuplayertitle: 'QH100-DSDT 16',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT16_101.png" /> QH100-DSDT 16'
            });
var format_QH100DSDT15_102 = new ol.format.GeoJSON();
var features_QH100DSDT15_102 = format_QH100DSDT15_102.readFeatures(json_QH100DSDT15_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT15_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT15_102.addFeatures(features_QH100DSDT15_102);
var lyr_QH100DSDT15_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT15_102, 
                style: style_QH100DSDT15_102,
                popuplayertitle: 'QH100-DSDT 15',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT15_102.png" /> QH100-DSDT 15'
            });
var format_QH100DSDT12_103 = new ol.format.GeoJSON();
var features_QH100DSDT12_103 = format_QH100DSDT12_103.readFeatures(json_QH100DSDT12_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT12_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT12_103.addFeatures(features_QH100DSDT12_103);
var lyr_QH100DSDT12_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT12_103, 
                style: style_QH100DSDT12_103,
                popuplayertitle: 'QH100-DSDT 12',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT12_103.png" /> QH100-DSDT 12'
            });
var format_QH100DSDT11_104 = new ol.format.GeoJSON();
var features_QH100DSDT11_104 = format_QH100DSDT11_104.readFeatures(json_QH100DSDT11_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT11_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT11_104.addFeatures(features_QH100DSDT11_104);
var lyr_QH100DSDT11_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT11_104, 
                style: style_QH100DSDT11_104,
                popuplayertitle: 'QH100-DSDT 11',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT11_104.png" /> QH100-DSDT 11'
            });
var format_QH100DSDT10_105 = new ol.format.GeoJSON();
var features_QH100DSDT10_105 = format_QH100DSDT10_105.readFeatures(json_QH100DSDT10_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT10_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT10_105.addFeatures(features_QH100DSDT10_105);
var lyr_QH100DSDT10_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT10_105, 
                style: style_QH100DSDT10_105,
                popuplayertitle: 'QH100-DSDT 10',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT10_105.png" /> QH100-DSDT 10'
            });
var format_QH100DSDT9_106 = new ol.format.GeoJSON();
var features_QH100DSDT9_106 = format_QH100DSDT9_106.readFeatures(json_QH100DSDT9_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT9_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT9_106.addFeatures(features_QH100DSDT9_106);
var lyr_QH100DSDT9_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT9_106, 
                style: style_QH100DSDT9_106,
                popuplayertitle: 'QH100-DSDT 9',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT9_106.png" /> QH100-DSDT 9'
            });
var format_QH100DSDT8_107 = new ol.format.GeoJSON();
var features_QH100DSDT8_107 = format_QH100DSDT8_107.readFeatures(json_QH100DSDT8_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT8_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT8_107.addFeatures(features_QH100DSDT8_107);
var lyr_QH100DSDT8_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT8_107, 
                style: style_QH100DSDT8_107,
                popuplayertitle: 'QH100-DSDT 8',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT8_107.png" /> QH100-DSDT 8'
            });
var format_QH100DSDT7_108 = new ol.format.GeoJSON();
var features_QH100DSDT7_108 = format_QH100DSDT7_108.readFeatures(json_QH100DSDT7_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT7_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT7_108.addFeatures(features_QH100DSDT7_108);
var lyr_QH100DSDT7_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT7_108, 
                style: style_QH100DSDT7_108,
                popuplayertitle: 'QH100-DSDT 7',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT7_108.png" /> QH100-DSDT 7'
            });
var format_QH100DSDT6_109 = new ol.format.GeoJSON();
var features_QH100DSDT6_109 = format_QH100DSDT6_109.readFeatures(json_QH100DSDT6_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT6_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT6_109.addFeatures(features_QH100DSDT6_109);
var lyr_QH100DSDT6_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT6_109, 
                style: style_QH100DSDT6_109,
                popuplayertitle: 'QH100-DSDT 6',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT6_109.png" /> QH100-DSDT 6'
            });
var format_QH100DSDT5_110 = new ol.format.GeoJSON();
var features_QH100DSDT5_110 = format_QH100DSDT5_110.readFeatures(json_QH100DSDT5_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT5_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT5_110.addFeatures(features_QH100DSDT5_110);
var lyr_QH100DSDT5_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT5_110, 
                style: style_QH100DSDT5_110,
                popuplayertitle: 'QH100-DSDT 5',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT5_110.png" /> QH100-DSDT 5'
            });
var format_QH100DSDT4_111 = new ol.format.GeoJSON();
var features_QH100DSDT4_111 = format_QH100DSDT4_111.readFeatures(json_QH100DSDT4_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT4_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT4_111.addFeatures(features_QH100DSDT4_111);
var lyr_QH100DSDT4_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT4_111, 
                style: style_QH100DSDT4_111,
                popuplayertitle: 'QH100-DSDT 4',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT4_111.png" /> QH100-DSDT 4'
            });
var format_QH100DSDT3_112 = new ol.format.GeoJSON();
var features_QH100DSDT3_112 = format_QH100DSDT3_112.readFeatures(json_QH100DSDT3_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT3_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT3_112.addFeatures(features_QH100DSDT3_112);
var lyr_QH100DSDT3_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT3_112, 
                style: style_QH100DSDT3_112,
                popuplayertitle: 'QH100-DSDT 3',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT3_112.png" /> QH100-DSDT 3'
            });
var format_QH100DSDT2A_113 = new ol.format.GeoJSON();
var features_QH100DSDT2A_113 = format_QH100DSDT2A_113.readFeatures(json_QH100DSDT2A_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT2A_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT2A_113.addFeatures(features_QH100DSDT2A_113);
var lyr_QH100DSDT2A_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT2A_113, 
                style: style_QH100DSDT2A_113,
                popuplayertitle: 'QH100-DSDT 2A',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT2A_113.png" /> QH100-DSDT 2A'
            });
var format_QH100DSDT2_114 = new ol.format.GeoJSON();
var features_QH100DSDT2_114 = format_QH100DSDT2_114.readFeatures(json_QH100DSDT2_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT2_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT2_114.addFeatures(features_QH100DSDT2_114);
var lyr_QH100DSDT2_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT2_114, 
                style: style_QH100DSDT2_114,
                popuplayertitle: 'QH100-DSDT 2',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT2_114.png" /> QH100-DSDT 2'
            });
var format_QH100DSDT1_115 = new ol.format.GeoJSON();
var features_QH100DSDT1_115 = format_QH100DSDT1_115.readFeatures(json_QH100DSDT1_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSDT1_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSDT1_115.addFeatures(features_QH100DSDT1_115);
var lyr_QH100DSDT1_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSDT1_115, 
                style: style_QH100DSDT1_115,
                popuplayertitle: 'QH100-DSDT 1',
                interactive: true,
                title: '<img src="styles/legend/QH100DSDT1_115.png" /> QH100-DSDT 1'
            });
var format_QH100DSQG_Thuong2050_116 = new ol.format.GeoJSON();
var features_QH100DSQG_Thuong2050_116 = format_QH100DSQG_Thuong2050_116.readFeatures(json_QH100DSQG_Thuong2050_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH100DSQG_Thuong2050_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH100DSQG_Thuong2050_116.addFeatures(features_QH100DSQG_Thuong2050_116);
var lyr_QH100DSQG_Thuong2050_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH100DSQG_Thuong2050_116, 
                style: style_QH100DSQG_Thuong2050_116,
                popuplayertitle: 'QH100-DSQG_Thuong 2050',
                interactive: true,
                title: '<img src="styles/legend/QH100DSQG_Thuong2050_116.png" /> QH100-DSQG_Thuong 2050'
            });
var format_DSQG_117 = new ol.format.GeoJSON();
var features_DSQG_117 = format_DSQG_117.readFeatures(json_DSQG_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSQG_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSQG_117.addFeatures(features_DSQG_117);
var lyr_DSQG_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSQG_117, 
                style: style_DSQG_117,
                popuplayertitle: 'DSQG',
                interactive: true,
                title: '<img src="styles/legend/DSQG_117.png" /> DSQG'
            });
var format_Duongsatvung_118 = new ol.format.GeoJSON();
var features_Duongsatvung_118 = format_Duongsatvung_118.readFeatures(json_Duongsatvung_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Duongsatvung_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Duongsatvung_118.addFeatures(features_Duongsatvung_118);
var lyr_Duongsatvung_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Duongsatvung_118, 
                style: style_Duongsatvung_118,
                popuplayertitle: 'Duongsatvung',
                interactive: true,
                title: '<img src="styles/legend/Duongsatvung_118.png" /> Duongsatvung'
            });
var format_Depot_119 = new ol.format.GeoJSON();
var features_Depot_119 = format_Depot_119.readFeatures(json_Depot_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Depot_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Depot_119.addFeatures(features_Depot_119);
var lyr_Depot_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Depot_119, 
                style: style_Depot_119,
                popuplayertitle: 'Depot',
                interactive: true,
                title: '<img src="styles/legend/Depot_119.png" /> Depot'
            });
var format_PLine_17_120 = new ol.format.GeoJSON();
var features_PLine_17_120 = format_PLine_17_120.readFeatures(json_PLine_17_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_17_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_17_120.addFeatures(features_PLine_17_120);
var lyr_PLine_17_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_17_120, 
                style: style_PLine_17_120,
                popuplayertitle: 'PLine_17',
                interactive: true,
                title: '<img src="styles/legend/PLine_17_120.png" /> PLine_17'
            });
var format_PLine_16_121 = new ol.format.GeoJSON();
var features_PLine_16_121 = format_PLine_16_121.readFeatures(json_PLine_16_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_16_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_16_121.addFeatures(features_PLine_16_121);
var lyr_PLine_16_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_16_121, 
                style: style_PLine_16_121,
                popuplayertitle: 'PLine_16',
                interactive: true,
                title: '<img src="styles/legend/PLine_16_121.png" /> PLine_16'
            });
var format_PLine_15_122 = new ol.format.GeoJSON();
var features_PLine_15_122 = format_PLine_15_122.readFeatures(json_PLine_15_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_15_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_15_122.addFeatures(features_PLine_15_122);
var lyr_PLine_15_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_15_122, 
                style: style_PLine_15_122,
                popuplayertitle: 'PLine_15',
                interactive: true,
                title: '<img src="styles/legend/PLine_15_122.png" /> PLine_15'
            });
var format_PLine_14_123 = new ol.format.GeoJSON();
var features_PLine_14_123 = format_PLine_14_123.readFeatures(json_PLine_14_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_14_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_14_123.addFeatures(features_PLine_14_123);
var lyr_PLine_14_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_14_123, 
                style: style_PLine_14_123,
                popuplayertitle: 'PLine_14',
                interactive: true,
                title: '<img src="styles/legend/PLine_14_123.png" /> PLine_14'
            });
var format_PLine_13_124 = new ol.format.GeoJSON();
var features_PLine_13_124 = format_PLine_13_124.readFeatures(json_PLine_13_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_13_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_13_124.addFeatures(features_PLine_13_124);
var lyr_PLine_13_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_13_124, 
                style: style_PLine_13_124,
                popuplayertitle: 'PLine_13',
                interactive: true,
                title: '<img src="styles/legend/PLine_13_124.png" /> PLine_13'
            });
var format_PLine_12_125 = new ol.format.GeoJSON();
var features_PLine_12_125 = format_PLine_12_125.readFeatures(json_PLine_12_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_12_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_12_125.addFeatures(features_PLine_12_125);
var lyr_PLine_12_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_12_125, 
                style: style_PLine_12_125,
                popuplayertitle: 'PLine_12',
                interactive: true,
                title: '<img src="styles/legend/PLine_12_125.png" /> PLine_12'
            });
var format_PLine_11_126 = new ol.format.GeoJSON();
var features_PLine_11_126 = format_PLine_11_126.readFeatures(json_PLine_11_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_11_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_11_126.addFeatures(features_PLine_11_126);
var lyr_PLine_11_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_11_126, 
                style: style_PLine_11_126,
                popuplayertitle: 'PLine_11',
                interactive: true,
                title: '<img src="styles/legend/PLine_11_126.png" /> PLine_11'
            });
var format_PLine_10_127 = new ol.format.GeoJSON();
var features_PLine_10_127 = format_PLine_10_127.readFeatures(json_PLine_10_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_10_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_10_127.addFeatures(features_PLine_10_127);
var lyr_PLine_10_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_10_127, 
                style: style_PLine_10_127,
                popuplayertitle: 'PLine_10',
                interactive: true,
                title: '<img src="styles/legend/PLine_10_127.png" /> PLine_10'
            });
var format_PLine_9_128 = new ol.format.GeoJSON();
var features_PLine_9_128 = format_PLine_9_128.readFeatures(json_PLine_9_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_9_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_9_128.addFeatures(features_PLine_9_128);
var lyr_PLine_9_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_9_128, 
                style: style_PLine_9_128,
                popuplayertitle: 'PLine_9',
                interactive: true,
                title: '<img src="styles/legend/PLine_9_128.png" /> PLine_9'
            });
var format_PLine_8_129 = new ol.format.GeoJSON();
var features_PLine_8_129 = format_PLine_8_129.readFeatures(json_PLine_8_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_8_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_8_129.addFeatures(features_PLine_8_129);
var lyr_PLine_8_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_8_129, 
                style: style_PLine_8_129,
                popuplayertitle: 'PLine_8',
                interactive: true,
                title: '<img src="styles/legend/PLine_8_129.png" /> PLine_8'
            });
var format_PLine_7_130 = new ol.format.GeoJSON();
var features_PLine_7_130 = format_PLine_7_130.readFeatures(json_PLine_7_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_7_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_7_130.addFeatures(features_PLine_7_130);
var lyr_PLine_7_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_7_130, 
                style: style_PLine_7_130,
                popuplayertitle: 'PLine_7',
                interactive: true,
                title: '<img src="styles/legend/PLine_7_130.png" /> PLine_7'
            });
var format_PLine_6_131 = new ol.format.GeoJSON();
var features_PLine_6_131 = format_PLine_6_131.readFeatures(json_PLine_6_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_6_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_6_131.addFeatures(features_PLine_6_131);
var lyr_PLine_6_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_6_131, 
                style: style_PLine_6_131,
                popuplayertitle: 'PLine_6',
                interactive: true,
                title: '<img src="styles/legend/PLine_6_131.png" /> PLine_6'
            });
var format_PLine_5_132 = new ol.format.GeoJSON();
var features_PLine_5_132 = format_PLine_5_132.readFeatures(json_PLine_5_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_5_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_5_132.addFeatures(features_PLine_5_132);
var lyr_PLine_5_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_5_132, 
                style: style_PLine_5_132,
                popuplayertitle: 'PLine_5',
                interactive: true,
                title: '<img src="styles/legend/PLine_5_132.png" /> PLine_5'
            });
var format_PLine_4_133 = new ol.format.GeoJSON();
var features_PLine_4_133 = format_PLine_4_133.readFeatures(json_PLine_4_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_4_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_4_133.addFeatures(features_PLine_4_133);
var lyr_PLine_4_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_4_133, 
                style: style_PLine_4_133,
                popuplayertitle: 'PLine_4',
                interactive: true,
                title: '<img src="styles/legend/PLine_4_133.png" /> PLine_4'
            });
var format_PLine_3_134 = new ol.format.GeoJSON();
var features_PLine_3_134 = format_PLine_3_134.readFeatures(json_PLine_3_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_3_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_3_134.addFeatures(features_PLine_3_134);
var lyr_PLine_3_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_3_134, 
                style: style_PLine_3_134,
                popuplayertitle: 'PLine_3',
                interactive: true,
                title: '<img src="styles/legend/PLine_3_134.png" /> PLine_3'
            });
var format_PLine_2A_135 = new ol.format.GeoJSON();
var features_PLine_2A_135 = format_PLine_2A_135.readFeatures(json_PLine_2A_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_2A_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_2A_135.addFeatures(features_PLine_2A_135);
var lyr_PLine_2A_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_2A_135, 
                style: style_PLine_2A_135,
                popuplayertitle: 'PLine_2A',
                interactive: true,
                title: '<img src="styles/legend/PLine_2A_135.png" /> PLine_2A'
            });
var format_PLine_2_136 = new ol.format.GeoJSON();
var features_PLine_2_136 = format_PLine_2_136.readFeatures(json_PLine_2_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_2_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_2_136.addFeatures(features_PLine_2_136);
var lyr_PLine_2_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_2_136, 
                style: style_PLine_2_136,
                popuplayertitle: 'PLine_2',
                interactive: true,
                title: '<img src="styles/legend/PLine_2_136.png" /> PLine_2'
            });
var format_PLine_1_137 = new ol.format.GeoJSON();
var features_PLine_1_137 = format_PLine_1_137.readFeatures(json_PLine_1_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLine_1_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLine_1_137.addFeatures(features_PLine_1_137);
var lyr_PLine_1_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLine_1_137, 
                style: style_PLine_1_137,
                popuplayertitle: 'PLine_1',
                interactive: true,
                title: '<img src="styles/legend/PLine_1_137.png" /> PLine_1'
            });
var format_T12_138 = new ol.format.GeoJSON();
var features_T12_138 = format_T12_138.readFeatures(json_T12_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T12_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T12_138.addFeatures(features_T12_138);
var lyr_T12_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T12_138, 
                style: style_T12_138,
                popuplayertitle: 'T12',
                interactive: true,
                title: '<img src="styles/legend/T12_138.png" /> T12'
            });
var format_T11_139 = new ol.format.GeoJSON();
var features_T11_139 = format_T11_139.readFeatures(json_T11_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T11_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T11_139.addFeatures(features_T11_139);
var lyr_T11_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T11_139, 
                style: style_T11_139,
                popuplayertitle: 'T11',
                interactive: true,
                title: '<img src="styles/legend/T11_139.png" /> T11'
            });
var format_T10_140 = new ol.format.GeoJSON();
var features_T10_140 = format_T10_140.readFeatures(json_T10_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T10_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T10_140.addFeatures(features_T10_140);
var lyr_T10_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T10_140, 
                style: style_T10_140,
                popuplayertitle: 'T10',
                interactive: true,
                title: '<img src="styles/legend/T10_140.png" /> T10'
            });
var format_T9_141 = new ol.format.GeoJSON();
var features_T9_141 = format_T9_141.readFeatures(json_T9_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T9_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T9_141.addFeatures(features_T9_141);
var lyr_T9_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T9_141, 
                style: style_T9_141,
                popuplayertitle: 'T9',
                interactive: true,
                title: '<img src="styles/legend/T9_141.png" /> T9'
            });
var format_T8_142 = new ol.format.GeoJSON();
var features_T8_142 = format_T8_142.readFeatures(json_T8_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T8_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T8_142.addFeatures(features_T8_142);
var lyr_T8_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T8_142, 
                style: style_T8_142,
                popuplayertitle: 'T8',
                interactive: true,
                title: '<img src="styles/legend/T8_142.png" /> T8'
            });
var format_T7_143 = new ol.format.GeoJSON();
var features_T7_143 = format_T7_143.readFeatures(json_T7_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T7_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T7_143.addFeatures(features_T7_143);
var lyr_T7_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T7_143, 
                style: style_T7_143,
                popuplayertitle: 'T7',
                interactive: true,
                title: '<img src="styles/legend/T7_143.png" /> T7'
            });
var format_T6_144 = new ol.format.GeoJSON();
var features_T6_144 = format_T6_144.readFeatures(json_T6_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T6_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T6_144.addFeatures(features_T6_144);
var lyr_T6_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T6_144, 
                style: style_T6_144,
                popuplayertitle: 'T6',
                interactive: true,
                title: '<img src="styles/legend/T6_144.png" /> T6'
            });
var format_T5_145 = new ol.format.GeoJSON();
var features_T5_145 = format_T5_145.readFeatures(json_T5_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T5_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T5_145.addFeatures(features_T5_145);
var lyr_T5_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T5_145, 
                style: style_T5_145,
                popuplayertitle: 'T5',
                interactive: true,
                title: '<img src="styles/legend/T5_145.png" /> T5'
            });
var format_T4_146 = new ol.format.GeoJSON();
var features_T4_146 = format_T4_146.readFeatures(json_T4_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T4_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T4_146.addFeatures(features_T4_146);
var lyr_T4_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T4_146, 
                style: style_T4_146,
                popuplayertitle: 'T4',
                interactive: true,
                title: '<img src="styles/legend/T4_146.png" /> T4'
            });
var format_T3_147 = new ol.format.GeoJSON();
var features_T3_147 = format_T3_147.readFeatures(json_T3_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3_147.addFeatures(features_T3_147);
var lyr_T3_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T3_147, 
                style: style_T3_147,
                popuplayertitle: 'T3',
                interactive: true,
                title: '<img src="styles/legend/T3_147.png" /> T3'
            });
var format_T2A_148 = new ol.format.GeoJSON();
var features_T2A_148 = format_T2A_148.readFeatures(json_T2A_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2A_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2A_148.addFeatures(features_T2A_148);
var lyr_T2A_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2A_148, 
                style: style_T2A_148,
                popuplayertitle: 'T2A',
                interactive: true,
                title: '<img src="styles/legend/T2A_148.png" /> T2A'
            });
var format_T2_149 = new ol.format.GeoJSON();
var features_T2_149 = format_T2_149.readFeatures(json_T2_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2_149.addFeatures(features_T2_149);
var lyr_T2_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2_149, 
                style: style_T2_149,
                popuplayertitle: 'T2',
                interactive: true,
                title: '<img src="styles/legend/T2_149.png" /> T2'
            });
var format_T1A_150 = new ol.format.GeoJSON();
var features_T1A_150 = format_T1A_150.readFeatures(json_T1A_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1A_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1A_150.addFeatures(features_T1A_150);
var lyr_T1A_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1A_150, 
                style: style_T1A_150,
                popuplayertitle: 'T1A',
                interactive: true,
                title: '<img src="styles/legend/T1A_150.png" /> T1A'
            });
var format_T1_151 = new ol.format.GeoJSON();
var features_T1_151 = format_T1_151.readFeatures(json_T1_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1_151.addFeatures(features_T1_151);
var lyr_T1_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1_151, 
                style: style_T1_151,
                popuplayertitle: 'T1',
                interactive: true,
                title: '<img src="styles/legend/T1_151.png" /> T1'
            });
var format_QH519Depot_152 = new ol.format.GeoJSON();
var features_QH519Depot_152 = format_QH519Depot_152.readFeatures(json_QH519Depot_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH519Depot_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH519Depot_152.addFeatures(features_QH519Depot_152);
var lyr_QH519Depot_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH519Depot_152, 
                style: style_QH519Depot_152,
                popuplayertitle: 'QH519-Depot',
                interactive: false,
                title: '<img src="styles/legend/QH519Depot_152.png" /> QH519-Depot'
            });
var format_QH519Ga_153 = new ol.format.GeoJSON();
var features_QH519Ga_153 = format_QH519Ga_153.readFeatures(json_QH519Ga_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH519Ga_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH519Ga_153.addFeatures(features_QH519Ga_153);
var lyr_QH519Ga_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH519Ga_153, 
                style: style_QH519Ga_153,
                popuplayertitle: 'QH519-Ga',
                interactive: false,
    title: 'QH519-Ga<br />\
    <img src="styles/legend/QH519Ga_153_0.png" /> 1<br />\
    <img src="styles/legend/QH519Ga_153_1.png" /> 2<br />\
    <img src="styles/legend/QH519Ga_153_2.png" /> 2A<br />\
    <img src="styles/legend/QH519Ga_153_3.png" /> 3<br />\
    <img src="styles/legend/QH519Ga_153_4.png" /> 4<br />\
    <img src="styles/legend/QH519Ga_153_5.png" /> 5<br />\
    <img src="styles/legend/QH519Ga_153_6.png" /> 6<br />\
    <img src="styles/legend/QH519Ga_153_7.png" /> 7<br />\
    <img src="styles/legend/QH519Ga_153_8.png" /> 8<br />' });
var format_tuyen_M3_154 = new ol.format.GeoJSON();
var features_tuyen_M3_154 = format_tuyen_M3_154.readFeatures(json_tuyen_M3_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M3_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M3_154.addFeatures(features_tuyen_M3_154);
var lyr_tuyen_M3_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M3_154, 
                style: style_tuyen_M3_154,
                popuplayertitle: 'tuyen_M3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M3_154.png" /> tuyen_M3'
            });
var format_tuyen_M2_155 = new ol.format.GeoJSON();
var features_tuyen_M2_155 = format_tuyen_M2_155.readFeatures(json_tuyen_M2_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M2_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M2_155.addFeatures(features_tuyen_M2_155);
var lyr_tuyen_M2_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M2_155, 
                style: style_tuyen_M2_155,
                popuplayertitle: 'tuyen_M2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M2_155.png" /> tuyen_M2'
            });
var format_tuyen_M1_156 = new ol.format.GeoJSON();
var features_tuyen_M1_156 = format_tuyen_M1_156.readFeatures(json_tuyen_M1_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M1_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M1_156.addFeatures(features_tuyen_M1_156);
var lyr_tuyen_M1_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M1_156, 
                style: style_tuyen_M1_156,
                popuplayertitle: 'tuyen_M1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M1_156.png" /> tuyen_M1'
            });
var format_tuyen_VT_157 = new ol.format.GeoJSON();
var features_tuyen_VT_157 = format_tuyen_VT_157.readFeatures(json_tuyen_VT_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_VT_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_VT_157.addFeatures(features_tuyen_VT_157);
var lyr_tuyen_VT_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_VT_157, 
                style: style_tuyen_VT_157,
                popuplayertitle: 'tuyen_VT',
                interactive: true,
                title: '<img src="styles/legend/tuyen_VT_157.png" /> tuyen_VT'
            });
var format_tuyen_8_158 = new ol.format.GeoJSON();
var features_tuyen_8_158 = format_tuyen_8_158.readFeatures(json_tuyen_8_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_8_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_8_158.addFeatures(features_tuyen_8_158);
var lyr_tuyen_8_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_8_158, 
                style: style_tuyen_8_158,
                popuplayertitle: 'tuyen_8',
                interactive: true,
                title: '<img src="styles/legend/tuyen_8_158.png" /> tuyen_8'
            });
var format_tuyen_7_159 = new ol.format.GeoJSON();
var features_tuyen_7_159 = format_tuyen_7_159.readFeatures(json_tuyen_7_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_7_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_7_159.addFeatures(features_tuyen_7_159);
var lyr_tuyen_7_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_7_159, 
                style: style_tuyen_7_159,
                popuplayertitle: 'tuyen_7',
                interactive: true,
                title: '<img src="styles/legend/tuyen_7_159.png" /> tuyen_7'
            });
var format_tuyen_6_160 = new ol.format.GeoJSON();
var features_tuyen_6_160 = format_tuyen_6_160.readFeatures(json_tuyen_6_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_6_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_6_160.addFeatures(features_tuyen_6_160);
var lyr_tuyen_6_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_6_160, 
                style: style_tuyen_6_160,
                popuplayertitle: 'tuyen_6',
                interactive: true,
                title: '<img src="styles/legend/tuyen_6_160.png" /> tuyen_6'
            });
var format_tuyen_5_161 = new ol.format.GeoJSON();
var features_tuyen_5_161 = format_tuyen_5_161.readFeatures(json_tuyen_5_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_5_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_5_161.addFeatures(features_tuyen_5_161);
var lyr_tuyen_5_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_5_161, 
                style: style_tuyen_5_161,
                popuplayertitle: 'tuyen_5',
                interactive: true,
                title: '<img src="styles/legend/tuyen_5_161.png" /> tuyen_5'
            });
var format_tuyen_4_162 = new ol.format.GeoJSON();
var features_tuyen_4_162 = format_tuyen_4_162.readFeatures(json_tuyen_4_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_4_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_4_162.addFeatures(features_tuyen_4_162);
var lyr_tuyen_4_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_4_162, 
                style: style_tuyen_4_162,
                popuplayertitle: 'tuyen_4',
                interactive: true,
                title: '<img src="styles/legend/tuyen_4_162.png" /> tuyen_4'
            });
var format_tuyen_3_163 = new ol.format.GeoJSON();
var features_tuyen_3_163 = format_tuyen_3_163.readFeatures(json_tuyen_3_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_3_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_3_163.addFeatures(features_tuyen_3_163);
var lyr_tuyen_3_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_3_163, 
                style: style_tuyen_3_163,
                popuplayertitle: 'tuyen_3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_3_163.png" /> tuyen_3'
            });
var format_tuyen_2A_164 = new ol.format.GeoJSON();
var features_tuyen_2A_164 = format_tuyen_2A_164.readFeatures(json_tuyen_2A_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2A_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2A_164.addFeatures(features_tuyen_2A_164);
var lyr_tuyen_2A_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2A_164, 
                style: style_tuyen_2A_164,
                popuplayertitle: 'tuyen_2A',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2A_164.png" /> tuyen_2A'
            });
var format_tuyen_2_165 = new ol.format.GeoJSON();
var features_tuyen_2_165 = format_tuyen_2_165.readFeatures(json_tuyen_2_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2_165.addFeatures(features_tuyen_2_165);
var lyr_tuyen_2_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2_165, 
                style: style_tuyen_2_165,
                popuplayertitle: 'tuyen_2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2_165.png" /> tuyen_2'
            });
var format_tuyen_1_166 = new ol.format.GeoJSON();
var features_tuyen_1_166 = format_tuyen_1_166.readFeatures(json_tuyen_1_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_1_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_1_166.addFeatures(features_tuyen_1_166);
var lyr_tuyen_1_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_1_166, 
                style: style_tuyen_1_166,
                popuplayertitle: 'tuyen_1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_1_166.png" /> tuyen_1'
            });
var group_QH519 = new ol.layer.Group({
                                layers: [lyr_QH519Depot_152,lyr_QH519Ga_153,lyr_tuyen_M3_154,lyr_tuyen_M2_155,lyr_tuyen_M1_156,lyr_tuyen_VT_157,lyr_tuyen_8_158,lyr_tuyen_7_159,lyr_tuyen_6_160,lyr_tuyen_5_161,lyr_tuyen_4_162,lyr_tuyen_3_163,lyr_tuyen_2A_164,lyr_tuyen_2_165,lyr_tuyen_1_166,],
                                fold: 'close',
                                title: 'QH 519'});
var group_QH1668 = new ol.layer.Group({
                                layers: [lyr_T12_138,lyr_T11_139,lyr_T10_140,lyr_T9_141,lyr_T8_142,lyr_T7_143,lyr_T6_144,lyr_T5_145,lyr_T4_146,lyr_T3_147,lyr_T2A_148,lyr_T2_149,lyr_T1A_150,lyr_T1_151,],
                                fold: 'open',
                                title: 'QH1668'});
var group_RasoatSXD04032026 = new ol.layer.Group({
                                layers: [lyr_DSQG_117,lyr_Duongsatvung_118,lyr_Depot_119,lyr_PLine_17_120,lyr_PLine_16_121,lyr_PLine_15_122,lyr_PLine_14_123,lyr_PLine_13_124,lyr_PLine_12_125,lyr_PLine_11_126,lyr_PLine_10_127,lyr_PLine_9_128,lyr_PLine_8_129,lyr_PLine_7_130,lyr_PLine_6_131,lyr_PLine_5_132,lyr_PLine_4_133,lyr_PLine_3_134,lyr_PLine_2A_135,lyr_PLine_2_136,lyr_PLine_1_137,],
                                fold: 'close',
                                title: 'Ra soat SXD (04-03-2026)'});
var group_QH100nam10022026 = new ol.layer.Group({
                                layers: [lyr_QH100Ga_97,lyr_QH100Monorail_98,lyr_QH100dsDT_99,lyr_QH100DSDT17_100,lyr_QH100DSDT16_101,lyr_QH100DSDT15_102,lyr_QH100DSDT12_103,lyr_QH100DSDT11_104,lyr_QH100DSDT10_105,lyr_QH100DSDT9_106,lyr_QH100DSDT8_107,lyr_QH100DSDT7_108,lyr_QH100DSDT6_109,lyr_QH100DSDT5_110,lyr_QH100DSDT4_111,lyr_QH100DSDT3_112,lyr_QH100DSDT2A_113,lyr_QH100DSDT2_114,lyr_QH100DSDT1_115,lyr_QH100DSQG_Thuong2050_116,],
                                fold: 'close',
                                title: 'QH 100nam (10-02-2026)'});
var group_QH100namxcangT12032026 = new ol.layer.Group({
                                layers: [lyr_Monorail_78,lyr_DSDT16_79,lyr_DSDT15_80,lyr_DSDT10_81,lyr_DSDT9_82,lyr_DSDT8_83,lyr_DSDT7_84,lyr_DSDT6_85,lyr_DSDT5_86,lyr_DSDT4_87,lyr_DSDT3_88,lyr_DSDT2A_89,lyr_DSDT2_90,lyr_DSDT1_91,lyr_4Railway_92,lyr_3LRTORBRTM17_93,lyr_3LRTORBRTM13_94,lyr_1ExpressLineM8_95,lyr_Ga_96,],
                                fold: 'close',
                                title: 'QH 100nam - Đx của Đồng Tế (12-03-2026)'});
var group_QH100sauhpChnhph13032026 = new ol.layer.Group({
                                layers: [lyr_nearbyProvince_51,lyr_nearbyProvince_52,lyr_03commuterLine_53,lyr_02interCity_54,lyr_01highSpeed_55,lyr_7railwaystation2secondary_56,lyr_6airport_57,lyr_4Railway_58,lyr_4BRTM18_59,lyr_4BRTM17_60,lyr_4BRTM12_61,lyr_3LRTM15_62,lyr_3LRTM13_63,lyr_3LRTM9_64,lyr_2RegularLineM16_65,lyr_2RegularLineM14_66,lyr_2RegularLineM11_67,lyr_2RegularLineM10_68,lyr_2RegularLineM7_69,lyr_2RegularLineM6_70,lyr_2RegularLineM5_71,lyr_2RegularLineM4_72,lyr_2RegularLineM3_73,lyr_2RegularLineM2_74,lyr_2RegularLine2A_75,lyr_1ExpressLineM8_76,lyr_1ExpressLineM1_77,],
                                fold: 'close',
                                title: 'QH100 sau họp Chính phủ (13-03-2026)'});
var group_QH100HUPI260406 = new ol.layer.Group({
                                layers: [lyr_layer_DCaotoc_24,lyr_layer_DPcCaotoc_25,lyr_layer_ketnoidsdt_26,lyr_layer_4Railwaywhite_27,lyr_layer_4Railway_28,lyr_layer_SQG_Thng2050_29,lyr_layer_Dduongsattocdocao_30,lyr_layer_Monorail_31,lyr_layer_4BRTM18_32,lyr_layer_DSDT_17_33,lyr_layer_DSDT_16_34,lyr_layer_DSDT_15_35,lyr_layer_DSDT_13_36,lyr_layer_DSDT12_37,lyr_layer_DSDT_11_38,lyr_layer_DSDT10_39,lyr_layer_DSDT9_40,lyr_layer_DSDT8_41,lyr_layer_DSDT7_42,lyr_layer_DSDT6_43,lyr_layer_DSDT5_44,lyr_layer_DSDT4_45,lyr_layer_DSDT3_46,lyr_layer_DSDT2A_47,lyr_layer_DSDT2_48,lyr_layer_DSDT1_49,lyr_layer_02interCity_50,],
                                fold: 'open',
                                title: 'QH100 - HUPI 260406'});
var group_260406AREP_Proposallines_v2 = new ol.layer.Group({
                                layers: [lyr_layer_M16_7,lyr_layer_M15_8,lyr_layer_M14_9,lyr_layer_M13_10,lyr_layer_M12_11,lyr_layer_M11_12,lyr_layer_M10_13,lyr_layer_M09_14,lyr_layer_M08_15,lyr_layer_M07_16,lyr_layer_M06_17,lyr_layer_M05_18,lyr_layer_M04_19,lyr_layer_M03_20,lyr_layer_M02A_21,lyr_layer_M02_22,lyr_layer_M01_23,],
                                fold: 'open',
                                title: '260406 AREP_Proposal lines_v2'});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleTraffic_1.setVisible(false);lyr_GoogleTerrain_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(false);lyr_GoogleRoad_4.setVisible(true);lyr_GoogleLabels_5.setVisible(false);lyr_GoogleHybrid_6.setVisible(false);lyr_layer_M16_7.setVisible(false);lyr_layer_M15_8.setVisible(false);lyr_layer_M14_9.setVisible(false);lyr_layer_M13_10.setVisible(false);lyr_layer_M12_11.setVisible(false);lyr_layer_M11_12.setVisible(false);lyr_layer_M10_13.setVisible(false);lyr_layer_M09_14.setVisible(false);lyr_layer_M08_15.setVisible(false);lyr_layer_M07_16.setVisible(false);lyr_layer_M06_17.setVisible(false);lyr_layer_M05_18.setVisible(false);lyr_layer_M04_19.setVisible(false);lyr_layer_M03_20.setVisible(false);lyr_layer_M02A_21.setVisible(false);lyr_layer_M02_22.setVisible(false);lyr_layer_M01_23.setVisible(false);lyr_layer_DCaotoc_24.setVisible(false);lyr_layer_DPcCaotoc_25.setVisible(false);lyr_layer_ketnoidsdt_26.setVisible(false);lyr_layer_4Railwaywhite_27.setVisible(false);lyr_layer_4Railway_28.setVisible(false);lyr_layer_SQG_Thng2050_29.setVisible(false);lyr_layer_Dduongsattocdocao_30.setVisible(false);lyr_layer_Monorail_31.setVisible(false);lyr_layer_4BRTM18_32.setVisible(false);lyr_layer_DSDT_17_33.setVisible(false);lyr_layer_DSDT_16_34.setVisible(false);lyr_layer_DSDT_15_35.setVisible(false);lyr_layer_DSDT_13_36.setVisible(false);lyr_layer_DSDT12_37.setVisible(false);lyr_layer_DSDT_11_38.setVisible(false);lyr_layer_DSDT10_39.setVisible(false);lyr_layer_DSDT9_40.setVisible(false);lyr_layer_DSDT8_41.setVisible(false);lyr_layer_DSDT7_42.setVisible(false);lyr_layer_DSDT6_43.setVisible(false);lyr_layer_DSDT5_44.setVisible(false);lyr_layer_DSDT4_45.setVisible(false);lyr_layer_DSDT3_46.setVisible(false);lyr_layer_DSDT2A_47.setVisible(false);lyr_layer_DSDT2_48.setVisible(false);lyr_layer_DSDT1_49.setVisible(false);lyr_layer_02interCity_50.setVisible(false);lyr_nearbyProvince_51.setVisible(false);lyr_nearbyProvince_52.setVisible(false);lyr_03commuterLine_53.setVisible(false);lyr_02interCity_54.setVisible(false);lyr_01highSpeed_55.setVisible(false);lyr_7railwaystation2secondary_56.setVisible(false);lyr_6airport_57.setVisible(false);lyr_4Railway_58.setVisible(false);lyr_4BRTM18_59.setVisible(false);lyr_4BRTM17_60.setVisible(false);lyr_4BRTM12_61.setVisible(false);lyr_3LRTM15_62.setVisible(false);lyr_3LRTM13_63.setVisible(false);lyr_3LRTM9_64.setVisible(false);lyr_2RegularLineM16_65.setVisible(false);lyr_2RegularLineM14_66.setVisible(false);lyr_2RegularLineM11_67.setVisible(false);lyr_2RegularLineM10_68.setVisible(false);lyr_2RegularLineM7_69.setVisible(false);lyr_2RegularLineM6_70.setVisible(false);lyr_2RegularLineM5_71.setVisible(false);lyr_2RegularLineM4_72.setVisible(false);lyr_2RegularLineM3_73.setVisible(false);lyr_2RegularLineM2_74.setVisible(false);lyr_2RegularLine2A_75.setVisible(false);lyr_1ExpressLineM8_76.setVisible(false);lyr_1ExpressLineM1_77.setVisible(false);lyr_Monorail_78.setVisible(false);lyr_DSDT16_79.setVisible(false);lyr_DSDT15_80.setVisible(false);lyr_DSDT10_81.setVisible(false);lyr_DSDT9_82.setVisible(false);lyr_DSDT8_83.setVisible(false);lyr_DSDT7_84.setVisible(false);lyr_DSDT6_85.setVisible(false);lyr_DSDT5_86.setVisible(false);lyr_DSDT4_87.setVisible(false);lyr_DSDT3_88.setVisible(false);lyr_DSDT2A_89.setVisible(false);lyr_DSDT2_90.setVisible(false);lyr_DSDT1_91.setVisible(false);lyr_4Railway_92.setVisible(false);lyr_3LRTORBRTM17_93.setVisible(false);lyr_3LRTORBRTM13_94.setVisible(false);lyr_1ExpressLineM8_95.setVisible(false);lyr_Ga_96.setVisible(false);lyr_QH100Ga_97.setVisible(false);lyr_QH100Monorail_98.setVisible(false);lyr_QH100dsDT_99.setVisible(false);lyr_QH100DSDT17_100.setVisible(false);lyr_QH100DSDT16_101.setVisible(false);lyr_QH100DSDT15_102.setVisible(false);lyr_QH100DSDT12_103.setVisible(false);lyr_QH100DSDT11_104.setVisible(false);lyr_QH100DSDT10_105.setVisible(false);lyr_QH100DSDT9_106.setVisible(false);lyr_QH100DSDT8_107.setVisible(false);lyr_QH100DSDT7_108.setVisible(false);lyr_QH100DSDT6_109.setVisible(false);lyr_QH100DSDT5_110.setVisible(false);lyr_QH100DSDT4_111.setVisible(false);lyr_QH100DSDT3_112.setVisible(false);lyr_QH100DSDT2A_113.setVisible(false);lyr_QH100DSDT2_114.setVisible(false);lyr_QH100DSDT1_115.setVisible(false);lyr_QH100DSQG_Thuong2050_116.setVisible(false);lyr_DSQG_117.setVisible(false);lyr_Duongsatvung_118.setVisible(false);lyr_Depot_119.setVisible(false);lyr_PLine_17_120.setVisible(false);lyr_PLine_16_121.setVisible(false);lyr_PLine_15_122.setVisible(false);lyr_PLine_14_123.setVisible(false);lyr_PLine_13_124.setVisible(false);lyr_PLine_12_125.setVisible(false);lyr_PLine_11_126.setVisible(false);lyr_PLine_10_127.setVisible(false);lyr_PLine_9_128.setVisible(false);lyr_PLine_8_129.setVisible(false);lyr_PLine_7_130.setVisible(false);lyr_PLine_6_131.setVisible(false);lyr_PLine_5_132.setVisible(false);lyr_PLine_4_133.setVisible(false);lyr_PLine_3_134.setVisible(false);lyr_PLine_2A_135.setVisible(false);lyr_PLine_2_136.setVisible(false);lyr_PLine_1_137.setVisible(false);lyr_T12_138.setVisible(true);lyr_T11_139.setVisible(true);lyr_T10_140.setVisible(true);lyr_T9_141.setVisible(true);lyr_T8_142.setVisible(true);lyr_T7_143.setVisible(true);lyr_T6_144.setVisible(true);lyr_T5_145.setVisible(true);lyr_T4_146.setVisible(true);lyr_T3_147.setVisible(true);lyr_T2A_148.setVisible(true);lyr_T2_149.setVisible(true);lyr_T1A_150.setVisible(true);lyr_T1_151.setVisible(true);lyr_QH519Depot_152.setVisible(false);lyr_QH519Ga_153.setVisible(false);lyr_tuyen_M3_154.setVisible(false);lyr_tuyen_M2_155.setVisible(false);lyr_tuyen_M1_156.setVisible(false);lyr_tuyen_VT_157.setVisible(false);lyr_tuyen_8_158.setVisible(false);lyr_tuyen_7_159.setVisible(false);lyr_tuyen_6_160.setVisible(false);lyr_tuyen_5_161.setVisible(false);lyr_tuyen_4_162.setVisible(false);lyr_tuyen_3_163.setVisible(false);lyr_tuyen_2A_164.setVisible(false);lyr_tuyen_2_165.setVisible(false);lyr_tuyen_1_166.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleTraffic_1,lyr_GoogleTerrain_2,lyr_GoogleSatellite_3,lyr_GoogleRoad_4,lyr_GoogleLabels_5,lyr_GoogleHybrid_6,group_260406AREP_Proposallines_v2,group_QH100HUPI260406,group_QH100sauhpChnhph13032026,group_QH100namxcangT12032026,group_QH100nam10022026,group_RasoatSXD04032026,group_QH1668,group_QH519];
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
lyr_layer_DCaotoc_24.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DPcCaotoc_25.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_ketnoidsdt_26.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_4Railwaywhite_27.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_4Railway_28.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_SQG_Thng2050_29.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_Dduongsattocdocao_30.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_Monorail_31.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_4BRTM18_32.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT_17_33.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT_16_34.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT_15_35.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT_13_36.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT12_37.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT_11_38.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT10_39.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT9_40.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT8_41.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT7_42.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT6_43.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT5_44.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT4_45.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT3_46.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT2A_47.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT2_48.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_DSDT1_49.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_layer_02interCity_50.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', });
lyr_nearbyProvince_51.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_nearbyProvince_52.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_03commuterLine_53.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_02interCity_54.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_01highSpeed_55.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', });
lyr_7railwaystation2secondary_56.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'name_1': 'name_1', });
lyr_6airport_57.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'name_1': 'name_1', });
lyr_4Railway_58.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_4BRTM18_59.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_4BRTM17_60.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_4BRTM12_61.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_3LRTM15_62.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_3LRTM13_63.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_3LRTM9_64.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM16_65.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM14_66.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM11_67.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM10_68.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM7_69.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM6_70.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM5_71.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM4_72.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM3_73.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'attrib_1': 'attrib_1', });
lyr_2RegularLineM2_74.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_2RegularLine2A_75.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_1ExpressLineM8_76.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_1ExpressLineM1_77.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_Monorail_78.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT16_79.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT15_80.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT10_81.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT9_82.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT8_83.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT7_84.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT6_85.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT5_86.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT4_87.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT3_88.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT2A_89.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT2_90.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DSDT1_91.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_4Railway_92.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_3LRTORBRTM17_93.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_3LRTORBRTM13_94.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_1ExpressLineM8_95.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ga_96.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QH100Ga_97.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100Monorail_98.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100dsDT_99.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT17_100.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT16_101.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT15_102.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT12_103.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT11_104.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT10_105.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT9_106.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT8_107.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT7_108.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT6_109.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT5_110.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT4_111.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT3_112.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT2A_113.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT2_114.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSDT1_115.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QH100DSQG_Thuong2050_116.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_DSQG_117.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_Duongsatvung_118.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_Depot_119.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PLine_17_120.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_16_121.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_15_122.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_14_123.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_13_124.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_12_125.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_11_126.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_10_127.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_9_128.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_8_129.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_7_130.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_6_131.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_5_132.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_4_133.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_3_134.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_2A_135.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_2_136.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_PLine_1_137.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', });
lyr_T12_138.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T11_139.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T10_140.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T9_141.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T8_142.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T7_143.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T6_144.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T5_145.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T4_146.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T3_147.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T2A_148.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T2_149.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T1A_150.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T1_151.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_QH519Depot_152.set('fieldAliases', {'fid': 'fid', });
lyr_QH519Ga_153.set('fieldAliases', {'fid': 'fid', 'tenga': 'tenga', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', });
lyr_tuyen_M3_154.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M2_155.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M1_156.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_VT_157.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_8_158.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_7_159.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_6_160.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_5_161.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_4_162.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_3_163.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2A_164.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2_165.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_1_166.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
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
lyr_layer_DCaotoc_24.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DPcCaotoc_25.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_ketnoidsdt_26.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_4Railwaywhite_27.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_4Railway_28.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_SQG_Thng2050_29.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_Dduongsattocdocao_30.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_Monorail_31.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_4BRTM18_32.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT_17_33.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT_16_34.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT_15_35.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT_13_36.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT12_37.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT_11_38.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT10_39.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT9_40.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT8_41.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT7_42.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT6_43.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT5_44.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT4_45.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT3_46.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT2A_47.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT2_48.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_DSDT1_49.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_layer_02interCity_50.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', });
lyr_nearbyProvince_51.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_nearbyProvince_52.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_03commuterLine_53.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_02interCity_54.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_01highSpeed_55.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', });
lyr_7railwaystation2secondary_56.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'name_1': 'TextEdit', });
lyr_6airport_57.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'name_1': 'TextEdit', });
lyr_4Railway_58.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_4BRTM18_59.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_4BRTM17_60.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_4BRTM12_61.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_3LRTM15_62.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_3LRTM13_63.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_3LRTM9_64.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM16_65.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM14_66.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM11_67.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM10_68.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM7_69.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM6_70.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM5_71.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM4_72.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM3_73.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLineM2_74.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_2RegularLine2A_75.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_1ExpressLineM8_76.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_1ExpressLineM1_77.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': 'TextEdit', });
lyr_Monorail_78.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT16_79.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT15_80.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT10_81.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT9_82.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT8_83.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT7_84.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT6_85.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT5_86.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT4_87.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT3_88.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT2A_89.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT2_90.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_DSDT1_91.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_4Railway_92.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_3LRTORBRTM17_93.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_3LRTORBRTM13_94.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_1ExpressLineM8_95.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Ga_96.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QH100Ga_97.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100Monorail_98.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100dsDT_99.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT17_100.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT16_101.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT15_102.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT12_103.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT11_104.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT10_105.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT9_106.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT8_107.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT7_108.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT6_109.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT5_110.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT4_111.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT3_112.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT2A_113.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT2_114.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSDT1_115.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QH100DSQG_Thuong2050_116.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_DSQG_117.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_Duongsatvung_118.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_Depot_119.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PLine_17_120.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_16_121.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_15_122.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_14_123.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_13_124.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_12_125.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_11_126.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_10_127.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_9_128.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_8_129.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_7_130.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_6_131.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_5_132.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_4_133.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_3_134.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_2A_135.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_2_136.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_PLine_1_137.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', });
lyr_T12_138.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T11_139.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T10_140.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T9_141.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T8_142.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T7_143.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T6_144.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T5_145.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T4_146.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T3_147.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T2A_148.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T2_149.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T1A_150.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T1_151.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_QH519Depot_152.set('fieldImages', {'fid': '', });
lyr_QH519Ga_153.set('fieldImages', {'fid': '', 'tenga': '', 'tuyen': '', 'doantuyen': '', 'quanhuyen': '', 'phuongxa': '', });
lyr_tuyen_M3_154.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M2_155.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M1_156.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_VT_157.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_8_158.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_7_159.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_6_160.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_5_161.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_4_162.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_3_163.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_2A_164.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_2_165.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_1_166.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
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
lyr_layer_DCaotoc_24.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DPcCaotoc_25.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_ketnoidsdt_26.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_4Railwaywhite_27.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_4Railway_28.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_SQG_Thng2050_29.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_Dduongsattocdocao_30.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_Monorail_31.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_4BRTM18_32.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT_17_33.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT_16_34.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT_15_35.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT_13_36.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT12_37.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT_11_38.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT10_39.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT9_40.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT8_41.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT7_42.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT6_43.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT5_44.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT4_45.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT3_46.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT2A_47.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT2_48.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_DSDT1_49.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_layer_02interCity_50.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'no label', });
lyr_nearbyProvince_51.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', });
lyr_nearbyProvince_52.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', });
lyr_03commuterLine_53.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_02interCity_54.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', });
lyr_01highSpeed_55.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'name_1': 'hidden field', });
lyr_7railwaystation2secondary_56.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'name_1': 'hidden field', });
lyr_6airport_57.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'name_1': 'hidden field', });
lyr_4Railway_58.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_4BRTM18_59.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_4BRTM17_60.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_4BRTM12_61.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_3LRTM15_62.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_3LRTM13_63.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_3LRTM9_64.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM16_65.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM14_66.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM11_67.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM10_68.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM7_69.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM6_70.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM5_71.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM4_72.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM3_73.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLineM2_74.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_2RegularLine2A_75.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_1ExpressLineM8_76.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_1ExpressLineM1_77.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', 'line_section': 'hidden field', 'attrib_1': 'hidden field', });
lyr_Monorail_78.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT16_79.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT15_80.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT10_81.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT9_82.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT8_83.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT7_84.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT6_85.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT5_86.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT4_87.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT3_88.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT2A_89.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT2_90.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_DSDT1_91.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_4Railway_92.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_3LRTORBRTM17_93.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_3LRTORBRTM13_94.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_1ExpressLineM8_95.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Ga_96.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_QH100Ga_97.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100Monorail_98.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100dsDT_99.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT17_100.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT16_101.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT15_102.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT12_103.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT11_104.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT10_105.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT9_106.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT8_107.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT7_108.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT6_109.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT5_110.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT4_111.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT3_112.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT2A_113.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT2_114.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSDT1_115.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_QH100DSQG_Thuong2050_116.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'no label', 'SubClasses': 'hidden field', 'ExtendedEntity': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_DSQG_117.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_Duongsatvung_118.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_Depot_119.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_PLine_17_120.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_16_121.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_15_122.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_14_123.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_13_124.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_12_125.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_11_126.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_10_127.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_9_128.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_8_129.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_7_130.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_6_131.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_5_132.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_4_133.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_3_134.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_2A_135.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_2_136.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_PLine_1_137.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'line': 'hidden field', });
lyr_T12_138.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T11_139.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T10_140.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T9_141.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T8_142.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T7_143.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T6_144.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T5_145.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T4_146.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T3_147.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T2A_148.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T2_149.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T1A_150.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_T1_151.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'hidden field', });
lyr_QH519Depot_152.set('fieldLabels', {'fid': 'hidden field', });
lyr_QH519Ga_153.set('fieldLabels', {'fid': 'hidden field', 'tenga': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', });
lyr_tuyen_M3_154.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_M2_155.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_M1_156.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_VT_157.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_8_158.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_7_159.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_6_160.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_5_161.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_4_162.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_3_163.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_2A_164.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_2_165.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_1_166.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'fid': 'hidden field', 'tuyen': 'hidden field', 'doantuyen': 'hidden field', 'huongtuyen': 'hidden field', 'quanhuyen': 'hidden field', 'phuongxa': 'hidden field', 'tmdt': 'hidden field', 'nguonvon': 'hidden field', 'chudautu': 'hidden field', 'thoigianth': 'hidden field', 'chieudai': 'hidden field', 'cao': 'hidden field', 'matdat': 'hidden field', 'ngam': 'hidden field', 'soga': 'hidden field', 'gacao': 'hidden field', 'gamatdat': 'hidden field', 'gangam': 'hidden field', 'sodepot': 'hidden field', 'sodoantau': 'hidden field', 'capdien': 'hidden field', 'tocdotk': 'hidden field', 'tocdovanha': 'hidden field', 'tggiancach': 'hidden field', 'giomo': 'hidden field', 'giodong': 'hidden field', 'luotkhach': 'hidden field', 'giaveluot': 'hidden field', 'giavethang': 'hidden field', 'thcbdt': 'hidden field', 'ththdt': 'hidden field', });
lyr_tuyen_1_166.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});