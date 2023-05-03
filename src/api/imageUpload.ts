export function imageUpload(file: File) {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', import.meta.env.VITE_APP_CLOUDINARY_PRESET);

  return fetch(import.meta.env.VITE_APP_CLOUDINARY_URL, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data.url);
}
