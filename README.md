# Typescript avançado com React Hooks

## Sobre
- Repositório de estudos baseado na aula [`TYPESCRIPT AVANÇADO | Criando React Hooks com Typescript`](https://www.youtube.com/watch?v=Z6kKkbuWlj8&t=5348s), da [`CodersClub`](https://www.youtube.com/channel/UC9bVe2K6Jg4uiseKV7w38Zg), ministrada pelo mestre [Luke Morales](https://github.com/lukemorales)

## O que são React Hooks 

Hooks são funções que permitem que você conecte sua aplicação ao estado do React e suas funcionalidades de clico de vida dentro de function components. Hooks não funcionam em Classes - eles permitem que você utilize o React e suas funcionalidades sem Classes.

### Regras de utilização dos Hooks

1. Não podemos invocar hooks condicionalmente. 
 - Ex: não invoque um hook dentro de um `if`

```tsx
  if (true) {
    useEffect() // não funciona
  }
```

2. Todo Hook começa com `use`
  - Ex: `useCodersClub`

  ```tsx
    const useCodersClub = () => {
      const [website, setWebsite] = useState('codersclub.com')

      return website
    } // é um Hook

    const useCodersClub = () => 'codersclub.com' // não é Hook
  ```