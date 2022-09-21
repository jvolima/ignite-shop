# Ignite Shop

## Funcionalidades da aplicação
- Visualizar lista de produtos da loja
- Adicionar items no carrinho
- Comprar items

## Tecnologias utilizadas
- Next
- Typescript
- Stitches (CSS in JS)
- Stripe (Pagamento)

## Principais aprendizados
### Stitches
- Com o stitches dá para fazer com que o servidor carregue a estilização da aplicação, dessa forma ganhando em performance e se o usuário estiver com o JavaScript desabilitado ele ainda continuará vendo o site estilizado.
- Código necessário no _document para tal funcionalidade:
```
  <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
```

### Next
- É interessante utilizar o SSR para fazer uma chamada a API basicamente em duas situações, a primeira é quando precisa-se que as informações já estejam carregadas no momento que a aplicação carregar, para que bots ou crowlers consigam ter acesso à essas informações, como em ecommerces por exemplo. Já a outra situação, é quando uma consulta que precisa ser feita necessita de segurança, consultas que o client não consiga ter acesso, como numa chamada a banco de dados ou a APIs de pagamento que possuam chaves secretas.
- Ao utilizar o SSG (Static site generation) para criar uma página de maneira estática, ganhando assim em performance, deve-se saber que não é possível ter acesso as informações da requisição do usuário, ou seja, não tem como saber se o usuário está logado ou não por exemplo, diferentemente do SSR. 
- Em vista disso, deve-se analisar bem cada caso antes de usar SSR ou SSG em uma página da sua aplicação.
- Em rotas dinâmicas, se for usar SSG, é necessário criar uma função getStaticPaths, que é onde deve ser definido o que deverá ser feito ao entrar nessa rota dinâmica, por exemplo uma rota de produto em um ecommerce.
- Nesse getStaticPaths, é possível passar alguns caminhos por default, como no caso de um ecommerce, os produtos mais acessados, e um atributo fallback, onde deverá ser passado true ou 'blocking', para que as rotas que não estão no array de path, serem geradas no momento que algum usuário acessar.