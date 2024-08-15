##### PROMPT #####

# import numpy as np
# import random

# class Map:
#     def __init__(self, width, height):
#         self.width = width
#         self.height = height
#         self.data = np.empty((width, height), dtype=int, order='C')
        
#     def GenerateData(self):
#         for i in range(self.width):
#             for j in range(self.height):
#                 self.data[i][j] = random.randrange(0, 10)
    
#     def __str__(self):
#         ret = np.matrix(self.data)
#         ret = ret.__str__()
#         return ret

# map = Map(16, 16)

# map.GenerateData()

# print(map)

##### RESPONSE 1 #####

# import numpy as np
# import random

# class Map:
#     def __init__(self, width, height, octaves=6, scale=1.0, seed=None):
#         self.width = width
#         self.height = height
#         self.octaves = octaves
#         self.scale = scale
#         self.seed = seed
#         self.data = np.empty((width, height), dtype=float)
#         # self.GenerateData()

#     def GenerateData(self):
#         random.seed(self.seed)
#         for i in range(self.width):
#             for j in range(self.height):
#                 x = i / self.scale
#                 y = j / self.scale
#                 noise = 0.0
#                 for octave in range(self.octaves):
#                     frequency = 2 ** octave
#                     noise += random.random() * math.sin(x * frequency + random.random() * 2 * math.pi) * math.sin(y * frequency + random.random() * 2 * math.pi)
#                 self.data[i][j] = noise

#     def __str__(self):
#         ret = np.matrix(self.data)
#         ret = ret.__str__()
#         return ret

# map = Map(16, 16, octaves=6, scale=100.0)

# print(map)


##### RESPONSE 2 #####

# import numpy as np
# import random

# class Map:
#     def __init__(self, width, height):
#         self.width = width
#         self.height = height
#         self.data = np.empty((width, height), dtype=int, order='C')
        
#     def GenerateData(self):
#         # Initialize the corners of the map
#         self.data[0][0] = random.randint(0, 10)
#         self.data[0][-1] = random.randint(0, 10)
#         self.data[-1][0] = random.randint(0, 10)
#         self.data[-1][-1] = random.randint(0, 10)
        
#         # Generate the rest of the map using midpoint displacement
#         for i in range(self.width - 1):
#             for j in range(self.height - 1):
#                 # Calculate the midpoint of the square
#                 mid_x = (i + 0.5) * self.width / (self.width - 1)
#                 mid_y = (j + 0.5) * self.height / (self.height - 1)
                
#                 # Calculate the height of the midpoint
#                 mid_height = (self.data[i][j] + self.data[i + 1][j] + self.data[i][j + 1] + self.data[i + 1][j + 1]) / 4 + random.randint(-1, 1)
                
#                 # Set the height of the midpoint
#                 self.data[i][j] = mid_height
#                 self.data[i + 1][j] = mid_height
#                 self.data[i][j + 1] = mid_height
#                 self.data[i + 1][j + 1] = mid_height
        
#     def __str__(self):
#         ret = np.matrix(self.data)
#         ret = ret.__str__()
#         return ret

# map = Map(16, 16)

# map.GenerateData()

# print(map)