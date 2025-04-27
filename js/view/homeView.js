function render() {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous content

    // Create elements
    const div = document.createElement('div');
    div.className = 'text-center fade-in'; // <-- Added fade-in class here

    const heading = document.createElement('h1');
    heading.innerHTML = `Hi, my name is <strong>Luis Santos</strong>`;

    const img = document.createElement('img');
    img.src = './resources/IMG_1586.jpg';
    img.className = 'img-fluid';
    img.alt = 'Profile Picture';
    img.style = 'width: 200px; height: 200px; border-radius: 50%; margin-top: 20px;';

    const button = document.createElement('a');
    button.className = 'btn btn-primary';
    button.href = '/contact';
    button.style = 'margin-top: 30px;';
    button.innerText = 'Contact Me';
    
    // Append elements
    div.appendChild(heading);
    div.appendChild(img);
    div.appendChild(button);
    container.appendChild(div);
}

export default { render };
