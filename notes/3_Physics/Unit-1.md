# Physics - Unit 1 Measurements and uncertainty

## Measurements
### Quantities and units
* **Fundemental Units/Standard Units:** A base unit is a unit adopted for measurement of a base quantity.

| Quantity            | SI unit  | Symbol |
| ------------------- | -------- | ------ |
| Mass                | Kilogram | kg     |
| Distance            | Meter    | m      |
| Time                | Seconds  | s      |
| Electric Current    | Ampere   | A      |
| Amount of substance | Mole     | mol    |
| Temperature         | Kelvin   | K      |

* **Derived Units:** a unit that results from a mathematical *combination of SI base units*.
  * m/s (unit for velocity)
  * N (kg*m/s<sup>2</sup>) (unit for force)
  * J (kg*m<sup>2</sup>/s^<sup>2</sup>) (Unit for energy)

### Scientific notation and metric multipliers
* **Scientific Notation:** Values which are written in the form a\*10^n

* Metric Multipliers

| Prefix | Abbreviation | Value  |
| ------ | ------------ | ------ |
| peta   | P            | 10^15  |
| tera   | T            | 10^12  |
| giga   | G            | 10^9   |
| mega   | M            | 10^6   |
| kilo   | k            | 10^3   |
| hecto  | h            | 10^2   |
| deca   | da           | 10^1   |
| -      | -            | -      |
| deci   | d            | 10^-1  |
| centi  | c            | 10^-2  |
| milli  | m            | 10^-3  |
| micro  | μ            | 10^-6  |
| nano   | n            | 10^-9  |
| pico   | p            | 10^-12 |
| femto  | f            | 10^-15 |

### Significant figure
* **Significant Figures** 
* Leading zeros
* Extra Notes:
  * In multiplication/division, give the answer to the lowest significant figure (S.F.).
  * In addition/subtraction, give the answer to the lowest decimal place (D.P.).

### Orders of Magnitude
* Orders of magnitude are given in powers of 10, likewise those given in the scientific notation section previously.

| Distance                            | Magnitude (m) | Order of magnitude |
| ----------------------------------- | ------------- | ------------------ |
| Diameter of the observable universe | 10^26         | 26                 |
| Diameter of the Milky Way galaxy    | 10^21         | 21                 |
| Diameter of the Solar System        | 10^13         | 13                 |
| Distance to the Sun                 | 10^11         | 11                 |
| Radius of the Earth                 | 10^7          | 7                  |
| Diameter of a hydrogen atom         | 10^-10        | 10                 |
| Diameter of a nucleus               | 10^-15        | 15                 |
| Diameter of a proton                | 10^-15        | 15                 |

| Mass                 | Magnitude (kg) | Order of magnitude |
| -------------------- | -------------- | ------------------ |
| The universe         | 10^53          | 53                 |
| The Milky Way galaxy | 10^41          | 41                 |
| The Sun              | 10^30          | 30                 |
| The Earth            | 10^24          | 24                 |
| A hydrogen atom      | 10^-27         | -27                |
| An electron          | 10^-30         | -30                |


| Time                 | Magnitude (s) | Order of magnitude |
| -------------------- | ------------- | ------------------ |
| Age of the universe  | 10^17         | 17                 |
| One year             | 10^7          | 7                  |
| One day              | 10^5          | 5                  |
| An hour              | 10^3          | 3                  |
| Period of heartheart | 10^0          | 0                  |


## 1.2 Uncertainty and errors
### Random and systematic errors:

| Random Error                                                                                             | Systematic error                                                                                                |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Caused by **fluctuation in measurements** centered around the true value (slight spread of measurements) | Caused by **fixed shifts in measurements** away from the true value.                                            |
| Can be **reduced** by doing multiple measurements                                                        | **Cannot be reduced** by averaging over repeated measurements.                                                  |
| **Not** caused by **bias**                                                                               | Caused by **bias**                                                                                              |
| Examples: <li>Fluctuations in room temperature</li><li>The noise in a circuit</li><li>Human error</li>   | Examples: <li>Equipment callibration error (ie. zero offset error)</li><li>Incorrect method of measurement</li> |

![diagram](https://school.is-inside.me/3PJVE4b1.png)

### Absolute, fractional and percentage uncertainties
* Physical measurements are sometimes expressed in the form x ± Δx. For example, 10±1 would mean a range from 9 to 11 for the measurement.

Δx = absolute uncertainty
Δx/x = fractional uncertainty
Δx/x * 100% = percentage uncertainty

| -                       | formula        | rule                                             |
| ----------------------- | -------------- | ------------------------------------------------ |
| Addition/Subtraction    | y=a±b          | Δy=Δa+Δb (sum of absolute uncertainties)         |
| Multiplication/Division | y=a*b or y=a/b | Δy/y=Δa/a+Δb/b (sum of fractional uncertainties) |
| Power                   | y=a^n          | Δy/y=                                            | n | Δa/a ( | n | times fractional uncertainty) |


### Error bars
* Error bars are bars on graphs which indicate uncertainties. They can be horizontal or vertical with the total length of two absolute uncertainties.
![Error bar memes](https://i2.wp.com/ibphysics.org/wp-content/uploads/2016/01/error_bars_by_velica.jpg?resize=300%2C225&ssl=1)

### Uncertainty of gradient and intercepts
* **Line of best fit:** The straight line drawn on a graph so that the average distance between the data points and the line is minimized.
* **Maximum/Minimum line:** The two lines with maximum possible slope and minimum possible slope given that they both pass through all the error bars.

![](https://i1.wp.com/ibphysics.org/wp-content/uploads/2016/01/aaeaaqaaaaaaaaj5aaaajgfkmgm3mgyzlwflngetndbmnc1hy2mxlthjogrhymzln2m5nw.png?resize=800%2C544&ssl=1)

* **The uncertainty in the intercepts of a straight line graph:** The difference between the intercepts of the line of best fit and the maximum/minimum line.

* **The uncertainty in the gradient:** The difference between the gradients of the line of best fit and the maximum/minimum line.

## 1.3 Vectors and scalars
* **Scalars:** A quantity which is defined by its magnitude only.	
* **Vectors:** A quantity which is defined by both is magnitude and direction.
* Combination and resolution of vectors
  * Vector addition and subtraction can be done by the parallelogram method or the head to tail method. Vectors that form a closed polygon (cycle) add up to zero.
![](https://i2.wp.com/ibphysics.org/wp-content/uploads/2016/01/vectors.gif?resize=240%2C200&ssl=1)
![](https://i2.wp.com/ibphysics.org/wp-content/uploads/2016/01/a-phy-linvec-dia03.gif?resize=328%2C183&ssl=1)







