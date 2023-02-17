class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
      this.longitud = 0;
    }
  
    agregar(valor) {
      const nuevoNodo = new Nodo(valor);
  
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
      } else {
        let nodoActual = this.cabeza;
  
        while (nodoActual.siguiente) {
          nodoActual = nodoActual.siguiente;
        }
  
        nodoActual.siguiente = nuevoNodo;
      }
  
      this.longitud++;
    }
  }
  
  const miLista = 0;