const findTotal = (obj,key) => {
  return  obj[key].total = parseInt(obj[key].quantity) * parseInt(obj[key].unitprice);
}

export default findTotal
