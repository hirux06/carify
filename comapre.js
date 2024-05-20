
const cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020, price: 25000 },
    { id: 2, make: 'Honda', model: 'Accord', year: 2020, price: 27000 },
    { id: 3, make: 'Ford', model: 'Fusion', year: 2020, price: 23000 },
    { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2020, price: 26000 },
    { id: 5, make: 'Nissan', model: 'Altima', year: 2020, price: 24000 },
    { id: 6, make: 'BMW', model: '3 Series', year: 2020, price: 40000 },
    { id: 7, make: 'Audi', model: 'A4', year: 2020, price: 42000 },
    { id: 8, make: 'Mercedes-Benz', model: 'C-Class', year: 2020, price: 45000 },
    { id: 9, make: 'Lexus', model: 'ES', year: 2020, price: 42000 },
    { id: 10, make: 'Volvo', model: 'S60', year: 2020, price: 38000 }
  ];
  

  function populateCarsDropdown() {
    const carDropdowns = document.querySelectorAll('select');
    cars.forEach(car => {
      carDropdowns.forEach(dropdown => {
        const option = document.createElement('option');
        option.value = car.id;
        option.text = `${car.make} ${car.model} (${car.year}) - $${car.price}`;
        dropdown.appendChild(option);
      });
    });
  }
  
  
  function compareCars() {
    const car1Id = document.getElementById('car1').value;
    const car2Id = document.getElementById('car2').value;
    
    if (!car1Id || !car2Id) {
      document.getElementById('comparisonResult').innerHTML = '<p>Please select two cars to compare.</p>';
      return;
    }
    
    const car1 = cars.find(car => car.id == car1Id);
    const car2 = cars.find(car => car.id == car2Id);
    
    const comparisonHTML = `
      <h2>Comparison Result</h2>
      <table class="table table-bordered">
        <tr>
          <th>Features to Compare</th>
          <th>${car1.make} ${car1.model}</th>
          <th>${car2.make} ${car2.model}</th>
        </tr>
        <tr>
          <td>Make</td>
          <td>${car1.make}</td>
          <td>${car2.make}</td>
        </tr>
        <tr>
          <td>Model</td>
          <td>${car1.model}</td>
          <td>${car2.model}</td>
        </tr>
        <tr>
          <td>Year</td>
          <td>${car1.year}</td>
          <td>${car2.year}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>&#8377;${car1.price}</td>
          <td>&#8377;${car2.price}</td>
        </tr>
      </table>
    `;
    
    document.getElementById('comparisonResult').innerHTML = comparisonHTML;
  }
  
  
  document.addEventListener('DOMContentLoaded', populateCarsDropdown);
  document.getElementById('compareBtn').addEventListener('click', compareCars);
  