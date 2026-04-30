const products = [
  {
    id: 1,
    name: "Thẻ nhớ 32GB Class 10",
    price: 80000,
    oldPrice: 120000,
    category: "sd",
    badge: "GIẢM SỐC",
    img: "https://via.placeholder.com/200",
    spec: {
      dungLuong: "32GB",
      tocDo: "80MB/s",
      loai: "Micro SD",
      baoHanh: "12 tháng"
    }
  },
  {
    id: 2,
    name: "Thẻ nhớ 64GB tốc độ cao",
    price: 120000,
    oldPrice: 180000,
    category: "sd",
    badge: "BEST SELL",
    img: "https://via.placeholder.com/200",
    spec: {
      dungLuong: "64GB",
      tocDo: "100MB/s",
      loai: "Micro SD",
      baoHanh: "12 tháng"
    }
  },
  {
    id: 3,
    name: "Thẻ nhớ 128GB Ultra",
    price: 190000,
    oldPrice: 280000,
    category: "sd",
    badge: "HOT",
    img: "https://via.placeholder.com/200",
    spec: {
      dungLuong: "128GB",
      tocDo: "120MB/s",
      loai: "Micro SD",
      baoHanh: "24 tháng"
    }
  },
  {
    id: 4,
    name: "Camera A22",
    price: 450000,
    oldPrice: 550000,
    category: "cam-in",
    badge: "HOT",
    img: "https://via.placeholder.com/200",
    spec: {
      dungLuong: "Full HD",
      tocDo: "AI Detect",
      loai: "Wifi Camera",
      baoHanh: "24 tháng"
    }
  },
  {
    id: 5,
    name: "Combo 2 Camera + 128GB",
    price: 1290000,
    oldPrice: 1690000,
    category: "combo",
    badge: "CỰC SỐC",
    img: "https://via.placeholder.com/200",
    spec: {
      dungLuong: "2 Camera + 128GB",
      tocDo: "Full Kit",
      loai: "Combo",
      baoHanh: "24 tháng"
    }
  }
];

// ===== RENDER =====
function render(list = products) {
  const box = document.getElementById("products");
  if (!box) return;

  box.innerHTML = "";

  list.forEach(p => {
    box.innerHTML += `
      <div class="item">
        <div class="badge">${p.badge}</div>

        <img src="${p.img}">

        <h4>${p.name}</h4>

        <div class="price-box">
          <span class="price">${p.price.toLocaleString()}đ</span>
          <span class="old-price">${p.oldPrice.toLocaleString()}đ</span>
        </div>

        <button class="spec-btn" onclick="toggleSpec(${p.id})">
          ⚙️ Xem thông số
        </button>

        <div class="spec-box" id="spec-${p.id}" style="display:none;">
          📦 Dung lượng: ${p.spec.dungLuong}<br>
          ⚡ Tốc độ: ${p.spec.tocDo}<br>
          💾 Loại: ${p.spec.loai}<br>
          🛡 Bảo hành: ${p.spec.baoHanh}
        </div>
      </div>
    `;
  });
}

// ===== TOGGLE SPEC =====
function toggleSpec(id) {
  const el = document.getElementById("spec-" + id);
  if (!el) return;
  el.style.display = el.style.display === "block" ? "none" : "block";
}

// ===== SEARCH =====
const search = document.getElementById("search");
if (search) {
  search.addEventListener("input", e => {
    const key = e.target.value.toLowerCase();
    render(products.filter(p => p.name.toLowerCase().includes(key)));
  });
}

// ===== MENU =====
function toggleMenu() {
  document.getElementById("sidebar")?.classList.toggle("active");
  document.getElementById("overlay")?.classList.toggle("active");
}

// ===== INIT =====
render();