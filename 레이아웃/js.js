const headerEl = document.querySelector('#headerid')
const headerCo = document.querySelector('.head-co')

window.addEventListener('scroll', () => {
   console.log(window.scrollY)
   if (window.scrollY > 50) {
      // headerEl.style.height = '50px';
      document.querySelector('#headerid').style.height = '80px'
      document.querySelector('#headerid').style.background = 'black'
      document.querySelector('.head-co').style.height = '60px'
   } else {
      document.querySelector('#headerid').style.height = '100px'
      document.querySelector('.head-co').style.height = '80px'
      document.querySelector('#headerid').style.background = 'none'
   }
})



