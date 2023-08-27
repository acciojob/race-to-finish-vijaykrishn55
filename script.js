window.promises = [];

// Add your promises to the array `promises`
for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${randomTime / 1000} seconds`);
    }, randomTime);
  });

  window.promises.push(promise);
}

// Using Promise.any() to wait for the first promise to resolve
Promise.any(window.promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error('All promises rejected:', error);
  });
