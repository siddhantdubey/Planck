# Practice Exam 1

[watson-phillips_sp19_exam1a_final.pdf](Practice%20Exam%201%202d5a8efd69d443f9afb5b94318a22295/watson-phillips_sp19_exam1a_final.pdf)

## Fill in the blank

1. The java compiler generates **bytecode,** which is run by the JVM and makes a Java program hardware agnostic.
2. A **reserved word** has a specific meaning to the compiler and cannot be used for other purposes in the program.
3. **Source code** is human readable.

## True False.

1. **False, Strings are not mutable**
2. **True, Java is case sensitive**
3. **False**
4. **True**
5. **True**

## MCQs

1. a) a == b
2. myColor.length; is not valid
3. Math.pow(a, b)
4. scan.all();  does not work
5. \n is the newline character

## Primitive Types

byte < short < int < long

## Methods.

```java
//Problem 5
public class MethodFun{
	public static void main(String[] args){
		sayHi(5);	
	}
	//sayHi(int count) is the method signature
	public static void sayHi(int count){
		for(int i=0; i<count; i++){
			System.out.println("Hi Sid!");
		}
	}
}
```

```java
//Problem 6 (Arrays)
public class MethodFun{
	public static void main(String[] args){
		int[] myArray = new int[10];
		for(int i=0; i<10; i ++){
			myArray[i] = 12 + 2*i;
		}

	}
}
```

## Strings

1. Computer Science - domputer Science

## Math Expressions

1. -3
2. 4.3
3. 8
4. -9
5. 0.5

## Boolean Expressions

1. True
2. True
3. True
4. False
5. True

## Iteration

```java
for(int count=10; count>0; count--){
	System.out.println("count is: " + count);

}
```

# Bonus Questions