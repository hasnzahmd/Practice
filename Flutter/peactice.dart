void main() {
  //Variables and Types
  var name = 'John Doe'; // Automatically inferred to be String
  int age = 30; // Explicitly typed as integer
  double height = 5.9; // Double for floating-point numbers
  bool isRegistered = true; // Boolean values
  print('$name is $age years old, $height tall, and registered: $isRegistered');

  //Control Flow Statements
  int score = 90;
  if (score >= 90) {
    print('Excellent');
  } else if (score >= 75) {
    print('Very Good');
  } else {
    print('Keep Trying');
  }

  for (var i = 0; i < 5; i++) {
    print('Number $i');
  }

  int count = 0;
  while (count < 3) {
    print('Count is $count');
    count++;
  }

  //Classes and Objects
  var person = Person('John', 28);
  person.describe();

  //Collections: Working with lists, sets, and maps
  List<String> fruits = ['apple', 'banana', 'cherry'];
  Set<int> oddNumbers = {1, 3, 3, 5};
  Map<String, dynamic> person2 = {'name': 'John', 'age': 30};

  print(fruits);
  print(oddNumbers);
  print(person2);
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void describe() {
    print('Name: $name, Age: $age');
  }
}

class TreeNode {
  int value;
  TreeNode? left;
  TreeNode? right;

  TreeNode(this.value, {this.left, this.right});
}