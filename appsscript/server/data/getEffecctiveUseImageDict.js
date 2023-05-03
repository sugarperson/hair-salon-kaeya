const IMAGE_ID_OF_EXPLOSION1 = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_EXPLOSION1;
const IMAGE_ID_OF_EXPLOSION2 = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_EXPLOSION2;

const EffectiveUseImageIdDict = {
  explosion1: IMAGE_ID_OF_EXPLOSION1,
  explosion2: IMAGE_ID_OF_EXPLOSION2,
}

function getEffectiveUseImageDict(){
  const imageBinDict = {};
  Object.entries(EffectiveUseImageIdDict).map(([key, id]) => {
    let bin = getImage(id);
    imageBinDict[key] = bin;
  })
  return imageBinDict;
}