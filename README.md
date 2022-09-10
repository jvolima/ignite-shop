# Ignite Shop

## Tecnologias utilizadas
- Next
- Typescript
- Stitches

## Principais aprendizados
- Primeira aplicação que eu utilizo o stitches para fazer a estilização do site.
- Aprendi que com o stitches eu consigo fazer com que o servidor carregue a estilização da minha aplicação, dessa forma ganhando em performance e se o usuário estiver com o JavaScript desabilitado ele ainda continuará vendo o site estilizado.
- Código necessário no _document para tal funcionalidade:
```
  <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
```