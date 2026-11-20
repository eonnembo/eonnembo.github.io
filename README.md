# eonnembo.github.io

Portfolio y CV web de **Elías Onnembo**, desarrollador Full Stack: https://eonnembo.github.io

- Angular 21 con standalone components y signals, prerenderizado a HTML estático (`outputMode: static`).
- Tema claro y oscuro, versión imprimible como CV en PDF.
- Publicado con GitHub Actions en GitHub Pages en cada push a `main`.

Todo el contenido está en [`src/app/perfil.ts`](src/app/perfil.ts): para actualizar el CV se edita ese archivo.

```bash
npm install
npx ng serve     # http://localhost:4200
npx ng build     # dist/eonnembo.github.io/browser
```
