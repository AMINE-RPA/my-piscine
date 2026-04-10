const supabaseUrl = "https://biumenziykdqkloedxwa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpdW1lbnppeWtkcWtsb2VkeHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2MDMyODMsImV4cCI6MjA5MTE3OTI4M30.sZVyxM72fDtE04Yt4PRZkKVXxcrCvp5byaEFoBdQ5Zo";

const supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

// 📦 Fonction pour récupérer et afficher les produits
async function afficherProduits() {

  const { data, error } = await supabaseClient
    .from('user_piscine')
    .select('*');

  if (error) {
    console.error("Erreur :", error);
    return;
  }

  const liste = document.getElementById("liste-produits");
  liste.innerHTML = "";

  data.forEach(produit => {
    const li = document.createElement("li");
    li.textContent = `${produit.piscine_name} - ${produit.desc}`;
    liste.appendChild(li);
  });
}

// 🚀 Lancer au chargement
afficherProduits();
