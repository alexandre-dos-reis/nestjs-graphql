# GraqhQL

## GraphQL paradigm

- Query : A way to retrieve information.
- Mutation : A way to create, update, delete data.

## Query

A query is used to fetch the data we want with the field requested, example :

```
query myQuery {
  sayHello
}
```

gives the result : 

```
{
  "data": {
    "sayHello": "Hello world !"
  }
}

```


## Mutations

```gql
mutation articleCreate {
  articleCreate(
    input: {
      title: "Bonjour 2"
      description: "je suis la 2ème description"
      image: "https://images.unsplash.com/photo-1637243175600-39d3f62dad04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ) {
    article {
      id
      title
      description
      image
    }
  }
}
```