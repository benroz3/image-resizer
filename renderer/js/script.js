const form = document.querySelector('#img-form');

function loadImage(event) {
  const file = event.target.files[0];

  if (!isFileImage(file)) {
      alert('Please select an image file');
        return;
  }

  form.style.display = 'block';
  document.querySelector(
    '#filename'
  ).innerHTML = file.name;
}

function isFileImage(file) {
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    return file && acceptedImageTypes.includes(file['type'])
}

document.querySelector('#img').addEventListener('change', loadImage);
