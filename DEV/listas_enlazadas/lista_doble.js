/**
 * Lista enlazada doble: en este caso, cada elemento 
 * de la lista tiene una referencia tanto al siguiente 
 * como al elemento anterior.
*/

class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.anterior = null;
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
      } else {
        nodo.anterior = this.fin;
        this.fin.siguiente = nodo;
        this.fin = nodo;
      }
    }
  
    imprimir() {
      let actual = this.inicio;
      while (actual) {
        console.log(actual.valor);
        actual = actual.siguiente;
      }
    }
  }
  
  const lista = new ListaEnlazada();
  lista.agregar(1);
  lista.agregar(2);
  lista.agregar(3);
  lista.imprimir(); // 1, 2, 3
  