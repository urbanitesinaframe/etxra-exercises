class SumApp {
  // Hier wird ein constructor für das neue objekt erstellt.
  constructor() {
    //es enthält zunächst ein Element mit dem key numbers und als value ein leeres Array
    this.numbers = [];
  }
  // mit dieser Methode werden beim Aufruf die Nummern in das leere Array gepushed
  addNumber(n) {
    this.numbers.push(n);
  }

  //mit dieser reduce Methode werden die Zahlen im Array addiert und nur die Summe wiedergegeben. Als Startwert wird 0 definiert, für den Fall, dass das Array leer ist.
  getSum() {
    return this.numbers.reduce((acc, a) => acc + a, 0);
  }

  //mit dieser Methode wird einfach der Value hinter numbers mit einem leeren Array überschrieben
  reset() {
    return (this.numbers = []);
  }
}
