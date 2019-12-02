const countOnly = (arr, persons) => {

  const nameCount = arr.reduce((total, name) => {
    if(!total[name] && persons[name]) total[name] = 0;
    if(persons[name]) total[name] ++;
    return total;
  }, {});

  return nameCount;
}

module.exports = countOnly;