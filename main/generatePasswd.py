import random

passwordChars = ['a',"b","c" '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '|', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/']
length = 16

def generatePassword():
    password = "";
    for i in range(length):
        password += random.choice(passwordChars)
    
    return password

print(f"Genarated Password: {generatePassword()}")