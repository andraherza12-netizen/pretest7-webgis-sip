var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BatasAdministrasi_1 = new ol.format.GeoJSON();
var features_BatasAdministrasi_1 = format_BatasAdministrasi_1.readFeatures(json_BatasAdministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_1.addFeatures(features_BatasAdministrasi_1);
var lyr_BatasAdministrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_1, 
                style: style_BatasAdministrasi_1,
                popuplayertitle: 'Batas Administrasi',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_1.png" /> Batas Administrasi'
            });
var format_PenggunaanLahanKomersial_2 = new ol.format.GeoJSON();
var features_PenggunaanLahanKomersial_2 = format_PenggunaanLahanKomersial_2.readFeatures(json_PenggunaanLahanKomersial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahanKomersial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahanKomersial_2.addFeatures(features_PenggunaanLahanKomersial_2);
var lyr_PenggunaanLahanKomersial_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenggunaanLahanKomersial_2, 
                style: style_PenggunaanLahanKomersial_2,
                popuplayertitle: 'Penggunaan Lahan Komersial',
                interactive: true,
                title: '<img src="styles/legend/PenggunaanLahanKomersial_2.png" /> Penggunaan Lahan Komersial'
            });
var format_PenggunaanLahanPerumahan_3 = new ol.format.GeoJSON();
var features_PenggunaanLahanPerumahan_3 = format_PenggunaanLahanPerumahan_3.readFeatures(json_PenggunaanLahanPerumahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahanPerumahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahanPerumahan_3.addFeatures(features_PenggunaanLahanPerumahan_3);
var lyr_PenggunaanLahanPerumahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenggunaanLahanPerumahan_3, 
                style: style_PenggunaanLahanPerumahan_3,
                popuplayertitle: 'Penggunaan Lahan Perumahan',
                interactive: true,
                title: '<img src="styles/legend/PenggunaanLahanPerumahan_3.png" /> Penggunaan Lahan Perumahan'
            });
var format_PenggunaanLahanPublik_4 = new ol.format.GeoJSON();
var features_PenggunaanLahanPublik_4 = format_PenggunaanLahanPublik_4.readFeatures(json_PenggunaanLahanPublik_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahanPublik_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahanPublik_4.addFeatures(features_PenggunaanLahanPublik_4);
var lyr_PenggunaanLahanPublik_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenggunaanLahanPublik_4, 
                style: style_PenggunaanLahanPublik_4,
                popuplayertitle: 'Penggunaan Lahan Publik',
                interactive: true,
                title: '<img src="styles/legend/PenggunaanLahanPublik_4.png" /> Penggunaan Lahan Publik'
            });
var format_ServiceAreaKomersil_5 = new ol.format.GeoJSON();
var features_ServiceAreaKomersil_5 = format_ServiceAreaKomersil_5.readFeatures(json_ServiceAreaKomersil_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaKomersil_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaKomersil_5.addFeatures(features_ServiceAreaKomersil_5);
var lyr_ServiceAreaKomersil_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceAreaKomersil_5, 
                style: style_ServiceAreaKomersil_5,
                popuplayertitle: 'Service Area Komersil',
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaKomersil_5.png" /> Service Area Komersil'
            });
var format_ServiceAreaPerumahan_6 = new ol.format.GeoJSON();
var features_ServiceAreaPerumahan_6 = format_ServiceAreaPerumahan_6.readFeatures(json_ServiceAreaPerumahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaPerumahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaPerumahan_6.addFeatures(features_ServiceAreaPerumahan_6);
var lyr_ServiceAreaPerumahan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceAreaPerumahan_6, 
                style: style_ServiceAreaPerumahan_6,
                popuplayertitle: 'Service Area Perumahan',
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaPerumahan_6.png" /> Service Area Perumahan'
            });
var format_Serviceareapublik_7 = new ol.format.GeoJSON();
var features_Serviceareapublik_7 = format_Serviceareapublik_7.readFeatures(json_Serviceareapublik_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Serviceareapublik_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Serviceareapublik_7.addFeatures(features_Serviceareapublik_7);
var lyr_Serviceareapublik_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Serviceareapublik_7, 
                style: style_Serviceareapublik_7,
                popuplayertitle: 'Service area publik',
                interactive: true,
                title: '<img src="styles/legend/Serviceareapublik_7.png" /> Service area publik'
            });
var format_JaringanJalan_8 = new ol.format.GeoJSON();
var features_JaringanJalan_8 = format_JaringanJalan_8.readFeatures(json_JaringanJalan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_8.addFeatures(features_JaringanJalan_8);
var lyr_JaringanJalan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_8, 
                style: style_JaringanJalan_8,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_8.png" /> Jaringan Jalan'
            });
var format_HalteBusKediri_9 = new ol.format.GeoJSON();
var features_HalteBusKediri_9 = format_HalteBusKediri_9.readFeatures(json_HalteBusKediri_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HalteBusKediri_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HalteBusKediri_9.addFeatures(features_HalteBusKediri_9);
var lyr_HalteBusKediri_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HalteBusKediri_9, 
                style: style_HalteBusKediri_9,
                popuplayertitle: 'Halte Bus Kediri',
                interactive: true,
                title: '<img src="styles/legend/HalteBusKediri_9.png" /> Halte Bus Kediri'
            });

lyr_ESRITopo_0.setVisible(true);lyr_BatasAdministrasi_1.setVisible(true);lyr_PenggunaanLahanKomersial_2.setVisible(true);lyr_PenggunaanLahanPerumahan_3.setVisible(true);lyr_PenggunaanLahanPublik_4.setVisible(true);lyr_ServiceAreaKomersil_5.setVisible(true);lyr_ServiceAreaPerumahan_6.setVisible(true);lyr_Serviceareapublik_7.setVisible(true);lyr_JaringanJalan_8.setVisible(true);lyr_HalteBusKediri_9.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_BatasAdministrasi_1,lyr_PenggunaanLahanKomersial_2,lyr_PenggunaanLahanPerumahan_3,lyr_PenggunaanLahanPublik_4,lyr_ServiceAreaKomersil_5,lyr_ServiceAreaPerumahan_6,lyr_Serviceareapublik_7,lyr_JaringanJalan_8,lyr_HalteBusKediri_9];
lyr_BatasAdministrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama Kelur': 'Nama Kelur', 'Nama Kecam': 'Nama Kecam', 'Nama Kab/K': 'Nama Kab/K', 'Nama Provi': 'Nama Provi', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas (M2)': 'Luas (M2)', 'Luas Kedir': 'Luas Kedir', });
lyr_PenggunaanLahanKomersial_2.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_PenggunaanLahanPerumahan_3.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_PenggunaanLahanPublik_4.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_ServiceAreaKomersil_5.set('fieldAliases', {'Zona': 'Zona', 'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan ': 'Jangkauan ', 'Luas (M2)': 'Luas (M2)', 'Luas Total': 'Luas Total', 'Persentase': 'Persentase', });
lyr_ServiceAreaPerumahan_6.set('fieldAliases', {'NAMZON': 'NAMZON', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan': 'Jangkauan', 'LuasM2': 'LuasM2', 'LuasAllM2': 'LuasAllM2', 'Persentase': 'Persentase', });
lyr_Serviceareapublik_7.set('fieldAliases', {'Zona': 'Zona', 'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan ': 'Jangkauan ', 'Luas (M2)': 'Luas (M2)', 'Luas Total': 'Luas Total', 'Persentase': 'Persentase', });
lyr_JaringanJalan_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Klasifikas': 'Klasifikas', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'Nama Jalan': 'Nama Jalan', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_HalteBusKediri_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'Jenis': 'Jenis', 'Foto': 'Foto', });
lyr_BatasAdministrasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama Kelur': 'TextEdit', 'Nama Kecam': 'TextEdit', 'Nama Kab/K': 'TextEdit', 'Nama Provi': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas (M2)': 'TextEdit', 'Luas Kedir': 'TextEdit', });
lyr_PenggunaanLahanKomersial_2.set('fieldImages', {'NAMZON': 'TextEdit', });
lyr_PenggunaanLahanPerumahan_3.set('fieldImages', {'NAMZON': 'TextEdit', });
lyr_PenggunaanLahanPublik_4.set('fieldImages', {'NAMZON': 'TextEdit', });
lyr_ServiceAreaKomersil_5.set('fieldImages', {'Zona': 'TextEdit', 'OBJECTID': 'TextEdit', 'Nama Halte': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Jangkauan ': 'TextEdit', 'Luas (M2)': 'TextEdit', 'Luas Total': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_ServiceAreaPerumahan_6.set('fieldImages', {'NAMZON': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Jangkauan': 'TextEdit', 'LuasM2': 'TextEdit', 'LuasAllM2': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_Serviceareapublik_7.set('fieldImages', {'Zona': 'TextEdit', 'OBJECTID': 'TextEdit', 'Nama Halte': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Jangkauan ': 'TextEdit', 'Luas (M2)': 'TextEdit', 'Luas Total': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_JaringanJalan_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Klasifikas': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'Nama Jalan': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_HalteBusKediri_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama Halte': 'TextEdit', 'Jenis': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_BatasAdministrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'Nama Kelur': 'no label', 'Nama Kecam': 'no label', 'Nama Kab/K': 'no label', 'Nama Provi': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luas (M2)': 'no label', 'Luas Kedir': 'no label', });
lyr_PenggunaanLahanKomersial_2.set('fieldLabels', {'NAMZON': 'no label', });
lyr_PenggunaanLahanPerumahan_3.set('fieldLabels', {'NAMZON': 'no label', });
lyr_PenggunaanLahanPublik_4.set('fieldLabels', {'NAMZON': 'no label', });
lyr_ServiceAreaKomersil_5.set('fieldLabels', {'Zona': 'no label', 'OBJECTID': 'no label', 'Nama Halte': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Jangkauan ': 'no label', 'Luas (M2)': 'no label', 'Luas Total': 'no label', 'Persentase': 'no label', });
lyr_ServiceAreaPerumahan_6.set('fieldLabels', {'NAMZON': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Jangkauan': 'no label', 'LuasM2': 'no label', 'LuasAllM2': 'no label', 'Persentase': 'no label', });
lyr_Serviceareapublik_7.set('fieldLabels', {'Zona': 'no label', 'OBJECTID': 'no label', 'Nama Halte': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Jangkauan ': 'no label', 'Luas (M2)': 'no label', 'Luas Total': 'no label', 'Persentase': 'no label', });
lyr_JaringanJalan_8.set('fieldLabels', {'OBJECTID': 'no label', 'Klasifikas': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'Nama Jalan': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_HalteBusKediri_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'Nama Halte': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Foto': 'no label', });
lyr_HalteBusKediri_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});