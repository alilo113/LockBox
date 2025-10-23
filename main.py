import tkinter as tk
from tkinter import ttk

# Create main window
root = tk.Tk()
root.title("LockBox - Password Manager")
root.geometry("450x400")
root.configure(bg="#2C3E50")  # Dark blue background

# Main frame
frm = ttk.Frame(root, padding=20)
frm.pack(expand=True)

# Style for ttk widgets
style = ttk.Style()
style.configure("TLabel", font=("Helvetica", 18), foreground="#ECF0F1", background="#2C3E50")
style.configure("TButton", font=("Helvetica", 14), padding=10)

# Title
ttk.Label(frm, text="🔒 LockBox", anchor="center").pack(pady=20)

# Buttons
ttk.Button(frm, text="Generate Password").pack(fill='x', pady=10)
ttk.Button(frm, text="View Saved Passwords").pack(fill='x', pady=10)
ttk.Button(frm, text="Delete Password").pack(fill='x', pady=10)
ttk.Button(frm, text="Exit", command=root.destroy).pack(fill='x', pady=10)

# Run the GUI loop
root.mainloop()