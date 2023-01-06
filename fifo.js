// Khởi tạo mảng cache và kích thước cache
let cache = [];
let cacheSize = 3;

// Hàm thêm trang mới vào cache
function addPage(page) {
  // Nếu cache đầy, loại bỏ trang cũ nhất
  if (cache.length >= cacheSize) {
    cache.shift();
  }
  // Thêm trang mới vào cuối cache
  cache.push(page);
}

// Thử thêm một số trang vào cache
addPage(1);
addPage(2);
addPage(3);
console.log(cache); // [1, 2, 3]

// Thêm một trang mới, trang cũ nhất (trang 1) sẽ bị loại bỏ
addPage(4);
console.log(cache); // [2, 3, 4]

// Thêm một trang mới, trang cũ nhất (trang 2) sẽ bị loại bỏ
addPage(5);
console.log(cache); // [3, 4, 5]
