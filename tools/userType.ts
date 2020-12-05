const userType = (document:string) => {
  if (document.length === 11) return "individual"
  else if (document.length === 14) return "business";
}

export default userType
