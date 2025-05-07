{
  // Problem - 1
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    }

    return input.toUpperCase();
  }

  // problem - 2
  interface Items {
    title: string;
    rating: number;
  }

  function filterByRating(items: Items[]): Items[] {
    return items.filter((item: Items) => item.rating >= 4);
  }

  // problem -3
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((prev: T[], curr: T[]) => prev.concat(curr), []);
  }

  // Problem 4
  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel() {
      console.log(`Model: ${this.model}`);
    }
  }

  // problem 5
  function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
  }

  // problem 6
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length > 0) {
      return products.reduce((max, product) =>
        product.price > max.price ? product : max
      );
    }

    return null;
  }

  // problem 7
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }


//  problem 8
async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        return Promise.reject("Negative number not allowed")
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * n)
        }, 1000);
    })
}


}
