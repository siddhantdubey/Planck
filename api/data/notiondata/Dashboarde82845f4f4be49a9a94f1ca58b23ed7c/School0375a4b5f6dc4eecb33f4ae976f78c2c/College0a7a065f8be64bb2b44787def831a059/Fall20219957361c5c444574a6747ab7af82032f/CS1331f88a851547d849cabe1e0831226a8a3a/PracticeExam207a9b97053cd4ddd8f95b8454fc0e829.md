# Practice Exam 2

# Multiple Choice, T/F, Fill in the Blank

1. super(); (4)
2. (1) True 
3. (1) Animal a = new Cat();
4. (2) False
5. (1) True
6. (3) double value3 = value1  + value2
7. (2) False
8. (3) Protected
9. Shape
10. Square

# Design and Inerhitance

```java
public class Flower extends Plant {
	protected boolean blooming;
	protected String color;
	
	public Flower() {
		this(10,10,false,"Red");
	}
	
	public Flower(int rate, int height, boolean blooming, String color){ 
		super(rate, height);
		this.blooming = blooming;
		this.color = color;
	}

	@Override
	protected int grow(int time) {
		if (this.blooming == false && this.height < this.MAX_HEIGHT) {
			int amountGrown = time * rate;
			height += amountGrown;
			return amountGrown;
		}
		return 0
	}
	
	public void bloom(int numDays){
		this.blooming = true;
		for(int i=0; i<numDays; i++){
			System.out.println("blooming... ");
		}
		this.blooming = false;
	}
}
```

# Code Analysis

color == Green; numLegs == 5

color == Blue; numLegs == 5

color == Blue; numLegs == 5

True

3

# Code Debugging

Compile Exception on line 9 because no no-arg constructor has been defined.

numAnimals never instantiated so it it is null

using sim2 instead of sim3 so you will get an index out of bounds exception

# Polymorphism

I am Child 1

I am the Parent! My name is: Mom

Of course... I am the favorite child.

# equals, toString, copy constructors

```java
public LawnMower(LawnMower other){
	this(other.year, new String(other.brand), new Double(other.hp), new Engine(other.engine));
}

@Override
public boolean equals(Object o){
	if((o == null) || !(o instanceof LawnMower)){
		return false;
	}
	LawnMower other = (LawnMower) o;
	return ((this.year == other.year) && (this.brand.equals(other.brand)) && (this.hp.equals(other.hp)) && (this.engine.equals(other.engine)));
}

@Override
public String toString(){
	return "Lawnmower:" + this.year + "brand: " + this.brand + "hp: " + this.hp + "engine: " + this.engine;
}

```