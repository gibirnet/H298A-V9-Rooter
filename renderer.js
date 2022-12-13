
document.getElementById('start').addEventListener('click', async () => {
  console.log("111");
  window.control.start()
  document.getElementById('start').remove();
})