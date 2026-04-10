const supabaseUrl = "https://biumenziykdqkloedxwa.supabase.co";
const supabaseKey = "sb_publishable_2ZQc_ZnKGqJLrKUMOO5qpQ_Pj7BuQKc";

const supabase = supabase.createClient(supabaseUrl, supabaseKey);
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// 📦 Fonction pour récupérer et afficher les produits
async function afficherProduits() {

  const { data, error } = await supabaseClient
    .from('user_piscine') // nom de ta table
    .select('*');

  if (error) {
    console.error("Erreur :", error);
    return;
  }

  const liste = document.getElementById("liste-produits");
  liste.innerHTML = ""; // reset

  data.forEach(produit => {
    const li = document.createElement("li");

    li.textContent = `${produit.name} - ${produit.desc}`;

    liste.appendChild(li);
  });
}

// 🚀 Lancer au chargement
afficherProduits();
✅ Résultat

Tu vas voir une liste comme :

Climatiseur - 500€
Ventilateur - 80€
Pompe à chaleur - 1200€
🔥 Amélioration stylée (optionnelle)

Tu peux afficher ça en "cards" :

li.innerHTML = `
  <strong>${produit.name}</strong><br>
  Prix : ${produit.desc}€
`;
