/**
 * Lista enlazada circular: en este caso, el último 
 * elemento de la lista tiene una referencia al primer 
 * elemento.
*/

class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.inicio = null;
      this.fin = null;
    }
  
    agregar(valor) {
      const nodo = new Nodo(valor);
  
      if (!this.inicio) {
        this.inicio = nodo;
        this.fin = nodo;
        nodo.siguiente = this.inicio;
      } else {
        nodo.siguiente = this.inicio;
        this.fin.siguiente = nodo;
        this.fin = nodo;
      }
    }
  
    imprimir() {
      let actual = this.inicio;
      do {
        console.log(actual.valor);
        actual = actual.siguiente;
      } while (actual !== this.inicio);
    }
  }
  
  const lista = new ListaEnlazada();
  lista.agregar(1);
  lista.agregar(2);
  lista.agregar(3);
  lista.imprimir(); // 1, 2, 3
  