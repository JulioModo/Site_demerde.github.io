    const tree = [];
    const treeDiv = document.getElementById("tree");
    const form = document.getElementById("formContainer");
    const parent1Select = document.getElementById("parent1");
    const parent2Select = document.getElementById("parent2");

    document.getElementById("openForm").addEventListener("click", () => {
      form.style.display = form.style.display === "none" ? "block" : "none";
      updateParentOptions();
    });

    document.getElementById("addMember").addEventListener("click", () => {
      const name = document.getElementById("name").value.trim();
      const parent1 = parent1Select.value || null;
      const parent2 = parent2Select.value || null;

      if (!name) return alert("Entre un nom mec 😭");

      tree.push({ name, parent1, parent2 });
      afficherArbre();
      document.getElementById("name").value = "";
      parent1Select.value = "";
      parent2Select.value = "";
    });

    function updateParentOptions() {
      [parent1Select, parent2Select].forEach(select => {
        select.innerHTML = '<option value="">-- Aucun --</option>';
        tree.forEach(p => {
          const option = document.createElement("option");
          option.value = p.name;
          option.textContent = p.name;
          select.appendChild(option);
        });
      });
    }

    function afficherArbre() {
      treeDiv.innerHTML = "";
      tree.forEach(p => {
        const div = document.createElement("div");
        div.className = "person";
        div.innerHTML = `<strong>${p.name}</strong><br>
          ${p.parent1 || p.parent2 ? "👪 Parents : " + [p.parent1, p.parent2].filter(Boolean).join(" & ") : ""}`;
        treeDiv.appendChild(div);
      });
    }
  