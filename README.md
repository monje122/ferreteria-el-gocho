# 🛠️ Comercial Ferretero EL GOCHO - ¡Sí hay!

Sitio web moderno, fluido y responsivo para ferretería y venta de materiales con catálogo interactivo, control de inventario (stock), cesta de compras, conversor dinámico de precios (USD $ / Bs. Bolívares) y checkout automatizado directo a **WhatsApp (+58 412 3714136)**.

---

## 🌟 Características Principales

1. **Identidad Visual de Marca:**
   - Incorpora el logo oficial circular *"Comercial Ferretero EL GOCHO - ¡Sí hay!"*.
   - Paleta de colores acorde al logo: Azul industrial, amarillo ferretero y verde andino/gocho.
   - Totalmente responsivo para teléfonos móviles, tablets y computadoras de escritorio.

2. **Control de Stocks en Tiempo Real:**
   - Indicador visual de stock en cada producto (`Stock: X disp.`, `¡Últimas X unid!` o `Agotado`).
   - Validación automática: No permite agregar a la cesta más unidades del stock disponible.
   - Stepper numérico para escoger cantidades de forma rápida.

3. **Cesta de Compras Fluida (Slide-Over Drawer):**
   - Icono y contador de productos dinámico en la barra superior y botón flotante.
   - Panel lateral deslizable con resumen de productos, fotos, precios unitarios, modificación de cantidades y opción para eliminar.
   - Cálculo automático del subtotal y total.

4. **Conversor de Moneda (Dólares $ ↔ Bolívares Bs.):**
   - Selector en la barra de navegación para alternar con un solo clic entre **$ USD** y **Bs. VEF**.
   - Muestra doble precio en cada tarjeta de producto (precio principal y su equivalente).
   - **Tasa de cambio editable:** Puedes hacer clic en la tasa en la barra superior para cambiar el valor del dólar según la tasa del día (BCV o paralelo). Se guarda automáticamente en el navegador (`localStorage`).

5. **Envío de Pedidos Directo a WhatsApp (584123714136):**
   - Formulario de datos dentro de la cesta: Nombre del cliente, número telefónico, método de entrega (Retiro en tienda o Delivery con dirección), método de pago preferido (Pago Móvil, Zelle, Divisas, etc.) y notas.
   - Botón *"Enviar Pedido a WhatsApp"* que redacta un mensaje perfectamente formateado y abre el chat directamente con el número **`+58 412 3714136`**.

6. **Buscador y Filtros por Categoría:**
   - Barra de búsqueda en tiempo real (busca por nombre, código SKU, categoría o descripción).
   - Filtros rápidos tipo chip: Herramientas Eléctricas, Manuales, Plomería, Electricidad, Pinturas, Tornillería y Construcción.
   - Ordenamiento por precio (menor a mayor / mayor a menor), alfabético y stock.

---

## 🚀 Cómo Usar y Abrir el Proyecto

Puedes abrir la tienda directamente de dos formas:

### Opción 1: Directo en tu Navegador
Haz doble clic en el archivo `index.html` ubicado en:
`C:\Users\USUARIO\.gemini\antigravity\scratch\ferreteria-el-gocho\index.html`
Se abrirá inmediatamente en Google Chrome, Microsoft Edge, Brave o tu navegador favorito.

---

## 📁 Estructura de Archivos

```
ferreteria-el-gocho/
├── index.html        # Estructura principal de la tienda y modales
├── styles.css        # Estilos modernos, animaciones, drawer y diseño responsivo
├── app.js            # Lógica del catálogo, stock, cesta, tasa de cambio y WhatsApp
├── assets/
│   └── logo.png      # Logo oficial de Comercial Ferretero El Gocho
└── README.md         # Documentación de uso
```
