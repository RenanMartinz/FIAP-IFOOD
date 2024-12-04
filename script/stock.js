document.getElementById('filterInput').addEventListener('input', function() {
    var filter = this.value.toLowerCase(); 
    var rows = document.querySelectorAll('#dataTable tbody tr'); 


    rows.forEach(function(row) {
      var cells = row.getElementsByTagName('td'); 
      var rowText = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(' '); 
      row.style.display = rowText.includes(filter) ? '' : 'none'; 
    });
});





document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var name = document.getElementById('itemName').value;
    var code = document.getElementById('itemCode').value;
    var quantity = document.getElementById('itemQuantity').value;
    var gtin = document.getElementById('itemGtin').value;

    var newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${code}</td>
      <td>${quantity}</td>
      <td>${gtin}</td>
    `;

    document.querySelector('#dataTable tbody').appendChild(newRow);

    document.getElementById('addItemForm').reset();
});