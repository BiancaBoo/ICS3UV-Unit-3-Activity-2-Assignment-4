/**
 * Author: Bianca Bertinato
 * Version: 1.0.0
 * Date: 2025-11-14
 * This program calculates interest rate
 */

package main

import (
	"fmt"
)

func main() {
	// Input initial value and interest rate
	var initialValue float64
	var interestRate float64

	fmt.Print("Enter the initial value: ")
	fmt.Scanln(&initialValue)

	fmt.Print("Enter the interest rate (%): ")
	fmt.Scanln(&interestRate)

	rate := interestRate / 100 

	// Table 
	fmt.Printf("%-5s %-15s %-15s %-15s\n", "Year", "Initial Value", "Interest Gained", "Current Value")
	fmt.Println("---------------------------------------------------------------")

	// Year 1
	interest1 := initialValue * rate
	current1 := initialValue + interest1
	fmt.Printf("%-5d $%-14.2f $%-14.2f $%-14.2f\n", 1, initialValue, interest1, current1)

	// Year 2
	interest2 := current1 * rate
	current2 := current1 + interest2
	fmt.Printf("%-5d $%-14.2f $%-14.2f $%-14.2f\n", 2, initialValue, interest2, current2)

	// Year 3
	interest3 := current2 * rate
	current3 := current2 + interest3
	fmt.Printf("%-5d $%-14.2f $%-14.2f $%-14.2f\n", 3, initialValue, interest3, current3)

	// Year 4
	interest4 := current3 * rate
	current4 := current3 + interest4
	fmt.Printf("%-5d $%-14.2f $%-14.2f $%-14.2f\n", 4, initialValue, interest4, current4)

	// Year 5
	interest5 := current4 * rate
	current5 := current4 + interest5
	fmt.Printf("%-5d $%-14.2f $%-14.2f $%-14.2f\n", 5, initialValue, interest5, current5)

	// Year 6
	interest6 := current5 * rate
	current6 := current5 + interest6
	fmt.Printf("%-5d $%-14.2f $%-14.2f $%-14.2f\n", 6, initialValue, interest6, current6)

	// Year 7
	interest7 := current6 * rate
	current7 := current6 + interest7
	fmt.Printf("%-5d $%-14.2f $%-14.2f $%-14.2f\n", 7, initialValue, interest7, current7)

	// Year 8
	interest8 := current7 * rate
	current8 := current7 + interest8
	fmt.Printf("%-5d $%-14.2f $%-14.2f $%-14.2f\n", 8, initialValue, interest8, current8)

	// Year 9
	interest9 := current8 * rate
	current9 := current8 + interest9
	fmt.Printf("%-5d $%-14.2f $%-14.2f $%-14.2f\n", 9, initialValue, interest9, current9)

	// Year 10
	interest10 := current9 * rate
	current10 := current9 + interest10
	fmt.Printf("%-5d $%-14.2f $%-14.2f $%-14.2f\n", 10, initialValue, interest10, current10)
}