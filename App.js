document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const formData = new FormData(this);
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });

    
    const displayDataDiv = document.getElementById('displayData');
    displayDataDiv.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${userData.firstName} ${userData.lastName}</h5>
          <p class="card-text"><strong>Email:</strong> ${userData.email}</p>
          <p class="card-text"><strong>Phone:</strong> ${userData.phone}</p>
          <p class="card-text"><strong>Date of Birth:</strong> ${userData.dob}</p>
          <p class="card-text"><strong>Gender:</strong> ${userData.gender}</p>
          <p class="card-text"><strong>Address:</strong> ${userData.address}</p>
        </div>
      </div>
    `;

    
    this.reset();
  });

  document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('userForm').reset();
    document.getElementById('displayData').innerHTML = ''; // Clear displayed data
  });