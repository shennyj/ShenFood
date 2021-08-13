const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearEl.textContent=currentYear

const buttonEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header-class')

buttonEl.addEventListener('click',()=>{
    headerEl.classList.toggle('nav-open')
})

const allLinks = document.querySelectorAll('a:link')
allLinks.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault()
        const href = link.getAttribute('href')
        //scroll back to top
        if(href==="#") window.scrollTo({
            top:0,
            behavior:"smooth"
        })
        //scroll to our different links
        if(href!=='#'&&href.startsWith('#')){
           const sectionEl = document.querySelector(href)
           sectionEl.scrollIntoView({
               behavior:"smooth"
           })
        }
        //close mobile navigation once click a link
        if(link.classList.contains('main-nav-link')){
            headerEl.classList.toggle('nav-open')
        }
    })
})

