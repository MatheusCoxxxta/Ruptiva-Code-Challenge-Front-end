const formatDocument = (documentNoFormated:string) => {
  let docFormated = documentNoFormated
    .replace(/\./g, "")
    .replace(/\-/g, "")
    .replace(/\//g, "");

  return docFormated;
};


export {formatDocument}
