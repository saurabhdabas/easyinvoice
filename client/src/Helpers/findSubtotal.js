const findSubtotal = (obj,key) => {
  let sum = 0;
  if(obj[key]){
    let data = Object.values(obj[key])
    for(let value in data ){
      sum += Number(data[value].total)
    }
  }
  return sum;
}
export default findSubtotal;
