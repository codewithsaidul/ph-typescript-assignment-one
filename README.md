# PH Level-2 Assignment-1

## 1. What are some differences between interfaces and types in TypeScript?

In TypeScript, both type alias & interface are used to define a custom type or shape of an object.
However, they have some differences and use cases.


### ✅ Type Alias
- Type Alias in TypeScript allows defining a custom name.
- Type alias can be used for string, number, boolean, and other primitive types.
- Type alias can be used for more complex types like objects and arrays.
- Type alias can be extended using intersection(&), but not directly extended.
- A type alias doesn't support duplicate declarations. If you declare a type alias with the same name, then it gives an error.

##### Example:
```
type Str = string;
type Bool = boolean;
type Num = number;
type User = {
    name: string;
    email: string;
}
```

### ✅ Interfaces
- The Interfaces in TypeScript allow defining the structure of an object.
- It's used for describing an object.
- The Interfaces can be extended by using extend, but not to be directly intersection (&). 
- It allows one interfaces to inherit from another interface.
-  Interfaces support declaration merging. Especially when you want to declare multiple objects with the same shape or extend objects.

##### Example:
```
interface User {
    name: string;
    email: string
}
```



## 5. What is type inference in TypeScript? Why is it helpful?

Type inference means that TypeScript itself guesses the type of a variable, function, or object. The developer does not have to tell it.
When TypeScript sees that the developer declares a variable or function and determines its type, TypeScript itself determines the type based on the value of that variable.

###### Why is it helpful?
Reduces Code: Developers will still benefit from the type even if they don't write the type.

Improves Readability: Declare fewer types, making the code easier to read and understand.

Provide Autocompletion: Since TypeScript understands what the type will be, it will intelligently suggest it.

Early Error Detection: If the developer inadvertently makes a type mismatch, TypeScript immediately catches the errors.

Balance Safety and Simplicity: Type inference reduces the hassle of typing repeatedly, and also facilitates writing type-safe code.





## 7. Provide an example of using union and intersection types in TypeScript.

Union: It can be any one of multiple values. It works like logical OR (||).


Intersection: It requires all the conditions of the type to be met together. It is similar to logical and (&&).


##### Example of Union: 
```
type StrNum = string | number;
type User = {
    name: string;
    email: string;
}
type Admin = {
    role: string;
    email: string;
}

type AdminUser = User | Admin

```

##### Example of Intersection:

```
type User = {
    name: string;
    email: string;
}
type Admin = {
    role: string;
    email: string;
}

type AdminUser = User & Admin

```

