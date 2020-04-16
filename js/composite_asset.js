// Hansen loss extent
var world_geom = ee.Geometry.MultiPolygon([[[[180.0, -50.0], [180.0, -60.0], [170.0, -60.0], [160.0, -60.0], [150.0, -60.0], [150.0, -50.0], [140.0, -50.0], [140.0, -40.0], [130.0, -40.0], [120.0, -40.0], [110.0, -40.0], [110.0, -30.0], [110.0, -20.0], [100.0, -20.0], [90.0, -20.0], [90.0, -10.0], [90.0, 0.0], [80.0, 0.0], [80.0, -10.0], [70.0, -10.0], [70.0, -20.0], [60.0, -20.0], [60.0, -30.0], [50.0, -30.0], [40.0, -30.0], [40.0, -40.0], [30.0, -40.0], [20.0, -40.0], [10.0, -40.0], [10.0, -30.0], [10.0, -20.0], [10.0, -10.0], [0.0, -10.0], [0.0, 0.0], [-10.0, 0.0], [-10.0, -10.0], [-20.0, -10.0], [-20.0, 0.0], [-20.0, 10.0], [-30.0, 10.0], [-30.0, 20.0], [-20.0, 20.0], [-20.0, 30.0], [-30.0, 30.0], [-40.0, 30.0], [-40.0, 40.0], [-30.0, 40.0], [-20.0, 40.0], [-10.0, 40.0], [-10.0, 50.0], [-20.0, 50.0], [-20.0, 60.0], [-30.0, 60.0], [-40.0, 60.0], [-40.0, 50.0], [-50.0, 50.0], [-50.0, 40.0], [-60.0, 40.0], [-60.0, 30.0], [-70.0, 30.0], [-70.0, 20.0], [-60.0, 20.0], [-50.0, 20.0], [-50.0, 10.0], [-40.0, 10.0], [-40.0, 0.0], [-30.0, 0.0], [-30.0, -10.0], [-30.0, -20.0], [-40.0, -20.0], [-40.0, -30.0], [-50.0, -30.0], [-50.0, -40.0], [-60.0, -40.0], [-60.0, -50.0], [-50.0, -50.0], [-40.0, -50.0], [-30.0, -50.0], [-20.0, -50.0], [-20.0, -60.0], [-30.0, -60.0], [-40.0, -60.0], [-50.0, -60.0], [-60.0, -60.0], [-70.0, -60.0], [-80.0, -60.0], [-80.0, -50.0], [-80.0, -40.0], [-90.0, -40.0], [-90.0, -30.0], [-90.0, -20.0], [-80.0, -20.0], [-80.0, -10.0], [-90.0, -10.0], [-100.0, -10.0], [-100.0, 0.0], [-100.0, 10.0], [-110.0, 10.0], [-120.0, 10.0], [-120.0, 20.0], [-120.0, 30.0], [-130.0, 30.0], [-130.0, 40.0], [-130.0, 50.0], [-140.0, 50.0], [-150.0, 50.0], [-160.0, 50.0], [-170.0, 50.0], [-180.0, 50.0], [-180.0, 60.0], [-180.0, 70.0], [-180.0, 80.0], [-170.0, 80.0], [-160.0, 80.0], [-150.0, 80.0], [-140.0, 80.0], [-130.0, 80.0], [-120.0, 80.0], [-110.0, 80.0], [-100.0, 80.0], [-90.0, 80.0], [-80.0, 80.0], [-70.0, 80.0], [-60.0, 80.0], [-50.0, 80.0], [-40.0, 80.0], [-30.0, 80.0], [-20.0, 80.0], [-10.0, 80.0], [0.0, 80.0], [0.0, 70.0], [10.0, 70.0], [10.0, 80.0], [20.0, 80.0], [30.0, 80.0], [40.0, 80.0], [50.0, 80.0], [60.0, 80.0], [70.0, 80.0], [80.0, 80.0], [90.0, 80.0], [100.0, 80.0], [110.0, 80.0], [120.0, 80.0], [130.0, 80.0], [140.0, 80.0], [150.0, 80.0], [160.0, 80.0], [170.0, 80.0], [180.0, 80.0], [180.0, 70.0], [180.0, 60.0], [180.0, 50.0], [170.0, 50.0], [160.0, 50.0], [160.0, 40.0], [150.0, 40.0], [150.0, 30.0], [160.0, 30.0], [160.0, 20.0], [170.0, 20.0], [180.0, 20.0], [180.0, 10.0], [180.0, 0.0], [180.0, -10.0], [180.0, -20.0], [180.0, -30.0], [180.0, -40.0], [180.0, -50.0]], [[150.0, -50.0], [160.0, -50.0], [160.0, -40.0], [150.0, -40.0], [150.0, -50.0]], [[160.0, -40.0], [170.0, -40.0], [170.0, -30.0], [160.0, -30.0], [160.0, -40.0]], [[70.0, -10.0], [70.0, 0.0], [70.0, 10.0], [70.0, 20.0], [60.0, 20.0], [60.0, 10.0], [60.0, 0.0], [60.0, -10.0], [70.0, -10.0]], [[160.0, 20.0], [150.0, 20.0], [150.0, 10.0], [160.0, 10.0], [160.0, 20.0]]], [[[0.0, -50.0], [10.0, -50.0], [10.0, -60.0], [0.0, -60.0], [0.0, -50.0]]], [[[80.0, -40.0], [80.0, -50.0], [80.0, -60.0], [70.0, -60.0], [60.0, -60.0], [60.0, -50.0], [50.0, -50.0], [50.0, -40.0], [60.0, -40.0], [70.0, -40.0], [70.0, -30.0], [80.0, -30.0], [80.0, -40.0]]], [[[-10.0, -40.0], [0.0, -40.0], [0.0, -50.0], [-10.0, -50.0], [-20.0, -50.0], [-20.0, -40.0], [-20.0, -30.0], [-10.0, -30.0], [-10.0, -40.0]]], [[[-110.0, -20.0], [-100.0, -20.0], [-100.0, -30.0], [-110.0, -30.0], [-110.0, -20.0]]], [[[-30.0, -20.0], [-20.0, -20.0], [-20.0, -30.0], [-30.0, -30.0], [-30.0, -20.0]]], [[[-10.0, -10.0], [0.0, -10.0], [0.0, -20.0], [-10.0, -20.0], [-10.0, -10.0]]], [[[-170.0, -40.0], [-170.0, -50.0], [-180.0, -50.0], [-180.0, -40.0], [-180.0, -30.0], [-180.0, -20.0], [-180.0, -10.0], [-180.0, 0.0], [-180.0, 10.0], [-170.0, 10.0], [-170.0, 20.0], [-180.0, 20.0], [-180.0, 30.0], [-170.0, 30.0], [-160.0, 30.0], [-150.0, 30.0], [-150.0, 20.0], [-150.0, 10.0], [-150.0, 0.0], [-140.0, 0.0], [-130.0, 0.0], [-130.0, -10.0], [-130.0, -20.0], [-120.0, -20.0], [-120.0, -30.0], [-130.0, -30.0], [-140.0, -30.0], [-150.0, -30.0], [-160.0, -30.0], [-160.0, -20.0], [-170.0, -20.0], [-170.0, -30.0], [-170.0, -40.0]]]],null,false);

//
// LOSS
//
var h19=ee.ImageCollection('users/potapovpeter/GFW2019').mosaic();


//
// TCD and GAIN (from old asset)
//
var h14=ee.Image('UMD/hansen/global_forest_change_2015')
var hgain=ee.Image('HANSEN/gfw2015_loss_tree_gain_threshold').select(['gain'])

//
// SETUP
//
var CRS="EPSG:4326"
var SCALE=27.829872698318393
var COMPOSITE_IMG_NAME='HansenComposite_19'


var tc=h14.select(['treecover2000'])
var ly=h19.select(['b1']).rename(['lossyear'])


//
// Thresholding
//
var tree=function(thresh){
  return tc.updateMask(tc.gte(thresh)).rename(['tree_'+thresh])
}
var loss=function(thresh){
  return ly.updateMask(tc.gte(thresh)).rename(['loss_'+thresh])
}
var thresholds=[10,15,20,25,30,50,75]
var threshold_images=[]
for (var i=0; i<thresholds.length; i++) {
  threshold_images.push(tree(thresholds[i]))
  threshold_images.push(loss(thresholds[i]))
}
var threshold_image=ee.Image(threshold_images)
// print(threshold_image)


//
// FINAL IMAGE
//
var hansen_composite=threshold_image.addBands([hgain])
Map.addLayer(hansen_composite,null,'HansenComposite')
print(hansen_composite)


//
// Exporter
//
var ppolicy={
  'tree_10':'mean',
  'loss_10':'mode',
  'tree_15':'mean',
  'loss_15':'mode',
  'tree_20':'mean',
  'loss_20':'mode',
  'tree_25':'mean',
  'loss_25':'mode',
  'tree_30':'mean',
  'loss_30':'mode',
  'tree_50':'mean',
  'loss_50':'mode',
  'tree_75':'mean',
  'loss_75':'mode',
  'gain':'mean'
}

var export_asset=function(img,name){
  Export.image.toAsset({
    'image':img,
    'description':name,
    'assetId':'projects/wri-datalab/'+name,
    'scale':SCALE,
    'crs':CRS,
    'region':world_geom.bounds(),
    'pyramidingPolicy':ppolicy,
    'maxPixels':1000000000000
  })
}

export_asset(hansen_composite,COMPOSITE_IMG_NAME)

