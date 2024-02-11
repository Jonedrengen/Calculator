import tkinter as tk


def addition(a, b):
    return a + b

def subtraction(a, b):
    return a - b

def multiplication(a, b):
    return a * b

def division(a, b):
    return a / b

def modulo(a, b):
    return a % b

def main():
    # while True: code keeps running, after each operation, it will ask for another operation
    while True:
        print("Welcome to the basic calculator")
        operation_type = input("which operation do you want to perform? (0 : exit, 1 : addition, 2 : subtraction, 3 : multiplication, 4 : division, 5 : modulo): ")
        if operation_type == "0":
            print("Thank you for using the calculator")
            break
        elif operation_type == "1":
            a = float(input("Enter the first number: "))
            b = float(input("Enter the second number: "))
            print(addition(a, b))
        elif operation_type == "2":
            a = float(input("Enter the first number: "))
            b = float(input("Enter the second number: "))
            print(subtraction(a, b))
        elif operation_type == "3":
            a = float(input("Enter the first number: "))
            b = float(input("Enter the second number: "))
            print(multiplication(a, b))
        elif operation_type == "4":
            a = float(input("Enter the first number: "))
            b = float(input("Enter the second number: "))
            print(division(a, b))
        elif operation_type == "5":
            a = float(input("Enter the first number: "))
            b = float(input("Enter the second number: "))
            print(f'the remainder when {a} is divided by {b} = {modulo(a, b)}')
        else:
            print(f'Invalid input {str(operation_type)}')

if __name__ == "__main__":
    main()