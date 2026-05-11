
Ciao ragazzi,
esercizio di oggi

# React Product Catalog

repo: `react-product-catalog`

Oggi creeremo una piccola app React che recupera e visualizza una lista di prodotti da API esterna.

Dovrete realizzare una pagina che mostri tutti i prodotti ottenuti da questo endpoint:

`https://fakestoreapi.com/products`

La chiamata HTTP dovrà essere fatta con `useEffect`, così da eseguire il fetch al caricamento del componente. L’API Fake Store mette a disposizione un endpoint `GET /products` che restituisce la lista completa dei prodotti.

L’app dovrà contenere almeno 3 componenti React.

## Requisiti

L’app deve avere:

- una lista di prodotti caricata da API
- una barra di ricerca
- filtraggio dei prodotti in tempo reale
- almeno 3 componenti

## Componenti minimi

Potete organizzarli come preferite, ma una divisione consigliata è:

- `App`
- `SearchBar`
- `ProductList`

Facoltativo ma consigliato:
- `ProductCard`

## Per ogni prodotto mostrate almeno

- immagine
- titolo
- prezzo
- categoria

## Vincoli tecnici

- usare `useEffect` per il fetch
- usare `useState` per gestire dati e ricerca
- usare `map()` per renderizzare i prodotti
- usare `filter()` per filtrare i prodotti in base al testo inserito
- la barra di ricerca deve essere un input controllato

## Bonus

- loading state
- error state
- contatore dei risultati trovati

## Super Bonus

- filtro per categoria
- ordinamento per prezzo crescente/decrescente
- messaggio personalizzato se la ricerca non produce risultati

Buon Lavoro


# Struttura di base
- App.jsx
    - Header.jsx
    - Main.jsx (Conterrà una variabile di stato dove conserviamo i prodotti)
        - FilterList.jsx (Riceverà l'array dei prodotti e calcolerà quanti filtri ci sono. Se vengono aggiunti altri prodotti, cambierà la variabile di stato che ha ricevuto come props e verrà ricaricato, ricalcolando i filtri basandosi sui nuovi prodotti)
            - Filter.jsx (Verrà creato dinamicamente a partire dalla lista dei filtri contenuta in FilterList)
        - ProductList.jsx (Riceverà l'array dei prodotti)
            - Product.jsx (Verrà creato dinamicamente partendo dall'array dei prodotti)