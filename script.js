const supabaseUrl = "https://biumenziykdqkloedxwa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpdW1lbnppeWtkcWtsb2VkeHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2MDMyODMsImV4cCI6MjA5MTE3OTI4M30.sZVyxM72fDtE04Yt4PRZkKVXxcrCvp5byaEFoBdQ5Zo";



const supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

// 📦 Afficher les piscines
async function afficherPiscines() {
  const { data, error } = await supabaseClient
    .from('user_piscine')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Erreur :", error);
    return;
  }

  const liste = document.getElementById("liste-interventions");
  liste.innerHTML = "";

  data.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${item.piscine_name}</strong>
      <p>${item.desc || ""}</p>
      <small>${new Date(item.created_at).toLocaleString()}</small>
    `;

    liste.appendChild(li);
  });
}

// ➕ Ajouter une piscine
document.getElementById("form-intervention")
.addEventListener("submit", async (e) => {
  e.preventDefault();

  const piscine_name = document.getElementById("type").value;
  const desc = document.getElementById("description").value;

  const { error } = await supabaseClient
    .from('user_piscine')
    .insert([
      { piscine_name, desc }
    ]);

  if (error) {
    console.error("Erreur insertion :", error);
    return;
  }

  e.target.reset();
  afficherPiscines();
});

// 🚀 Chargement
afficherPiscines();
