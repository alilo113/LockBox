import random

passwordChars = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=',
    '{', '}', '[', ']', '|', ';', ':', '"', "'", '<', '>', ',', '.',
    '?', '/'
]

length = 30

def generatePassword():
    password = "";
    for i in range(length + 1):
        password += random.choice(passwordChars)
    
    return password

print(f"Generated Password: {generatePassword()}")