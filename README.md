1. npm create vue@latest
2. npm i
3. npm run dev
4. npm i bootstrap
5. en main.js
   import 'bootstrap/dist/css/bootstrap.css'
   import 'bootstrap/dist/js/bootstrap.bundle.js'
6. npm i -D sass
7. en assets crear estructura básica
   assets/styles/scss/main.scss
8. en main.js importar main.scss
   import './assets/styles/scss/main.scss'
9. en carpeta abstracts crear \_variables.scss para variables globales
10. en main.scss importar variables.scss
    @import './abstracts/variables.scss'
11. en el componente nav, reemplazar las anclas por routerlink
12. reemplazar href por :to="{}"
13. en routerlink colocar active-class="active" para el active dinamico de pestañas
