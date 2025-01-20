//const product_container = document.getElementById('product-container');

async function fetchProduct() {
    try {
        const response = await fetch('./products.json'); // Charger le fichier JSON
        const data = await response.json(); // Convertir la réponse en objet JavaScript
        const products = data.productos; // Accéder à la liste des produits
        console.log(products); // Afficher les produits dans la console
    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error); // Gérer les erreurs
    }
}

fetchProduct(); // Appeler la fonction pour exécuter le code
