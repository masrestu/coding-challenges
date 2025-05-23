const items = [];

const carts = [];

const newOrder = () => {
    [...carts].reverse().forEach(v => {
        removeItemFromCart(v.id);
    });

    const modal = document.querySelector('.modal');
    modal.classList.remove('show');
}

const removeItemFromCart = (id) => {
    const item = carts.find((product) => product.id === id);
    if (item) {
        carts.splice(carts.indexOf(item), 1);
    }

    updateQtyLabel(id, 0);
}

const updateCartView = () => {
    const confirmView = document.querySelector('.modal .cart-items');
    const cartView = document.querySelector('.cart');
    const cartItems = document.querySelector('.cart-items');
    const [totalQty, totalPrice] = carts.reduce((total, item) => [total[0] + item.quantity, total[1] + item.price * item.quantity], [0, 0]);

    const totalQtyLabel = document.querySelector('.qty-total');
    totalQtyLabel.textContent = totalQty;
    const totalPriceLabel = document.querySelectorAll('.total-price');
    totalPriceLabel.forEach((label) => {
        label.textContent = totalPrice.toFixed(2);
    });

    if (totalQty === 0) {
        cartView.classList.add("empty");
        return;
    } else {
        cartView.classList.remove("empty");
    }

    cartItems.innerHTML = '';
    confirmView.innerHTML = '';
    carts.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const cartItemImage = document.createElement('img');
        cartItemImage.classList.add('cart-item-image');
        cartItemImage.src = item.thumbnail || './assets/images/No_Image_Available.jpg';
        cartItemImage.alt = item.name;
        cartItem.appendChild(cartItemImage);

        const cartItemName = document.createElement('h4');
        cartItemName.classList.add('cart-item-name');
        cartItemName.textContent = item.name;

        cartItem.appendChild(cartItemName);

        const cartQty = document.createElement('span');
        cartQty.classList.add('cart-qty');
        cartQty.textContent = item.quantity;
        const cartPrice = document.createElement('span');
        cartPrice.classList.add('cart-price');
        cartPrice.textContent = item.price.toFixed(2);
        const cartTotalPrice = document.createElement('span');
        cartTotalPrice.classList.add('cart-total-price');
        cartTotalPrice.textContent = item.totalPrice.toFixed(2);

        cartItem.appendChild(cartQty);
        cartItem.appendChild(cartPrice);
        cartItem.appendChild(cartTotalPrice);

        const removeItem = document.createElement('div');
        removeItem.classList.add('remove-item');
        removeItem.innerHTML = DOMPurify.sanitize(`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>`);

        removeItem.addEventListener('click', () => {
            removeItemFromCart(item.id);
        });

        cartItem.appendChild(removeItem);
        cartItems.appendChild(cartItem);
        const cloned_cartItem = cartItem.cloneNode(true);
        confirmView.appendChild(cloned_cartItem);
    });
}

const updateQtyLabel = (id, quantity) => {
    const cartCard = document.querySelector(`[data-id="${id}"]`);
    const label = document.querySelector(`[data-id="${id}"] .qty`);

    label.textContent = quantity;

    if (quantity === 0) {
        cartCard.classList.add('empty');
    } else {
        cartCard.classList.remove('empty');

        const cartItem = carts.find((product) => product.id === id);
        const infoItem = items.find((product) => product.id === id);
        cartItem.thumbnail = infoItem.image_url.thumbnail;
        cartItem.price = infoItem.price;
        cartItem.name = infoItem.name;
        cartItem.totalPrice = infoItem.price * cartItem.quantity;
    }

    updateCartView();
}

const increaseQty = (id) => {
    const item = carts.find((product) => product.id === id);
    if (item) {
        item.quantity += 1;
    } else {
        carts.push({ id, quantity: 1 });
    }

    updateQtyLabel(id, item?.quantity || 1);
};

const decreaseQuantity = (id) => {
    const item = carts.find((product) => product.id === id);
    if (item) {
        item.quantity -= 1;
    }
    if (item.quantity === 0) {
        removeItemFromCart(id);
        return;
    }
    updateQtyLabel(id, item.quantity);
};

const renderMenu = async () => {
    const itemList = await fetch('./menu.json').then((res) => res.json());
    items.length = 0;
    items.push(...itemList);

    items.forEach((item) => {
        const menu = document.querySelector('.menu');
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card', 'empty');
        itemCard.dataset.id = item.id;

        const labelWrapper = document.createElement('div');
        labelWrapper.classList.add('label-wrapper');

        const itemName = document.createElement('h2');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        const category = document.createElement('span');
        category.classList.add('category');
        category.textContent = item.category;

        const price = document.createElement('span');
        price.classList.add('price');
        price.textContent = item.price.toFixed(2);

        labelWrapper.appendChild(itemName);
        labelWrapper.appendChild(category);
        labelWrapper.appendChild(price);

        itemCard.appendChild(labelWrapper);

        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');

        const image = document.createElement('picture');

        const tabletSource = document.createElement('source');
        tabletSource.srcset = item.image_url.tablet;
        tabletSource.type = "image/png";
        tabletSource.media = "screen and (min-width: 600px)";
        image.appendChild(tabletSource);

        const desktopSource = document.createElement('source');
        desktopSource.srcset = item.image_url.desktop;
        desktopSource.type = "image/png";
        desktopSource.media = "screen and (min-width: 992px)";
        image.appendChild(desktopSource);

        const mobileSource = document.createElement('img');
        mobileSource.src = item.image_url.mobile;
        mobileSource.alt = item.name;
        image.appendChild(mobileSource);

        const cartBtn = document.createElement('div');
        cartBtn.classList.add('cart-btn');

        const addBtn = document.createElement('button');
        addBtn.classList.add('add-btn');
        addBtn.type = "button";
        addBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
            Add to Cart`;

        const qtyEdit = document.createElement('div');
        qtyEdit.classList.add('qty-edit');

        const decrementBtn = document.createElement('div');        
        decrementBtn.classList.add('decrement-btn', 'qty-btn');
        decrementBtn.innerHTML = DOMPurify.sanitize(`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewbox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"></path></svg>`);

        const quantity = document.createElement('span');
        quantity.classList.add('qty');
        quantity.textContent = 0;

        const incrementBtn = document.createElement('div');        
        incrementBtn.classList.add('increment-btn', 'qty-btn');
        incrementBtn.innerHTML = DOMPurify.sanitize(`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>`);

        qtyEdit.appendChild(decrementBtn);
        qtyEdit.appendChild(quantity);
        qtyEdit.appendChild(incrementBtn);

        cartBtn.appendChild(addBtn);
        cartBtn.appendChild(qtyEdit);

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(cartBtn);

        itemCard.appendChild(imageWrapper);

        menu.appendChild(itemCard);
    });
};

document.addEventListener('DOMContentLoaded', async () => {
    await renderMenu();

    const addOneBtn = document.querySelectorAll('.add-btn');
    const incrementBtn = document.querySelectorAll('.increment-btn');

    [...addOneBtn, ...incrementBtn].forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const id = event.target.closest('.item-card').getAttribute('data-id');
            increaseQty(id);
        });
    });

    const decrementBtn = document.querySelectorAll('.decrement-btn');
    [...decrementBtn].forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const id = event.target.closest('.item-card').getAttribute('data-id');
            decreaseQuantity(id);
        });
    });

    const confirmBtn = document.querySelector('.confirm-btn');
    confirmBtn.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.classList.add('show');
    });

    const newOrderBtn = document.querySelector('.new-order-btn');
    newOrderBtn.addEventListener('click', newOrder);
})