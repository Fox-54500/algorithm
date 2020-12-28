function getPeak(arr) {
  let pre = null
  let res = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const next = arr[i + 1];
    // 确认峰值
    if (pre !== null) {
      if (pre <= item && (item >= next || next === undefined)) {
        res.push(item)
      }
    } else {
      if (item >= next) {
        res.push(item)
      }
    }

    // 确认谷值
    if (pre !== null) {
      if (pre >= item && (item <= next || next === undefined)) {
        res.push(item)
      }
    } else {
      if (item <= next) {
        res.push(item)
      }
    }
    pre = item
  }
  return res
}
