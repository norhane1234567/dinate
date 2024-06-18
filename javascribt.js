// Populate menu items
const menuItems = [
    { category: "Appetizers", items: ["Garlic Bread", "Caesar Salad", "Bruschetta"] },
    { category: "Main Courses", items: ["Grilled Salmon", "Steak", "Pasta Alfredo"] },
    { category: "Desserts", items: ["Tiramisu", "Chocolate Cake", "Ice Cream"] }
];

const menuItemsContainer = document.getElementById("menu-items");

menuItems.forEach(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("menu-item");

    const categoryHeading = document.createElement("h3");
    categoryHeading.textContent = category.category;
    categoryDiv.appendChild(categoryHeading);

    const itemList = document.createElement("ul");
    category.items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        itemList.appendChild(listItem);
    });

    categoryDiv.appendChild(itemList);
    menuItemsContainer.appendChild(categoryDiv);
});

// Populate contact information
const contactInfo = "Email: info@dinate.com | Phone: +123 456 7890";
const contactInfoElement = document.getElementById("contact-info");
contactInfoElement.textContent = contactInfo;