/** @format */

// khởi tạo mảng và object và kích thước tối đa
let cache = [];
let used = {};
let cacheSize = 3;

// Hàm thêm trang mới vào cache
function addPage(page) {
  // Nếu trang đã có trong bộ đệm, hãy xóa nó và cập nhật đối tượng đã sử dụng
  if (cache.includes(page)) {
    cache = cache.filter((p) => p !== page);
  }
  // Nếu bộ đệm đầy, thì xóa trang ít được sử dụng gần đây nhất
  if (cache.length >= cacheSize) {
    let lru = Infinity;
    let lruIndex = -1;
    for (let i = 0; i < cache.length; i++) {
      if (used[cache[i]] < lru) {
        lru = used[cache[i]];
        lruIndex = i;
      }
    }
    cache.splice(lruIndex, 1);
  }
  // Thêm trang mới vào cuối bộ đệm và cập nhật đối tượng đã sử dụng
  cache.push(page);
  used[page] = Date.now();
}

//Thử thêm một số trang vào bộ đệm
addPage(1);
addPage(2);
addPage(3);
console.log(cache); // [1, 2, 3]

// Sử dụng lại trang 2, nó sẽ được đẩy đến cuối bộ đệm
addPage(2);
console.log(cache); // [1, 3, 2]
