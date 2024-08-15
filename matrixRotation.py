
class Child:
    def __init__(self, name: None, parent: None):
        self.name = name
        self.parent = parent
    def introduction(self):
        print("Hello, my name is", self.name)


patrick = Child("Patrick")
billy = Child("Billy", patrick)
billy.parent = patrick
print(billy.parent.name)