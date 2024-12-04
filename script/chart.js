const ctx = document.getElementById('receitaChart').getContext('2d');
const receitaChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Pizza Margherita', 'Hambúrguer Artesanal', 'Frango Grelhado', 'Salada Caesar', 'Risoto de Cogumelos', 
             'Sopa de Cebola', 'Espaguete à Carbonara', 'Tiramisu', 'Café Expresso', 'Suco de Laranja', 
             'Bife à Parmegiana', 'Batata Frita', 'Camarão à Provençal', 'Brownie com Sorvete', 'Suco Detox Verde'],
    datasets: [
      {
        label: 'Entradas (Vendas)',
        data: [40, 35, 45, 25, 55, 20, 50, 30, 10, 12, 60, 15, 80, 25, 18],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Saídas (Despesas)',
        data: [400, 300, 150, 200, 100, 250, 2500, 400, 300, 150, 120, 180, 700, 3000, 500],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});