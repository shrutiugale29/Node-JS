import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8])
arr1 = arr.reshape(4, 2)
print ('After reshaping having dimension 4x2:')
print (arr1)
print ('\n')


arr2 = arr.reshape(2, 4)
print ('After reshaping having dimension 2x4:')
print (arr2)
print ('\n')