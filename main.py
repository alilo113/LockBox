import tkinter as tk   # Correct import for tkinter
from tkinter import ttk

root = tk.Tk()  # Create main window
frm = ttk.Frame(root, padding=100)
ttk.Button(frm, text="Genarate Password").pack()
frm.pack()      # Make the frame visible

root.mainloop()  # Start the GUI event loop
