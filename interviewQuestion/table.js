(() => {
  const table = document.querySelector(".tbody");

  const data = [
    ["shawn", "john", "bob", "lob", "hehe"],
    ["A", "B", "C", "D", "E"],
    ["hi", "bye", "hello", "goodbye", "table"],
  ];
  let row;
  let el;
  data.forEach((arr) => {
    row = document.createElement("tr");
    arr.forEach((val) => {
      el = document.createElement("td");
      el.innerHTML = val;
      row.appendChild(el);
    });
    table.append(row)
  });


  const input = document.getElementById("tableSearch")
input.addEventListener("keyup", e =>{
    Array.from(table.children).forEach(tr => {
        Array.from(tr.children).forEach(val => {
            val.innerHTML.toLowerCase().includes(input.value.toLowerCase()) && input.value !== "" ? 
                val.classList.add("selected") :
                val.classList.remove("selected")
        })
    })   
})
})();
