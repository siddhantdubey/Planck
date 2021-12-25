# Practice Exam 3

# Multiple Choice and T/F

1. True. The dynamic type cannot be an interface.
2. False.
3. False. They are UNCHECKED exceptions.
4. True. An interface can extend an interface.
5. False. The base call cannot be recursive.
6. to estimate their growth function
7. O(n^n) is the worst.
8. public interface A<E, F> {} is the correct way to declare an interface with two generic types
9. B b = new B(); and A a = new B(); both work
10. For binary search to work the array must be sorted.

## Recursion

```java
public class RecursiveQuestion {
	public static int sumDigits(int n) {
		if (n < 10) {
			return n;
		}
		else {
			return (n % 10) + sumDigits(n/10);
		}
	}
}
```

## Exceptions

1. 6, 7, 8, 9
2. 4, 5, 8, 9
3. 2, 3, 8, 9

## Interface and Abstract Classes

1. biz and jill
2. biz bill jar and jill

## Generics

```java
public class Box<E extends Animal> {
	private final E data;
	public Box(E data) {
		this.data = data;
	}
	public E getData() {
		return data;
	}
}
```

## File Input/Output

1. The main method reads through a file called text.txt and adds all lines in it with the word hello to the file someFile.txt with their line number from text.txt added to the front of them.
2. catch (FileNotFoundException ex)