// Khởi tạo mảng bộ đệm và mảng tham chiếu
let cache = [];
let reference = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5];
let cacheSize = 3;

// thêm một trang mới vào bộ đệm
function addPage(page) {
  // Nếu trang đã có trong bộ đệm, không làm gì cả
  if (cache.includes(page)) {
    return;
  }
  // Nếu bộ đệm đầy đủ, thì xóa trang không được sử dụng(trong tương lai)
  if (cache.length >= cacheSize) {
    let opt = -1;
    let optIndex = -1;
    for (let i = 0; i < cache.length; i++) {
      let nextUse = reference.indexOf(cache[i], reference.indexOf(page) + 1);
      if (nextUse === -1 || nextUse > opt) {
        opt = nextUse;
        optIndex = i;
      }
    }
    cache.splice(optIndex, 1);
  }
  // Thêm trang mới vào cuối bộ đệm
  cache.push(page);
}

// Thử thêm chuỗi tham chiếu vào bộ đệm
for (let i = 0; i < reference.length; i++) {
  addPage(reference[i]);
  console.log(cache);
}
