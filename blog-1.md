The significance of union and intersection types in Typescript.

\*\* Union Types

Union types alow a variable to hold many types. It is used when a value can be one or few types. We can use union type by using that | symbol.

Example :

type Car = "Toyota" | "BMW";

const MyOldCar: Car = "BMW";
const MyNewCar: Car = "Toyota";

\*\* Intersection Types

Intersection types combine multiple types into one. It is very useful or often used for creating a new type that merges properties from multiple types. We can use intersection type by using that & symbol.

Example :

type JuniorDeveloper = {
skills : string[],
designation1 : 'Junior WebDeveloper'
}

type SeniorDeveloper = {
skills : string[],
designation2 : 'Senior WebDeveloper'
}

type FullStackDeveloper = JuniorDeveloper & SeniorDeveloper

const fullStackDeveloper : FullStackDeveloper = {
skills : ['HTML', 'CSS', 'EXPRESS'],
designation1 : 'Junior WebDeveloper',
designation2 : 'Senior WebDeveloper',
}
