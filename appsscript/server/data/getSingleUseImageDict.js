const IMAGE_ID_OF_MAIN_VISUAL = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_MAIN_VISUAL;
const IMAGE_ID_OF_STAFF_KAEYA = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_STAFF_KAEYA;
const IMAGE_ID_OF_STAFF_YAOYAO = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_STAFF_YAOYAO;
const IMAGE_ID_OF_STAFF_HUTAO = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_STAFF_HUTAO;
const IMAGE_ID_OF_STAFF_XINGQIU = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_STAFF_XINGQIU;
const IMAGE_ID_OF_STAFF_BENNETT = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_STAFF_BENNETT;
const IMAGE_ID_OF_ACCESS_MAP = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_ACCESS_MAP;
const IMAGE_ID_OF_ACCESS_APPEARANCE = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_ACCESS_APPEARANCE;

const SingleUseImageIdDict = {
  main_visual: IMAGE_ID_OF_MAIN_VISUAL,
  staff_kaeya: IMAGE_ID_OF_STAFF_KAEYA,
  staff_yao_yao: IMAGE_ID_OF_STAFF_YAOYAO,
  staff_hu_tao: IMAGE_ID_OF_STAFF_HUTAO,
  staff_xing_qiu: IMAGE_ID_OF_STAFF_XINGQIU,
  staff_bennett: IMAGE_ID_OF_STAFF_BENNETT,
  access_map: IMAGE_ID_OF_ACCESS_MAP,
  access_appearance: IMAGE_ID_OF_ACCESS_APPEARANCE,
}

function getSingleUseImageDict(){
  const imageBinDict = {};
  Object.entries(SingleUseImageIdDict).map(([key, id]) => {
    let bin = getImage(id);
    imageBinDict[key] = bin;
  })
  return imageBinDict;
}