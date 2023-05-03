const IMAGE_ID_OF_CONCEPT = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_CONCEPT;
const IMAGE_ID_OF_ANTIQUE_PAPER = PropertiesService.getScriptProperties().getProperties().IMAGE_ID_OF_ANTIQUE_PAPER;

const MultipleUseImageIdDict = {
  concept: IMAGE_ID_OF_CONCEPT,
  antique_paper: IMAGE_ID_OF_ANTIQUE_PAPER,
}

function getMultipleUseImageDict(){
  const imageBinDict = {};
  Object.entries(MultipleUseImageIdDict).map(([key, id]) => {
    let bin = getImage(id);
    imageBinDict[key] = bin;
  })
  return imageBinDict;
}