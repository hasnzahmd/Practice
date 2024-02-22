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

  
}
