/* ===================================================================
   COMERCIAL FERRETERO EL GOCHO - ¡Sí hay!
   Core Application Logic
   =================================================================== */

const WHATSAPP_PHONE = "584123714136";
const DEFAULT_RATE = 52.50; // Bs. por 1 USD (configurable)

// Initial Hardware Store Catalog
const INITIAL_PRODUCTS = [
  {
    id: 1,
    sku: "FER-001",
    name: "Taladro Percutor 1/2\" 650W DeWalt",
    category: "electricas",
    categoryName: "Herramientas Eléctricas",
    priceUSD: 68.00,
    stock: 8,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    description: "Potente motor de 650W, velocidad variable reversible, mandril de 1/2 pulgada. Ideal para concreto, acero y madera con máxima durabilidad."
  },
  {
    id: 2,
    sku: "FER-002",
    name: "Esmeril Angular 4 1/2\" 850W Bosch",
    category: "electricas",
    categoryName: "Herramientas Eléctricas",
    priceUSD: 56.00,
    stock: 6,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80",
    description: "Diseño ergonómico y compacto, alta protección contra sobrecargas, botón de bloqueo para cambio rápido de disco. Calidad profesional."
  },
  {
    id: 3,
    sku: "FER-003",
    name: "Martillo de Uña 16 oz Truper Pro",
    category: "manuales",
    categoryName: "Herramientas Manuales",
    priceUSD: 8.50,
    stock: 25,
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    description: "Cabeza forjada en acero al carbono con mango de fibra de vidrio anti-vibración y empuñadura ergonómica antideslizante."
  },
  {
    id: 4,
    sku: "FER-004",
    name: "Juego de Llaves Combinadas 8-19mm (10 Pzs)",
    category: "manuales",
    categoryName: "Herramientas Manuales",
    priceUSD: 18.50,
    stock: 12,
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80",
    description: "Acero cromo vanadio pulido espejo. Incluye estuche organizador enrollable de alta resistencia. Medidas exactas métricas."
  },
  {
    id: 5,
    sku: "FER-005",
    name: "Alicate de Presión Curvo 10\" Irwin",
    category: "manuales",
    categoryName: "Herramientas Manuales",
    priceUSD: 13.00,
    stock: 14,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80",
    description: "Mordaza curva con corta-alambres integrado. Tornillo de ajuste micrométrico y gatillo de liberación rápida con una sola mano."
  },
  {
    id: 6,
    sku: "FER-006",
    name: "Cinta Métrica Global Plus 8m / 26ft Stanley",
    category: "manuales",
    categoryName: "Herramientas Manuales",
    priceUSD: 7.00,
    stock: 35,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    description: "Cinta ancha recubierta con polímero anti-desgaste, caja de ABS de alto impacto con revestimiento de goma para agarre firme."
  },
  {
    id: 7,
    sku: "FER-007",
    name: "Tubo PVC Aguas Blancas 1/2\" x 6m Pavco",
    category: "plomeria",
    categoryName: "Plomería",
    priceUSD: 4.20,
    stock: 45,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    description: "Tubería de alta presión para agua potable residencial y comercial. Resistencia garantizada a la corrosión y golpes de ariete."
  },
  {
    id: 8,
    sku: "FER-008",
    name: "Llave de Paso Esfera Bronce 1/2\" Pesada",
    category: "plomeria",
    categoryName: "Plomería",
    priceUSD: 5.80,
    stock: 22,
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80",
    description: "Cuerpo robusto de latón/bronce macizo, maneta de acero recubierta de goma para fácil accionamiento 1/4 de vuelta sin fugas."
  },
  {
    id: 9,
    sku: "FER-009",
    name: "Cinta Teflón Industrial 3/4\" x 10m",
    category: "plomeria",
    categoryName: "Plomería",
    priceUSD: 1.00,
    stock: 120,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
    description: "Densidad industrial para sellado hermético inmediato de roscas plásticas y metálicas de agua, gas y aire comprimido."
  },
  {
    id: 10,
    sku: "FER-010",
    name: "Rollo Cable THW #12 AWG Cobre 100m",
    category: "electricidad",
    categoryName: "Electricidad",
    priceUSD: 49.00,
    stock: 8,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    description: "100% cobre certificado para instalaciones eléctricas residenciales y comerciales. Aislamiento antiflama 600V resistente a humedad."
  },
  {
    id: 11,
    sku: "FER-011",
    name: "Bombillo LED 12W Luz Blanca E27 (Pack x 4)",
    category: "electricidad",
    categoryName: "Electricidad",
    priceUSD: 5.50,
    stock: 60,
    image: "https://images.unsplash.com/photo-1550524514-9b57b98a0cba?auto=format&fit=crop&w=600&q=80",
    description: "Ahorro de hasta 85% de energía, luz blanca brillante 6500K, vida útil de 25.000 horas. Rosca estándar E27 compatible con cualquier portalámparas."
  },
  {
    id: 12,
    sku: "FER-012",
    name: "Breaker Enchufable 1 Polo 20A Westinghouse",
    category: "electricidad",
    categoryName: "Electricidad",
    priceUSD: 6.50,
    stock: 28,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    description: "Interruptor termomagnético enchufable para tablero residencial, protección confiable contra sobrecargas y cortocircuitos."
  },
  {
    id: 13,
    sku: "FER-013",
    name: "Pintura Caucho Mate Blanco Montana (Galón)",
    category: "pinturas",
    categoryName: "Pinturas",
    priceUSD: 19.50,
    stock: 16,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    description: "Excelente poder cubriente, lavable y bajo olor. Rendimiento óptimo para paredes interiores y exteriores protegidas."
  },
  {
    id: 14,
    sku: "FER-014",
    name: "Brocha Monalisa Cerda Natural 3\"",
    category: "pinturas",
    categoryName: "Pinturas",
    priceUSD: 2.30,
    stock: 50,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    description: "Cerdas naturales de primera calidad para acabados lisos y parejos con pinturas de aceite, esmaltes y caucho."
  },
  {
    id: 15,
    sku: "FER-015",
    name: "Pega Tanque Epóxica Original (Soldadura Fría)",
    category: "fijaciones",
    categoryName: "Tornillería & Fijaciones",
    priceUSD: 3.50,
    stock: 80,
    image: "https://images.unsplash.com/photo-1618090584176-7132b9911657?auto=format&fit=crop&w=600&q=80",
    description: "La legendaria soldadura al frío para reparar fugas en tanques plásticos, metales, tuberías, radiadores y cerámica. Curado extra fuerte."
  },
  {
    id: 16,
    sku: "FER-016",
    name: "Candado de Hierro Macizo CISA 50mm",
    category: "fijaciones",
    categoryName: "Tornillería & Fijaciones",
    priceUSD: 14.50,
    stock: 15,
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80",
    description: "Cuerpo de hierro fundido con arco de acero cementado anti-cizalla y doble traba. Incluye 3 llaves originales de seguridad."
  },
  {
    id: 17,
    sku: "FER-017",
    name: "Disco de Corte Fino 4 1/2\" Pferd (Metal/Inox)",
    category: "construccion",
    categoryName: "Construcción",
    priceUSD: 1.20,
    stock: 95,
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    description: "Grosor ultrafino 1.0mm para cortes limpios, rápidos y sin rebaba en perfiles metálicos, tubos y láminas de acero inoxidable."
  },
  {
    id: 18,
    sku: "FER-018",
    name: "Guantes de Carnaza Reforzada para Trabajo Pesado",
    category: "construccion",
    categoryName: "Construcción",
    priceUSD: 3.80,
    stock: 35,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80",
    description: "Cuero de carnaza gruesa con costuras en hilo de alta resistencia y palma reforzada. Máxima protección contra chispas y abrasiones."
  }
];

// App State
const state = {
  products: [],
  cart: {}, // productId -> { product, quantity }
  currentCurrency: "USD", // "USD" or "VES"
  exchangeRate: DEFAULT_RATE,
  activeCategory: "all",
  searchQuery: "",
  sortBy: "default"
};

// Initialize App
function initApp() {
  loadStoredData();
  renderProducts();
  updateCurrencyDisplay();
  updateCartBadge();
  setupEventListeners();
}

// Load data from LocalStorage
function loadStoredData() {
  const savedRate = localStorage.getItem("ferre_gocho_rate");
  if (savedRate && !isNaN(parseFloat(savedRate))) {
    state.exchangeRate = parseFloat(savedRate);
  }

  const savedCurrency = localStorage.getItem("ferre_gocho_currency");
  if (savedCurrency === "USD" || savedCurrency === "VES") {
    state.currentCurrency = savedCurrency;
  }

  const savedProducts = localStorage.getItem("ferre_gocho_products");
  if (savedProducts) {
    try {
      state.products = JSON.parse(savedProducts);
    } catch(e) {
      state.products = [...INITIAL_PRODUCTS];
    }
  } else {
    state.products = [...INITIAL_PRODUCTS];
  }

  const savedCart = localStorage.getItem("ferre_gocho_cart");
  if (savedCart) {
    try {
      state.cart = JSON.parse(savedCart);
    } catch(e) {
      state.cart = {};
    }
  }
}

// Save Cart
function saveCart() {
  localStorage.setItem("ferre_gocho_cart", JSON.stringify(state.cart));
  updateCartBadge();
  renderCartDrawer();
}

// Save Rate
function saveRate(newRate) {
  state.exchangeRate = newRate;
  localStorage.setItem("ferre_gocho_rate", newRate.toString());
  updateCurrencyDisplay();
  renderProducts();
  renderCartDrawer();
  showToast(`Tasa de cambio actualizada: 1$ = ${formatNumber(newRate)} Bs.`, "success");
}

// Format Numbers
function formatNumber(num) {
  return Number(num).toLocaleString("es-VE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// Format Price based on current currency
function formatCurrency(amountUSD, forceCurrency = null) {
  const cur = forceCurrency || state.currentCurrency;
  if (cur === "VES") {
    const vesAmount = amountUSD * state.exchangeRate;
    return `Bs. ${formatNumber(vesAmount)}`;
  } else {
    return `$${formatNumber(amountUSD)}`;
  }
}

// Get the alternative currency display (e.g., if USD, show Bs. equivalent)
function getSecondaryPriceDisplay(amountUSD) {
  if (state.currentCurrency === "USD") {
    const ves = amountUSD * state.exchangeRate;
    return `≈ Bs. ${formatNumber(ves)}`;
  } else {
    return `≈ $${formatNumber(amountUSD)}`;
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Category filter chips
  const catChips = document.querySelectorAll(".cat-chip");
  catChips.forEach(chip => {
    chip.addEventListener("click", () => {
      catChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeCategory = chip.dataset.category;
      renderProducts();
    });
  });

  // Currency Switcher buttons
  const btnUSD = document.getElementById("btn-currency-usd");
  const btnVES = document.getElementById("btn-currency-ves");
  if (btnUSD && btnVES) {
    btnUSD.addEventListener("click", () => switchCurrency("USD"));
    btnVES.addEventListener("click", () => switchCurrency("VES"));
  }

  // Sort selector
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Cart Drawer open/close
  const cartBtn = document.getElementById("cart-toggle-btn");
  const floatCartBtn = document.getElementById("float-cart-btn");
  const closeCartBtn = document.getElementById("cart-drawer-close");
  const cartOverlay = document.getElementById("cart-drawer-overlay");

  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (floatCartBtn) floatCartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  // Rate edit modal
  const rateTag = document.getElementById("rate-tag-button");
  if (rateTag) {
    rateTag.addEventListener("click", openRateModal);
  }

  const rateModalClose = document.getElementById("rate-modal-close");
  const rateModalOverlay = document.getElementById("rate-modal-overlay");
  const rateModalCancel = document.getElementById("rate-modal-cancel");
  const rateForm = document.getElementById("rate-form");

  if (rateModalClose) rateModalClose.addEventListener("click", closeRateModal);
  if (rateModalOverlay) rateModalOverlay.addEventListener("click", (e) => {
    if (e.target === rateModalOverlay) closeRateModal();
  });
  if (rateModalCancel) rateModalCancel.addEventListener("click", closeRateModal);

  if (rateForm) {
    rateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("modal-rate-input");
      const val = parseFloat(input.value);
      if (val && val > 0) {
        saveRate(val);
        closeRateModal();
      } else {
        showToast("Por favor ingresa una tasa válida mayor a 0", "error");
      }
    });
  }

  // Checkout Delivery Method change (show/hide address field)
  const deliverySelect = document.getElementById("order-delivery");
  const addressGroup = document.getElementById("address-form-group");
  if (deliverySelect && addressGroup) {
    deliverySelect.addEventListener("change", () => {
      if (deliverySelect.value === "delivery") {
        addressGroup.style.display = "block";
      } else {
        addressGroup.style.display = "none";
      }
    });
  }

  // WhatsApp Checkout Form
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleWhatsAppCheckout);
  }
}

// Switch Currency
function switchCurrency(currency) {
  state.currentCurrency = currency;
  localStorage.setItem("ferre_gocho_currency", currency);
  updateCurrencyDisplay();
  renderProducts();
  renderCartDrawer();
}

function updateCurrencyDisplay() {
  const btnUSD = document.getElementById("btn-currency-usd");
  const btnVES = document.getElementById("btn-currency-ves");
  if (btnUSD && btnVES) {
    if (state.currentCurrency === "USD") {
      btnUSD.classList.add("active");
      btnVES.classList.remove("active");
    } else {
      btnVES.classList.add("active");
      btnUSD.classList.remove("active");
    }
  }

  // Top rate banner text
  const rateEl = document.getElementById("banner-rate-value");
  if (rateEl) {
    rateEl.textContent = `1$ = ${formatNumber(state.exchangeRate)} Bs.`;
  }
}

// Filter and Sort Products
function getFilteredProducts() {
  let list = [...state.products];

  // Category filter
  if (state.activeCategory !== "all") {
    list = list.filter(p => p.category === state.activeCategory);
  }

  // Search filter
  if (state.searchQuery) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.sku.toLowerCase().includes(state.searchQuery) ||
      p.categoryName.toLowerCase().includes(state.searchQuery) ||
      p.description.toLowerCase().includes(state.searchQuery)
    );
  }

  // Sort
  if (state.sortBy === "price-low") {
    list.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (state.sortBy === "price-high") {
    list.sort((a, b) => b.priceUSD - a.priceUSD);
  } else if (state.sortBy === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sortBy === "stock-high") {
    list.sort((a, b) => b.stock - a.stock);
  }

  return list;
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById("products-grid");
  const counter = document.getElementById("catalog-counter-text");
  if (!grid) return;

  const filtered = getFilteredProducts();

  if (counter) {
    counter.textContent = `Mostrando ${filtered.length} de ${state.products.length} productos`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3>No se encontraron productos</h3>
        <p>No encontramos ningún artículo que coincida con "${state.searchQuery || state.activeCategory}". Intenta con otro término o categoría.</p>
        <button class="cat-chip active" onclick="resetFilters()">Ver todo el catálogo</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    // Determine remaining available stock (taking into account items already in cart)
    const inCartQty = state.cart[product.id] ? state.cart[product.id].quantity : 0;
    const remainingStock = Math.max(0, product.stock - inCartQty);

    let stockBadgeClass = "stock-in";
    let stockBadgeText = `Stock: ${product.stock} disp.`;

    if (product.stock === 0) {
      stockBadgeClass = "stock-out";
      stockBadgeText = "Agotado";
    } else if (product.stock <= 5) {
      stockBadgeClass = "stock-low";
      stockBadgeText = `¡Últimas ${product.stock} unid!`;
    }

    const isAvailable = remainingStock > 0 && product.stock > 0;

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="card-img-wrap" onclick="viewProductModal(${product.id})">
          <img 
            class="card-img" 
            src="${product.image}" 
            alt="${escapeHtml(product.name)}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=600&q=80';"
          />
          <span class="stock-pill ${stockBadgeClass}">
            <span class="stock-indicator-dot"></span>
            ${stockBadgeText}
          </span>
          <span class="category-tag">${escapeHtml(product.categoryName)}</span>
        </div>

        <div class="card-body">
          <div class="product-sku">${escapeHtml(product.sku)}</div>
          <h3 class="product-title" onclick="viewProductModal(${product.id})">${escapeHtml(product.name)}</h3>
          <p class="product-desc">${escapeHtml(product.description)}</p>

          <div class="card-price-box">
            <div class="main-price">${formatCurrency(product.priceUSD)}</div>
            <div class="converted-price">${getSecondaryPriceDisplay(product.priceUSD)}</div>
          </div>

          <div class="card-action-row">
            <div class="qty-control">
              <button 
                class="qty-btn" 
                type="button" 
                onclick="decrementCardQty(${product.id})"
                aria-label="Disminuir"
              >-</button>
              <input 
                id="qty-input-${product.id}" 
                class="qty-input" 
                type="number" 
                value="1" 
                min="1" 
                max="${product.stock}" 
                readonly
              />
              <button 
                class="qty-btn" 
                type="button" 
                onclick="incrementCardQty(${product.id}, ${product.stock})"
                aria-label="Aumentar"
              >+</button>
            </div>

            <button 
              class="add-to-cart-btn" 
              type="button"
              ${!isAvailable ? 'disabled' : ''}
              onclick="addToCartFromCard(${product.id})"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              ${isAvailable ? 'Añadir' : 'Sin Stock'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Reset filters
function resetFilters() {
  state.searchQuery = "";
  state.activeCategory = "all";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  const catChips = document.querySelectorAll(".cat-chip");
  catChips.forEach(chip => {
    chip.classList.toggle("active", chip.dataset.category === "all");
  });
  renderProducts();
}

// Card Quantity stepper handlers
function decrementCardQty(productId) {
  const input = document.getElementById(`qty-input-${productId}`);
  if (!input) return;
  let val = parseInt(input.value) || 1;
  if (val > 1) {
    input.value = val - 1;
  }
}

function incrementCardQty(productId, maxStock) {
  const input = document.getElementById(`qty-input-${productId}`);
  if (!input) return;
  let val = parseInt(input.value) || 1;
  const inCart = state.cart[productId] ? state.cart[productId].quantity : 0;
  const availableLeft = maxStock - inCart;

  if (val < availableLeft) {
    input.value = val + 1;
  } else {
    showToast(`Stock máximo alcanzado para este producto (${maxStock} en total)`, "warning");
  }
}

// Add to Cart
function addToCartFromCard(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const input = document.getElementById(`qty-input-${productId}`);
  const qtyToAdd = input ? parseInt(input.value) || 1 : 1;

  const currentCartQty = state.cart[productId] ? state.cart[productId].quantity : 0;
  const totalWanted = currentCartQty + qtyToAdd;

  if (totalWanted > product.stock) {
    const canAdd = Math.max(0, product.stock - currentCartQty);
    if (canAdd <= 0) {
      showToast(`¡Ya tienes en la cesta todo el stock disponible (${product.stock} unidades)!`, "warning");
    } else {
      showToast(`Solo puedes agregar ${canAdd} unidades más de este producto.`, "warning");
    }
    return;
  }

  // Add / Update
  state.cart[productId] = {
    product: product,
    quantity: totalWanted
  };

  saveCart();
  showToast(`¡Añadido "${product.name}" a la cesta!`, "success");

  // Reset input back to 1
  if (input) input.value = 1;

  // Refresh products to update visual stocks if needed
  renderProducts();
}

// Update Cart Badge Count
function updateCartBadge() {
  let totalItems = 0;
  for (const id in state.cart) {
    totalItems += state.cart[id].quantity;
  }

  const badgeNav = document.getElementById("nav-cart-count");
  const badgeFloat = document.getElementById("float-cart-count");

  if (badgeNav) badgeNav.textContent = totalItems;
  if (badgeFloat) badgeFloat.textContent = totalItems;
}

// Open / Close Cart Drawer
function openCart() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  renderCartDrawer();
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }
}

function closeCart() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Render Cart Drawer
function renderCartDrawer() {
  const listEl = document.getElementById("cart-items-list");
  const footerEl = document.getElementById("cart-drawer-footer");
  if (!listEl || !footerEl) return;

  const cartEntries = Object.values(state.cart);

  if (cartEntries.length === 0) {
    listEl.innerHTML = `
      <div class="cart-empty-view">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h4>Tu cesta está vacía</h4>
        <p>Selecciona los productos y herramientas que necesitas de nuestro catálogo ferretero.</p>
        <button class="add-to-cart-btn" style="max-width: 200px;" onclick="closeCart()">Explorar Catálogo</button>
      </div>
    `;
    footerEl.style.display = "none";
    return;
  }

  footerEl.style.display = "block";

  let subtotalUSD = 0;

  listEl.innerHTML = cartEntries.map(({ product, quantity }) => {
    const itemTotalUSD = product.priceUSD * quantity;
    subtotalUSD += itemTotalUSD;

    return `
      <div class="cart-item">
        <img 
          class="cart-item-img" 
          src="${product.image}" 
          alt="${escapeHtml(product.name)}"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=600&q=80';"
        />
        <div class="cart-item-info">
          <div class="cart-item-title" title="${escapeHtml(product.name)}">${escapeHtml(product.name)}</div>
          <div class="cart-item-price-unit">${formatCurrency(product.priceUSD)} c/u</div>
          <div class="cart-item-total-price">
            ${formatCurrency(itemTotalUSD)}
            <small style="font-weight: 500; color: #64748b;">(${getSecondaryPriceDisplay(itemTotalUSD)})</small>
          </div>
        </div>

        <div class="cart-item-actions">
          <button 
            class="cart-item-remove-btn" 
            onclick="removeCartItem(${product.id})" 
            title="Eliminar producto"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>

          <div class="cart-item-qty-control">
            <button 
              class="cart-item-qty-btn" 
              type="button" 
              onclick="updateCartItemQty(${product.id}, ${quantity - 1})"
            >-</button>
            <span class="cart-item-qty-val">${quantity}</span>
            <button 
              class="cart-item-qty-btn" 
              type="button" 
              onclick="updateCartItemQty(${product.id}, ${quantity + 1})"
            >+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Update totals inside footer
  const totalVES = subtotalUSD * state.exchangeRate;

  const totalPrimaryEl = document.getElementById("cart-total-primary");
  const totalConvertedEl = document.getElementById("cart-total-converted");
  const rateNoticeEl = document.getElementById("cart-rate-notice");

  if (state.currentCurrency === "USD") {
    if (totalPrimaryEl) totalPrimaryEl.textContent = `$${formatNumber(subtotalUSD)}`;
    if (totalConvertedEl) totalConvertedEl.textContent = `Bs. ${formatNumber(totalVES)}`;
  } else {
    if (totalPrimaryEl) totalPrimaryEl.textContent = `Bs. ${formatNumber(totalVES)}`;
    if (totalConvertedEl) totalConvertedEl.textContent = `$${formatNumber(subtotalUSD)}`;
  }

  if (rateNoticeEl) {
    rateNoticeEl.textContent = `Tasa del día: 1$ = ${formatNumber(state.exchangeRate)} Bs.`;
  }
}

// Update Cart Item Quantity
function updateCartItemQty(productId, newQty) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  if (newQty <= 0) {
    removeCartItem(productId);
    return;
  }

  if (newQty > product.stock) {
    showToast(`No hay más stock disponible (${product.stock} unidades máx.)`, "warning");
    return;
  }

  state.cart[productId].quantity = newQty;
  saveCart();
  renderProducts();
}

// Remove Cart Item
function removeCartItem(productId) {
  if (state.cart[productId]) {
    delete state.cart[productId];
    saveCart();
    renderProducts();
    showToast("Producto eliminado de la cesta", "info");
  }
}

// Handle WhatsApp Checkout
function handleWhatsAppCheckout(e) {
  e.preventDefault();

  const cartEntries = Object.values(state.cart);
  if (cartEntries.length === 0) {
    showToast("Tu cesta está vacía. Selecciona algún producto.", "warning");
    return;
  }

  const nameInput = document.getElementById("order-name");
  const phoneInput = document.getElementById("order-phone");
  const deliverySelect = document.getElementById("order-delivery");
  const addressInput = document.getElementById("order-address");
  const paymentSelect = document.getElementById("order-payment");
  const notesInput = document.getElementById("order-notes");

  const name = nameInput ? nameInput.value.trim() : "Cliente";
  const phone = phoneInput ? phoneInput.value.trim() : "No especificado";
  const deliveryMethod = deliverySelect ? deliverySelect.value : "pickup";
  const deliveryText = deliveryMethod === "delivery" ? "Delivery / Envío a Domicilio" : "Retiro Personal en Tienda";
  const address = addressInput && deliveryMethod === "delivery" ? addressInput.value.trim() : "Retiro en tienda física";
  const payment = paymentSelect ? paymentSelect.options[paymentSelect.selectedIndex].text : "Acordar con la ferretería";
  const notes = notesInput ? notesInput.value.trim() : "";

  // Calculate totals
  let totalUSD = 0;
  let itemsText = "";

  cartEntries.forEach(({ product, quantity }, idx) => {
    const lineTotalUSD = product.priceUSD * quantity;
    const lineTotalVES = lineTotalUSD * state.exchangeRate;
    totalUSD += lineTotalUSD;

    itemsText += `${idx + 1}️⃣ *${product.name}*\n`;
    itemsText += `   • Cant: ${quantity} x $${formatNumber(product.priceUSD)} (Bs. ${formatNumber(product.priceUSD * state.exchangeRate)})\n`;
    itemsText += `   • Subtotal: *$${formatNumber(lineTotalUSD)}* (Bs. ${formatNumber(lineTotalVES)})\n\n`;
  });

  const totalVES = totalUSD * state.exchangeRate;
  const now = new Date();
  const dateStr = now.toLocaleDateString("es-VE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  // Construct message
  let message = `🛠️ *PEDIDO FERRETERÍA EL GOCHO* 🛠️\n`;
  message += `💬 *"¡Sí hay!"*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Cliente:* ${name}\n`;
  message += `📱 *Teléfono:* ${phone}\n`;
  message += `🚚 *Método de Entrega:* ${deliveryText}\n`;
  if (deliveryMethod === "delivery") {
    message += `📍 *Dirección / Ref:* ${address || 'Por acordar'}\n`;
  }
  message += `💳 *Forma de Pago:* ${payment}\n`;
  if (notes) {
    message += `📝 *Nota adicional:* ${notes}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📦 *PRODUCTOS DEL PEDIDO:*\n\n`;
  message += itemsText;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL A PAGAR:*\n`;
  message += `💵 *Dólares:* $${formatNumber(totalUSD)}\n`;
  message += `🇻🇪 *Bolívares:* Bs. ${formatNumber(totalVES)}\n`;
  message += `📊 *Tasa aplicada:* 1$ = ${formatNumber(state.exchangeRate)} Bs.\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🕒 *Fecha:* ${dateStr}\n\n`;
  message += `👋 ¡Hola Comercial Ferretero El Gocho! Quisiera coordinar el pago y la entrega de este pedido. ¡Gracias!`;

  // Encode URL
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in new tab
  window.open(waUrl, "_blank");

  showToast("¡Redirigiendo a WhatsApp para enviar tu pedido!", "success");
}

// Rate Modal Logic
function openRateModal() {
  const modal = document.getElementById("rate-modal-overlay");
  const input = document.getElementById("modal-rate-input");
  if (modal && input) {
    input.value = state.exchangeRate;
    modal.classList.add("active");
  }
}

function closeRateModal() {
  const modal = document.getElementById("rate-modal-overlay");
  if (modal) modal.classList.remove("active");
}

// Product Details Modal
function viewProductModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-detail-modal");
  const body = document.getElementById("product-detail-body");
  if (!modal || !body) return;

  const inCartQty = state.cart[product.id] ? state.cart[product.id].quantity : 0;
  const remainingStock = Math.max(0, product.stock - inCartQty);

  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.25rem;">
      <div style="width: 100%; height: 260px; border-radius: 14px; overflow: hidden; background: #f1f5f9; position: relative;">
        <img 
          src="${product.image}" 
          alt="${escapeHtml(product.name)}" 
          style="width: 100%; height: 100%; object-fit: cover;"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=600&q=80';"
        />
        <span class="stock-pill stock-in" style="position: absolute; top: 12px; left: 12px;">
          Stock: ${product.stock} unidades
        </span>
      </div>

      <div>
        <div style="font-size: 0.75rem; color: #94a3b8; font-weight: 700; text-transform: uppercase;">${escapeHtml(product.sku)} • ${escapeHtml(product.categoryName)}</div>
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #1e3a8a; margin: 0.25rem 0 0.5rem;">${escapeHtml(product.name)}</h2>
        <p style="color: #475569; font-size: 0.92rem; line-height: 1.6; margin-bottom: 1rem;">${escapeHtml(product.description)}</p>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem; margin-bottom: 1.25rem;">
          <div style="font-size: 0.8rem; color: #64748b; font-weight: 600;">Precio en moneda seleccionada:</div>
          <div style="font-size: 1.6rem; font-weight: 900; color: #1e3a8a;">${formatCurrency(product.priceUSD)}</div>
          <div style="font-size: 0.95rem; font-weight: 700; color: #16a34a;">${getSecondaryPriceDisplay(product.priceUSD)}</div>
          <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 0.25rem;">(Tasa actual: 1$ = ${formatNumber(state.exchangeRate)} Bs.)</div>
        </div>

        <button 
          class="add-to-cart-btn" 
          style="width: 100%; padding: 0.85rem;"
          ${remainingStock <= 0 ? 'disabled' : ''}
          onclick="addToCartFromCard(${product.id}); closeProductModal();"
        >
          ${remainingStock > 0 ? 'Añadir a la Cesta de Compra' : 'Sin Stock Disponible'}
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeProductModal() {
  const modal = document.getElementById("product-detail-modal");
  if (modal) modal.classList.remove("active");
}

// Toast notification system
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === 'warning' ? 'toast-warning' : type === 'error' ? 'toast-error' : ''}`;
  
  let icon = "✓";
  if (type === "warning") icon = "⚠️";
  if (type === "error") icon = "✕";

  toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Helper: Escape HTML to avoid XSS
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Expose globals needed for inline HTML onclick handlers
window.viewProductModal = viewProductModal;
window.closeProductModal = closeProductModal;
window.decrementCardQty = decrementCardQty;
window.incrementCardQty = incrementCardQty;
window.addToCartFromCard = addToCartFromCard;
window.removeCartItem = removeCartItem;
window.updateCartItemQty = updateCartItemQty;
window.resetFilters = resetFilters;
window.openCart = openCart;
window.closeCart = closeCart;
window.openRateModal = openRateModal;
window.closeRateModal = closeRateModal;

// Run on DOM loaded
document.addEventListener("DOMContentLoaded", initApp);
